import { openBlock as r, createElementBlock as d, createElementVNode as e, defineComponent as E, ref as _, computed as N, onMounted as L, onUpdated as I, normalizeClass as u, createVNode as g, createCommentVNode as S, normalizeStyle as T, unref as A, toDisplayString as z } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var D = function(n) {
  n === void 0 && (n = 0);
  var l = "", m = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", i = String(Math.abs(new Date().valueOf()));
  Number(n) >= 1 && (l += String(Number(n) + 1));
  for (var a = 0; a < i.length; a++)
    l += m.charAt(Math.floor(Math.random() * m.length)), l += i.charAt(a);
  return l;
};
const v = (n, l) => {
  const m = n.__vccOpts || n;
  for (const [i, a] of l)
    m[i] = a;
  return m;
}, O = {}, R = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-paragraph",
  viewBox: "0 0 16 16"
}, U = /* @__PURE__ */ e("path", { d: "M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" }, null, -1), j = [
  U
];
function q(n, l) {
  return r(), d("svg", R, j);
}
const P = /* @__PURE__ */ v(O, [["render", q]]), W = {}, F = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h1",
  viewBox: "0 0 16 16"
}, G = /* @__PURE__ */ e("path", { d: "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" }, null, -1), J = [
  G
];
function K(n, l) {
  return r(), d("svg", F, J);
}
const Q = /* @__PURE__ */ v(W, [["render", K]]), X = {}, Y = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h2",
  viewBox: "0 0 16 16"
}, Z = /* @__PURE__ */ e("path", { d: "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" }, null, -1), tt = [
  Z
];
function et(n, l) {
  return r(), d("svg", Y, tt);
}
const nt = /* @__PURE__ */ v(X, [["render", et]]), ot = {}, lt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h3",
  viewBox: "0 0 16 16"
}, it = /* @__PURE__ */ e("path", { d: "M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" }, null, -1), at = [
  it
];
function st(n, l) {
  return r(), d("svg", lt, at);
}
const ct = /* @__PURE__ */ v(ot, [["render", st]]), rt = {}, dt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-bold",
  viewBox: "0 0 16 16"
}, ht = /* @__PURE__ */ e("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" }, null, -1), ut = [
  ht
];
function vt(n, l) {
  return r(), d("svg", dt, ut);
}
const _t = /* @__PURE__ */ v(rt, [["render", vt]]), gt = {}, mt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-italic",
  viewBox: "0 0 16 16"
}, ft = /* @__PURE__ */ e("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }, null, -1), pt = [
  ft
];
function wt(n, l) {
  return r(), d("svg", mt, pt);
}
const $t = /* @__PURE__ */ v(gt, [["render", wt]]), bt = {}, xt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-underline",
  viewBox: "0 0 16 16"
}, yt = /* @__PURE__ */ e("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" }, null, -1), Ct = [
  yt
];
function Vt(n, l) {
  return r(), d("svg", xt, Ct);
}
const Ht = /* @__PURE__ */ v(bt, [["render", Vt]]), kt = {}, Mt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-strikethrough",
  viewBox: "0 0 16 16"
}, Tt = /* @__PURE__ */ e("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" }, null, -1), zt = [
  Tt
];
function Bt(n, l) {
  return r(), d("svg", Mt, zt);
}
const Et = /* @__PURE__ */ v(kt, [["render", Bt]]), Nt = { class: "editor editorText tedirEditor" }, Lt = { class: "editorToolbar" }, It = { class: "editorMenu" }, St = {
  key: 0,
  class: "editorMenu"
}, At = ["value"], Dt = ["srcdoc"], Ot = { class: "editorStatusbar" }, Rt = { class: "editorMenu" }, Ut = { class: "editorItem plain" }, jt = { class: "editorMenu" }, qt = { class: "editorItem plain" }, Pt = /* @__PURE__ */ E({
  __name: "TextEditor",
  props: {
    modelValue: { default: "<p></p>" },
    height: { default: "300px" },
    showCode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: l }) {
    const m = n, i = _("p"), a = _(""), h = _(null), p = _(null), b = _(null), x = _(m.modelValue || "<p></p>"), f = _("text");
    D();
    const B = N(() => `<!doctype html>
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
  <body contenteditable="true">
    ${x.value.replace(/\<(p|h1|h2|h3)\>/g, '<div data-tag="$1">').replace(/\<\/(p|h1|h2|h3)\>/g, "</div>").replace(/\<(b|i|u|s)\>/g, '<span data-tag="$1">').replace(/\<\/(b|i|u|s)\>/g, "</span>")}
  </body>
</html>`);
    L(() => {
      if (h.value !== null) {
        const o = h.value.contentDocument, t = [].slice.call(o.body.children);
        for (let c of t)
          c.addEventListener("click", y);
        o.addEventListener("selectionchange", k);
      }
    }), I(() => {
      if (h.value !== null) {
        const o = h.value.contentDocument, t = [].slice.call(o.body.children);
        for (let c of t)
          c.addEventListener("click", y);
        o.addEventListener("selectionchange", k);
      }
    });
    const y = (o) => {
      o.target.tagName.toLowerCase() === "div" && (p.value = o.target, i.value = o.target.getAttribute("data-tag"));
    }, w = () => {
      p.value !== null && p.value.tagName.toLowerCase() === "div" && (p.value.setAttribute("data-tag", i.value), V());
    }, C = _(null), V = () => {
      clearTimeout(C.value), C.value = setTimeout(() => {
        if (h.value !== null) {
          const c = [].slice.call(h.value.contentDocument.body.children).map((s) => {
            const M = s.getAttribute("data-tag");
            return `<${M}>${H(s.childNodes)}</${M}>`;
          }).join(`
`).replaceAll("<null></null>", "");
          l("update:modelValue", c);
        }
      }, 300);
    }, H = (o) => {
      let t = "";
      for (let c of o)
        if (c.nodeName === "#text")
          t = t + c.nodeValue;
        else if (c.childNodes) {
          const s = c.getAttribute("data-tag");
          t = t + `<${s}>${H(c.childNodes)}</${s}>`;
        }
      return t;
    }, k = (o) => {
      a.value = "";
      const t = h.value.contentDocument.getSelection();
      (Number((t == null ? void 0 : t.anchorOffset) || 0) !== 0 && Number((t == null ? void 0 : t.focusOffset) || 0) !== 0 || Number((t == null ? void 0 : t.anchorOffset) || 0) < Number((t == null ? void 0 : t.focusOffset) || 0)) && (b.value = t);
    }, $ = () => {
      if (b.value !== null) {
        const o = b.value.getRangeAt(0), t = h.value.contentDocument.createElement("span");
        t.setAttribute("data-tag", a.value), o.surroundContents(t), V();
      }
    };
    return (o, t) => {
      var c;
      return r(), d("div", Nt, [
        e("div", Lt, [
          e("ul", It, [
            e("li", {
              class: u(["editorItem", i.value === "p" ? "active" : ""]),
              onClick: t[0] || (t[0] = (s) => {
                i.value = "p", w();
              })
            }, [
              g(P)
            ], 2),
            e("li", {
              class: u(["editorItem", i.value === "h1" ? "active" : ""]),
              onClick: t[1] || (t[1] = (s) => {
                i.value = "h1", w();
              })
            }, [
              g(Q)
            ], 2),
            e("li", {
              class: u(["editorItem", i.value === "h2" ? "active" : ""]),
              onClick: t[2] || (t[2] = (s) => {
                i.value = "h2", w();
              })
            }, [
              g(nt)
            ], 2),
            e("li", {
              class: u(["editorItem", i.value === "h3" ? "active" : ""]),
              onClick: t[3] || (t[3] = (s) => {
                i.value = "h3", w();
              })
            }, [
              g(ct)
            ], 2),
            e("li", {
              class: u(["editorItem", a.value === "b" ? "active" : ""]),
              onClick: t[4] || (t[4] = (s) => {
                a.value = "b", $();
              })
            }, [
              g(_t)
            ], 2),
            e("li", {
              class: u(["editorItem", a.value === "i" ? "active" : ""]),
              onClick: t[5] || (t[5] = (s) => {
                a.value = "i", $();
              })
            }, [
              g($t)
            ], 2),
            e("li", {
              class: u(["editorItem", a.value === "u" ? "active" : ""]),
              onClick: t[6] || (t[6] = (s) => {
                a.value = "u", $();
              })
            }, [
              g(Ht)
            ], 2),
            e("li", {
              class: u(["editorItem", a.value === "s" ? "active" : ""]),
              onClick: t[7] || (t[7] = (s) => {
                a.value = "s", $();
              })
            }, [
              g(Et)
            ], 2)
          ]),
          n.showCode === !0 ? (r(), d("ul", St, [
            e("li", {
              class: u(["editorItem", { active: f.value === "text" }]),
              onClick: t[8] || (t[8] = (s) => f.value = "text")
            }, "Editor", 2),
            e("li", {
              class: u(["editorItem", { active: f.value === "html" }]),
              onClick: t[9] || (t[9] = (s) => f.value = "html")
            }, "HTML", 2)
          ])) : S("", !0)
        ]),
        n.showCode === !0 && f.value === "html" ? (r(), d("textarea", {
          key: 0,
          class: "editorContent",
          value: (c = h.value) == null ? void 0 : c.contentWindow.document.body.innerHTML,
          style: T({ height: n.height }),
          readonly: ""
        }, null, 12, At)) : (r(), d("iframe", {
          key: 1,
          ref_key: "editorContentRef",
          ref: h,
          src: "about:blank",
          srcdoc: A(B),
          class: "editorContent",
          style: T({ height: n.height })
        }, null, 12, Dt)),
        e("div", Ot, [
          e("ul", Rt, [
            e("li", Ut, z(i.value) + " > Status", 1)
          ]),
          e("ul", jt, [
            e("li", qt, "Total: " + z(String(x.value).split(" ").length) + " words", 1)
          ])
        ])
      ]);
    };
  }
});
const Ft = /* @__PURE__ */ v(Pt, [["__scopeId", "data-v-e3c47aed"]]);
export {
  Ft as TextEditor
};
