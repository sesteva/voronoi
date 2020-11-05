// https://observablehq.com/@trebor/zoomable-voronoi-treemap@1966
import define1 from "./d5919f39de095c9c@319.js";
import define2 from "./abf5a722c906615a@2079.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("data")).define("data", ["d3"], async function (d3) {
    const flare = await d3.json("./flare.json");
    const values = d3
      .hierarchy(flare)
      .sum((d) => (d.children ? 0 : Math.random() * 10));
    console.log({ values });
    return values;
  });
  main
    .variable(observer("__exampleChart"))
    .define("__exampleChart", ["renderChart", "data", "width"], function (
      renderChart,
      data,
      width
    ) {
      return renderChart({
        data,
        size: { width, height: 400 },
      });
    });
  main
    .variable(observer("__style"))
    .define("__style", ["styles"], function (styles) {
      return styles;
    });
  main
    .variable(observer("renderChart"))
    .define(
      "renderChart",
      [
        "createDispatcher",
        "d3",
        "titelize",
        "html",
        "renderPath",
        "_",
        "renderMap",
      ],
      function (
        createDispatcher,
        d3,
        titelize,
        html,
        renderPath,
        _,
        renderMap
      ) {
        return async function* renderChart({
          data,
          dispatcher = createDispatcher(),
          colorScale = d3.scaleSequential(d3.interpolateTurbo),
          formatNumber = d3.format(",.0f"),
          getImage,
          getName = (d) => titelize(d.data.name),
          fontFamily = "Arial, Helvetica, sans-serif",
          getValue = (d) => d.value,
          ...rest
        }) {
          let focus = null;
          let hover = null;

          const renderComposit = () =>
            html`<div
              style="display: flex; flex-direction: column; font-family: ${fontFamily};"
            >
              ${map}${renderPath({
                colorScale,
                dispatcher,
                focus,
                formatNumber,
                getImage,
                getName,
                getValue,
                hover,
              })}
            </div>`;

          const createEventPromise = () =>
            new Promise((resolve) => {
              dispatcher.on("focus-gain.chart-join", (node) => {
                focus = node;
                resolve();
              });
              dispatcher.on("hover-gain.chart-join", (node) => {
                hover = node;
                resolve();
              });
              dispatcher.on("hover-lose.chart-join", () => {
                hover = null;
                _.debounce(resolve, 100)();
              });
            });

          const firstFocus = createEventPromise();

          const map = renderMap({
            colorScale,
            data,
            dispatcher,
            getImage,
            getName,
            getValue,
            ...rest,
          });

          await firstFocus;
          yield renderComposit();

          while (true) {
            await createEventPromise();
            yield renderComposit();
          }
        };
      }
    );
  main
    .variable(observer("renderPath"))
    .define(
      "renderPath",
      ["createDispatcher", "titelize", "html", "renderColorRamp"],
      function (createDispatcher, titelize, html, renderColorRamp) {
        return ({
          colorScale,
          dispatcher = createDispatcher(),
          focus,
          formatNumber,
          getImage,
          getName = (d) => titelize(d.data.name),
          getValue,
          hover,
        } = {}) => {
          const hoverPath = hover
            ? hover
                .ancestors()
                .reverse()
                .filter((d) => d.depth > focus.depth)
            : [];

          const focusPath = focus.ancestors().reverse();

          const path = [...focusPath, ...hoverPath];
          const renderElement = (node) => {
            const element = html`<div
              style="
          display: flex;
          align-items: center;
          margin: 0em 0.4em;
          cursor: ${node === focus ? "not-allowed" : "pointer"};
      "
            >
              <span
                style="display: flex; align-self: center; border-radius: 10%; overflow: hidden;"
              >
                ${getImage
                  ? html`<div
                      style="background: #666; width: 10px; height: 10px;"
                    />`
                  : renderColorRamp({
                      colorScale,
                      colorDomain: node.colorDomain,
                      width: 20,
                      height: 20,
                    })}
              </span>
              <span style="margin-left: 0.3em; font-weight: bold; "
                >${getName(node)}</span
              >
              <span style="margin-left: 0.2em;"
                >${formatNumber(getValue(node))}</span
              >
            </div>`;

            element.addEventListener("click", () =>
              dispatcher.call("focus", this, node)
            );
            return element;
          };

          return html`<div style="display: flex; margin-top: 0.5em;">
            ${path.map(renderElement)}
          </div>`;
        };
      }
    );
  main
    .variable(observer("renderMap"))
    .define(
      "renderMap",
      [
        "d3",
        "createDispatcher",
        "titelize",
        "width",
        "establishColor",
        "coordinatePolygons",
        "nodeEnter",
        "nodeUpdate",
      ],
      function (
        d3,
        createDispatcher,
        titelize,
        width,
        establishColor,
        coordinatePolygons,
        nodeEnter,
        nodeUpdate
      ) {
        return ({
          colorScale = d3.scaleSequential(d3.interpolateTurbo),
          createBaseShape = (width, height, upButtonSize, showUpButton) =>
            showUpButton
              ? [
                  [0, upButtonSize],
                  [upButtonSize, 0],
                  [width - 1, 0],
                  [width - 1, height - 1],
                  [0, height - 1],
                ]
              : [
                  [0, 0],
                  [width - 1, 0],
                  [width - 1, height - 1],
                  [0, height - 1],
                ],
          backgroundColor = "black",
          data,
          dispatcher = createDispatcher(),
          formatNumber = d3.format(",.0f"),
          getColor = (d) => colorScale(d.colorValue),
          getId = (d) => d.data.name,
          getImage = null,
          getName = (d) => titelize(d.data.name),
          getValue = (d) => d.value,
          isEqual = (a, b) => getId(a) === getId(b),
          margin = { top: 0, right: 0, bottom: 0, left: 0 },
          onFocus = () => {},
          onHover = () => {},
          phase1Duration = 1200,
          phase2Duration = 500,
          showUpButton = true,
          size = { width, height: 600 },
          strokeWidthRange = [15, 0.5],
          strokeWidth = d3.scalePow().exponent(1.2).range(strokeWidthRange),
          upButtonSize = 100,
        }) => {
          const [width, height] = [
            size.width - (margin.left + margin.right),
            size.height - (margin.top + margin.bottom),
          ];
          const baseShape = createBaseShape(
            width,
            height,
            upButtonSize,
            showUpButton
          );
          let current = null;

          const focusParent = () =>
            current.parent ? renderNode(current.parent) : null;

          dispatcher.on("focus", renderNode);

          document.addEventListener("keyup", ({ code, key }) => {
            if (code === "ArrowUp" || code === "Escape") {
              focusParent();
            }
          });

          const svg = d3
            .create("svg")
            .attr("viewBox", [
              0,
              0,
              width + margin.left + margin.right,
              height + margin.top + margin.bottom,
            ]);

          svg
            .append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .style("fill", backgroundColor);

          const voronoi = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + margin.left + "," + margin.top + ")"
            );

          if (showUpButton) {
            const upButton = svg
              .append("g")
              .classed("up-button", true)
              .attr("cursor", "pointer")
              .on("click", focusParent);

            upButton
              .append("path")
              .datum([
                [0, 0],
                [0, upButtonSize],
                [upButtonSize, 0],
              ])
              .attr("d", d3.line())
              .attr("cx", upButtonSize / 2)
              .attr("cy", upButtonSize / 2)
              .attr("r", upButtonSize / 2)
              .attr("fill", "white");

            upButton
              .append("text")
              .attr("fill", backgroundColor)
              .attr("font-size", "40px")
              .attr("font-weight", "bold")
              .attr("dx", "0.1em")
              .attr("dy", "1.1em")
              .text("UP");

            upButton.append("title");
          }

          establishColor(data);
          strokeWidth.domain(d3.extent(data.descendants(), (d) => d.depth));

          const computeRelatedness = (node, score = 1, map = { dummy: 0 }) => {
            if (!map[getId(node)] && !isEqual(node, current)) {
              map[getId(node)] = score;
              computeRelatedness(node.parent, score / 2, map);

              (node.children || []).forEach((child) =>
                computeRelatedness(child, score / 2, map)
              );
            }

            return map;
          };

          const opacityFactory = (node) => {
            const relatednessMap = computeRelatedness(node);
            const opacityScale = d3
              .scalePow()
              .exponent(0.5)
              .domain(d3.extent(Object.values(relatednessMap)))
              .range([0.3, 1]);

            return (d) => {
              const relatedness = relatednessMap[getId(d)];
              return relatedness ? opacityScale(relatedness) : 0.2;
            };
          };

          const handleHoverEnter = (node) => {
            dispatcher.call("hover-gain", this, node);
            if (!isEqual(node, current)) {
              onHover(node);
              const nodeOpacity = opacityFactory(node);
              voronoi
                .selectAll(".node")
                .filter((d) => d.height === 0)
                .attr("opacity", nodeOpacity);
            }
          };
          const handleHoverExit = (node) => {
            dispatcher.call("hover-lose", this);
            voronoi
              .selectAll(".node")
              .filter((d) => d.height === 0)
              .attr("opacity", 1);
          };
          const handleNodeClick = (node) => {
            const target =
              node !== current
                ? node.ancestors().find((d) => d.depth === current.depth + 1)
                : node.parent;

            if (target.height > 0) {
              renderNode(target);
            }
          };

          function renderNode(node) {
            if (current && isEqual(node, current)) return;
            dispatcher.call("focus-gain", this, node);
            if (current) {
              dispatcher.call("focus-lose", this, current);
            }

            onFocus(node);
            node.each((node) => (node.oldPolygon = node.polygon));

            if (showUpButton) {
              const upButton = svg
                .select(".up-button")
                .attr("cursor", node.depth === 0 ? "not-allowed" : "pointer");

              upButton
                .select("text")
                .attr("opacity", node.depth === 0 ? 0.5 : 1);

              upButton
                .select("title")
                .text(
                  node.depth === 0
                    ? ""
                    : `Click to select ${getName(node.parent)}`
                );
            }

            const voronoiTreeMap = d3
              .voronoiTreemap()
              .prng(new Math.seedrandom("a seed"))
              .clip(baseShape);

            voronoiTreeMap(node);
            node.each((node) => {
              const [x0, x1] = d3.extent(node.polygon, (d) => d[0]);
              const [y0, y1] = d3.extent(node.polygon, (d) => d[1]);

              node.simplePolygon = node.polygon;
              const width = x1 - x0;
              const height = y1 - y0;
              node.polyProps = {
                centroid: d3.polygonCentroid(node.simplePolygon),
                bounds: [
                  [x0, y0],
                  [x1, y1],
                ],
                width,
                height,
                aspect: height / width,
                max: d3.max([width, height]),
                min: d3.min([width, height]),
              };
              node.polygon = coordinatePolygons(node.oldPolygon, node.polygon);
            });

            let nodes = node.descendants().sort((a, b) => b.depth - a.depth);

            const nodeExit = (selection) => {
              selection.remove();
            };

            voronoi
              .selectAll(".node")
              .data(nodes, getId)
              .join(
                (selection) =>
                  nodeEnter({
                    selection,
                    backgroundColor,
                    current: node,
                    getColor,
                    getId,
                    getImage,
                    getName,
                    handleNodeClick,
                    handleHoverEnter,
                    handleHoverExit,
                    phase1Duration,
                    phase2Duration,
                    prevouse: current,
                    strokeWidth,
                  }),
                (selection) =>
                  nodeUpdate({
                    selection,
                    current: node,
                    getImage,
                    getName,
                    handleHoverEnter,
                    handleHoverExit,
                    phase1Duration,
                    phase2Duration,
                    strokeWidth,
                  }),
                nodeExit
              );

            current = node;
          }

          renderNode(data);

          return svg.node();
        };
      }
    );
  main
    .variable(observer("renderColorRamp"))
    .define("renderColorRamp", ["DOM", "d3"], function (DOM, d3) {
      return ({
        colorScale,
        colorDomain = [0, 1],
        n = 200,
        height = 20,
        width = 300,
      }) => {
        const canvas = DOM.canvas(n, 1);
        const context = canvas.getContext("2d");
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.imageRendering = "-moz-crisp-edges";
        canvas.style.imageRendering = "pixelated";
        const ab = d3
          .scaleLinear()
          .domain([0, n - 1])
          .range(colorDomain);

        for (let i = 0; i < n; ++i) {
          context.fillStyle = colorScale(ab(i));
          context.fillRect(i, 0, 1, 1);
        }
        return canvas;
      };
    });
  main.variable(observer()).define(["md"], function (md) {
    return md`
### D3 Join`;
  });
  main
    .variable(observer("nodeEnter"))
    .define(
      "nodeEnter",
      ["Promises", "d3", "showLabel", "appendLabel", "appendImages"],
      function (Promises, d3, showLabel, appendLabel, appendImages) {
        return ({
          backgroundColor,
          selection,
          current,
          getColor,
          getId,
          getImage,
          getName,
          handleNodeClick,
          handleHoverEnter,
          handleHoverExit,
          phase1Duration,
          phase2Duration,
          previouse,
          strokeWidth,
        }) => {
          Promises.delay(previouse === null ? 0 : phase1Duration).then(
            () => {
              const all = selection.append("g").classed("node", true);

              const t = d3.transition().duration(phase2Duration);

              t.end().then(
                () => {
                  all
                    .filter((d) => showLabel(d, current))
                    .each(function (datum, index) {
                      appendLabel(d3.select(this), datum, index, getName);
                    });

                  all
                    .filter((d) => !showLabel(d, current))
                    .select(".label")
                    .remove();
                },
                (reject) => console.error("reject foo", reject)
              );

              if (getImage) appendImages(all, getId, getImage);

              all
                .append("polygon")
                .classed("body", true)
                .attr("points", (d) => d.polygon)
                .attr("fill", (d) =>
                  getImage || d.height > 0 ? "none" : getColor(d)
                )
                .attr("stroke", backgroundColor)
                .attr("stroke-opacity", 1)
                .attr("stroke-width", 0)
                .attr("stroke-linejoin", "round")
                .attr("pointer-events", (d) =>
                  d.height === 0 ? "fill" : "none"
                )
                .attr("stroke-width", (d) => strokeWidth(d.depth));

              all
                .filter((d) => d.height === 0)
                .on("click", handleNodeClick)
                .on("mouseenter", handleHoverEnter)
                .on("mouseleave", handleHoverExit);
            },
            (reject) => console.error("reject bar", reject)
          );
        };
      }
    );
  main
    .variable(observer("appendLabel"))
    .define("appendLabel", ["DOM", "computeCenterlineLabel"], function (
      DOM,
      computeCenterlineLabel
    ) {
      return (selection, datum, i, getName) => {
        const { id, href } = DOM.uid("centerline"); // necessary for Firefox

        if (!datum.label) {
          datum.lable = computeCenterlineLabel({
            label: getName(datum),
            polygon: datum.simplePolygon,
            numPerimeterPoints: 10,
            simplification: 20,
            strategy: "high",
          });
        }

        const { centerline, offset, label, maxFontSize } = datum.lable;

        const labelG = selection
          .append("g")
          .classed("label", true)
          .style(
            "font-family",
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;"
          )
          .style("font-size", `${maxFontSize * 0.9}px`)
          .style("font-weight", 500)
          .style("user-select", "none")
          .style("letter-spacing", "0em")
          .style("text-transform", "uppercase")
          .style("text-shadow", "0 0 5px black")
          .attr("fill", "white")
          .attr("pointer-events", "none");

        labelG
          .append("path")
          .attr("id", id)
          .attr("d", centerline)
          .attr("visibility", "hidden");

        labelG

          .append("text")
          .attr("dy", "0.35em")
          .attr("opacity", 0.75)
          .append("textPath")
          .attr("xlink:href", href)
          .attr("startOffset", `${100 * offset}%`)
          .attr("text-anchor", "middle")
          .text(label);
      };
    });
  main
    .variable(observer("appendImages"))
    .define("appendImages", ["computeImagePosition", "d3"], function (
      computeImagePosition,
      d3
    ) {
      return (selection, getId, getImage) => {
        const image = selection.filter((d) => d.height === 0);

        const imageG = image.append("g").classed("image", true);

        imageG
          .append("clipPath")
          .attr("id", (d) => `${getId(d)}-clip`)
          .attr("pointer-events", "none")
          .attr(
            "transform",
            (d) => `translate(${d.polyProps.bounds[0].map((d) => d * -1)})`
          )
          .append("polygon")
          .attr("points", (d) => d.polygon);

        imageG
          .append("image")
          .attr("onload", function (d, i) {
            const image = new Image();
            image.onload = () => {
              d.imageProps = {
                width: image.width,
                height: image.height,
                aspect: image.height / image.width,
              };

              const { x, y, width, height } = computeImagePosition(
                d.imageProps,
                d.polyProps
              );

              const imageSelect = d3
                .select(this)
                .attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("visibility", "visible");
            };

            image.src = getImage(d, i);
          })
          .attr("clip-path", (d) => `url(#${getId(d)}-clip)`)
          .attr("transform", (d) => `translate(${d.polyProps.bounds[0]})`)
          .attr("visibility", "hidden")
          .attr("href", getImage);
      };
    });
  main
    .variable(observer("nodeUpdate"))
    .define(
      "nodeUpdate",
      ["d3", "showLabel", "appendLabel", "updateImages"],
      function (d3, showLabel, appendLabel, updateImages) {
        return ({
          selection,
          current,
          getImage,
          getName,
          handleHoverEnter,
          handleHoverExit,
          phase1Duration,
          phase2Duration,
          strokeWidth,
        }) => {
          const branches = selection
            .filter((d) => d.height > 0)
            .attr("visibility", "hidden");
          const leaves = selection.filter((d) => d.height === 0);
          const t = d3.transition("update-phase-1").duration(phase1Duration);

          selection
            .selectAll(".label")
            .filter((d) => !showLabel(d, current))
            .remove();

          t.end().then(
            () => {
              branches
                .attr("visibility", "visible")
                .select("polygon")
                .attr("points", (d) => d.polygon)
                .transition()
                .duration(phase2Duration)
                .attr("stroke-width", (d) => strokeWidth(d.depth));

              selection
                .filter((d) => showLabel(d, current))
                .each(function (datum, index) {
                  appendLabel(d3.select(this), datum, index, getName);
                });

              selection
                .selectAll(".label")
                .filter((d) => !showLabel(d, current))
                .remove();

              leaves
                .on("mouseenter", handleHoverEnter)
                .on("mouseleave", handleHoverExit);
            },
            (reject) => console.error("reject baz", reject)
          );

          leaves
            .on("mouseenter", null)
            .on("mouseleave", null)
            .attr("opacity", 1)
            .select(".body")
            .attr("stroke-width", (d) => strokeWidth(d.depth))
            .transition(t)
            .attr("points", (d) => d.polygon);

          if (getImage) updateImages(selection, t);
        };
      }
    );
  main
    .variable(observer("updateImages"))
    .define("updateImages", ["computeImagePosition", "d3"], function (
      computeImagePosition,
      d3
    ) {
      return (selection, t) => {
        const imageG = selection
          .filter((d) => d.height === 0 && !!d.imageProps)
          .selectAll(".image");

        imageG
          .select("clipPath")
          .transition(t)
          .attr(
            "transform",
            (d) => `translate(${d.polyProps.bounds[0].map((d) => d * -1)})`
          )
          .select("polygon")
          .attr("points", (d) => d.polygon);

        imageG
          .select("image")
          .transition(t)
          .attr("transform", (d) => `translate(${d.polyProps.bounds[0]})`)
          .each(function (d) {
            const { x, y, width, height } = computeImagePosition(
              d.imageProps,
              d.polyProps
            );

            d3.select(this)
              .transition(t)

              .attr("x", x)
              .attr("y", y)
              .attr("width", width)
              .attr("height", height);
          });
      };
    });
  main.variable(observer("showLabel")).define("showLabel", function () {
    return (node, current) => node.depth === current.depth + 1;
  });
  main.variable(observer()).define(["md"], function (md) {
    return md`
### Smooth Shape Transition`;
  });
  main
    .variable(observer("computeImagePosition"))
    .define("computeImagePosition", function () {
      return (imageProps, polyProps) => {
        const { aspect: iAspect, width: iWidth, height: iHeight } = imageProps;
        const { aspect: pAspect, width: pWidth, height: pHeight } = polyProps;
        const [x, y, width, height] =
          pAspect < iAspect
            ? [
                0,
                ((iAspect / pAspect) * pHeight - pHeight) / -2,
                pWidth,
                iHeight * (pWidth / iWidth),
              ]
            : [
                ((pAspect / iAspect) * pWidth - pWidth) / -2,
                0,
                iWidth * (pHeight / iHeight),
                pHeight,
              ];

        return {
          x,
          y,
          width,
          height,
        };
      };
    });
  main
    .variable(observer("coordinatePolygons"))
    .define(
      "coordinatePolygons",
      ["fixedPointCount", "computeCentroid", "computeAngle", "d3"],
      function (fixedPointCount, computeCentroid, computeAngle, d3) {
        return (source, target, pointCount = 20) => {
          const expandedPolygon = fixedPointCount(target, pointCount);

          if (!source || source.length === 0) return expandedPolygon;

          const sourceCentroid = computeCentroid(source);
          const targetCentroid = computeCentroid(expandedPolygon);

          const startTheta = computeAngle(sourceCentroid, source[0]);

          const pointWidthClosestTheta = expandedPolygon
            .map((point, i) => ({
              theta: Math.abs(computeAngle(targetCentroid, point)),
              index: i,
            }))
            .sort((a, b) => a.theta - b.theta)[0].index;

          const coordinatedPolygon = [
            ...expandedPolygon.slice(pointWidthClosestTheta),
            ...expandedPolygon.slice(0, pointWidthClosestTheta),
          ];

          return d3.polygonArea(source) * d3.polygonArea(coordinatedPolygon) < 0
            ? coordinatedPolygon.reverse()
            : coordinatedPolygon;
        };
      }
    );
  main
    .variable(observer("computeCentroid"))
    .define("computeCentroid", function () {
      return (shape) =>
        shape
          .reduce(([xSum, ySum], [x, y]) => [xSum + x, ySum + y], [0, 0])
          .map((d) => d / shape.length);
    });
  main.variable(observer("computeAngle")).define("computeAngle", function () {
    return ([x0, y0], [x1, y1]) => Math.atan2(y1 - y0, x1 - x0);
  });
  main
    .variable(observer("establishColor"))
    .define("establishColor", ["d3"], function (d3) {
      return (root, domain = [0, 1], getWeight = (d) => d.value) => {
        const _establishColor = (node, domain) => {
          node.colorDomain = domain;
          node.colorValue = d3.sum(domain) / 2;
          if (node.children) {
            const sum = d3.sum(node.children.map(getWeight));
            const scale = d3.scaleLinear().domain([0, sum]).range(domain);

            (node.children || [])
              //.sort((a, b) => getWeight(a) - getWeight(b))
              .reduce((sum, child) => {
                const progress = sum + getWeight(child);
                _establishColor(child, [sum, progress].map(scale));
                return progress;
              }, 0);
          }
        };

        _establishColor(root, domain);
      };
    });
  main
    .variable(observer("createMeasurablePath"))
    .define("createMeasurablePath", ["d3", "DOM"], function (d3, DOM) {
      return (points) =>
        d3
          .select(DOM.svg(1, 1))
          .append("path")
          .datum(points)
          .attr("d", d3.line())
          .node();
    });
  main
    .variable(observer("fixedPointCount"))
    .define(
      "fixedPointCount",
      ["createMeasurablePath", "computeDistances", "d3"],
      function (createMeasurablePath, computeDistances, d3) {
        return (shape, count) => {
          const measurablePath = createMeasurablePath(shape);

          const newPointCount = count - shape.length + 1;

          if (count < 1) return shape;

          const distances = computeDistances(shape);
          const length = distances[distances.length - 1];

          const distancePoints = distances.map((distance, i) => ({
            distance,
            point: shape[i],
          }));

          const positionScale = d3
            .scaleLinear()
            .domain([0, newPointCount - 1])
            .range([0.001, length]);

          return d3.range(newPointCount).reduce((points, index) => {
            const position = positionScale(index);
            while (
              distancePoints.length > 0 &&
              position > distancePoints[0].distance
            ) {
              points.push(distancePoints[0].point);
              distancePoints.shift();
            }
            const { x, y } = measurablePath.getPointAtLength(position);
            points.push([x, y]);
            return points;
          }, []);
        };
      }
    );
  main
    .variable(observer("computeDistance"))
    .define("computeDistance", function () {
      return (coord1, coord2) => {
        var distX = coord2[0] - coord1[0];
        var distY = coord2[1] - coord1[1];
        return Math.sqrt(distX * distX + distY * distY);
      };
    });
  main
    .variable(observer("computeDistances"))
    .define("computeDistances", ["computeDistance"], function (
      computeDistance
    ) {
      return (coordinates) => {
        return coordinates.reduce((distances, coordinate, i) => {
          const value =
            i === 0
              ? 0
              : distances[i - 1] +
                computeDistance(coordinates[i - 1], coordinate);
          distances.push(value);
          return distances;
        }, []);
      };
    });
  main
    .variable(observer("createDispatcher"))
    .define("createDispatcher", ["d3"], function (d3) {
      return () =>
        d3.dispatch(
          "hover-gain",
          "hover-lose",
          "focus",
          "focus-gain",
          "focus-lose"
        );
    });
  main.variable(observer()).define(["md"], function (md) {
    return md`
## Libraries`;
  });
  const child1 = runtime.module(define1);
  main.import("titelize", child1);
  const child2 = runtime.module(define2);
  main.import("computeCenterlineLabel", child2);
  main.import("styles", child2);
  main.variable(observer("d3")).define("d3", ["require"], function (require) {
    return require("d3@5", "d3-voronoi-treemap", "seedrandom@2.4.3/seedrandom.min.js");
  });
  main.variable(observer("_")).define("_", ["require"], function (require) {
    return require("lodash");
  });
  return main;
}
