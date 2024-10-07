import nr, { useMemo as Ke, forwardRef as ar, createElement as Pe, useState as Q, useEffect as ye } from "react";
import './index.css';var Oe = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Wr() {
  if (Xe) return le;
  Xe = 1;
  var r = nr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, b) {
    var g, j = {}, T = null, A = null;
    b !== void 0 && (T = "" + b), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (A = f.ref);
    for (g in f) n.call(f, g) && !s.hasOwnProperty(g) && (j[g] = f[g]);
    if (l && l.defaultProps) for (g in f = l.defaultProps, f) j[g] === void 0 && (j[g] = f[g]);
    return { $$typeof: t, type: l, key: T, ref: A, props: j, _owner: c.current };
  }
  return le.Fragment = o, le.jsx = u, le.jsxs = u, le;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Dr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = nr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), z = Symbol.iterator, P = "@@iterator";
    function E(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = z && e[z] || e[P];
      return typeof a == "function" ? a : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
          i[p - 1] = arguments[p];
        U("error", e, i);
      }
    }
    function U(e, a, i) {
      {
        var p = R.ReactDebugCurrentFrame, y = p.getStackAddendum();
        y !== "" && (a += "%s", i = i.concat([y]));
        var C = i.map(function(h) {
          return String(h);
        });
        C.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var L = !1, H = !1, fe = !1, pe = !1, ve = !1, J;
    J = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || ve || e === c || e === b || e === g || pe || e === A || L || H || fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === j || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function oe(e, a, i) {
      var p = e.displayName;
      if (p)
        return p;
      var y = a.displayName || a.name || "";
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
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case s:
          return "Profiler";
        case c:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var a = e;
            return w(a) + ".Consumer";
          case u:
            var i = e;
            return w(i._context) + ".Provider";
          case f:
            return oe(e, e.render, "ForwardRef");
          case j:
            var p = e.displayName || null;
            return p !== null ? p : I(e.type) || "Memo";
          case T: {
            var y = e, C = y._payload, h = y._init;
            try {
              return I(h(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, D = 0, Y, ne, K, G, ae, F, ze;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function pr() {
      {
        if (D === 0) {
          Y = console.log, ne = console.info, K = console.warn, G = console.error, ae = console.group, F = console.groupCollapsed, ze = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
    function vr() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: Y
            }),
            info: M({}, e, {
              value: ne
            }),
            warn: M({}, e, {
              value: K
            }),
            error: M({}, e, {
              value: G
            }),
            group: M({}, e, {
              value: ae
            }),
            groupCollapsed: M({}, e, {
              value: F
            }),
            groupEnd: M({}, e, {
              value: ze
            })
          });
        }
        D < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = R.ReactCurrentDispatcher, we;
    function ge(e, a, i) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (y) {
            var p = y.stack.trim().match(/\n( *(at )?)/);
            we = p && p[1] || "";
          }
        return `
` + we + e;
      }
    }
    var Ce = !1, be;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      be = new gr();
    }
    function Me(e, a) {
      if (!e || Ce)
        return "";
      {
        var i = be.get(e);
        if (i !== void 0)
          return i;
      }
      var p;
      Ce = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = xe.current, xe.current = null, pr();
      try {
        if (a) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (N) {
              p = N;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (N) {
              p = N;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            p = N;
          }
          e();
        }
      } catch (N) {
        if (N && p && typeof N.stack == "string") {
          for (var m = N.stack.split(`
`), O = p.stack.split(`
`), _ = m.length - 1, S = O.length - 1; _ >= 1 && S >= 0 && m[_] !== O[S]; )
            S--;
          for (; _ >= 1 && S >= 0; _--, S--)
            if (m[_] !== O[S]) {
              if (_ !== 1 || S !== 1)
                do
                  if (_--, S--, S < 0 || m[_] !== O[S]) {
                    var $ = `
` + m[_].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, $), $;
                  }
                while (_ >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, xe.current = C, vr(), Error.prepareStackTrace = y;
      }
      var Z = e ? e.displayName || e.name : "", q = Z ? ge(Z) : "";
      return typeof e == "function" && be.set(e, q), q;
    }
    function br(e, a, i) {
      return Me(e, !1);
    }
    function mr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function me(e, a, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, mr(e));
      if (typeof e == "string")
        return ge(e);
      switch (e) {
        case b:
          return ge("Suspense");
        case g:
          return ge("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return br(e.render);
          case j:
            return me(e.type, a, i);
          case T: {
            var p = e, y = p._payload, C = p._init;
            try {
              return me(C(y), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Fe = {}, $e = R.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var a = e._owner, i = me(e.type, e._source, a ? a.type : null);
        $e.setExtraStackFrame(i);
      } else
        $e.setExtraStackFrame(null);
    }
    function hr(e, a, i, p, y) {
      {
        var C = Function.call.bind(se);
        for (var h in e)
          if (C(e, h)) {
            var m = void 0;
            try {
              if (typeof e[h] != "function") {
                var O = Error((p || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[h](a, h, p, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              m = _;
            }
            m && !(m instanceof Error) && (he(y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", i, h, typeof m), he(null)), m instanceof Error && !(m.message in Fe) && (Fe[m.message] = !0, he(y), x("Failed %s type: %s", i, m.message), he(null));
          }
      }
    }
    var yr = Array.isArray;
    function ke(e) {
      return yr(e);
    }
    function xr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function wr(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function We(e) {
      if (wr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), Le(e);
    }
    var ie = R.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ge, je;
    je = {};
    function kr(e) {
      if (se.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function jr(e) {
      if (se.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, a) {
      if (typeof e.ref == "string" && ie.current && a && ie.current.stateNode !== a) {
        var i = I(ie.current.type);
        je[i] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ie.current.type), e.ref), je[i] = !0);
      }
    }
    function Rr(e, a) {
      {
        var i = function() {
          De || (De = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function _r(e, a) {
      {
        var i = function() {
          Ge || (Ge = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Sr = function(e, a, i, p, y, C, h) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Tr(e, a, i, p, y) {
      {
        var C, h = {}, m = null, O = null;
        i !== void 0 && (We(i), m = "" + i), jr(a) && (We(a.key), m = "" + a.key), kr(a) && (O = a.ref, Er(a, y));
        for (C in a)
          se.call(a, C) && !Cr.hasOwnProperty(C) && (h[C] = a[C]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (C in _)
            h[C] === void 0 && (h[C] = _[C]);
        }
        if (m || O) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Rr(h, S), O && _r(h, S);
        }
        return Sr(e, m, O, y, p, ie.current, h);
      }
    }
    var Ee = R.ReactCurrentOwner, Ve = R.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var a = e._owner, i = me(e.type, e._source, a ? a.type : null);
        Ve.setExtraStackFrame(i);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Be() {
      {
        if (Ee.current) {
          var e = I(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pr(e) {
      return "";
    }
    var Ue = {};
    function Or(e) {
      {
        var a = Be();
        if (!a) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function Ye(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Or(a);
        if (Ue[i])
          return;
        Ue[i] = !0;
        var p = "";
        e && e._owner && e._owner !== Ee.current && (p = " It was passed a child from " + I(e._owner.type) + "."), X(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, p), X(null);
      }
    }
    function qe(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ke(e))
          for (var i = 0; i < e.length; i++) {
            var p = e[i];
            _e(p) && Ye(p, a);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = E(e);
          if (typeof y == "function" && y !== e.entries)
            for (var C = y.call(e), h; !(h = C.next()).done; )
              _e(h.value) && Ye(h.value, a);
        }
      }
    }
    function Ar(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === j))
          i = a.propTypes;
        else
          return;
        if (i) {
          var p = I(a);
          hr(i, e.props, "prop", p, e);
        } else if (a.PropTypes !== void 0 && !Re) {
          Re = !0;
          var y = I(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(e) {
      {
        for (var a = Object.keys(e.props), i = 0; i < a.length; i++) {
          var p = a[i];
          if (p !== "children" && p !== "key") {
            X(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var He = {};
    function Je(e, a, i, p, y, C) {
      {
        var h = te(e);
        if (!h) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Pr();
          O ? m += O : m += Be();
          var _;
          e === null ? _ = "null" : ke(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (I(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, m);
        }
        var S = Tr(e, a, i, y, C);
        if (S == null)
          return S;
        if (h) {
          var $ = a.children;
          if ($ !== void 0)
            if (p)
              if (ke($)) {
                for (var Z = 0; Z < $.length; Z++)
                  qe($[Z], e);
                Object.freeze && Object.freeze($);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe($, e);
        }
        if (se.call(a, "key")) {
          var q = I(e), N = Object.keys(a).filter(function(Lr) {
            return Lr !== "key";
          }), Se = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[q + Se]) {
            var $r = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, q, $r, q), He[q + Se] = !0;
          }
        }
        return e === n ? Nr(S) : Ar(S), S;
      }
    }
    function zr(e, a, i) {
      return Je(e, a, i, !0);
    }
    function Ir(e, a, i) {
      return Je(e, a, i, !1);
    }
    var Mr = Ir, Fr = zr;
    ce.Fragment = n, ce.jsx = Mr, ce.jsxs = Fr;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Oe.exports = Wr() : Oe.exports = Dr();
var d = Oe.exports;
const Gr = "rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30", Vr = (r) => {
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
}, Br = (r) => {
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
}, Ur = (r) => {
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
}, Yr = () => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.3em", height: "1.3em", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsxs("g", { stroke: "currentColor", children: [
  /* @__PURE__ */ d.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", strokeWidth: 3, children: [
    /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsx(
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
  /* @__PURE__ */ d.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), Wt = ({
  variant: r = "primary",
  size: t = "large",
  isLoading: o = !1,
  href: n = null,
  children: c,
  className: s,
  ...u
}) => {
  const l = Ke(() => {
    const b = Br(r), g = Vr(t);
    return [b, g, s].join(" ");
  }, [r, t, s]), f = Ke(() => {
    const b = "rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-rounded-full group-hover:rv-w-56 group-hover:rv-h-56", g = Ur(r);
    return [b, g].join(" ");
  }, [r]);
  return /* @__PURE__ */ d.jsxs(
    "a",
    {
      role: "button",
      className: `${Gr} ${l}`,
      ...n && { href: n },
      ...u,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: `${f}` }),
        /* @__PURE__ */ d.jsx("span", { className: "rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-black rv-via-black rv-to-gray-900" }),
        o && /* @__PURE__ */ d.jsx("span", { className: "rv-me-2 rv-relative rv-z-10", children: /* @__PURE__ */ d.jsx(Yr, {}) }),
        /* @__PURE__ */ d.jsx("span", { className: "rv-relative", children: c })
      ]
    }
  );
}, qr = ({ isFeatured: r, text: t }) => {
  const o = t || "featured";
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: r && /* @__PURE__ */ d.jsx("div", { className: "rv-absolute rv-top-[10px] rv-z-10 rv-right-[15px] rv-bg-primary rv-rounded rv-p-1 rv-uppercase rv-text-xs rv-text-tprimary", children: /* @__PURE__ */ d.jsx("span", { className: "rv-font-bold rv-text-[10px] rv-flex rv-items-center", children: o }) }) });
};
function sr(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (t = 0; t < c; t++) r[t] && (o = sr(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
function Hr() {
  for (var r, t, o = 0, n = "", c = arguments.length; o < c; o++) (r = arguments[o]) && (t = sr(r)) && (n && (n += " "), n += t);
  return n;
}
const Ne = "-", Jr = (r) => {
  const t = Xr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Ne);
      return l[0] === "" && l.length !== 1 && l.shift(), ir(l, t) || Kr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const f = o[u] || [];
      return l && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, ir = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], n = t.nextPart.get(o), c = n ? ir(r.slice(1), n) : void 0;
  if (c)
    return c;
  if (t.validators.length === 0)
    return;
  const s = r.join(Ne);
  return (u = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : u.classGroupId;
}, Qe = /^\[(.+)\]$/, Kr = (r) => {
  if (Qe.test(r)) {
    const t = Qe.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
  return Qr(Object.entries(r.classGroups), o).forEach(([s, u]) => {
    Ae(u, n, s, t);
  }), n;
}, Ae = (r, t, o, n) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const s = c === "" ? t : er(t, c);
      s.classGroupId = o;
      return;
    }
    if (typeof c == "function") {
      if (Zr(c)) {
        Ae(c(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: o
      });
      return;
    }
    Object.entries(c).forEach(([s, u]) => {
      Ae(u, er(t, s), o, n);
    });
  });
}, er = (r, t) => {
  let o = r;
  return t.split(Ne).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, Zr = (r) => r.isThemeGetter, Qr = (r, t) => t ? r.map(([o, n]) => {
  const c = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([u, l]) => [t + u, l])) : s);
  return [o, c];
}) : r, et = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const c = (s, u) => {
    o.set(s, u), t++, t > r && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let u = o.get(s);
      if (u !== void 0)
        return u;
      if ((u = n.get(s)) !== void 0)
        return c(s, u), u;
    },
    set(s, u) {
      o.has(s) ? o.set(s, u) : c(s, u);
    }
  };
}, lr = "!", rt = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, n = t.length === 1, c = t[0], s = t.length, u = (l) => {
    const f = [];
    let b = 0, g = 0, j;
    for (let E = 0; E < l.length; E++) {
      let R = l[E];
      if (b === 0) {
        if (R === c && (n || l.slice(E, E + s) === t)) {
          f.push(l.slice(g, E)), g = E + s;
          continue;
        }
        if (R === "/") {
          j = E;
          continue;
        }
      }
      R === "[" ? b++ : R === "]" && b--;
    }
    const T = f.length === 0 ? l : l.substring(g), A = T.startsWith(lr), z = A ? T.substring(1) : T, P = j && j > g ? j - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: A,
      baseClassName: z,
      maybePostfixModifierPosition: P
    };
  };
  return o ? (l) => o({
    className: l,
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
}), nt = /\s+/, at = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: c
  } = t, s = [], u = r.trim().split(nt);
  let l = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const b = u[f], {
      modifiers: g,
      hasImportantModifier: j,
      baseClassName: T,
      maybePostfixModifierPosition: A
    } = o(b);
    let z = !!A, P = n(z ? T.substring(0, A) : T);
    if (!P) {
      if (!z) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (P = n(T), !P) {
        l = b + (l.length > 0 ? " " + l : l);
        continue;
      }
      z = !1;
    }
    const E = tt(g).join(":"), R = j ? E + lr : E, x = R + P;
    if (s.includes(x))
      continue;
    s.push(x);
    const U = c(P, z);
    for (let L = 0; L < U.length; ++L) {
      const H = U[L];
      s.push(R + H);
    }
    l = b + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function st() {
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
  let o, n, c, s = u;
  function u(f) {
    const b = t.reduce((g, j) => j(g), r());
    return o = ot(b), n = o.cache.get, c = o.cache.set, s = l, l(f);
  }
  function l(f) {
    const b = n(f);
    if (b)
      return b;
    const g = at(f, o);
    return c(f, g), g;
  }
  return function() {
    return s(st.apply(null, arguments));
  };
}
const k = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, ur = /^\[(?:([a-z-]+):)?(.+)\]$/i, lt = /^\d+\/\d+$/, ct = /* @__PURE__ */ new Set(["px", "full", "screen"]), ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ft = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (r) => ee(r) || ct.has(r) || lt.test(r), V = (r) => re(r, "length", Ct), ee = (r) => !!r && !Number.isNaN(Number(r)), Te = (r) => re(r, "number", ee), ue = (r) => !!r && Number.isInteger(Number(r)), gt = (r) => r.endsWith("%") && ee(r.slice(0, -1)), v = (r) => ur.test(r), B = (r) => ut.test(r), bt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mt = (r) => re(r, bt, dr), ht = (r) => re(r, "position", dr), yt = /* @__PURE__ */ new Set(["image", "url"]), xt = (r) => re(r, yt, jt), wt = (r) => re(r, "", kt), de = () => !0, re = (r, t, o) => {
  const n = ur.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, Ct = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  dt.test(r) && !ft.test(r)
), dr = () => !1, kt = (r) => pt.test(r), jt = (r) => vt.test(r), Et = () => {
  const r = k("colors"), t = k("spacing"), o = k("blur"), n = k("brightness"), c = k("borderColor"), s = k("borderRadius"), u = k("borderSpacing"), l = k("borderWidth"), f = k("contrast"), b = k("grayscale"), g = k("hueRotate"), j = k("invert"), T = k("gap"), A = k("gradientColorStops"), z = k("gradientColorStopPositions"), P = k("inset"), E = k("margin"), R = k("opacity"), x = k("padding"), U = k("saturate"), L = k("scale"), H = k("sepia"), fe = k("skew"), pe = k("space"), ve = k("translate"), J = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", v, t], w = () => [v, t], I = () => ["", W, V], M = () => ["auto", ee, v], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", v], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [ee, v];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [de],
      spacing: [W, V],
      blur: ["none", "", B, v],
      brightness: F(),
      borderColor: [r],
      borderRadius: ["none", "", "full", B, v],
      borderSpacing: w(),
      borderWidth: I(),
      contrast: F(),
      grayscale: G(),
      hueRotate: F(),
      invert: G(),
      gap: w(),
      gradientColorStops: [r],
      gradientColorStopPositions: [gt, V],
      inset: oe(),
      margin: oe(),
      opacity: F(),
      padding: w(),
      saturate: F(),
      scale: F(),
      sepia: G(),
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
        object: [...D(), v]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": te()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        z: ["auto", ue, v]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: oe()
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
        order: ["first", "last", "none", ue, v]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [de]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ue, v]
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
        "grid-rows": [de]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ue, v]
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
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Te]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [de]
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
        "line-clamp": ["none", ee, Te]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, v]
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
        "placeholder-opacity": [R]
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
        "text-opacity": [R]
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", W, V]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, v]
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
        "bg-opacity": [R]
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
        bg: [...D(), ht]
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
        bg: ["auto", "cover", "contain", mt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xt]
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
        "border-opacity": [R]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Y(), "hidden"]
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
        "divide-opacity": [R]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Y()
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
        outline: ["", ...Y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, v]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, V]
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
        "ring-opacity": [R]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, V]
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
        shadow: ["", "inner", "none", B, wt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [de]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
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
        "drop-shadow": ["", "none", B, v]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
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
        invert: [j]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [H]
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
        "backdrop-grayscale": [b]
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
        "backdrop-invert": [j]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [H]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ue, v]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ve]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ve]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [fe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [fe]
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
        stroke: [W, V, Te]
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
}, Rt = /* @__PURE__ */ it(Et), rr = (...r) => Rt(Hr(r));
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
const Tt = ar(
  ({
    color: r = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: c = "",
    children: s,
    iconNode: u,
    ...l
  }, f) => Pe(
    "svg",
    {
      ref: f,
      ...St,
      width: t,
      height: t,
      stroke: r,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: fr("lucide", c),
      ...l
    },
    [
      ...u.map(([b, g]) => Pe(b, g)),
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
const Pt = (r, t) => {
  const o = ar(
    ({ className: n, ...c }, s) => Pe(Tt, {
      ref: s,
      iconNode: t,
      className: fr(`lucide-${_t(r)}`, n),
      ...c
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
const Ot = Pt("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), At = ({
  img: r,
  alt: t,
  className: o,
  isSelected: n,
  toggleSelected: c,
  ...s
}) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
  /* @__PURE__ */ d.jsx(
    "img",
    {
      role: "img",
      className: rr("rv-h-64 rv-w-full rv-object-cover rv-object-bottom rv-rounded-lg rv-shadow-lg rv-relative", o),
      src: r,
      alt: t,
      ...s
    }
  ),
  /* @__PURE__ */ d.jsx(
    "div",
    {
      onClick: c,
      role: "switch",
      "aria-selected": n,
      className: rr(
        "rv-absolute rv-left-2 rv-top-1 rv-z-10 rv-w-[30px] rv-h-[30px] rv-cursor-pointer",
        n ? "rv-text-white rv-opacity-100" : "rv-opacity-35"
      ),
      children: /* @__PURE__ */ d.jsx(
        Ot,
        {
          stroke: "#fff",
          fill: n ? "#1aa73f" : "#333333",
          size: 30
        }
      )
    }
  )
] }), Nt = ({ children: r }) => /* @__PURE__ */ d.jsx("div", { className: "rv-relative rv-px-4 rv--mt-16", children: /* @__PURE__ */ d.jsx("div", { className: "rv-p-6 rv-bg-white rv-rounded rv-shadow-xl", children: r }) }), zt = ({
  tagLabel: r,
  tagDescription: t
}) => /* @__PURE__ */ d.jsxs("div", { className: "rv-flex rv-items-baseline", children: [
  /* @__PURE__ */ d.jsx("span", { className: "rv-inline-block rv-bg-secondary rv-text-white rv-text-xs rv-px-2 rv-rounded-full rv-uppercase", children: r }),
  /* @__PURE__ */ d.jsx("div", { className: "rv-ml-2 rv-text-gray-600 rv-text-xs rv-uppercase rv-font-semibold rv-tracking-wider", children: t })
] }), It = ({ title: r }) => /* @__PURE__ */ d.jsx("h4", { className: "rv-mt-1 rv-font-semibold rv-text-lg rv-leading-tight rv-truncate rv-text-tprimary", children: r }), Mt = ({ description: r }) => {
  const t = r || "No description detected";
  return /* @__PURE__ */ d.jsx("div", { className: "rv-mt-1", children: /* @__PURE__ */ d.jsx("span", { className: "rv-text-gray-600 rv-text-sm rv-line-clamp-2", children: t }) });
}, Ft = ({ children: r }) => /* @__PURE__ */ d.jsx("div", { className: "rv-relative", children: r }), Dt = ({
  isFeatured: r = !1,
  isSelected: t = !1,
  title: o,
  img: n = "https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!",
  description: c,
  tagLabel: s,
  tagDescription: u,
  onCardSelect: l,
  onCardClick: f
}) => {
  const [b, g] = Q(t), j = () => {
    g(!b), l && l();
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onClick: f,
      "data-card-selected": b,
      className: "rv-max-w-[400px] rv-w-full rv-relative rv-overflow-hidden rv-rounded hover:rv-transform hover:rv-scale-95 rv-transition-transform rv-duration-300 rv-ease-in-out",
      children: [
        /* @__PURE__ */ d.jsx(
          qr,
          {
            isFeatured: r
          }
        ),
        /* @__PURE__ */ d.jsxs(Ft, { children: [
          /* @__PURE__ */ d.jsx(
            At,
            {
              isSelected: b,
              toggleSelected: j,
              img: n,
              alt: o
            }
          ),
          /* @__PURE__ */ d.jsxs(Nt, { children: [
            s && u && /* @__PURE__ */ d.jsx(
              zt,
              {
                tagLabel: s,
                tagDescription: u
              }
            ),
            /* @__PURE__ */ d.jsx(
              It,
              {
                title: o || "No title Detected"
              }
            ),
            /* @__PURE__ */ d.jsx(
              Mt,
              {
                description: c
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Gt = ({
  checked: r,
  onChange: t,
  label: o,
  disabled: n = !1,
  ...c
}) => /* @__PURE__ */ d.jsxs(
  "label",
  {
    className: "rv-group rv-relative rv-flex rv-items-center rv-p-2 rv-text-base",
    children: [
      /* @__PURE__ */ d.jsx(
        "input",
        {
          checked: r,
          type: "checkbox",
          className: "rv-peer rv-absolute rv-left-1/2 rv-h-full rv-w-full -rv-translate-x-1/2 rv-appearance-none rv-rounded-md rv-cursor-pointer disabled:rv-opacity-50",
          disabled: n,
          role: "switch",
          "aria-checked": r,
          onChange: n ? void 0 : t,
          ...c
        }
      ),
      /* @__PURE__ */ d.jsx(
        "span",
        {
          className: "rv-relative rv-cursor-pointer rv-ml-2 rv-flex rv-h-6 rv-w-12 rv-flex-shrink-0 rv-items-center rv-rounded-full rv-bg-gray-300 rv-p-1 rv-duration-300 rv-ease-in-out after:rv-h-4 after:rv-w-4 after:rv-rounded-full after:rv-bg-white after:rv-shadow-md after:rv-duration-300 group-hover:rv-after:translate-x-1 peer-checked:rv-bg-gradient-to-r rv-from-emerald-500 rv-to-emerald-900 peer-checked:after:rv-translate-x-6 peer-disabled:rv-cursor-not-allowed"
        }
      ),
      o && /* @__PURE__ */ d.jsx("span", { className: "rv-ml-2 rv-text-white", children: o })
    ]
  }
), Vt = ({ children: r }) => /* @__PURE__ */ d.jsx(
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
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: o ? /* @__PURE__ */ d.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: tr(r) },
      className: "rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2"
    }
  ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: t.map((n) => /* @__PURE__ */ d.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: tr(n) },
      className: "rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2"
    },
    `skeleton-line-${window.crypto.randomUUID()}`
  )) }) });
}, Bt = ({
  width: r = 48,
  height: t = 48
}) => /* @__PURE__ */ d.jsxs("div", { className: "rv-flex rv-gap-3 rv-w-full", children: [
  /* @__PURE__ */ d.jsx(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      style: { width: `${r}px`, height: `${t}px`, minWidth: `${r}px` },
      className: "rv-rounded-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500"
    }
  ),
  /* @__PURE__ */ d.jsxs(
    "div",
    {
      role: "status",
      "aria-hidden": "true",
      className: "rv-flex rv-flex-col rv-gap-3 rv-h-auto rv-w-full rv-justify-center",
      children: [
        /* @__PURE__ */ d.jsx(or, { size: "medium" }),
        /* @__PURE__ */ d.jsx(or, { size: "small" })
      ]
    }
  )
] }), Ut = ({ height: r = 150 }) => /* @__PURE__ */ d.jsx(
  "div",
  {
    role: "status",
    "aria-hidden": "true",
    style: { height: `${r}px` },
    className: "rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-w-full"
  }
), $t = (r) => `${r.toString()}px`, Yt = ({
  el: r,
  onIntersect: t,
  rootMargin: o,
  unobserveOnIntersect: n
}) => {
  ye(() => {
    const c = r.current;
    if (!c)
      return;
    if (typeof IntersectionObserver > "u") {
      t();
      return;
    }
    const s = (l) => {
      l.forEach((f) => {
        f.isIntersecting && (t(), n && u.unobserve(c));
      });
    };
    let u = new IntersectionObserver(s, {
      rootMargin: $t(o),
      threshold: 0
    });
    return u.observe(c), () => {
      u.disconnect(), u = null;
    };
  }, [r]);
}, qt = ({ value: r, delay: t }) => {
  const [o, n] = Q(r);
  return ye(() => {
    const c = setTimeout(() => {
      n(r);
    }, t);
    return () => {
      clearTimeout(c);
    };
  }, [r, t]), o;
}, Ht = ({ url: r, config: t }) => {
  const [o, n] = Q(!1), [c, s] = Q(""), [u, l] = Q(void 0), f = async () => {
    n(!0);
    try {
      const b = await fetch(r, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          ...t == null ? void 0 : t.headers
        }),
        ...t
      });
      b.ok || s("Error during data fetching");
      const g = await b.json();
      l(g);
    } catch (b) {
      s(b.message);
    } finally {
      n(!1);
    }
  };
  return ye(() => {
    f();
  }, [r]), { isLoading: o, error: c, data: u };
}, Jt = () => {
  const [r, t] = Q({
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
  Wt as Button,
  Dt as Card,
  Vt as Skeleton,
  Bt as SkeletonAvatar,
  Ut as SkeletonImage,
  or as SkeletonLine,
  Gt as Switch,
  qt as useDebounce,
  Ht as useFetch,
  Yt as useIntersectionObserver,
  Jt as useWindowSize
};
