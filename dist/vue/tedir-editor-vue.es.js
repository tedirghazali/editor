import { openBlock as r, createElementBlock as d, createElementVNode as o, defineComponent as D, ref as h, computed as O, onMounted as R, onUpdated as P, watch as N, normalizeClass as v, createVNode as m, createCommentVNode as j, normalizeStyle as B, unref as J, toDisplayString as T } from "vue";
var U = function(l) {
  l === void 0 && (l = 0);
  var i = "", _ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", s = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, "")));
  Number(l) >= 1 && (i += String(Number(l) + 1));
  for (var c = 0; c < s.length; c++)
    i += _.charAt(Math.floor(Math.random() * _.length)), i += s.charAt(c);
  return i;
};
const p = (l, i) => {
  const _ = l.__vccOpts || l;
  for (const [s, c] of i)
    _[s] = c;
  return _;
}, q = {}, Z = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-paragraph",
  viewBox: "0 0 16 16"
}, F = /* @__PURE__ */ o("path", { d: "M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" }, null, -1), G = [
  F
];
function K(l, i) {
  return r(), d("svg", Z, G);
}
const Q = /* @__PURE__ */ p(q, [["render", K]]), W = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h1",
  viewBox: "0 0 16 16"
}, Y = /* @__PURE__ */ o("path", { d: "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" }, null, -1), ee = [
  Y
];
function te(l, i) {
  return r(), d("svg", X, ee);
}
const ne = /* @__PURE__ */ p(W, [["render", te]]), oe = {}, le = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h2",
  viewBox: "0 0 16 16"
}, ae = /* @__PURE__ */ o("path", { d: "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" }, null, -1), ie = [
  ae
];
function se(l, i) {
  return r(), d("svg", le, ie);
}
const ce = /* @__PURE__ */ p(oe, [["render", se]]), re = {}, de = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h3",
  viewBox: "0 0 16 16"
}, ue = /* @__PURE__ */ o("path", { d: "M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" }, null, -1), he = [
  ue
];
function ve(l, i) {
  return r(), d("svg", de, he);
}
const ge = /* @__PURE__ */ p(re, [["render", ve]]), pe = {}, _e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-bold",
  viewBox: "0 0 16 16"
}, me = /* @__PURE__ */ o("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" }, null, -1), fe = [
  me
];
function we(l, i) {
  return r(), d("svg", _e, fe);
}
const $e = /* @__PURE__ */ p(pe, [["render", we]]), be = {}, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-italic",
  viewBox: "0 0 16 16"
}, ye = /* @__PURE__ */ o("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }, null, -1), Ve = [
  ye
];
function Ce(l, i) {
  return r(), d("svg", xe, Ve);
}
const He = /* @__PURE__ */ p(be, [["render", Ce]]), ke = {}, Te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-underline",
  viewBox: "0 0 16 16"
}, Ee = /* @__PURE__ */ o("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" }, null, -1), Me = [
  Ee
];
function ze(l, i) {
  return r(), d("svg", Te, Me);
}
const Ae = /* @__PURE__ */ p(ke, [["render", ze]]), Ie = {}, Ne = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-strikethrough",
  viewBox: "0 0 16 16"
}, Be = /* @__PURE__ */ o("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" }, null, -1), Se = [
  Be
];
function Le(l, i) {
  return r(), d("svg", Ne, Se);
}
const De = /* @__PURE__ */ p(Ie, [["render", Le]]), Oe = { class: "editorToolbar" }, Re = { class: "editorMenu" }, Pe = {
  key: 0,
  class: "editorMenu"
}, je = ["value"], Je = ["srcdoc"], Ue = { class: "editorStatusbar" }, qe = { class: "editorMenu" }, Ze = { class: "editorItem plain" }, Fe = { class: "editorMenu" }, Ge = { class: "editorItem plain" }, Ke = /* @__PURE__ */ D({
  __name: "TextEditor",
  props: {
    modelValue: { default: "<p>Start writing...</p>" },
    height: { default: "300px" },
    showCode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: i }) {
    const _ = l, s = h(""), c = h(""), u = h([]), g = h(null), $ = h(null), w = h(null), C = h(null), b = h(_.modelValue || "<p></p>"), f = h("text");
    U();
    const S = O(() => `<!doctype html>
<html>
  <head>
    <style>
      body { height: 100%; padding: 15px; margin: 0px; }
      
      [data-tag=p] { margin-top: 0.5rem; margin-bottom: 0.5rem; }
      
      [data-tag=h1], 
      [data-tag=h2], 
      [data-tag=h3] { margin-top: 0.5rem; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; }
    
      [data-tag=h1] { font-size: 32px; }
    
      [data-tag=h2] { font-size: 24px; }
    
      [data-tag=h3] { font-size: 16px; }
    
      [data-tag=b],
      [data-tag=strong] { font-weight: bolder; }
    
      [data-tag=i],
      [data-tag=em] { font-style: italic; }
    
      [data-tag=u] { text-decoration: underline; }
    
      [data-tag=s] { text-decoration: line-through; }
    </style>
  </head>
  <body contenteditable="true" spellcheck="false">
    ${b.value.replace(/\<(p|h1|h2|h3)\>/g, '<div data-tag="$1">').replace(/\<\/(p|h1|h2|h3)\>/g, "</div>").replace(/\<(b|i|u|s)\>/g, '<span data-tag="$1">').replace(/\<\/(b|i|u|s)\>/g, "</span>")}
  </body>
</html>`);
    R(() => {
      setTimeout(() => {
        if (g.value !== null) {
          const t = g.value.contentDocument, e = [].slice.call(t.body.children);
          for (let n of e)
            n.addEventListener("click", (a) => {
              a.preventDefault(), E(a.target), H(n.children);
            });
          t.addEventListener("selectionchange", z);
        }
      }, 200);
    }), P(() => {
      setTimeout(() => {
        if (g.value !== null) {
          const t = g.value.contentDocument, e = [].slice.call(t.body.children);
          for (let n of e)
            n.addEventListener("click", (a) => {
              a.preventDefault(), E(a.target), H(n.children);
            });
          t.addEventListener("selectionchange", z);
        }
      }, 200);
    }), N(f, () => {
      b.value = _.modelValue;
    }), N(b, () => {
      y();
    });
    const E = (t) => {
      (t == null ? void 0 : t.tagName.toLowerCase()) === "div" && ($.value = t, s.value = t.getAttribute("data-tag"), u.value = []);
    }, x = () => {
      $.value !== null && $.value.tagName.toLowerCase() === "div" && ($.value.setAttribute("data-tag", s.value), y());
    }, H = (t) => {
      const e = [].slice.call(t);
      for (let n of e)
        n.addEventListener("click", (a) => {
          a.preventDefault(), a.stopPropagation(), u.value = [], L(a.target.parentElement), u.value.push(a.target.getAttribute("data-tag")), w.value = a.target, H(n.children);
        });
    }, L = (t) => {
      t.tagName.toLowerCase() !== "div" && u.value.unshift(t.getAttribute("data-tag"));
    }, M = h(null), y = () => {
      clearTimeout(M.value), M.value = setTimeout(() => {
        if (g.value !== null) {
          const n = [].slice.call(g.value.contentDocument.body.children).map((a) => {
            const I = a.getAttribute("data-tag");
            return `<${I}>${k(a.childNodes)}</${I}>`;
          }).join(`
`).replaceAll("<null></null>", "").replaceAll("<null>", "<p>").replaceAll("</null>", "</p>");
          i("update:modelValue", n);
        }
      }, 300);
    }, k = (t) => {
      let e = "";
      for (let n of t)
        if (n.nodeName === "#text")
          e = e + n.nodeValue;
        else if (n.childNodes) {
          const a = n.getAttribute("data-tag");
          a === "span" ? e = e + k(n.childNodes) : e = e + `<${a}>${k(n.childNodes)}</${a}>`;
        }
      return e;
    }, z = (t) => {
      c.value = "";
      const e = g.value.contentDocument.getSelection();
      (Number((e == null ? void 0 : e.anchorOffset) || 0) !== 0 && Number((e == null ? void 0 : e.focusOffset) || 0) !== 0 || Number((e == null ? void 0 : e.anchorOffset) || 0) < Number((e == null ? void 0 : e.focusOffset) || 0)) && (C.value = e);
    }, V = () => {
      if (C.value !== null) {
        const t = C.value.getRangeAt(0);
        if (t.toString().length >= 2) {
          const e = g.value.contentDocument.createElement("span");
          e.setAttribute("data-tag", c.value), t.surroundContents(e);
        } else
          w.value !== null && (w.value.getAttribute("data-tag") === "span" ? A(w.value.parentElement) : w.value.setAttribute("data-tag", "span"));
        y();
      }
    }, A = (t) => {
      ["b", "i", "u", "s"].includes(t.getAttribute("data-tag")) && (t.setAttribute("data-tag", "span"), A(t));
    };
    return (t, e) => (r(), d("div", {
      class: "editor editorText tedirEditor",
      onMouseout: y
    }, [
      o("div", Oe, [
        o("ul", Re, [
          o("li", {
            class: v(["editorItem", s.value === "p" ? "active" : ""]),
            onClick: e[0] || (e[0] = (n) => {
              s.value = "p", x();
            })
          }, [
            m(Q)
          ], 2),
          o("li", {
            class: v(["editorItem", s.value === "h1" ? "active" : ""]),
            onClick: e[1] || (e[1] = (n) => {
              s.value = "h1", x();
            })
          }, [
            m(ne)
          ], 2),
          o("li", {
            class: v(["editorItem", s.value === "h2" ? "active" : ""]),
            onClick: e[2] || (e[2] = (n) => {
              s.value = "h2", x();
            })
          }, [
            m(ce)
          ], 2),
          o("li", {
            class: v(["editorItem", s.value === "h3" ? "active" : ""]),
            onClick: e[3] || (e[3] = (n) => {
              s.value = "h3", x();
            })
          }, [
            m(ge)
          ], 2),
          o("li", {
            class: v(["editorItem", u.value.includes("b") ? "active" : ""]),
            onClick: e[4] || (e[4] = (n) => {
              c.value = "b", V();
            })
          }, [
            m($e)
          ], 2),
          o("li", {
            class: v(["editorItem", u.value.includes("i") ? "active" : ""]),
            onClick: e[5] || (e[5] = (n) => {
              c.value = "i", V();
            })
          }, [
            m(He)
          ], 2),
          o("li", {
            class: v(["editorItem", u.value.includes("u") ? "active" : ""]),
            onClick: e[6] || (e[6] = (n) => {
              c.value = "u", V();
            })
          }, [
            m(Ae)
          ], 2),
          o("li", {
            class: v(["editorItem", u.value.includes("s") ? "active" : ""]),
            onClick: e[7] || (e[7] = (n) => {
              c.value = "s", V();
            })
          }, [
            m(De)
          ], 2)
        ]),
        l.showCode === !0 ? (r(), d("ul", Pe, [
          o("li", {
            class: v(["editorItem", { active: f.value === "text" }]),
            onClick: e[8] || (e[8] = (n) => f.value = "text")
          }, "Editor", 2),
          o("li", {
            class: v(["editorItem", { active: f.value === "html" }]),
            onClick: e[9] || (e[9] = (n) => f.value = "html")
          }, "HTML", 2)
        ])) : j("", !0)
      ]),
      l.showCode === !0 && f.value === "html" ? (r(), d("textarea", {
        key: 0,
        class: "editorContent",
        value: l.modelValue,
        style: B({ height: l.height }),
        readonly: ""
      }, null, 12, je)) : (r(), d("iframe", {
        key: 1,
        ref_key: "editorContentRef",
        ref: g,
        src: "about:blank",
        srcdoc: J(S),
        class: "editorContent",
        style: B({ height: l.height })
      }, null, 12, Je)),
      o("div", Ue, [
        o("ul", qe, [
          o("li", Ze, T(s.value) + " " + T(u.value.length >= 1 ? "\u203A " + u.value.join(" \u203A ") : ""), 1)
        ]),
        o("ul", Fe, [
          o("li", Ge, "Total: " + T(String(b.value).split(" ").length) + " words", 1)
        ])
      ])
    ], 32));
  }
});
const We = /* @__PURE__ */ p(Ke, [["__scopeId", "data-v-9504dd82"]]);
export {
  We as TextEditor
};
