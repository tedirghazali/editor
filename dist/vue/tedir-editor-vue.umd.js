(function(h,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(h=typeof globalThis<"u"?globalThis:h||self,e(h.TedirEditor={},h.Vue))})(this,function(h,e){"use strict";/*! *****************************************************************************
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
    ***************************************************************************** */var x=function(o){o===void 0&&(o=0);var l="",m="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a=String(Math.abs(new Date().valueOf()));Number(o)>=1&&(l+=String(Number(o)+1));for(var c=0;c<a.length;c++)l+=m.charAt(Math.floor(Math.random()*m.length)),l+=a.charAt(c);return l};const d=(o,l)=>{const m=o.__vccOpts||o;for(const[a,c]of l)m[a]=c;return m},C={},N={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-paragraph",viewBox:"0 0 16 16"},y=[e.createElementVNode("path",{d:"M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"},null,-1)];function B(o,l){return e.openBlock(),e.createElementBlock("svg",N,y)}const H=d(C,[["render",B]]),z={},T={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-h1",viewBox:"0 0 16 16"},M=[e.createElementVNode("path",{d:"M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"},null,-1)];function L(o,l){return e.openBlock(),e.createElementBlock("svg",T,M)}const S=d(z,[["render",L]]),I={},A={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-h2",viewBox:"0 0 16 16"},D=[e.createElementVNode("path",{d:"M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"},null,-1)];function O(o,l){return e.openBlock(),e.createElementBlock("svg",A,D)}const R=d(I,[["render",O]]),j={},q={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-h3",viewBox:"0 0 16 16"},P=[e.createElementVNode("path",{d:"M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"},null,-1)];function U(o,l){return e.openBlock(),e.createElementBlock("svg",q,P)}const W=d(j,[["render",U]]),F={},G={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-bold",viewBox:"0 0 16 16"},J=[e.createElementVNode("path",{d:"M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"},null,-1)];function K(o,l){return e.openBlock(),e.createElementBlock("svg",G,J)}const Q=d(F,[["render",K]]),X={},Y={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-italic",viewBox:"0 0 16 16"},Z=[e.createElementVNode("path",{d:"M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"},null,-1)];function ee(o,l){return e.openBlock(),e.createElementBlock("svg",Y,Z)}const te=d(X,[["render",ee]]),oe={},ne={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-underline",viewBox:"0 0 16 16"},le=[e.createElementVNode("path",{d:"M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"},null,-1)];function ae(o,l){return e.openBlock(),e.createElementBlock("svg",ne,le)}const ce=d(oe,[["render",ae]]),ie={},se={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-type-strikethrough",viewBox:"0 0 16 16"},re=[e.createElementVNode("path",{d:"M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"},null,-1)];function de(o,l){return e.openBlock(),e.createElementBlock("svg",se,re)}const he=d(ie,[["render",de]]),me={class:"editor editorText tedirEditor"},_e={class:"editorToolbar"},fe={class:"editorMenu"},ge={key:0,class:"editorMenu"},ue=["value"],pe=["srcdoc"],Ve={class:"editorStatusbar"},we={class:"editorMenu"},$e={class:"editorItem plain"},Ee={class:"editorMenu"},be={class:"editorItem plain"},ve=e.defineComponent({__name:"TextEditor",props:{modelValue:{default:"<p></p>"},height:{default:"300px"},showCode:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:l}){const m=o,a=e.ref("p"),c=e.ref(""),r=e.ref(null),f=e.ref(null),p=e.ref(null),V=e.ref(m.modelValue||"<p></p>"),_=e.ref("text");x();const xe=e.computed(()=>`<!doctype html>
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
    ${V.value.replace(/\<(p|h1|h2|h3)\>/g,'<div data-tag="$1">').replace(/\<\/(p|h1|h2|h3)\>/g,"</div>").replace(/\<(b|i|u|s)\>/g,'<span data-tag="$1">').replace(/\<\/(b|i|u|s)\>/g,"</span>")}
  </body>
</html>`);e.onMounted(()=>{if(r.value!==null){const n=r.value.contentDocument,t=[].slice.call(n.body.children);for(let s of t)s.addEventListener("click",w);n.addEventListener("selectionchange",v)}}),e.onUpdated(()=>{if(r.value!==null){const n=r.value.contentDocument,t=[].slice.call(n.body.children);for(let s of t)s.addEventListener("click",w);n.addEventListener("selectionchange",v)}});const w=n=>{n.target.tagName.toLowerCase()==="div"&&(f.value=n.target,a.value=n.target.getAttribute("data-tag"))},g=()=>{f.value!==null&&f.value.tagName.toLowerCase()==="div"&&(f.value.setAttribute("data-tag",a.value),E())},$=e.ref(null),E=()=>{clearTimeout($.value),$.value=setTimeout(()=>{if(r.value!==null){const s=[].slice.call(r.value.contentDocument.body.children).map(i=>{const k=i.getAttribute("data-tag");return`<${k}>${b(i.childNodes)}</${k}>`}).join(`
`).replaceAll("<null></null>","");l("update:modelValue",s)}},300)},b=n=>{let t="";for(let s of n)if(s.nodeName==="#text")t=t+s.nodeValue;else if(s.childNodes){const i=s.getAttribute("data-tag");t=t+`<${i}>${b(s.childNodes)}</${i}>`}return t},v=n=>{c.value="";const t=r.value.contentDocument.getSelection();(Number((t==null?void 0:t.anchorOffset)||0)!==0&&Number((t==null?void 0:t.focusOffset)||0)!==0||Number((t==null?void 0:t.anchorOffset)||0)<Number((t==null?void 0:t.focusOffset)||0))&&(p.value=t)},u=()=>{if(p.value!==null){const n=p.value.getRangeAt(0),t=r.value.contentDocument.createElement("span");t.setAttribute("data-tag",c.value),n.surroundContents(t),E()}};return(n,t)=>{var s;return e.openBlock(),e.createElementBlock("div",me,[e.createElementVNode("div",_e,[e.createElementVNode("ul",fe,[e.createElementVNode("li",{class:e.normalizeClass(["editorItem",a.value==="p"?"active":""]),onClick:t[0]||(t[0]=i=>{a.value="p",g()})},[e.createVNode(H)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",a.value==="h1"?"active":""]),onClick:t[1]||(t[1]=i=>{a.value="h1",g()})},[e.createVNode(S)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",a.value==="h2"?"active":""]),onClick:t[2]||(t[2]=i=>{a.value="h2",g()})},[e.createVNode(R)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",a.value==="h3"?"active":""]),onClick:t[3]||(t[3]=i=>{a.value="h3",g()})},[e.createVNode(W)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",c.value==="b"?"active":""]),onClick:t[4]||(t[4]=i=>{c.value="b",u()})},[e.createVNode(Q)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",c.value==="i"?"active":""]),onClick:t[5]||(t[5]=i=>{c.value="i",u()})},[e.createVNode(te)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",c.value==="u"?"active":""]),onClick:t[6]||(t[6]=i=>{c.value="u",u()})},[e.createVNode(ce)],2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",c.value==="s"?"active":""]),onClick:t[7]||(t[7]=i=>{c.value="s",u()})},[e.createVNode(he)],2)]),o.showCode===!0?(e.openBlock(),e.createElementBlock("ul",ge,[e.createElementVNode("li",{class:e.normalizeClass(["editorItem",{active:_.value==="text"}]),onClick:t[8]||(t[8]=i=>_.value="text")},"Editor",2),e.createElementVNode("li",{class:e.normalizeClass(["editorItem",{active:_.value==="html"}]),onClick:t[9]||(t[9]=i=>_.value="html")},"HTML",2)])):e.createCommentVNode("",!0)]),o.showCode===!0&&_.value==="html"?(e.openBlock(),e.createElementBlock("textarea",{key:0,class:"editorContent",value:(s=r.value)==null?void 0:s.contentWindow.document.body.innerHTML,style:e.normalizeStyle({height:o.height}),readonly:""},null,12,ue)):(e.openBlock(),e.createElementBlock("iframe",{key:1,ref_key:"editorContentRef",ref:r,src:"about:blank",srcdoc:e.unref(xe),class:"editorContent",style:e.normalizeStyle({height:o.height})},null,12,pe)),e.createElementVNode("div",Ve,[e.createElementVNode("ul",we,[e.createElementVNode("li",$e,e.toDisplayString(a.value)+" > Status",1)]),e.createElementVNode("ul",Ee,[e.createElementVNode("li",be,"Total: "+e.toDisplayString(String(V.value).split(" ").length)+" words",1)])])])}}}),Le="",ke=d(ve,[["__scopeId","data-v-e3c47aed"]]);h.TextEditor=ke,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
