import er, { useMemo as Je, forwardRef as rr, createElement as Se, useState as Mr, useEffect as Fr } from "react";
import './index.css';var Te = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function $r() {
  if (Ke) return ie;
  Ke = 1;
  var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, h) {
    var g, R = {}, T = null, A = null;
    h !== void 0 && (T = "" + h), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (A = f.ref);
    for (g in f) a.call(f, g) && !s.hasOwnProperty(g) && (R[g] = f[g]);
    if (l && l.defaultProps) for (g in f = l.defaultProps, f) R[g] === void 0 && (R[g] = f[g]);
    return { $$typeof: t, type: l, key: T, ref: A, props: R, _owner: c.current };
  }
  return ie.Fragment = n, ie.jsx = u, ie.jsxs = u, ie;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Wr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), z = Symbol.iterator, P = "@@iterator";
    function E(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = z && e[z] || e[P];
      return typeof o == "function" ? o : null;
    }
    var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          i[d - 1] = arguments[d];
        Y("error", e, i);
      }
    }
    function Y(e, o, i) {
      {
        var d = _.ReactDebugCurrentFrame, y = d.getStackAddendum();
        y !== "" && (o += "%s", i = i.concat([y]));
        var C = i.map(function(m) {
          return String(m);
        });
        C.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var W = !1, J = !1, de = !1, fe = !1, pe = !1, K;
    K = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || pe || e === c || e === h || e === g || fe || e === A || W || J || de || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function te(e, o, i) {
      var d = e.displayName;
      if (d)
        return d;
      var y = o.displayName || o.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var o = e;
            return w(o) + ".Consumer";
          case u:
            var i = e;
            return w(i._context) + ".Provider";
          case f:
            return te(e, e.render, "ForwardRef");
          case R:
            var d = e.displayName || null;
            return d !== null ? d : I(e.type) || "Memo";
          case T: {
            var y = e, C = y._payload, m = y._init;
            try {
              return I(m(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, G = 0, U, oe, H, D, ne, F, Ae;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function cr() {
      {
        if (G === 0) {
          U = console.log, oe = console.info, H = console.warn, D = console.error, ne = console.group, F = console.groupCollapsed, Ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        G++;
      }
    }
    function ur() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: U
            }),
            info: M({}, e, {
              value: oe
            }),
            warn: M({}, e, {
              value: H
            }),
            error: M({}, e, {
              value: D
            }),
            group: M({}, e, {
              value: ne
            }),
            groupCollapsed: M({}, e, {
              value: F
            }),
            groupEnd: M({}, e, {
              value: Ae
            })
          });
        }
        G < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = _.ReactCurrentDispatcher, ye;
    function ve(e, o, i) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (y) {
            var d = y.stack.trim().match(/\n( *(at )?)/);
            ye = d && d[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var xe = !1, ge;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new dr();
    }
    function ze(e, o) {
      if (!e || xe)
        return "";
      {
        var i = ge.get(e);
        if (i !== void 0)
          return i;
      }
      var d;
      xe = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = he.current, he.current = null, cr();
      try {
        if (o) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (N) {
              d = N;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (N) {
              d = N;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            d = N;
          }
          e();
        }
      } catch (N) {
        if (N && d && typeof N.stack == "string") {
          for (var b = N.stack.split(`
`), O = d.stack.split(`
`), j = b.length - 1, S = O.length - 1; j >= 1 && S >= 0 && b[j] !== O[S]; )
            S--;
          for (; j >= 1 && S >= 0; j--, S--)
            if (b[j] !== O[S]) {
              if (j !== 1 || S !== 1)
                do
                  if (j--, S--, S < 0 || b[j] !== O[S]) {
                    var $ = `
` + b[j].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, $), $;
                  }
                while (j >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        xe = !1, he.current = C, ur(), Error.prepareStackTrace = y;
      }
      var Z = e ? e.displayName || e.name : "", q = Z ? ve(Z) : "";
      return typeof e == "function" && ge.set(e, q), q;
    }
    function fr(e, o, i) {
      return ze(e, !1);
    }
    function pr(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function be(e, o, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ze(e, pr(e));
      if (typeof e == "string")
        return ve(e);
      switch (e) {
        case h:
          return ve("Suspense");
        case g:
          return ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return fr(e.render);
          case R:
            return be(e.type, o, i);
          case T: {
            var d = e, y = d._payload, C = d._init;
            try {
              return be(C(y), o, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Ie = {}, Me = _.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var o = e._owner, i = be(e.type, e._source, o ? o.type : null);
        Me.setExtraStackFrame(i);
      } else
        Me.setExtraStackFrame(null);
    }
    function vr(e, o, i, d, y) {
      {
        var C = Function.call.bind(ae);
        for (var m in e)
          if (C(e, m)) {
            var b = void 0;
            try {
              if (typeof e[m] != "function") {
                var O = Error((d || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[m](o, m, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (me(y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, m, typeof b), me(null)), b instanceof Error && !(b.message in Ie) && (Ie[b.message] = !0, me(y), x("Failed %s type: %s", i, b.message), me(null));
          }
      }
    }
    var gr = Array.isArray;
    function we(e) {
      return gr(e);
    }
    function br(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, i = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function mr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function $e(e) {
      if (mr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), Fe(e);
    }
    var se = _.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Le, Ce;
    Ce = {};
    function yr(e) {
      if (ae.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xr(e) {
      if (ae.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, o) {
      if (typeof e.ref == "string" && se.current && o && se.current.stateNode !== o) {
        var i = I(se.current.type);
        Ce[i] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(se.current.type), e.ref), Ce[i] = !0);
      }
    }
    function Cr(e, o) {
      {
        var i = function() {
          We || (We = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function kr(e, o) {
      {
        var i = function() {
          Le || (Le = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Rr = function(e, o, i, d, y, C, m) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Er(e, o, i, d, y) {
      {
        var C, m = {}, b = null, O = null;
        i !== void 0 && ($e(i), b = "" + i), xr(o) && ($e(o.key), b = "" + o.key), yr(o) && (O = o.ref, wr(o, y));
        for (C in o)
          ae.call(o, C) && !hr.hasOwnProperty(C) && (m[C] = o[C]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (C in j)
            m[C] === void 0 && (m[C] = j[C]);
        }
        if (b || O) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Cr(m, S), O && kr(m, S);
        }
        return Rr(e, b, O, y, d, se.current, m);
      }
    }
    var ke = _.ReactCurrentOwner, Ge = _.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var o = e._owner, i = be(e.type, e._source, o ? o.type : null);
        Ge.setExtraStackFrame(i);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (ke.current) {
          var e = I(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      return "";
    }
    var Ve = {};
    function jr(e) {
      {
        var o = De();
        if (!o) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (o = `

Check the top-level render call using <` + i + ">.");
        }
        return o;
      }
    }
    function Be(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = jr(o);
        if (Ve[i])
          return;
        Ve[i] = !0;
        var d = "";
        e && e._owner && e._owner !== ke.current && (d = " It was passed a child from " + I(e._owner.type) + "."), X(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), X(null);
      }
    }
    function Ye(e, o) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var i = 0; i < e.length; i++) {
            var d = e[i];
            Ee(d) && Be(d, o);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = E(e);
          if (typeof y == "function" && y !== e.entries)
            for (var C = y.call(e), m; !(m = C.next()).done; )
              Ee(m.value) && Be(m.value, o);
        }
      }
    }
    function Sr(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var i;
        if (typeof o == "function")
          i = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === R))
          i = o.propTypes;
        else
          return;
        if (i) {
          var d = I(o);
          vr(i, e.props, "prop", d, e);
        } else if (o.PropTypes !== void 0 && !Re) {
          Re = !0;
          var y = I(o);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var o = Object.keys(e.props), i = 0; i < o.length; i++) {
          var d = o[i];
          if (d !== "children" && d !== "key") {
            X(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Ue = {};
    function qe(e, o, i, d, y, C) {
      {
        var m = re(e);
        if (!m) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = _r();
          O ? b += O : b += De();
          var j;
          e === null ? j = "null" : we(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (I(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var S = Er(e, o, i, y, C);
        if (S == null)
          return S;
        if (m) {
          var $ = o.children;
          if ($ !== void 0)
            if (d)
              if (we($)) {
                for (var Z = 0; Z < $.length; Z++)
                  Ye($[Z], e);
                Object.freeze && Object.freeze($);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye($, e);
        }
        if (ae.call(o, "key")) {
          var q = I(e), N = Object.keys(o).filter(function(Ir) {
            return Ir !== "key";
          }), _e = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[q + _e]) {
            var zr = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, q, zr, q), Ue[q + _e] = !0;
          }
        }
        return e === a ? Tr(S) : Sr(S), S;
      }
    }
    function Pr(e, o, i) {
      return qe(e, o, i, !0);
    }
    function Or(e, o, i) {
      return qe(e, o, i, !1);
    }
    var Ar = Or, Nr = Pr;
    le.Fragment = a, le.jsx = Ar, le.jsxs = Nr;
  }()), le;
}
process.env.NODE_ENV === "production" ? Te.exports = $r() : Te.exports = Wr();
var p = Te.exports;
const Lr = "rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30", Gr = (r) => {
  switch (r) {
    case "large":
      return "rv-w-fit rv-px-10 rv-py-4";
    case "medium":
      return "rv-w-fit rv-px-5 rv-py-3";
    case "small":
      return "rv-w-fit rv-px-5 rv-py-2";
    default:
      return "rv-w-fit rv-px-10 rv-py-4";
  }
}, Dr = (r) => {
  switch (r) {
    case "primary":
      return "rv-text-white rv-bg-primary hover:rv-text-white";
    case "secondary":
      return "rv-px-10 rv-text-tsecondary rv-bg-secondary hover:rv-text-tprimary";
    case "outline":
      return "rv-px-10 rv-text-white rv-border rv-border-2 rv-bg-outline hover:rv-text-white";
    case "danger":
      return "rv-px-10 rv-text-white rv-bg-danger hover:rv-bg-danger/70 rv-text-white";
    case "disabled":
      return "rv-px-10 rv-text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.7)] rv-bg-grey-500 rv-cursor-not-allowed";
    default:
      return "rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ";
  }
}, Vr = (r) => {
  switch (r) {
    case "primary":
      return "rv-bg-green-500";
    case "secondary":
      return "rv-bg-green-800";
    case "outline":
      return "rv-bg-green-200";
    case "danger":
      return "rv-bg-red-600";
    case "disabled":
      return "rv-bg-grey-400";
    default:
      return "rv-bg-green-500";
  }
}, Br = () => /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.3em", height: "1.3em", viewBox: "0 0 24 24", children: /* @__PURE__ */ p.jsxs("g", { stroke: "currentColor", children: [
  /* @__PURE__ */ p.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", strokeWidth: 3, children: [
    /* @__PURE__ */ p.jsx(
      "animate",
      {
        attributeName: "stroke-dasharray",
        calcMode: "spline",
        dur: "1.5s",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        keyTimes: "0;0.475;0.95;1",
        repeatCount: "indefinite",
        values: "0 150;42 150;42 150;42 150"
      }
    ),
    /* @__PURE__ */ p.jsx(
      "animate",
      {
        attributeName: "stroke-dashoffset",
        calcMode: "spline",
        dur: "1.5s",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        keyTimes: "0;0.475;0.95;1",
        repeatCount: "indefinite",
        values: "0;-16;-59;-59"
      }
    )
  ] }),
  /* @__PURE__ */ p.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), $t = ({
  variant: r = "primary",
  size: t = "large",
  isLoading: n = !1,
  href: a = null,
  children: c,
  className: s,
  ...u
}) => {
  const l = Je(() => {
    const h = Dr(r), g = Gr(t);
    return [h, g, s].join(" ");
  }, [r, t, s]), f = Je(() => {
    const h = "rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-rounded-full group-hover:rv-w-56 group-hover:rv-h-56", g = Vr(r);
    return [h, g].join(" ");
  }, [r]);
  return /* @__PURE__ */ p.jsxs(
    "a",
    {
      role: "button",
      className: `${Lr} ${l}`,
      ...a && { href: a },
      ...u,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: `${f}` }),
        /* @__PURE__ */ p.jsx("span", { className: "rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-black rv-via-black rv-to-gray-900" }),
        n && /* @__PURE__ */ p.jsx("span", { className: "rv-me-2 rv-relative rv-z-10", children: /* @__PURE__ */ p.jsx(Br, {}) }),
        /* @__PURE__ */ p.jsx("span", { className: "rv-relative", children: c })
      ]
    }
  );
}, Yr = ({ isFeatured: r, text: t }) => {
  const n = t || "featured";
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: r && /* @__PURE__ */ p.jsx("div", { className: "rv-absolute rv-top-[10px] rv-z-10 rv-right-[15px] rv-bg-primary rv-rounded rv-p-1 rv-uppercase rv-text-xs rv-text-tprimary", children: /* @__PURE__ */ p.jsx("span", { className: "rv-font-bold rv-text-[10px] rv-flex rv-items-center", children: n }) }) });
};
function tr(r) {
  var t, n, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (t = 0; t < c; t++) r[t] && (n = tr(r[t])) && (a && (a += " "), a += n);
  } else for (n in r) r[n] && (a && (a += " "), a += n);
  return a;
}
function Ur() {
  for (var r, t, n = 0, a = "", c = arguments.length; n < c; n++) (r = arguments[n]) && (t = tr(r)) && (a && (a += " "), a += t);
  return a;
}
const Oe = "-", qr = (r) => {
  const t = Kr(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Oe);
      return l[0] === "" && l.length !== 1 && l.shift(), or(l, t) || Jr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const f = n[u] || [];
      return l && a[u] ? [...f, ...a[u]] : f;
    }
  };
}, or = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const n = r[0], a = t.nextPart.get(n), c = a ? or(r.slice(1), a) : void 0;
  if (c)
    return c;
  if (t.validators.length === 0)
    return;
  const s = r.join(Oe);
  return (u = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : u.classGroupId;
}, Xe = /^\[(.+)\]$/, Jr = (r) => {
  if (Xe.test(r)) {
    const t = Xe.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Kr = (r) => {
  const {
    theme: t,
    prefix: n
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Xr(Object.entries(r.classGroups), n).forEach(([s, u]) => {
    Pe(u, a, s, t);
  }), a;
}, Pe = (r, t, n, a) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const s = c === "" ? t : Ze(t, c);
      s.classGroupId = n;
      return;
    }
    if (typeof c == "function") {
      if (Hr(c)) {
        Pe(c(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: n
      });
      return;
    }
    Object.entries(c).forEach(([s, u]) => {
      Pe(u, Ze(t, s), n, a);
    });
  });
}, Ze = (r, t) => {
  let n = r;
  return t.split(Oe).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Hr = (r) => r.isThemeGetter, Xr = (r, t) => t ? r.map(([n, a]) => {
  const c = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([u, l]) => [t + u, l])) : s);
  return [n, c];
}) : r, Zr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (s, u) => {
    n.set(s, u), t++, t > r && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let u = n.get(s);
      if (u !== void 0)
        return u;
      if ((u = a.get(s)) !== void 0)
        return c(s, u), u;
    },
    set(s, u) {
      n.has(s) ? n.set(s, u) : c(s, u);
    }
  };
}, nr = "!", Qr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = r, a = t.length === 1, c = t[0], s = t.length, u = (l) => {
    const f = [];
    let h = 0, g = 0, R;
    for (let E = 0; E < l.length; E++) {
      let _ = l[E];
      if (h === 0) {
        if (_ === c && (a || l.slice(E, E + s) === t)) {
          f.push(l.slice(g, E)), g = E + s;
          continue;
        }
        if (_ === "/") {
          R = E;
          continue;
        }
      }
      _ === "[" ? h++ : _ === "]" && h--;
    }
    const T = f.length === 0 ? l : l.substring(g), A = T.startsWith(nr), z = A ? T.substring(1) : T, P = R && R > g ? R - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: A,
      baseClassName: z,
      maybePostfixModifierPosition: P
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: u
  }) : u;
}, et = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let n = [];
  return r.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, rt = (r) => ({
  cache: Zr(r.cacheSize),
  parseClassName: Qr(r),
  ...qr(r)
}), tt = /\s+/, ot = (r, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: c
  } = t, s = [], u = r.trim().split(tt);
  let l = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const h = u[f], {
      modifiers: g,
      hasImportantModifier: R,
      baseClassName: T,
      maybePostfixModifierPosition: A
    } = n(h);
    let z = !!A, P = a(z ? T.substring(0, A) : T);
    if (!P) {
      if (!z) {
        l = h + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (P = a(T), !P) {
        l = h + (l.length > 0 ? " " + l : l);
        continue;
      }
      z = !1;
    }
    const E = et(g).join(":"), _ = R ? E + nr : E, x = _ + P;
    if (s.includes(x))
      continue;
    s.push(x);
    const Y = c(P, z);
    for (let W = 0; W < Y.length; ++W) {
      const J = Y[W];
      s.push(_ + J);
    }
    l = h + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function nt() {
  let r = 0, t, n, a = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (n = ar(t)) && (a && (a += " "), a += n);
  return a;
}
const ar = (r) => {
  if (typeof r == "string")
    return r;
  let t, n = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (t = ar(r[a])) && (n && (n += " "), n += t);
  return n;
};
function at(r, ...t) {
  let n, a, c, s = u;
  function u(f) {
    const h = t.reduce((g, R) => R(g), r());
    return n = rt(h), a = n.cache.get, c = n.cache.set, s = l, l(f);
  }
  function l(f) {
    const h = a(f);
    if (h)
      return h;
    const g = ot(f, n);
    return c(f, g), g;
  }
  return function() {
    return s(nt.apply(null, arguments));
  };
}
const k = (r) => {
  const t = (n) => n[r] || [];
  return t.isThemeGetter = !0, t;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, st = /^\d+\/\d+$/, it = /* @__PURE__ */ new Set(["px", "full", "screen"]), lt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ct = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ut = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ft = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (r) => Q(r) || it.has(r) || st.test(r), V = (r) => ee(r, "length", xt), Q = (r) => !!r && !Number.isNaN(Number(r)), je = (r) => ee(r, "number", Q), ce = (r) => !!r && Number.isInteger(Number(r)), pt = (r) => r.endsWith("%") && Q(r.slice(0, -1)), v = (r) => sr.test(r), B = (r) => lt.test(r), vt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gt = (r) => ee(r, vt, ir), bt = (r) => ee(r, "position", ir), mt = /* @__PURE__ */ new Set(["image", "url"]), ht = (r) => ee(r, mt, Ct), yt = (r) => ee(r, "", wt), ue = () => !0, ee = (r, t, n) => {
  const a = sr.exec(r);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, xt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ct.test(r) && !ut.test(r)
), ir = () => !1, wt = (r) => dt.test(r), Ct = (r) => ft.test(r), kt = () => {
  const r = k("colors"), t = k("spacing"), n = k("blur"), a = k("brightness"), c = k("borderColor"), s = k("borderRadius"), u = k("borderSpacing"), l = k("borderWidth"), f = k("contrast"), h = k("grayscale"), g = k("hueRotate"), R = k("invert"), T = k("gap"), A = k("gradientColorStops"), z = k("gradientColorStopPositions"), P = k("inset"), E = k("margin"), _ = k("opacity"), x = k("padding"), Y = k("saturate"), W = k("scale"), J = k("sepia"), de = k("skew"), fe = k("space"), pe = k("translate"), K = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", v, t], w = () => [v, t], I = () => ["", L, V], M = () => ["auto", Q, v], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], D = () => ["", "0", v], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Q, v];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ue],
      spacing: [L, V],
      blur: ["none", "", B, v],
      brightness: F(),
      borderColor: [r],
      borderRadius: ["none", "", "full", B, v],
      borderSpacing: w(),
      borderWidth: I(),
      contrast: F(),
      grayscale: D(),
      hueRotate: F(),
      invert: D(),
      gap: w(),
      gradientColorStops: [r],
      gradientColorStopPositions: [pt, V],
      inset: te(),
      margin: te(),
      opacity: F(),
      padding: w(),
      saturate: F(),
      scale: F(),
      sepia: D(),
      skew: F(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [B]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...G(), v]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [P]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [P]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [P]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [P]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [P]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [P]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [P]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [P]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [P]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ce, v]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", v]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ce, v]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ce, v]
        }, v]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ce, v]
        }, v]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", v]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [T]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [T]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [T]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...H(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [fe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [fe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", v, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [v, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [v, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [B]
        }, B]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [v, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [v, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [v, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [v, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", B, V]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", je]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", v]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, v]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", v]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [_]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [_]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", L, V]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", L, v]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", v]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [_]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...G(), bt]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", gt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ht]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [z]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [z]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [z]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [A]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, v]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [L, V]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [L, V]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", B, yt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", B, v]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [R]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [J]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [R]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [J]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", v]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", v]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", v]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ce, v]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [de]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [de]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", v]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", v]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, V, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Rt = /* @__PURE__ */ at(kt), Qe = (...r) => Rt(Ur(r));
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lr = (...r) => r.filter((t, n, a) => !!t && a.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = rr(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: a,
    className: c = "",
    children: s,
    iconNode: u,
    ...l
  }, f) => Se(
    "svg",
    {
      ref: f,
      ..._t,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: a ? Number(n) * 24 / Number(t) : n,
      className: lr("lucide", c),
      ...l
    },
    [
      ...u.map(([h, g]) => Se(h, g)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (r, t) => {
  const n = rr(
    ({ className: a, ...c }, s) => Se(jt, {
      ref: s,
      iconNode: t,
      className: lr(`lucide-${Et(r)}`, a),
      ...c
    })
  );
  return n.displayName = `${r}`, n;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = St("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), Pt = ({
  img: r,
  alt: t,
  className: n,
  isSelected: a,
  toggleSelected: c,
  ...s
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    "img",
    {
      role: "img",
      className: Qe("rv-h-64 rv-w-full rv-object-cover rv-object-bottom rv-rounded-lg rv-shadow-lg rv-relative", n),
      src: r,
      alt: t,
      ...s
    }
  ),
  /* @__PURE__ */ p.jsx(
    "div",
    {
      onClick: c,
      role: "switch",
      "aria-selected": a,
      className: Qe(
        "rv-absolute rv-left-2 rv-top-1 rv-z-10 rv-w-[30px] rv-h-[30px] rv-cursor-pointer",
        a ? "rv-text-white rv-opacity-100" : "rv-opacity-35"
      ),
      children: /* @__PURE__ */ p.jsx(
        Tt,
        {
          stroke: "#fff",
          fill: a ? "#1aa73f" : "#333333",
          size: 30
        }
      )
    }
  )
] }), Ot = ({ children: r }) => /* @__PURE__ */ p.jsx("div", { className: "rv-relative rv-px-4 rv--mt-16", children: /* @__PURE__ */ p.jsx("div", { className: "rv-p-6 rv-bg-white rv-rounded rv-shadow-xl", children: r }) }), At = ({
  tagLabel: r,
  tagDescription: t
}) => /* @__PURE__ */ p.jsxs("div", { className: "rv-flex rv-items-baseline", children: [
  /* @__PURE__ */ p.jsx("span", { className: "rv-inline-block rv-bg-secondary rv-text-white rv-text-xs rv-px-2 rv-rounded-full rv-uppercase", children: r }),
  /* @__PURE__ */ p.jsx("div", { className: "rv-ml-2 rv-text-gray-600 rv-text-xs rv-uppercase rv-font-semibold rv-tracking-wider", children: t })
] }), Nt = ({ title: r }) => /* @__PURE__ */ p.jsx("h4", { className: "rv-mt-1 rv-font-semibold rv-text-lg rv-leading-tight rv-truncate rv-text-tprimary", children: r }), zt = ({ description: r }) => {
  const t = r || "No description detected";
  return /* @__PURE__ */ p.jsx("div", { className: "rv-mt-1", children: /* @__PURE__ */ p.jsx("span", { className: "rv-text-gray-600 rv-text-sm rv-line-clamp-2", children: t }) });
}, It = ({ children: r }) => /* @__PURE__ */ p.jsx("div", { className: "rv-relative", children: r }), Wt = ({
  isFeatured: r = !1,
  isSelected: t = !1,
  title: n,
  img: a = "https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!",
  description: c,
  tagLabel: s,
  tagDescription: u,
  onCardSelect: l,
  onCardClick: f
}) => {
  const [h, g] = Mr(t), R = () => {
    g(!h), l && l();
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      onClick: f,
      "data-card-selected": h,
      className: "rv-max-w-[400px] rv-w-full rv-relative rv-overflow-hidden rv-rounded hover:rv-transform hover:rv-scale-95 rv-transition-transform rv-duration-300 rv-ease-in-out",
      children: [
        /* @__PURE__ */ p.jsx(
          Yr,
          {
            isFeatured: r
          }
        ),
        /* @__PURE__ */ p.jsxs(It, { children: [
          /* @__PURE__ */ p.jsx(
            Pt,
            {
              isSelected: h,
              toggleSelected: R,
              img: a,
              alt: n
            }
          ),
          /* @__PURE__ */ p.jsxs(Ot, { children: [
            s && u && /* @__PURE__ */ p.jsx(
              At,
              {
                tagLabel: s,
                tagDescription: u
              }
            ),
            /* @__PURE__ */ p.jsx(
              Nt,
              {
                title: n || "No title Detected"
              }
            ),
            /* @__PURE__ */ p.jsx(
              zt,
              {
                description: c
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Lt = ({
  checked: r,
  onChange: t,
  label: n,
  disabled: a = !1,
  ...c
}) => /* @__PURE__ */ p.jsxs(
  "label",
  {
    className: "rv-group rv-relative rv-flex rv-items-center rv-p-2 rv-text-base",
    children: [
      /* @__PURE__ */ p.jsx(
        "input",
        {
          checked: r,
          type: "checkbox",
          className: "rv-peer rv-absolute rv-left-1/2 rv-h-full rv-w-full -rv-translate-x-1/2 rv-appearance-none rv-rounded-md rv-cursor-pointer disabled:rv-opacity-50",
          disabled: a,
          role: "switch",
          "aria-checked": r,
          onChange: a ? void 0 : t,
          ...c
        }
      ),
      /* @__PURE__ */ p.jsx(
        "span",
        {
          className: "rv-relative rv-cursor-pointer rv-ml-2 rv-flex rv-h-6 rv-w-12 rv-flex-shrink-0 rv-items-center rv-rounded-full rv-bg-gray-300 rv-p-1 rv-duration-300 rv-ease-in-out after:rv-h-4 after:rv-w-4 after:rv-rounded-full after:rv-bg-white after:rv-shadow-md after:rv-duration-300 group-hover:rv-after:translate-x-1 peer-checked:rv-bg-gradient-to-r rv-from-emerald-500 rv-to-emerald-900 peer-checked:after:rv-translate-x-6 peer-disabled:rv-cursor-not-allowed"
        }
      ),
      n && /* @__PURE__ */ p.jsx("span", { className: "rv-ml-2 rv-text-white", children: n })
    ]
  }
), Mt = (r) => `${r.toString()}px`, Gt = ({
  el: r,
  onIntersect: t,
  rootMargin: n,
  unobserveOnIntersect: a
}) => {
  Fr(() => {
    const c = r.current;
    if (!c)
      return;
    if (typeof IntersectionObserver > "u") {
      t();
      return;
    }
    const s = (l) => {
      l.forEach((f) => {
        f.isIntersecting && (t(), a && u.unobserve(c));
      });
    };
    let u = new IntersectionObserver(s, {
      rootMargin: Mt(n),
      threshold: 0
    });
    return u.observe(c), () => {
      u.disconnect(), u = null;
    };
  }, [r]);
};
export {
  $t as Button,
  Wt as Card,
  Lt as Switch,
  Gt as useIntersectionObserver
};
