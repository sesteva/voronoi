// https://observablehq.com/@trebor/utilities@319
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Utilities`
)});
  main.variable(observer("titelize")).define("titelize", function(){return(
string => {
  return string
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(
      /([^a-z0-9]|^)([a-z0-9])(?=[a-z0-9]{0})/g,
      (_, g1, g2) => g1 + g2.toUpperCase()
    );
}
)});
  main.variable(observer("log")).define("log", function(){return(
function log(valueContainer = {}) {
  const marker = "L:";
  const values =
    typeof valueContainer !== 'object'
      ? Array.from(arguments).map(d => [d, null, true])
      : Object.entries(valueContainer);

  //  console.log("values", values);

  const renderValue = (value, hide) =>
    hide ? null : `= ${value === undefined ? 'undefined' : value}`;

  const renderLog = items =>
    console.log.apply(this, items.filter(d => d !== null));

  if (values.length > 1) {
    console.group(marker);
    values.map(([key, value, hideValue]) =>
      renderLog([key, renderValue(value, hideValue)])
    );
    console.groupEnd();
  } else {
    const [key, value, hideValue] = values[0];
    renderLog([marker, key, renderValue(value, hideValue)]);
  }
}
)});
  main.variable(observer("computeTextWidth")).define("computeTextWidth", function(){return(
(text, fontStyle = "30pt Arial") => {
  const context = document.createElement("canvas").getContext("2d");
  context.font = fontStyle;
  return context.measureText(text).width;
}
)});
  main.variable(observer("computeTextHeight")).define("computeTextHeight", function(){return(
(fontStyle = "30pt Arial") => {
  const context = document.createElement("canvas").getContext("2d");
  context.font = fontStyle;
  return parseInt(context.font) * 1.14;
}
)});
  main.variable(observer()).define(["computeTextWidth","computeTextHeight","html"], function(computeTextWidth,computeTextHeight,html)
{
  //const testFont = "100px Courier New";
  //const testFont = "50pt Helvetica";
  const testFont = "100pt Arial";
  const text = "MM gjp bar ...";
  const width = computeTextWidth(text, testFont);
  const height = computeTextHeight(testFont);

  return html`
    <div style="display: flex;">
      <div>
        <div style="margin: 0px; padding: 0px; font: ${testFont}; background: lightgreen;">${text}</div>
        <div style="width: ${width}px; height: 20px; background: green;" />
      </div>
      </div>
      <div style="width: 20px; height: ${height}px; background: green;">
    </div>
  `;
}
);
  main.variable(observer("plotPoly")).define("plotPoly", ["d3"], function(d3){return(
(polygon, thick = 20, size = 100) => {
  const [x0, x1] = d3.extent(polygon.map(d => d[0]));
  const [y0, y1] = d3.extent(polygon.map(d => d[1]));

  const svg = d3
    .create("svg")
    .style("background-color", "#f8f8f8")
    .attr("width", size)
    .attr("height", size)
    .attr("viewBox", [
      x0 - thick * 2,
      y0 - thick * 2,
      x1 - x0 + thick * 2,
      y1 - y0 + thick * 2
    ]);

  const body = svg
    .append("g")
    .attr("transform", `translate(${[-thick, -thick]})`);

  body
    .append("path")
    .attr("d", d3.line()(polygon))
    .attr("stroke", "black")
    .attr("stroke-width", 20 / 2)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("fill", "none");

  body
    .selectAll("circle")
    .data(polygon)
    .enter()
    .append("circle")
    .attr("stroke", "none")
    .attr("r", 20)
    .attr("cx", d => d[0])
    .attr("cy", d => d[1])
    .attr("fill", "red");

  return svg.node();
}
)});
  main.variable(observer()).define(["JaroWinkler"], function(JaroWinkler){return(
JaroWinkler.distance("robert", "robert frog")
)});
  main.variable(observer("editDistance")).define("editDistance", ["JaroWinkler"], function(JaroWinkler){return(
(targetString, searchString) => {
  const targets = targetString.toLowerCase().split(' ');
  const searches = searchString.toLowerCase().split(' ');
  const count = targets.length;

  return (
    searches
      .map(search => {
        const scores = targets.map((target, idx) => [
          idx,
          JaroWinkler.distance(target, search)
        ]);
        const [idx, score] = scores.sort((a, b) => b[1] - a[1])[0];
        targets.splice(idx, 1);
        return score;
      })
      .reduce((sum, score) => sum + score, 0) / searches.length
  );
}
)});
  main.variable(observer("accumulateToArray")).define("accumulateToArray", function(){return(
(value, accumulator = []) => {
  accumulator.push(value);
  return accumulator;
}
)});
  main.variable(observer("tableToTree")).define("tableToTree", ["assert"], function(assert){return(
({ rows, rowToPath, accumulate, rootNodeId = "root" } = {}) => {
  const convertToChildArray = ({ id, childMap, data }) => {
    return {
      id,
      ...(childMap
        ? { children: Object.values(childMap).map(convertToChildArray) }
        : { data })
    };
  };

  const root = { id: rootNodeId, childMap: {} };
  const addPath = (node, row, [current, ...rest]) => {
    const atLeaf = rest.length === 0;

    // establish the instance of the "current" child object

    const child =
      node.childMap[current] ||
      ((node.childMap[current] = {
        id: current,
        ...(atLeaf ? { data: undefined } : { childMap: {} })
      }),
      node.childMap[current]);

    // of supposed to accumulate a value do so, otherwise throw an error if that child already exists

    if (accumulate) {
      child.data = accumulate(row, child.data);
    } else {
      assert(
        !(atLeaf && node.childMap[current].data),
        `At node "${current}" found two items with the same row path: ${rowToPath(
          row
        )}, and no accumulator specified.`
      );

      node.childMap[current].data = row;
    }

    if (!atLeaf) {
      addPath(child, row, rest);
    }
  };

  rows.forEach(row => addPath(root, row, rowToPath(row)));

  // convert the tree to with with a childMap to one with a children array

  const withChildren = convertToChildArray(root);

  // if the roo node has only one child, return that child otherwise return the default root node

  return withChildren.children.length === 1
    ? withChildren.children[0]
    : withChildren;
}
)});
  main.variable(observer("tableToMap")).define("tableToMap", ["assert"], function(assert){return(
({ rows, rowToId, accumulate } = {}) => {
  return rows.reduce((map, row, i) => {
    const id = rowToId(row, i);

    const entry = map[id];

    if (!entry) {
      map[id] = !!accumulate ? accumulate(row, undefined, i) : row;
    } else {
      assert(
        !!accumulate,
        `Two rows found with same ID "${id}", and no accumulator specified.`,
        map[id],
        row
      );

      map[id] = accumulate(row, map[id], i);
    }

    return map;
  }, {});
}
)});
  main.variable(observer("assert")).define("assert", function(){return(
(shouldBeTrue, errorMessage, ...rest) => {
  if (!shouldBeTrue) {
    throw new Error(errorMessage, ...rest);
  }
}
)});
  main.variable(observer("mapTap")).define("mapTap", function(){return(
(action = (d, i, a) => console.log("mapTap", d, i, a)) => {
  return (d, i, a) => {
    action(d, i, a);
    return d;
  };
}
)});
  main.variable(observer("thenTap")).define("thenTap", function(){return(
(action = result => console.log("thenTap", result)) => {
  return result => {
    action(result);
    return result;
  };
}
)});
  main.variable(observer("JaroWinkler")).define("JaroWinkler", function()
{
  const jaro_winkler = {};

  /* JS implementation of the strcmp95 C function written by
  Bill Winkler, George McLaughlin, Matt Jaro and Maureen Lynch,
  released in 1994 (http://web.archive.org/web/20100227020019/http://www.census.gov/geo/msb/stand/strcmp.c).
  a and b should be strings. Always performs case-insensitive comparisons
  and always adjusts for long strings. */
  jaro_winkler.distance = function(a, b) {
    if (!a || !b) {
      return 0.0;
    }

    a = a.trim().toUpperCase();
    b = b.trim().toUpperCase();
    var a_len = a.length;
    var b_len = b.length;
    var a_flag = [];
    var b_flag = [];
    var search_range = Math.floor(Math.max(a_len, b_len) / 2) - 1;
    var minv = Math.min(a_len, b_len);

    // Looking only within the search range, count and flag the matched pairs.
    var Num_com = 0;
    var yl1 = b_len - 1;
    for (var i = 0; i < a_len; i++) {
      var lowlim = i >= search_range ? i - search_range : 0;
      var hilim = i + search_range <= yl1 ? i + search_range : yl1;
      for (var j = lowlim; j <= hilim; j++) {
        if (b_flag[j] !== 1 && a[j] === b[i]) {
          a_flag[j] = 1;
          b_flag[i] = 1;
          Num_com++;
          break;
        }
      }
    }

    // Return if no characters in common
    if (Num_com === 0) {
      return 0.0;
    }

    // Count the number of transpositions
    var k = 0;
    var N_trans = 0;
    for (var i = 0; i < a_len; i++) {
      if (a_flag[i] === 1) {
        var j;
        for (j = k; j < b_len; j++) {
          if (b_flag[j] === 1) {
            k = j + 1;
            break;
          }
        }
        if (a[i] !== b[j]) {
          N_trans++;
        }
      }
    }
    N_trans = Math.floor(N_trans / 2);

    // Adjust for similarities in nonmatched characters
    var N_simi = 0;
    var adjwt = jaro_winkler.adjustments;
    if (minv > Num_com) {
      for (var i = 0; i < a_len; i++) {
        if (!a_flag[i]) {
          for (var j = 0; j < b_len; j++) {
            if (!b_flag[j]) {
              if (adjwt[a[i]] === b[j]) {
                N_simi += 3;
                b_flag[j] = 2;
                break;
              }
            }
          }
        }
      }
    }

    var Num_sim = N_simi / 10.0 + Num_com;

    // Main weight computation
    var weight =
      Num_sim / a_len + Num_sim / b_len + (Num_com - N_trans) / Num_com;
    weight = weight / 3;

    // Continue to boost the weight if the strings are similar
    if (weight > 0.7) {
      // Adjust for having up to the first 4 characters in common
      var j = minv >= 4 ? 4 : minv;
      var i;
      for (i = 0; i < j && a[i] === b[i]; i++) {}
      if (i) {
        weight += i * 0.1 * (1.0 - weight);
      }

      // Adjust for long strings.
      // After agreeing beginning chars, at least two more must agree
      // and the agreeing characters must be more than half of the
      // remaining characters.
      if (minv > 4 && Num_com > i + 1 && 2 * Num_com >= minv + i) {
        weight +=
          (1 - weight) * ((Num_com - i - 1) / (a_len * b_len - i * 2 + 2));
      }
    }

    return weight;
  };

  // The char adjustment table used above
  jaro_winkler.adjustments = {
    A: 'E',
    A: 'I',
    A: 'O',
    A: 'U',
    B: 'V',
    E: 'I',
    E: 'O',
    E: 'U',
    I: 'O',
    I: 'U',
    O: 'U',
    I: 'Y',
    E: 'Y',
    C: 'G',
    E: 'F',
    W: 'U',
    W: 'V',
    X: 'K',
    S: 'Z',
    X: 'S',
    Q: 'C',
    U: 'V',
    M: 'N',
    L: 'I',
    Q: 'O',
    P: 'R',
    I: 'J',
    '2': 'Z',
    '5': 'S',
    '8': 'B',
    '1': 'I',
    '1': 'L',
    '0': 'O',
    '0': 'Q',
    C: 'K',
    G: 'J',
    E: ' ',
    Y: ' ',
    S: ' '
  };

  return jaro_winkler;
}
);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
