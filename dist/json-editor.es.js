import Y, { createContext as Ne, useState as V, useContext as Se, useMemo as xe, useCallback as Oe } from "react";
var ee = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function we() {
  if (ue) return q;
  ue = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function t(o, c, i) {
    var x = null;
    if (i !== void 0 && (x = "" + i), c.key !== void 0 && (x = "" + c.key), "key" in c) {
      i = {};
      for (var g in c)
        g !== "key" && (i[g] = c[g]);
    } else i = c;
    return c = i.ref, {
      $$typeof: e,
      type: o,
      key: x,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return q.Fragment = s, q.jsx = t, q.jsxs = t, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function _e() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === B ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case T:
          return "Fragment";
        case h:
          return "Profiler";
        case u:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case D:
            return "Portal";
          case b:
            return (n.displayName || "Context") + ".Provider";
          case $:
            return (n._context.displayName || "Context") + ".Consumer";
          case _:
            var l = n.render;
            return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case E:
            return l = n.displayName || null, l !== null ? l : e(n.type) || "Memo";
          case C:
            l = n._payload, n = n._init;
            try {
              return e(n(l));
            } catch {
            }
        }
      return null;
    }
    function s(n) {
      return "" + n;
    }
    function t(n) {
      try {
        s(n);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var j = l.error, S = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return j.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), s(n);
      }
    }
    function o(n) {
      if (n === T) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === C)
        return "<...>";
      try {
        var l = e(n);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var n = L.A;
      return n === null ? null : n.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function x(n) {
      if (N.call(n, "key")) {
        var l = Object.getOwnPropertyDescriptor(n, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function g(n, l) {
      function j() {
        d || (d = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: j,
        configurable: !0
      });
    }
    function y() {
      var n = e(this.type);
      return a[n] || (a[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function w(n, l, j, S, H, z, oe, ie) {
      return j = z.ref, n = {
        $$typeof: J,
        type: n,
        key: l,
        props: z,
        _owner: H
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function A(n, l, j, S, H, z, oe, ie) {
      var O = l.children;
      if (O !== void 0)
        if (S)
          if (f(O)) {
            for (S = 0; S < O.length; S++)
              I(O[S]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(O);
      if (N.call(l, "key")) {
        O = e(n);
        var U = Object.keys(l).filter(function(Ee) {
          return Ee !== "key";
        });
        S = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", F[O + S] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          O,
          U,
          O
        ), F[O + S] = !0);
      }
      if (O = null, j !== void 0 && (t(j), O = "" + j), x(l) && (t(l.key), O = "" + l.key), "key" in l) {
        j = {};
        for (var ae in l)
          ae !== "key" && (j[ae] = l[ae]);
      } else j = l;
      return O && g(
        j,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), w(
        n,
        O,
        z,
        H,
        c(),
        j,
        oe,
        ie
      );
    }
    function I(n) {
      typeof n == "object" && n !== null && n.$$typeof === J && n._store && (n._store.validated = 1);
    }
    var M = Y, J = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), b = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), L = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, f = Array.isArray, p = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var d, a = {}, k = M.react_stack_bottom_frame.bind(
      M,
      i
    )(), v = p(o(i)), F = {};
    G.Fragment = T, G.jsx = function(n, l, j, S, H) {
      var z = 1e4 > L.recentlyCreatedOwnerStacks++;
      return A(
        n,
        l,
        j,
        !1,
        S,
        H,
        z ? Error("react-stack-top-frame") : k,
        z ? p(o(n)) : v
      );
    }, G.jsxs = function(n, l, j, S, H) {
      var z = 1e4 > L.recentlyCreatedOwnerStacks++;
      return A(
        n,
        l,
        j,
        !0,
        S,
        H,
        z ? Error("react-stack-top-frame") : k,
        z ? p(o(n)) : v
      );
    };
  })()), G;
}
var pe;
function Te() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? ee.exports = we() : ee.exports = _e()), ee.exports;
}
var r = Te();
const ge = Ne(null), je = () => {
  const e = Se(ge);
  if (!e) throw new Error("JsonEditor must be inside JsonEditorProvider");
  return e;
}, Re = ({ children: e, editable: s = !0 }) => {
  const [t, o] = V(null);
  return /* @__PURE__ */ r.jsx(ge.Provider, { value: { editingId: t, setEditingId: o, editable: s }, children: e });
};
var he = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, me = Y.createContext && /* @__PURE__ */ Y.createContext(he), Pe = ["attr", "size", "title"];
function Ae(e, s) {
  if (e == null) return {};
  var t = Le(e, s), o, c;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (c = 0; c < i.length; c++)
      o = i[c], !(s.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
function Le(e, s) {
  if (e == null) return {};
  var t = {};
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      if (s.indexOf(o) >= 0) continue;
      t[o] = e[o];
    }
  return t;
}
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var t = arguments[s];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, re.apply(this, arguments);
}
function ye(e, s) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    s && (o = o.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function te(e) {
  for (var s = 1; s < arguments.length; s++) {
    var t = arguments[s] != null ? arguments[s] : {};
    s % 2 ? ye(Object(t), !0).forEach(function(o) {
      Ce(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ye(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Ce(e, s, t) {
  return s = ze(s), s in e ? Object.defineProperty(e, s, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[s] = t, e;
}
function ze(e) {
  var s = We(e, "string");
  return typeof s == "symbol" ? s : s + "";
}
function We(e, s) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, s);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(e);
}
function ve(e) {
  return e && e.map((s, t) => /* @__PURE__ */ Y.createElement(s.tag, te({
    key: t
  }, s.attr), ve(s.child)));
}
function K(e) {
  return (s) => /* @__PURE__ */ Y.createElement(Ie, re({
    attr: te({}, e.attr)
  }, s), ve(e.child));
}
function Ie(e) {
  var s = (t) => {
    var {
      attr: o,
      size: c,
      title: i
    } = e, x = Ae(e, Pe), g = c || t.size || "1em", y;
    return t.className && (y = t.className), e.className && (y = (y ? y + " " : "") + e.className), /* @__PURE__ */ Y.createElement("svg", re({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, o, x, {
      className: y,
      style: te(te({
        color: e.color || t.color
      }, t.style), e.style),
      height: g,
      width: g,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ Y.createElement("title", null, i), e.children);
  };
  return me !== void 0 ? /* @__PURE__ */ Y.createElement(me.Consumer, null, (t) => s(t)) : s(he);
}
function X(e) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" }, child: [] }] })(e);
}
function be(e) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }, child: [] }] })(e);
}
function ne(e) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(e);
}
function se(e) {
  return K({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(e);
}
const W = {
  fontSize: 14,
  step: 8,
  fontFamily: "monospace",
  lineHeight: 1.4,
  colors: {
    key: "#61afef",
    string: "#a0d57a",
    // зеленоватый
    number: "#e79b55",
    // оранжево-коричневый
    boolean: "#c678dd",
    null: "#c678dd",
    brackets: "#6c6c6c",
    colon: "#abb2bf",
    border: "#3e4451",
    type: "#6c6c6c",
    array: "#6c6c6c",
    object: "#6c6c6c",
    index: "#6c6c6c",
    // индексы массивов
    pick: "#61afef"
  }
};
function ke({
  onChange: e,
  setEditingId: s,
  value: t,
  fontSize: o,
  border: c
}) {
  return /* @__PURE__ */ r.jsxs("span", { className: "mx-6", style: { display: "inline-flex", gap: 4 }, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: (i) => {
          i.stopPropagation(), e(!0), s(null);
        },
        style: {
          cursor: "pointer",
          border: `1px dashed ${c}`,
          borderRadius: 4,
          padding: "0 4px",
          fontSize: o,
          background: t === !0 ? "#a5f07a60" : "transparent",
          color: "#82f061",
          opacity: t === !1 ? 0.6 : 1
        },
        children: "✔"
      }
    ),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: (i) => {
          i.stopPropagation(), e(!1), s(null);
        },
        style: {
          cursor: "pointer",
          border: `1px dashed ${c}`,
          borderRadius: 4,
          padding: "0 4px",
          fontSize: o,
          background: t === !1 ? "#ed785e36" : "transparent",
          color: "red",
          opacity: t === !0 ? 0.6 : 1
        },
        children: "✖"
      }
    )
  ] });
}
function le({
  value: e,
  onChange: s,
  label: t,
  theme: o = W,
  path: c = "",
  depth: i = 0,
  onPick: x,
  pickedPath: g,
  expandedPaths: y,
  onToggle: w,
  defaultCollapsed: A = !0
}) {
  const [I, M] = V(A), { editingId: J, setEditingId: D, editable: T } = je(), u = o.step ?? 12, h = xe(
    () => c ? c + "/" + (t ?? "root") : t ?? "root",
    [c, t]
  ), $ = y?.includes(h) ?? !1, b = y ? !$ : I, _ = () => {
    y ? w?.(h) : M(!I);
  }, R = {
    fontSize: o.fontSize ?? W.fontSize,
    fontFamily: o.fontFamily ?? W.fontFamily,
    lineHeight: o.lineHeight ?? W.lineHeight
  }, m = { ...W.colors, ...o.colors }, E = {
    fontSize: R.fontSize,
    fontFamily: R.fontFamily,
    lineHeight: R.lineHeight
  }, C = {
    color: m.key,
    fontWeight: 300,
    fontStyle: "italic",
    ...E
  }, P = {
    color: m.index,
    fontWeight: 400,
    fontStyle: "normal",
    ...E
  }, B = g === h, L = () => x && /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "radio",
      checked: !!B,
      readOnly: !0,
      onClick: (N) => {
        N.stopPropagation(), x(h, e);
      },
      style: {
        marginLeft: 8,
        cursor: "pointer",
        accentColor: m.pick
      }
    }
  );
  if (typeof e == "boolean") {
    const N = J === h;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center",
        style: { ...E, paddingLeft: i * u },
        children: [
          t && /* @__PURE__ */ r.jsxs("span", { style: t.startsWith("[") ? P : C, children: [
            t,
            /* @__PURE__ */ r.jsx("span", { style: { color: m.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "span",
            {
              style: {
                color: m.boolean,
                cursor: T ? "pointer" : "default",
                marginLeft: t ? 4 : 0
              },
              onClick: () => T && D(h),
              children: String(e)
            }
          ),
          L(),
          T && N && s && /* @__PURE__ */ r.jsx(
            ke,
            {
              onChange: s,
              setEditingId: D,
              value: e,
              fontSize: R.fontSize,
              border: m.border
            }
          )
        ]
      }
    );
  }
  if (typeof e == "string")
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center",
        style: { ...E, paddingLeft: i * u },
        children: [
          t && /* @__PURE__ */ r.jsxs("span", { style: t.startsWith("[") ? P : C, children: [
            t,
            /* @__PURE__ */ r.jsx("span", { style: { color: m.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              value: e,
              disabled: !T || !s,
              style: {
                ...E,
                color: m.string,
                background: "transparent",
                border: "none",
                outline: "none",
                marginLeft: t ? 4 : 0
              },
              onChange: (N) => T && s(N.target.value)
            }
          ),
          L()
        ]
      }
    );
  if (typeof e == "number")
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center",
        style: { ...E, paddingLeft: i * u },
        children: [
          t && /* @__PURE__ */ r.jsxs("span", { style: t.startsWith("[") ? P : C, children: [
            t,
            /* @__PURE__ */ r.jsx("span", { style: { color: m.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "number",
              value: String(e),
              disabled: !T || !s,
              style: {
                ...E,
                color: m.number,
                background: "transparent",
                border: "none",
                outline: "none",
                width: "6em",
                marginLeft: t ? 4 : 0
              },
              onChange: (N) => {
                if (!T) return;
                const f = N.target.value;
                if (f === "" || f === "-")
                  s(0);
                else {
                  const p = Number(f);
                  isNaN(p) || s(p);
                }
              }
            }
          ),
          L()
        ]
      }
    );
  if (e === null)
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center",
        style: { ...E, paddingLeft: i * u },
        children: [
          t && /* @__PURE__ */ r.jsxs("span", { style: t.startsWith("[") ? P : C, children: [
            t,
            /* @__PURE__ */ r.jsx("span", { style: { color: m.colon }, children: ":" })
          ] }),
          /* @__PURE__ */ r.jsx("span", { style: { color: m.null, marginLeft: t ? 4 : 0 }, children: "null" }),
          L()
        ]
      }
    );
  if (Array.isArray(e))
    return /* @__PURE__ */ r.jsxs("div", { style: { ...E }, children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          onClick: _,
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * u
            // ✅ как в первом
          },
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "opacity-50", children: b ? /* @__PURE__ */ r.jsx(se, {}) : /* @__PURE__ */ r.jsx(ne, {}) }),
            t && /* @__PURE__ */ r.jsxs("span", { className: "opacity-50", style: t.startsWith("[") ? P : C, children: [
              t,
              ":"
            ] }),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: m.type, marginLeft: t ? 4 : 0 }, children: "Array" }),
            /* @__PURE__ */ r.jsxs("span", { className: "opacity-50", style: { color: m.brackets }, children: [
              "[",
              e.length,
              "]"
            ] }),
            L()
          ]
        }
      ),
      !b && /* @__PURE__ */ r.jsx(
        "div",
        {
          style: {
            marginLeft: u,
            // ✅ смещение детей
            borderLeft: `1px solid ${m.border}`
          },
          children: e.map((N, f) => /* @__PURE__ */ r.jsx(
            le,
            {
              value: N,
              label: `[${f}]`,
              path: h,
              depth: i + 1,
              onChange: (p) => {
                const d = [...e];
                d[f] = p, s(d);
              },
              theme: o,
              onPick: x,
              pickedPath: g,
              expandedPaths: y,
              onToggle: w,
              defaultCollapsed: A
            },
            f
          ))
        }
      )
    ] });
  if (typeof e == "object") {
    const N = Object.entries(e);
    return /* @__PURE__ */ r.jsxs("div", { style: { ...E }, children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          onClick: _,
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * u
            // ✅ как в первом
          },
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "opacity-50", children: b ? /* @__PURE__ */ r.jsx(se, {}) : /* @__PURE__ */ r.jsx(ne, {}) }),
            t && /* @__PURE__ */ r.jsxs("span", { className: "opacity-50", style: t.startsWith("[") ? P : C, children: [
              t,
              ":"
            ] }),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: m.type, marginLeft: t ? 4 : 0 }, children: "Object" }),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: m.brackets }, children: "{" + N.length + "}" }),
            L()
          ]
        }
      ),
      !b && /* @__PURE__ */ r.jsx(
        "div",
        {
          style: {
            marginLeft: u,
            // ✅ смещение детей
            borderLeft: `1px solid ${m.border}`
          },
          children: N.map(([f, p]) => /* @__PURE__ */ r.jsx(
            le,
            {
              value: p,
              label: f,
              path: h,
              depth: i + 1,
              onChange: (d) => s({ ...e, [f]: d }),
              theme: o,
              onPick: x,
              pickedPath: g,
              expandedPaths: y,
              onToggle: w,
              defaultCollapsed: A
            },
            f
          ))
        }
      )
    ] });
  }
  return null;
}
function Me({
  depth: e,
  step: s,
  color: t,
  onAdd: o,
  onCancel: c
}) {
  const [i, x] = V(""), [g, y] = V("string"), w = Oe(() => {
    i && (o(i, g), x(""));
  }, [i, g]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "flex gap-1",
      style: { marginLeft: e * s },
      children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            placeholder: "key",
            value: i,
            className: "rounded-sm pl-4 w-40",
            onChange: (A) => x(A.target.value),
            style: {
              border: `1px solid ${t}`,
              background: "transparent",
              color: t
            }
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "select",
          {
            className: "border-1 rounded-lg border-dashed",
            value: g,
            onChange: (A) => y(A.target.value),
            children: [
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "string", children: "string" }),
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "number", children: "number" }),
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "boolean", children: "boolean" }),
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "null", children: "null" }),
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "object", children: "object" }),
              /* @__PURE__ */ r.jsx("option", { className: "bg-[#373737] text-amber-50", value: "array", children: "array" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed ml-2",
            onClick: w,
            children: "✔"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed",
            onClick: c,
            children: "✖"
          }
        )
      ]
    }
  );
}
function Z({
  label: e,
  onRename: s,
  editable: t,
  style: o,
  className: c,
  color: i
}) {
  return /* @__PURE__ */ r.jsxs(
    "span",
    {
      className: `flex ${c}`,
      style: o,
      children: [
        /* @__PURE__ */ r.jsx(
          "span",
          {
            contentEditable: t && !e.startsWith("["),
            suppressContentEditableWarning: !0,
            onBlur: (x) => {
              const g = x.currentTarget.textContent?.trim();
              t && s && g && g !== e ? s(e, g) : x.currentTarget.textContent = e;
            },
            style: {
              display: "inline-block",
              outline: "none",
              minWidth: "1ch"
            },
            children: e
          }
        ),
        /* @__PURE__ */ r.jsx("span", { style: { color: i }, children: ":" })
      ]
    }
  );
}
function Fe(e) {
  return K({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z" }, child: [] }] })(e);
}
const $e = ["string", "number", "boolean", "null", "object", "array"];
function ce({ onChangeType: e, current: s, className: t }) {
  const [o, c] = V(!1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `items-center my-auto mr-2 ${t}`,
      style: { position: "relative", display: "inline-block" },
      children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: (i) => {
              i.stopPropagation(), c(!o);
            },
            style: {
              cursor: "pointer",
              background: "transparent",
              border: "none",
              color: "#93adcf9e"
            },
            children: /* @__PURE__ */ r.jsx(Fe, { size: 12 })
          }
        ),
        o && /* @__PURE__ */ r.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#2a2a2a",
              border: "1px solid #555",
              borderRadius: 4,
              zIndex: 10
            },
            children: $e.map((i) => /* @__PURE__ */ r.jsx(
              "div",
              {
                onClick: () => {
                  e(i), c(!1);
                },
                style: {
                  padding: "2px 6px",
                  fontSize: "0.8em",
                  cursor: "pointer",
                  background: s === i ? "#444" : "transparent",
                  color: "#eee"
                },
                children: i
              },
              i
            ))
          }
        )
      ]
    }
  );
}
function Q() {
  const [e, s] = V(!1);
  return {
    hover: e,
    bind: {
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1)
    }
  };
}
function de({
  value: e,
  onChange: s,
  label: t,
  theme: o = W,
  path: c = "",
  depth: i = 0,
  expandedPaths: x,
  defaultCollapsed: g = !1,
  onDelete: y,
  onRename: w
}) {
  const [A, I] = V(!1), [M, J] = V(g), { editingId: D, setEditingId: T, editable: u } = je(), h = o.step ? o.step : 8, $ = {
    fontSize: o.fontSize ?? W.fontSize,
    fontFamily: o.fontFamily ?? W.fontFamily,
    lineHeight: o.lineHeight ?? W.lineHeight
  }, b = { ...W.colors, ...o.colors }, _ = {
    fontSize: $.fontSize,
    fontFamily: $.fontFamily,
    lineHeight: $.lineHeight
  }, R = {
    color: b.key,
    fontWeight: 300,
    fontStyle: "italic",
    ..._
  }, m = {
    color: b.index,
    fontWeight: 400,
    fontStyle: "normal",
    ..._
  }, E = xe(
    () => c ? c + "/" + (t ?? "root") : t ?? "root",
    [c, t]
  ), C = x?.includes(E) ?? !1, P = x ? !C : M, B = () => {
    x || J(!M);
  }, L = (f, p) => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", gap: 4, marginLeft: 8 }, children: [
    u && p && /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "mr-1",
        onClick: (d) => {
          d.stopPropagation(), p();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "#6c6c6c"
        },
        children: /* @__PURE__ */ r.jsx(be, { size: 16 })
      }
    ),
    u && f && /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: (d) => {
          d.stopPropagation(), f();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "tomato"
        },
        children: /* @__PURE__ */ r.jsx(X, { size: 16 })
      }
    )
  ] }), N = (f) => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", gap: 4, marginLeft: 8 }, children: [
    u && /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "mr-1",
        onClick: (p) => {
          I(!0);
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "#6c6c6c"
        },
        children: /* @__PURE__ */ r.jsx(be, { size: 16 })
      }
    ),
    u && f && /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: (p) => {
          p.stopPropagation(), f();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "tomato"
        },
        children: /* @__PURE__ */ r.jsx(X, { size: 16 })
      }
    )
  ] });
  if (typeof e == "boolean") {
    const f = D === E, { hover: p, bind: d } = Q();
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex",
        style: { ..._, paddingLeft: i * h },
        ...d,
        children: [
          t && /* @__PURE__ */ r.jsx(
            Z,
            {
              style: t.startsWith("[") ? m : R,
              label: t,
              color: b.colon,
              onRename: w,
              editable: u
            }
          ),
          /* @__PURE__ */ r.jsx(
            "span",
            {
              style: {
                color: b.boolean,
                marginLeft: t ? 4 : 0,
                cursor: u ? "pointer" : "default"
              },
              onClick: () => {
                u && T(E);
              },
              children: String(e)
            }
          ),
          u && f && p && s && /* @__PURE__ */ r.jsx(
            ke,
            {
              onChange: s,
              setEditingId: T,
              value: e,
              fontSize: $.fontSize,
              border: b.border
            }
          ),
          u && p && /* @__PURE__ */ r.jsx(
            ce,
            {
              current: "boolean",
              className: "ml-auto",
              onChangeType: (a) => {
                let k = null;
                switch (a) {
                  case "string":
                    k = "";
                    break;
                  case "number":
                    k = 0;
                    break;
                  case "boolean":
                    k = !1;
                    break;
                  case "null":
                    k = null;
                    break;
                  case "object":
                    k = {};
                    break;
                  case "array":
                    k = [];
                    break;
                }
                s(k);
              }
            }
          ),
          u && p && y && /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: (a) => {
                a.stopPropagation(), y();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r.jsx(X, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (typeof e == "string") {
    const { hover: f, bind: p } = Q();
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex",
        style: { ..._, paddingLeft: i * h },
        ...p,
        children: [
          t && /* @__PURE__ */ r.jsx(
            Z,
            {
              style: t.startsWith("[") ? m : R,
              label: t,
              color: b.colon,
              onRename: w,
              editable: u
            }
          ),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              value: e,
              disabled: !u,
              className: "min-w-2",
              style: {
                ..._,
                color: b.string,
                background: "transparent",
                border: "none",
                outline: "none",
                marginLeft: t ? 4 : 0
              },
              onChange: (d) => u && s(d.target.value)
            }
          ),
          u && f && /* @__PURE__ */ r.jsx(
            ce,
            {
              current: "string",
              onChangeType: (d) => {
                let a = null;
                switch (d) {
                  case "string":
                    a = "";
                    break;
                  case "number":
                    a = 0;
                    break;
                  case "boolean":
                    a = !1;
                    break;
                  case "null":
                    a = null;
                    break;
                  case "object":
                    a = {};
                    break;
                  case "array":
                    a = [];
                    break;
                }
                s(a);
              }
            }
          ),
          u && f && y && /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "ml-auto",
              onClick: (d) => {
                d.stopPropagation(), y();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r.jsx(X, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (typeof e == "number") {
    const { hover: f, bind: p } = Q();
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex",
        style: { ..._, paddingLeft: i * h },
        ...p,
        children: [
          t && /* @__PURE__ */ r.jsx(
            Z,
            {
              style: t.startsWith("[") ? m : R,
              label: t,
              color: b.colon,
              onRename: w,
              editable: u
            }
          ),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "number",
              value: String(e),
              disabled: !u,
              style: {
                ..._,
                color: b.number,
                background: "transparent",
                border: "none",
                outline: "none",
                width: "6em",
                marginLeft: t ? 4 : 0
              },
              onChange: (d) => {
                if (!u) return;
                const a = Number(d.target.value);
                isNaN(a) || s(a);
              }
            }
          ),
          u && f && /* @__PURE__ */ r.jsx(
            ce,
            {
              className: "ml-auto",
              current: "number",
              onChangeType: (d) => {
                let a = null;
                switch (d) {
                  case "string":
                    a = "";
                    break;
                  case "number":
                    a = 0;
                    break;
                  case "boolean":
                    a = !1;
                    break;
                  case "null":
                    a = null;
                    break;
                  case "object":
                    a = {};
                    break;
                  case "array":
                    a = [];
                    break;
                }
                s(a);
              }
            }
          ),
          u && f && y && /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: (d) => {
                d.stopPropagation(), y();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r.jsx(X, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (e === null)
    return /* @__PURE__ */ r.jsxs("div", { style: { ..._, paddingLeft: i * h }, children: [
      t && /* @__PURE__ */ r.jsx(
        Z,
        {
          style: t.startsWith("[") ? m : R,
          label: t,
          color: b.colon,
          onRename: w,
          editable: u
        }
      ),
      /* @__PURE__ */ r.jsx("span", { style: { color: b.null, marginLeft: t ? 4 : 0 }, children: "null" })
    ] });
  if (Array.isArray(e)) {
    const { hover: f, bind: p } = Q();
    return /* @__PURE__ */ r.jsxs("div", { style: { ..._ }, ...p, children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * h
          },
          onClick: B,
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "opacity-50", children: P ? /* @__PURE__ */ r.jsx(se, {}) : /* @__PURE__ */ r.jsx(ne, {}) }),
            t && /* @__PURE__ */ r.jsxs(
              "span",
              {
                className: "opacity-50",
                style: t.startsWith("[") ? m : R,
                children: [
                  t,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: b.type, marginLeft: 4 }, children: "Array" }),
            /* @__PURE__ */ r.jsxs("span", { className: "opacity-50", style: { color: b.brackets }, children: [
              "[",
              e.length,
              "]"
            ] }),
            f && L(
              c ? () => {
                y && y();
              } : void 0,
              () => {
                let d = null;
                if (e.length > 0) {
                  const a = e[0];
                  typeof a == "string" ? d = "" : typeof a == "number" ? d = 0 : typeof a == "boolean" ? d = !1 : Array.isArray(a) ? d = [] : typeof a == "object" && (d = {});
                }
                s([...e, d]);
              }
            )
          ]
        }
      ),
      !P && /* @__PURE__ */ r.jsx(
        "div",
        {
          style: {
            marginLeft: h,
            // смещение для бордера
            borderLeft: i >= 0 ? `1px solid ${b.border}` : "none"
          },
          children: e.map((d, a) => /* @__PURE__ */ r.jsx(
            de,
            {
              value: d,
              label: `[${a}]`,
              path: E,
              depth: i + 1,
              onChange: (k) => {
                const v = [...e];
                v[a] = k, s(v);
              },
              onDelete: () => {
                const k = [...e];
                k.splice(a, 1), s(k);
              },
              theme: o,
              expandedPaths: x,
              defaultCollapsed: g
            },
            a
          ))
        }
      )
    ] });
  }
  if (typeof e == "object" && !Array.isArray(e)) {
    const f = Object.entries(e), { hover: p, bind: d } = Q();
    return /* @__PURE__ */ r.jsxs("div", { style: { ..._ }, ...d, children: [
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * h
          },
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "opacity-50", onClick: B, children: P ? /* @__PURE__ */ r.jsx(se, {}) : /* @__PURE__ */ r.jsx(ne, {}) }),
            t && /* @__PURE__ */ r.jsx(
              Z,
              {
                className: "opacity-50",
                style: t.startsWith("[") ? m : R,
                label: t,
                color: b.colon,
                onRename: w,
                editable: u
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: b.type, marginLeft: 4 }, children: "Object" }),
            /* @__PURE__ */ r.jsx("span", { className: "opacity-50", style: { color: b.brackets }, children: "{" + f.length + "}" }),
            p && N(
              c ? () => {
                y && y();
              } : void 0
            )
          ]
        }
      ),
      A && /* @__PURE__ */ r.jsx(
        Me,
        {
          depth: i,
          step: h,
          color: b.string,
          onAdd: (a, k) => {
            let v;
            switch (k) {
              case "string":
                v = "";
                break;
              case "number":
                v = 0;
                break;
              case "boolean":
                v = !1;
                break;
              case "null":
                v = null;
                break;
              case "object":
                v = {};
                break;
              case "array":
                v = [];
                break;
            }
            s({ ...e, [a]: v }), I(!1);
          },
          onCancel: () => I(!1)
        }
      ),
      !P && /* @__PURE__ */ r.jsx(
        "div",
        {
          style: {
            marginLeft: h,
            borderLeft: i >= 0 ? `1px solid ${b.border}` : "none"
          },
          children: f.map(([a, k]) => /* @__PURE__ */ r.jsx(
            de,
            {
              value: k,
              label: a,
              path: E,
              depth: i + 1,
              onChange: (v) => s({ ...e, [a]: v }),
              onDelete: () => {
                const { [a]: v, ...F } = e;
                s(F);
              },
              onRename: (v, F) => {
                if (!(!F || v === F))
                  if (w) w(v, F);
                  else {
                    const { [v]: n, ...l } = e;
                    s({ ...l, [F]: n });
                  }
              },
              theme: o,
              expandedPaths: x,
              defaultCollapsed: g
            },
            a
          ))
        }
      )
    ] });
  }
  return null;
}
function Ye(e) {
  return /* @__PURE__ */ r.jsxs(Re, { editable: e.editable, children: [
    e.type === "pick" && /* @__PURE__ */ r.jsx(le, { ...e }),
    e.type !== "pick" && /* @__PURE__ */ r.jsx(de, { ...e })
  ] });
}
export {
  Ye as default
};
