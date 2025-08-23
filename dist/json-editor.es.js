import { jsx as r, jsxs as c } from "react/jsx-runtime";
import H, { createContext as lt, useContext as dt, useState as W, useMemo as et, useCallback as pt } from "react";
const rt = lt(null), nt = () => {
  const t = dt(rt);
  if (!t) throw new Error("JsonEditor must be inside JsonEditorProvider");
  return t;
}, ut = ({ children: t, editable: n = !0 }) => {
  const [e, o] = W(null);
  return /* @__PURE__ */ r(rt.Provider, { value: { editingId: e, setEditingId: o, editable: n }, children: t });
};
var ot = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Z = H.createContext && /* @__PURE__ */ H.createContext(ot), ft = ["attr", "size", "title"];
function yt(t, n) {
  if (t == null) return {};
  var e = gt(t, n), o, p;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (p = 0; p < i.length; p++)
      o = i[p], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (e[o] = t[o]);
  }
  return e;
}
function gt(t, n) {
  if (t == null) return {};
  var e = {};
  for (var o in t)
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      if (n.indexOf(o) >= 0) continue;
      e[o] = t[o];
    }
  return e;
}
function K() {
  return K = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, K.apply(this, arguments);
}
function D(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    n && (o = o.filter(function(p) {
      return Object.getOwnPropertyDescriptor(t, p).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function G(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? D(Object(e), !0).forEach(function(o) {
      mt(t, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : D(Object(e)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return t;
}
function mt(t, n, e) {
  return n = bt(n), n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t;
}
function bt(t) {
  var n = ht(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ht(t, n) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(t, n);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function it(t) {
  return t && t.map((n, e) => /* @__PURE__ */ H.createElement(n.tag, G({
    key: e
  }, n.attr), it(n.child)));
}
function V(t) {
  return (n) => /* @__PURE__ */ H.createElement(vt, K({
    attr: G({}, t.attr)
  }, n), it(t.child));
}
function vt(t) {
  var n = (e) => {
    var {
      attr: o,
      size: p,
      title: i
    } = t, m = yt(t, ft), b = p || e.size || "1em", f;
    return e.className && (f = e.className), t.className && (f = (f ? f + " " : "") + t.className), /* @__PURE__ */ H.createElement("svg", K({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, o, m, {
      className: f,
      style: G(G({
        color: t.color || e.color
      }, e.style), t.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ H.createElement("title", null, i), t.children);
  };
  return Z !== void 0 ? /* @__PURE__ */ H.createElement(Z.Consumer, null, (e) => n(e)) : n(ot);
}
function F(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" }, child: [] }] })(t);
}
function tt(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }, child: [] }] })(t);
}
function Y(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(t);
}
function q(t) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }, child: [] }] })(t);
}
const O = {
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
function st({
  onChange: t,
  setEditingId: n,
  value: e,
  fontSize: o,
  border: p
}) {
  return /* @__PURE__ */ c("span", { className: "mx-6", style: { display: "inline-flex", gap: 4 }, children: [
    /* @__PURE__ */ r(
      "button",
      {
        onClick: (i) => {
          i.stopPropagation(), t(!0), n(null);
        },
        style: {
          cursor: "pointer",
          border: `1px dashed ${p}`,
          borderRadius: 4,
          padding: "0 4px",
          fontSize: o,
          background: e === !0 ? "#a5f07a60" : "transparent",
          color: "#82f061",
          opacity: e === !1 ? 0.6 : 1
        },
        children: "✔"
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        onClick: (i) => {
          i.stopPropagation(), t(!1), n(null);
        },
        style: {
          cursor: "pointer",
          border: `1px dashed ${p}`,
          borderRadius: 4,
          padding: "0 4px",
          fontSize: o,
          background: e === !1 ? "#ed785e36" : "transparent",
          color: "red",
          opacity: e === !0 ? 0.6 : 1
        },
        children: "✖"
      }
    )
  ] });
}
function U({
  value: t,
  onChange: n,
  label: e,
  theme: o = O,
  path: p = "",
  depth: i = 0,
  onPick: m,
  pickedPath: b,
  expandedPaths: f,
  onToggle: L,
  defaultCollapsed: C = !0
}) {
  const [A, _] = W(C), { editingId: Q, setEditingId: B, editable: j } = nt(), l = o.step ?? 12, h = et(
    () => p ? p + "/" + (e ?? "root") : e ?? "root",
    [p, e]
  ), M = f?.includes(h) ?? !1, y = f ? !M : A, w = () => {
    f ? L?.(h) : _(!A);
  }, z = {
    fontSize: o.fontSize ?? O.fontSize,
    fontFamily: o.fontFamily ?? O.fontFamily,
    lineHeight: o.lineHeight ?? O.lineHeight
  }, u = { ...O.colors, ...o.colors }, k = {
    fontSize: z.fontSize,
    fontFamily: z.fontFamily,
    lineHeight: z.lineHeight
  }, E = {
    color: u.key,
    fontWeight: 300,
    fontStyle: "italic",
    ...k
  }, S = {
    color: u.index,
    fontWeight: 400,
    fontStyle: "normal",
    ...k
  }, J = b === h, P = () => m && /* @__PURE__ */ r(
    "input",
    {
      type: "radio",
      checked: !!J,
      readOnly: !0,
      onClick: (N) => {
        N.stopPropagation(), m(h, t);
      },
      style: {
        marginLeft: 8,
        cursor: "pointer",
        accentColor: u.pick
      }
    }
  );
  if (typeof t == "boolean") {
    const N = Q === h;
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex items-center",
        style: { ...k, paddingLeft: i * l },
        children: [
          e && /* @__PURE__ */ c("span", { style: e.startsWith("[") ? S : E, children: [
            e,
            /* @__PURE__ */ r("span", { style: { color: u.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r(
            "span",
            {
              style: {
                color: u.boolean,
                cursor: j ? "pointer" : "default",
                marginLeft: e ? 4 : 0
              },
              onClick: () => j && B(h),
              children: String(t)
            }
          ),
          P(),
          j && N && n && /* @__PURE__ */ r(
            st,
            {
              onChange: n,
              setEditingId: B,
              value: t,
              fontSize: z.fontSize,
              border: u.border
            }
          )
        ]
      }
    );
  }
  if (typeof t == "string")
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex items-center",
        style: { ...k, paddingLeft: i * l },
        children: [
          e && /* @__PURE__ */ c("span", { style: e.startsWith("[") ? S : E, children: [
            e,
            /* @__PURE__ */ r("span", { style: { color: u.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r(
            "input",
            {
              value: t,
              disabled: !j || !n,
              style: {
                ...k,
                color: u.string,
                background: "transparent",
                border: "none",
                outline: "none",
                marginLeft: e ? 4 : 0
              },
              onChange: (N) => j && n(N.target.value)
            }
          ),
          P()
        ]
      }
    );
  if (typeof t == "number")
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex items-center",
        style: { ...k, paddingLeft: i * l },
        children: [
          e && /* @__PURE__ */ c("span", { style: e.startsWith("[") ? S : E, children: [
            e,
            /* @__PURE__ */ r("span", { style: { color: u.index }, children: ":" })
          ] }),
          /* @__PURE__ */ r(
            "input",
            {
              type: "number",
              value: String(t),
              disabled: !j || !n,
              style: {
                ...k,
                color: u.number,
                background: "transparent",
                border: "none",
                outline: "none",
                width: "6em",
                marginLeft: e ? 4 : 0
              },
              onChange: (N) => {
                if (!j) return;
                const d = N.target.value;
                if (d === "" || d === "-")
                  n(0);
                else {
                  const g = Number(d);
                  isNaN(g) || n(g);
                }
              }
            }
          ),
          P()
        ]
      }
    );
  if (t === null)
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex items-center",
        style: { ...k, paddingLeft: i * l },
        children: [
          e && /* @__PURE__ */ c("span", { style: e.startsWith("[") ? S : E, children: [
            e,
            /* @__PURE__ */ r("span", { style: { color: u.colon }, children: ":" })
          ] }),
          /* @__PURE__ */ r("span", { style: { color: u.null, marginLeft: e ? 4 : 0 }, children: "null" }),
          P()
        ]
      }
    );
  if (Array.isArray(t))
    return /* @__PURE__ */ c("div", { style: { ...k }, children: [
      /* @__PURE__ */ c(
        "div",
        {
          onClick: w,
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * l
            // ✅ как в первом
          },
          children: [
            /* @__PURE__ */ r("div", { className: "opacity-50", children: y ? /* @__PURE__ */ r(q, {}) : /* @__PURE__ */ r(Y, {}) }),
            e && /* @__PURE__ */ c("span", { className: "opacity-50", style: e.startsWith("[") ? S : E, children: [
              e,
              ":"
            ] }),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: u.type, marginLeft: e ? 4 : 0 }, children: "Array" }),
            /* @__PURE__ */ c("span", { className: "opacity-50", style: { color: u.brackets }, children: [
              "[",
              t.length,
              "]"
            ] }),
            P()
          ]
        }
      ),
      !y && /* @__PURE__ */ r(
        "div",
        {
          style: {
            marginLeft: l,
            // ✅ смещение детей
            borderLeft: `1px solid ${u.border}`
          },
          children: t.map((N, d) => /* @__PURE__ */ r(
            U,
            {
              value: N,
              label: `[${d}]`,
              path: h,
              depth: i + 1,
              onChange: (g) => {
                const a = [...t];
                a[d] = g, n(a);
              },
              theme: o,
              onPick: m,
              pickedPath: b,
              expandedPaths: f,
              onToggle: L,
              defaultCollapsed: C
            },
            d
          ))
        }
      )
    ] });
  if (typeof t == "object") {
    const N = Object.entries(t);
    return /* @__PURE__ */ c("div", { style: { ...k }, children: [
      /* @__PURE__ */ c(
        "div",
        {
          onClick: w,
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * l
            // ✅ как в первом
          },
          children: [
            /* @__PURE__ */ r("div", { className: "opacity-50", children: y ? /* @__PURE__ */ r(q, {}) : /* @__PURE__ */ r(Y, {}) }),
            e && /* @__PURE__ */ c("span", { className: "opacity-50", style: e.startsWith("[") ? S : E, children: [
              e,
              ":"
            ] }),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: u.type, marginLeft: e ? 4 : 0 }, children: "Object" }),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: u.brackets }, children: "{" + N.length + "}" }),
            P()
          ]
        }
      ),
      !y && /* @__PURE__ */ r(
        "div",
        {
          style: {
            marginLeft: l,
            // ✅ смещение детей
            borderLeft: `1px solid ${u.border}`
          },
          children: N.map(([d, g]) => /* @__PURE__ */ r(
            U,
            {
              value: g,
              label: d,
              path: h,
              depth: i + 1,
              onChange: (a) => n({ ...t, [d]: a }),
              theme: o,
              onPick: m,
              pickedPath: b,
              expandedPaths: f,
              onToggle: L,
              defaultCollapsed: C
            },
            d
          ))
        }
      )
    ] });
  }
  return null;
}
function kt({
  depth: t,
  step: n,
  color: e,
  onAdd: o,
  onCancel: p
}) {
  const [i, m] = W(""), [b, f] = W("string"), L = pt(() => {
    i && (o(i, b), m(""));
  }, [i, b]);
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex gap-1",
      style: { marginLeft: t * n },
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            placeholder: "key",
            value: i,
            className: "rounded-sm pl-4 w-40",
            onChange: (C) => m(C.target.value),
            style: {
              border: `1px solid ${e}`,
              background: "transparent",
              color: e
            }
          }
        ),
        /* @__PURE__ */ c(
          "select",
          {
            className: "border-1 rounded-lg border-dashed",
            value: b,
            onChange: (C) => f(C.target.value),
            children: [
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "string", children: "string" }),
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "number", children: "number" }),
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "boolean", children: "boolean" }),
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "null", children: "null" }),
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "object", children: "object" }),
              /* @__PURE__ */ r("option", { className: "bg-[#373737] text-amber-50", value: "array", children: "array" })
            ]
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            className: "border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed ml-2",
            onClick: L,
            children: "✔"
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            className: "border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed",
            onClick: p,
            children: "✖"
          }
        )
      ]
    }
  );
}
function T({
  label: t,
  onRename: n,
  editable: e,
  style: o,
  className: p,
  color: i
}) {
  return /* @__PURE__ */ c(
    "span",
    {
      className: `flex ${p}`,
      style: o,
      children: [
        /* @__PURE__ */ r(
          "span",
          {
            contentEditable: e && !t.startsWith("["),
            suppressContentEditableWarning: !0,
            onBlur: (m) => {
              const b = m.currentTarget.textContent?.trim();
              e && n && b && b !== t ? n(t, b) : m.currentTarget.textContent = t;
            },
            style: {
              display: "inline-block",
              outline: "none",
              minWidth: "1ch"
            },
            children: t
          }
        ),
        /* @__PURE__ */ r("span", { style: { color: i }, children: ":" })
      ]
    }
  );
}
function xt(t) {
  return V({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z" }, child: [] }] })(t);
}
const Nt = ["string", "number", "boolean", "null", "object", "array"];
function R({ onChangeType: t, current: n, className: e }) {
  const [o, p] = W(!1);
  return /* @__PURE__ */ c(
    "div",
    {
      className: `items-center my-auto mr-2 ${e}`,
      style: { position: "relative", display: "inline-block" },
      children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: (i) => {
              i.stopPropagation(), p(!o);
            },
            style: {
              cursor: "pointer",
              background: "transparent",
              border: "none",
              color: "#93adcf9e"
            },
            children: /* @__PURE__ */ r(xt, { size: 12 })
          }
        ),
        o && /* @__PURE__ */ r(
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
            children: Nt.map((i) => /* @__PURE__ */ r(
              "div",
              {
                onClick: () => {
                  t(i), p(!1);
                },
                style: {
                  padding: "2px 6px",
                  fontSize: "0.8em",
                  cursor: "pointer",
                  background: n === i ? "#444" : "transparent",
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
function $() {
  const [t, n] = W(!1);
  return {
    hover: t,
    bind: {
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1)
    }
  };
}
function X({
  value: t,
  onChange: n,
  label: e,
  theme: o = O,
  path: p = "",
  depth: i = 0,
  expandedPaths: m,
  defaultCollapsed: b = !1,
  onDelete: f,
  onRename: L
}) {
  const [C, A] = W(!1), [_, Q] = W(b), { editingId: B, setEditingId: j, editable: l } = nt(), h = o.step ? o.step : 8, M = {
    fontSize: o.fontSize ?? O.fontSize,
    fontFamily: o.fontFamily ?? O.fontFamily,
    lineHeight: o.lineHeight ?? O.lineHeight
  }, y = { ...O.colors, ...o.colors }, w = {
    fontSize: M.fontSize,
    fontFamily: M.fontFamily,
    lineHeight: M.lineHeight
  }, z = {
    color: y.key,
    fontWeight: 300,
    fontStyle: "italic",
    ...w
  }, u = {
    color: y.index,
    fontWeight: 400,
    fontStyle: "normal",
    ...w
  }, k = et(
    () => p ? p + "/" + (e ?? "root") : e ?? "root",
    [p, e]
  ), E = m?.includes(k) ?? !1, S = m ? !E : _, J = () => {
    m || Q(!_);
  }, P = (d, g) => /* @__PURE__ */ c("span", { style: { display: "inline-flex", gap: 4, marginLeft: 8 }, children: [
    l && g && /* @__PURE__ */ r(
      "button",
      {
        className: "mr-1",
        onClick: (a) => {
          a.stopPropagation(), g();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "#6c6c6c"
        },
        children: /* @__PURE__ */ r(tt, { size: 16 })
      }
    ),
    l && d && /* @__PURE__ */ r(
      "button",
      {
        onClick: (a) => {
          a.stopPropagation(), d();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "tomato"
        },
        children: /* @__PURE__ */ r(F, { size: 16 })
      }
    )
  ] }), N = (d) => /* @__PURE__ */ c("span", { style: { display: "inline-flex", gap: 4, marginLeft: 8 }, children: [
    l && /* @__PURE__ */ r(
      "button",
      {
        className: "mr-1",
        onClick: (g) => {
          A(!0);
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "#6c6c6c"
        },
        children: /* @__PURE__ */ r(tt, { size: 16 })
      }
    ),
    l && d && /* @__PURE__ */ r(
      "button",
      {
        onClick: (g) => {
          g.stopPropagation(), d();
        },
        style: {
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "tomato"
        },
        children: /* @__PURE__ */ r(F, { size: 16 })
      }
    )
  ] });
  if (typeof t == "boolean") {
    const d = B === k, { hover: g, bind: a } = $();
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex",
        style: { ...w, paddingLeft: i * h },
        ...a,
        children: [
          e && /* @__PURE__ */ r(
            T,
            {
              style: e.startsWith("[") ? u : z,
              label: e,
              color: y.colon,
              onRename: L,
              editable: l
            }
          ),
          /* @__PURE__ */ r(
            "span",
            {
              style: {
                color: y.boolean,
                marginLeft: e ? 4 : 0,
                cursor: l ? "pointer" : "default"
              },
              onClick: () => {
                l && j(k);
              },
              children: String(t)
            }
          ),
          l && d && g && n && /* @__PURE__ */ r(
            st,
            {
              onChange: n,
              setEditingId: j,
              value: t,
              fontSize: M.fontSize,
              border: y.border
            }
          ),
          l && g && /* @__PURE__ */ r(
            R,
            {
              current: "boolean",
              className: "ml-auto",
              onChangeType: (s) => {
                let x = null;
                switch (s) {
                  case "string":
                    x = "";
                    break;
                  case "number":
                    x = 0;
                    break;
                  case "boolean":
                    x = !1;
                    break;
                  case "null":
                    x = null;
                    break;
                  case "object":
                    x = {};
                    break;
                  case "array":
                    x = [];
                    break;
                }
                n(x);
              }
            }
          ),
          l && g && f && /* @__PURE__ */ r(
            "button",
            {
              onClick: (s) => {
                s.stopPropagation(), f();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r(F, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (typeof t == "string") {
    const { hover: d, bind: g } = $();
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex",
        style: { ...w, paddingLeft: i * h },
        ...g,
        children: [
          e && /* @__PURE__ */ r(
            T,
            {
              style: e.startsWith("[") ? u : z,
              label: e,
              color: y.colon,
              onRename: L,
              editable: l
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              value: t,
              disabled: !l,
              className: "min-w-2",
              style: {
                ...w,
                color: y.string,
                background: "transparent",
                border: "none",
                outline: "none",
                marginLeft: e ? 4 : 0
              },
              onChange: (a) => l && n(a.target.value)
            }
          ),
          l && d && /* @__PURE__ */ r(
            R,
            {
              current: "string",
              onChangeType: (a) => {
                let s = null;
                switch (a) {
                  case "string":
                    s = "";
                    break;
                  case "number":
                    s = 0;
                    break;
                  case "boolean":
                    s = !1;
                    break;
                  case "null":
                    s = null;
                    break;
                  case "object":
                    s = {};
                    break;
                  case "array":
                    s = [];
                    break;
                }
                n(s);
              }
            }
          ),
          l && d && f && /* @__PURE__ */ r(
            "button",
            {
              className: "ml-auto",
              onClick: (a) => {
                a.stopPropagation(), f();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r(F, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (typeof t == "number") {
    const { hover: d, bind: g } = $();
    return /* @__PURE__ */ c(
      "div",
      {
        className: "flex",
        style: { ...w, paddingLeft: i * h },
        ...g,
        children: [
          e && /* @__PURE__ */ r(
            T,
            {
              style: e.startsWith("[") ? u : z,
              label: e,
              color: y.colon,
              onRename: L,
              editable: l
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              type: "number",
              value: String(t),
              disabled: !l,
              style: {
                ...w,
                color: y.number,
                background: "transparent",
                border: "none",
                outline: "none",
                width: "6em",
                marginLeft: e ? 4 : 0
              },
              onChange: (a) => {
                if (!l) return;
                const s = Number(a.target.value);
                isNaN(s) || n(s);
              }
            }
          ),
          l && d && /* @__PURE__ */ r(
            R,
            {
              className: "ml-auto",
              current: "number",
              onChangeType: (a) => {
                let s = null;
                switch (a) {
                  case "string":
                    s = "";
                    break;
                  case "number":
                    s = 0;
                    break;
                  case "boolean":
                    s = !1;
                    break;
                  case "null":
                    s = null;
                    break;
                  case "object":
                    s = {};
                    break;
                  case "array":
                    s = [];
                    break;
                }
                n(s);
              }
            }
          ),
          l && d && f && /* @__PURE__ */ r(
            "button",
            {
              onClick: (a) => {
                a.stopPropagation(), f();
              },
              style: {
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#f1aa9d9d"
              },
              children: /* @__PURE__ */ r(F, { size: 16 })
            }
          )
        ]
      }
    );
  }
  if (t === null)
    return /* @__PURE__ */ c("div", { style: { ...w, paddingLeft: i * h }, children: [
      e && /* @__PURE__ */ r(
        T,
        {
          style: e.startsWith("[") ? u : z,
          label: e,
          color: y.colon,
          onRename: L,
          editable: l
        }
      ),
      /* @__PURE__ */ r("span", { style: { color: y.null, marginLeft: e ? 4 : 0 }, children: "null" })
    ] });
  if (Array.isArray(t)) {
    const { hover: d, bind: g } = $();
    return /* @__PURE__ */ c("div", { style: { ...w }, ...g, children: [
      /* @__PURE__ */ c(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * h
          },
          onClick: J,
          children: [
            /* @__PURE__ */ r("div", { className: "opacity-50", children: S ? /* @__PURE__ */ r(q, {}) : /* @__PURE__ */ r(Y, {}) }),
            e && /* @__PURE__ */ c(
              "span",
              {
                className: "opacity-50",
                style: e.startsWith("[") ? u : z,
                children: [
                  e,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: y.type, marginLeft: 4 }, children: "Array" }),
            /* @__PURE__ */ c("span", { className: "opacity-50", style: { color: y.brackets }, children: [
              "[",
              t.length,
              "]"
            ] }),
            d && P(
              p ? () => {
                f && f();
              } : void 0,
              () => {
                let a = null;
                if (t.length > 0) {
                  const s = t[0];
                  typeof s == "string" ? a = "" : typeof s == "number" ? a = 0 : typeof s == "boolean" ? a = !1 : Array.isArray(s) ? a = [] : typeof s == "object" && (a = {});
                }
                n([...t, a]);
              }
            )
          ]
        }
      ),
      !S && /* @__PURE__ */ r(
        "div",
        {
          style: {
            marginLeft: h,
            // смещение для бордера
            borderLeft: i >= 0 ? `1px solid ${y.border}` : "none"
          },
          children: t.map((a, s) => /* @__PURE__ */ r(
            X,
            {
              value: a,
              label: `[${s}]`,
              path: k,
              depth: i + 1,
              onChange: (x) => {
                const v = [...t];
                v[s] = x, n(v);
              },
              onDelete: () => {
                const x = [...t];
                x.splice(s, 1), n(x);
              },
              theme: o,
              expandedPaths: m,
              defaultCollapsed: b
            },
            s
          ))
        }
      )
    ] });
  }
  if (typeof t == "object" && !Array.isArray(t)) {
    const d = Object.entries(t), { hover: g, bind: a } = $();
    return /* @__PURE__ */ c("div", { style: { ...w }, ...a, children: [
      /* @__PURE__ */ c(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: i * h
          },
          children: [
            /* @__PURE__ */ r("div", { className: "opacity-50", onClick: J, children: S ? /* @__PURE__ */ r(q, {}) : /* @__PURE__ */ r(Y, {}) }),
            e && /* @__PURE__ */ r(
              T,
              {
                className: "opacity-50",
                style: e.startsWith("[") ? u : z,
                label: e,
                color: y.colon,
                onRename: L,
                editable: l
              }
            ),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: y.type, marginLeft: 4 }, children: "Object" }),
            /* @__PURE__ */ r("span", { className: "opacity-50", style: { color: y.brackets }, children: "{" + d.length + "}" }),
            g && N(
              p ? () => {
                f && f();
              } : void 0
            )
          ]
        }
      ),
      C && /* @__PURE__ */ r(
        kt,
        {
          depth: i,
          step: h,
          color: y.string,
          onAdd: (s, x) => {
            let v;
            switch (x) {
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
            n({ ...t, [s]: v }), A(!1);
          },
          onCancel: () => A(!1)
        }
      ),
      !S && /* @__PURE__ */ r(
        "div",
        {
          style: {
            marginLeft: h,
            borderLeft: i >= 0 ? `1px solid ${y.border}` : "none"
          },
          children: d.map(([s, x]) => /* @__PURE__ */ r(
            X,
            {
              value: x,
              label: s,
              path: k,
              depth: i + 1,
              onChange: (v) => n({ ...t, [s]: v }),
              onDelete: () => {
                const { [s]: v, ...I } = t;
                n(I);
              },
              onRename: (v, I) => {
                if (!(!I || v === I))
                  if (L) L(v, I);
                  else {
                    const { [v]: at, ...ct } = t;
                    n({ ...ct, [I]: at });
                  }
              },
              theme: o,
              expandedPaths: m,
              defaultCollapsed: b
            },
            s
          ))
        }
      )
    ] });
  }
  return null;
}
function zt(t) {
  return /* @__PURE__ */ c(ut, { editable: t.editable, children: [
    t.type === "pick" && /* @__PURE__ */ r(U, { ...t }),
    t.type !== "pick" && /* @__PURE__ */ r(X, { ...t })
  ] });
}
export {
  zt as default
};
