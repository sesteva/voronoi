(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _AwaitValue(value) {
    this.wrapped = value;
  }

  function _AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        var wrappedAwait = value instanceof _AwaitValue;
        Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
          if (wrappedAwait) {
            resume(key === "return" ? "return" : "next", arg);
            return;
          }

          settle(result.done ? "return" : "normal", arg);
        }, function (err) {
          resume("throw", err);
        });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  _AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  _AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  _AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }

  function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n    <div style=\"display: flex;\">\n      <div>\n        <div style=\"margin: 0px; padding: 0px; font: ", "; background: lightgreen;\">", "</div>\n        <div style=\"width: ", "px; height: 20px; background: green;\" />\n      </div>\n      </div>\n      <div style=\"width: 20px; height: ", "px; background: green;\">\n    </div>\n  "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["# Utilities"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  // https://observablehq.com/@trebor/utilities@319
  function define(runtime, observer) {
    var main = runtime.module();
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject());
    });
    main.variable(observer("titelize")).define("titelize", function () {
      return function (string) {
        return string.replace(/_/g, ' ').toLowerCase().replace(/([^a-z0-9]|^)([a-z0-9])(?=[a-z0-9]{0})/g, function (_, g1, g2) {
          return g1 + g2.toUpperCase();
        });
      };
    });
    main.variable(observer("log")).define("log", function () {
      return function log() {
        var _this = this;

        var valueContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var marker = "L:";
        var values = _typeof(valueContainer) !== 'object' ? Array.from(arguments).map(function (d) {
          return [d, null, true];
        }) : Object.entries(valueContainer); //  console.log("values", values);

        var renderValue = function renderValue(value, hide) {
          return hide ? null : "= ".concat(value === undefined ? 'undefined' : value);
        };

        var renderLog = function renderLog(items) {
          return console.log.apply(_this, items.filter(function (d) {
            return d !== null;
          }));
        };

        if (values.length > 1) {
          console.group(marker);
          values.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                key = _ref2[0],
                value = _ref2[1],
                hideValue = _ref2[2];

            return renderLog([key, renderValue(value, hideValue)]);
          });
          console.groupEnd();
        } else {
          var _values$ = _slicedToArray(values[0], 3),
              key = _values$[0],
              value = _values$[1],
              hideValue = _values$[2];

          renderLog([marker, key, renderValue(value, hideValue)]);
        }
      };
    });
    main.variable(observer("computeTextWidth")).define("computeTextWidth", function () {
      return function (text) {
        var fontStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "30pt Arial";
        var context = document.createElement("canvas").getContext("2d");
        context.font = fontStyle;
        return context.measureText(text).width;
      };
    });
    main.variable(observer("computeTextHeight")).define("computeTextHeight", function () {
      return function () {
        var fontStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "30pt Arial";
        var context = document.createElement("canvas").getContext("2d");
        context.font = fontStyle;
        return parseInt(context.font) * 1.14;
      };
    });
    main.variable(observer()).define(["computeTextWidth", "computeTextHeight", "html"], function (computeTextWidth, computeTextHeight, html) {
      //const testFont = "100px Courier New";
      //const testFont = "50pt Helvetica";
      var testFont = "100pt Arial";
      var text = "MM gjp bar ...";
      var width = computeTextWidth(text, testFont);
      var height = computeTextHeight(testFont);
      return html(_templateObject2(), testFont, text, width, height);
    });
    main.variable(observer("plotPoly")).define("plotPoly", ["d3"], function (d3) {
      return function (polygon) {
        var thick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
        var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        var _d3$extent = d3.extent(polygon.map(function (d) {
          return d[0];
        })),
            _d3$extent2 = _slicedToArray(_d3$extent, 2),
            x0 = _d3$extent2[0],
            x1 = _d3$extent2[1];

        var _d3$extent3 = d3.extent(polygon.map(function (d) {
          return d[1];
        })),
            _d3$extent4 = _slicedToArray(_d3$extent3, 2),
            y0 = _d3$extent4[0],
            y1 = _d3$extent4[1];

        var svg = d3.create("svg").style("background-color", "#f8f8f8").attr("width", size).attr("height", size).attr("viewBox", [x0 - thick * 2, y0 - thick * 2, x1 - x0 + thick * 2, y1 - y0 + thick * 2]);
        var body = svg.append("g").attr("transform", "translate(".concat([-thick, -thick], ")"));
        body.append("path").attr("d", d3.line()(polygon)).attr("stroke", "black").attr("stroke-width", 20 / 2).attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("fill", "none");
        body.selectAll("circle").data(polygon).enter().append("circle").attr("stroke", "none").attr("r", 20).attr("cx", function (d) {
          return d[0];
        }).attr("cy", function (d) {
          return d[1];
        }).attr("fill", "red");
        return svg.node();
      };
    });
    main.variable(observer()).define(["JaroWinkler"], function (JaroWinkler) {
      return JaroWinkler.distance("robert", "robert frog");
    });
    main.variable(observer("editDistance")).define("editDistance", ["JaroWinkler"], function (JaroWinkler) {
      return function (targetString, searchString) {
        var targets = targetString.toLowerCase().split(' ');
        var searches = searchString.toLowerCase().split(' ');
        var count = targets.length;
        return searches.map(function (search) {
          var scores = targets.map(function (target, idx) {
            return [idx, JaroWinkler.distance(target, search)];
          });

          var _scores$sort$ = _slicedToArray(scores.sort(function (a, b) {
            return b[1] - a[1];
          })[0], 2),
              idx = _scores$sort$[0],
              score = _scores$sort$[1];

          targets.splice(idx, 1);
          return score;
        }).reduce(function (sum, score) {
          return sum + score;
        }, 0) / searches.length;
      };
    });
    main.variable(observer("accumulateToArray")).define("accumulateToArray", function () {
      return function (value) {
        var accumulator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        accumulator.push(value);
        return accumulator;
      };
    });
    main.variable(observer("tableToTree")).define("tableToTree", ["assert"], function (assert) {
      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            rows = _ref3.rows,
            rowToPath = _ref3.rowToPath,
            accumulate = _ref3.accumulate,
            _ref3$rootNodeId = _ref3.rootNodeId,
            rootNodeId = _ref3$rootNodeId === void 0 ? "root" : _ref3$rootNodeId;

        var convertToChildArray = function convertToChildArray(_ref4) {
          var id = _ref4.id,
              childMap = _ref4.childMap,
              data = _ref4.data;
          return _objectSpread2({
            id: id
          }, childMap ? {
            children: Object.values(childMap).map(convertToChildArray)
          } : {
            data: data
          });
        };

        var root = {
          id: rootNodeId,
          childMap: {}
        };

        var addPath = function addPath(node, row, _ref5) {
          var _ref6 = _toArray(_ref5),
              current = _ref6[0],
              rest = _ref6.slice(1);

          var atLeaf = rest.length === 0; // establish the instance of the "current" child object

          var child = node.childMap[current] || (node.childMap[current] = _objectSpread2({
            id: current
          }, atLeaf ? {
            data: undefined
          } : {
            childMap: {}
          }), node.childMap[current]); // of supposed to accumulate a value do so, otherwise throw an error if that child already exists

          if (accumulate) {
            child.data = accumulate(row, child.data);
          } else {
            assert(!(atLeaf && node.childMap[current].data), "At node \"".concat(current, "\" found two items with the same row path: ").concat(rowToPath(row), ", and no accumulator specified."));
            node.childMap[current].data = row;
          }

          if (!atLeaf) {
            addPath(child, row, rest);
          }
        };

        rows.forEach(function (row) {
          return addPath(root, row, rowToPath(row));
        }); // convert the tree to with with a childMap to one with a children array

        var withChildren = convertToChildArray(root); // if the roo node has only one child, return that child otherwise return the default root node

        return withChildren.children.length === 1 ? withChildren.children[0] : withChildren;
      };
    });
    main.variable(observer("tableToMap")).define("tableToMap", ["assert"], function (assert) {
      return function () {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            rows = _ref7.rows,
            rowToId = _ref7.rowToId,
            accumulate = _ref7.accumulate;

        return rows.reduce(function (map, row, i) {
          var id = rowToId(row, i);
          var entry = map[id];

          if (!entry) {
            map[id] = !!accumulate ? accumulate(row, undefined, i) : row;
          } else {
            assert(!!accumulate, "Two rows found with same ID \"".concat(id, "\", and no accumulator specified."), map[id], row);
            map[id] = accumulate(row, map[id], i);
          }

          return map;
        }, {});
      };
    });
    main.variable(observer("assert")).define("assert", function () {
      return function (shouldBeTrue, errorMessage) {
        if (!shouldBeTrue) {
          for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            rest[_key - 2] = arguments[_key];
          }

          throw _construct(Error, [errorMessage].concat(rest));
        }
      };
    });
    main.variable(observer("mapTap")).define("mapTap", function () {
      return function () {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (d, i, a) {
          return console.log("mapTap", d, i, a);
        };
        return function (d, i, a) {
          action(d, i, a);
          return d;
        };
      };
    });
    main.variable(observer("thenTap")).define("thenTap", function () {
      return function () {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (result) {
          return console.log("thenTap", result);
        };
        return function (result) {
          action(result);
          return result;
        };
      };
    });
    main.variable(observer("JaroWinkler")).define("JaroWinkler", function () {
      var _jaro_winkler$adjustm;

      var jaro_winkler = {};
      /* JS implementation of the strcmp95 C function written by
      Bill Winkler, George McLaughlin, Matt Jaro and Maureen Lynch,
      released in 1994 (http://web.archive.org/web/20100227020019/http://www.census.gov/geo/msb/stand/strcmp.c).
      a and b should be strings. Always performs case-insensitive comparisons
      and always adjusts for long strings. */

      jaro_winkler.distance = function (a, b) {
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
        var minv = Math.min(a_len, b_len); // Looking only within the search range, count and flag the matched pairs.

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
        } // Return if no characters in common


        if (Num_com === 0) {
          return 0.0;
        } // Count the number of transpositions


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

        N_trans = Math.floor(N_trans / 2); // Adjust for similarities in nonmatched characters

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

        var Num_sim = N_simi / 10.0 + Num_com; // Main weight computation

        var weight = Num_sim / a_len + Num_sim / b_len + (Num_com - N_trans) / Num_com;
        weight = weight / 3; // Continue to boost the weight if the strings are similar

        if (weight > 0.7) {
          // Adjust for having up to the first 4 characters in common
          var j = minv >= 4 ? 4 : minv;
          var i;

          for (i = 0; i < j && a[i] === b[i]; i++) {}

          if (i) {
            weight += i * 0.1 * (1.0 - weight);
          } // Adjust for long strings.
          // After agreeing beginning chars, at least two more must agree
          // and the agreeing characters must be more than half of the
          // remaining characters.


          if (minv > 4 && Num_com > i + 1 && 2 * Num_com >= minv + i) {
            weight += (1 - weight) * ((Num_com - i - 1) / (a_len * b_len - i * 2 + 2));
          }
        }

        return weight;
      }; // The char adjustment table used above


      jaro_winkler.adjustments = (_jaro_winkler$adjustm = {
        A: 'E'
      }, _defineProperty(_jaro_winkler$adjustm, "A", 'I'), _defineProperty(_jaro_winkler$adjustm, "A", 'O'), _defineProperty(_jaro_winkler$adjustm, "A", 'U'), _defineProperty(_jaro_winkler$adjustm, "B", 'V'), _defineProperty(_jaro_winkler$adjustm, "E", 'I'), _defineProperty(_jaro_winkler$adjustm, "E", 'O'), _defineProperty(_jaro_winkler$adjustm, "E", 'U'), _defineProperty(_jaro_winkler$adjustm, "I", 'O'), _defineProperty(_jaro_winkler$adjustm, "I", 'U'), _defineProperty(_jaro_winkler$adjustm, "O", 'U'), _defineProperty(_jaro_winkler$adjustm, "I", 'Y'), _defineProperty(_jaro_winkler$adjustm, "E", 'Y'), _defineProperty(_jaro_winkler$adjustm, "C", 'G'), _defineProperty(_jaro_winkler$adjustm, "E", 'F'), _defineProperty(_jaro_winkler$adjustm, "W", 'U'), _defineProperty(_jaro_winkler$adjustm, "W", 'V'), _defineProperty(_jaro_winkler$adjustm, "X", 'K'), _defineProperty(_jaro_winkler$adjustm, "S", 'Z'), _defineProperty(_jaro_winkler$adjustm, "X", 'S'), _defineProperty(_jaro_winkler$adjustm, "Q", 'C'), _defineProperty(_jaro_winkler$adjustm, "U", 'V'), _defineProperty(_jaro_winkler$adjustm, "M", 'N'), _defineProperty(_jaro_winkler$adjustm, "L", 'I'), _defineProperty(_jaro_winkler$adjustm, "Q", 'O'), _defineProperty(_jaro_winkler$adjustm, "P", 'R'), _defineProperty(_jaro_winkler$adjustm, "I", 'J'), _defineProperty(_jaro_winkler$adjustm, '2', 'Z'), _defineProperty(_jaro_winkler$adjustm, '5', 'S'), _defineProperty(_jaro_winkler$adjustm, '8', 'B'), _defineProperty(_jaro_winkler$adjustm, '1', 'I'), _defineProperty(_jaro_winkler$adjustm, "1", 'L'), _defineProperty(_jaro_winkler$adjustm, '0', 'O'), _defineProperty(_jaro_winkler$adjustm, "0", 'Q'), _defineProperty(_jaro_winkler$adjustm, "C", 'K'), _defineProperty(_jaro_winkler$adjustm, "G", 'J'), _defineProperty(_jaro_winkler$adjustm, "E", ' '), _defineProperty(_jaro_winkler$adjustm, "Y", ' '), _defineProperty(_jaro_winkler$adjustm, "S", ' '), _jaro_winkler$adjustm);
      return jaro_winkler;
    });
    main.variable(observer("d3")).define("d3", ["require"], function (require) {
      return require("d3@5");
    });
    return main;
  }

  function _templateObject49() {
    var data = _taggedTemplateLiteral(["*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*"]);

    _templateObject49 = function _templateObject49() {
      return data;
    };

    return data;
  }

  function _templateObject48() {
    var data = _taggedTemplateLiteral(["License: [MIT](https://opensource.org/licenses/MIT)"]);

    _templateObject48 = function _templateObject48() {
      return data;
    };

    return data;
  }

  function _templateObject47() {
    var data = _taggedTemplateLiteral(["<div style=\"font-size: 0.85rem; font-style: italic; margin-top: 3px;\">", "</div>"]);

    _templateObject47 = function _templateObject47() {
      return data;
    };

    return data;
  }

  function _templateObject46() {
    var data = _taggedTemplateLiteral(["<div style=\"font: 700 0.9rem sans-serif; margin-bottom: 3px;\">", "</div>"]);

    _templateObject46 = function _templateObject46() {
      return data;
    };

    return data;
  }

  function _templateObject45() {
    var data = _taggedTemplateLiteral(["<output name=output style=\"font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;\"></output>"]);

    _templateObject45 = function _templateObject45() {
      return data;
    };

    return data;
  }

  function _templateObject44() {
    var data = _taggedTemplateLiteral(["<input name=submit type=submit style=\"margin: 0 0.75em\" value=\"", "\" />"]);

    _templateObject44 = function _templateObject44() {
      return data;
    };

    return data;
  }

  function _templateObject43() {
    var data = _taggedTemplateLiteral(["<form>\n\t<input name=input type=", " />\n  </form>"]);

    _templateObject43 = function _templateObject43() {
      return data;
    };

    return data;
  }

  function _templateObject42() {
    var data = _taggedTemplateLiteral(["<div></div>"]);

    _templateObject42 = function _templateObject42() {
      return data;
    };

    return data;
  }

  function _templateObject41() {
    var data = _taggedTemplateLiteral(["---\n## Wishlist (Send suggestions, please!)\n\n* 3D coordinate input (for say, positioning a camera in a WebGL sketch)\n* Geocoder search with location autocomplete that returns longitude and latitude.\n* Degrees or radians input, for circular things, or angles.\n* A dimensions input, or a box-model input, with margin (and optionally, padding).\n* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.\n* Drag and drop file upload input.\n* Alternative coordinate inputs, e.g. Right Ascension, Declination.\n* Other useful formatting options.\n\n---"]);

    _templateObject41 = function _templateObject41() {
      return data;
    };

    return data;
  }

  function _templateObject40() {
    var data = _taggedTemplateLiteral(["---\n## Passwords\n\n~~~js\nimport {password} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject40 = function _templateObject40() {
      return data;
    };

    return data;
  }

  function _templateObject39() {
    var data = _taggedTemplateLiteral(["---\n## Numbers\n\n~~~js\nimport {number} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject39 = function _templateObject39() {
      return data;
    };

    return data;
  }

  function _templateObject38() {
    var data = _taggedTemplateLiteral(["<label style=\"display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;\">\n           ", "\n           ", "\n          </label>"]);

    _templateObject38 = function _templateObject38() {
      return data;
    };

    return data;
  }

  function _templateObject37() {
    var data = _taggedTemplateLiteral(["<input type=checkbox name=input ", " style=\"vertical-align: top; ", "\" />"]);

    _templateObject37 = function _templateObject37() {
      return data;
    };

    return data;
  }

  function _templateObject36() {
    var data = _taggedTemplateLiteral(["\n      <form>\n        ", "\n      </form>\n    "]);

    _templateObject36 = function _templateObject36() {
      return data;
    };

    return data;
  }

  function _templateObject35() {
    var data = _taggedTemplateLiteral(["---\n## Checkboxes\n\n~~~js\nimport {checkbox} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject35 = function _templateObject35() {
      return data;
    };

    return data;
  }

  function _templateObject34() {
    var data = _taggedTemplateLiteral(["\n          <label style=\"display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;\">\n           ", "\n           ", "\n          </label>"]);

    _templateObject34 = function _templateObject34() {
      return data;
    };

    return data;
  }

  function _templateObject33() {
    var data = _taggedTemplateLiteral(["<input type=radio name=input ", " style=\"vertical-align: top; ", "\" />"]);

    _templateObject33 = function _templateObject33() {
      return data;
    };

    return data;
  }

  function _templateObject32() {
    var data = _taggedTemplateLiteral(["\n      <form>\n        ", "\n      </form>\n    "]);

    _templateObject32 = function _templateObject32() {
      return data;
    };

    return data;
  }

  function _templateObject31() {
    var data = _taggedTemplateLiteral(["---\n## Radio Buttons\n\n~~~js\nimport {radio} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject31 = function _templateObject31() {
      return data;
    };

    return data;
  }

  function _templateObject30() {
    var data = _taggedTemplateLiteral(["<form><textarea style=\"display: block; font-size: 0.8em;\" name=input>", "</textarea></form>"]);

    _templateObject30 = function _templateObject30() {
      return data;
    };

    return data;
  }

  function _templateObject29() {
    var data = _taggedTemplateLiteral(["---\n## Textareas\n\n~~~js\nimport {textarea} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject29 = function _templateObject29() {
      return data;
    };

    return data;
  }

  function _templateObject28() {
    var data = _taggedTemplateLiteral(["---\n## Text Inputs\n\n~~~js\nimport {text} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject28 = function _templateObject28() {
      return data;
    };

    return data;
  }

  function _templateObject27() {
    var data = _taggedTemplateLiteral(["<img height=\"125px\" style=\"margin: 2px;\" />"]);

    _templateObject27 = function _templateObject27() {
      return data;
    };

    return data;
  }

  function _templateObject26() {
    var data = _taggedTemplateLiteral(["<div>"]);

    _templateObject26 = function _templateObject26() {
      return data;
    };

    return data;
  }

  function _templateObject25() {
    var data = _taggedTemplateLiteral(["---\n## File Upload\n*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*\n\n`import {file} from \"@jashkenas/inputs\"`"], ["---\n## File Upload\n*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*\n\n\\`import {file} from \"@jashkenas/inputs\"\\`"]);

    _templateObject25 = function _templateObject25() {
      return data;
    };

    return data;
  }

  function _templateObject24() {
    var data = _taggedTemplateLiteral([" ---\n## Times\n\n*value: a HH:MM:SS formatted string: * `\"09:30:45\"`\n<br>*(Time values are always in 24-hour format)*\n\n~~~js\nimport {time} from \"@jashkenas/inputs\"\n~~~"], [" ---\n## Times\n\n*value: a HH:MM:SS formatted string: * \\`\"09:30:45\"\\`\n<br>*(Time values are always in 24-hour format)*\n\n~~~js\nimport {time} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject24 = function _templateObject24() {
      return data;
    };

    return data;
  }

  function _templateObject23() {
    var data = _taggedTemplateLiteral([" ---\n## Dates\n\n*value: a YYYY-MM-DD formatted string: * `\"2016-11-08\"` \n\n~~~js\nimport {date} from \"@jashkenas/inputs\"\n~~~"], [" ---\n## Dates\n\n*value: a YYYY-MM-DD formatted string: * \\`\"2016-11-08\"\\` \n\n~~~js\nimport {date} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject23 = function _templateObject23() {
      return data;
    };

    return data;
  }

  function _templateObject22() {
    var data = _taggedTemplateLiteral(["<div style=\"position: absolute; width: ", "px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;\">\n            <span style=\"color: #777;\">Longitude:</span> ", "\n            &nbsp; &nbsp; \n            <span style=\"color: #777;\">Latitude:</span> ", " \n          </div>"]);

    _templateObject22 = function _templateObject22() {
      return data;
    };

    return data;
  }

  function _templateObject21() {
    var data = _taggedTemplateLiteral(["<form style=\"width: ", "px;\"></form>"]);

    _templateObject21 = function _templateObject21() {
      return data;
    };

    return data;
  }

  function _templateObject20() {
    var data = _taggedTemplateLiteral([" ---\n## U.S.A. Map Coordinates\n\n*value: an array pair of `[longitude, latitude]`, e.g. * `[-122.27, 37.87]` \n\n~~~js\nimport {usaMapCoordinates} from \"@jashkenas/inputs\"\n~~~"], [" ---\n## U.S.A. Map Coordinates\n\n*value: an array pair of \\`[longitude, latitude]\\`, e.g. * \\`[-122.27, 37.87]\\` \n\n~~~js\nimport {usaMapCoordinates} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject20 = function _templateObject20() {
      return data;
    };

    return data;
  }

  function _templateObject19() {
    var data = _taggedTemplateLiteral(["<div style=\"width: ", "px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;\">\n            <span style=\"color: #777;\">Longitude:</span> ", "\n            &nbsp; &nbsp; \n            <span style=\"color: #777;\">Latitude:</span> ", " \n          </div>"]);

    _templateObject19 = function _templateObject19() {
      return data;
    };

    return data;
  }

  function _templateObject18() {
    var data = _taggedTemplateLiteral(["<form style=\"width: ", "px;\"></form>"]);

    _templateObject18 = function _templateObject18() {
      return data;
    };

    return data;
  }

  function _templateObject17() {
    var data = _taggedTemplateLiteral([" ---\n## World Map Coordinates\n\n*value: an array pair of `[longitude, latitude]`, e.g. * `[-122.27, 37.87]` \n\n~~~js\nimport {worldMapCoordinates} from \"@jashkenas/inputs\"\n~~~"], [" ---\n## World Map Coordinates\n\n*value: an array pair of \\`[longitude, latitude]\\`, e.g. * \\`[-122.27, 37.87]\\` \n\n~~~js\nimport {worldMapCoordinates} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject17 = function _templateObject17() {
      return data;
    };

    return data;
  }

  function _templateObject16() {
    var data = _taggedTemplateLiteral(["\n      <form>\n        <label style=\"display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 3px;\">\n          <span style=\"display: inline-block; width: 70px;\">Longitude:</span>\n          ", "\n        </label>\n        <br>\n        <label style=\"display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;\">\n          <span style=\"display: inline-block; width: 70px;\">Latitude:</span>\n          ", "\n        </label>\n      </form>\n    "]);

    _templateObject16 = function _templateObject16() {
      return data;
    };

    return data;
  }

  function _templateObject15() {
    var data = _taggedTemplateLiteral(["<input name=\"input\" type=\"number\" autocomplete=\"off\" min=\"-90\" max=\"90\" style=\"width: 80px;\" step=\"any\" value=\"", "\" />"]);

    _templateObject15 = function _templateObject15() {
      return data;
    };

    return data;
  }

  function _templateObject14() {
    var data = _taggedTemplateLiteral(["<input name=\"input\" type=\"number\" autocomplete=\"off\" min=\"-180\" max=\"180\" style=\"width: 80px;\" step=\"any\" value=\"", "\" />"]);

    _templateObject14 = function _templateObject14() {
      return data;
    };

    return data;
  }

  function _templateObject13() {
    var data = _taggedTemplateLiteral([" ---\n## Coordinates\n\n*value: an array pair of `[longitude, latitude]`, e.g. * `[-122.27, 37.87]` \n\n~~~js\nimport {coordinates} from \"@jashkenas/inputs\"\n~~~"], [" ---\n## Coordinates\n\n*value: an array pair of \\`[longitude, latitude]\\`, e.g. * \\`[-122.27, 37.87]\\` \n\n~~~js\nimport {coordinates} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteral(["---\n## Color Pickers\n\n*value: a hexadecimal string, e.g. * `\"#bada55\"` \n\n~~~js\nimport {color} from \"@jashkenas/inputs\"\n~~~"], ["---\n## Color Pickers\n\n*value: a hexadecimal string, e.g. * \\`\"#bada55\"\\` \n\n~~~js\nimport {color} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteral(["<option>"]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["\n      <form>\n         <input name=\"input\" type=\"text\" autocomplete=\"off\" \n          placeholder=\"", "\" style=\"font-size: 1em;\" list=", ">\n          <datalist id=\"", "\">\n              ", "\n          </datalist>\n      </form>\n      "]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["---\n## Autoselects\n*A variant of an option menu, using an autocompleting text input, via HTML\u2019s datalist element.* \n\n~~~js\nimport {autoSelect} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["<option>"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n      <form>\n        <select name=\"input\" ", ">\n          ", "\n        </select>\n      </form>\n    "]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["---\n## Dropdown Menus and Multiselects\n\n~~~js\nimport {select} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["---\n## Buttons\n\n~~~js\nimport {button} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider)."]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["---\n## Sliders\n\n~~~js\nimport {slider} from \"@jashkenas/inputs\"\n~~~"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["| <h3>Friends & Family:</h3>  |   |\n|---|---|\n| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |\n| **[@mbostock/scrubber](/@mbostock/scrubber)** | A slider that automatically plays through its range, useful for driving and scrubbing through animations. |\n| **[@bumbeishvili/input-groups](/@bumbeishvili/input-groups)** | A wrapper function that can put many of these inputs into a more compact grid layout. | \n| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |\n| **[@awhitty/fips-county-code-brush](/@awhitty/fips-county-code-brush)**  | A brushable map of the United States, allowing you to quickly select sets of counties to get their FIPS codes. |\n| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |\n| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |\n| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |\n| **[@mootari\u2019s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |\n| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |\n| **[@rreusser/binary-input](/@rreusser/binary-input)** | Input numbers in binary, great for working with values where results vary with specific bit positions. |\n| **[@bartok32/diy-inputs](/@bartok32/diy-inputs)** | A fun tool for defining your own fancy and colorful inputs. |\n| **[@bobkerns/elements-input](/@bobkerns/elements-input)** | A periodic table of the elements input! You can construct molecules programmatically, or click on the table to create formulas. |\n| **[@fil/selectflat](/@fil/selectflat)** | A fast selector to explore a discrete parameter space. The value changes on mouseover, and sticks when you click. |\n| **[@oscar6echo/player](/@oscar6echo/player)** | A slider with buttons to play, pause, step, and change speed and direction \u2014 useful for animations. |\n| **[@harrislapiroff/list-input](/@harrislapiroff/list-input)** | A input for when you want more than one of something. |\n| **[@nhogs/easing-graphs-editor](/@nhogs/easing-graphs-editor)** | A curve input to display and edit values of animated properties over time, such as easing curves and animation curves. |\n| **[@j-f1/checkbox](/@j-f1/checkbox)** | A simple checkbox input that provides a boolean value. |\n\n<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["# Inputs\n<div style=\"margin-top: -3px; font-size: 1.05em;\">*a.k.a \u201CThe Grand Native Inputs Bazaar\u201D*</div>\n\n<img width=\"350px\" src=\"", "\" />\n\nA collection of assorted fancy inputs, odds and ends \u2014 with which to produce values to feed your burgeoning sketches. All inputs support optional **titles** and **descriptions**; where it makes sense, inputs also support a **submit** option, which allows you to prevent the value from updating until the input has been finalized.\n\nWares we have on offer: \n  * [`slider`](#sliderDemo)\n  * [`button`](#buttonDemo)\n  * [`select`](#selectDemo)\n  * [`autoSelect`](#autoSelectDemo)\n  * [`color`](#colorDemo)\n  * [`coordinates`](#coordinatesDemo)\n  * [`worldMapCoordinates`](#worldMapCoordinatesDemo)\n  * [`usaMapCoordinates`](#usaMapCoordinatesDemo)\n  * [`date`](#dateDemo)\n  * [`time`](#timeDemo)\n  * [`file`](#fileDemo)\n  * [`text`](#textDemo)\n  * [`textarea`](#textareaDemo)\n  * [`radio`](#radioDemo)\n  * [`checkbox`](#checkboxDemo)\n  * [`number`](#numberDemo)\n  * [`password`](#passwordDemo)"], ["# Inputs\n<div style=\"margin-top: -3px; font-size: 1.05em;\">*a.k.a \u201CThe Grand Native Inputs Bazaar\u201D*</div>\n\n<img width=\"350px\" src=\"", "\" />\n\nA collection of assorted fancy inputs, odds and ends \u2014 with which to produce values to feed your burgeoning sketches. All inputs support optional **titles** and **descriptions**; where it makes sense, inputs also support a **submit** option, which allows you to prevent the value from updating until the input has been finalized.\n\nWares we have on offer: \n  * [\\`slider\\`](#sliderDemo)\n  * [\\`button\\`](#buttonDemo)\n  * [\\`select\\`](#selectDemo)\n  * [\\`autoSelect\\`](#autoSelectDemo)\n  * [\\`color\\`](#colorDemo)\n  * [\\`coordinates\\`](#coordinatesDemo)\n  * [\\`worldMapCoordinates\\`](#worldMapCoordinatesDemo)\n  * [\\`usaMapCoordinates\\`](#usaMapCoordinatesDemo)\n  * [\\`date\\`](#dateDemo)\n  * [\\`time\\`](#timeDemo)\n  * [\\`file\\`](#fileDemo)\n  * [\\`text\\`](#textDemo)\n  * [\\`textarea\\`](#textareaDemo)\n  * [\\`radio\\`](#radioDemo)\n  * [\\`checkbox\\`](#checkboxDemo)\n  * [\\`number\\`](#numberDemo)\n  * [\\`password\\`](#passwordDemo)"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var importMeta = {
    url: new URL('./e93997d5089d7165@2286.js', (document.currentScript && document.currentScript.src || new URL('bundle.js', document.baseURI).href)).href
  };
  // https://observablehq.com/@jashkenas/inputs@2286
  function define$1(runtime, observer) {
    var main = runtime.module();
    var fileAttachments = new Map([["capstan.gif", new URL("./files/c051fbc024553912e31968b35e537d4ad3592201b5f8e7bd13fd9d02e38599c5d541a704d0858c676328babb3e5c9c35dd7c6d67240090d094882a1cad8eece4", importMeta.url)]]);
    main.builtin("FileAttachment", runtime.fileAttachments(function (name) {
      return fileAttachments.get(name);
    }));
    main.variable(observer()).define(["md", "FileAttachment"], /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(md, FileAttachment) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = md;
                _context.t1 = _templateObject$1();
                _context.next = 4;
                return FileAttachment("capstan.gif").url();

              case 4:
                _context.t2 = _context.sent;
                return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject2$1());
    });
    main.variable(observer("sliderDemo")).define("sliderDemo", ["md"], function (md) {
      return md(_templateObject3());
    });
    main.variable(observer("viewof a")).define("viewof a", ["slider"], function (slider) {
      return slider();
    });
    main.variable(observer("a")).define("a", ["Generators", "viewof a"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a1")).define("viewof a1", ["slider"], function (slider) {
      return slider({
        min: 0,
        max: 1,
        step: 0.01,
        format: ".0%",
        description: "Zero to one, formatted as a percentage"
      });
    });
    main.variable(observer("a1")).define("a1", ["Generators", "viewof a1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a1_1")).define("viewof a1_1", ["slider"], function (slider) {
      return slider({
        min: 0,
        max: 1,
        step: 0.01,
        format: function format(v) {
          return "".concat(Math.round(100 * v), " per cent");
        },
        description: "Zero to one, formatted with a custom function"
      });
    });
    main.variable(observer("a1_1")).define("a1_1", ["Generators", "viewof a1_1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a2")).define("viewof a2", ["slider"], function (slider) {
      return slider({
        min: 0,
        max: 1e9,
        step: 1000,
        value: 3250000,
        format: ",",
        description: "Zero to one billion, in steps of one thousand, formatted as a (US) number"
      });
    });
    main.variable(observer("a2")).define("a2", ["Generators", "viewof a2"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a3")).define("viewof a3", ["slider"], function (slider) {
      return slider({
        min: 0,
        max: 100,
        step: 1,
        value: 10,
        title: "Integers",
        description: "Integers from zero through 100"
      });
    });
    main.variable(observer("a3")).define("a3", ["Generators", "viewof a3"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a4")).define("viewof a4", ["slider"], function (slider) {
      return slider({
        min: 0.9,
        max: 1.1,
        precision: 3,
        description: "A high precision slider example"
      });
    });
    main.variable(observer("a4")).define("a4", ["Generators", "viewof a4"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof a5")).define("viewof a5", ["slider"], function (slider) {
      return slider({
        min: 0.9,
        max: 1.1,
        precision: 3,
        submit: true,
        description: "The same as a4, but only changes value on submit"
      });
    });
    main.variable(observer("a5")).define("a5", ["Generators", "viewof a5"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject4());
    });
    main.variable(observer("slider")).define("slider", ["input"], function (input) {
      return function slider() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref2 = typeof config === "number" ? {
          value: config
        } : config,
            _ref2$min = _ref2.min,
            min = _ref2$min === void 0 ? 0 : _ref2$min,
            _ref2$max = _ref2.max,
            max = _ref2$max === void 0 ? 1 : _ref2$max,
            _ref2$value = _ref2.value,
            value = _ref2$value === void 0 ? (max + min) / 2 : _ref2$value,
            _ref2$step = _ref2.step,
            step = _ref2$step === void 0 ? "any" : _ref2$step,
            _ref2$precision = _ref2.precision,
            precision = _ref2$precision === void 0 ? 2 : _ref2$precision,
            title = _ref2.title,
            description = _ref2.description,
            disabled = _ref2.disabled,
            getValue = _ref2.getValue,
            format = _ref2.format,
            display = _ref2.display,
            submit = _ref2.submit;

        precision = Math.pow(10, precision);
        if (!getValue) getValue = function getValue(input) {
          return Math.round(input.valueAsNumber * precision) / precision;
        };
        return input({
          type: "range",
          title: title,
          description: description,
          submit: submit,
          format: format,
          display: display,
          attributes: {
            min: min,
            max: max,
            step: step,
            disabled: disabled,
            value: value
          },
          getValue: getValue
        });
      };
    });
    main.variable(observer("buttonDemo")).define("buttonDemo", ["md"], function (md) {
      return md(_templateObject5());
    });
    main.variable(observer("viewof b")).define("viewof b", ["button"], function (button) {
      return button();
    });
    main.variable(observer("b")).define("b", ["Generators", "viewof b"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["b"], function (b) {
      return !this;
    });
    main.variable(observer("viewof b1")).define("viewof b1", ["button"], function (button) {
      return button({
        value: "Click me",
        description: "We use a reference to the button below to record the time you pressed it."
      });
    });
    main.variable(observer("b1")).define("b1", ["Generators", "viewof b1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["b1"], function (b1) {
      return new Date(Date.now()).toUTCString();
    });
    main.variable(observer("button")).define("button", ["input"], function (input) {
      return function button() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref3 = typeof config === "string" ? {
          value: config
        } : config,
            _ref3$value = _ref3.value,
            value = _ref3$value === void 0 ? "Ok" : _ref3$value,
            title = _ref3.title,
            description = _ref3.description,
            disabled = _ref3.disabled;

        var form = input({
          type: "button",
          title: title,
          description: description,
          attributes: {
            disabled: disabled,
            value: value
          }
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("selectDemo")).define("selectDemo", ["md"], function (md) {
      return md(_templateObject6());
    });
    main.variable(observer("viewof dd")).define("viewof dd", ["select"], function (select) {
      return select(["Spring", "Summer", "Fall", "Winter"]);
    });
    main.variable(observer("dd")).define("dd", ["Generators", "viewof dd"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["dd"], function (dd) {
      return dd;
    });
    main.variable(observer("viewof dd1")).define("viewof dd1", ["select"], function (select) {
      return select({
        title: "Stooges",
        description: "Please pick your favorite stooge.",
        options: ["Curly", "Larry", "Moe", "Shemp"],
        value: "Moe"
      });
    });
    main.variable(observer("dd1")).define("dd1", ["Generators", "viewof dd1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["dd1"], function (dd1) {
      return dd1;
    });
    main.variable(observer("viewof dd2")).define("viewof dd2", ["select"], function (select) {
      return select({
        description: "As a child, which vegetables did you refuse to eat?",
        options: ["Spinach", "Broccoli", "Brussels Sprouts", "Cauliflower", "Kale", "Turnips", "Green Beans", "Asparagus"],
        multiple: true
      });
    });
    main.variable(observer("dd2")).define("dd2", ["Generators", "viewof dd2"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["dd2"], function (dd2) {
      return dd2;
    });
    main.variable(observer("viewof dd3")).define("viewof dd3", ["select"], function (select) {
      var dd3 = select({
        title: "How are you feeling today?",
        options: [{
          label: "🤷",
          value: "shrug"
        }, {
          label: "😂",
          value: "tears-of-joy"
        }, {
          label: "😍",
          value: "loving-it"
        }, {
          label: "🤔",
          value: "hmmm"
        }, {
          label: "😱",
          value: "yikes",
          disabled: true
        }, {
          label: "😈",
          value: "mischievous"
        }, {
          label: "💩",
          value: "poo"
        }],
        value: "hmmm"
      });
      dd3.input.style.fontSize = "30px";
      dd3.input.style.marginTop = "8px";
      return dd3;
    });
    main.variable(observer("dd3")).define("dd3", ["Generators", "viewof dd3"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["dd3"], function (dd3) {
      return dd3;
    });
    main.variable(observer("select")).define("select", ["input", "html"], function (input, html) {
      return function select() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref4 = Array.isArray(config) ? {
          options: config
        } : config,
            formValue = _ref4.value,
            title = _ref4.title,
            description = _ref4.description,
            disabled = _ref4.disabled,
            submit = _ref4.submit,
            multiple = _ref4.multiple,
            size = _ref4.size,
            options = _ref4.options;

        options = options.map(function (o) {
          return _typeof(o) === "object" ? o : {
            value: o,
            label: o
          };
        });
        var form = input({
          type: "select",
          title: title,
          description: description,
          submit: submit,
          attributes: {
            disabled: disabled
          },
          getValue: function getValue(input) {
            var selected = Array.prototype.filter.call(input.options, function (i) {
              return i.selected;
            }).map(function (i) {
              return i.value;
            });
            return multiple ? selected : selected[0];
          },
          form: html(_templateObject7(), multiple ? "multiple size=\"".concat(size || options.length, "\"") : "", options.map(function (_ref5) {
            var value = _ref5.value,
                label = _ref5.label,
                disabled = _ref5.disabled;
            return Object.assign(html(_templateObject8()), {
              value: value,
              selected: Array.isArray(formValue) ? formValue.includes(value) : formValue === value,
              disabled: disabled ? disabled : false,
              textContent: label
            });
          }))
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("autoSelectDemo")).define("autoSelectDemo", ["md"], function (md) {
      return md(_templateObject9());
    });
    main.variable(observer("viewof as")).define("viewof as", ["autoSelect", "usa"], function (autoSelect, usa) {
      return autoSelect({
        options: usa.objects.states.geometries.map(function (d) {
          return d.properties.name;
        }),
        placeholder: "Search for a US state . . ."
      });
    });
    main.variable(observer("as")).define("as", ["Generators", "viewof as"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["as"], function (as) {
      return as;
    });
    main.variable(observer("autoSelect")).define("autoSelect", ["input", "html"], function (input, html) {
      return function autoSelect() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref6 = Array.isArray(config) ? {
          options: config
        } : config,
            value = _ref6.value,
            title = _ref6.title,
            description = _ref6.description,
            disabled = _ref6.disabled,
            _ref6$autocomplete = _ref6.autocomplete,
            placeholder = _ref6.placeholder,
            size = _ref6.size,
            options = _ref6.options,
            _ref6$list = _ref6.list,
            list = _ref6$list === void 0 ? "options" : _ref6$list;

        var optionsSet = new Set(options);
        var form = input({
          type: "text",
          title: title,
          description: description,
          attributes: {
            disabled: disabled
          },
          action: function action(fm) {
            fm.value = fm.input.value = value || "";

            fm.onsubmit = function (e) {
              return e.preventDefault();
            };

            fm.input.oninput = function (e) {
              e.stopPropagation();
              fm.value = fm.input.value;
              if (!fm.value || optionsSet.has(fm.value)) fm.dispatchEvent(new CustomEvent("input"));
            };
          },
          form: html(_templateObject10(), placeholder || "", list, list, options.map(function (d) {
            return Object.assign(html(_templateObject11()), {
              value: d
            });
          }))
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("colorDemo")).define("colorDemo", ["md"], function (md) {
      return md(_templateObject12());
    });
    main.variable(observer("viewof c")).define("viewof c", ["color"], function (color) {
      return color();
    });
    main.variable(observer("c")).define("c", ["Generators", "viewof c"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof c1")).define("viewof c1", ["color"], function (color) {
      return color({
        value: "#0000ff",
        title: "Background Color",
        description: "This color picker starts out blue"
      });
    });
    main.variable(observer("c1")).define("c1", ["Generators", "viewof c1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("color")).define("color", ["input"], function (input) {
      return function color() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref7 = typeof config === "string" ? {
          value: config
        } : config,
            _ref7$value = _ref7.value,
            value = _ref7$value === void 0 ? "#000000" : _ref7$value,
            title = _ref7.title,
            description = _ref7.description,
            disabled = _ref7.disabled,
            submit = _ref7.submit,
            display = _ref7.display;

        var form = input({
          type: "color",
          title: title,
          description: description,
          submit: submit,
          display: display,
          attributes: {
            disabled: disabled,
            value: value
          }
        }); // The following two lines are a bugfix for Safari, which hopefully can be removed in the future.

        form.input.value = '';
        form.input.value = value;
        if (title || description) form.input.style.margin = "5px 0";
        return form;
      };
    });
    main.variable(observer("coordinatesDemo")).define("coordinatesDemo", ["md"], function (md) {
      return md(_templateObject13());
    });
    main.variable(observer("viewof coords1")).define("viewof coords1", ["coordinates"], function (coordinates) {
      return coordinates();
    });
    main.variable(observer("coords1")).define("coords1", ["Generators", "viewof coords1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["coords1"], function (coords1) {
      return coords1;
    });
    main.variable(observer("viewof coords2")).define("viewof coords2", ["coordinates"], function (coordinates) {
      return coordinates({
        title: "Hometown",
        description: "Enter the coordinates of where you were born",
        value: [-122.27, 37.87],
        submit: true
      });
    });
    main.variable(observer("coords2")).define("coords2", ["Generators", "viewof coords2"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["coords2"], function (coords2) {
      return coords2;
    });
    main.variable(observer("coordinates")).define("coordinates", ["html", "input"], function (html, input) {
      return function coordinates() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref8 = Array.isArray(config) ? {
          value: config
        } : config,
            _ref8$value = _ref8.value,
            value = _ref8$value === void 0 ? [] : _ref8$value,
            title = _ref8.title,
            description = _ref8.description,
            submit = _ref8.submit;

        var _value = _slicedToArray(value, 2),
            lon = _value[0],
            lat = _value[1];

        lon = lon != null ? lon : "";
        lat = lat != null ? lat : "";
        var lonEl = html(_templateObject14(), lon);
        var latEl = html(_templateObject15(), lat);
        var form = input({
          type: "coordinates",
          title: title,
          description: description,
          submit: submit,
          getValue: function getValue() {
            var lon = lonEl.valueAsNumber;
            var lat = latEl.valueAsNumber;
            return [isNaN(lon) ? null : lon, isNaN(lat) ? null : lat];
          },
          form: html(_templateObject16(), lonEl, latEl)
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo", ["md"], function (md) {
      return md(_templateObject17());
    });
    main.variable(observer("viewof worldMap1")).define("viewof worldMap1", ["worldMapCoordinates"], function (worldMapCoordinates) {
      return worldMapCoordinates([-122.27, 37.87]);
    });
    main.variable(observer("worldMap1")).define("worldMap1", ["Generators", "viewof worldMap1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["worldMap1"], function (worldMap1) {
      return worldMap1;
    });
    main.variable(observer("worldMapCoordinates")).define("worldMapCoordinates", ["html", "DOM", "d3geo", "graticule", "land", "countries", "input"], function (html, DOM, d3geo, graticule, land, countries, input) {
      return function worldMapCoordinates() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref9 = Array.isArray(config) ? {
          value: config
        } : config,
            _ref9$value = _ref9.value,
            value = _ref9$value === void 0 ? [] : _ref9$value,
            title = _ref9.title,
            description = _ref9.description,
            _ref9$width = _ref9.width,
            width = _ref9$width === void 0 ? 400 : _ref9$width;

        var height = Math.round(210 / 400 * width);

        var _value2 = _slicedToArray(value, 2),
            lon = _value2[0],
            lat = _value2[1];

        lon = lon != null ? lon : null;
        lat = lat != null ? lat : null;
        var formEl = html(_templateObject18(), width);
        var context = DOM.context2d(width, height);
        var canvas = context.canvas;
        canvas.style.margin = "10px 0 3px";
        var projection = d3geo.geoNaturalEarth1().precision(0.1).fitSize([width, height], {
          type: "Sphere"
        });
        var path = d3geo.geoPath(projection, context).pointRadius(2.5);
        formEl.append(canvas);

        function draw() {
          context.fillStyle = "#fff";
          context.fillRect(0, 0, width, height);
          context.beginPath();
          path(graticule);
          context.lineWidth = 0.35;
          context.strokeStyle = "#ddd";
          context.stroke();
          context.beginPath();
          path(land);
          context.fillStyle = "#f4f4f4";
          context.fill();
          context.beginPath();
          path(countries);
          context.strokeStyle = "#aaa";
          context.stroke();

          if (lon != null && lat != null) {
            var pointPath = {
              type: "MultiPoint",
              coordinates: [[lon, lat]]
            };
            context.beginPath();
            path(pointPath);
            context.fillStyle = "#f00";
            context.fill();
          }
        }

        canvas.onclick = function (ev) {
          var offsetX = ev.offsetX,
              offsetY = ev.offsetY;
          var coords = projection.invert([offsetX, offsetY]);
          lon = +coords[0].toFixed(2);
          lat = +coords[1].toFixed(2);
          draw();
          canvas.dispatchEvent(new CustomEvent("input", {
            bubbles: true
          }));
        };

        draw();
        var form = input({
          type: "worldMapCoordinates",
          title: title,
          description: description,
          display: function display(v) {
            return html(_templateObject19(), width, lon != null ? lon.toFixed(2) : "", lat != null ? lat.toFixed(2) : "");
          },
          getValue: function getValue() {
            return [lon != null ? lon : null, lat != null ? lat : null];
          },
          form: formEl
        });
        return form;
      };
    });
    main.variable(observer("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo", ["md"], function (md) {
      return md(_templateObject20());
    });
    main.variable(observer("viewof usaMap1")).define("viewof usaMap1", ["usaMapCoordinates"], function (usaMapCoordinates) {
      return usaMapCoordinates([-122.27, 37.87]);
    });
    main.variable(observer("usaMap1")).define("usaMap1", ["Generators", "viewof usaMap1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["usaMap1"], function (usaMap1) {
      return usaMap1;
    });
    main.variable(observer("viewof usaMap2")).define("viewof usaMap2", ["usaMapCoordinates"], function (usaMapCoordinates) {
      return usaMapCoordinates({
        title: "A Mini Map",
        description: "Defaults to New York City",
        width: 200,
        value: [-74, 40.71]
      });
    });
    main.variable(observer("usaMap2")).define("usaMap2", ["Generators", "viewof usaMap2"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["usaMap2"], function (usaMap2) {
      return usaMap2;
    });
    main.variable(observer("usaMapCoordinates")).define("usaMapCoordinates", ["html", "DOM", "d3geo", "nation", "states", "input"], function (html, DOM, d3geo, nation, states, input) {
      return function usaMapCoordinates() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref10 = Array.isArray(config) ? {
          value: config
        } : config,
            _ref10$value = _ref10.value,
            value = _ref10$value === void 0 ? [] : _ref10$value,
            title = _ref10.title,
            description = _ref10.description,
            _ref10$width = _ref10.width,
            width = _ref10$width === void 0 ? 400 : _ref10$width;

        var scale = width / 960;
        var height = scale * 600;

        var _value3 = _slicedToArray(value, 2),
            lon = _value3[0],
            lat = _value3[1];

        lon = lon != null ? lon : null;
        lat = lat != null ? lat : null;
        var formEl = html(_templateObject21(), width);
        var context = DOM.context2d(width, height);
        var canvas = context.canvas;
        canvas.style.margin = "5px 0 20px";
        var projection = d3geo.geoAlbersUsa().scale(1280).translate([480, 300]);
        var path = d3geo.geoPath().context(context).pointRadius(2.5 / scale);
        formEl.append(canvas);

        function draw() {
          context.clearRect(0, 0, width, height);
          context.save();
          context.scale(scale, scale);
          context.lineWidth = 0.35 / scale;
          context.beginPath();
          path(nation);
          context.fillStyle = "#f4f4f4";
          context.fill();
          context.beginPath();
          path(states);
          context.strokeStyle = "#aaa";
          context.stroke();

          if (lon != null && lat != null) {
            var pointPath = {
              type: "MultiPoint",
              coordinates: [projection([lon, lat])]
            };
            context.beginPath();
            path(pointPath);
            context.fillStyle = "#f00";
            context.fill();
          }

          context.restore();
        }

        canvas.onclick = function (ev) {
          var offsetX = ev.offsetX,
              offsetY = ev.offsetY;
          var coords = projection.invert([offsetX / scale, offsetY / scale]);
          lon = +coords[0].toFixed(2);
          lat = +coords[1].toFixed(2);
          draw();
          canvas.dispatchEvent(new CustomEvent("input", {
            bubbles: true
          }));
        };

        draw();
        var form = input({
          type: "worldMapCoordinates",
          title: title,
          description: description,
          display: function display(v) {
            return html(_templateObject22(), width, lon != null ? lon : "", lat != null ? lat : "");
          },
          getValue: function getValue() {
            return [lon != null ? lon : null, lat != null ? lat : null];
          },
          form: formEl
        });
        return form;
      };
    });
    main.variable(observer("dateDemo")).define("dateDemo", ["md"], function (md) {
      return md(_templateObject23());
    });
    main.variable(observer("viewof d")).define("viewof d", ["date"], function (date) {
      return date();
    });
    main.variable(observer("d")).define("d", ["Generators", "viewof d"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof d1")).define("viewof d1", ["date"], function (date) {
      return date({
        title: "2017",
        min: "2017-01-01",
        max: "2017-12-31",
        value: "2017-01-01",
        description: "Only dates within the 2017 calendar year are allowed"
      });
    });
    main.variable(observer("d1")).define("d1", ["Generators", "viewof d1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("date")).define("date", ["input"], function (input) {
      return function date() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref11 = typeof config === "string" ? {
          value: config
        } : config,
            min = _ref11.min,
            max = _ref11.max,
            value = _ref11.value,
            title = _ref11.title,
            description = _ref11.description,
            disabled = _ref11.disabled,
            display = _ref11.display;

        return input({
          type: "date",
          title: title,
          description: description,
          display: display,
          attributes: {
            min: min,
            max: max,
            disabled: disabled,
            value: value
          }
        });
      };
    });
    main.variable(observer("timeDemo")).define("timeDemo", ["md"], function (md) {
      return md(_templateObject24());
    });
    main.variable(observer("viewof t")).define("viewof t", ["time"], function (time) {
      return time();
    });
    main.variable(observer("t")).define("t", ["Generators", "viewof t"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["t"], function (t) {
      return t;
    });
    main.variable(observer("viewof t1")).define("viewof t1", ["time"], function (time) {
      return time({
        title: "Afternoon",
        min: "12:00:00",
        max: "23:59:59",
        value: "13:00:00",
        step: 1,
        description: "Only times after noon are allowed, and seconds are included"
      });
    });
    main.variable(observer("t1")).define("t1", ["Generators", "viewof t1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["t1"], function (t1) {
      return t1;
    });
    main.variable(observer("time")).define("time", ["input"], function (input) {
      return function time() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref12 = typeof config === "string" ? {
          value: config
        } : config,
            min = _ref12.min,
            max = _ref12.max,
            step = _ref12.step,
            value = _ref12.value,
            title = _ref12.title,
            description = _ref12.description,
            disabled = _ref12.disabled,
            display = _ref12.display;

        var el = input({
          type: "time",
          title: title,
          description: description,
          display: display,
          getValue: function getValue(d) {
            return d.value ? d.value : undefined;
          },
          attributes: {
            min: min,
            max: max,
            step: step,
            disabled: disabled,
            value: value
          }
        });
        el.output.remove();
        return el;
      };
    });
    main.variable(observer("fileDemo")).define("fileDemo", ["md"], function (md) {
      return md(_templateObject25());
    });
    main.variable(observer("viewof e")).define("viewof e", ["file"], function (file) {
      return file();
    });
    main.variable(observer("e")).define("e", ["Generators", "viewof e"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof e1")).define("viewof e1", ["file"], function (file) {
      return file({
        title: "Photographs",
        description: "Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",
        accept: ".jpg",
        multiple: true
      });
    });
    main.variable(observer("e1")).define("e1", ["Generators", "viewof e1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["html", "e1", "Files"], /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(html, e1, Files) {
        var div, j, file, img;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                div = html(_templateObject26());
                j = 0;

              case 2:
                if (!(j < e1.length)) {
                  _context2.next = 12;
                  break;
                }

                file = e1[j];
                img = html(_templateObject27());
                _context2.next = 7;
                return Files.url(e1[j]);

              case 7:
                img.src = _context2.sent;
                div.append(img);

              case 9:
                j++;
                _context2.next = 2;
                break;

              case 12:
                return _context2.abrupt("return", div);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref13.apply(this, arguments);
      };
    }());
    main.variable(observer("file")).define("file", ["input"], function (input) {
      return function file() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var multiple = config.multiple,
            accept = config.accept,
            title = config.title,
            description = config.description,
            disabled = config.disabled;
        var form = input({
          type: "file",
          title: title,
          description: description,
          attributes: {
            multiple: multiple,
            accept: accept,
            disabled: disabled
          },
          action: function action(form) {
            form.input.onchange = function () {
              form.value = multiple ? form.input.files : form.input.files[0];
              form.dispatchEvent(new CustomEvent("input"));
            };
          }
        });
        form.output.remove();
        form.input.onchange();
        return form;
      };
    });
    main.variable(observer("textDemo")).define("textDemo", ["md"], function (md) {
      return md(_templateObject28());
    });
    main.variable(observer("viewof f")).define("viewof f", ["text"], function (text) {
      return text();
    });
    main.variable(observer("f")).define("f", ["Generators", "viewof f"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer("viewof f1")).define("viewof f1", ["text"], function (text) {
      return text({
        title: "A Text Input",
        placeholder: "Placeholder text",
        description: "Note that text inputs don’t show output on the right"
      });
    });
    main.variable(observer("f1")).define("f1", ["Generators", "viewof f1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["f1"], function (f1) {
      return f1;
    });
    main.variable(observer("viewof f2")).define("viewof f2", ["text"], function (text) {
      return text({
        placeholder: "Placeholder text",
        description: "This input only changes value on submit",
        submit: "Go"
      });
    });
    main.variable(observer("f2")).define("f2", ["Generators", "viewof f2"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["f2"], function (f2) {
      return f2;
    });
    main.variable(observer("text")).define("text", ["input"], function (input) {
      return function text() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref14 = typeof config === "string" ? {
          value: config
        } : config,
            value = _ref14.value,
            title = _ref14.title,
            description = _ref14.description,
            disabled = _ref14.disabled,
            _ref14$autocomplete = _ref14.autocomplete,
            autocomplete = _ref14$autocomplete === void 0 ? "off" : _ref14$autocomplete,
            maxlength = _ref14.maxlength,
            minlength = _ref14.minlength,
            pattern = _ref14.pattern,
            placeholder = _ref14.placeholder,
            size = _ref14.size,
            submit = _ref14.submit,
            getValue = _ref14.getValue;

        var form = input({
          type: "text",
          title: title,
          description: description,
          submit: submit,
          getValue: getValue,
          attributes: {
            value: value,
            autocomplete: autocomplete,
            maxlength: maxlength,
            minlength: minlength,
            pattern: pattern,
            placeholder: placeholder,
            size: size,
            disabled: disabled
          }
        });
        form.output.remove();
        form.input.style.fontSize = "1em";
        return form;
      };
    });
    main.variable(observer("textareaDemo")).define("textareaDemo", ["md"], function (md) {
      return md(_templateObject29());
    });
    main.variable(observer("viewof g")).define("viewof g", ["textarea"], function (textarea) {
      return textarea();
    });
    main.variable(observer("g")).define("g", ["Generators", "viewof g"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["g"], function (g) {
      return g;
    });
    main.variable(observer("viewof g1")).define("viewof g1", ["textarea"], function (textarea) {
      return textarea({
        title: "Your Great American Novel",
        placeholder: "Insert story here...",
        spellcheck: true,
        width: "100%",
        rows: 10,
        submit: "Publish"
      });
    });
    main.variable(observer("g1")).define("g1", ["Generators", "viewof g1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["g1"], function (g1) {
      return g1;
    });
    main.variable(observer("textarea")).define("textarea", ["input", "html"], function (input, html) {
      return function textarea() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref15 = typeof config === "string" ? {
          value: config
        } : config,
            _ref15$value = _ref15.value,
            value = _ref15$value === void 0 ? "" : _ref15$value,
            title = _ref15.title,
            description = _ref15.description,
            autocomplete = _ref15.autocomplete,
            _ref15$cols = _ref15.cols,
            cols = _ref15$cols === void 0 ? 45 : _ref15$cols,
            _ref15$rows = _ref15.rows,
            rows = _ref15$rows === void 0 ? 3 : _ref15$rows,
            width = _ref15.width,
            height = _ref15.height,
            maxlength = _ref15.maxlength,
            placeholder = _ref15.placeholder,
            spellcheck = _ref15.spellcheck,
            wrap = _ref15.wrap,
            submit = _ref15.submit,
            disabled = _ref15.disabled,
            getValue = _ref15.getValue;

        var form = input({
          form: html(_templateObject30(), value),
          title: title,
          description: description,
          submit: submit,
          getValue: getValue,
          attributes: {
            autocomplete: autocomplete,
            cols: cols,
            rows: rows,
            maxlength: maxlength,
            placeholder: placeholder,
            spellcheck: spellcheck,
            wrap: wrap,
            disabled: disabled
          }
        });
        form.output.remove();
        if (width != null) form.input.style.width = width;
        if (height != null) form.input.style.height = height;
        if (submit) form.submit.style.margin = "0";
        if (title || description) form.input.style.margin = "3px 0";
        return form;
      };
    });
    main.variable(observer("radioDemo")).define("radioDemo", ["md"], function (md) {
      return md(_templateObject31());
    });
    main.variable(observer("viewof r")).define("viewof r", ["radio"], function (radio) {
      return radio(["Lust", "Gluttony", "Greed", "Sloth", "Wrath", "Envy", "Pride"]);
    });
    main.variable(observer("r")).define("r", ["Generators", "viewof r"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["r"], function (r) {
      return r;
    });
    main.variable(observer("viewof r1")).define("viewof r1", ["radio"], function (radio) {
      return radio({
        title: 'Contact Us',
        description: 'Please select your preferred contact method',
        options: [{
          label: 'By Email',
          value: 'email'
        }, {
          label: 'By Phone',
          value: 'phone'
        }, {
          label: 'By Pager',
          value: 'pager'
        }],
        value: 'pager'
      });
    });
    main.variable(observer("r1")).define("r1", ["Generators", "viewof r1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["r1"], function (r1) {
      return r1;
    });
    main.variable(observer("radio")).define("radio", ["input", "html"], function (input, html) {
      return function radio() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref16 = Array.isArray(config) ? {
          options: config
        } : config,
            formValue = _ref16.value,
            title = _ref16.title,
            description = _ref16.description,
            submit = _ref16.submit,
            options = _ref16.options,
            disabled = _ref16.disabled;

        options = options.map(function (o) {
          return typeof o === "string" ? {
            value: o,
            label: o
          } : o;
        });
        var form = input({
          type: "radio",
          title: title,
          description: description,
          submit: submit,
          getValue: function getValue(input) {
            if (input.checked) return input.value;
            var checked = Array.prototype.find.call(input, function (radio) {
              return radio.checked;
            });
            return checked ? checked.value : undefined;
          },
          form: html(_templateObject32(), options.map(function (_ref17, i) {
            var value = _ref17.value,
                label = _ref17.label;
            var input = html(_templateObject33(), value === formValue ? "checked" : "", i === 0 ? "margin-left: 1px;" : "");
            input.setAttribute("value", value);
            if (disabled) input.setAttribute("value", disabled);
            var tag = html(_templateObject34(), input, label);
            return tag;
          }))
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("checkboxDemo")).define("checkboxDemo", ["md"], function (md) {
      return md(_templateObject35());
    });
    main.variable(observer("viewof ch")).define("viewof ch", ["checkbox"], function (checkbox) {
      return checkbox(["Lust", "Gluttony", "Greed", "Sloth", "Wrath", "Envy", "Pride"]);
    });
    main.variable(observer("ch")).define("ch", ["Generators", "viewof ch"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["ch"], function (ch) {
      return ch;
    });
    main.variable(observer("viewof ch1")).define("viewof ch1", ["checkbox"], function (checkbox) {
      return checkbox({
        title: "Colors",
        description: "Please select your favorite colors",
        options: [{
          value: "r",
          label: "Red"
        }, {
          value: "o",
          label: "Orange"
        }, {
          value: "y",
          label: "Yellow"
        }, {
          value: "g",
          label: "Green"
        }, {
          value: "b",
          label: "Blue"
        }, {
          value: "i",
          label: "Indigo"
        }, {
          value: "v",
          label: "Violet"
        }],
        value: ["r", "g", "b"],
        submit: true
      });
    });
    main.variable(observer("ch1")).define("ch1", ["Generators", "viewof ch1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["ch1"], function (ch1) {
      return ch1;
    });
    main.variable(observer("viewof ch3")).define("viewof ch3", ["checkbox"], function (checkbox) {
      return checkbox({
        description: "Just a single checkbox to toggle",
        options: [{
          value: "toggle",
          label: "On"
        }],
        value: "toggle"
      });
    });
    main.variable(observer("ch3")).define("ch3", ["Generators", "viewof ch3"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["ch3"], function (ch3) {
      return ch3;
    });
    main.variable(observer("checkbox")).define("checkbox", ["input", "html"], function (input, html) {
      return function checkbox() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref18 = Array.isArray(config) ? {
          options: config
        } : config,
            formValue = _ref18.value,
            title = _ref18.title,
            description = _ref18.description,
            submit = _ref18.submit,
            disabled = _ref18.disabled,
            options = _ref18.options;

        options = options.map(function (o) {
          return typeof o === "string" ? {
            value: o,
            label: o
          } : o;
        });
        var form = input({
          type: "checkbox",
          title: title,
          description: description,
          submit: submit,
          getValue: function getValue(input) {
            if (input.length) return Array.prototype.filter.call(input, function (i) {
              return i.checked;
            }).map(function (i) {
              return i.value;
            });
            return input.checked ? input.value : false;
          },
          form: html(_templateObject36(), options.map(function (_ref19, i) {
            var value = _ref19.value,
                label = _ref19.label;
            var input = html(_templateObject37(), (formValue || []).indexOf(value) > -1 ? "checked" : "", i === 0 ? "margin-left: 1px;" : "");
            input.setAttribute("value", value);
            if (disabled) input.setAttribute("disabled", disabled);
            var tag = html(_templateObject38(), input, label);
            return tag;
          }))
        });
        form.output.remove();
        return form;
      };
    });
    main.variable(observer("numberDemo")).define("numberDemo", ["md"], function (md) {
      return md(_templateObject39());
    });
    main.variable(observer("viewof h")).define("viewof h", ["number"], function (number) {
      return number();
    });
    main.variable(observer("h")).define("h", ["Generators", "viewof h"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["h"], function (h) {
      return h;
    });
    main.variable(observer("viewof h1")).define("viewof h1", ["number"], function (number) {
      return number({
        placeholder: "13+",
        title: "Your Age",
        submit: true
      });
    });
    main.variable(observer("h1")).define("h1", ["Generators", "viewof h1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["h1"], function (h1) {
      return h1;
    });
    main.variable(observer("number")).define("number", ["input"], function (input) {
      return function number() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref20 = typeof config === "number" || typeof config === "string" ? {
          value: +config
        } : config,
            value = _ref20.value,
            title = _ref20.title,
            description = _ref20.description,
            disabled = _ref20.disabled,
            placeholder = _ref20.placeholder,
            submit = _ref20.submit,
            _ref20$step = _ref20.step,
            step = _ref20$step === void 0 ? "any" : _ref20$step,
            min = _ref20.min,
            max = _ref20.max;

        var form = input({
          type: "number",
          title: title,
          description: description,
          submit: submit,
          attributes: {
            value: value,
            placeholder: placeholder,
            step: step,
            min: min,
            max: max,
            autocomplete: "off",
            disabled: disabled
          },
          getValue: function getValue(input) {
            return input.valueAsNumber;
          }
        });
        form.output.remove();
        form.input.style.width = "auto";
        form.input.style.fontSize = "1em";
        return form;
      };
    });
    main.variable(observer("passwordDemo")).define("passwordDemo", ["md"], function (md) {
      return md(_templateObject40());
    });
    main.variable(observer("viewof i")).define("viewof i", ["password"], function (password) {
      return password({
        value: "password"
      });
    });
    main.variable(observer("i")).define("i", ["Generators", "viewof i"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["i"], function (i) {
      return i;
    });
    main.variable(observer("viewof i1")).define("viewof i1", ["password"], function (password) {
      return password({
        title: "Your super secret password",
        description: "Less than 12 characters, please.",
        minlength: 6,
        maxlength: 12
      });
    });
    main.variable(observer("i1")).define("i1", ["Generators", "viewof i1"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["i1"], function (i1) {
      return i1;
    });
    main.variable(observer("password")).define("password", ["input"], function (input) {
      return function password() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref21 = typeof config === "string" ? {
          value: config
        } : config,
            value = _ref21.value,
            title = _ref21.title,
            description = _ref21.description,
            disabled = _ref21.disabled,
            _ref21$autocomplete = _ref21.autocomplete,
            autocomplete = _ref21$autocomplete === void 0 ? "off" : _ref21$autocomplete,
            maxlength = _ref21.maxlength,
            minlength = _ref21.minlength,
            pattern = _ref21.pattern,
            placeholder = _ref21.placeholder,
            size = _ref21.size,
            submit = _ref21.submit;

        var form = input({
          type: "password",
          title: title,
          description: description,
          submit: submit,
          attributes: {
            value: value,
            autocomplete: autocomplete,
            maxlength: maxlength,
            minlength: minlength,
            pattern: pattern,
            placeholder: placeholder,
            size: size,
            disabled: disabled
          }
        });
        form.output.remove();
        form.input.style.fontSize = "1em";
        return form;
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject41());
    });
    main.variable(observer("input")).define("input", ["html", "d3format"], function (html, d3format) {
      return function input(config) {
        var form = config.form,
            _config$type = config.type,
            type = _config$type === void 0 ? "text" : _config$type,
            _config$attributes = config.attributes,
            attributes = _config$attributes === void 0 ? {} : _config$attributes,
            action = config.action,
            getValue = config.getValue,
            title = config.title,
            description = config.description,
            format = config.format,
            display = config.display,
            submit = config.submit,
            options = config.options;
        var wrapper = html(_templateObject42());
        if (!form) form = html(_templateObject43(), type);
        Object.keys(attributes).forEach(function (key) {
          var val = attributes[key];
          if (val != null) form.input.setAttribute(key, val);
        });
        if (submit) form.append(html(_templateObject44(), typeof submit == "string" ? submit : "Submit"));
        form.append(html(_templateObject45()));
        if (title) form.prepend(html(_templateObject46(), title));
        if (description) form.append(html(_templateObject47(), description));
        if (format) format = typeof format === "function" ? format : d3format.format(format);

        if (action) {
          action(form);
        } else {
          var verb = submit ? "onsubmit" : type == "button" ? "onclick" : type == "checkbox" || type == "radio" ? "onchange" : "oninput";

          form[verb] = function (e) {
            e && e.preventDefault();
            var value = getValue ? getValue(form.input) : form.input.value;

            if (form.output) {
              var out = display ? display(value) : format ? format(value) : value;

              if (out instanceof window.Element) {
                while (form.output.hasChildNodes()) {
                  form.output.removeChild(form.output.lastChild);
                }

                form.output.append(out);
              } else {
                form.output.value = out;
              }
            }

            form.value = value;
            if (verb !== "oninput") form.dispatchEvent(new CustomEvent("input", {
              bubbles: true
            }));
          };

          if (verb !== "oninput") wrapper.oninput = function (e) {
            return e && e.stopPropagation() && e.preventDefault();
          };
          if (verb !== "onsubmit") form.onsubmit = function (e) {
            return e && e.preventDefault();
          };
          form[verb]();
        }

        while (form.childNodes.length) {
          wrapper.appendChild(form.childNodes[0]);
        }

        form.append(wrapper);
        return form;
      };
    });
    main.variable(observer("d3geo")).define("d3geo", ["require"], function (require) {
      return require("d3-geo@1");
    });
    main.variable(observer("d3format")).define("d3format", ["require"], function (require) {
      return require("d3-format@1");
    });
    main.variable(observer("topojson")).define("topojson", ["require"], function (require) {
      return require("topojson-client@3");
    });
    main.variable(observer("world")).define("world", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json");

            case 2:
              return _context3.abrupt("return", _context3.sent.json());

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    main.variable(observer("land")).define("land", ["topojson", "world"], function (topojson, world) {
      return topojson.feature(world, world.objects.land);
    });
    main.variable(observer("countries")).define("countries", ["topojson", "world"], function (topojson, world) {
      return topojson.feature(world, world.objects.countries);
    });
    main.variable(observer("usa")).define("usa", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json");

            case 2:
              return _context4.abrupt("return", _context4.sent.json());

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    main.variable(observer("nation")).define("nation", ["topojson", "usa"], function (topojson, usa) {
      return topojson.feature(usa, usa.objects.nation);
    });
    main.variable(observer("states")).define("states", ["topojson", "usa"], function (topojson, usa) {
      return topojson.feature(usa, usa.objects.states);
    });
    main.variable(observer("graticule")).define("graticule", ["d3geo"], function (d3geo) {
      return d3geo.geoGraticule10();
    });
    main.variable(observer("viewof license")).define("viewof license", ["md"], function (md) {
      var license = md(_templateObject48());
      license.value = "MIT";
      return license;
    });
    main.variable(observer("license")).define("license", ["Generators", "viewof license"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject49());
    });
    return main;
  }

  function _templateObject9$1() {
    var data = _taggedTemplateLiteral(["## Imports"]);

    _templateObject9$1 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8$1() {
    var data = _taggedTemplateLiteral(["## Helper Code"]);

    _templateObject8$1 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7$1() {
    var data = _taggedTemplateLiteral(["## Core Algrithm Code"]);

    _templateObject7$1 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$1() {
    var data = _taggedTemplateLiteral(["<style>\n  .label {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n  }\n</style>"]);

    _templateObject6$1 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$1() {
    var data = _taggedTemplateLiteral(["\n    <path d=", " id=\"", "\" stroke=\"none\" fill=\"none\" />\n    <text class=\"label\" dy=\"0.35em\" fill=\"#444\" style=\"font-size: ", "px;\">\n      <textPath xlink:href=\"", "\" startOffset=\"", "%\" text-anchor=\"middle\">", "</textPath>\n    </text>\n  "]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$1() {
    var data = _taggedTemplateLiteral(["## API"]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["<svg width=", " height=", ">\n    <path d=\"", "\" stroke=\"#444\" fill=\"#f9f9f9\"/>\n   ", "\n\n  </svg>"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["## Example"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["# Centerline Labeling Utility\n\nBased on this [Centerline labeling](https://observablehq.com/@veltman/centerline-labeling) by [Noah Veltman](https://observablehq.com/@veltman), but structured so you can easily import and use it yourself.\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  function define$2(runtime, observer) {
    var main = runtime.module();
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject$2());
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject2$2());
    });
    main.variable(observer("viewof place")).define("viewof place", ["radio", "places"], function (radio, places) {
      return radio({
        options: places.features.map(function (f) {
          return f.properties.name;
        }),
        value: "California"
      });
    });
    main.variable(observer("place")).define("place", ["Generators", "viewof place"], function (G, _) {
      return G.input(_);
    });
    main.variable(observer()).define(["places", "place", "d3", "width", "svg", "renderCenterlineLabel", "computeCenterlineLabel"], function (places, place, d3, width, svg, renderCenterlineLabel, computeCenterlineLabel) {
      // Rescale to fit at the current screen width
      var height = 400;
      var feature = places.features.find(function (f) {
        return f.properties.name === place;
      });
      var projection = d3.geoIdentity().fitExtent([[5, 5], [width - 5, height - 5]], feature);

      var computeOuterRing = function computeOuterRing(projection, feature) {
        var s = projection.scale(),
            t = projection.translate();
        return feature.geometry.coordinates[0][0].slice(1).map(function (point) {
          return [s * point[0] + t[0], s * point[1] + t[1]];
        });
      };

      var background = d3.geoPath().projection(projection)(feature);
      return svg(_templateObject3$1(), width, height, background, renderCenterlineLabel(computeCenterlineLabel({
        label: place,
        polygon: computeOuterRing(projection, feature)
      })));
    });
    main.variable(observer("places")).define("places", ["d3"], function (d3) {
      return d3.json("https://gist.githubusercontent.com/veltman/644f16a90259a20a88b036ef189d71fd/raw/d2f0a027bfc9b63ca223b509bd2cfe0cf5d138c2/places.geojson");
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject4$1());
    });
    main.variable(observer("computeCenterlineLabel")).define("computeCenterlineLabel", ["getPointsAlongPolyline", "computeVoronoi", "computeEdges", "computeNodes", "computeTraversal", "computeCenterline", "computeMeasurements", "computeMaxFontSize"], function (getPointsAlongPolyline, computeVoronoi, computeEdges, computeNodes, computeTraversal, computeCenterline, computeMeasurements, computeMaxFontSize) {
      return function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            label = _ref.label,
            polygon = _ref.polygon,
            _ref$numPerimeterPoin = _ref.numPerimeterPoints,
            numPerimeterPoints = _ref$numPerimeterPoin === void 0 ? 20 : _ref$numPerimeterPoin,
            _ref$measurementStep = _ref.measurementStep,
            measurementStep = _ref$measurementStep === void 0 ? 5 : _ref$measurementStep,
            _ref$offset = _ref.offset,
            offset = _ref$offset === void 0 ? 0.5 : _ref$offset,
            _ref$simplification = _ref.simplification,
            simplification = _ref$simplification === void 0 ? 10 : _ref$simplification,
            _ref$strategy = _ref.strategy,
            strategy = _ref$strategy === void 0 ? "medium" : _ref$strategy;

        var simplifiedPolygon = getPointsAlongPolyline(polygon, numPerimeterPoints);
        var voronoi = computeVoronoi(simplifiedPolygon);
        var edges = computeEdges(voronoi, polygon);
        var nodes = computeNodes(edges);
        var traversal = computeTraversal(nodes, strategy);
        var centerline = computeCenterline(traversal, simplification);
        var measurements = computeMeasurements(simplifiedPolygon, centerline, offset, measurementStep);
        var maxFontSize = computeMaxFontSize(label, measurements, measurementStep);
        return {
          simplifiedPolygon: simplifiedPolygon,
          centerline: centerline,
          offset: offset,
          label: label,
          maxFontSize: maxFontSize
        };
      };
    });
    main.variable(observer("renderCenterlineLabel")).define("renderCenterlineLabel", ["DOM", "svg"], function (DOM, svg) {
      return function (_ref2) {
        var centerline = _ref2.centerline,
            offset = _ref2.offset,
            maxFontSize = _ref2.maxFontSize,
            label = _ref2.label;

        var _DOM$uid = DOM.uid("centerline"),
            id = _DOM$uid.id,
            href = _DOM$uid.href; // necessary for Firefox


        return svg(_templateObject5$1(), centerline, id, maxFontSize, href, 100 * offset, label);
      };
    });
    main.variable(observer("styles")).define("styles", ["html"], function (html) {
      return html(_templateObject6$1());
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject7$1());
    });
    main.variable(observer("computeOuterRing")).define("computeOuterRing", function () {
      return function (projection, feature) {
        var s = projection.scale(),
            t = projection.translate();
        return feature.geometry.coordinates[0][0].slice(1).map(function (point) {
          return [s * point[0] + t[0], s * point[1] + t[1]];
        });
      };
    });
    main.variable(observer("computeVoronoi")).define("computeVoronoi", ["d3"], function (d3) {
      return function (polygon) {
        var _d3$extent = d3.extent(polygon.map(function (d) {
          return d[0];
        })),
            _d3$extent2 = _slicedToArray(_d3$extent, 2),
            x0 = _d3$extent2[0],
            x1 = _d3$extent2[1];

        var _d3$extent3 = d3.extent(polygon.map(function (d) {
          return d[1];
        })),
            _d3$extent4 = _slicedToArray(_d3$extent3, 2),
            y0 = _d3$extent4[0],
            y1 = _d3$extent4[1];

        var v = d3.voronoi().extent([[x0 - 1, y0 - 1], [x1 + 1, y1 + 1]]);
        return v(polygon).edges;
      };
    });
    main.variable(observer("computeEdges")).define("computeEdges", ["d3", "findClosestPolygonIntersection", "distanceBetween"], function (d3, findClosestPolygonIntersection, distanceBetween) {
      return function (voronoi, polygon) {
        return voronoi.filter(function (edge) {
          if (edge && edge.right) {
            var inside = edge.map(function (point) {
              return d3.polygonContains(polygon, point);
            });

            if (inside[0] === inside[1]) {
              return inside[0];
            }

            if (inside[1]) {
              edge.reverse();
            }

            return true;
          }

          return false;
        }).map(function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
              _ref4 = _slicedToArray(_ref3, 2),
              start = _ref4[0],
              end = _ref4[1];

          var _findClosestPolygonIn = findClosestPolygonIntersection(start, end, polygon),
              intersection = _findClosestPolygonIn.intersection,
              distance = _findClosestPolygonIn.distance;

          if (intersection) {
            intersection.clipped = true;
          } // Each edge has a starting point, a clipped end point, and an original end point


          var edge = [start, intersection || end];
          edge.distance = intersection ? distance : distanceBetween(start, end);
          return edge;
        });
      };
    });
    main.variable(observer("computeNodes")).define("computeNodes", function () {
      return function (edges) {
        var nodes = [];
        edges.forEach(function (edge) {
          edge.forEach(function (node, i) {
            if (!i || !node.clipped) {
              var match = nodes.find(function (d) {
                return d === node;
              });

              if (match) {
                return node.id = match.id;
              }
            }

            node.id = nodes.length.toString();
            node.links = {};
            nodes.push(node);
          });
          edge[0].links[edge[1].id] = edge.distance;
          edge[1].links[edge[0].id] = edge.distance;
        });
        return nodes;
      };
    });
    main.variable(observer("computeTraversal")).define("computeTraversal", ["Graph", "fitnessFunction"], function (Graph, fitnessFunction) {
      return function computeTraversal(nodes, strategy) {
        var perimeterNodes = nodes.filter(function (d) {
          return d.clipped;
        });
        var graph = new Graph();
        nodes.forEach(function (node) {
          return graph.addNode(node.id, node.links);
        });
        var totalBest;

        var _loop = function _loop(i) {
          var start = perimeterNodes[i];
          var longestShortestPath = perimeterNodes.slice(i + 1).reduce(function (nodeBest, node) {
            var path = graph.path(node.id, start.id, {
              cost: true
            });

            if (path && (!nodeBest || path.cost > nodeBest.cost)) {
              return path;
            }

            return nodeBest;
          }, null);

          if (longestShortestPath && longestShortestPath.path) {
            longestShortestPath.path = longestShortestPath.path.map(function (id) {
              return nodes[+id];
            });
            longestShortestPath.cost = fitnessFunction(longestShortestPath.path, longestShortestPath.cost, strategy);

            if (!totalBest || longestShortestPath.cost > totalBest.cost) {
              totalBest = longestShortestPath;
            }
          }
        };

        for (var i = 0; i < perimeterNodes.length; i++) {
          _loop(i);
        }

        return totalBest.path;
      };
    });
    main.variable(observer("computeFlip")).define("computeFlip", function () {
      return function (simplifiedLine) {
        var _ref5 = [simplifiedLine[0], simplifiedLine[simplifiedLine.length - 1]],
            _ref5$ = _slicedToArray(_ref5[0], 2),
            x0 = _ref5$[0],
            y0 = _ref5$[1],
            _ref5$2 = _slicedToArray(_ref5[1], 2),
            x1 = _ref5$2[0],
            y1 = _ref5$2[1];

        var tangent = Math.atan2(y1 - y0, x1 - x0);
        return Math.abs(tangent) > Math.PI / 2;
      };
    });
    main.variable(observer("computeCenterline")).define("computeCenterline", ["simplify", "computeFlip", "d3"], function (simplify, computeFlip, d3) {
      return function (path, simplification) {
        var simplifiedLine = simplify(path, simplification);
        var flipText = computeFlip(simplifiedLine);
        return d3.line().curve(d3.curveBasis)(flipText ? simplifiedLine.slice(0).reverse() : simplifiedLine);
      };
    });
    main.variable(observer("computeMaxFontSize")).define("computeMaxFontSize", ["computeBbox"], function (computeBbox) {
      return function (label, measurements, measurementStep) {
        var bbox = computeBbox(label);
        var widthPerPixel = bbox.width / 100;
        var aspectRatio = bbox.width / bbox.height;
        var ceiling = Infinity,
            maxWidth = 0;
        measurements.forEach(function (pair, i) {
          pair.forEach(function (measurement) {
            ceiling = Math.min(measurement.distance, ceiling);
          });
          maxWidth = Math.max(maxWidth, 2 * Math.min(i * measurementStep, ceiling * aspectRatio));
        });
        return maxWidth / widthPerPixel;
      };
    });
    main.variable(observer("computeMeasurements")).define("computeMeasurements", ["DOM", "d3", "tangentAt", "findClosestPolygonIntersection", "rotatePoint", "width"], function (DOM, d3, tangentAt, findClosestPolygonIntersection, rotatePoint, width) {
      return function (polygon, centerline, offset, measurementStep) {
        var svg = DOM.svg(1, 1);
        var path = d3.select(svg).append("path").attr("d", centerline).node();
        var length = path.getTotalLength();
        var measurements = [];

        for (var halfwidth = 0; halfwidth < Math.min(length * offset, length * (1 - offset)); halfwidth += measurementStep) {
          measurements.push([length * offset + halfwidth, length * offset - halfwidth].map(function (l) {
            var _path$getPointAtLengt = path.getPointAtLength(l),
                x = _path$getPointAtLengt.x,
                y = _path$getPointAtLengt.y,
                tangent = tangentAt(path, l);

            var perpendiculars = [tangent - Math.PI / 2, tangent + Math.PI / 2].map(function (angle) {
              return findClosestPolygonIntersection([x, y], rotatePoint([x + width, y], angle, [x, y]), polygon);
            }).filter(function (d) {
              return d.intersection;
            }).sort(function (a, b) {
              return a.distance - b.distance;
            });

            if (!perpendiculars.length) {
              return null;
            }

            var _perpendiculars$ = perpendiculars[0],
                intersection = _perpendiculars$.intersection,
                distance = _perpendiculars$.distance;
            var line = [intersection, [2 * x - intersection[0], 2 * y - intersection[1]]];
            line.distance = distance;
            return line;
          }).filter(function (d) {
            return d;
          }));
        }

        return measurements;
      };
    });
    main.variable(observer("computeBbox")).define("computeBbox", ["DOM", "d3"], function (DOM, d3) {
      return function (label) {
        var svg = DOM.svg(1, 1);
        var text = d3.select(svg).append("text").attr("class", "label").style("font-size", "100px").text(label).node();
        document.body.appendChild(svg);
        var boundingBox = text.getBBox();
        document.body.removeChild(svg);
        return boundingBox;
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject8$1());
    });
    main.variable(observer("fitnessFunction")).define("fitnessFunction", ["distanceBetween"], function (distanceBetween) {
      return function fitnessFunction(path, length, strategy) {
        var fitness = length;

        if (strategy !== "longest") {
          var sinuosity = length / distanceBetween(path[0], path[path.length - 1]); // divide the length by some power of the sinuosity
          // these choices are arbitrary, play with them!

          fitness /= Math.pow(sinuosity, strategy === "medium" ? 2 : 4);
        }

        return fitness;
      };
    });
    main.variable(observer("findClosestPolygonIntersection")).define("findClosestPolygonIntersection", ["findIntersection", "distanceBetween"], function (findIntersection, distanceBetween) {
      return function findClosestPolygonIntersection(start, end, polygon) {
        return polygon.reduce(function (best, point, i) {
          var intersection = findIntersection(start, end, point, polygon[i + 1] || polygon[0]);

          if (intersection) {
            var distance = distanceBetween(start, intersection);

            if (!best.distance || distance < best.distance) {
              return {
                intersection: intersection,
                distance: distance
              };
            }
          }

          return best;
        }, {});
      };
    });
    main.variable(observer("getPointsAlongPolyline")).define("getPointsAlongPolyline", ["distanceBetween", "d3"], function (distanceBetween, d3) {
      return function getPointsAlongPolyline(polyline, count) {
        var distances = polyline.map(function (p, i) {
          return distanceBetween(p, polyline[i + 1] || polyline[0]);
        });
        var totalLength = d3.sum(distances);
        var step = totalLength / count;
        var traversed = 0;
        var next = step / 2;
        var done = polyline.reduce(function (arr, point, i) {
          while (next < traversed + distances[i]) {
            var a = point,
                b = polyline[i + 1] || polyline[0],
                pct = (next - traversed) / distances[i];
            arr.push([a[0] + (b[0] - a[0]) * pct, a[1] + (b[1] - a[1]) * pct]);
            next += step;
          }

          traversed += distances[i];
          return arr;
        }, []);
        return done;
      };
    });
    main.variable(observer("findIntersection")).define("findIntersection", function () {
      return function findIntersection(a1, a2, b1, b2) {
        // Adapted from https://github.com/Turfjs/turf-line-slice-at-intersection
        var uaT = (b2[0] - b1[0]) * (a1[1] - b1[1]) - (b2[1] - b1[1]) * (a1[0] - b1[0]),
            ubT = (a2[0] - a1[0]) * (a1[1] - b1[1]) - (a2[1] - a1[1]) * (a1[0] - b1[0]),
            uB = (b2[1] - b1[1]) * (a2[0] - a1[0]) - (b2[0] - b1[0]) * (a2[1] - a1[1]);

        if (uB !== 0) {
          var ua = uaT / uB,
              ub = ubT / uB;

          if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
            return [a1[0] + ua * (a2[0] - a1[0]), a1[1] + ua * (a2[1] - a1[1])];
          }
        }
      };
    });
    main.variable(observer("rotatePoint")).define("rotatePoint", function () {
      return function rotatePoint(point, angle, center) {
        var x2 = (point[0] - center[0]) * Math.cos(angle) - (point[1] - center[1]) * Math.sin(angle),
            y2 = (point[0] - center[0]) * Math.sin(angle) + (point[1] - center[1]) * Math.cos(angle);
        return [(point[0] - center[0]) * Math.cos(angle) - (point[1] - center[1]) * Math.sin(angle) + center[0], (point[0] - center[0]) * Math.sin(angle) + (point[1] - center[1]) * Math.cos(angle) + center[1]];
      };
    });
    main.variable(observer("tangentAt")).define("tangentAt", function () {
      return function tangentAt(el, len) {
        var _ref6 = [el.getPointAtLength(Math.max(len - 0.01, 0)), el.getPointAtLength(len + 0.01)],
            a = _ref6[0],
            b = _ref6[1];
        return Math.atan2(b.y - a.y, b.x - a.x);
      };
    });
    main.variable(observer("distanceBetween")).define("distanceBetween", function () {
      return function distanceBetween(a, b) {
        var dx = a[0] - b[0],
            dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
      };
    });
    main.variable(observer("Graph")).define("Graph", function () {
      // Observable-compatible stub of Alberto Restifo's node-dijsktra
      // https://github.com/albertorestifo/node-dijkstra
      var Queue = /*#__PURE__*/function () {
        /**
         * Creates a new empty priority queue
         */
        function Queue() {
          _classCallCheck(this, Queue);

          // The `keys` set is used to greatly improve the speed at which we can
          // check the presence of a value in the queue
          this.keys = new Set();
          this.queue = [];
        }
        /**
         * Sort the queue to have the least expensive node to visit on top
         *
         * @private
         */


        _createClass(Queue, [{
          key: "sort",
          value: function sort() {
            this.queue.sort(function (a, b) {
              return a.priority - b.priority;
            });
          }
          /**
           * Sets a priority for a key in the queue.
           * Inserts it in the queue if it does not already exists.
           *
           * @param {any}     key       Key to update or insert
           * @param {number}  value     Priority of the key
           * @return {number} Size of the queue
           */

        }, {
          key: "set",
          value: function set(key, value) {
            var priority = Number(value);
            if (isNaN(priority)) throw new TypeError('"priority" must be a number');

            if (!this.keys.has(key)) {
              // Insert a new entry if the key is not already in the queue
              this.keys.add(key);
              this.queue.push({
                key: key,
                priority: priority
              });
            } else {
              // Update the priority of an existing key
              this.queue.map(function (element) {
                if (element.key === key) {
                  Object.assign(element, {
                    priority: priority
                  });
                }

                return element;
              });
            }

            this.sort();
            return this.queue.length;
          }
          /**
           * The next method is used to dequeue a key:
           * It removes the first element from the queue and returns it
           *
           * @return {object} First priority queue entry
           */

        }, {
          key: "next",
          value: function next() {
            var element = this.queue.shift(); // Remove the key from the `_keys` set

            this.keys["delete"](element.key);
            return element;
          }
          /**
           * @return {boolean} `true` when the queue is empty
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return Boolean(this.queue.length === 0);
          }
          /**
           * Check if the queue has a key in it
           *
           * @param {any} key   Key to lookup
           * @return {boolean}
           */

        }, {
          key: "has",
          value: function has(key) {
            return this.keys.has(key);
          }
          /**
           * Get the element in the queue with the specified key
           *
           * @param {any} key   Key to lookup
           * @return {object}
           */

        }, {
          key: "get",
          value: function get(key) {
            return this.queue.find(function (element) {
              return element.key === key;
            });
          }
        }]);

        return Queue;
      }();

      var Graph = /*#__PURE__*/function () {
        /**
         * Creates a new Graph, optionally initializing it a nodes graph representation.
         *
         * A graph representation is an object that has as keys the name of the point and as values
         * the points reacheable from that node, with the cost to get there:
         *
         *     {
         *       node (Number|String): {
         *         neighbor (Number|String): cost (Number),
         *         ...,
         *       },
         *     }
         *
         * In alternative to an object, you can pass a `Map` of `Map`. This will
         * allow you to specify numbers as keys.
         *
         * @param {Objec|Map} [graph] - Initial graph definition
         * @example
         *
         * const route = new Graph();
         *
         * // Pre-populated graph
         * const route = new Graph({
         *   A: { B: 1 },
         *   B: { A: 1, C: 2, D: 4 },
         * });
         *
         * // Passing a Map
         * const g = new Map()
         *
         * const a = new Map()
         * a.set('B', 1)
         *
         * const b = new Map()
         * b.set('A', 1)
         * b.set('C', 2)
         * b.set('D', 4)
         *
         * g.set('A', a)
         * g.set('B', b)
         *
         * const route = new Graph(g)
         */
        function Graph(graph) {
          _classCallCheck(this, Graph);

          if (graph instanceof Map) {
            validateDeep(graph);
            this.graph = graph;
          } else if (graph) {
            this.graph = toDeepMap(graph);
          } else {
            this.graph = new Map();
          }
        }
        /**
         * Adds a node to the graph
         *
         * @param {string} name      - Name of the node
         * @param {Object|Map} neighbors - Neighbouring nodes and cost to reach them
         * @return {this}
         * @example
         *
         * const route = new Graph();
         *
         * route.addNode('A', { B: 1 });
         *
         * // It's possible to chain the calls
         * route
         *   .addNode('B', { A: 1 })
         *   .addNode('C', { A: 3 });
         *
         * // The neighbors can be expressed in a Map
         * const d = new Map()
         * d.set('A', 2)
         * d.set('B', 8)
         *
         * route.addNode('D', d)
         */


        _createClass(Graph, [{
          key: "addNode",
          value: function addNode(name, neighbors) {
            var nodes;

            if (neighbors instanceof Map) {
              validateDeep(neighbors);
              nodes = neighbors;
            } else {
              nodes = toDeepMap(neighbors);
            }

            this.graph.set(name, nodes);
            return this;
          }
          /**
           * @deprecated since version 2.0, use `Graph#addNode` instead
           */

        }, {
          key: "addVertex",
          value: function addVertex(name, neighbors) {
            return this.addNode(name, neighbors);
          }
          /**
           * Removes a node and all of its references from the graph
           *
           * @param {string|number} key - Key of the node to remove from the graph
           * @return {this}
           * @example
           *
           * const route = new Graph({
           *   A: { B: 1, C: 5 },
           *   B: { A: 3 },
           *   C: { B: 2, A: 2 },
           * });
           *
           * route.removeNode('C');
           * // The graph now is:
           * // { A: { B: 1 }, B: { A: 3 } }
           */

        }, {
          key: "removeNode",
          value: function removeNode(key) {
            this.graph = removeDeepFromMap(this.graph, key);
            return this;
          }
          /**
           * Compute the shortest path between the specified nodes
           *
           * @param {string}  start     - Starting node
           * @param {string}  goal      - Node we want to reach
           * @param {object}  [options] - Options
           *
           * @param {boolean} [options.trim]    - Exclude the origin and destination nodes from the result
           * @param {boolean} [options.reverse] - Return the path in reversed order
           * @param {boolean} [options.cost]    - Also return the cost of the path when set to true
           *
           * @return {array|object} Computed path between the nodes.
           *
           *  When `option.cost` is set to true, the returned value will be an object with shape:
           *    - `path` *(Array)*: Computed path between the nodes
           *    - `cost` *(Number)*: Cost of the path
           *
           * @example
           *
           * const route = new Graph()
           *
           * route.addNode('A', { B: 1 })
           * route.addNode('B', { A: 1, C: 2, D: 4 })
           * route.addNode('C', { B: 2, D: 1 })
           * route.addNode('D', { C: 1, B: 4 })
           *
           * route.path('A', 'D') // => ['A', 'B', 'C', 'D']
           *
           * // trimmed
           * route.path('A', 'D', { trim: true }) // => [B', 'C']
           *
           * // reversed
           * route.path('A', 'D', { reverse: true }) // => ['D', 'C', 'B', 'A']
           *
           * // include the cost
           * route.path('A', 'D', { cost: true })
           * // => {
           * //       path: [ 'A', 'B', 'C', 'D' ],
           * //       cost: 4
           * //    }
           */

        }, {
          key: "path",
          value: function path(start, goal) {
            var _this = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            // Don't run when we don't have nodes set
            if (!this.graph.size) {
              if (options.cost) return {
                path: null,
                cost: 0
              };
              return null;
            }

            var explored = new Set();
            var frontier = new Queue();
            var previous = new Map();
            var path = [];
            var totalCost = 0;
            var avoid = [];
            if (options.avoid) avoid = [].concat(options.avoid);

            if (avoid.includes(start)) {
              throw new Error("Starting node (".concat(start, ") cannot be avoided"));
            } else if (avoid.includes(goal)) {
              throw new Error("Ending node (".concat(goal, ") cannot be avoided"));
            } // Add the starting point to the frontier, it will be the first node visited


            frontier.set(start, 0); // Run until we have visited every node in the frontier

            var _loop2 = function _loop2() {
              // Get the node in the frontier with the lowest cost (`priority`)
              var node = frontier.next(); // When the node with the lowest cost in the frontier in our goal node,
              // we can compute the path and exit the loop

              if (node.key === goal) {
                // Set the total cost to the current value
                totalCost = node.priority;
                var nodeKey = node.key;

                while (previous.has(nodeKey)) {
                  path.push(nodeKey);
                  nodeKey = previous.get(nodeKey);
                }

                return "break";
              } // Add the current node to the explored set


              explored.add(node.key); // Loop all the neighboring nodes

              var neighbors = _this.graph.get(node.key) || new Map();
              neighbors.forEach(function (nCost, nNode) {
                // If we already explored the node, or the node is to be avoided, skip it
                if (explored.has(nNode) || avoid.includes(nNode)) return null; // If the neighboring node is not yet in the frontier, we add it with
                // the correct cost

                if (!frontier.has(nNode)) {
                  previous.set(nNode, node.key);
                  return frontier.set(nNode, node.priority + nCost);
                }

                var frontierPriority = frontier.get(nNode).priority;
                var nodeCost = node.priority + nCost; // Otherwise we only update the cost of this node in the frontier when
                // it's below what's currently set

                if (nodeCost < frontierPriority) {
                  previous.set(nNode, node.key);
                  return frontier.set(nNode, nodeCost);
                }

                return null;
              });
            };

            while (!frontier.isEmpty()) {
              var _ret = _loop2();

              if (_ret === "break") break;
            } // Return null when no path can be found


            if (!path.length) {
              if (options.cost) return {
                path: null,
                cost: 0
              };
              return null;
            } // From now on, keep in mind that `path` is populated in reverse order,
            // from destination to origin
            // Remove the first value (the goal node) if we want a trimmed result


            if (options.trim) {
              path.shift();
            } else {
              // Add the origin waypoint at the end of the array
              path = path.concat([start]);
            } // Reverse the path if we don't want it reversed, so the result will be
            // from `start` to `goal`


            if (!options.reverse) {
              path = path.reverse();
            } // Return an object if we also want the cost


            if (options.cost) {
              return {
                path: path,
                cost: totalCost
              };
            }

            return path;
          }
          /**
           * @deprecated since version 2.0, use `Graph#path` instead
           */

        }, {
          key: "shortestPath",
          value: function shortestPath() {
            return this.path.apply(this, arguments);
          }
        }]);

        return Graph;
      }();

      function validateDeep(map) {
        if (!(map instanceof Map)) {
          throw new Error("Invalid graph: Expected Map instead found ".concat(_typeof(map)));
        }

        map.forEach(function (value, key) {
          if (_typeof(value) === 'object' && value instanceof Map) {
            validateDeep(value);
            return;
          }

          if (typeof value !== 'number' || value <= 0) {
            throw new Error("Values must be numbers greater than 0. Found value ".concat(value, " at ").concat(key));
          }
        });
      }

      function toDeepMap(source) {
        var map = new Map();
        var keys = Object.keys(source);
        keys.forEach(function (key) {
          var val = source[key];

          if (val !== null && _typeof(val) === 'object' && !Array.isArray(val)) {
            return map.set(key, toDeepMap(val));
          }

          if (!isValidNode(val)) {
            throw new Error("Could not add node at key \"".concat(key, "\", make sure it's a valid node"), val);
          }

          return map.set(key, Number(val));
        });
        return map;
      }

      function isValidNode(val) {
        var cost = Number(val);

        if (isNaN(cost) || cost <= 0) {
          return false;
        }

        return true;
      }

      function removeDeepFromMap(map, key) {
        var newMap = new Map();

        var _iterator = _createForOfIteratorHelper(map),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                aKey = _step$value[0],
                val = _step$value[1];

            if (aKey !== key && val instanceof Map) {
              newMap.set(aKey, removeDeepFromMap(val, key));
            } else if (aKey !== key) {
              newMap.set(aKey, val);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return newMap;
      }

      return Graph;
    });
    main.variable(observer("simplify")).define("simplify", ["simplifyJS"], function (simplifyJS) {
      return function simplify(points, simplification) {
        // Convert from [x, y] to { x, y } and back for simplify-js
        return simplifyJS(points.map(function (p) {
          return {
            x: p[0],
            y: p[1]
          };
        }), simplification).map(function (p) {
          return [p.x, p.y];
        });
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject9$1());
    });
    main.variable(observer("simplifyJS")).define("simplifyJS", ["require"], function (require) {
      return require("simplify-js");
    });
    main.variable(observer("d3")).define("d3", ["require"], function (require) {
      return require("d3@5");
    });
    var child1 = runtime.module(define$1);
    main["import"]("radio", child1);
    return main;
  }

  function _templateObject7$2() {
    var data = _taggedTemplateLiteral(["\n## Libraries"]);

    _templateObject7$2 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$2() {
    var data = _taggedTemplateLiteral(["\n### Smooth Shape Transition"]);

    _templateObject6$2 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$2() {
    var data = _taggedTemplateLiteral(["\n### D3 Join"]);

    _templateObject5$2 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$2() {
    var data = _taggedTemplateLiteral(["<div style=\"display: flex; margin-top: 0.5em;\">\n            ", "\n          </div>"]);

    _templateObject4$2 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteral(["<div\n                      style=\"background: #666; width: 10px; height: 10px;\"\n                    />"]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$3() {
    var data = _taggedTemplateLiteral(["<div\n              style=\"\n          display: flex;\n          align-items: center;\n          margin: 0em 0.4em;\n          cursor: ", ";\n      \"\n            >\n              <span\n                style=\"display: flex; align-self: center; border-radius: 10%; overflow: hidden;\"\n              >\n                ", "\n              </span>\n              <span style=\"margin-left: 0.3em; font-weight: bold; \"\n                >", "</span\n              >\n              <span style=\"margin-left: 0.2em;\"\n                >", "</span\n              >\n            </div>"]);

    _templateObject2$3 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["<div\n              style=\"display: flex; flex-direction: column; font-family: ", ";\"\n            >\n              ", "", "\n            </div>"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  function define$3(runtime, observer) {
    var main = runtime.module();
    main.variable(observer("data")).define("data", ["d3"], /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(d3) {
        var flare;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return d3.json("https://raw.githubusercontent.com/d3/d3-hierarchy/master/test/data/flare.json");

              case 2:
                flare = _context.sent;
                return _context.abrupt("return", d3.hierarchy(flare).sum(function (d) {
                  return d.children ? 0 : Math.random() * 10;
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());
    main.variable(observer("__exampleChart")).define("__exampleChart", ["renderChart", "data", "width"], function (renderChart, data, width) {
      return renderChart({
        data: data,
        size: {
          width: width,
          height: 400
        }
      });
    });
    main.variable(observer("__style")).define("__style", ["styles"], function (styles) {
      return styles;
    });
    main.variable(observer("renderChart")).define("renderChart", ["createDispatcher", "d3", "titelize", "html", "renderPath", "_", "renderMap"], function (createDispatcher, d3, titelize, html, renderPath, _, renderMap) {
      return /*#__PURE__*/function () {
        var _renderChart = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
          var data, _ref2$dispatcher, dispatcher, _ref2$colorScale, colorScale, _ref2$formatNumber, formatNumber, getImage, _ref2$getName, getName, _ref2$fontFamily, fontFamily, _ref2$getValue, getValue, rest, focus, hover, renderComposit, createEventPromise, firstFocus, map;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  data = _ref2.data, _ref2$dispatcher = _ref2.dispatcher, dispatcher = _ref2$dispatcher === void 0 ? createDispatcher() : _ref2$dispatcher, _ref2$colorScale = _ref2.colorScale, colorScale = _ref2$colorScale === void 0 ? d3.scaleSequential(d3.interpolateTurbo) : _ref2$colorScale, _ref2$formatNumber = _ref2.formatNumber, formatNumber = _ref2$formatNumber === void 0 ? d3.format(",.0f") : _ref2$formatNumber, getImage = _ref2.getImage, _ref2$getName = _ref2.getName, getName = _ref2$getName === void 0 ? function (d) {
                    return titelize(d.data.name);
                  } : _ref2$getName, _ref2$fontFamily = _ref2.fontFamily, fontFamily = _ref2$fontFamily === void 0 ? "Arial, Helvetica, sans-serif" : _ref2$fontFamily, _ref2$getValue = _ref2.getValue, getValue = _ref2$getValue === void 0 ? function (d) {
                    return d.value;
                  } : _ref2$getValue, rest = _objectWithoutProperties(_ref2, ["data", "dispatcher", "colorScale", "formatNumber", "getImage", "getName", "fontFamily", "getValue"]);
                  focus = null;
                  hover = null;

                  renderComposit = function renderComposit() {
                    return html(_templateObject$3(), fontFamily, map, renderPath({
                      colorScale: colorScale,
                      dispatcher: dispatcher,
                      focus: focus,
                      formatNumber: formatNumber,
                      getImage: getImage,
                      getName: getName,
                      getValue: getValue,
                      hover: hover
                    }));
                  };

                  createEventPromise = function createEventPromise() {
                    return new Promise(function (resolve) {
                      dispatcher.on("focus-gain.chart-join", function (node) {
                        focus = node;
                        resolve();
                      });
                      dispatcher.on("hover-gain.chart-join", function (node) {
                        hover = node;
                        resolve();
                      });
                      dispatcher.on("hover-lose.chart-join", function () {
                        hover = null;

                        _.debounce(resolve, 100)();
                      });
                    });
                  };

                  firstFocus = createEventPromise();
                  map = renderMap(_objectSpread2({
                    colorScale: colorScale,
                    data: data,
                    dispatcher: dispatcher,
                    getImage: getImage,
                    getName: getName,
                    getValue: getValue
                  }, rest));
                  _context2.next = 9;
                  return _awaitAsyncGenerator(firstFocus);

                case 9:
                  _context2.next = 11;
                  return renderComposit();

                case 11:

                  _context2.next = 14;
                  return _awaitAsyncGenerator(createEventPromise());

                case 14:
                  _context2.next = 16;
                  return renderComposit();

                case 16:
                  _context2.next = 11;
                  break;

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function renderChart(_x) {
          return _renderChart.apply(this, arguments);
        }

        return renderChart;
      }();
    });
    main.variable(observer("renderPath")).define("renderPath", ["createDispatcher", "titelize", "html", "renderColorRamp"], function (createDispatcher, titelize, html, renderColorRamp) {
      var _this = this;

      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            colorScale = _ref3.colorScale,
            _ref3$dispatcher = _ref3.dispatcher,
            dispatcher = _ref3$dispatcher === void 0 ? createDispatcher() : _ref3$dispatcher,
            focus = _ref3.focus,
            formatNumber = _ref3.formatNumber,
            getImage = _ref3.getImage,
            _ref3$getName = _ref3.getName,
            getName = _ref3$getName === void 0 ? function (d) {
          return titelize(d.data.name);
        } : _ref3$getName,
            getValue = _ref3.getValue,
            hover = _ref3.hover;

        var hoverPath = hover ? hover.ancestors().reverse().filter(function (d) {
          return d.depth > focus.depth;
        }) : [];
        var focusPath = focus.ancestors().reverse();
        var path = [].concat(_toConsumableArray(focusPath), _toConsumableArray(hoverPath));

        var renderElement = function renderElement(node) {
          var element = html(_templateObject2$3(), node === focus ? "not-allowed" : "pointer", getImage ? html(_templateObject3$2()) : renderColorRamp({
            colorScale: colorScale,
            colorDomain: node.colorDomain,
            width: 20,
            height: 20
          }), getName(node), formatNumber(getValue(node)));
          element.addEventListener("click", function () {
            return dispatcher.call("focus", _this, node);
          });
          return element;
        };

        return html(_templateObject4$2(), path.map(renderElement));
      };
    });
    main.variable(observer("renderMap")).define("renderMap", ["d3", "createDispatcher", "titelize", "width", "establishColor", "coordinatePolygons", "nodeEnter", "nodeUpdate"], function (d3, createDispatcher, titelize, width, establishColor, coordinatePolygons, nodeEnter, nodeUpdate) {
      var _this2 = this;

      return function (_ref4) {
        var _ref4$colorScale = _ref4.colorScale,
            colorScale = _ref4$colorScale === void 0 ? d3.scaleSequential(d3.interpolateTurbo) : _ref4$colorScale,
            _ref4$createBaseShape = _ref4.createBaseShape,
            createBaseShape = _ref4$createBaseShape === void 0 ? function (width, height, upButtonSize, showUpButton) {
          return showUpButton ? [[0, upButtonSize], [upButtonSize, 0], [width - 1, 0], [width - 1, height - 1], [0, height - 1]] : [[0, 0], [width - 1, 0], [width - 1, height - 1], [0, height - 1]];
        } : _ref4$createBaseShape,
            _ref4$backgroundColor = _ref4.backgroundColor,
            backgroundColor = _ref4$backgroundColor === void 0 ? "black" : _ref4$backgroundColor,
            data = _ref4.data,
            _ref4$dispatcher = _ref4.dispatcher,
            dispatcher = _ref4$dispatcher === void 0 ? createDispatcher() : _ref4$dispatcher,
            _ref4$formatNumber = _ref4.formatNumber,
            formatNumber = _ref4$formatNumber === void 0 ? d3.format(",.0f") : _ref4$formatNumber,
            _ref4$getColor = _ref4.getColor,
            getColor = _ref4$getColor === void 0 ? function (d) {
          return colorScale(d.colorValue);
        } : _ref4$getColor,
            _ref4$getId = _ref4.getId,
            getId = _ref4$getId === void 0 ? function (d) {
          return d.data.name;
        } : _ref4$getId,
            _ref4$getImage = _ref4.getImage,
            getImage = _ref4$getImage === void 0 ? null : _ref4$getImage,
            _ref4$getName = _ref4.getName,
            getName = _ref4$getName === void 0 ? function (d) {
          return titelize(d.data.name);
        } : _ref4$getName,
            _ref4$getValue = _ref4.getValue,
            _ref4$isEqual = _ref4.isEqual,
            isEqual = _ref4$isEqual === void 0 ? function (a, b) {
          return getId(a) === getId(b);
        } : _ref4$isEqual,
            _ref4$margin = _ref4.margin,
            margin = _ref4$margin === void 0 ? {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        } : _ref4$margin,
            _ref4$onFocus = _ref4.onFocus,
            onFocus = _ref4$onFocus === void 0 ? function () {} : _ref4$onFocus,
            _ref4$onHover = _ref4.onHover,
            onHover = _ref4$onHover === void 0 ? function () {} : _ref4$onHover,
            _ref4$phase1Duration = _ref4.phase1Duration,
            phase1Duration = _ref4$phase1Duration === void 0 ? 1200 : _ref4$phase1Duration,
            _ref4$phase2Duration = _ref4.phase2Duration,
            phase2Duration = _ref4$phase2Duration === void 0 ? 500 : _ref4$phase2Duration,
            _ref4$showUpButton = _ref4.showUpButton,
            showUpButton = _ref4$showUpButton === void 0 ? true : _ref4$showUpButton,
            _ref4$size = _ref4.size,
            size = _ref4$size === void 0 ? {
          width: width,
          height: 600
        } : _ref4$size,
            _ref4$strokeWidthRang = _ref4.strokeWidthRange,
            strokeWidthRange = _ref4$strokeWidthRang === void 0 ? [15, 0.5] : _ref4$strokeWidthRang,
            _ref4$strokeWidth = _ref4.strokeWidth,
            strokeWidth = _ref4$strokeWidth === void 0 ? d3.scalePow().exponent(1.2).range(strokeWidthRange) : _ref4$strokeWidth,
            _ref4$upButtonSize = _ref4.upButtonSize,
            upButtonSize = _ref4$upButtonSize === void 0 ? 100 : _ref4$upButtonSize;
        return function () {
          var _ref5 = [size.width - (margin.left + margin.right), size.height - (margin.top + margin.bottom)],
              width = _ref5[0],
              height = _ref5[1];
          var baseShape = createBaseShape(width, height, upButtonSize, showUpButton);
          var current = null;

          var focusParent = function focusParent() {
            return current.parent ? renderNode(current.parent) : null;
          };

          dispatcher.on("focus", renderNode);
          document.addEventListener("keyup", function (_ref6) {
            var code = _ref6.code,
                key = _ref6.key;

            if (code === "ArrowUp" || code === "Escape") {
              focusParent();
            }
          });
          var svg = d3.create("svg").attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom]);
          svg.append("rect").attr("width", "100%").attr("height", "100%").style("fill", backgroundColor);
          var voronoi = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          if (showUpButton) {
            var upButton = svg.append("g").classed("up-button", true).attr("cursor", "pointer").on("click", focusParent);
            upButton.append("path").datum([[0, 0], [0, upButtonSize], [upButtonSize, 0]]).attr("d", d3.line()).attr("cx", upButtonSize / 2).attr("cy", upButtonSize / 2).attr("r", upButtonSize / 2).attr("fill", "white");
            upButton.append("text").attr("fill", backgroundColor).attr("font-size", "40px").attr("font-weight", "bold").attr("dx", "0.1em").attr("dy", "1.1em").text("UP");
            upButton.append("title");
          }

          establishColor(data);
          strokeWidth.domain(d3.extent(data.descendants(), function (d) {
            return d.depth;
          }));

          var computeRelatedness = function computeRelatedness(node) {
            var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
              dummy: 0
            };

            if (!map[getId(node)] && !isEqual(node, current)) {
              map[getId(node)] = score;
              computeRelatedness(node.parent, score / 2, map);
              (node.children || []).forEach(function (child) {
                return computeRelatedness(child, score / 2, map);
              });
            }

            return map;
          };

          var opacityFactory = function opacityFactory(node) {
            var relatednessMap = computeRelatedness(node);
            var opacityScale = d3.scalePow().exponent(0.5).domain(d3.extent(Object.values(relatednessMap))).range([0.3, 1]);
            return function (d) {
              var relatedness = relatednessMap[getId(d)];
              return relatedness ? opacityScale(relatedness) : 0.2;
            };
          };

          var handleHoverEnter = function handleHoverEnter(node) {
            dispatcher.call("hover-gain", _this2, node);

            if (!isEqual(node, current)) {
              onHover(node);
              var nodeOpacity = opacityFactory(node);
              voronoi.selectAll(".node").filter(function (d) {
                return d.height === 0;
              }).attr("opacity", nodeOpacity);
            }
          };

          var handleHoverExit = function handleHoverExit(node) {
            dispatcher.call("hover-lose", _this2);
            voronoi.selectAll(".node").filter(function (d) {
              return d.height === 0;
            }).attr("opacity", 1);
          };

          var handleNodeClick = function handleNodeClick(node) {
            var target = node !== current ? node.ancestors().find(function (d) {
              return d.depth === current.depth + 1;
            }) : node.parent;

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
            node.each(function (node) {
              return node.oldPolygon = node.polygon;
            });

            if (showUpButton) {
              var _upButton = svg.select(".up-button").attr("cursor", node.depth === 0 ? "not-allowed" : "pointer");

              _upButton.select("text").attr("opacity", node.depth === 0 ? 0.5 : 1);

              _upButton.select("title").text(node.depth === 0 ? "" : "Click to select ".concat(getName(node.parent)));
            }

            var voronoiTreeMap = d3.voronoiTreemap().prng(new Math.seedrandom("a seed")).clip(baseShape);
            voronoiTreeMap(node);
            node.each(function (node) {
              var _d3$extent = d3.extent(node.polygon, function (d) {
                return d[0];
              }),
                  _d3$extent2 = _slicedToArray(_d3$extent, 2),
                  x0 = _d3$extent2[0],
                  x1 = _d3$extent2[1];

              var _d3$extent3 = d3.extent(node.polygon, function (d) {
                return d[1];
              }),
                  _d3$extent4 = _slicedToArray(_d3$extent3, 2),
                  y0 = _d3$extent4[0],
                  y1 = _d3$extent4[1];

              node.simplePolygon = node.polygon;
              var width = x1 - x0;
              var height = y1 - y0;
              node.polyProps = {
                centroid: d3.polygonCentroid(node.simplePolygon),
                bounds: [[x0, y0], [x1, y1]],
                width: width,
                height: height,
                aspect: height / width,
                max: d3.max([width, height]),
                min: d3.min([width, height])
              };
              node.polygon = coordinatePolygons(node.oldPolygon, node.polygon);
            });
            var nodes = node.descendants().sort(function (a, b) {
              return b.depth - a.depth;
            });

            var nodeExit = function nodeExit(selection) {
              selection.remove();
            };

            voronoi.selectAll(".node").data(nodes, getId).join(function (selection) {
              return nodeEnter({
                selection: selection,
                backgroundColor: backgroundColor,
                current: node,
                getColor: getColor,
                getId: getId,
                getImage: getImage,
                getName: getName,
                handleNodeClick: handleNodeClick,
                handleHoverEnter: handleHoverEnter,
                handleHoverExit: handleHoverExit,
                phase1Duration: phase1Duration,
                phase2Duration: phase2Duration,
                prevouse: current,
                strokeWidth: strokeWidth
              });
            }, function (selection) {
              return nodeUpdate({
                selection: selection,
                current: node,
                getImage: getImage,
                getName: getName,
                handleHoverEnter: handleHoverEnter,
                handleHoverExit: handleHoverExit,
                phase1Duration: phase1Duration,
                phase2Duration: phase2Duration,
                strokeWidth: strokeWidth
              });
            }, nodeExit);
            current = node;
          }

          renderNode(data);
          return svg.node();
        }();
      };
    });
    main.variable(observer("renderColorRamp")).define("renderColorRamp", ["DOM", "d3"], function (DOM, d3) {
      return function (_ref7) {
        var colorScale = _ref7.colorScale,
            _ref7$colorDomain = _ref7.colorDomain,
            colorDomain = _ref7$colorDomain === void 0 ? [0, 1] : _ref7$colorDomain,
            _ref7$n = _ref7.n,
            n = _ref7$n === void 0 ? 200 : _ref7$n,
            _ref7$height = _ref7.height,
            height = _ref7$height === void 0 ? 20 : _ref7$height,
            _ref7$width = _ref7.width,
            width = _ref7$width === void 0 ? 300 : _ref7$width;
        var canvas = DOM.canvas(n, 1);
        var context = canvas.getContext("2d");
        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
        canvas.style.imageRendering = "-moz-crisp-edges";
        canvas.style.imageRendering = "pixelated";
        var ab = d3.scaleLinear().domain([0, n - 1]).range(colorDomain);

        for (var i = 0; i < n; ++i) {
          context.fillStyle = colorScale(ab(i));
          context.fillRect(i, 0, 1, 1);
        }

        return canvas;
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject5$2());
    });
    main.variable(observer("nodeEnter")).define("nodeEnter", ["Promises", "d3", "showLabel", "appendLabel", "appendImages"], function (Promises, d3, showLabel, appendLabel, appendImages) {
      return function (_ref8) {
        var backgroundColor = _ref8.backgroundColor,
            selection = _ref8.selection,
            current = _ref8.current,
            getColor = _ref8.getColor,
            getId = _ref8.getId,
            getImage = _ref8.getImage,
            getName = _ref8.getName,
            handleNodeClick = _ref8.handleNodeClick,
            handleHoverEnter = _ref8.handleHoverEnter,
            handleHoverExit = _ref8.handleHoverExit,
            phase1Duration = _ref8.phase1Duration,
            phase2Duration = _ref8.phase2Duration,
            previouse = _ref8.previouse,
            strokeWidth = _ref8.strokeWidth;
        Promises.delay(previouse === null ? 0 : phase1Duration).then(function () {
          var all = selection.append("g").classed("node", true);
          var t = d3.transition().duration(phase2Duration);
          t.end().then(function () {
            all.filter(function (d) {
              return showLabel(d, current);
            }).each(function (datum, index) {
              appendLabel(d3.select(this), datum, index, getName);
            });
            all.filter(function (d) {
              return !showLabel(d, current);
            }).select(".label").remove();
          }, function (reject) {
            return console.error("reject foo", reject);
          });
          if (getImage) appendImages(all, getId, getImage);
          all.append("polygon").classed("body", true).attr("points", function (d) {
            return d.polygon;
          }).attr("fill", function (d) {
            return getImage || d.height > 0 ? "none" : getColor(d);
          }).attr("stroke", backgroundColor).attr("stroke-opacity", 1).attr("stroke-width", 0).attr("stroke-linejoin", "round").attr("pointer-events", function (d) {
            return d.height === 0 ? "fill" : "none";
          }).attr("stroke-width", function (d) {
            return strokeWidth(d.depth);
          });
          all.filter(function (d) {
            return d.height === 0;
          }).on("click", handleNodeClick).on("mouseenter", handleHoverEnter).on("mouseleave", handleHoverExit);
        }, function (reject) {
          return console.error("reject bar", reject);
        });
      };
    });
    main.variable(observer("appendLabel")).define("appendLabel", ["DOM", "computeCenterlineLabel"], function (DOM, computeCenterlineLabel) {
      return function (selection, datum, i, getName) {
        var _DOM$uid = DOM.uid("centerline"),
            id = _DOM$uid.id,
            href = _DOM$uid.href; // necessary for Firefox


        if (!datum.label) {
          datum.lable = computeCenterlineLabel({
            label: getName(datum),
            polygon: datum.simplePolygon,
            numPerimeterPoints: 10,
            simplification: 20,
            strategy: "high"
          });
        }

        var _datum$lable = datum.lable,
            centerline = _datum$lable.centerline,
            offset = _datum$lable.offset,
            label = _datum$lable.label,
            maxFontSize = _datum$lable.maxFontSize;
        var labelG = selection.append("g").classed("label", true).style("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;").style("font-size", "".concat(maxFontSize * 0.9, "px")).style("font-weight", 500).style("user-select", "none").style("letter-spacing", "0em").style("text-transform", "uppercase").style("text-shadow", "0 0 5px black").attr("fill", "white").attr("pointer-events", "none");
        labelG.append("path").attr("id", id).attr("d", centerline).attr("visibility", "hidden");
        labelG.append("text").attr("dy", "0.35em").attr("opacity", 0.75).append("textPath").attr("xlink:href", href).attr("startOffset", "".concat(100 * offset, "%")).attr("text-anchor", "middle").text(label);
      };
    });
    main.variable(observer("appendImages")).define("appendImages", ["computeImagePosition", "d3"], function (computeImagePosition, d3) {
      return function (selection, getId, getImage) {
        var image = selection.filter(function (d) {
          return d.height === 0;
        });
        var imageG = image.append("g").classed("image", true);
        imageG.append("clipPath").attr("id", function (d) {
          return "".concat(getId(d), "-clip");
        }).attr("pointer-events", "none").attr("transform", function (d) {
          return "translate(".concat(d.polyProps.bounds[0].map(function (d) {
            return d * -1;
          }), ")");
        }).append("polygon").attr("points", function (d) {
          return d.polygon;
        });
        imageG.append("image").attr("onload", function (d, i) {
          var _this3 = this;

          var image = new Image();

          image.onload = function () {
            d.imageProps = {
              width: image.width,
              height: image.height,
              aspect: image.height / image.width
            };

            var _computeImagePosition = computeImagePosition(d.imageProps, d.polyProps),
                x = _computeImagePosition.x,
                y = _computeImagePosition.y,
                width = _computeImagePosition.width,
                height = _computeImagePosition.height;

            var imageSelect = d3.select(_this3).attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("visibility", "visible");
          };

          image.src = getImage(d, i);
        }).attr("clip-path", function (d) {
          return "url(#".concat(getId(d), "-clip)");
        }).attr("transform", function (d) {
          return "translate(".concat(d.polyProps.bounds[0], ")");
        }).attr("visibility", "hidden").attr("href", getImage);
      };
    });
    main.variable(observer("nodeUpdate")).define("nodeUpdate", ["d3", "showLabel", "appendLabel", "updateImages"], function (d3, showLabel, appendLabel, updateImages) {
      return function (_ref9) {
        var selection = _ref9.selection,
            current = _ref9.current,
            getImage = _ref9.getImage,
            getName = _ref9.getName,
            handleHoverEnter = _ref9.handleHoverEnter,
            handleHoverExit = _ref9.handleHoverExit,
            phase1Duration = _ref9.phase1Duration,
            phase2Duration = _ref9.phase2Duration,
            strokeWidth = _ref9.strokeWidth;
        var branches = selection.filter(function (d) {
          return d.height > 0;
        }).attr("visibility", "hidden");
        var leaves = selection.filter(function (d) {
          return d.height === 0;
        });
        var t = d3.transition("update-phase-1").duration(phase1Duration);
        selection.selectAll(".label").filter(function (d) {
          return !showLabel(d, current);
        }).remove();
        t.end().then(function () {
          branches.attr("visibility", "visible").select("polygon").attr("points", function (d) {
            return d.polygon;
          }).transition().duration(phase2Duration).attr("stroke-width", function (d) {
            return strokeWidth(d.depth);
          });
          selection.filter(function (d) {
            return showLabel(d, current);
          }).each(function (datum, index) {
            appendLabel(d3.select(this), datum, index, getName);
          });
          selection.selectAll(".label").filter(function (d) {
            return !showLabel(d, current);
          }).remove();
          leaves.on("mouseenter", handleHoverEnter).on("mouseleave", handleHoverExit);
        }, function (reject) {
          return console.error("reject baz", reject);
        });
        leaves.on("mouseenter", null).on("mouseleave", null).attr("opacity", 1).select(".body").attr("stroke-width", function (d) {
          return strokeWidth(d.depth);
        }).transition(t).attr("points", function (d) {
          return d.polygon;
        });
        if (getImage) updateImages(selection, t);
      };
    });
    main.variable(observer("updateImages")).define("updateImages", ["computeImagePosition", "d3"], function (computeImagePosition, d3) {
      return function (selection, t) {
        var imageG = selection.filter(function (d) {
          return d.height === 0 && !!d.imageProps;
        }).selectAll(".image");
        imageG.select("clipPath").transition(t).attr("transform", function (d) {
          return "translate(".concat(d.polyProps.bounds[0].map(function (d) {
            return d * -1;
          }), ")");
        }).select("polygon").attr("points", function (d) {
          return d.polygon;
        });
        imageG.select("image").transition(t).attr("transform", function (d) {
          return "translate(".concat(d.polyProps.bounds[0], ")");
        }).each(function (d) {
          var _computeImagePosition2 = computeImagePosition(d.imageProps, d.polyProps),
              x = _computeImagePosition2.x,
              y = _computeImagePosition2.y,
              width = _computeImagePosition2.width,
              height = _computeImagePosition2.height;

          d3.select(this).transition(t).attr("x", x).attr("y", y).attr("width", width).attr("height", height);
        });
      };
    });
    main.variable(observer("showLabel")).define("showLabel", function () {
      return function (node, current) {
        return node.depth === current.depth + 1;
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject6$2());
    });
    main.variable(observer("computeImagePosition")).define("computeImagePosition", function () {
      return function (imageProps, polyProps) {
        var iAspect = imageProps.aspect,
            iWidth = imageProps.width,
            iHeight = imageProps.height;
        var pAspect = polyProps.aspect,
            pWidth = polyProps.width,
            pHeight = polyProps.height;

        var _ref10 = pAspect < iAspect ? [0, (iAspect / pAspect * pHeight - pHeight) / -2, pWidth, iHeight * (pWidth / iWidth)] : [(pAspect / iAspect * pWidth - pWidth) / -2, 0, iWidth * (pHeight / iHeight), pHeight],
            _ref11 = _slicedToArray(_ref10, 4),
            x = _ref11[0],
            y = _ref11[1],
            width = _ref11[2],
            height = _ref11[3];

        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      };
    });
    main.variable(observer("coordinatePolygons")).define("coordinatePolygons", ["fixedPointCount", "computeCentroid", "computeAngle", "d3"], function (fixedPointCount, computeCentroid, computeAngle, d3) {
      return function (source, target) {
        var pointCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        var expandedPolygon = fixedPointCount(target, pointCount);
        if (!source || source.length === 0) return expandedPolygon;
        var sourceCentroid = computeCentroid(source);
        var targetCentroid = computeCentroid(expandedPolygon);
        var startTheta = computeAngle(sourceCentroid, source[0]);
        var pointWidthClosestTheta = expandedPolygon.map(function (point, i) {
          return {
            theta: Math.abs(computeAngle(targetCentroid, point)),
            index: i
          };
        }).sort(function (a, b) {
          return a.theta - b.theta;
        })[0].index;
        var coordinatedPolygon = [].concat(_toConsumableArray(expandedPolygon.slice(pointWidthClosestTheta)), _toConsumableArray(expandedPolygon.slice(0, pointWidthClosestTheta)));
        return d3.polygonArea(source) * d3.polygonArea(coordinatedPolygon) < 0 ? coordinatedPolygon.reverse() : coordinatedPolygon;
      };
    });
    main.variable(observer("computeCentroid")).define("computeCentroid", function () {
      return function (shape) {
        return shape.reduce(function (_ref12, _ref13) {
          var _ref14 = _slicedToArray(_ref12, 2),
              xSum = _ref14[0],
              ySum = _ref14[1];

          var _ref15 = _slicedToArray(_ref13, 2),
              x = _ref15[0],
              y = _ref15[1];

          return [xSum + x, ySum + y];
        }, [0, 0]).map(function (d) {
          return d / shape.length;
        });
      };
    });
    main.variable(observer("computeAngle")).define("computeAngle", function () {
      return function (_ref16, _ref17) {
        var _ref18 = _slicedToArray(_ref16, 2),
            x0 = _ref18[0],
            y0 = _ref18[1];

        var _ref19 = _slicedToArray(_ref17, 2),
            x1 = _ref19[0],
            y1 = _ref19[1];

        return Math.atan2(y1 - y0, x1 - x0);
      };
    });
    main.variable(observer("establishColor")).define("establishColor", ["d3"], function (d3) {
      return function (root) {
        var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1];
        var getWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (d) {
          return d.value;
        };

        var _establishColor = function _establishColor(node, domain) {
          node.colorDomain = domain;
          node.colorValue = d3.sum(domain) / 2;

          if (node.children) {
            var sum = d3.sum(node.children.map(getWeight));
            var scale = d3.scaleLinear().domain([0, sum]).range(domain);
            (node.children || []). //.sort((a, b) => getWeight(a) - getWeight(b))
            reduce(function (sum, child) {
              var progress = sum + getWeight(child);

              _establishColor(child, [sum, progress].map(scale));

              return progress;
            }, 0);
          }
        };

        _establishColor(root, domain);
      };
    });
    main.variable(observer("createMeasurablePath")).define("createMeasurablePath", ["d3", "DOM"], function (d3, DOM) {
      return function (points) {
        return d3.select(DOM.svg(1, 1)).append("path").datum(points).attr("d", d3.line()).node();
      };
    });
    main.variable(observer("fixedPointCount")).define("fixedPointCount", ["createMeasurablePath", "computeDistances", "d3"], function (createMeasurablePath, computeDistances, d3) {
      return function (shape, count) {
        var measurablePath = createMeasurablePath(shape);
        var newPointCount = count - shape.length + 1;
        if (count < 1) return shape;
        var distances = computeDistances(shape);
        var length = distances[distances.length - 1];
        var distancePoints = distances.map(function (distance, i) {
          return {
            distance: distance,
            point: shape[i]
          };
        });
        var positionScale = d3.scaleLinear().domain([0, newPointCount - 1]).range([0.001, length]);
        return d3.range(newPointCount).reduce(function (points, index) {
          var position = positionScale(index);

          while (distancePoints.length > 0 && position > distancePoints[0].distance) {
            points.push(distancePoints[0].point);
            distancePoints.shift();
          }

          var _measurablePath$getPo = measurablePath.getPointAtLength(position),
              x = _measurablePath$getPo.x,
              y = _measurablePath$getPo.y;

          points.push([x, y]);
          return points;
        }, []);
      };
    });
    main.variable(observer("computeDistance")).define("computeDistance", function () {
      return function (coord1, coord2) {
        var distX = coord2[0] - coord1[0];
        var distY = coord2[1] - coord1[1];
        return Math.sqrt(distX * distX + distY * distY);
      };
    });
    main.variable(observer("computeDistances")).define("computeDistances", ["computeDistance"], function (computeDistance) {
      return function (coordinates) {
        return coordinates.reduce(function (distances, coordinate, i) {
          var value = i === 0 ? 0 : distances[i - 1] + computeDistance(coordinates[i - 1], coordinate);
          distances.push(value);
          return distances;
        }, []);
      };
    });
    main.variable(observer("createDispatcher")).define("createDispatcher", ["d3"], function (d3) {
      return function () {
        return d3.dispatch("hover-gain", "hover-lose", "focus", "focus-gain", "focus-lose");
      };
    });
    main.variable(observer()).define(["md"], function (md) {
      return md(_templateObject7$2());
    });
    var child1 = runtime.module(define);
    main["import"]("titelize", child1);
    var child2 = runtime.module(define$2);
    main["import"]("computeCenterlineLabel", child2);
    main["import"]("styles", child2);
    main.variable(observer("d3")).define("d3", ["require"], function (require) {
      return require("d3@5", "d3-voronoi-treemap", "seedrandom@2.4.3/seedrandom.min.js");
    });
    main.variable(observer("_")).define("_", ["require"], function (require) {
      return require("lodash");
    });
    return main;
  }

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(y),
      _marked2 = /*#__PURE__*/regeneratorRuntime.mark(g),
      _marked3 = /*#__PURE__*/regeneratorRuntime.mark(E),
      _marked4 = /*#__PURE__*/regeneratorRuntime.mark(x),
      _marked5 = /*#__PURE__*/regeneratorRuntime.mark(C),
      _marked6 = /*#__PURE__*/regeneratorRuntime.mark(N),
      _marked7 = /*#__PURE__*/regeneratorRuntime.mark(P),
      _marked8 = /*#__PURE__*/regeneratorRuntime.mark(S),
      _marked9 = /*#__PURE__*/regeneratorRuntime.mark(T),
      _marked10 = /*#__PURE__*/regeneratorRuntime.mark(A),
      _marked11 = /*#__PURE__*/regeneratorRuntime.mark($),
      _marked12 = /*#__PURE__*/regeneratorRuntime.mark(U),
      _marked13 = /*#__PURE__*/regeneratorRuntime.mark(R),
      _marked14 = /*#__PURE__*/regeneratorRuntime.mark(D),
      _marked15 = /*#__PURE__*/regeneratorRuntime.mark(F),
      _marked16 = /*#__PURE__*/regeneratorRuntime.mark(Ve);

  // @observablehq/runtime v4.8.0 Copyright 2020 Observable, Inc.
  function e(e, t, n) {
    n = n || {};
    var r = e.ownerDocument,
        i = r.defaultView.CustomEvent;
    "function" == typeof i ? i = new i(t, {
      detail: n
    }) : ((i = r.createEvent("Event")).initEvent(t, !1, !1), i.detail = n), e.dispatchEvent(i);
  }

  function t(e) {
    return Array.isArray(e) || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
  }

  function n(e) {
    return e === (0 | e) + "";
  }

  function r(e) {
    var t = document.createElement("span");
    return t.className = "observablehq--cellname", t.textContent = e + " = ", t;
  }

  var i = Symbol.prototype.toString;

  function o(e) {
    return i.call(e);
  }

  var a = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      l = Symbol.toStringTag,
      u = {},
      c = a;

  function d(e, t) {
    return s.call(e, t);
  }

  function f(e) {
    return e[l] || e.constructor && e.constructor.name || "Object";
  }

  function p(e, t) {
    try {
      var _n = e[t];
      return _n && _n.constructor, _n;
    } catch (e) {
      return u;
    }
  }

  var h = [{
    symbol: "@@__IMMUTABLE_INDEXED__@@",
    name: "Indexed",
    modifier: !0
  }, {
    symbol: "@@__IMMUTABLE_KEYED__@@",
    name: "Keyed",
    modifier: !0
  }, {
    symbol: "@@__IMMUTABLE_LIST__@@",
    name: "List",
    arrayish: !0
  }, {
    symbol: "@@__IMMUTABLE_MAP__@@",
    name: "Map"
  }, {
    symbol: "@@__IMMUTABLE_ORDERED__@@",
    name: "Ordered",
    modifier: !0,
    prefix: !0
  }, {
    symbol: "@@__IMMUTABLE_RECORD__@@",
    name: "Record"
  }, {
    symbol: "@@__IMMUTABLE_SET__@@",
    name: "Set",
    arrayish: !0,
    setish: !0
  }, {
    symbol: "@@__IMMUTABLE_STACK__@@",
    name: "Stack",
    arrayish: !0
  }];

  function m(e) {
    try {
      var _t2 = h.filter(function (_ref) {
        var t = _ref.symbol;
        return !0 === e[t];
      });

      if (!_t2.length) return;

      var _n2 = _t2.find(function (e) {
        return !e.modifier;
      }),
          _r = "Map" === _n2.name && _t2.find(function (e) {
        return e.modifier && e.prefix;
      }),
          _i = _t2.some(function (e) {
        return e.arrayish;
      }),
          _o = _t2.some(function (e) {
        return e.setish;
      });

      return {
        name: "".concat(_r ? _r.name : "").concat(_n2.name),
        symbols: _t2,
        arrayish: _i && !_o,
        setish: _o
      };
    } catch (e) {
      return null;
    }
  }

  var v = Object.getPrototypeOf,
      b = Object.getOwnPropertyDescriptors,
      _ = v({});

  function w(n, i, o, a) {
    var s,
        l,
        u,
        c,
        d = t(n);
    n instanceof Map ? (s = "Map(".concat(n.size, ")"), l = y) : n instanceof Set ? (s = "Set(".concat(n.size, ")"), l = g) : d ? (s = "".concat(n.constructor.name, "(").concat(n.length, ")"), l = x) : (c = m(n)) ? (s = "Immutable.".concat(c.name).concat("Record" === c.name ? "" : "(".concat(n.size, ")")), d = c.arrayish, l = c.arrayish ? C : c.setish ? E : S) : a ? (s = f(n), l = N) : (s = f(n), l = P);
    var p = document.createElement("span");
    p.className = "observablehq--expanded", o && p.appendChild(r(o));
    var h = p.appendChild(document.createElement("a"));
    h.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>", h.appendChild(document.createTextNode("".concat(s).concat(d ? " [" : " {"))), h.addEventListener("mouseup", function (e) {
      e.stopPropagation(), ae(p, O(n, null, o, a));
    }), l = l(n);

    for (var _e2 = 0; !(u = l.next()).done && _e2 < 20; ++_e2) {
      p.appendChild(u.value);
    }

    if (!u.done) {
      var _t3 = p.appendChild(document.createElement("a"));

      _t3.className = "observablehq--field", _t3.style.display = "block", _t3.appendChild(document.createTextNode("  … more")), _t3.addEventListener("mouseup", function (t) {
        t.stopPropagation(), p.insertBefore(u.value, p.lastChild.previousSibling);

        for (var _e3 = 0; !(u = l.next()).done && _e3 < 19; ++_e3) {
          p.insertBefore(u.value, p.lastChild.previousSibling);
        }

        u.done && p.removeChild(p.lastChild.previousSibling), e(p, "load");
      });
    }

    return p.appendChild(document.createTextNode(d ? "]" : "}")), p;
  }

  function y(e) {
    var _iterator, _step, _step$value, _t4, _n3;

    return regeneratorRuntime.wrap(function y$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(e);
            _context.prev = 1;

            _iterator.s();

          case 3:
            if ((_step = _iterator.n()).done) {
              _context.next = 9;
              break;
            }

            _step$value = _slicedToArray(_step.value, 2), _t4 = _step$value[0], _n3 = _step$value[1];
            _context.next = 7;
            return j(_t4, _n3);

          case 7:
            _context.next = 3;
            break;

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);

            _iterator.e(_context.t0);

          case 14:
            _context.prev = 14;

            _iterator.f();

            return _context.finish(14);

          case 17:
            return _context.delegateYield(P(e), "t1", 18);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, null, [[1, 11, 14, 17]]);
  }

  function g(e) {
    var _iterator2, _step2, _t5;

    return regeneratorRuntime.wrap(function g$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator2 = _createForOfIteratorHelper(e);
            _context2.prev = 1;

            _iterator2.s();

          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 9;
              break;
            }

            _t5 = _step2.value;
            _context2.next = 7;
            return L(_t5);

          case 7:
            _context2.next = 3;
            break;

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);

            _iterator2.e(_context2.t0);

          case 14:
            _context2.prev = 14;

            _iterator2.f();

            return _context2.finish(14);

          case 17:
            return _context2.delegateYield(P(e), "t1", 18);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2, null, [[1, 11, 14, 17]]);
  }

  function E(e) {
    var _iterator3, _step3, _t6;

    return regeneratorRuntime.wrap(function E$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _iterator3 = _createForOfIteratorHelper(e);
            _context3.prev = 1;

            _iterator3.s();

          case 3:
            if ((_step3 = _iterator3.n()).done) {
              _context3.next = 9;
              break;
            }

            _t6 = _step3.value;
            _context3.next = 7;
            return L(_t6);

          case 7:
            _context3.next = 3;
            break;

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);

            _iterator3.e(_context3.t0);

          case 14:
            _context3.prev = 14;

            _iterator3.f();

            return _context3.finish(14);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _marked3, null, [[1, 11, 14, 17]]);
  }

  function x(e) {
    var _t7, _n4, _t8, _iterator4, _step4, _t9;

    return regeneratorRuntime.wrap(function x$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _t7 = 0, _n4 = e.length;

          case 1:
            if (!(_t7 < _n4)) {
              _context4.next = 9;
              break;
            }

            _context4.t0 = _t7 in e;

            if (!_context4.t0) {
              _context4.next = 6;
              break;
            }

            _context4.next = 6;
            return M(_t7, p(e, _t7), "observablehq--index");

          case 6:
            ++_t7;
            _context4.next = 1;
            break;

          case 9:
            _context4.t1 = regeneratorRuntime.keys(e);

          case 10:
            if ((_context4.t2 = _context4.t1()).done) {
              _context4.next = 18;
              break;
            }

            _t8 = _context4.t2.value;
            _context4.t3 = !n(_t8) && d(e, _t8);

            if (!_context4.t3) {
              _context4.next = 16;
              break;
            }

            _context4.next = 16;
            return M(_t8, p(e, _t8), "observablehq--key");

          case 16:
            _context4.next = 10;
            break;

          case 18:
            _iterator4 = _createForOfIteratorHelper(c(e));
            _context4.prev = 19;

            _iterator4.s();

          case 21:
            if ((_step4 = _iterator4.n()).done) {
              _context4.next = 27;
              break;
            }

            _t9 = _step4.value;
            _context4.next = 25;
            return M(o(_t9), p(e, _t9), "observablehq--symbol");

          case 25:
            _context4.next = 21;
            break;

          case 27:
            _context4.next = 32;
            break;

          case 29:
            _context4.prev = 29;
            _context4.t4 = _context4["catch"](19);

            _iterator4.e(_context4.t4);

          case 32:
            _context4.prev = 32;

            _iterator4.f();

            return _context4.finish(32);

          case 35:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked4, null, [[19, 29, 32, 35]]);
  }

  function C(e) {
    var t, _n5;

    return regeneratorRuntime.wrap(function C$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            t = 0;
            _n5 = e.size;

          case 2:
            if (!(t < _n5)) {
              _context5.next = 8;
              break;
            }

            _context5.next = 5;
            return M(t, e.get(t), !0);

          case 5:
            ++t;
            _context5.next = 2;
            break;

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _marked5);
  }

  function N(e) {
    var _t10, _iterator5, _step5, _t11, t;

    return regeneratorRuntime.wrap(function N$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.t0 = regeneratorRuntime.keys(b(e));

          case 1:
            if ((_context6.t1 = _context6.t0()).done) {
              _context6.next = 7;
              break;
            }

            _t10 = _context6.t1.value;
            _context6.next = 5;
            return M(_t10, p(e, _t10), "observablehq--key");

          case 5:
            _context6.next = 1;
            break;

          case 7:
            _iterator5 = _createForOfIteratorHelper(c(e));
            _context6.prev = 8;

            _iterator5.s();

          case 10:
            if ((_step5 = _iterator5.n()).done) {
              _context6.next = 16;
              break;
            }

            _t11 = _step5.value;
            _context6.next = 14;
            return M(o(_t11), p(e, _t11), "observablehq--symbol");

          case 14:
            _context6.next = 10;
            break;

          case 16:
            _context6.next = 21;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t2 = _context6["catch"](8);

            _iterator5.e(_context6.t2);

          case 21:
            _context6.prev = 21;

            _iterator5.f();

            return _context6.finish(21);

          case 24:
            t = v(e);
            _context6.t3 = t && t !== _;

            if (!_context6.t3) {
              _context6.next = 29;
              break;
            }

            _context6.next = 29;
            return q(t);

          case 29:
          case "end":
            return _context6.stop();
        }
      }
    }, _marked6, null, [[8, 18, 21, 24]]);
  }

  function P(e) {
    var _t12, _iterator6, _step6, _t13, t;

    return regeneratorRuntime.wrap(function P$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.t0 = regeneratorRuntime.keys(e);

          case 1:
            if ((_context7.t1 = _context7.t0()).done) {
              _context7.next = 9;
              break;
            }

            _t12 = _context7.t1.value;
            _context7.t2 = d(e, _t12);

            if (!_context7.t2) {
              _context7.next = 7;
              break;
            }

            _context7.next = 7;
            return M(_t12, p(e, _t12), "observablehq--key");

          case 7:
            _context7.next = 1;
            break;

          case 9:
            _iterator6 = _createForOfIteratorHelper(c(e));
            _context7.prev = 10;

            _iterator6.s();

          case 12:
            if ((_step6 = _iterator6.n()).done) {
              _context7.next = 18;
              break;
            }

            _t13 = _step6.value;
            _context7.next = 16;
            return M(o(_t13), p(e, _t13), "observablehq--symbol");

          case 16:
            _context7.next = 12;
            break;

          case 18:
            _context7.next = 23;
            break;

          case 20:
            _context7.prev = 20;
            _context7.t3 = _context7["catch"](10);

            _iterator6.e(_context7.t3);

          case 23:
            _context7.prev = 23;

            _iterator6.f();

            return _context7.finish(23);

          case 26:
            t = v(e);
            _context7.t4 = t && t !== _;

            if (!_context7.t4) {
              _context7.next = 31;
              break;
            }

            _context7.next = 31;
            return q(t);

          case 31:
          case "end":
            return _context7.stop();
        }
      }
    }, _marked7, null, [[10, 20, 23, 26]]);
  }

  function S(e) {
    var _iterator7, _step7, _step7$value, _t14, _n6;

    return regeneratorRuntime.wrap(function S$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _iterator7 = _createForOfIteratorHelper(e);
            _context8.prev = 1;

            _iterator7.s();

          case 3:
            if ((_step7 = _iterator7.n()).done) {
              _context8.next = 9;
              break;
            }

            _step7$value = _slicedToArray(_step7.value, 2), _t14 = _step7$value[0], _n6 = _step7$value[1];
            _context8.next = 7;
            return M(_t14, _n6, "observablehq--key");

          case 7:
            _context8.next = 3;
            break;

          case 9:
            _context8.next = 14;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](1);

            _iterator7.e(_context8.t0);

          case 14:
            _context8.prev = 14;

            _iterator7.f();

            return _context8.finish(14);

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _marked8, null, [[1, 11, 14, 17]]);
  }

  function q(e) {
    var t = document.createElement("div"),
        n = t.appendChild(document.createElement("span"));
    return t.className = "observablehq--field", n.className = "observablehq--prototype-key", n.textContent = "  <prototype>", t.appendChild(document.createTextNode(": ")), t.appendChild(oe(e, void 0, void 0, void 0, !0)), t;
  }

  function M(e, t, n) {
    var r = document.createElement("div"),
        i = r.appendChild(document.createElement("span"));
    return r.className = "observablehq--field", i.className = n, i.textContent = "  " + e, r.appendChild(document.createTextNode(": ")), r.appendChild(oe(t)), r;
  }

  function j(e, t) {
    var n = document.createElement("div");
    return n.className = "observablehq--field", n.appendChild(document.createTextNode("  ")), n.appendChild(oe(e)), n.appendChild(document.createTextNode(" => ")), n.appendChild(oe(t)), n;
  }

  function L(e) {
    var t = document.createElement("div");
    return t.className = "observablehq--field", t.appendChild(document.createTextNode("  ")), t.appendChild(oe(e)), t;
  }

  function k(e) {
    var t = window.getSelection();
    return "Range" === t.type && (t.containsNode(e, !0) || t.anchorNode.isSelfOrDescendant(e) || t.focusNode.isSelfOrDescendant(e));
  }

  function O(e, n, i, o) {
    var a,
        s,
        l,
        u,
        c = t(e);

    if (e instanceof Map ? (a = "Map(".concat(e.size, ")"), s = T) : e instanceof Set ? (a = "Set(".concat(e.size, ")"), s = A) : c ? (a = "".concat(e.constructor.name, "(").concat(e.length, ")"), s = R) : (u = m(e)) ? (a = "Immutable.".concat(u.name).concat("Record" === u.name ? "" : "(".concat(e.size, ")")), c = u.arrayish, s = u.arrayish ? U : u.setish ? $ : F) : (a = f(e), s = D), n) {
      var _t15 = document.createElement("span");

      return _t15.className = "observablehq--shallow", i && _t15.appendChild(r(i)), _t15.appendChild(document.createTextNode(a)), _t15.addEventListener("mouseup", function (n) {
        k(_t15) || (n.stopPropagation(), ae(_t15, O(e)));
      }), _t15;
    }

    var d = document.createElement("span");
    d.className = "observablehq--collapsed", i && d.appendChild(r(i));
    var p = d.appendChild(document.createElement("a"));
    p.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>", p.appendChild(document.createTextNode("".concat(a).concat(c ? " [" : " {"))), d.addEventListener("mouseup", function (t) {
      k(d) || (t.stopPropagation(), ae(d, w(e, 0, i, o)));
    }, !0), s = s(e);

    for (var _e4 = 0; !(l = s.next()).done && _e4 < 20; ++_e4) {
      _e4 > 0 && d.appendChild(document.createTextNode(", ")), d.appendChild(l.value);
    }

    return l.done || d.appendChild(document.createTextNode(", …")), d.appendChild(document.createTextNode(c ? "]" : "}")), d;
  }

  function T(e) {
    var _iterator8, _step8, _step8$value, _t16, _n7;

    return regeneratorRuntime.wrap(function T$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _iterator8 = _createForOfIteratorHelper(e);
            _context9.prev = 1;

            _iterator8.s();

          case 3:
            if ((_step8 = _iterator8.n()).done) {
              _context9.next = 9;
              break;
            }

            _step8$value = _slicedToArray(_step8.value, 2), _t16 = _step8$value[0], _n7 = _step8$value[1];
            _context9.next = 7;
            return B(_t16, _n7);

          case 7:
            _context9.next = 3;
            break;

          case 9:
            _context9.next = 14;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](1);

            _iterator8.e(_context9.t0);

          case 14:
            _context9.prev = 14;

            _iterator8.f();

            return _context9.finish(14);

          case 17:
            return _context9.delegateYield(D(e), "t1", 18);

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _marked9, null, [[1, 11, 14, 17]]);
  }

  function A(e) {
    var _iterator9, _step9, _t17;

    return regeneratorRuntime.wrap(function A$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _iterator9 = _createForOfIteratorHelper(e);
            _context10.prev = 1;

            _iterator9.s();

          case 3:
            if ((_step9 = _iterator9.n()).done) {
              _context10.next = 9;
              break;
            }

            _t17 = _step9.value;
            _context10.next = 7;
            return oe(_t17, !0);

          case 7:
            _context10.next = 3;
            break;

          case 9:
            _context10.next = 14;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](1);

            _iterator9.e(_context10.t0);

          case 14:
            _context10.prev = 14;

            _iterator9.f();

            return _context10.finish(14);

          case 17:
            return _context10.delegateYield(D(e), "t1", 18);

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _marked10, null, [[1, 11, 14, 17]]);
  }

  function $(e) {
    var _iterator10, _step10, _t18;

    return regeneratorRuntime.wrap(function $$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _iterator10 = _createForOfIteratorHelper(e);
            _context11.prev = 1;

            _iterator10.s();

          case 3:
            if ((_step10 = _iterator10.n()).done) {
              _context11.next = 9;
              break;
            }

            _t18 = _step10.value;
            _context11.next = 7;
            return oe(_t18, !0);

          case 7:
            _context11.next = 3;
            break;

          case 9:
            _context11.next = 14;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](1);

            _iterator10.e(_context11.t0);

          case 14:
            _context11.prev = 14;

            _iterator10.f();

            return _context11.finish(14);

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _marked11, null, [[1, 11, 14, 17]]);
  }

  function U(e) {
    var t, n, _r2;

    return regeneratorRuntime.wrap(function U$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            t = -1, n = 0;
            _r2 = e.size;

          case 2:
            if (!(n < _r2)) {
              _context12.next = 13;
              break;
            }

            _context12.t0 = n > t + 1;

            if (!_context12.t0) {
              _context12.next = 7;
              break;
            }

            _context12.next = 7;
            return I(n - t - 1);

          case 7:
            _context12.next = 9;
            return oe(e.get(n), !0);

          case 9:
            t = n;

          case 10:
            ++n;
            _context12.next = 2;
            break;

          case 13:
            _context12.t1 = n > t + 1;

            if (!_context12.t1) {
              _context12.next = 17;
              break;
            }

            _context12.next = 17;
            return I(n - t - 1);

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _marked12);
  }

  function R(e) {
    var t, r, _n8, _t19, _iterator11, _step11, _t20;

    return regeneratorRuntime.wrap(function R$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            t = -1, r = 0;
            _n8 = e.length;

          case 2:
            if (!(r < _n8)) {
              _context13.next = 15;
              break;
            }

            _context13.t0 = r in e;

            if (!_context13.t0) {
              _context13.next = 12;
              break;
            }

            _context13.t1 = r > t + 1;

            if (!_context13.t1) {
              _context13.next = 9;
              break;
            }

            _context13.next = 9;
            return I(r - t - 1);

          case 9:
            _context13.next = 11;
            return oe(p(e, r), !0);

          case 11:
            t = r;

          case 12:
            ++r;
            _context13.next = 2;
            break;

          case 15:
            _context13.t2 = r > t + 1;

            if (!_context13.t2) {
              _context13.next = 19;
              break;
            }

            _context13.next = 19;
            return I(r - t - 1);

          case 19:
            _context13.t3 = regeneratorRuntime.keys(e);

          case 20:
            if ((_context13.t4 = _context13.t3()).done) {
              _context13.next = 28;
              break;
            }

            _t19 = _context13.t4.value;
            _context13.t5 = !n(_t19) && d(e, _t19);

            if (!_context13.t5) {
              _context13.next = 26;
              break;
            }

            _context13.next = 26;
            return z(_t19, p(e, _t19), "observablehq--key");

          case 26:
            _context13.next = 20;
            break;

          case 28:
            _iterator11 = _createForOfIteratorHelper(c(e));
            _context13.prev = 29;

            _iterator11.s();

          case 31:
            if ((_step11 = _iterator11.n()).done) {
              _context13.next = 37;
              break;
            }

            _t20 = _step11.value;
            _context13.next = 35;
            return z(o(_t20), p(e, _t20), "observablehq--symbol");

          case 35:
            _context13.next = 31;
            break;

          case 37:
            _context13.next = 42;
            break;

          case 39:
            _context13.prev = 39;
            _context13.t6 = _context13["catch"](29);

            _iterator11.e(_context13.t6);

          case 42:
            _context13.prev = 42;

            _iterator11.f();

            return _context13.finish(42);

          case 45:
          case "end":
            return _context13.stop();
        }
      }
    }, _marked13, null, [[29, 39, 42, 45]]);
  }

  function D(e) {
    var _t21, _iterator12, _step12, _t22;

    return regeneratorRuntime.wrap(function D$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.t0 = regeneratorRuntime.keys(e);

          case 1:
            if ((_context14.t1 = _context14.t0()).done) {
              _context14.next = 9;
              break;
            }

            _t21 = _context14.t1.value;
            _context14.t2 = d(e, _t21);

            if (!_context14.t2) {
              _context14.next = 7;
              break;
            }

            _context14.next = 7;
            return z(_t21, p(e, _t21), "observablehq--key");

          case 7:
            _context14.next = 1;
            break;

          case 9:
            _iterator12 = _createForOfIteratorHelper(c(e));
            _context14.prev = 10;

            _iterator12.s();

          case 12:
            if ((_step12 = _iterator12.n()).done) {
              _context14.next = 18;
              break;
            }

            _t22 = _step12.value;
            _context14.next = 16;
            return z(o(_t22), p(e, _t22), "observablehq--symbol");

          case 16:
            _context14.next = 12;
            break;

          case 18:
            _context14.next = 23;
            break;

          case 20:
            _context14.prev = 20;
            _context14.t3 = _context14["catch"](10);

            _iterator12.e(_context14.t3);

          case 23:
            _context14.prev = 23;

            _iterator12.f();

            return _context14.finish(23);

          case 26:
          case "end":
            return _context14.stop();
        }
      }
    }, _marked14, null, [[10, 20, 23, 26]]);
  }

  function F(e) {
    var _iterator13, _step13, _step13$value, _t23, _n9;

    return regeneratorRuntime.wrap(function F$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _iterator13 = _createForOfIteratorHelper(e);
            _context15.prev = 1;

            _iterator13.s();

          case 3:
            if ((_step13 = _iterator13.n()).done) {
              _context15.next = 9;
              break;
            }

            _step13$value = _slicedToArray(_step13.value, 2), _t23 = _step13$value[0], _n9 = _step13$value[1];
            _context15.next = 7;
            return z(_t23, _n9, "observablehq--key");

          case 7:
            _context15.next = 3;
            break;

          case 9:
            _context15.next = 14;
            break;

          case 11:
            _context15.prev = 11;
            _context15.t0 = _context15["catch"](1);

            _iterator13.e(_context15.t0);

          case 14:
            _context15.prev = 14;

            _iterator13.f();

            return _context15.finish(14);

          case 17:
          case "end":
            return _context15.stop();
        }
      }
    }, _marked15, null, [[1, 11, 14, 17]]);
  }

  function I(e) {
    var t = document.createElement("span");
    return t.className = "observablehq--empty", t.textContent = 1 === e ? "empty" : "empty × " + e, t;
  }

  function z(e, t, n) {
    var r = document.createDocumentFragment(),
        i = r.appendChild(document.createElement("span"));
    return i.className = n, i.textContent = e, r.appendChild(document.createTextNode(": ")), r.appendChild(oe(t, !0)), r;
  }

  function B(e, t) {
    var n = document.createDocumentFragment();
    return n.appendChild(oe(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(oe(t, !0)), n;
  }

  function H(e, t) {
    var n = e + "",
        r = n.length;
    return r < t ? new Array(t - r + 1).join(0) + n : n;
  }

  function W(e) {
    return e < 0 ? "-" + H(-e, 6) : e > 9999 ? "+" + H(e, 6) : H(e, 4);
  }

  var V = Error.prototype.toString;
  var G = RegExp.prototype.toString;

  function K(e) {
    return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, Y);
  }

  function Y(e) {
    var t = e.charCodeAt(0);

    switch (t) {
      case 8:
        return "\\b";

      case 9:
        return "\\t";

      case 11:
        return "\\v";

      case 12:
        return "\\f";

      case 13:
        return "\\r";
    }

    return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e;
  }

  function J(e, t) {
    for (var n = 0; t.exec(e);) {
      ++n;
    }

    return n;
  }

  var X = Function.prototype.toString,
      Q = {
    prefix: "async ƒ"
  },
      Z = {
    prefix: "async ƒ*"
  },
      ee = {
    prefix: "class"
  },
      te = {
    prefix: "ƒ"
  },
      ne = {
    prefix: "ƒ*"
  };

  function re(e, t, n) {
    var i = document.createElement("span");
    i.className = "observablehq--function", n && i.appendChild(r(n));
    var o = i.appendChild(document.createElement("span"));
    return o.className = "observablehq--keyword", o.textContent = e.prefix, i.appendChild(document.createTextNode(t)), i;
  }

  var ie = Object.prototype.toString;

  function oe(e, t, n, i, a) {
    var s = _typeof(e);

    switch (s) {
      case "boolean":
      case "undefined":
        e += "";
        break;

      case "number":
        e = 0 === e && 1 / e < 0 ? "-0" : e + "";
        break;

      case "bigint":
        e += "n";
        break;

      case "symbol":
        e = o(e);
        break;

      case "function":
        return function (e, t) {
          var n,
              r,
              i = X.call(e);

          switch (e.constructor && e.constructor.name) {
            case "AsyncFunction":
              n = Q;
              break;

            case "AsyncGeneratorFunction":
              n = Z;
              break;

            case "GeneratorFunction":
              n = ne;
              break;

            default:
              n = /^class\b/.test(i) ? ee : te;
          }

          return n === ee ? re(n, "", t) : (r = /^(?:async\s*)?(\w+)\s*=>/.exec(i)) ? re(n, "(" + r[1] + ")", t) : (r = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) || (r = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) ? re(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t) : re(n, "(…)", t);
        }(e, i);

      case "string":
        return function (e, t, n, i) {
          if (!1 === t) {
            if (J(e, /["\n]/g) <= J(e, /`|\${/g)) {
              var _t24 = document.createElement("span");

              i && _t24.appendChild(r(i));

              var _n10 = _t24.appendChild(document.createElement("span"));

              return _n10.className = "observablehq--string", _n10.textContent = JSON.stringify(e), _t24;
            }

            var _o2 = e.split("\n");

            if (_o2.length > 20 && !n) {
              var _n11 = document.createElement("div");

              i && _n11.appendChild(r(i));

              var _a2 = _n11.appendChild(document.createElement("span"));

              _a2.className = "observablehq--string", _a2.textContent = "`" + K(_o2.slice(0, 20).join("\n"));

              var _s2 = _n11.appendChild(document.createElement("span")),
                  _l = _o2.length - 20;

              return _s2.textContent = "Show ".concat(_l, " truncated line").concat(_l > 1 ? "s" : ""), _s2.className = "observablehq--string-expand", _s2.addEventListener("mouseup", function (r) {
                r.stopPropagation(), ae(_n11, oe(e, t, !0, i));
              }), _n11;
            }

            var _a = document.createElement("span");

            i && _a.appendChild(r(i));

            var _s = _a.appendChild(document.createElement("span"));

            return _s.className = "observablehq--string" + (n ? " observablehq--expanded" : ""), _s.textContent = "`" + K(e) + "`", _a;
          }

          var o = document.createElement("span");
          i && o.appendChild(r(i));
          var a = o.appendChild(document.createElement("span"));
          return a.className = "observablehq--string", a.textContent = JSON.stringify(e.length > 100 ? "".concat(e.slice(0, 50), "\u2026").concat(e.slice(-49)) : e), o;
        }(e, t, n, i);

      default:
        if (null === e) {
          s = null, e = "null";
          break;
        }

        if (e instanceof Date) {
          s = "date", l = e, e = isNaN(l) ? "Invalid Date" : function (e) {
            return 0 === e.getUTCMilliseconds() && 0 === e.getUTCSeconds() && 0 === e.getUTCMinutes() && 0 === e.getUTCHours();
          }(l) ? W(l.getUTCFullYear()) + "-" + H(l.getUTCMonth() + 1, 2) + "-" + H(l.getUTCDate(), 2) : W(l.getFullYear()) + "-" + H(l.getMonth() + 1, 2) + "-" + H(l.getDate(), 2) + "T" + H(l.getHours(), 2) + ":" + H(l.getMinutes(), 2) + (l.getMilliseconds() ? ":" + H(l.getSeconds(), 2) + "." + H(l.getMilliseconds(), 3) : l.getSeconds() ? ":" + H(l.getSeconds(), 2) : "");
          break;
        }

        if (e === u) {
          s = "forbidden", e = "[forbidden]";
          break;
        }

        switch (ie.call(e)) {
          case "[object RegExp]":
            s = "regexp", e = function (e) {
              return G.call(e);
            }(e);
            break;

          case "[object Error]":
          case "[object DOMException]":
            s = "error", e = function (e) {
              return e.stack || V.call(e);
            }(e);
            break;

          default:
            return (n ? w : O)(e, t, i, a);
        }

    }

    var l;
    var c = document.createElement("span");
    i && c.appendChild(r(i));
    var d = c.appendChild(document.createElement("span"));
    return d.className = "observablehq--" + s, d.textContent = e, c;
  }

  function ae(t, n) {
    t.classList.contains("observablehq--inspect") && n.classList.add("observablehq--inspect"), t.parentNode.replaceChild(n, t), e(n, "load");
  }

  var se = /\s+\(\d+:\d+\)$/m;

  var le = /*#__PURE__*/function () {
    function le(e) {
      _classCallCheck(this, le);

      if (!e) throw new Error("invalid node");
      this._node = e, e.classList.add("observablehq");
    }

    _createClass(le, [{
      key: "pending",
      value: function pending() {
        var e = this._node;
        e.classList.remove("observablehq--error"), e.classList.add("observablehq--running");
      }
    }, {
      key: "fulfilled",
      value: function fulfilled(t, n) {
        var r = this._node;
        if ((!(t instanceof Element || t instanceof Text) || t.parentNode && t.parentNode !== r) && (t = oe(t, !1, r.firstChild && r.firstChild.classList && r.firstChild.classList.contains("observablehq--expanded"), n)).classList.add("observablehq--inspect"), r.classList.remove("observablehq--running", "observablehq--error"), r.firstChild !== t) if (r.firstChild) {
          for (; r.lastChild !== r.firstChild;) {
            r.removeChild(r.lastChild);
          }

          r.replaceChild(t, r.firstChild);
        } else r.appendChild(t);
        e(r, "update");
      }
    }, {
      key: "rejected",
      value: function rejected(t, n) {
        var i = this._node;

        for (i.classList.remove("observablehq--running"), i.classList.add("observablehq--error"); i.lastChild;) {
          i.removeChild(i.lastChild);
        }

        var o = document.createElement("div");
        o.className = "observablehq--inspect", n && o.appendChild(r(n)), o.appendChild(document.createTextNode((t + "").replace(se, ""))), i.appendChild(o), e(i, "error", {
          error: t
        });
      }
    }]);

    return le;
  }();

  le.into = function (e) {
    if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");
    return function () {
      return new le(e.appendChild(document.createElement("div")));
    };
  };

  var ue = new Map(),
      ce = [],
      de = ce.map,
      fe = ce.some,
      pe = ce.hasOwnProperty,
      he = "https://cdn.jsdelivr.net/npm/",
      me = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,
      ve = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/,
      be = /\.[^/]*$/,
      _e = ["unpkg", "jsdelivr", "browser", "main"];

  var RequireError = /*#__PURE__*/function (_Error) {
    _inherits(RequireError, _Error);

    var _super = _createSuper(RequireError);

    function RequireError(e) {
      _classCallCheck(this, RequireError);

      return _super.call(this, e);
    }

    return RequireError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  function we(e) {
    var t = me.exec(e);
    return t && {
      name: t[1],
      version: t[2],
      path: t[3]
    };
  }

  function ye(e) {
    var t = "".concat(he).concat(e.name).concat(e.version ? "@" + e.version : "", "/package.json");
    var n = ue.get(t);
    return n || ue.set(t, n = fetch(t).then(function (e) {
      if (!e.ok) throw new RequireError("unable to load package.json");
      return e.redirected && !ue.has(e.url) && ue.set(e.url, n), e.json();
    })), n;
  }

  RequireError.prototype.name = RequireError.name;
  var ge = Ee( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
      var n, _e5, r;

      return regeneratorRuntime.wrap(function _callee$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              if (!(e.startsWith(he) && (e = e.substring(he.length)), /^(\w+:)|\/\//i.test(e))) {
                _context16.next = 2;
                break;
              }

              return _context16.abrupt("return", e);

            case 2:
              if (!/^[.]{0,2}\//i.test(e)) {
                _context16.next = 4;
                break;
              }

              return _context16.abrupt("return", new URL(e, null == t ? location : t).href);

            case 4:
              if (!(!e.length || /^[\s._]/.test(e) || /\s$/.test(e))) {
                _context16.next = 6;
                break;
              }

              throw new RequireError("illegal name");

            case 6:
              n = we(e);

              if (n) {
                _context16.next = 9;
                break;
              }

              return _context16.abrupt("return", "".concat(he).concat(e));

            case 9:
              if (!(!n.version && null != t && t.startsWith(he))) {
                _context16.next = 14;
                break;
              }

              _context16.next = 12;
              return ye(we(t.substring(he.length)));

            case 12:
              _e5 = _context16.sent;
              n.version = _e5.dependencies && _e5.dependencies[n.name] || _e5.peerDependencies && _e5.peerDependencies[n.name];

            case 14:
              if (!(n.path && !be.test(n.path) && (n.path += ".js"), n.path && n.version && ve.test(n.version))) {
                _context16.next = 16;
                break;
              }

              return _context16.abrupt("return", "".concat(he).concat(n.name, "@").concat(n.version, "/").concat(n.path));

            case 16:
              _context16.next = 18;
              return ye(n);

            case 18:
              r = _context16.sent;
              return _context16.abrupt("return", "".concat(he).concat(r.name, "@").concat(r.version, "/").concat(n.path || function (e) {
                var _iterator14 = _createForOfIteratorHelper(_e),
                    _step14;

                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var _t25 = _step14.value;
                    var _n12 = e[_t25];
                    if ("string" == typeof _n12) return be.test(_n12) ? _n12 : _n12 + ".js";
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
              }(r) || "index.js"));

            case 20:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  function Ee(e) {
    var t = new Map(),
        n = i(null);

    function r(e) {
      if ("string" != typeof e) return e;
      var n = t.get(e);
      return n || t.set(e, n = new Promise(function (t, n) {
        var r = document.createElement("script");
        r.onload = function () {
          try {
            t(ce.pop()(i(e)));
          } catch (e) {
            n(new RequireError("invalid module"));
          }

          r.remove();
        }, r.onerror = function () {
          n(new RequireError("unable to load module")), r.remove();
        }, r.async = !0, r.src = e, window.define = Pe, document.head.appendChild(r);
      })), n;
    }

    function i(t) {
      return function (n) {
        return Promise.resolve(e(n, t)).then(r);
      };
    }

    function o(e) {
      return arguments.length > 1 ? Promise.all(de.call(arguments, n)).then(xe) : n(e);
    }

    return o.alias = function (t) {
      return Ee(function (n, r) {
        return n in t && (r = null, "string" != typeof (n = t[n])) ? n : e(n, r);
      });
    }, o.resolve = e, o;
  }

  function xe(e) {
    var t = {};

    var _iterator15 = _createForOfIteratorHelper(e),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _n13 = _step15.value;

        for (var _e6 in _n13) {
          pe.call(_n13, _e6) && (null == _n13[_e6] ? Object.defineProperty(t, _e6, {
            get: Ce(_n13, _e6)
          }) : t[_e6] = _n13[_e6]);
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    return t;
  }

  function Ce(e, t) {
    return function () {
      return e[t];
    };
  }

  function Ne(e) {
    return "exports" === (e += "") || "module" === e;
  }

  function Pe(e, t, n) {
    var r = arguments.length;
    r < 2 ? (n = e, t = []) : r < 3 && (n = t, t = "string" == typeof e ? [] : e), ce.push(fe.call(t, Ne) ? function (e) {
      var r = {},
          i = {
        exports: r
      };
      return Promise.all(de.call(t, function (t) {
        return "exports" === (t += "") ? r : "module" === t ? i : e(t);
      })).then(function (e) {
        return n.apply(null, e), i.exports;
      });
    } : function (e) {
      return Promise.all(de.call(t, e)).then(function (e) {
        return "function" == typeof n ? n.apply(null, e) : n;
      });
    });
  }

  function Se(_x3) {
    return _Se.apply(this, arguments);
  }

  function _Se() {
    _Se = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var t;
      return regeneratorRuntime.wrap(function _callee14$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              _context33.t0 = fetch;
              _context33.next = 3;
              return e.url();

            case 3:
              _context33.t1 = _context33.sent;
              _context33.next = 6;
              return (0, _context33.t0)(_context33.t1);

            case 6:
              t = _context33.sent;

              if (t.ok) {
                _context33.next = 9;
                break;
              }

              throw new Error("Unable to load file: " + e.name);

            case 9:
              return _context33.abrupt("return", t);

            case 10:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee14);
    }));
    return _Se.apply(this, arguments);
  }

  function qe(_x4, _x5) {
    return _qe.apply(this, arguments);
  }

  function _qe() {
    _qe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, t) {
      var _ref9,
          _ref9$array,
          n,
          _ref9$typed,
          r,
          _yield$Promise$all,
          _yield$Promise$all2,
          i,
          o,
          _args34 = arguments;

      return regeneratorRuntime.wrap(function _callee15$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              _ref9 = _args34.length > 2 && _args34[2] !== undefined ? _args34[2] : {}, _ref9$array = _ref9.array, n = _ref9$array === void 0 ? !1 : _ref9$array, _ref9$typed = _ref9.typed, r = _ref9$typed === void 0 ? !1 : _ref9$typed;
              _context34.next = 3;
              return Promise.all([e.text(), ge("d3-dsv@2.0.0/dist/d3-dsv.min.js")]);

            case 3:
              _yield$Promise$all = _context34.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              i = _yield$Promise$all2[0];
              o = _yield$Promise$all2[1];
              return _context34.abrupt("return", ("\t" === t ? n ? o.tsvParseRows : o.tsvParse : n ? o.csvParseRows : o.csvParse)(i, r && o.autoType));

            case 8:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee15);
    }));
    return _qe.apply(this, arguments);
  }

  Pe.amd = {};

  var FileAttachment = /*#__PURE__*/function () {
    function FileAttachment(e, t) {
      _classCallCheck(this, FileAttachment);

      Object.defineProperties(this, {
        _url: {
          value: e
        },
        name: {
          value: t,
          enumerable: !0
        }
      });
    }

    _createClass(FileAttachment, [{
      key: "url",
      value: function () {
        var _url = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return this._url;

                case 2:
                  _context17.t0 = _context17.sent;
                  return _context17.abrupt("return", _context17.t0 + "");

                case 4:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee2, this);
        }));

        function url() {
          return _url.apply(this, arguments);
        }

        return url;
      }()
    }, {
      key: "blob",
      value: function () {
        var _blob = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return Se(this);

                case 2:
                  return _context18.abrupt("return", _context18.sent.blob());

                case 3:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee3, this);
        }));

        function blob() {
          return _blob.apply(this, arguments);
        }

        return blob;
      }()
    }, {
      key: "arrayBuffer",
      value: function () {
        var _arrayBuffer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return Se(this);

                case 2:
                  return _context19.abrupt("return", _context19.sent.arrayBuffer());

                case 3:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee4, this);
        }));

        function arrayBuffer() {
          return _arrayBuffer.apply(this, arguments);
        }

        return arrayBuffer;
      }()
    }, {
      key: "text",
      value: function () {
        var _text = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return Se(this);

                case 2:
                  return _context20.abrupt("return", _context20.sent.text());

                case 3:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee5, this);
        }));

        function text() {
          return _text.apply(this, arguments);
        }

        return text;
      }()
    }, {
      key: "json",
      value: function () {
        var _json = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return Se(this);

                case 2:
                  return _context21.abrupt("return", _context21.sent.json());

                case 3:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee6, this);
        }));

        function json() {
          return _json.apply(this, arguments);
        }

        return json;
      }()
    }, {
      key: "stream",
      value: function () {
        var _stream = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.next = 2;
                  return Se(this);

                case 2:
                  return _context22.abrupt("return", _context22.sent.body);

                case 3:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee7, this);
        }));

        function stream() {
          return _stream.apply(this, arguments);
        }

        return stream;
      }()
    }, {
      key: "csv",
      value: function () {
        var _csv = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
          return regeneratorRuntime.wrap(function _callee8$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  return _context23.abrupt("return", qe(this, ",", e));

                case 1:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee8, this);
        }));

        function csv(_x6) {
          return _csv.apply(this, arguments);
        }

        return csv;
      }()
    }, {
      key: "tsv",
      value: function () {
        var _tsv = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
          return regeneratorRuntime.wrap(function _callee9$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  return _context24.abrupt("return", qe(this, "\t", e));

                case 1:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee9, this);
        }));

        function tsv(_x7) {
          return _tsv.apply(this, arguments);
        }

        return tsv;
      }()
    }, {
      key: "image",
      value: function () {
        var _image = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var _this = this;

          var e;
          return regeneratorRuntime.wrap(function _callee10$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return this.url();

                case 2:
                  e = _context25.sent;
                  return _context25.abrupt("return", new Promise(function (t, n) {
                    var r = new Image();
                    new URL(e, document.baseURI).origin !== new URL(location).origin && (r.crossOrigin = "anonymous"), r.onload = function () {
                      return t(r);
                    }, r.onerror = function () {
                      return n(new Error("Unable to load file: " + _this.name));
                    }, r.src = e;
                  }));

                case 4:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee10, this);
        }));

        function image() {
          return _image.apply(this, arguments);
        }

        return image;
      }()
    }]);

    return FileAttachment;
  }();

  function Me(e) {
    throw new Error("File not found: " + e);
  }

  function je(e) {
    return function () {
      return e;
    };
  }

  var Le = {
    math: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  var ke = 0;

  function Oe(e) {
    this.id = e, this.href = new URL("#" + e, location) + "";
  }

  Oe.prototype.toString = function () {
    return "url(" + this.href + ")";
  };

  var Te = {
    canvas: function canvas(e, t) {
      var n = document.createElement("canvas");
      return n.width = e, n.height = t, n;
    },
    context2d: function context2d(e, t, n) {
      null == n && (n = devicePixelRatio);
      var r = document.createElement("canvas");
      r.width = e * n, r.height = t * n, r.style.width = e + "px";
      var i = r.getContext("2d");
      return i.scale(n, n), i;
    },
    download: function download(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "untitled";
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Save";
      var r = document.createElement("a"),
          i = r.appendChild(document.createElement("button"));

      function o() {
        return _o3.apply(this, arguments);
      }

      function _o3() {
        _o3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return new Promise(requestAnimationFrame);

                case 2:
                  URL.revokeObjectURL(r.href);
                  r.removeAttribute("href");
                  i.textContent = n;
                  i.disabled = !1;

                case 6:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee12);
        }));
        return _o3.apply(this, arguments);
      }

      return i.textContent = n, r.download = t, r.onclick = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(t) {
          var _t26;

          return regeneratorRuntime.wrap(function _callee11$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  if (!(i.disabled = !0, r.href)) {
                    _context26.next = 2;
                    break;
                  }

                  return _context26.abrupt("return", o());

                case 2:
                  i.textContent = "Saving…";
                  _context26.prev = 3;
                  _context26.next = 6;
                  return "function" == typeof e ? e() : e;

                case 6:
                  _t26 = _context26.sent;
                  i.textContent = "Download", r.href = URL.createObjectURL(_t26);
                  _context26.next = 13;
                  break;

                case 10:
                  _context26.prev = 10;
                  _context26.t0 = _context26["catch"](3);
                  i.textContent = n;

                case 13:
                  if (!t.eventPhase) {
                    _context26.next = 15;
                    break;
                  }

                  return _context26.abrupt("return", o());

                case 15:
                  i.disabled = !1;

                case 16:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee11, null, [[3, 10]]);
        }));

        return function (_x8) {
          return _ref3.apply(this, arguments);
        };
      }(), r;
    },
    element: function element(e, t) {
      var n,
          r = e += "",
          i = r.indexOf(":");
      i >= 0 && "xmlns" !== (r = e.slice(0, i)) && (e = e.slice(i + 1));
      var o = Le.hasOwnProperty(r) ? document.createElementNS(Le[r], e) : document.createElement(e);
      if (t) for (var a in t) {
        i = (r = a).indexOf(":"), n = t[a], i >= 0 && "xmlns" !== (r = a.slice(0, i)) && (a = a.slice(i + 1)), Le.hasOwnProperty(r) ? o.setAttributeNS(Le[r], a, n) : o.setAttribute(a, n);
      }
      return o;
    },
    input: function input(e) {
      var t = document.createElement("input");
      return null != e && (t.type = e), t;
    },
    range: function range(e, t, n) {
      1 === arguments.length && (t = e, e = null);
      var r = document.createElement("input");
      return r.min = e = null == e ? 0 : +e, r.max = t = null == t ? 1 : +t, r.step = null == n ? "any" : n = +n, r.type = "range", r;
    },
    select: function select(e) {
      var t = document.createElement("select");
      return Array.prototype.forEach.call(e, function (e) {
        var n = document.createElement("option");
        n.value = n.textContent = e, t.appendChild(n);
      }), t;
    },
    svg: function svg(e, t) {
      var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height", t), n;
    },
    text: function text(e) {
      return document.createTextNode(e);
    },
    uid: function uid(e) {
      return new Oe("O-" + (null == e ? "" : e + "-") + ++ke);
    }
  };
  var Ae = {
    buffer: function buffer(e) {
      return new Promise(function (t, n) {
        var r = new FileReader();
        r.onload = function () {
          t(r.result);
        }, r.onerror = n, r.readAsArrayBuffer(e);
      });
    },
    text: function text(e) {
      return new Promise(function (t, n) {
        var r = new FileReader();
        r.onload = function () {
          t(r.result);
        }, r.onerror = n, r.readAsText(e);
      });
    },
    url: function url(e) {
      return new Promise(function (t, n) {
        var r = new FileReader();
        r.onload = function () {
          t(r.result);
        }, r.onerror = n, r.readAsDataURL(e);
      });
    }
  };

  function $e() {
    return this;
  }

  function Ue(e, t) {
    var _ref4;

    var n = !1;
    if ("function" != typeof t) throw new Error("dispose is not a function");
    return _ref4 = {}, _defineProperty(_ref4, Symbol.iterator, $e), _defineProperty(_ref4, "next", function next() {
      return n ? {
        done: !0
      } : (n = !0, {
        done: !1,
        value: e
      });
    }), _defineProperty(_ref4, "return", function _return() {
      return n = !0, t(e), {
        done: !0
      };
    }), _defineProperty(_ref4, "throw", function _throw() {
      return {
        done: n = !0
      };
    }), _ref4;
  }

  function Re(e) {
    var _ref5;

    var t,
        n,
        r = !1;
    var i = e(function (e) {
      n ? (n(e), n = null) : r = !0;
      return t = e;
    });
    if (null != i && "function" != typeof i) throw new Error("function" == typeof i.then ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
    return _ref5 = {}, _defineProperty(_ref5, Symbol.iterator, $e), _defineProperty(_ref5, "throw", function _throw() {
      return {
        done: !0
      };
    }), _defineProperty(_ref5, "return", function _return() {
      return null != i && i(), {
        done: !0
      };
    }), _defineProperty(_ref5, "next", function next() {
      return {
        done: !1,
        value: r ? (r = !1, Promise.resolve(t)) : new Promise(function (e) {
          return n = e;
        })
      };
    }), _ref5;
  }

  function De(e) {
    switch (e.type) {
      case "range":
      case "number":
        return e.valueAsNumber;

      case "date":
        return e.valueAsDate;

      case "checkbox":
        return e.checked;

      case "file":
        return e.multiple ? e.files : e.files[0];

      case "select-multiple":
        return Array.from(e.selectedOptions, function (e) {
          return e.value;
        });

      default:
        return e.value;
    }
  }

  var Fe = {
    disposable: Ue,
    filter: /*#__PURE__*/regeneratorRuntime.mark(function filter(e, t) {
      var n, r;
      return regeneratorRuntime.wrap(function filter$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              r = -1;

            case 1:
              if ((n = e.next()).done) {
                _context28.next = 8;
                break;
              }

              _context28.t0 = t(n.value, ++r);

              if (!_context28.t0) {
                _context28.next = 6;
                break;
              }

              _context28.next = 6;
              return n.value;

            case 6:
              _context28.next = 1;
              break;

            case 8:
            case "end":
              return _context28.stop();
          }
        }
      }, filter);
    }),
    input: function input(e) {
      return Re(function (t) {
        var n = function (e) {
          switch (e.type) {
            case "button":
            case "submit":
            case "checkbox":
              return "click";

            case "file":
              return "change";

            default:
              return "input";
          }
        }(e),
            r = De(e);

        function i() {
          t(De(e));
        }

        return e.addEventListener(n, i), void 0 !== r && t(r), function () {
          e.removeEventListener(n, i);
        };
      });
    },
    map: /*#__PURE__*/regeneratorRuntime.mark(function map(e, t) {
      var n, r;
      return regeneratorRuntime.wrap(function map$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              r = -1;

            case 1:
              if ((n = e.next()).done) {
                _context29.next = 6;
                break;
              }

              _context29.next = 4;
              return t(n.value, ++r);

            case 4:
              _context29.next = 1;
              break;

            case 6:
            case "end":
              return _context29.stop();
          }
        }
      }, map);
    }),
    observe: Re,
    queue: function queue(e) {
      var _ref6;

      var t;
      var n = [],
          r = e(function (e) {
        n.push(e), t && (t(n.shift()), t = null);
        return e;
      });
      if (null != r && "function" != typeof r) throw new Error("function" == typeof r.then ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
      return _ref6 = {}, _defineProperty(_ref6, Symbol.iterator, $e), _defineProperty(_ref6, "throw", function _throw() {
        return {
          done: !0
        };
      }), _defineProperty(_ref6, "return", function _return() {
        return null != r && r(), {
          done: !0
        };
      }), _defineProperty(_ref6, "next", function next() {
        return {
          done: !1,
          value: n.length ? Promise.resolve(n.shift()) : new Promise(function (e) {
            return t = e;
          })
        };
      }), _ref6;
    },
    range: /*#__PURE__*/regeneratorRuntime.mark(function range(e, t, n) {
      var r,
          i,
          _args30 = arguments;
      return regeneratorRuntime.wrap(function range$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              e = +e, t = +t, n = (i = _args30.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
              r = -1, i = 0 | Math.max(0, Math.ceil((t - e) / n));

            case 2:
              if (!(++r < i)) {
                _context30.next = 7;
                break;
              }

              _context30.next = 5;
              return e + r * n;

            case 5:
              _context30.next = 2;
              break;

            case 7:
            case "end":
              return _context30.stop();
          }
        }
      }, range);
    }),
    valueAt: function valueAt(e, t) {
      if (!(!isFinite(t = +t) || t < 0 || t != t | 0)) for (var n, r = -1; !(n = e.next()).done;) {
        if (++r === t) return n.value;
      }
    },
    worker: function worker(e) {
      var t = URL.createObjectURL(new Blob([e], {
        type: "text/javascript"
      })),
          n = new Worker(t);
      return Ue(n, function () {
        n.terminate(), URL.revokeObjectURL(t);
      });
    }
  };

  function Ie(e, t) {
    return function (n) {
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          d = n[0],
          f = [],
          p = null,
          h = -1;

      for (s = 1, l = arguments.length; s < l; ++s) {
        if ((r = arguments[s]) instanceof Node) f[++h] = r, d += "\x3c!--o:" + h + "--\x3e";else if (Array.isArray(r)) {
          for (u = 0, c = r.length; u < c; ++u) {
            (i = r[u]) instanceof Node ? (null === p && (f[++h] = p = document.createDocumentFragment(), d += "\x3c!--o:" + h + "--\x3e"), p.appendChild(i)) : (p = null, d += i);
          }

          p = null;
        } else d += r;
        d += n[s];
      }

      if (p = e(d), ++h > 0) {
        for (o = new Array(h), a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); a.nextNode();) {
          i = a.currentNode, /^o:/.test(i.nodeValue) && (o[+i.nodeValue.slice(2)] = i);
        }

        for (s = 0; s < h; ++s) {
          (i = o[s]) && i.parentNode.replaceChild(f[s], i);
        }
      }

      return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((i = t()).appendChild(p), i) : p;
    };
  }

  var ze = Ie(function (e) {
    var t = document.createElement("template");
    return t.innerHTML = e.trim(), document.importNode(t.content, !0);
  }, function () {
    return document.createElement("span");
  });
  var Be = "https://cdn.jsdelivr.net/npm/@observablehq/highlight.js@2.0.0/";

  function He(e) {
    return function () {
      return e("marked@0.3.12/marked.min.js").then(function (t) {
        return Ie(function (n) {
          var r = document.createElement("div");
          r.innerHTML = t(n, {
            langPrefix: ""
          }).trim();
          var i = r.querySelectorAll("pre code[class]");
          return i.length > 0 && e(Be + "highlight.min.js").then(function (t) {
            i.forEach(function (n) {
              function r() {
                t.highlightBlock(n), n.parentNode.classList.add("observablehq--md-pre");
              }

              t.getLanguage(n.className) ? r() : e(Be + "async-languages/index.js").then(function (r) {
                if (r.has(n.className)) return e(Be + "async-languages/" + r.get(n.className)).then(function (e) {
                  t.registerLanguage(n.className, e);
                });
              }).then(r, r);
            });
          }), r;
        }, function () {
          return document.createElement("div");
        });
      });
    };
  }

  function We(e) {
    var t;
    Object.defineProperties(this, {
      generator: {
        value: Re(function (e) {
          t = e;
        })
      },
      value: {
        get: function get() {
          return e;
        },
        set: function set(n) {
          return t(e = n);
        }
      }
    }), void 0 !== e && t(e);
  }

  function Ve() {
    return regeneratorRuntime.wrap(function Ve$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.next = 2;
            return Date.now();

          case 2:
            _context31.next = 0;
            break;

          case 4:
          case "end":
            return _context31.stop();
        }
      }
    }, _marked16);
  }

  var Ge = new Map();

  function Ke(e, t) {
    var n;
    return (n = Ge.get(e = +e)) ? n.then(je(t)) : (n = Date.now()) >= e ? Promise.resolve(t) : function (e, t) {
      var n = new Promise(function (n) {
        Ge["delete"](t);
        var r = t - e;
        if (!(r > 0)) throw new Error("invalid time");
        if (r > 2147483647) throw new Error("too long to wait");
        setTimeout(n, r);
      });
      return Ge.set(t, n), n;
    }(n, e).then(je(t));
  }

  var Ye = {
    delay: function delay(e, t) {
      return new Promise(function (n) {
        setTimeout(function () {
          n(t);
        }, e);
      });
    },
    tick: function tick(e, t) {
      return Ke(Math.ceil((Date.now() + 1) / e) * e, t);
    },
    when: Ke
  };

  function Je(e, t) {
    if (/^(\w+:)|\/\//i.test(e)) return e;
    if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
    if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");
    return "https://unpkg.com/" + e;
  }

  function Xe(e) {
    return null == e ? ge : Ee(e);
  }

  var Qe = Ie(function (e) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return t.innerHTML = e.trim(), t;
  }, function () {
    return document.createElementNS("http://www.w3.org/2000/svg", "g");
  }),
      Ze = String.raw;

  function et(e) {
    return new Promise(function (t, n) {
      var r = document.createElement("link");
      r.rel = "stylesheet", r.href = e, r.onerror = n, r.onload = t, document.head.appendChild(r);
    });
  }

  function tt(e) {
    return function () {
      return Promise.all([e("@observablehq/katex@0.11.1/dist/katex.min.js"), e.resolve("@observablehq/katex@0.11.1/dist/katex.min.css").then(et)]).then(function (e) {
        var t = e[0],
            n = r();

        function r(e) {
          return function () {
            var n = document.createElement("div");
            return t.render(Ze.apply(String, arguments), n, e), n.removeChild(n.firstChild);
          };
        }

        return n.options = r, n.block = r({
          displayMode: !0
        }), n;
      });
    };
  }

  function nt() {
    return Re(function (e) {
      var t = e(document.body.clientWidth);

      function n() {
        var n = document.body.clientWidth;
        n !== t && e(t = n);
      }

      return window.addEventListener("resize", n), function () {
        window.removeEventListener("resize", n);
      };
    });
  }

  var rt = Object.assign(function (e) {
    var t = Xe(e);
    Object.defineProperties(this, {
      DOM: {
        value: Te,
        writable: !0,
        enumerable: !0
      },
      FileAttachment: {
        value: je(Me),
        writable: !0,
        enumerable: !0
      },
      Files: {
        value: Ae,
        writable: !0,
        enumerable: !0
      },
      Generators: {
        value: Fe,
        writable: !0,
        enumerable: !0
      },
      html: {
        value: je(ze),
        writable: !0,
        enumerable: !0
      },
      md: {
        value: He(t),
        writable: !0,
        enumerable: !0
      },
      Mutable: {
        value: je(We),
        writable: !0,
        enumerable: !0
      },
      now: {
        value: Ve,
        writable: !0,
        enumerable: !0
      },
      Promises: {
        value: Ye,
        writable: !0,
        enumerable: !0
      },
      require: {
        value: je(t),
        writable: !0,
        enumerable: !0
      },
      resolve: {
        value: je(Je),
        writable: !0,
        enumerable: !0
      },
      svg: {
        value: je(Qe),
        writable: !0,
        enumerable: !0
      },
      tex: {
        value: tt(t),
        writable: !0,
        enumerable: !0
      },
      width: {
        value: nt,
        writable: !0,
        enumerable: !0
      }
    });
  }, {
    resolve: ge.resolve
  });

  function it(e, t) {
    this.message = e + "", this.input = t;
  }

  it.prototype = Object.create(Error.prototype), it.prototype.name = "RuntimeError", it.prototype.constructor = it;
  var ot = Array.prototype,
      at = ot.map,
      st = ot.forEach;

  function lt(e) {
    return function () {
      return e;
    };
  }

  function ut(e) {
    return e;
  }

  function ct() {}

  var dt = {};

  function ft(e, t, n) {
    var r;
    null == n && (n = dt), Object.defineProperties(this, {
      _observer: {
        value: n,
        writable: !0
      },
      _definition: {
        value: mt,
        writable: !0
      },
      _duplicate: {
        value: void 0,
        writable: !0
      },
      _duplicates: {
        value: void 0,
        writable: !0
      },
      _indegree: {
        value: NaN,
        writable: !0
      },
      _inputs: {
        value: [],
        writable: !0
      },
      _invalidate: {
        value: ct,
        writable: !0
      },
      _module: {
        value: t
      },
      _name: {
        value: null,
        writable: !0
      },
      _outputs: {
        value: new Set(),
        writable: !0
      },
      _promise: {
        value: Promise.resolve(void 0),
        writable: !0
      },
      _reachable: {
        value: n !== dt,
        writable: !0
      },
      _rejector: {
        value: (r = this, function (e) {
          if (e === mt) throw new it(r._name + " is not defined", r._name);
          if (e instanceof Error && e.message) throw new it(e.message, r._name);
          throw new it(r._name + " could not be resolved", r._name);
        })
      },
      _type: {
        value: e
      },
      _value: {
        value: void 0,
        writable: !0
      },
      _version: {
        value: 0,
        writable: !0
      }
    });
  }

  function pt(e) {
    e._module._runtime._dirty.add(e), e._outputs.add(this);
  }

  function ht(e) {
    e._module._runtime._dirty.add(e), e._outputs["delete"](this);
  }

  function mt() {
    throw mt;
  }

  function vt(e) {
    return function () {
      throw new it(e + " is defined more than once");
    };
  }

  function bt(e, t, n) {
    var r = this._module._scope,
        i = this._module._runtime;

    if (this._inputs.forEach(ht, this), t.forEach(pt, this), this._inputs = t, this._definition = n, this._value = void 0, n === ct ? i._variables["delete"](this) : i._variables.add(this), e !== this._name || r.get(e) !== this) {
      var o, a;
      if (this._name) if (this._outputs.size) r["delete"](this._name), (a = this._module._resolve(this._name))._outputs = this._outputs, this._outputs = new Set(), a._outputs.forEach(function (e) {
        e._inputs[e._inputs.indexOf(this)] = a;
      }, this), a._outputs.forEach(i._updates.add, i._updates), i._dirty.add(a).add(this), r.set(this._name, a);else if ((a = r.get(this._name)) === this) r["delete"](this._name);else {
        if (3 !== a._type) throw new Error();
        a._duplicates["delete"](this), this._duplicate = void 0, 1 === a._duplicates.size && (a = a._duplicates.keys().next().value, o = r.get(this._name), a._outputs = o._outputs, o._outputs = new Set(), a._outputs.forEach(function (e) {
          e._inputs[e._inputs.indexOf(o)] = a;
        }), a._definition = a._duplicate, a._duplicate = void 0, i._dirty.add(o).add(a), i._updates.add(a), r.set(this._name, a));
      }
      if (this._outputs.size) throw new Error();
      e && ((a = r.get(e)) ? 3 === a._type ? (this._definition = vt(e), this._duplicate = n, a._duplicates.add(this)) : 2 === a._type ? (this._outputs = a._outputs, a._outputs = new Set(), this._outputs.forEach(function (e) {
        e._inputs[e._inputs.indexOf(a)] = this;
      }, this), i._dirty.add(a).add(this), r.set(e, this)) : (a._duplicate = a._definition, this._duplicate = n, (o = new ft(3, this._module))._name = e, o._definition = this._definition = a._definition = vt(e), o._outputs = a._outputs, a._outputs = new Set(), o._outputs.forEach(function (e) {
        e._inputs[e._inputs.indexOf(a)] = o;
      }), o._duplicates = new Set([this, a]), i._dirty.add(a).add(o), i._updates.add(a).add(o), r.set(e, o)) : r.set(e, this)), this._name = e;
    }

    return i._updates.add(this), i._compute(), this;
  }

  function _t(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    Object.defineProperties(this, {
      _runtime: {
        value: e
      },
      _scope: {
        value: new Map()
      },
      _builtins: {
        value: new Map([["invalidation", gt], ["visibility", Et]].concat(_toConsumableArray(t)))
      },
      _source: {
        value: null,
        writable: !0
      }
    });
  }

  function wt(e) {
    return e._name;
  }

  Object.defineProperties(ft.prototype, {
    _pending: {
      value: function value() {
        this._observer.pending && this._observer.pending();
      },
      writable: !0,
      configurable: !0
    },
    _fulfilled: {
      value: function value(e) {
        this._observer.fulfilled && this._observer.fulfilled(e, this._name);
      },
      writable: !0,
      configurable: !0
    },
    _rejected: {
      value: function value(e) {
        this._observer.rejected && this._observer.rejected(e, this._name);
      },
      writable: !0,
      configurable: !0
    },
    define: {
      value: function value(e, t, n) {
        switch (arguments.length) {
          case 1:
            n = e, e = t = null;
            break;

          case 2:
            n = t, "string" == typeof e ? t = null : (t = e, e = null);
        }

        return bt.call(this, null == e ? null : e + "", null == t ? [] : at.call(t, this._module._resolve, this._module), "function" == typeof n ? n : lt(n));
      },
      writable: !0,
      configurable: !0
    },
    "delete": {
      value: function value() {
        return bt.call(this, null, [], ct);
      },
      writable: !0,
      configurable: !0
    },
    "import": {
      value: function value(e, t, n) {
        arguments.length < 3 && (n = t, t = e);
        return bt.call(this, t + "", [n._resolve(e + "")], ut);
      },
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperties(_t.prototype, {
    _copy: {
      value: function value(e, t) {
        e._source = this, t.set(this, e);

        var _iterator16 = _createForOfIteratorHelper(this._scope),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _step16$value = _slicedToArray(_step16.value, 2),
                _o4 = _step16$value[0],
                _a3 = _step16$value[1];

            var n = e._scope.get(_o4);

            if (!n || 1 !== n._type) if (_a3._definition === ut) {
              var r = _a3._inputs[0],
                  i = r._module;
              e["import"](r._name, _o4, t.get(i) || (i._source ? i._copy(new _t(e._runtime, e._builtins), t) : i));
            } else e.define(_o4, _a3._inputs.map(wt), _a3._definition);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }

        return e;
      },
      writable: !0,
      configurable: !0
    },
    _resolve: {
      value: function value(e) {
        var t,
            n = this._scope.get(e);

        if (!n) if (n = new ft(2, this), this._builtins.has(e)) n.define(e, lt(this._builtins.get(e)));else if (this._runtime._builtin._scope.has(e)) n["import"](e, this._runtime._builtin);else {
          try {
            t = this._runtime._global(e);
          } catch (t) {
            return n.define(e, (r = t, function () {
              throw r;
            }));
          }

          void 0 === t ? this._scope.set(n._name = e, n) : n.define(e, lt(t));
        }
        var r;
        return n;
      },
      writable: !0,
      configurable: !0
    },
    redefine: {
      value: function value(e) {
        var t = this._scope.get(e);

        if (!t) throw new it(e + " is not defined");
        if (3 === t._type) throw new it(e + " is defined more than once");
        return t.define.apply(t, arguments);
      },
      writable: !0,
      configurable: !0
    },
    define: {
      value: function value() {
        var e = new ft(1, this);
        return e.define.apply(e, arguments);
      },
      writable: !0,
      configurable: !0
    },
    derive: {
      value: function value(e, t) {
        var _this2 = this;

        var n = new _t(this._runtime, this._builtins);
        return n._source = this, st.call(e, function (e) {
          "object" != _typeof(e) && (e = {
            name: e + ""
          }), null == e.alias && (e.alias = e.name), n["import"](e.name, e.alias, t);
        }), Promise.resolve().then(function () {
          var e = new Set([_this2]);

          var _iterator17 = _createForOfIteratorHelper(e),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _t27 = _step17.value;

              var _iterator18 = _createForOfIteratorHelper(_t27._scope.values()),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var _n14 = _step18.value;

                  if (_n14._definition === ut) {
                    var _t28 = _n14._inputs[0]._module,
                        _r3 = _t28._source || _t28;

                    if (_r3 === _this2) return void console.warn("circular module definition; ignoring");
                    e.add(_r3);
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          _this2._copy(n, new Map());
        }), n;
      },
      writable: !0,
      configurable: !0
    },
    "import": {
      value: function value() {
        var e = new ft(1, this);
        return e["import"].apply(e, arguments);
      },
      writable: !0,
      configurable: !0
    },
    value: {
      value: function () {
        var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee13$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  t = this._scope.get(e);

                  if (t) {
                    _context32.next = 3;
                    break;
                  }

                  throw new it(e + " is not defined");

                case 3:
                  t._observer === dt && (t._observer = !0, this._runtime._dirty.add(t));
                  _context32.next = 6;
                  return this._runtime._compute();

                case 6:
                  return _context32.abrupt("return", t._promise);

                case 7:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee13, this);
        }));

        function value(_x9) {
          return _value.apply(this, arguments);
        }

        return value;
      }(),
      writable: !0,
      configurable: !0
    },
    variable: {
      value: function value(e) {
        return new ft(1, this, e);
      },
      writable: !0,
      configurable: !0
    },
    builtin: {
      value: function value(e, t) {
        this._builtins.set(e, t);
      },
      writable: !0,
      configurable: !0
    }
  });
  var yt = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setImmediate;
  var gt = {},
      Et = {};

  function xt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new rt();
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ot;
    var n = this.module();
    if (Object.defineProperties(this, {
      _dirty: {
        value: new Set()
      },
      _updates: {
        value: new Set()
      },
      _computing: {
        value: null,
        writable: !0
      },
      _init: {
        value: null,
        writable: !0
      },
      _modules: {
        value: new Map()
      },
      _variables: {
        value: new Set()
      },
      _disposed: {
        value: !1,
        writable: !0
      },
      _builtin: {
        value: n
      },
      _global: {
        value: t
      }
    }), e) for (var r in e) {
      new ft(2, n).define(r, [], e[r]);
    }
  }

  function Ct(e) {
    var t = new Set(e._inputs);

    var _iterator19 = _createForOfIteratorHelper(t),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var _n15 = _step19.value;
        if (_n15 === e) return !0;

        _n15._inputs.forEach(t.add, t);
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }

    return !1;
  }

  function Nt(e) {
    ++e._indegree;
  }

  function Pt(e) {
    --e._indegree;
  }

  function St(e) {
    return e._promise["catch"](e._rejector);
  }

  function qt(e) {
    return new Promise(function (t) {
      e._invalidate = t;
    });
  }

  function Mt(e, t) {
    var n,
        r,
        i = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
        o = !i,
        a = ct,
        s = ct;
    return i && (r = new IntersectionObserver(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
          e = _ref8[0];

      return (o = e.isIntersecting) && (n = null, a());
    }), r.observe(i), e.then(function () {
      return r.disconnect(), r = null, s();
    })), function (e) {
      return o ? Promise.resolve(e) : r ? (n || (n = new Promise(function (e, t) {
        return a = e, s = t;
      })), n.then(function () {
        return e;
      })) : Promise.reject();
    };
  }

  function jt(e) {
    e._invalidate(), e._invalidate = ct, e._pending();
    var t = e._value,
        n = ++e._version,
        r = null,
        i = e._promise = Promise.all(e._inputs.map(St)).then(function (i) {
      if (e._version === n) {
        for (var o = 0, a = i.length; o < a; ++o) {
          switch (i[o]) {
            case gt:
              i[o] = r = qt(e);
              break;

            case Et:
              r || (r = qt(e)), i[o] = Mt(r, e);
          }
        }

        return e._definition.apply(t, i);
      }
    }).then(function (t) {
      return function (e) {
        return e && "function" == typeof e.next && "function" == typeof e["return"];
      }(t) ? e._version !== n ? void t["return"]() : ((r || qt(e)).then((o = t, function () {
        o["return"]();
      })), function (e, t, n, r) {
        function i() {
          var n = new Promise(function (e) {
            e(r.next());
          }).then(function (r) {
            return r.done ? void 0 : Promise.resolve(r.value).then(function (r) {
              if (e._version === t) return Lt(e, r, n).then(i), e._fulfilled(r), r;
            });
          });
          n["catch"](function (r) {
            e._version === t && (Lt(e, void 0, n), e._rejected(r));
          });
        }

        return new Promise(function (e) {
          e(r.next());
        }).then(function (e) {
          if (!e.done) return n.then(i), e.value;
        });
      }(e, n, i, t)) : t;
      var o;
    });
    i.then(function (t) {
      e._version === n && (e._value = t, e._fulfilled(t));
    }, function (t) {
      e._version === n && (e._value = void 0, e._rejected(t));
    });
  }

  function Lt(e, t, n) {
    var r = e._module._runtime;
    return e._value = t, e._promise = n, e._outputs.forEach(r._updates.add, r._updates), r._compute();
  }

  function kt(e, t) {
    e._invalidate(), e._invalidate = ct, e._pending(), ++e._version, e._indegree = NaN, (e._promise = Promise.reject(t))["catch"](ct), e._value = void 0, e._rejected(t);
  }

  function Ot(e) {
    return window[e];
  }

  Object.defineProperties(xt, {
    load: {
      value: function value(e, t, n) {
        if ("function" == typeof t && (n = t, t = null), "function" != typeof n) throw new Error("invalid observer");
        null == t && (t = new rt());
        var r = e.modules,
            i = e.id,
            o = new Map(),
            a = new xt(t),
            s = l(i);

        function l(e) {
          var t = o.get(e);
          return t || o.set(e, t = a.module()), t;
        }

        var _iterator20 = _createForOfIteratorHelper(r),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _e7 = _step20.value;

            var _t29 = l(_e7.id);

            var _r4 = 0;

            var _iterator21 = _createForOfIteratorHelper(_e7.variables),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _i2 = _step21.value;
                _i2.from ? _t29["import"](_i2.remote, _i2.name, l(_i2.from)) : _t29 === s ? _t29.variable(n(_i2, _r4, _e7.variables)).define(_i2.name, _i2.inputs, _i2.value) : _t29.define(_i2.name, _i2.inputs, _i2.value), ++_r4;
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        return a;
      },
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperties(xt.prototype, {
    _compute: {
      value: function value() {
        return this._computing || (this._computing = this._computeSoon());
      },
      writable: !0,
      configurable: !0
    },
    _computeSoon: {
      value: function value() {
        var e = this;
        return new Promise(function (t) {
          yt(function () {
            t(), e._disposed || e._computeNow();
          });
        });
      },
      writable: !0,
      configurable: !0
    },
    _computeNow: {
      value: function value() {
        var e,
            t,
            n = [];
        (e = new Set(this._dirty)).forEach(function (t) {
          t._inputs.forEach(e.add, e);

          var n = function (e) {
            if (e._observer !== dt) return !0;
            var t = new Set(e._outputs);

            var _iterator22 = _createForOfIteratorHelper(t),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _e8 = _step22.value;
                if (_e8._observer !== dt) return !0;

                _e8._outputs.forEach(t.add, t);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            return !1;
          }(t);

          n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(), t._reachable = n;
        }, this), (e = new Set(this._updates)).forEach(function (t) {
          t._reachable ? (t._indegree = 0, t._outputs.forEach(e.add, e)) : (t._indegree = NaN, e["delete"](t));
        }), this._computing = null, this._updates.clear(), this._dirty.clear(), e.forEach(function (e) {
          e._outputs.forEach(Nt);
        });

        do {
          for (e.forEach(function (e) {
            0 === e._indegree && n.push(e);
          }); t = n.pop();) {
            jt(t), t._outputs.forEach(r), e["delete"](t);
          }

          e.forEach(function (t) {
            Ct(t) && (kt(t, new it("circular definition")), t._outputs.forEach(Pt), e["delete"](t));
          });
        } while (e.size);

        function r(e) {
          0 == --e._indegree && n.push(e);
        }
      },
      writable: !0,
      configurable: !0
    },
    dispose: {
      value: function value() {
        this._computing = Promise.resolve(), this._disposed = !0, this._variables.forEach(function (e) {
          e._invalidate(), e._version = NaN;
        });
      },
      writable: !0,
      configurable: !0
    },
    module: {
      value: function value(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ct;
        var n;
        if (void 0 === e) return (n = this._init) ? (this._init = null, n) : new _t(this);
        if (n = this._modules.get(e), n) return n;
        this._init = n = new _t(this), this._modules.set(e, n);

        try {
          e(this, t);
        } finally {
          this._init = null;
        }

        return n;
      },
      writable: !0,
      configurable: !0
    },
    fileAttachments: {
      value: function value(e) {
        return Object.assign(function (t) {
          var n = e(t += "");
          if (null == n) throw new Error("File not found: " + t);
          return new FileAttachment(n, t);
        }, {
          prototype: FileAttachment.prototype
        });
      },
      writable: !0,
      configurable: !0
    }
  });

  //Polyfills
  var el = document.getElementById("v-chart");
  var runtime = new xt();
  var main = runtime.module(define$3, function (name) {
    if (name === "__exampleChart") {
      return new le(el);
    }
  });

}());
