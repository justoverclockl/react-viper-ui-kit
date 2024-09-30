import je, { useMemo as Te, useEffect as vr } from "react";
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
function dr() {
  if (Ce) return W;
  Ce = 1;
  var c = je, m = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, R = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(E, f, x) {
    var v, C = {}, j = null, Y = null;
    x !== void 0 && (j = "" + x), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (v in f) _.call(f, v) && !T.hasOwnProperty(v) && (C[v] = f[v]);
    if (E && E.defaultProps) for (v in f = E.defaultProps, f) C[v] === void 0 && (C[v] = f[v]);
    return { $$typeof: m, type: E, key: j, ref: Y, props: C, _owner: R.current };
  }
  return W.Fragment = S, W.jsx = b, W.jsxs = b, W;
}
var N = {};
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
function pr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = je, m = Symbol.for("react.element"), S = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Oe = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var k = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
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
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === T || $e || e === R || e === x || e === v || Ie || e === Y || Ae || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === C || e.$$typeof === b || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case S:
          return "Portal";
        case T:
          return "Profiler";
        case R:
          return "StrictMode";
        case x:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return te(r) + ".Consumer";
          case b:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return Ne(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case j: {
            var i = e, s = i._payload, o = i._init;
            try {
              return w(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
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
            log: O({}, e, {
              value: ne
            }),
            info: O({}, e, {
              value: ae
            }),
            warn: O({}, e, {
              value: oe
            }),
            error: O({}, e, {
              value: ie
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: ue
            }),
            groupEnd: O({}, e, {
              value: le
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, J;
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
      s = B.current, B.current = null, Ye();
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
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
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
      var D = e ? e.displayName || e.name : "", P = D ? L(D) : "";
      return typeof e == "function" && M.set(e, P), P;
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
        case x:
          return L("Suspense");
        case v:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case C:
            return U(e.type, r, t);
          case j: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, de = k.ReactDebugCurrentFrame;
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
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(i), d("Failed %s type: %s", t, a.message), V(null));
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
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var $ = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he, z;
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
        var t = w($.current.type);
        z[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w($.current.type), e.ref), z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          he || (he = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        $$typeof: m,
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
        var s, o = {}, a = null, p = null;
        t !== void 0 && (ge(t), a = "" + t), He(r) && (ge(r.key), a = "" + r.key), Ge(r) && (p = r.ref, Xe(r, i));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), p && Qe(o, l);
        }
        return er(e, a, p, i, n, $.current, o);
      }
    }
    var G = k.ReactCurrentOwner, ye = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function me() {
      {
        if (G.current) {
          var e = w(G.current.type);
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
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + w(e._owner.type) + "."), A(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
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
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = w(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var xe = {};
    function we(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? a += p : a += me();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === m ? (u = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = rr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var D = 0; D < h.length; D++)
                  Re(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(h, e);
        }
        if (I.call(r, "key")) {
          var P = w(e), g = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[P + Z]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, P, cr, P), xe[P + Z] = !0;
          }
        }
        return e === _ ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    N.Fragment = _, N.jsx = ur, N.jsxs = lr;
  }()), N;
}
process.env.NODE_ENV === "production" ? Q.exports = dr() : Q.exports = pr();
var y = Q.exports;
const gr = "rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30", br = (c) => {
  switch (c) {
    case "large":
      return "rv-w-fit rv-px-10 rv-py-4";
    case "medium":
      return "rv-w-fit rv-px-5 rv-py-3";
    case "small":
      return "rv-w-fit rv-px-5 rv-py-2";
    default:
      return "rv-w-fit rv-px-10 rv-py-4";
  }
}, hr = (c) => {
  switch (c) {
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
}, yr = (c) => {
  switch (c) {
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
}, mr = () => /* @__PURE__ */ y.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.3em", height: "1.3em", viewBox: "0 0 24 24", children: /* @__PURE__ */ y.jsxs("g", { stroke: "currentColor", children: [
  /* @__PURE__ */ y.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", strokeWidth: 3, children: [
    /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsx(
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
  /* @__PURE__ */ y.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), Rr = ({
  variant: c = "primary",
  size: m = "large",
  isLoading: S = !1,
  href: _ = null,
  children: R,
  className: T,
  ...b
}) => {
  const E = Te(() => {
    const x = hr(c), v = br(m);
    return [x, v, T].join(" ");
  }, [c, m, T]), f = Te(() => {
    const x = "rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-rounded-full group-hover:rv-w-56 group-hover:rv-h-56", v = yr(c);
    return [x, v].join(" ");
  }, [c]);
  return /* @__PURE__ */ y.jsxs(
    "a",
    {
      role: "button",
      className: `${gr} ${E}`,
      ..._ && { href: _ },
      ...b,
      children: [
        /* @__PURE__ */ y.jsx("span", { className: `${f}` }),
        /* @__PURE__ */ y.jsx("span", { className: "rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-black rv-via-black rv-to-gray-900" }),
        S && /* @__PURE__ */ y.jsx("span", { className: "rv-me-2 rv-relative rv-z-10", children: /* @__PURE__ */ y.jsx(mr, {}) }),
        /* @__PURE__ */ y.jsx("span", { className: "rv-relative", children: R })
      ]
    }
  );
}, _r = (c) => `${c.toString()}px`, xr = ({
  el: c,
  onIntersect: m,
  rootMargin: S,
  unobserveOnIntersect: _
}) => {
  vr(() => {
    const R = c.current;
    if (!R)
      return;
    if (typeof IntersectionObserver > "u") {
      m();
      return;
    }
    const T = (E) => {
      E.forEach((f) => {
        f.isIntersecting && (m(), _ && b.unobserve(R));
      });
    };
    let b = new IntersectionObserver(T, {
      rootMargin: _r(S),
      threshold: 0
    });
    return b.observe(R), () => {
      b.disconnect(), b = null;
    };
  }, [c]);
};
export {
  Rr as Button,
  xr as useIntersectionObserver
};
