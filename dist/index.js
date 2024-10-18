import nr, { useMemo as Pe, forwardRef as sr, createElement as Oe, useState as ee, useEffect as ye } from "react";
import './index.css';var Ae = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Wr() {
  if (Ze) return ce;
  Ze = 1;
  var r = nr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, p) {
    var g, R = {}, S = null, _ = null;
    p !== void 0 && (S = "" + p), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (_ = f.ref);
    for (g in f) n.call(f, g) && !i.hasOwnProperty(g) && (R[g] = f[g]);
    if (c && c.defaultProps) for (g in f = c.defaultProps, f) R[g] === void 0 && (R[g] = f[g]);
    return { $$typeof: t, type: c, key: S, ref: _, props: R, _owner: l.current };
  }
  return ce.Fragment = o, ce.jsx = u, ce.jsxs = u, ce;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Dr() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = nr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), O = Symbol.iterator, T = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = O && e[O] || e[T];
      return typeof s == "function" ? s : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          d[v - 1] = arguments[v];
        Y("error", e, d);
      }
    }
    function Y(e, s, d) {
      {
        var v = k.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (s += "%s", d = d.concat([x]));
        var j = d.map(function(m) {
          return String(m);
        });
        j.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var F = !1, J = !1, ve = !1, pe = !1, ge = !1, K;
    K = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === i || ge || e === l || e === p || e === g || pe || e === _ || F || J || ve || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function ne(e, s, d) {
      var v = e.displayName;
      if (v)
        return v;
      var x = s.displayName || s.name || "";
      return x !== "" ? d + "(" + x + ")" : d;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case i:
          return "Profiler";
        case l:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var s = e;
            return w(s) + ".Consumer";
          case u:
            var d = e;
            return w(d._context) + ".Provider";
          case f:
            return ne(e, e.render, "ForwardRef");
          case R:
            var v = e.displayName || null;
            return v !== null ? v : I(e.type) || "Memo";
          case S: {
            var x = e, j = x._payload, m = x._init;
            try {
              return I(m(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, D = 0, U, se, X, G, ae, $, Me;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function vr() {
      {
        if (D === 0) {
          U = console.log, se = console.info, X = console.warn, G = console.error, ae = console.group, $ = console.groupCollapsed, Me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $e,
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
        D++;
      }
    }
    function pr() {
      {
        if (D--, D === 0) {
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
              value: se
            }),
            warn: M({}, e, {
              value: X
            }),
            error: M({}, e, {
              value: G
            }),
            group: M({}, e, {
              value: ae
            }),
            groupCollapsed: M({}, e, {
              value: $
            }),
            groupEnd: M({}, e, {
              value: Me
            })
          });
        }
        D < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = k.ReactCurrentDispatcher, je;
    function be(e, s, d) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            je = v && v[1] || "";
          }
        return `
` + je + e;
      }
    }
    var Ce = !1, he;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new gr();
    }
    function Le(e, s) {
      if (!e || Ce)
        return "";
      {
        var d = he.get(e);
        if (d !== void 0)
          return d;
      }
      var v;
      Ce = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = we.current, we.current = null, vr();
      try {
        if (s) {
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
            } catch (z) {
              v = z;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (z) {
              v = z;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            v = z;
          }
          e();
        }
      } catch (z) {
        if (z && v && typeof z.stack == "string") {
          for (var h = z.stack.split(`
`), A = v.stack.split(`
`), N = h.length - 1, P = A.length - 1; N >= 1 && P >= 0 && h[N] !== A[P]; )
            P--;
          for (; N >= 1 && P >= 0; N--, P--)
            if (h[N] !== A[P]) {
              if (N !== 1 || P !== 1)
                do
                  if (N--, P--, P < 0 || h[N] !== A[P]) {
                    var L = `
` + h[N].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, L), L;
                  }
                while (N >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, we.current = j, pr(), Error.prepareStackTrace = x;
      }
      var Q = e ? e.displayName || e.name : "", H = Q ? be(Q) : "";
      return typeof e == "function" && he.set(e, H), H;
    }
    function br(e, s, d) {
      return Le(e, !1);
    }
    function hr(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function me(e, s, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, hr(e));
      if (typeof e == "string")
        return be(e);
      switch (e) {
        case p:
          return be("Suspense");
        case g:
          return be("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return br(e.render);
          case R:
            return me(e.type, s, d);
          case S: {
            var v = e, x = v._payload, j = v._init;
            try {
              return me(j(x), s, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Fe = {}, We = k.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var s = e._owner, d = me(e.type, e._source, s ? s.type : null);
        We.setExtraStackFrame(d);
      } else
        We.setExtraStackFrame(null);
    }
    function mr(e, s, d, v, x) {
      {
        var j = Function.call.bind(ie);
        for (var m in e)
          if (j(e, m)) {
            var h = void 0;
            try {
              if (typeof e[m] != "function") {
                var A = Error((v || "React class") + ": " + d + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              h = e[m](s, m, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              h = N;
            }
            h && !(h instanceof Error) && (xe(x), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, m, typeof h), xe(null)), h instanceof Error && !(h.message in Fe) && (Fe[h.message] = !0, xe(x), y("Failed %s type: %s", d, h.message), xe(null));
          }
      }
    }
    var xr = Array.isArray;
    function ke(e) {
      return xr(e);
    }
    function yr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, d = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function wr(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Ge(e) {
      if (wr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), De(e);
    }
    var le = k.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Ve, Ee;
    Ee = {};
    function Cr(e) {
      if (ie.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function kr(e) {
      if (ie.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, s) {
      if (typeof e.ref == "string" && le.current && s && le.current.stateNode !== s) {
        var d = I(le.current.type);
        Ee[d] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(le.current.type), e.ref), Ee[d] = !0);
      }
    }
    function Rr(e, s) {
      {
        var d = function() {
          Be || (Be = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function _r(e, s) {
      {
        var d = function() {
          Ve || (Ve = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Sr = function(e, s, d, v, x, j, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: d,
        props: m,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Tr(e, s, d, v, x) {
      {
        var j, m = {}, h = null, A = null;
        d !== void 0 && (Ge(d), h = "" + d), kr(s) && (Ge(s.key), h = "" + s.key), Cr(s) && (A = s.ref, Er(s, x));
        for (j in s)
          ie.call(s, j) && !jr.hasOwnProperty(j) && (m[j] = s[j]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (j in N)
            m[j] === void 0 && (m[j] = N[j]);
        }
        if (h || A) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Rr(m, P), A && _r(m, P);
        }
        return Sr(e, h, A, x, v, le.current, m);
      }
    }
    var Re = k.ReactCurrentOwner, Ye = k.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var s = e._owner, d = me(e.type, e._source, s ? s.type : null);
        Ye.setExtraStackFrame(d);
      } else
        Ye.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ue() {
      {
        if (Re.current) {
          var e = I(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Nr(e) {
      return "";
    }
    var He = {};
    function Pr(e) {
      {
        var s = Ue();
        if (!s) {
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (s = `

Check the top-level render call using <` + d + ">.");
        }
        return s;
      }
    }
    function qe(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Pr(s);
        if (He[d])
          return;
        He[d] = !0;
        var v = "";
        e && e._owner && e._owner !== Re.current && (v = " It was passed a child from " + I(e._owner.type) + "."), Z(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), Z(null);
      }
    }
    function Je(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ke(e))
          for (var d = 0; d < e.length; d++) {
            var v = e[d];
            Se(v) && qe(v, s);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = C(e);
          if (typeof x == "function" && x !== e.entries)
            for (var j = x.call(e), m; !(m = j.next()).done; )
              Se(m.value) && qe(m.value, s);
        }
      }
    }
    function Or(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var d;
        if (typeof s == "function")
          d = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === R))
          d = s.propTypes;
        else
          return;
        if (d) {
          var v = I(s);
          mr(d, e.props, "prop", v, e);
        } else if (s.PropTypes !== void 0 && !_e) {
          _e = !0;
          var x = I(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(e) {
      {
        for (var s = Object.keys(e.props), d = 0; d < s.length; d++) {
          var v = s[d];
          if (v !== "children" && v !== "key") {
            Z(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var Ke = {};
    function Xe(e, s, d, v, x, j) {
      {
        var m = oe(e);
        if (!m) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Nr();
          A ? h += A : h += Ue();
          var N;
          e === null ? N = "null" : ke(e) ? N = "array" : e !== void 0 && e.$$typeof === t ? (N = "<" + (I(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, h);
        }
        var P = Tr(e, s, d, x, j);
        if (P == null)
          return P;
        if (m) {
          var L = s.children;
          if (L !== void 0)
            if (v)
              if (ke(L)) {
                for (var Q = 0; Q < L.length; Q++)
                  Je(L[Q], e);
                Object.freeze && Object.freeze(L);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(L, e);
        }
        if (ie.call(s, "key")) {
          var H = I(e), z = Object.keys(s).filter(function(Fr) {
            return Fr !== "key";
          }), Te = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[H + Te]) {
            var Lr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, H, Lr, H), Ke[H + Te] = !0;
          }
        }
        return e === n ? Ar(P) : Or(P), P;
      }
    }
    function zr(e, s, d) {
      return Xe(e, s, d, !0);
    }
    function Ir(e, s, d) {
      return Xe(e, s, d, !1);
    }
    var Mr = Ir, $r = zr;
    de.Fragment = n, de.jsx = Mr, de.jsxs = $r;
  }()), de;
}
process.env.NODE_ENV === "production" ? Ae.exports = Wr() : Ae.exports = Dr();
var a = Ae.exports;
const Gr = "rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30", Br = (r) => {
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
}, Vr = (r) => {
  switch (r) {
    case "primary":
      return "rv-text-white rv-bg-primary hover:rv-text-white";
    case "secondary":
      return "rv-px-10 rv-text-tsecondary rv-bg-secondary hover:rv-text-white";
    case "outline":
      return "rv-px-10 rv-text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.7)] rv-border rv-border-2 rv-bg-outline hover:rv-text-white";
    case "danger":
      return "rv-px-10 rv-text-white rv-bg-danger hover:rv-bg-danger/70 rv-text-white";
    case "disabled":
      return "rv-px-10 rv-text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.7)] rv-bg-grey-500 rv-cursor-not-allowed";
    default:
      return "rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ";
  }
}, Yr = (r) => {
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
}, Ur = () => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.3em", height: "1.3em", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsxs("g", { stroke: "currentColor", children: [
  /* @__PURE__ */ a.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", strokeWidth: 3, children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
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
  /* @__PURE__ */ a.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), Ut = ({
  variant: r = "primary",
  size: t = "large",
  isLoading: o = !1,
  href: n = null,
  children: l,
  className: i,
  ...u
}) => {
  const c = Pe(() => {
    const p = Vr(r), g = Br(t);
    return [p, g, i].join(" ");
  }, [r, t, i]), f = Pe(() => {
    const p = "rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-rounded-full group-hover:rv-w-full group-hover:rv-h-56", g = Yr(r);
    return [p, g].join(" ");
  }, [r]);
  return /* @__PURE__ */ a.jsxs(
    "a",
    {
      role: "button",
      className: `${Gr} ${c}`,
      ...n && { href: n },
      ...u,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: `${f}` }),
        /* @__PURE__ */ a.jsx("span", { className: "rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-black rv-via-black rv-to-gray-900" }),
        o && /* @__PURE__ */ a.jsx("span", { className: "rv-me-2 rv-relative rv-z-10", children: /* @__PURE__ */ a.jsx(Ur, {}) }),
        /* @__PURE__ */ a.jsx("span", { className: "rv-relative", children: l })
      ]
    }
  );
}, Hr = ({ isFeatured: r, text: t }) => {
  const o = t || "featured";
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: r && /* @__PURE__ */ a.jsx("div", { className: "rv-absolute rv-top-[10px] rv-z-10 rv-right-[15px] rv-bg-primary rv-rounded rv-p-1 rv-uppercase rv-text-xs rv-text-tprimary", children: /* @__PURE__ */ a.jsx("span", { className: "rv-font-bold rv-text-[10px] rv-flex rv-items-center", children: o }) }) });
};
function ar(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (t = 0; t < l; t++) r[t] && (o = ar(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
function qr() {
  for (var r, t, o = 0, n = "", l = arguments.length; o < l; o++) (r = arguments[o]) && (t = ar(r)) && (n && (n += " "), n += t);
  return n;
}
const Ie = "-", Jr = (r) => {
  const t = Xr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (u) => {
      const c = u.split(Ie);
      return c[0] === "" && c.length !== 1 && c.shift(), ir(c, t) || Kr(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const f = o[u] || [];
      return c && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, ir = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], n = t.nextPart.get(o), l = n ? ir(r.slice(1), n) : void 0;
  if (l)
    return l;
  if (t.validators.length === 0)
    return;
  const i = r.join(Ie);
  return (u = t.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : u.classGroupId;
}, er = /^\[(.+)\]$/, Kr = (r) => {
  if (er.test(r)) {
    const t = er.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Xr = (r) => {
  const {
    theme: t,
    prefix: o
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Qr(Object.entries(r.classGroups), o).forEach(([i, u]) => {
    ze(u, n, i, t);
  }), n;
}, ze = (r, t, o, n) => {
  r.forEach((l) => {
    if (typeof l == "string") {
      const i = l === "" ? t : rr(t, l);
      i.classGroupId = o;
      return;
    }
    if (typeof l == "function") {
      if (Zr(l)) {
        ze(l(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: l,
        classGroupId: o
      });
      return;
    }
    Object.entries(l).forEach(([i, u]) => {
      ze(u, rr(t, i), o, n);
    });
  });
}, rr = (r, t) => {
  let o = r;
  return t.split(Ie).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, Zr = (r) => r.isThemeGetter, Qr = (r, t) => t ? r.map(([o, n]) => {
  const l = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, c]) => [t + u, c])) : i);
  return [o, l];
}) : r, et = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const l = (i, u) => {
    o.set(i, u), t++, t > r && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = o.get(i);
      if (u !== void 0)
        return u;
      if ((u = n.get(i)) !== void 0)
        return l(i, u), u;
    },
    set(i, u) {
      o.has(i) ? o.set(i, u) : l(i, u);
    }
  };
}, lr = "!", rt = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, n = t.length === 1, l = t[0], i = t.length, u = (c) => {
    const f = [];
    let p = 0, g = 0, R;
    for (let C = 0; C < c.length; C++) {
      let k = c[C];
      if (p === 0) {
        if (k === l && (n || c.slice(C, C + i) === t)) {
          f.push(c.slice(g, C)), g = C + i;
          continue;
        }
        if (k === "/") {
          R = C;
          continue;
        }
      }
      k === "[" ? p++ : k === "]" && p--;
    }
    const S = f.length === 0 ? c : c.substring(g), _ = S.startsWith(lr), O = _ ? S.substring(1) : S, T = R && R > g ? R - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: _,
      baseClassName: O,
      maybePostfixModifierPosition: T
    };
  };
  return o ? (c) => o({
    className: c,
    parseClassName: u
  }) : u;
}, tt = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let o = [];
  return r.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, ot = (r) => ({
  cache: et(r.cacheSize),
  parseClassName: rt(r),
  ...Jr(r)
}), nt = /\s+/, st = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: l
  } = t, i = [], u = r.trim().split(nt);
  let c = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const p = u[f], {
      modifiers: g,
      hasImportantModifier: R,
      baseClassName: S,
      maybePostfixModifierPosition: _
    } = o(p);
    let O = !!_, T = n(O ? S.substring(0, _) : S);
    if (!T) {
      if (!O) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (T = n(S), !T) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      O = !1;
    }
    const C = tt(g).join(":"), k = R ? C + lr : C, y = k + T;
    if (i.includes(y))
      continue;
    i.push(y);
    const Y = l(T, O);
    for (let F = 0; F < Y.length; ++F) {
      const J = Y[F];
      i.push(k + J);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function at() {
  let r = 0, t, o, n = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (o = cr(t)) && (n && (n += " "), n += o);
  return n;
}
const cr = (r) => {
  if (typeof r == "string")
    return r;
  let t, o = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (t = cr(r[n])) && (o && (o += " "), o += t);
  return o;
};
function it(r, ...t) {
  let o, n, l, i = u;
  function u(f) {
    const p = t.reduce((g, R) => R(g), r());
    return o = ot(p), n = o.cache.get, l = o.cache.set, i = c, c(f);
  }
  function c(f) {
    const p = n(f);
    if (p)
      return p;
    const g = st(f, o);
    return l(f, g), g;
  }
  return function() {
    return i(at.apply(null, arguments));
  };
}
const E = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, dr = /^\[(?:([a-z-]+):)?(.+)\]$/i, lt = /^\d+\/\d+$/, ct = /* @__PURE__ */ new Set(["px", "full", "screen"]), dt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ut = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ft = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, vt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (r) => re(r) || ct.has(r) || lt.test(r), B = (r) => te(r, "length", jt), re = (r) => !!r && !Number.isNaN(Number(r)), Ne = (r) => te(r, "number", re), ue = (r) => !!r && Number.isInteger(Number(r)), gt = (r) => r.endsWith("%") && re(r.slice(0, -1)), b = (r) => dr.test(r), V = (r) => dt.test(r), bt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ht = (r) => te(r, bt, ur), mt = (r) => te(r, "position", ur), xt = /* @__PURE__ */ new Set(["image", "url"]), yt = (r) => te(r, xt, kt), wt = (r) => te(r, "", Ct), fe = () => !0, te = (r, t, o) => {
  const n = dr.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, jt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ut.test(r) && !ft.test(r)
), ur = () => !1, Ct = (r) => vt.test(r), kt = (r) => pt.test(r), Et = () => {
  const r = E("colors"), t = E("spacing"), o = E("blur"), n = E("brightness"), l = E("borderColor"), i = E("borderRadius"), u = E("borderSpacing"), c = E("borderWidth"), f = E("contrast"), p = E("grayscale"), g = E("hueRotate"), R = E("invert"), S = E("gap"), _ = E("gradientColorStops"), O = E("gradientColorStopPositions"), T = E("inset"), C = E("margin"), k = E("opacity"), y = E("padding"), Y = E("saturate"), F = E("scale"), J = E("sepia"), ve = E("skew"), pe = E("space"), ge = E("translate"), K = () => ["auto", "contain", "none"], oe = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", b, t], w = () => [b, t], I = () => ["", W, B], M = () => ["auto", re, b], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", b], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [re, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fe],
      spacing: [W, B],
      blur: ["none", "", V, b],
      brightness: $(),
      borderColor: [r],
      borderRadius: ["none", "", "full", V, b],
      borderSpacing: w(),
      borderWidth: I(),
      contrast: $(),
      grayscale: G(),
      hueRotate: $(),
      invert: G(),
      gap: w(),
      gradientColorStops: [r],
      gradientColorStopPositions: [gt, B],
      inset: ne(),
      margin: ne(),
      opacity: $(),
      padding: w(),
      saturate: $(),
      scale: $(),
      sepia: G(),
      skew: $(),
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
        aspect: ["auto", "square", "video", b]
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
        columns: [V]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [...D(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: oe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": oe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": oe()
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
        inset: [T]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [T]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [T]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [T]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [T]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [T]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [T]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [T]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [T]
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
        z: ["auto", ue, b]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ue, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ue, b]
        }, b]
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
        "grid-rows": [fe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ue, b]
        }, b]
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
        "auto-cols": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [S]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [S]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [S]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
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
        content: ["normal", ...X(), "baseline"]
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
        "place-content": [...X(), "baseline"]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [pe]
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
        "space-y": [pe]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [b, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [b, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [V]
        }, V]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [b, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [b, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", V, B]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ne]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fe]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", re, Ne]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, b]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", b]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        decoration: ["auto", "from-font", W, B]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, b]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b]
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
        content: ["none", b]
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
        "bg-opacity": [k]
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
        bg: [...D(), mt]
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
        bg: ["auto", "cover", "contain", ht]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yt]
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
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
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
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [k]
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
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
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
        "outline-offset": [W, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, B]
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, B]
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
        shadow: ["", "inner", "none", V, wt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
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
        "drop-shadow": ["", "none", V, b]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
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
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
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
        "backdrop-grayscale": [p]
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
        "backdrop-opacity": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", b]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: $()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: $()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", b]
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
        scale: [F]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [F]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [F]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ue, b]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ge]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ge]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ve]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ve]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", b]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b]
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
        "will-change": ["auto", "scroll", "contents", "transform", b]
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
        stroke: [W, B, Ne]
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
}, Rt = /* @__PURE__ */ it(Et), q = (...r) => Rt(qr(r));
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fr = (...r) => r.filter((t, o, n) => !!t && n.indexOf(t) === o).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var St = {
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
const Tt = sr(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: l = "",
    children: i,
    iconNode: u,
    ...c
  }, f) => Oe(
    "svg",
    {
      ref: f,
      ...St,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: fr("lucide", l),
      ...c
    },
    [
      ...u.map(([p, g]) => Oe(p, g)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = (r, t) => {
  const o = sr(
    ({ className: n, ...l }, i) => Oe(Tt, {
      ref: i,
      iconNode: t,
      className: fr(`lucide-${_t(r)}`, n),
      ...l
    })
  );
  return o.displayName = `${r}`, o;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = Nt("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), Ot = ({
  img: r,
  alt: t,
  className: o,
  isSelected: n,
  toggleSelected: l,
  ...i
}) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
  /* @__PURE__ */ a.jsx(
    "img",
    {
      role: "img",
      className: q("rv-h-64 rv-w-full rv-object-cover rv-object-bottom rv-rounded-lg rv-shadow-lg rv-relative", o),
      src: r,
      alt: t,
      ...i
    }
  ),
  /* @__PURE__ */ a.jsx(
    "div",
    {
      onClick: l,
      role: "switch",
      "aria-selected": n,
      className: q(
        "rv-absolute rv-left-2 rv-top-1 rv-z-10 rv-w-[30px] rv-h-[30px] rv-cursor-pointer",
        n ? "rv-text-white rv-opacity-100" : "rv-opacity-35"
      ),
      children: /* @__PURE__ */ a.jsx(
        Pt,
        {
          stroke: "#fff",
          fill: n ? "#1aa73f" : "#333333",
          size: 30
        }
      )
    }
  )
] }), At = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "rv-relative rv-px-4 rv--mt-16", children: /* @__PURE__ */ a.jsx("div", { className: "rv-p-6 rv-bg-white rv-rounded rv-shadow-xl", children: r }) }), zt = ({
  tagLabel: r,
  tagDescription: t
}) => /* @__PURE__ */ a.jsxs("div", { className: "rv-flex rv-items-baseline", children: [
  /* @__PURE__ */ a.jsx("span", { className: "rv-inline-block rv-bg-secondary rv-text-white rv-text-xs rv-px-2 rv-rounded-full rv-uppercase", children: r }),
  /* @__PURE__ */ a.jsx("div", { className: "rv-ml-2 rv-text-gray-600 rv-text-xs rv-uppercase rv-font-semibold rv-tracking-wider", children: t })
] }), It = ({ title: r }) => /* @__PURE__ */ a.jsx("h4", { className: "rv-mt-1 rv-font-semibold rv-text-lg rv-leading-tight rv-truncate rv-text-tprimary", children: r }), Mt = ({ description: r }) => {
  const t = r || "No description detected";
  return /* @__PURE__ */ a.jsx("div", { className: "rv-mt-1", children: /* @__PURE__ */ a.jsx("span", { className: "rv-text-gray-600 rv-text-sm rv-line-clamp-2", children: t }) });
}, $t = ({ children: r }) => /* @__PURE__ */ a.jsx("div", { className: "rv-relative", children: r }), Ht = ({
  isFeatured: r = !1,
  isSelected: t = !1,
  title: o,
  img: n = "https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!",
  description: l,
  tagLabel: i,
  tagDescription: u,
  onCardSelect: c,
  onCardClick: f
}) => {
  const [p, g] = ee(t), R = () => {
    g(!p), c && c();
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      onClick: f,
      "data-card-selected": p,
      className: "rv-max-w-[400px] rv-w-full rv-relative rv-overflow-hidden rv-rounded hover:rv-transform hover:rv-scale-95 rv-transition-transform rv-duration-300 rv-ease-in-out",
      children: [
        /* @__PURE__ */ a.jsx(
          Hr,
          {
            isFeatured: r
          }
        ),
        /* @__PURE__ */ a.jsxs($t, { children: [
          /* @__PURE__ */ a.jsx(
            Ot,
            {
              isSelected: p,
              toggleSelected: R,
              img: n,
              alt: o
            }
          ),
          /* @__PURE__ */ a.jsxs(At, { children: [
            i && u && /* @__PURE__ */ a.jsx(
              zt,
              {
                tagLabel: i,
                tagDescription: u
              }
            ),
            /* @__PURE__ */ a.jsx(
              It,
              {
                title: o || "No title Detected"
              }
            ),
            /* @__PURE__ */ a.jsx(
              Mt,
              {
                description: l
              }
            )
          ] })
        ] })
      ]
    }
  );
}, qt = ({
  checked: r,
  onChange: t,
  label: o,
  disabled: n = !1,
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "label",
  {
    className: "rv-group rv-relative rv-flex rv-items-center rv-p-2 rv-text-base",
    children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          checked: r,
          type: "checkbox",
          className: "rv-peer rv-absolute rv-left-1/2 rv-h-full rv-w-full -rv-translate-x-1/2 rv-appearance-none rv-rounded-md rv-cursor-pointer disabled:rv-opacity-50",
          disabled: n,
          role: "switch",
          "aria-checked": r,
          onChange: n ? void 0 : t,
          ...l
        }
      ),
      /* @__PURE__ */ a.jsx(
        "span",
        {
          className: "rv-relative rv-cursor-pointer rv-ml-2 rv-flex rv-h-6 rv-w-12 rv-flex-shrink-0 rv-items-center rv-rounded-full rv-bg-gray-300 rv-p-1 rv-duration-300 rv-ease-in-out after:rv-h-4 after:rv-w-4 after:rv-rounded-full after:rv-bg-white after:rv-shadow-md after:rv-duration-300 group-hover:rv-after:translate-x-1 peer-checked:rv-bg-gradient-to-r rv-from-emerald-500 rv-to-emerald-900 peer-checked:after:rv-translate-x-6 peer-disabled:rv-cursor-not-allowed"
        }
      ),
      o && /* @__PURE__ */ a.jsx("span", { className: "rv-ml-2 rv-text-white", children: o })
    ]
  }
), Jt = ({ children: r }) => /* @__PURE__ */ a.jsx(
  "div",
  {
    "aria-busy": "true",
    "aria-live": "polite",
    className: "rv-flex rv-items-start rv-gap-4 rv-flex-col rv-w-full",
    children: r
  }
), tr = (r) => {
  switch (r) {
    case "small":
      return "33%";
    case "medium":
      return "50%";
    case "full":
      return "100%";
    default:
      return "100%";
  }
}, or = ({ size: r = "100%", schema: t = [] }) => {
  const o = !t.length;
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o ? /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: tr(r) },
      className: "rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2"
    }
  ) : /* @__PURE__ */ a.jsx(a.Fragment, { children: t.map((n, l) => /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: tr(n) },
      className: "rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2"
    },
    `skeleton-line-${l}`
  )) }) });
}, Kt = ({
  width: r = 48,
  height: t = 48
}) => /* @__PURE__ */ a.jsxs("div", { className: "rv-flex rv-gap-3 rv-w-full", children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: `${r}px`, height: `${t}px`, minWidth: `${r}px` },
      className: "rv-rounded-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500"
    }
  ),
  /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      className: "rv-flex rv-flex-col rv-gap-3 rv-h-auto rv-w-full rv-justify-center",
      children: [
        /* @__PURE__ */ a.jsx(or, { size: "medium" }),
        /* @__PURE__ */ a.jsx(or, { size: "small" })
      ]
    }
  )
] }), Xt = ({ height: r = 150 }) => /* @__PURE__ */ a.jsx(
  "div",
  {
    role: "status",
    "aria-hidden": "true",
    style: { height: `${r}px` },
    className: "rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-w-full"
  }
), Lt = ({ data: r, dark: t }) => {
  const o = t ? "rv-bg-gray-800 rv-text-white " : "rv-bg-slate-100 rv-text-gray-700 rv-border rv-border-solid", n = Pe(() => Object.keys(r[0]).map((l) => l), [r]);
  return /* @__PURE__ */ a.jsx("thead", { className: q(o, ""), children: /* @__PURE__ */ a.jsx("tr", { className: q(o, ""), children: n.length > 0 && n.map((l, i) => /* @__PURE__ */ a.jsx(
    "th",
    {
      className: q(o, "rv-px-6 rv-align-middle rv-py-3 rv-text-xs rv-uppercase rv-border-l-0 rv-border-r-0 rv-whitespace-nowrap rv-font-semibold rv-text-left"),
      children: l
    },
    `rv-table-heading-${i}`
  )) }) });
}, Ft = ({ text: r }) => /* @__PURE__ */ a.jsx("td", { className: "rv-border-t-0 rv-px-6 rv-align-middle rv-border-l-0 rv-border-r-0 rv-text-sm rv-whitespace-nowrap rv-p-4", children: /* @__PURE__ */ a.jsx("span", { children: r }) }), Wt = (r, t, o) => {
  switch (r) {
    default:
      return /* @__PURE__ */ a.jsx(
        Ft,
        {
          text: String(t)
        },
        `rv-table-td-${o}`
      );
  }
}, Dt = ({ data: r, dark: t }) => {
  const o = t ? "odd:rv-bg-gray-700" : "odd:rv-bg-slate-200";
  return /* @__PURE__ */ a.jsx("tbody", { children: r.map((n, l) => /* @__PURE__ */ a.jsx(
    "tr",
    {
      className: q(o, ""),
      children: Object.entries(n).map(([i, u], c) => Wt(i, u, c))
    },
    `rv-table-tr-${l}`
  )) });
}, Gt = ({ label: r }) => /* @__PURE__ */ a.jsx("caption", { className: "rv-py-3 rv-self-start rv-text-left rv-ml-6 rv-font-bold", children: r }), Bt = ({
  count: r,
  currentPage: t,
  onPageChange: o = () => null,
  itemsPerPage: n
}) => {
  const l = Math.ceil(r / n), i = t === 1, u = t === l, c = () => {
    o(t - 1);
  }, f = () => {
    t <= l && o(t + 1);
  };
  let p;
  const g = [...new Array(l)].map((R, S) => {
    const _ = S + 1, O = _ === 1, T = _ === l, C = Math.abs(_ - t) <= 1;
    if (O || T || C) {
      const k = _ === t;
      return p = !1, /* @__PURE__ */ a.jsx(
        "span",
        {
          "aria-label": `page ${_}`,
          onClick: () => o(_),
          className: `rv-p-1 rv-rounded-full rv-flex rv-justify-center rv-items-center rv-border rv-w-[30px] rv-h-[30px] rv-text-xs rv-text-center rv-cursor-pointer ${k ? "rv-bg-slate-200 rv-text-black" : "rv-bg-transparent"}`,
          children: _
        },
        `react-viper-pagination-${_}`
      );
    }
    return p ? null : (p = !0, /* @__PURE__ */ a.jsx("span", { children: "..." }, `react-viper-ellipsis-pagination-${Math.random()}`));
  });
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      "aria-label": "pagination",
      className: "rv-flex rv-items-center rv-gap-3 rv-w-full rv-justify-center rv-py-4 rv-px-6 md:rv-justify-end",
      children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            "aria-label": "previous page",
            role: "navigation",
            disabled: i,
            onClick: c,
            className: "rv-p-1 rv-bg-light rv-rounded rv-text-white hover:rv-bg-secondary disabled:rv-bg-gray-300",
            children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z" }) })
          }
        ),
        g,
        /* @__PURE__ */ a.jsx(
          "button",
          {
            "aria-label": "next page",
            role: "navigation",
            disabled: u,
            onClick: f,
            className: "rv-p-1 rv-bg-light rv-rounded rv-text-white hover:rv-bg-secondary disabled:rv-bg-gray-300",
            children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" }) })
          }
        )
      ]
    }
  );
}, Zt = ({
  data: r,
  dark: t = !1,
  withCaption: o = !1,
  captionText: n,
  totalItems: l,
  currentPage: i = 1,
  paginated: u = !1,
  onPageChange: c,
  limit: f
}) => {
  const p = t ? "rv-bg-gray-800 rv-text-white" : "rv-bg-slate-100 rv-text-gray-700";
  return /* @__PURE__ */ a.jsx("section", { className: "rv-relative rv-py-4", children: /* @__PURE__ */ a.jsx("div", { className: "rv-relative rv-w-full rv-px-4", children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: q(p, "rv-relative rv-flex rv-flex-col rv-min-w-0 rv-break-words rv-w-full rv-shadow-lg rv-rounded"),
      children: /* @__PURE__ */ a.jsxs("div", { className: "rv-block rv-w-full rv-overflow-x-auto rv-rounded rv-pb-16", children: [
        /* @__PURE__ */ a.jsxs("table", { className: "rv-items-center rv-w-full rv-border-collapse", children: [
          o && n && /* @__PURE__ */ a.jsx(
            Gt,
            {
              label: n
            }
          ),
          /* @__PURE__ */ a.jsx(
            Lt,
            {
              dark: t,
              data: r
            }
          ),
          /* @__PURE__ */ a.jsx(
            Dt,
            {
              dark: t,
              data: r
            }
          )
        ] }),
        u && /* @__PURE__ */ a.jsx("div", { className: "rv-absolute rv-bottom-0 rv-left-2 md:rv-right-0", children: /* @__PURE__ */ a.jsx(
          Bt,
          {
            onPageChange: c,
            count: l,
            currentPage: i,
            itemsPerPage: f
          }
        ) })
      ] })
    }
  ) }) });
}, Vt = (r) => `${r.toString()}px`, Qt = ({
  el: r,
  onIntersect: t,
  rootMargin: o,
  unobserveOnIntersect: n
}) => {
  ye(() => {
    const l = r.current;
    if (!l)
      return;
    if (typeof IntersectionObserver > "u") {
      t();
      return;
    }
    const i = (c) => {
      c.forEach((f) => {
        f.isIntersecting && (t(), n && u.unobserve(l));
      });
    };
    let u = new IntersectionObserver(i, {
      rootMargin: Vt(o),
      threshold: 0
    });
    return u.observe(l), () => {
      u.disconnect(), u = null;
    };
  }, [r]);
}, eo = ({ value: r, delay: t }) => {
  const [o, n] = ee(r);
  return ye(() => {
    const l = setTimeout(() => {
      n(r);
    }, t);
    return () => {
      clearTimeout(l);
    };
  }, [r, t]), o;
}, ro = ({ url: r, config: t }) => {
  const [o, n] = ee(!1), [l, i] = ee(""), [u, c] = ee(void 0), f = async () => {
    n(!0);
    try {
      const p = await fetch(r, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          ...t == null ? void 0 : t.headers
        }),
        ...t
      });
      p.ok || i("Error during data fetching");
      const g = await p.json();
      c(g);
    } catch (p) {
      i(p.message);
    } finally {
      n(!1);
    }
  };
  return ye(() => {
    f();
  }, [r]), { isLoading: o, error: l, data: u };
}, to = () => {
  const [r, t] = ee({
    width: window.innerWidth,
    height: window.innerHeight
  }), o = () => {
    t({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  return ye(() => (window.addEventListener("resize", o), o(), () => {
    window.removeEventListener("resize", o);
  }), []), r;
};
export {
  Ut as Button,
  Ht as Card,
  Jt as Skeleton,
  Kt as SkeletonAvatar,
  Xt as SkeletonImage,
  or as SkeletonLine,
  qt as Switch,
  Zt as Table,
  eo as useDebounce,
  ro as useFetch,
  Qt as useIntersectionObserver,
  to as useWindowSize
};
