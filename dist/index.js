import je, { useMemo as Te } from "react";
import './index.css';var Q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function vr() {
  if (Ce) return W;
  Ce = 1;
  var p = je, w = Symbol.for("react.element"), D = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, O = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, c, y) {
    var f, R = {}, C = null, N = null;
    y !== void 0 && (C = "" + y), c.key !== void 0 && (C = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (f in c) _.call(c, f) && !x.hasOwnProperty(f) && (R[f] = c[f]);
    if (E && E.defaultProps) for (f in c = E.defaultProps, c) R[f] === void 0 && (R[f] = c[f]);
    return { $$typeof: w, type: E, key: C, ref: N, props: R, _owner: O.current };
  }
  return W.Fragment = D, W.jsx = T, W.jsxs = T, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function dr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var p = je, w = Symbol.for("react.element"), D = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ee = Symbol.iterator, Oe = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var P = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, De = !1, Fe = !1, Ie = !1, $e = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === x || $e || e === O || e === y || e === f || Ie || e === N || Ae || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === T || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case D:
          return "Portal";
        case x:
          return "Profiler";
        case O:
          return "StrictMode";
        case y:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case C: {
            var i = e, s = i._payload, o = i._init;
            try {
              return m(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = P.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), d = n.stack.split(`
`), u = a.length - 1, l = d.length - 1; u >= 1 && l >= 0 && a[u] !== d[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== d[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== d[l]) {
                    var h = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, h), h;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = s, Le(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", j = A ? L(A) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case y:
          return L("Suspense");
        case f:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ue(e.render);
          case R:
            return U(e.type, r, t);
          case C: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, de = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(I);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(i), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var $ = P.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, z;
    z = {};
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = m($.current.type);
        z[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m($.current.type), e.ref), z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, d = null;
        t !== void 0 && (ge(t), a = "" + t), He(r) && (ge(r.key), a = "" + r.key), Ge(r) && (d = r.ref, Xe(r, i));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), d && Qe(o, l);
        }
        return er(e, a, d, i, n, $.current, o);
      }
    }
    var G = P.ReactCurrentOwner, ye = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function me() {
      {
        if (G.current) {
          var e = m(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var _e = {};
    function nr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + m(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              X(o.value) && Ee(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = m(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var we = {};
    function xe(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = tr();
          d ? a += d : a += me();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === w ? (u = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = rr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var A = 0; A < h.length; A++)
                  Re(h[A], e);
                Object.freeze && Object.freeze(h);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(h, e);
        }
        if (I.call(r, "key")) {
          var j = m(e), g = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[j + Z]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, j, cr, j), we[j + Z] = !0;
          }
        }
        return e === _ ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return xe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    Y.Fragment = _, Y.jsx = ur, Y.jsxs = lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? Q.exports = vr() : Q.exports = dr();
var b = Q.exports;
const pr = "rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30", gr = (p) => {
  switch (p) {
    case "large":
      return "rv-w-fit rv-px-10 rv-py-4";
    case "medium":
      return "rv-w-fit rv-px-5 rv-py-3";
    case "small":
      return "rv-w-fit rv-px-5 rv-py-2";
    default:
      return "rv-w-fit rv-px-10 rv-py-4";
  }
}, hr = (p) => {
  switch (p) {
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
}, br = (p) => {
  switch (p) {
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
}, yr = () => /* @__PURE__ */ b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.3em", height: "1.3em", viewBox: "0 0 24 24", children: /* @__PURE__ */ b.jsxs("g", { stroke: "currentColor", children: [
  /* @__PURE__ */ b.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", strokeWidth: 3, children: [
    /* @__PURE__ */ b.jsx(
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
    /* @__PURE__ */ b.jsx(
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
  /* @__PURE__ */ b.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), _r = ({
  variant: p = "primary",
  size: w = "large",
  isLoading: D = !1,
  href: _ = null,
  children: O,
  className: x,
  ...T
}) => {
  const E = Te(() => {
    const y = hr(p), f = gr(w);
    return [y, f, x].join(" ");
  }, [p, w, x]), c = Te(() => {
    const y = "rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-rounded-full group-hover:rv-w-56 group-hover:rv-h-56", f = br(p);
    return [y, f].join(" ");
  }, [p]);
  return /* @__PURE__ */ b.jsxs(
    "a",
    {
      role: "button",
      className: `${pr} ${E}`,
      ..._ && { href: _ },
      ...T,
      children: [
        /* @__PURE__ */ b.jsx("span", { className: `${c}` }),
        /* @__PURE__ */ b.jsx("span", { className: "rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-black rv-via-black rv-to-gray-900" }),
        D && /* @__PURE__ */ b.jsx("span", { className: "rv-me-2 rv-relative rv-z-10", children: /* @__PURE__ */ b.jsx(yr, {}) }),
        /* @__PURE__ */ b.jsx("span", { className: "rv-relative", children: O })
      ]
    }
  );
};
export {
  _r as Button
};
