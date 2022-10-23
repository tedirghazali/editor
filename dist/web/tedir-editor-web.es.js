function Vt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Is = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ms = /* @__PURE__ */ Vt(Is);
function hr(e) {
  return !!e || e === "";
}
function St(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? Ps(o) : St(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (Y(e))
      return e;
  }
}
const As = /;(?![^(]*\))/g, ks = /:(.+)/;
function Ps(e) {
  const t = {};
  return e.split(As).forEach((n) => {
    if (n) {
      const o = n.split(ks);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function me(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = me(e[n]);
      o && (t += o + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ko = (e) => ee(e) ? e : e == null ? "" : I(e) || Y(e) && (e.toString === vr || !A(e.toString)) ? JSON.stringify(e, mr, 2) : String(e), mr = (e, t) => t && t.__v_isRef ? mr(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : _r(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Y(t) && !I(t) && !br(t) ? String(t) : t, U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, gr = () => !1, Ss = /^on[^a-z]/, Kt = (e) => Ss.test(e), cn = (e) => e.startsWith("onUpdate:"), Q = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rs = Object.prototype.hasOwnProperty, R = (e, t) => Rs.call(e, t), I = Array.isArray, lt = (e) => mn(e) === "[object Map]", _r = (e) => mn(e) === "[object Set]", A = (e) => typeof e == "function", ee = (e) => typeof e == "string", ao = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", fo = (e) => Y(e) && A(e.then) && A(e.catch), vr = Object.prototype.toString, mn = (e) => vr.call(e), uo = (e) => mn(e).slice(8, -1), br = (e) => mn(e) === "[object Object]", po = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ Vt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fs = /* @__PURE__ */ Vt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, Ze = gn((e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")), js = /\B([A-Z])/g, De = gn((e) => e.replace(js, "-$1").toLowerCase()), _n = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = gn((e) => e ? `on${_n(e)}` : ""), Rt = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, an = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, jn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Po;
const Er = () => Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ln(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class Ls {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && Ie && (this.parent = Ie, this.index = (Ie.scopes || (Ie.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ln("cannot run an inactive effect scope.");
  }
  on() {
    Ie = this;
  }
  off() {
    Ie = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Bs(e, t = Ie) {
  t && t.active && t.effects.push(e);
}
const Ft = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Nr = (e) => (e.w & Qe) > 0, yr = (e) => (e.n & Qe) > 0, Us = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Qe;
}, Ks = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Nr(r) && !yr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Qe, r.n &= ~Qe;
    }
    t.length = n;
  }
}, Bn = /* @__PURE__ */ new WeakMap();
let Mt = 0, Qe = 1;
const Un = 30;
let ue;
const ct = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Kn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ho {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Bs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ue, n = Xe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ue, ue = this, Xe = !0, Qe = 1 << ++Mt, Mt <= Un ? Us(this) : So(this), this.fn();
    } finally {
      Mt <= Un && Ks(this), Qe = 1 << --Mt, ue = this.parent, Xe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ue === this ? this.deferStop = !0 : this.active && (So(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function So(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Xe = !0;
const Or = [];
function ht() {
  Or.push(Xe), Xe = !1;
}
function mt() {
  const e = Or.pop();
  Xe = e === void 0 ? !0 : e;
}
function he(e, t, n) {
  if (Xe && ue) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ft());
    const s = process.env.NODE_ENV !== "production" ? { effect: ue, target: e, type: t, key: n } : void 0;
    zn(r, s);
  }
}
function zn(e, t) {
  let n = !1;
  Mt <= Un ? yr(e) || (e.n |= Qe, n = !Nr(e)) : n = !e.has(ue), n && (e.add(ue), ue.deps.push(e), process.env.NODE_ENV !== "production" && ue.onTrack && ue.onTrack(Object.assign({ effect: ue }, t)));
}
function je(e, t, n, o, r, s) {
  const i = Bn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && I(e))
    i.forEach((u, h) => {
      (h === "length" || h >= o) && c.push(u);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        I(e) ? po(n) && c.push(i.get("length")) : (c.push(i.get(ct)), lt(e) && c.push(i.get(Kn)));
        break;
      case "delete":
        I(e) || (c.push(i.get(ct)), lt(e) && c.push(i.get(Kn)));
        break;
      case "set":
        lt(e) && c.push(i.get(ct));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? Et(c[0], a) : Et(c[0]));
  else {
    const u = [];
    for (const h of c)
      h && u.push(...h);
    process.env.NODE_ENV !== "production" ? Et(Ft(u), a) : Et(Ft(u));
  }
}
function Et(e, t) {
  const n = I(e) ? e : [...e];
  for (const o of n)
    o.computed && Ro(o, t);
  for (const o of n)
    o.computed || Ro(o, t);
}
function Ro(e, t) {
  (e !== ue || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Q({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const zs = /* @__PURE__ */ Vt("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ao)
), Ws = /* @__PURE__ */ vn(), qs = /* @__PURE__ */ vn(!1, !0), Js = /* @__PURE__ */ vn(!0), Ys = /* @__PURE__ */ vn(!0, !0), Fo = /* @__PURE__ */ Xs();
function Xs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = S(this);
      for (let s = 0, i = this.length; s < i; s++)
        he(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(S)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ht();
      const o = S(this)[t].apply(this, n);
      return mt(), o;
    };
  }), e;
}
function vn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Mr : Ir : t ? $r : Tr).get(o))
      return o;
    const i = I(o);
    if (!e && i && R(Fo, r))
      return Reflect.get(Fo, r, s);
    const c = Reflect.get(o, r, s);
    return (ao(r) ? wr.has(r) : zs(r)) || (e || he(o, "get", r), t) ? c : oe(c) ? i && po(r) ? c : c.value : Y(c) ? e ? Ar(c) : go(c) : c;
  };
}
const Zs = /* @__PURE__ */ xr(), Qs = /* @__PURE__ */ xr(!0);
function xr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Ge(i) && oe(i) && !oe(r))
      return !1;
    if (!e && (!fn(r) && !Ge(r) && (i = S(i), r = S(r)), !I(n) && oe(i) && !oe(r)))
      return i.value = r, !0;
    const c = I(n) && po(o) ? Number(o) < n.length : R(n, o), a = Reflect.set(n, o, r, s);
    return n === S(s) && (c ? Rt(r, i) && je(n, "set", o, r, i) : je(n, "add", o, r)), a;
  };
}
function Gs(e, t) {
  const n = R(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && je(e, "delete", t, void 0, o), r;
}
function ei(e, t) {
  const n = Reflect.has(e, t);
  return (!ao(t) || !wr.has(t)) && he(e, "has", t), n;
}
function ti(e) {
  return he(e, "iterate", I(e) ? "length" : ct), Reflect.ownKeys(e);
}
const Dr = {
  get: Ws,
  set: Zs,
  deleteProperty: Gs,
  has: ei,
  ownKeys: ti
}, Vr = {
  get: Js,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Ln(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Ln(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ni = /* @__PURE__ */ Q({}, Dr, {
  get: qs,
  set: Qs
}), oi = /* @__PURE__ */ Q({}, Vr, {
  get: Ys
}), mo = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function Yt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = S(e), s = S(t);
  n || (t !== s && he(r, "get", t), he(r, "get", s));
  const { has: i } = bn(r), c = o ? mo : n ? _o : Ht;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = S(n), r = S(e);
  return t || (e !== r && he(o, "has", e), he(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Zt(e, t = !1) {
  return e = e.__v_raw, !t && he(S(e), "iterate", ct), Reflect.get(e, "size", e);
}
function Ho(e) {
  e = S(e);
  const t = S(this);
  return bn(t).has.call(t, e) || (t.add(e), je(t, "add", e, e)), this;
}
function jo(e, t) {
  t = S(t);
  const n = S(this), { has: o, get: r } = bn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Cr(n, o, e) : (e = S(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Rt(t, i) && je(n, "set", e, t, i) : je(n, "add", e, t), this;
}
function Lo(e) {
  const t = S(this), { has: n, get: o } = bn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Cr(t, n, e) : (e = S(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && je(t, "delete", e, void 0, s), i;
}
function Bo() {
  const e = S(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? lt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && je(e, "clear", void 0, void 0, n), o;
}
function Qt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = S(i), a = t ? mo : e ? _o : Ht;
    return !e && he(c, "iterate", ct), i.forEach((u, h) => o.call(r, a(u), a(h), s));
  };
}
function Gt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = S(r), i = lt(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...o), h = n ? mo : t ? _o : Ht;
    return !t && he(s, "iterate", a ? Kn : ct), {
      next() {
        const { value: d, done: g } = u.next();
        return g ? { value: d, done: g } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ze(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${_n(e)} operation ${n}failed: target is readonly.`, S(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ri() {
  const e = {
    get(s) {
      return Yt(this, s);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Ho,
    set: jo,
    delete: Lo,
    clear: Bo,
    forEach: Qt(!1, !1)
  }, t = {
    get(s) {
      return Yt(this, s, !1, !0);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Ho,
    set: jo,
    delete: Lo,
    clear: Bo,
    forEach: Qt(!1, !0)
  }, n = {
    get(s) {
      return Yt(this, s, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: Qt(!0, !1)
  }, o = {
    get(s) {
      return Yt(this, s, !0, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: Qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Gt(s, !1, !1), n[s] = Gt(s, !0, !1), t[s] = Gt(s, !1, !0), o[s] = Gt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [si, ii, li, ci] = /* @__PURE__ */ ri();
function En(e, t) {
  const n = t ? e ? ci : li : e ? ii : si;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(R(n, r) && r in o ? n : o, r, s);
}
const ai = {
  get: /* @__PURE__ */ En(!1, !1)
}, fi = {
  get: /* @__PURE__ */ En(!1, !0)
}, ui = {
  get: /* @__PURE__ */ En(!0, !1)
}, di = {
  get: /* @__PURE__ */ En(!0, !0)
};
function Cr(e, t, n) {
  const o = S(n);
  if (o !== n && t.call(e, o)) {
    const r = uo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Tr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap();
function pi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(uo(e));
}
function go(e) {
  return Ge(e) ? e : Nn(e, !1, Dr, ai, Tr);
}
function mi(e) {
  return Nn(e, !1, ni, fi, $r);
}
function Ar(e) {
  return Nn(e, !0, Vr, ui, Ir);
}
function Nt(e) {
  return Nn(e, !0, oi, di, Mr);
}
function Nn(e, t, n, o, r) {
  if (!Y(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = hi(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function at(e) {
  return Ge(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function Wn(e) {
  return at(e) || Ge(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function kr(e) {
  return an(e, "__v_skip", !0), e;
}
const Ht = (e) => Y(e) ? go(e) : e, _o = (e) => Y(e) ? Ar(e) : e;
function Pr(e) {
  Xe && ue && (e = S(e), process.env.NODE_ENV !== "production" ? zn(e.dep || (e.dep = Ft()), {
    target: e,
    type: "get",
    key: "value"
  }) : zn(e.dep || (e.dep = Ft())));
}
function Sr(e, t) {
  e = S(e), e.dep && (process.env.NODE_ENV !== "production" ? Et(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Et(e.dep));
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function We(e) {
  return gi(e, !1);
}
function gi(e, t) {
  return oe(e) ? e : new _i(e, t);
}
class _i {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : S(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return Pr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || Ge(t);
    t = n ? t : S(t), Rt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), Sr(this, t));
  }
}
function Rr(e) {
  return oe(e) ? e.value : e;
}
const vi = {
  get: (e, t, n) => Rr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return oe(r) && !oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fr(e) {
  return at(e) ? e : new Proxy(e, vi);
}
var Hr;
class bi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hr] = !1, this._dirty = !0, this.effect = new ho(t, () => {
      this._dirty || (this._dirty = !0, Sr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = S(this);
    return Pr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Hr = "__v_isReadonly";
function Ei(e, t, n = !1) {
  let o, r;
  const s = A(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : se) : (o = e.get, r = e.set);
  const i = new bi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ft = [];
function tn(e) {
  ft.push(e);
}
function nn() {
  ft.pop();
}
function y(e, ...t) {
  ht();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ni();
  if (o)
    He(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Cn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...yi(r)), console.warn(...s);
  }
  mt();
}
function Ni() {
  let e = ft[ft.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function yi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Oi(n));
  }), t;
}
function Oi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Cn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...wi(e.props), s] : [r + s];
}
function wi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = jr(e, S(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), n ? t : [`${e}=`, t]);
}
const vo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function He(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    yn(s, t, n);
  }
  return r;
}
function Ee(e, t, n, o) {
  if (A(e)) {
    const s = He(e, t, n, o);
    return s && fo(s) && s.catch((i) => {
      yn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Ee(e[s], t, n, o));
  return r;
}
function yn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? vo[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      He(a, null, 10, [e, i, c]);
      return;
    }
  }
  xi(e, n, r, o);
}
function xi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = vo[t];
    if (n && tn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && nn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let jt = !1, qn = !1;
const ce = [];
let Ae = 0;
const wt = [];
let Me = null, qe = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let bo = null;
const Di = 100;
function Br(e) {
  const t = bo || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = Ae + 1, n = ce.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Lt(ce[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function On(e) {
  (!ce.length || !ce.includes(e, jt && e.allowRecurse ? Ae + 1 : Ae)) && (e.id == null ? ce.push(e) : ce.splice(Vi(e.id), 0, e), Ur());
}
function Ur() {
  !jt && !qn && (qn = !0, bo = Lr.then(Wr));
}
function Ci(e) {
  const t = ce.indexOf(e);
  t > Ae && ce.splice(t, 1);
}
function Kr(e) {
  I(e) ? wt.push(...e) : (!Me || !Me.includes(e, e.allowRecurse ? qe + 1 : qe)) && wt.push(e), Ur();
}
function Uo(e, t = jt ? Ae + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ce.length; t++) {
    const n = ce[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Eo(e, n))
        continue;
      ce.splice(t, 1), t--, n();
    }
  }
}
function zr(e) {
  if (wt.length) {
    const t = [...new Set(wt)];
    if (wt.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Me.sort((n, o) => Lt(n) - Lt(o)), qe = 0; qe < Me.length; qe++)
      process.env.NODE_ENV !== "production" && Eo(e, Me[qe]) || Me[qe]();
    Me = null, qe = 0;
  }
}
const Lt = (e) => e.id == null ? 1 / 0 : e.id, Ti = (e, t) => {
  const n = Lt(e) - Lt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  qn = !1, jt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ce.sort(Ti);
  const t = process.env.NODE_ENV !== "production" ? (n) => Eo(e, n) : se;
  try {
    for (Ae = 0; Ae < ce.length; Ae++) {
      const n = ce[Ae];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        He(n, null, 14);
      }
    }
  } finally {
    Ae = 0, ce.length = 0, zr(e), jt = !1, bo = null, (ce.length || wt.length) && Wr(e);
  }
}
function Eo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Di) {
      const o = t.ownerInstance, r = o && xs(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let ut = !1;
const bt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Er().__VUE_HMR_RUNTIME__ = {
  createRecord: An(qr),
  rerender: An(Mi),
  reload: An(Ai)
});
const pt = /* @__PURE__ */ new Map();
function $i(e) {
  const t = e.type.__hmrId;
  let n = pt.get(t);
  n || (qr(t, e.type), n = pt.get(t)), n.instances.add(e);
}
function Ii(e) {
  pt.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return pt.has(e) ? !1 : (pt.set(e, {
    initialDef: kt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function kt(e) {
  return Ds(e) ? e.__vccOpts : e;
}
function Mi(e, t) {
  const n = pt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, kt(o.type).render = t), o.renderCache = [], ut = !0, o.update(), ut = !1;
  }));
}
function Ai(e, t) {
  const n = pt.get(e);
  if (!n)
    return;
  t = kt(t), Ko(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = kt(r.type);
    bt.has(s) || (s !== n.initialDef && Ko(s, t), bt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (bt.add(s), r.ceReload(t.styles), bt.delete(s)) : r.parent ? (On(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Kr(() => {
    for (const r of o)
      bt.delete(kt(r.type));
  });
}
function Ko(e, t) {
  Q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function An(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let rt, At = [], Jn = !1;
function zt(e, ...t) {
  rt ? rt.emit(e, ...t) : Jn || At.push({ event: e, args: t });
}
function Jr(e, t) {
  var n, o;
  rt = e, rt ? (rt.enabled = !0, At.forEach(({ event: r, args: s }) => rt.emit(r, ...s)), At = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Jr(s, t);
  }), setTimeout(() => {
    rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Jn = !0, At = []);
  }, 3e3)) : (Jn = !0, At = []);
}
function ki(e, t) {
  zt("app:init", e, t, {
    Fragment: Oe,
    Text: Dn,
    Comment: ie,
    Static: sn
  });
}
function Pi(e) {
  zt("app:unmount", e);
}
const Si = /* @__PURE__ */ No("component:added"), Yr = /* @__PURE__ */ No("component:updated"), Ri = /* @__PURE__ */ No("component:removed");
function No(e) {
  return (t) => {
    zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Fi = /* @__PURE__ */ Xr("perf:start"), Hi = /* @__PURE__ */ Xr("perf:end");
function Xr(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ji(e, t, n) {
  zt("component:emit", e.appContext.app, e, t, n);
}
function Li(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || U;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(nt(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(t)}" prop.`);
      else {
        const g = h[t];
        A(g) && (g(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[h] || U;
    g && (r = n.map((D) => D.trim())), d && (r = n.map(jn));
  }
  if (process.env.NODE_ENV !== "production" && ji(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[nt(h)] && y(`Event "${h}" is emitted in component ${Cn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${De(t)}" instead of "${t}".`);
  }
  let c, a = o[c = nt(t)] || o[c = nt(Ze(t))];
  !a && s && (a = o[c = nt(De(t))]), a && Ee(a, e, 6, r);
  const u = o[c + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ee(u, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const a = (u) => {
      const h = Zr(u, t, !0);
      h && (c = !0, Q(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !c ? (Y(e) && o.set(e, null), null) : (I(s) ? s.forEach((a) => i[a] = null) : Q(i, s), Y(e) && o.set(e, i), i);
}
function wn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, De(t)) || R(e, t));
}
let ve = null, Qr = null;
function un(e) {
  const t = ve;
  return ve = e, Qr = e && e.type.__scopeId || null, t;
}
function Bi(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && nr(-1);
    const s = un(t), i = e(...r);
    return un(s), o._d && nr(1), process.env.NODE_ENV !== "production" && Yr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Yn = !1;
function dn() {
  Yn = !0;
}
function kn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: a, emit: u, render: h, renderCache: d, data: g, setupState: D, ctx: k, inheritAttrs: C } = e;
  let K, B;
  const $ = un(e);
  process.env.NODE_ENV !== "production" && (Yn = !1);
  try {
    if (n.shapeFlag & 4) {
      const P = r || o;
      K = we(h.call(P, P, d, s, D, g, k)), B = a;
    } else {
      const P = t;
      process.env.NODE_ENV !== "production" && a === s && dn(), K = we(P.length > 1 ? P(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return dn(), a;
        },
        slots: c,
        emit: u
      } : { attrs: a, slots: c, emit: u }) : P(s, null)), B = t.props ? a : Ki(a);
    }
  } catch (P) {
    Pt.length = 0, yn(P, e, 1), K = te(ie);
  }
  let w = K, z;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([w, z] = Ui(K)), B && C !== !1) {
    const P = Object.keys(B), { shapeFlag: Ne } = w;
    if (P.length) {
      if (Ne & 7)
        i && P.some(cn) && (B = zi(B, i)), w = ke(w, B);
      else if (process.env.NODE_ENV !== "production" && !Yn && w.type !== ie) {
        const Ve = Object.keys(a), F = [], X = [];
        for (let Z = 0, le = Ve.length; Z < le; Z++) {
          const re = Ve[Z];
          Kt(re) ? cn(re) || F.push(re[2].toLowerCase() + re.slice(3)) : X.push(re);
        }
        X.length && y(`Extraneous non-props attributes (${X.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), F.length && y(`Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !zo(w) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), w = ke(w), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !zo(w) && y("Component inside <Transition> renders non-element root node that cannot be animated."), w.transition = n.transition), process.env.NODE_ENV !== "production" && z ? z(w) : K = w, un($), K;
}
const Ui = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [we(o), i];
};
function Gr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Do(o)) {
      if (o.type !== ie || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ki = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zi = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, zo = (e) => e.shapeFlag & 7 || e.type === ie;
function Wi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: a } = t, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && ut || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Wo(o, i, u) : !!i;
    if (a & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const g = h[d];
        if (i[g] !== o[g] && !wn(u, g))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Wo(o, i, u) : !0 : !!i;
  return !1;
}
function Wo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !wn(n, s))
      return !0;
  }
  return !1;
}
function qi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ji = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Kr(e);
}
function Xi(e, t) {
  if (!ne)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function Pn(e, t, n = !1) {
  const o = ne || ve;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const qo = {};
function Sn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), es(e, t, n);
}
function es(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = U) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = ($) => {
    y("Invalid watch source: ", $, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = ne;
  let u, h = !1, d = !1;
  if (oe(e) ? (u = () => e.value, h = fn(e)) : at(e) ? (u = () => e, o = !0) : I(e) ? (d = !0, h = e.some(($) => at($) || fn($)), u = () => e.map(($) => {
    if (oe($))
      return $.value;
    if (at($))
      return yt($);
    if (A($))
      return He($, a, 2);
    process.env.NODE_ENV !== "production" && c($);
  })) : A(e) ? t ? u = () => He(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return g && g(), Ee(e, a, 3, [D]);
  } : (u = se, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const $ = u;
    u = () => yt($());
  }
  let g, D = ($) => {
    g = B.onStop = () => {
      He($, a, 4);
    };
  };
  if (Ut)
    return D = se, t ? n && Ee(t, a, 3, [
      u(),
      d ? [] : void 0,
      D
    ]) : u(), se;
  let k = d ? [] : qo;
  const C = () => {
    if (!!B.active)
      if (t) {
        const $ = B.run();
        (o || h || (d ? $.some((w, z) => Rt(w, k[z])) : Rt($, k))) && (g && g(), Ee(t, a, 3, [
          $,
          k === qo ? void 0 : k,
          D
        ]), k = $);
      } else
        B.run();
  };
  C.allowRecurse = !!t;
  let K;
  r === "sync" ? K = C : r === "post" ? K = () => pe(C, a && a.suspense) : (C.pre = !0, a && (C.id = a.uid), K = () => On(C));
  const B = new ho(u, K);
  return process.env.NODE_ENV !== "production" && (B.onTrack = s, B.onTrigger = i), t ? n ? C() : k = B.run() : r === "post" ? pe(B.run.bind(B), a && a.suspense) : B.run(), () => {
    B.stop(), a && a.scope && co(a.scope.effects, B);
  };
}
function Zi(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? ts(o, e) : () => o[e] : e.bind(o, o);
  let s;
  A(t) ? s = t : (s = t.handler, n = t);
  const i = ne;
  Dt(this);
  const c = es(r, s.bind(o), n);
  return i ? Dt(i) : dt(), c;
}
function ts(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function yt(e, t) {
  if (!Y(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), oe(e))
    yt(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      yt(e[n], t);
  else if (_r(e) || lt(e))
    e.forEach((n) => {
      yt(n, t);
    });
  else if (br(e))
    for (const n in e)
      yt(e[n], t);
  return e;
}
function Qi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return yo(() => {
    e.isMounted = !0;
  }), ls(() => {
    e.isUnmounting = !0;
  }), e;
}
const _e = [Function, Array], Gi = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: _e,
    onEnter: _e,
    onAfterEnter: _e,
    onEnterCancelled: _e,
    onBeforeLeave: _e,
    onLeave: _e,
    onAfterLeave: _e,
    onLeaveCancelled: _e,
    onBeforeAppear: _e,
    onAppear: _e,
    onAfterAppear: _e,
    onAppearCancelled: _e
  },
  setup(e, { slots: t }) {
    const n = Jl(), o = Qi();
    let r;
    return () => {
      const s = t.default && os(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let C = !1;
        for (const K of s)
          if (K.type !== ie) {
            if (process.env.NODE_ENV !== "production" && C) {
              y("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = K, C = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = S(e), { mode: a } = c;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && y(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Rn(i);
      const u = Jo(i);
      if (!u)
        return Rn(i);
      const h = Xn(u, c, o, n);
      Zn(u, h);
      const d = n.subTree, g = d && Jo(d);
      let D = !1;
      const { getTransitionKey: k } = u.type;
      if (k) {
        const C = k();
        r === void 0 ? r = C : C !== r && (r = C, D = !0);
      }
      if (g && g.type !== ie && (!st(u, g) || D)) {
        const C = Xn(g, c, o, n);
        if (Zn(g, C), a === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Rn(i);
        a === "in-out" && u.type !== ie && (C.delayLeave = (K, B, $) => {
          const w = ns(o, g);
          w[String(g.key)] = g, K._leaveCb = () => {
            B(), K._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = $;
        });
      }
      return i;
    };
  }
}, el = Gi;
function ns(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Xn(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: a, onAfterEnter: u, onEnterCancelled: h, onBeforeLeave: d, onLeave: g, onAfterLeave: D, onLeaveCancelled: k, onBeforeAppear: C, onAppear: K, onAfterAppear: B, onAppearCancelled: $ } = t, w = String(e.key), z = ns(n, e), P = (F, X) => {
    F && Ee(F, o, 9, X);
  }, Ne = (F, X) => {
    const Z = X[1];
    P(F, X), I(F) ? F.every((le) => le.length <= 1) && Z() : F.length <= 1 && Z();
  }, Ve = {
    mode: s,
    persisted: i,
    beforeEnter(F) {
      let X = c;
      if (!n.isMounted)
        if (r)
          X = C || c;
        else
          return;
      F._leaveCb && F._leaveCb(!0);
      const Z = z[w];
      Z && st(e, Z) && Z.el._leaveCb && Z.el._leaveCb(), P(X, [F]);
    },
    enter(F) {
      let X = a, Z = u, le = h;
      if (!n.isMounted)
        if (r)
          X = K || a, Z = B || u, le = $ || h;
        else
          return;
      let re = !1;
      const Pe = F._enterCb = (qt) => {
        re || (re = !0, qt ? P(le, [F]) : P(Z, [F]), Ve.delayedLeave && Ve.delayedLeave(), F._enterCb = void 0);
      };
      X ? Ne(X, [F, Pe]) : Pe();
    },
    leave(F, X) {
      const Z = String(e.key);
      if (F._enterCb && F._enterCb(!0), n.isUnmounting)
        return X();
      P(d, [F]);
      let le = !1;
      const re = F._leaveCb = (Pe) => {
        le || (le = !0, X(), Pe ? P(k, [F]) : P(D, [F]), F._leaveCb = void 0, z[Z] === e && delete z[Z]);
      };
      z[Z] = e, g ? Ne(g, [F, re]) : re();
    },
    clone(F) {
      return Xn(F, t, n, o);
    }
  };
  return Ve;
}
function Rn(e) {
  if (Wt(e))
    return e = ke(e), e.children = null, e;
}
function Jo(e) {
  return Wt(e) ? e.children ? e.children[0] : void 0 : e;
}
function Zn(e, t) {
  e.shapeFlag & 6 && e.component ? Zn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function os(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Oe ? (i.patchFlag & 128 && r++, o = o.concat(os(i.children, t, c))) : (t || i.type !== ie) && o.push(c != null ? ke(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function rs(e) {
  return A(e) ? { setup: e, name: e.name } : e;
}
const on = (e) => !!e.type.__asyncLoader, Wt = (e) => e.type.__isKeepAlive;
function tl(e, t) {
  ss(e, "a", t);
}
function nl(e, t) {
  ss(e, "da", t);
}
function ss(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Wt(r.parent.vnode) && ol(o, t, n, r), r = r.parent;
  }
}
function ol(e, t, n, o) {
  const r = xn(t, e, o, !0);
  cs(() => {
    co(o[t], r);
  }, n);
}
function xn(e, t, n = ne, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ht(), Dt(n);
      const c = Ee(t, n, e, i);
      return dt(), mt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = nt(vo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Le = (e) => (t, n = ne) => (!Ut || e === "sp") && xn(e, (...o) => t(...o), n), rl = Le("bm"), yo = Le("m"), sl = Le("bu"), is = Le("u"), ls = Le("bum"), cs = Le("um"), il = Le("sp"), ll = Le("rtg"), cl = Le("rtc");
function al(e, t = ne) {
  xn("ec", e, t);
}
function as(e) {
  Fs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[o];
    a && (ht(), Ee(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), mt());
  }
}
const fl = Symbol(), Qn = (e) => e ? Os(e) ? Co(e) || e.proxy : Qn(e.parent) : null, xt = /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Nt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Nt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Nt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Nt(e.refs) : e.refs,
  $parent: (e) => Qn(e.parent),
  $root: (e) => Qn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => wo(e),
  $forceUpdate: (e) => e.f || (e.f = () => On(e.update)),
  $nextTick: (e) => e.n || (e.n = Br.bind(e.proxy)),
  $watch: (e) => Zi.bind(e)
}), Oo = (e) => e === "_" || e === "$", fs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== U && o.__isScriptSetup && R(o, t))
      return o[t];
    let u;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (o !== U && R(o, t))
          return i[t] = 1, o[t];
        if (r !== U && R(r, t))
          return i[t] = 2, r[t];
        if ((u = e.propsOptions[0]) && R(u, t))
          return i[t] = 3, s[t];
        if (n !== U && R(n, t))
          return i[t] = 4, n[t];
        Gn && (i[t] = 0);
      }
    }
    const h = xt[t];
    let d, g;
    if (h)
      return t === "$attrs" && (he(e, "get", t), process.env.NODE_ENV !== "production" && dn()), h(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== U && R(n, t))
      return i[t] = 4, n[t];
    if (g = a.config.globalProperties, R(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && ve && (!ee(t) || t.indexOf("__v") !== 0) && (r !== U && Oo(t[0]) && R(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ve && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== U && R(r, t) ? (r[t] = n, !0) : o !== U && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== U && R(e, i) || t !== U && R(t, i) || (c = s[0]) && R(c, i) || R(o, i) || R(xt, i) || R(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (fs.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function ul(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => xt[n](e),
      set: se
    });
  }), t;
}
function dl(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: se
    });
  });
}
function pl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(S(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Oo(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: se
      });
    }
  });
}
function hl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Gn = !0;
function ml(e) {
  const t = wo(e), n = e.proxy, o = e.ctx;
  Gn = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: u,
    created: h,
    beforeMount: d,
    mounted: g,
    beforeUpdate: D,
    updated: k,
    activated: C,
    deactivated: K,
    beforeDestroy: B,
    beforeUnmount: $,
    destroyed: w,
    unmounted: z,
    render: P,
    renderTracked: Ne,
    renderTriggered: Ve,
    errorCaptured: F,
    serverPrefetch: X,
    expose: Z,
    inheritAttrs: le,
    components: re,
    directives: Pe,
    filters: qt
  } = t, Ue = process.env.NODE_ENV !== "production" ? hl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const L in j)
        Ue("Props", L);
  }
  if (u && gl(u, o, Ue, e.appContext.config.unwrapInjectedRef), i)
    for (const j in i) {
      const L = i[j];
      A(L) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: L.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = L.bind(n), process.env.NODE_ENV !== "production" && Ue("Methods", j)) : process.env.NODE_ENV !== "production" && y(`Method "${j}" has type "${typeof L}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !A(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const j = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && fo(j) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Y(j))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = go(j), process.env.NODE_ENV !== "production")
      for (const L in j)
        Ue("Data", L), Oo(L[0]) || Object.defineProperty(o, L, {
          configurable: !0,
          enumerable: !0,
          get: () => j[L],
          set: se
        });
  }
  if (Gn = !0, s)
    for (const j in s) {
      const L = s[j], Ce = A(L) ? L.bind(n, n) : A(L.get) ? L.get.bind(n, n) : se;
      process.env.NODE_ENV !== "production" && Ce === se && y(`Computed property "${j}" has no getter.`);
      const Tn = !A(L) && A(L.set) ? L.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${j}" is readonly.`);
      } : se, Ct = Vs({
        get: Ce,
        set: Tn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (gt) => Ct.value = gt
      }), process.env.NODE_ENV !== "production" && Ue("Computed", j);
    }
  if (c)
    for (const j in c)
      us(c[j], o, n, j);
  if (a) {
    const j = A(a) ? a.call(n) : a;
    Reflect.ownKeys(j).forEach((L) => {
      Xi(L, j[L]);
    });
  }
  h && Yo(h, e, "c");
  function de(j, L) {
    I(L) ? L.forEach((Ce) => j(Ce.bind(n))) : L && j(L.bind(n));
  }
  if (de(rl, d), de(yo, g), de(sl, D), de(is, k), de(tl, C), de(nl, K), de(al, F), de(cl, Ne), de(ll, Ve), de(ls, $), de(cs, z), de(il, X), I(Z))
    if (Z.length) {
      const j = e.exposed || (e.exposed = {});
      Z.forEach((L) => {
        Object.defineProperty(j, L, {
          get: () => n[L],
          set: (Ce) => n[L] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  P && e.render === se && (e.render = P), le != null && (e.inheritAttrs = le), re && (e.components = re), Pe && (e.directives = Pe);
}
function gl(e, t, n = se, o = !1) {
  I(e) && (e = eo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Y(s) ? "default" in s ? i = Pn(s.from || r, s.default, !0) : i = Pn(s.from || r) : i = Pn(s), oe(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Yo(e, t, n) {
  Ee(I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function us(e, t, n, o) {
  const r = o.includes(".") ? ts(n, o) : () => n[o];
  if (ee(e)) {
    const s = t[e];
    A(s) ? Sn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (A(e))
    Sn(r, e.bind(n));
  else if (Y(e))
    if (I(e))
      e.forEach((s) => us(s, t, n, o));
    else {
      const s = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(s) ? Sn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function wo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((u) => pn(a, u, i, !0)), pn(a, t, i)), Y(t) && s.set(t, a), a;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = _l[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const _l = {
  data: Xo,
  props: ot,
  emits: ot,
  methods: ot,
  computed: ot,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: ot,
  directives: ot,
  watch: bl,
  provide: Xo,
  inject: vl
};
function Xo(e, t) {
  return t ? e ? function() {
    return Q(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t);
  } : t : e;
}
function vl(e, t) {
  return ot(eo(e), eo(t));
}
function eo(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? Q(Q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function bl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function El(e, t, n, o = !1) {
  const r = {}, s = {};
  an(s, Vn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ds(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && hs(t || {}, r, e), n ? e.props = o ? r : mi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Nl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function yl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = S(r), [a] = e.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && Nl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let g = h[d];
        if (wn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (a)
          if (R(s, g))
            D !== s[g] && (s[g] = D, u = !0);
          else {
            const k = Ze(g);
            r[k] = to(a, c, k, D, e, !1);
          }
        else
          D !== s[g] && (s[g] = D, u = !0);
      }
    }
  } else {
    ds(e, t, r, s) && (u = !0);
    let h;
    for (const d in c)
      (!t || !R(t, d) && ((h = De(d)) === d || !R(t, h))) && (a ? n && (n[d] !== void 0 || n[h] !== void 0) && (r[d] = to(a, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !R(t, d) && !0) && (delete s[d], u = !0);
  }
  u && je(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && hs(t || {}, r, e);
}
function ds(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (en(a))
        continue;
      const u = t[a];
      let h;
      r && R(r, h = Ze(a)) ? !s || !s.includes(h) ? n[h] = u : (c || (c = {}))[h] = u : wn(e.emitsOptions, a) || (!(a in o) || u !== o[a]) && (o[a] = u, i = !0);
    }
  if (s) {
    const a = S(n), u = c || U;
    for (let h = 0; h < s.length; h++) {
      const d = s[h];
      n[d] = to(r, a, d, u[d], e, !R(u, d));
    }
  }
  return i;
}
function to(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = R(i, "default");
    if (c && o === void 0) {
      const a = i.default;
      if (i.type !== Function && A(a)) {
        const { propsDefaults: u } = r;
        n in u ? o = u[n] : (Dt(r), o = u[n] = a.call(null, t), dt());
      } else
        o = a;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === De(n)) && (o = !0));
  }
  return o;
}
function ps(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let a = !1;
  if (!A(e)) {
    const h = (d) => {
      a = !0;
      const [g, D] = ps(d, t, !0);
      Q(i, g), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !a)
    return Y(e) && o.set(e, Ot), Ot;
  if (I(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !ee(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const d = Ze(s[h]);
      Zo(d) && (i[d] = U);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Y(s) && y("invalid props options", s);
    for (const h in s) {
      const d = Ze(h);
      if (Zo(d)) {
        const g = s[h], D = i[d] = I(g) || A(g) ? { type: g } : g;
        if (D) {
          const k = Go(Boolean, D.type), C = Go(String, D.type);
          D[0] = k > -1, D[1] = C < 0 || k < C, (k > -1 || R(D, "default")) && c.push(d);
        }
      }
    }
  }
  const u = [i, c];
  return Y(e) && o.set(e, u), u;
}
function Zo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function no(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qo(e, t) {
  return no(e) === no(t);
}
function Go(e, t) {
  return I(t) ? t.findIndex((n) => Qo(n, e)) : A(t) && Qo(t, e) ? 0 : -1;
}
function hs(e, t, n) {
  const o = S(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Ol(s, o[s], i, !R(e, s) && !R(e, De(s)));
  }
}
function Ol(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const a = I(r) ? r : [r], u = [];
      for (let h = 0; h < a.length && !c; h++) {
        const { valid: d, expectedType: g } = xl(t, a[h]);
        u.push(g || ""), c = d;
      }
      if (!c) {
        y(Dl(e, t, u));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wl = /* @__PURE__ */ Vt("String,Number,Boolean,Function,Symbol,BigInt");
function xl(e, t) {
  let n;
  const o = no(t);
  if (wl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Y(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Dl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(_n).join(" | ")}`;
  const r = n[0], s = uo(t), i = er(t, r), c = er(t, s);
  return n.length === 1 && tr(r) && !Vl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, tr(s) && (o += `with value ${c}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Vl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ms = (e) => e[0] === "_" || e === "$stable", xo = (e) => I(e) ? e.map(we) : [we(e)], Cl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bi((...r) => (process.env.NODE_ENV !== "production" && ne && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), xo(t(...r))), n);
  return o._c = !1, o;
}, gs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ms(r))
      continue;
    const s = e[r];
    if (A(s))
      t[r] = Cl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = xo(s);
      t[r] = () => i;
    }
  }
}, _s = (e, t) => {
  process.env.NODE_ENV !== "production" && !Wt(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = xo(t);
  e.slots.default = () => n;
}, Tl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = S(t), an(t, "_", n)) : gs(t, e.slots = {});
  } else
    e.slots = {}, t && _s(e, t);
  an(e.slots, Vn, 1);
}, $l = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = U;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && ut ? Q(r, t) : n && c === 1 ? s = !1 : (Q(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, gs(t, r)), i = t;
  } else
    t && (_s(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !ms(c) && !(c in i) && delete r[c];
};
function vs() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Il = 0;
function Ml(e, t) {
  return function(o, r = null) {
    A(o) || (o = Object.assign({}, o)), r != null && !Y(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = vs(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const a = s.app = {
      _uid: Il++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: sr,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...h) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : u && A(u.install) ? (i.add(u), u.install(a, ...h)) : A(u) ? (i.add(u), u(a, ...h)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), a;
      },
      component(u, h) {
        return process.env.NODE_ENV !== "production" && ro(u, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[u] && y(`Component "${u}" has already been registered in target app.`), s.components[u] = h, a) : s.components[u];
      },
      directive(u, h) {
        return process.env.NODE_ENV !== "production" && as(u), h ? (process.env.NODE_ENV !== "production" && s.directives[u] && y(`Directive "${u}" has already been registered in target app.`), s.directives[u] = h, a) : s.directives[u];
      },
      mount(u, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = te(o, r);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(ke(g), u, d);
          }), h && t ? t(g, u) : e(g, u, d), c = !0, a._container = u, u.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = g.component, ki(a, sr)), Co(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Pi(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(u, h) {
        return process.env.NODE_ENV !== "production" && u in s.provides && y(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = h, a;
      }
    };
    return a;
  };
}
function oo(e, t, n, o, r = !1) {
  if (I(e)) {
    e.forEach((g, D) => oo(g, t && (I(t) ? t[D] : t), n, o, r));
    return;
  }
  if (on(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Co(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, h = c.refs === U ? c.refs = {} : c.refs, d = c.setupState;
  if (u != null && u !== a && (ee(u) ? (h[u] = null, R(d, u) && (d[u] = null)) : oe(u) && (u.value = null)), A(a))
    He(a, c, 12, [i, h]);
  else {
    const g = ee(a), D = oe(a);
    if (g || D) {
      const k = () => {
        if (e.f) {
          const C = g ? h[a] : a.value;
          r ? I(C) && co(C, s) : I(C) ? C.includes(s) || C.push(s) : g ? (h[a] = [s], R(d, a) && (d[a] = h[a])) : (a.value = [s], e.k && (h[e.k] = a.value));
        } else
          g ? (h[a] = i, R(d, a) && (d[a] = i)) : D ? (a.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (k.id = -1, pe(k, n)) : k();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let It, Ye;
function Re(e, t) {
  e.appContext.config.performance && hn() && Ye.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Fi(e, t, hn() ? Ye.now() : Date.now());
}
function Fe(e, t) {
  if (e.appContext.config.performance && hn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ye.mark(o), Ye.measure(`<${Cn(e, e.type)}> ${t}`, n, o), Ye.clearMarks(n), Ye.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Hi(e, t, hn() ? Ye.now() : Date.now());
}
function hn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Ye = window.performance) : It = !1), It;
}
function Al() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const pe = Yi;
function kl(e) {
  return Pl(e);
}
function Pl(e, t) {
  Al();
  const n = Er();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Jr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: a, setText: u, setElementText: h, parentNode: d, nextSibling: g, setScopeId: D = se, insertStaticContent: k } = e, C = (l, f, p, _ = null, m = null, E = null, O = !1, b = null, N = process.env.NODE_ENV !== "production" && ut ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !st(l, f) && (_ = Jt(l), Ke(l, m, E, !0), l = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: v, ref: V, shapeFlag: x } = f;
    switch (v) {
      case Dn:
        K(l, f, p, _);
        break;
      case ie:
        B(l, f, p, _);
        break;
      case sn:
        l == null ? $(f, p, _, O) : process.env.NODE_ENV !== "production" && w(l, f, p, O);
        break;
      case Oe:
        Pe(l, f, p, _, m, E, O, b, N);
        break;
      default:
        x & 1 ? Ne(l, f, p, _, m, E, O, b, N) : x & 6 ? qt(l, f, p, _, m, E, O, b, N) : x & 64 || x & 128 ? v.process(l, f, p, _, m, E, O, b, N, _t) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    V != null && m && oo(V, l && l.ref, E, f || l, !f);
  }, K = (l, f, p, _) => {
    if (l == null)
      o(f.el = c(f.children), p, _);
    else {
      const m = f.el = l.el;
      f.children !== l.children && u(m, f.children);
    }
  }, B = (l, f, p, _) => {
    l == null ? o(f.el = a(f.children || ""), p, _) : f.el = l.el;
  }, $ = (l, f, p, _) => {
    [l.el, l.anchor] = k(l.children, f, p, _, l.el, l.anchor);
  }, w = (l, f, p, _) => {
    if (f.children !== l.children) {
      const m = g(l.anchor);
      P(l), [f.el, f.anchor] = k(f.children, p, m, _);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, z = ({ el: l, anchor: f }, p, _) => {
    let m;
    for (; l && l !== f; )
      m = g(l), o(l, p, _), l = m;
    o(f, p, _);
  }, P = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = g(l), r(l), l = p;
    r(f);
  }, Ne = (l, f, p, _, m, E, O, b, N) => {
    O = O || f.type === "svg", l == null ? Ve(f, p, _, m, E, O, b, N) : Z(l, f, m, E, O, b, N);
  }, Ve = (l, f, p, _, m, E, O, b) => {
    let N, v;
    const { type: V, props: x, shapeFlag: T, transition: M, dirs: H } = l;
    if (N = l.el = i(l.type, E, x && x.is, x), T & 8 ? h(N, l.children) : T & 16 && X(l.children, N, null, _, m, E && V !== "foreignObject", O, b), H && et(l, null, _, "created"), x) {
      for (const W in x)
        W !== "value" && !en(W) && s(N, W, null, x[W], E, l.children, _, m, Se);
      "value" in x && s(N, "value", null, x.value), (v = x.onVnodeBeforeMount) && $e(v, _, l);
    }
    F(N, l, l.scopeId, O, _), process.env.NODE_ENV !== "production" && (Object.defineProperty(N, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(N, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), H && et(l, null, _, "beforeMount");
    const q = (!m || m && !m.pendingBranch) && M && !M.persisted;
    q && M.beforeEnter(N), o(N, f, p), ((v = x && x.onVnodeMounted) || q || H) && pe(() => {
      v && $e(v, _, l), q && M.enter(N), H && et(l, null, _, "mounted");
    }, m);
  }, F = (l, f, p, _, m) => {
    if (p && D(l, p), _)
      for (let E = 0; E < _.length; E++)
        D(l, _[E]);
    if (m) {
      let E = m.subTree;
      if (process.env.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Gr(E.children) || E), f === E) {
        const O = m.vnode;
        F(l, O, O.scopeId, O.slotScopeIds, m.parent);
      }
    }
  }, X = (l, f, p, _, m, E, O, b, N = 0) => {
    for (let v = N; v < l.length; v++) {
      const V = l[v] = b ? Je(l[v]) : we(l[v]);
      C(null, V, f, p, _, m, E, O, b);
    }
  }, Z = (l, f, p, _, m, E, O) => {
    const b = f.el = l.el;
    let { patchFlag: N, dynamicChildren: v, dirs: V } = f;
    N |= l.patchFlag & 16;
    const x = l.props || U, T = f.props || U;
    let M;
    p && tt(p, !1), (M = T.onVnodeBeforeUpdate) && $e(M, p, f, l), V && et(f, l, p, "beforeUpdate"), p && tt(p, !0), process.env.NODE_ENV !== "production" && ut && (N = 0, O = !1, v = null);
    const H = m && f.type !== "foreignObject";
    if (v ? (le(l.dynamicChildren, v, b, p, _, H, E), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && rn(l, f)) : O || Ce(l, f, b, null, p, _, H, E, !1), N > 0) {
      if (N & 16)
        re(b, f, x, T, p, _, m);
      else if (N & 2 && x.class !== T.class && s(b, "class", null, T.class, m), N & 4 && s(b, "style", x.style, T.style, m), N & 8) {
        const q = f.dynamicProps;
        for (let W = 0; W < q.length; W++) {
          const G = q[W], ye = x[G], vt = T[G];
          (vt !== ye || G === "value") && s(b, G, ye, vt, m, l.children, p, _, Se);
        }
      }
      N & 1 && l.children !== f.children && h(b, f.children);
    } else
      !O && v == null && re(b, f, x, T, p, _, m);
    ((M = T.onVnodeUpdated) || V) && pe(() => {
      M && $e(M, p, f, l), V && et(f, l, p, "updated");
    }, _);
  }, le = (l, f, p, _, m, E, O) => {
    for (let b = 0; b < f.length; b++) {
      const N = l[b], v = f[b], V = N.el && (N.type === Oe || !st(N, v) || N.shapeFlag & 70) ? d(N.el) : p;
      C(N, v, V, null, _, m, E, O, !0);
    }
  }, re = (l, f, p, _, m, E, O) => {
    if (p !== _) {
      if (p !== U)
        for (const b in p)
          !en(b) && !(b in _) && s(l, b, p[b], null, O, f.children, m, E, Se);
      for (const b in _) {
        if (en(b))
          continue;
        const N = _[b], v = p[b];
        N !== v && b !== "value" && s(l, b, v, N, O, f.children, m, E, Se);
      }
      "value" in _ && s(l, "value", p.value, _.value);
    }
  }, Pe = (l, f, p, _, m, E, O, b, N) => {
    const v = f.el = l ? l.el : c(""), V = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: T, slotScopeIds: M } = f;
    process.env.NODE_ENV !== "production" && (ut || x & 2048) && (x = 0, N = !1, T = null), M && (b = b ? b.concat(M) : M), l == null ? (o(v, p, _), o(V, p, _), X(f.children, p, V, m, E, O, b, N)) : x > 0 && x & 64 && T && l.dynamicChildren ? (le(l.dynamicChildren, T, p, m, E, O, b), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? rn(l, f) : (f.key != null || m && f === m.subTree) && rn(l, f, !0)) : Ce(l, f, p, V, m, E, O, b, N);
  }, qt = (l, f, p, _, m, E, O, b, N) => {
    f.slotScopeIds = b, l == null ? f.shapeFlag & 512 ? m.ctx.activate(f, p, _, O, N) : Ue(f, p, _, m, E, O, N) : de(l, f, N);
  }, Ue = (l, f, p, _, m, E, O) => {
    const b = l.component = ql(l, _, m);
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && $i(b), process.env.NODE_ENV !== "production" && (tn(l), Re(b, "mount")), Wt(l) && (b.ctx.renderer = _t), process.env.NODE_ENV !== "production" && Re(b, "init"), Xl(b), process.env.NODE_ENV !== "production" && Fe(b, "init"), b.asyncDep) {
      if (m && m.registerDep(b, j), !l.el) {
        const N = b.subTree = te(ie);
        B(null, N, f, p);
      }
      return;
    }
    j(b, l, f, p, m, E, O), process.env.NODE_ENV !== "production" && (nn(), Fe(b, "mount"));
  }, de = (l, f, p) => {
    const _ = f.component = l.component;
    if (Wi(l, f, p))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && tn(f), L(_, f, p), process.env.NODE_ENV !== "production" && nn();
        return;
      } else
        _.next = f, Ci(_.update), _.update();
    else
      f.el = l.el, _.vnode = f;
  }, j = (l, f, p, _, m, E, O) => {
    const b = () => {
      if (l.isMounted) {
        let { next: V, bu: x, u: T, parent: M, vnode: H } = l, q = V, W;
        process.env.NODE_ENV !== "production" && tn(V || l.vnode), tt(l, !1), V ? (V.el = H.el, L(l, V, O)) : V = H, x && $t(x), (W = V.props && V.props.onVnodeBeforeUpdate) && $e(W, M, V, H), tt(l, !0), process.env.NODE_ENV !== "production" && Re(l, "render");
        const G = kn(l);
        process.env.NODE_ENV !== "production" && Fe(l, "render");
        const ye = l.subTree;
        l.subTree = G, process.env.NODE_ENV !== "production" && Re(l, "patch"), C(
          ye,
          G,
          d(ye.el),
          Jt(ye),
          l,
          m,
          E
        ), process.env.NODE_ENV !== "production" && Fe(l, "patch"), V.el = G.el, q === null && qi(l, G.el), T && pe(T, m), (W = V.props && V.props.onVnodeUpdated) && pe(() => $e(W, M, V, H), m), process.env.NODE_ENV !== "production" && Yr(l), process.env.NODE_ENV !== "production" && nn();
      } else {
        let V;
        const { el: x, props: T } = f, { bm: M, m: H, parent: q } = l, W = on(f);
        if (tt(l, !1), M && $t(M), !W && (V = T && T.onVnodeBeforeMount) && $e(V, q, f), tt(l, !0), x && Mn) {
          const G = () => {
            process.env.NODE_ENV !== "production" && Re(l, "render"), l.subTree = kn(l), process.env.NODE_ENV !== "production" && Fe(l, "render"), process.env.NODE_ENV !== "production" && Re(l, "hydrate"), Mn(x, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Fe(l, "hydrate");
          };
          W ? f.type.__asyncLoader().then(
            () => !l.isUnmounted && G()
          ) : G();
        } else {
          process.env.NODE_ENV !== "production" && Re(l, "render");
          const G = l.subTree = kn(l);
          process.env.NODE_ENV !== "production" && Fe(l, "render"), process.env.NODE_ENV !== "production" && Re(l, "patch"), C(null, G, p, _, l, m, E), process.env.NODE_ENV !== "production" && Fe(l, "patch"), f.el = G.el;
        }
        if (H && pe(H, m), !W && (V = T && T.onVnodeMounted)) {
          const G = f;
          pe(() => $e(V, q, G), m);
        }
        (f.shapeFlag & 256 || q && on(q.vnode) && q.vnode.shapeFlag & 256) && l.a && pe(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Si(l), f = p = _ = null;
      }
    }, N = l.effect = new ho(
      b,
      () => On(v),
      l.scope
    ), v = l.update = () => N.run();
    v.id = l.uid, tt(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (V) => $t(l.rtc, V) : void 0, N.onTrigger = l.rtg ? (V) => $t(l.rtg, V) : void 0, v.ownerInstance = l), v();
  }, L = (l, f, p) => {
    f.component = l;
    const _ = l.vnode.props;
    l.vnode = f, l.next = null, yl(l, f.props, _, p), $l(l, f.children, p), ht(), Uo(), mt();
  }, Ce = (l, f, p, _, m, E, O, b, N = !1) => {
    const v = l && l.children, V = l ? l.shapeFlag : 0, x = f.children, { patchFlag: T, shapeFlag: M } = f;
    if (T > 0) {
      if (T & 128) {
        Ct(v, x, p, _, m, E, O, b, N);
        return;
      } else if (T & 256) {
        Tn(v, x, p, _, m, E, O, b, N);
        return;
      }
    }
    M & 8 ? (V & 16 && Se(v, m, E), x !== v && h(p, x)) : V & 16 ? M & 16 ? Ct(v, x, p, _, m, E, O, b, N) : Se(v, m, E, !0) : (V & 8 && h(p, ""), M & 16 && X(x, p, _, m, E, O, b, N));
  }, Tn = (l, f, p, _, m, E, O, b, N) => {
    l = l || Ot, f = f || Ot;
    const v = l.length, V = f.length, x = Math.min(v, V);
    let T;
    for (T = 0; T < x; T++) {
      const M = f[T] = N ? Je(f[T]) : we(f[T]);
      C(l[T], M, p, null, m, E, O, b, N);
    }
    v > V ? Se(l, m, E, !0, !1, x) : X(f, p, _, m, E, O, b, N, x);
  }, Ct = (l, f, p, _, m, E, O, b, N) => {
    let v = 0;
    const V = f.length;
    let x = l.length - 1, T = V - 1;
    for (; v <= x && v <= T; ) {
      const M = l[v], H = f[v] = N ? Je(f[v]) : we(f[v]);
      if (st(M, H))
        C(M, H, p, null, m, E, O, b, N);
      else
        break;
      v++;
    }
    for (; v <= x && v <= T; ) {
      const M = l[x], H = f[T] = N ? Je(f[T]) : we(f[T]);
      if (st(M, H))
        C(M, H, p, null, m, E, O, b, N);
      else
        break;
      x--, T--;
    }
    if (v > x) {
      if (v <= T) {
        const M = T + 1, H = M < V ? f[M].el : _;
        for (; v <= T; )
          C(null, f[v] = N ? Je(f[v]) : we(f[v]), p, H, m, E, O, b, N), v++;
      }
    } else if (v > T)
      for (; v <= x; )
        Ke(l[v], m, E, !0), v++;
    else {
      const M = v, H = v, q = /* @__PURE__ */ new Map();
      for (v = H; v <= T; v++) {
        const ae = f[v] = N ? Je(f[v]) : we(f[v]);
        ae.key != null && (process.env.NODE_ENV !== "production" && q.has(ae.key) && y("Duplicate keys found during update:", JSON.stringify(ae.key), "Make sure keys are unique."), q.set(ae.key, v));
      }
      let W, G = 0;
      const ye = T - H + 1;
      let vt = !1, Io = 0;
      const Tt = new Array(ye);
      for (v = 0; v < ye; v++)
        Tt[v] = 0;
      for (v = M; v <= x; v++) {
        const ae = l[v];
        if (G >= ye) {
          Ke(ae, m, E, !0);
          continue;
        }
        let Te;
        if (ae.key != null)
          Te = q.get(ae.key);
        else
          for (W = H; W <= T; W++)
            if (Tt[W - H] === 0 && st(ae, f[W])) {
              Te = W;
              break;
            }
        Te === void 0 ? Ke(ae, m, E, !0) : (Tt[Te - H] = v + 1, Te >= Io ? Io = Te : vt = !0, C(ae, f[Te], p, null, m, E, O, b, N), G++);
      }
      const Mo = vt ? Sl(Tt) : Ot;
      for (W = Mo.length - 1, v = ye - 1; v >= 0; v--) {
        const ae = H + v, Te = f[ae], Ao = ae + 1 < V ? f[ae + 1].el : _;
        Tt[v] === 0 ? C(null, Te, p, Ao, m, E, O, b, N) : vt && (W < 0 || v !== Mo[W] ? gt(Te, p, Ao, 2) : W--);
      }
    }
  }, gt = (l, f, p, _, m = null) => {
    const { el: E, type: O, transition: b, children: N, shapeFlag: v } = l;
    if (v & 6) {
      gt(l.component.subTree, f, p, _);
      return;
    }
    if (v & 128) {
      l.suspense.move(f, p, _);
      return;
    }
    if (v & 64) {
      O.move(l, f, p, _t);
      return;
    }
    if (O === Oe) {
      o(E, f, p);
      for (let x = 0; x < N.length; x++)
        gt(N[x], f, p, _);
      o(l.anchor, f, p);
      return;
    }
    if (O === sn) {
      z(l, f, p);
      return;
    }
    if (_ !== 2 && v & 1 && b)
      if (_ === 0)
        b.beforeEnter(E), o(E, f, p), pe(() => b.enter(E), m);
      else {
        const { leave: x, delayLeave: T, afterLeave: M } = b, H = () => o(E, f, p), q = () => {
          x(E, () => {
            H(), M && M();
          });
        };
        T ? T(E, H, q) : q();
      }
    else
      o(E, f, p);
  }, Ke = (l, f, p, _ = !1, m = !1) => {
    const { type: E, props: O, ref: b, children: N, dynamicChildren: v, shapeFlag: V, patchFlag: x, dirs: T } = l;
    if (b != null && oo(b, null, p, l, !0), V & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const M = V & 1 && T, H = !on(l);
    let q;
    if (H && (q = O && O.onVnodeBeforeUnmount) && $e(q, f, l), V & 6)
      $s(l.component, p, _);
    else {
      if (V & 128) {
        l.suspense.unmount(p, _);
        return;
      }
      M && et(l, null, f, "beforeUnmount"), V & 64 ? l.type.remove(l, f, p, m, _t, _) : v && (E !== Oe || x > 0 && x & 64) ? Se(v, f, p, !1, !0) : (E === Oe && x & 384 || !m && V & 16) && Se(N, f, p), _ && $n(l);
    }
    (H && (q = O && O.onVnodeUnmounted) || M) && pe(() => {
      q && $e(q, f, l), M && et(l, null, f, "unmounted");
    }, p);
  }, $n = (l) => {
    const { type: f, el: p, anchor: _, transition: m } = l;
    if (f === Oe) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === ie ? r(O.el) : $n(O);
      }) : Ts(p, _);
      return;
    }
    if (f === sn) {
      P(l);
      return;
    }
    const E = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(p, E);
      b ? b(l.el, E, N) : N();
    } else
      E();
  }, Ts = (l, f) => {
    let p;
    for (; l !== f; )
      p = g(l), r(l), l = p;
    r(f);
  }, $s = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ii(l);
    const { bum: _, scope: m, update: E, subTree: O, um: b } = l;
    _ && $t(_), m.stop(), E && (E.active = !1, Ke(O, l, f, p)), b && pe(b, f), pe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ri(l);
  }, Se = (l, f, p, _ = !1, m = !1, E = 0) => {
    for (let O = E; O < l.length; O++)
      Ke(l[O], f, p, _, m);
  }, Jt = (l) => l.shapeFlag & 6 ? Jt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : g(l.anchor || l.el), $o = (l, f, p) => {
    l == null ? f._vnode && Ke(f._vnode, null, null, !0) : C(f._vnode || null, l, f, null, null, null, p), Uo(), zr(), f._vnode = l;
  }, _t = {
    p: C,
    um: Ke,
    m: gt,
    r: $n,
    mt: Ue,
    mc: X,
    pc: Ce,
    pbc: le,
    n: Jt,
    o: e
  };
  let In, Mn;
  return t && ([In, Mn] = t(_t)), {
    render: $o,
    hydrate: In,
    createApp: Ml($o, In)
  };
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function rn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (I(o) && I(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Je(r[s]), c.el = i.el), n || rn(i, c)), process.env.NODE_ENV !== "production" && c.type === ie && !c.el && (c.el = i.el);
    }
}
function Sl(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const u = e[o];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < u ? s = c + 1 : i = c;
      u < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Rl = (e) => e.__isTeleport, Oe = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Dn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ie = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), sn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Pt = [];
let xe = null;
function ge(e = !1) {
  Pt.push(xe = e ? null : []);
}
function Fl() {
  Pt.pop(), xe = Pt[Pt.length - 1] || null;
}
let Bt = 1;
function nr(e) {
  Bt += e;
}
function bs(e) {
  return e.dynamicChildren = Bt > 0 ? xe || Ot : null, Fl(), Bt > 0 && xe && xe.push(e), e;
}
function be(e, t, n, o, r, s) {
  return bs(J(e, t, n, o, r, s, !0));
}
function Hl(e, t, n, o, r) {
  return bs(te(e, t, n, o, r, !0));
}
function Do(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function st(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && bt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const jl = (...e) => Ns(...e), Vn = "__vInternal", Es = ({ key: e }) => e != null ? e : null, ln = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || oe(e) || A(e) ? { i: ve, r: e, k: t, f: !!n } : e : null;
function J(e, t = null, n = null, o = 0, r = null, s = e === Oe ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Es(t),
    ref: t && ln(t),
    scopeId: Qr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return c ? (Vo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && y("VNode created with invalid key (NaN). VNode type:", a.type), Bt > 0 && !i && xe && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && xe.push(a), a;
}
const te = process.env.NODE_ENV !== "production" ? jl : Ns;
function Ns(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === fl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ie), Do(e)) {
    const c = ke(e, t, !0);
    return n && Vo(c, n), Bt > 0 && !s && xe && (c.shapeFlag & 6 ? xe[xe.indexOf(e)] = c : xe.push(c)), c.patchFlag |= -2, c;
  }
  if (Ds(e) && (e = e.__vccOpts), t) {
    t = Ll(t);
    let { class: c, style: a } = t;
    c && !ee(c) && (t.class = me(c)), Y(a) && (Wn(a) && !I(a) && (a = Q({}, a)), t.style = St(a));
  }
  const i = ee(e) ? 1 : Ji(e) ? 128 : Rl(e) ? 64 : Y(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Wn(e) && (e = S(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), J(e, t, n, o, r, i, s, !0);
}
function Ll(e) {
  return e ? Wn(e) || Vn in e ? Q({}, e) : e : null;
}
function ke(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Kl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Es(c),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && I(i) ? i.map(ys) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ke(e.ssContent),
    ssFallback: e.ssFallback && ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ys(e) {
  const t = ke(e);
  return I(e.children) && (t.children = e.children.map(ys)), t;
}
function Bl(e = " ", t = 0) {
  return te(Dn, null, e, t);
}
function Ul(e = "", t = !1) {
  return t ? (ge(), Hl(ie, null, e)) : te(ie, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? te(ie) : I(e) ? te(
    Oe,
    null,
    e.slice()
  ) : typeof e == "object" ? Je(e) : te(Dn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ke(e);
}
function Vo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Vo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Vn in t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: ve }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Bl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = me([t.class, o.class]));
      else if (r === "style")
        t.style = St([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(I(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function $e(e, t, n, o = null) {
  Ee(e, t, 7, [
    n,
    o
  ]);
}
const zl = vs();
let Wl = 0;
function ql(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || zl, s = {
    uid: Wl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ls(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: ps(o, r),
    emitsOptions: Zr(o, r),
    emit: null,
    emitted: null,
    propsDefaults: U,
    inheritAttrs: o.inheritAttrs,
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = ul(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Li.bind(null, s), e.ce && e.ce(s), s;
}
let ne = null;
const Jl = () => ne || ve, Dt = (e) => {
  ne = e, e.scope.on();
}, dt = () => {
  ne && ne.scope.off(), ne = null;
}, Yl = /* @__PURE__ */ Vt("slot,component");
function ro(e, t) {
  const n = t.isNativeTag || gr;
  (Yl(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Os(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function Xl(e, t = !1) {
  Ut = t;
  const { props: n, children: o } = e.vnode, r = Os(e);
  El(e, n, r, t), Tl(e, o);
  const s = r ? Zl(e, t) : void 0;
  return Ut = !1, s;
}
function Zl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ro(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        ro(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        as(s[i]);
    }
    o.compilerOptions && Ql() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = kr(new Proxy(e.ctx, fs)), process.env.NODE_ENV !== "production" && dl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Gl(e) : null;
    Dt(e), ht();
    const i = He(r, e, 0, [process.env.NODE_ENV !== "production" ? Nt(e.props) : e.props, s]);
    if (mt(), dt(), fo(i)) {
      if (i.then(dt, dt), t)
        return i.then((c) => {
          or(e, c, t);
        }).catch((c) => {
          yn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      or(e, i, t);
  } else
    ws(e, t);
}
function or(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && Do(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Fr(t), process.env.NODE_ENV !== "production" && pl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), ws(e, n);
}
let so;
const Ql = () => !so;
function ws(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && so && !o.render) {
      const r = o.template || wo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Re(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: a } = o, u = Q(Q({
          isCustomElement: s,
          delimiters: c
        }, i), a);
        o.render = so(r, u), process.env.NODE_ENV !== "production" && Fe(e, "compile");
      }
    }
    e.render = o.render || se;
  }
  Dt(e), ht(), ml(e), mt(), dt(), process.env.NODE_ENV !== "production" && !o.render && e.render === se && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function rr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return dn(), he(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return he(e, "get", "$attrs"), t[n];
    }
  });
}
function Gl(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = rr(e));
    },
    get slots() {
      return Nt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = rr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Co(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fr(kr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in xt)
          return xt[n](e);
      }
    }));
}
const ec = /(?:^|[-_])(\w)/g, tc = (e) => e.replace(ec, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xs(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Cn(e, t, n = !1) {
  let o = xs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? tc(o) : n ? "App" : "Anonymous";
}
function Ds(e) {
  return A(e) && "__vccOpts" in e;
}
const Vs = (e, t) => Ei(e, t, Ut);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Fn(e) {
  return !!(e && e.__v_isShallow);
}
function nc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return Y(d) ? d.__isVue ? ["div", e, "VueInstance"] : oe(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : at(d) ? [
        "div",
        {},
        ["span", e, Fn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Ge(d) ? " (readonly)" : ""}`
      ] : Ge(d) ? [
        "div",
        {},
        ["span", e, Fn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", S(d.props))), d.setupState !== U && g.push(i("setup", d.setupState)), d.data !== U && g.push(i("data", S(d.data)));
    const D = a(d, "computed");
    D && g.push(i("computed", D));
    const k = a(d, "inject");
    return k && g.push(i("injected", k)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = Q({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : Y(d) ? ["object", { object: g ? S(d) : d }] : ["span", n, String(d)];
  }
  function a(d, g) {
    const D = d.type;
    if (A(D))
      return;
    const k = {};
    for (const C in d.ctx)
      u(D, C, g) && (k[C] = d.ctx[C]);
    return k;
  }
  function u(d, g, D) {
    const k = d[D];
    if (I(k) && k.includes(g) || Y(k) && g in k || d.extends && u(d.extends, g, D) || d.mixins && d.mixins.some((C) => u(C, g, D)))
      return !0;
  }
  function h(d) {
    return Fn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const sr = "3.2.40", oc = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, ir = it && /* @__PURE__ */ it.createElement("template"), rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? it.createElementNS(oc, e) : it.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ir.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = ir.content;
      if (o) {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
      }
      t.insertBefore(c, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function sc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ic(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    for (const s in n)
      io(o, s, n[s]);
    if (t && !ee(t))
      for (const s in t)
        n[s] == null && io(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const lr = /\s*!important$/;
function io(e, t, n) {
  if (I(n))
    n.forEach((o) => io(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = lc(e, t);
    lr.test(n) ? e.setProperty(De(o), n.replace(lr, ""), "important") : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], Hn = {};
function lc(e, t) {
  const n = Hn[t];
  if (n)
    return n;
  let o = Ze(t);
  if (o !== "filter" && o in e)
    return Hn[t] = o;
  o = _n(o);
  for (let r = 0; r < cr.length; r++) {
    const s = cr[r] + o;
    if (s in e)
      return Hn[t] = s;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function cc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const s = Ms(t);
    n == null || s && !hr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function ac(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n == null ? "" : n;
    (e.value !== a || e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = hr(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  c && e.removeAttribute(t);
}
const [Cs, fc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let lo = 0;
const uc = /* @__PURE__ */ Promise.resolve(), dc = () => {
  lo = 0;
}, pc = () => lo || (uc.then(dc), lo = Cs());
function hc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function mc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function gc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, a] = _c(t);
    if (o) {
      const u = s[t] = vc(o, r);
      hc(e, c, u, a);
    } else
      i && (mc(e, c, i, a), s[t] = void 0);
  }
}
const fr = /(?:Once|Passive|Capture)$/;
function _c(e) {
  let t;
  if (fr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(fr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : De(e.slice(2)), t];
}
function vc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || Cs();
    (fc || r >= n.attached - 1) && Ee(bc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = pc(), n;
}
function bc(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const ur = /^on[a-z]/, Ec = (e, t, n, o, r = !1, s, i, c, a) => {
  t === "class" ? sc(e, o, r) : t === "style" ? ic(e, n, o) : Kt(t) ? cn(t) || gc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, o, r)) ? ac(e, t, o, s, i, c, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), cc(e, t, o, r));
};
function Nc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ur.test(t) && A(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ur.test(t) && ee(n) ? !1 : t in e;
}
function yc(e, t) {
  const n = rs(e);
  class o extends To {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Oc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class To extends Oc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Br(() => {
      this._connected || (pr(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: r, styles: s } = o, i = !I(r), c = r ? i ? Object.keys(r) : r : [];
      let a;
      if (i)
        for (const u in this._props) {
          const h = r[u];
          (h === Number || h && h.type === Number) && (this._props[u] = jn(this._props[u]), (a || (a = /* @__PURE__ */ Object.create(null)))[u] = !0);
        }
      this._numberProps = a;
      for (const u of Object.keys(this))
        u[0] !== "_" && this._setProp(u, this[u], !0, !1);
      for (const u of c.map(Ze))
        Object.defineProperty(this, u, {
          get() {
            return this._getProp(u);
          },
          set(h) {
            this._setProp(u, h);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = jn(n)), this._setProp(Ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(De(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(De(t), n + "") : n || this.removeAttribute(De(t))));
  }
  _update() {
    pr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = te(this._def, Q({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (r, ...s) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: s
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof To) {
          n.parent = o._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const wc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
el.props;
const xc = /* @__PURE__ */ Q({ patchProp: Ec }, rc);
let dr;
function Dc() {
  return dr || (dr = kl(xc));
}
const pr = (...e) => {
  Dc().render(...e);
};
function Vc() {
  nc();
}
process.env.NODE_ENV !== "production" && Vc();
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
var Cc = function(e) {
  e === void 0 && (e = 0);
  var t = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (t += String(Number(e) + 1));
  for (var r = 0; r < o.length; r++)
    t += n.charAt(Math.floor(Math.random() * n.length)), t += o.charAt(r);
  return t;
};
const Be = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Tc = {}, $c = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-paragraph",
  viewBox: "0 0 16 16"
}, Ic = /* @__PURE__ */ J("path", { d: "M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" }, null, -1), Mc = [
  Ic
];
function Ac(e, t) {
  return ge(), be("svg", $c, Mc);
}
const kc = /* @__PURE__ */ Be(Tc, [["render", Ac]]), Pc = {}, Sc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h1",
  viewBox: "0 0 16 16"
}, Rc = /* @__PURE__ */ J("path", { d: "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" }, null, -1), Fc = [
  Rc
];
function Hc(e, t) {
  return ge(), be("svg", Sc, Fc);
}
const jc = /* @__PURE__ */ Be(Pc, [["render", Hc]]), Lc = {}, Bc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h2",
  viewBox: "0 0 16 16"
}, Uc = /* @__PURE__ */ J("path", { d: "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" }, null, -1), Kc = [
  Uc
];
function zc(e, t) {
  return ge(), be("svg", Bc, Kc);
}
const Wc = /* @__PURE__ */ Be(Lc, [["render", zc]]), qc = {}, Jc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h3",
  viewBox: "0 0 16 16"
}, Yc = /* @__PURE__ */ J("path", { d: "M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" }, null, -1), Xc = [
  Yc
];
function Zc(e, t) {
  return ge(), be("svg", Jc, Xc);
}
const Qc = /* @__PURE__ */ Be(qc, [["render", Zc]]), Gc = {}, ea = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-bold",
  viewBox: "0 0 16 16"
}, ta = /* @__PURE__ */ J("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" }, null, -1), na = [
  ta
];
function oa(e, t) {
  return ge(), be("svg", ea, na);
}
const ra = /* @__PURE__ */ Be(Gc, [["render", oa]]), sa = {}, ia = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-italic",
  viewBox: "0 0 16 16"
}, la = /* @__PURE__ */ J("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }, null, -1), ca = [
  la
];
function aa(e, t) {
  return ge(), be("svg", ia, ca);
}
const fa = /* @__PURE__ */ Be(sa, [["render", aa]]), ua = {}, da = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-underline",
  viewBox: "0 0 16 16"
}, pa = /* @__PURE__ */ J("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" }, null, -1), ha = [
  pa
];
function ma(e, t) {
  return ge(), be("svg", da, ha);
}
const ga = /* @__PURE__ */ Be(ua, [["render", ma]]), _a = {}, va = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-strikethrough",
  viewBox: "0 0 16 16"
}, ba = /* @__PURE__ */ J("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" }, null, -1), Ea = [
  ba
];
function Na(e, t) {
  return ge(), be("svg", va, Ea);
}
const ya = /* @__PURE__ */ Be(_a, [["render", Na]]), Oa = { class: "editor editorText tedirEditor" }, wa = { class: "editorToolbar" }, xa = { class: "editorMenu" }, Da = {
  key: 0,
  class: "editorMenu"
}, Va = ["value"], Ca = ["srcdoc"], Ta = { class: "editorStatusbar" }, $a = { class: "editorMenu" }, Ia = { class: "editorItem plain" }, Ma = { class: "editorMenu" }, Aa = { class: "editorItem plain" }, ka = /* @__PURE__ */ rs({
  __name: "TextEditor",
  props: {
    modelValue: { default: "<p></p>" },
    height: { default: "300px" },
    showCode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = We("p"), r = We(""), s = We(null), i = We(null), c = We(null), a = We(n.modelValue || "<p></p>"), u = We("text");
    Cc();
    const h = Vs(() => `<!doctype html>
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
    ${a.value.replace(/\<(p|h1|h2|h3)\>/g, '<div data-tag="$1">').replace(/\<\/(p|h1|h2|h3)\>/g, "</div>").replace(/\<(b|i|u|s)\>/g, '<span data-tag="$1">').replace(/\<\/(b|i|u|s)\>/g, "</span>")}
  </body>
</html>`);
    yo(() => {
      if (s.value !== null) {
        const $ = s.value.contentDocument, w = [].slice.call($.body.children);
        for (let z of w)
          z.addEventListener("click", d);
        $.addEventListener("selectionchange", K);
      }
    }), is(() => {
      if (s.value !== null) {
        const $ = s.value.contentDocument, w = [].slice.call($.body.children);
        for (let z of w)
          z.addEventListener("click", d);
        $.addEventListener("selectionchange", K);
      }
    });
    const d = ($) => {
      $.target.tagName.toLowerCase() === "div" && (i.value = $.target, o.value = $.target.getAttribute("data-tag"));
    }, g = () => {
      i.value !== null && i.value.tagName.toLowerCase() === "div" && (i.value.setAttribute("data-tag", o.value), k());
    }, D = We(null), k = () => {
      clearTimeout(D.value), D.value = setTimeout(() => {
        if (s.value !== null) {
          const z = [].slice.call(s.value.contentDocument.body.children).map((P) => {
            const Ne = P.getAttribute("data-tag");
            return `<${Ne}>${C(P.childNodes)}</${Ne}>`;
          }).join(`
`).replaceAll("<null></null>", "");
          t("update:modelValue", z);
        }
      }, 300);
    }, C = ($) => {
      let w = "";
      for (let z of $)
        if (z.nodeName === "#text")
          w = w + z.nodeValue;
        else if (z.childNodes) {
          const P = z.getAttribute("data-tag");
          w = w + `<${P}>${C(z.childNodes)}</${P}>`;
        }
      return w;
    }, K = ($) => {
      r.value = "";
      const w = s.value.contentDocument.getSelection();
      (Number((w == null ? void 0 : w.anchorOffset) || 0) !== 0 && Number((w == null ? void 0 : w.focusOffset) || 0) !== 0 || Number((w == null ? void 0 : w.anchorOffset) || 0) < Number((w == null ? void 0 : w.focusOffset) || 0)) && (c.value = w);
    }, B = () => {
      if (c.value !== null) {
        const $ = c.value.getRangeAt(0), w = s.value.contentDocument.createElement("span");
        w.setAttribute("data-tag", r.value), $.surroundContents(w), k();
      }
    };
    return ($, w) => {
      var z;
      return ge(), be("div", Oa, [
        J("div", wa, [
          J("ul", xa, [
            J("li", {
              class: me(["editorItem", o.value === "p" ? "active" : ""]),
              onClick: w[0] || (w[0] = (P) => {
                o.value = "p", g();
              })
            }, [
              te(kc)
            ], 2),
            J("li", {
              class: me(["editorItem", o.value === "h1" ? "active" : ""]),
              onClick: w[1] || (w[1] = (P) => {
                o.value = "h1", g();
              })
            }, [
              te(jc)
            ], 2),
            J("li", {
              class: me(["editorItem", o.value === "h2" ? "active" : ""]),
              onClick: w[2] || (w[2] = (P) => {
                o.value = "h2", g();
              })
            }, [
              te(Wc)
            ], 2),
            J("li", {
              class: me(["editorItem", o.value === "h3" ? "active" : ""]),
              onClick: w[3] || (w[3] = (P) => {
                o.value = "h3", g();
              })
            }, [
              te(Qc)
            ], 2),
            J("li", {
              class: me(["editorItem", r.value === "b" ? "active" : ""]),
              onClick: w[4] || (w[4] = (P) => {
                r.value = "b", B();
              })
            }, [
              te(ra)
            ], 2),
            J("li", {
              class: me(["editorItem", r.value === "i" ? "active" : ""]),
              onClick: w[5] || (w[5] = (P) => {
                r.value = "i", B();
              })
            }, [
              te(fa)
            ], 2),
            J("li", {
              class: me(["editorItem", r.value === "u" ? "active" : ""]),
              onClick: w[6] || (w[6] = (P) => {
                r.value = "u", B();
              })
            }, [
              te(ga)
            ], 2),
            J("li", {
              class: me(["editorItem", r.value === "s" ? "active" : ""]),
              onClick: w[7] || (w[7] = (P) => {
                r.value = "s", B();
              })
            }, [
              te(ya)
            ], 2)
          ]),
          e.showCode === !0 ? (ge(), be("ul", Da, [
            J("li", {
              class: me(["editorItem", { active: u.value === "text" }]),
              onClick: w[8] || (w[8] = (P) => u.value = "text")
            }, "Editor", 2),
            J("li", {
              class: me(["editorItem", { active: u.value === "html" }]),
              onClick: w[9] || (w[9] = (P) => u.value = "html")
            }, "HTML", 2)
          ])) : Ul("", !0)
        ]),
        e.showCode === !0 && u.value === "html" ? (ge(), be("textarea", {
          key: 0,
          class: "editorContent",
          value: (z = s.value) == null ? void 0 : z.contentWindow.document.body.innerHTML,
          style: St({ height: e.height }),
          readonly: ""
        }, null, 12, Va)) : (ge(), be("iframe", {
          key: 1,
          ref_key: "editorContentRef",
          ref: s,
          src: "about:blank",
          srcdoc: Rr(h),
          class: "editorContent",
          style: St({ height: e.height })
        }, null, 12, Ca)),
        J("div", Ta, [
          J("ul", $a, [
            J("li", Ia, ko(o.value) + " > Status", 1)
          ]),
          J("ul", Ma, [
            J("li", Aa, "Total: " + ko(String(a.value).split(" ").length) + " words", 1)
          ])
        ])
      ]);
    };
  }
}), Pa = `.editor[data-v-e3c47aed]{width:100%;background-color:#fff;background-clip:border-box;word-wrap:break-word}.editor>*[data-v-e3c47aed]:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.editor>*[data-v-e3c47aed]:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.editorToolbar[data-v-e3c47aed]{border-bottom:1px solid #d9d9d9;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:.5rem;background-color:#fff;color:inherit}.editorStatusbar[data-v-e3c47aed]{border-top:1px solid #d9d9d9;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:.5rem;background-color:#fff;color:inherit}.editorContent[data-v-e3c47aed]{flex:1 1 auto;padding:1rem .75rem;outline:0;display:block;position:relative;z-index:14;background-color:#fff;border-color:#d9d9d9}.editorMenu[data-v-e3c47aed]{display:flex;padding-left:0;margin:0;list-style:none;gap:5px}.editorItem[data-v-e3c47aed]{display:block;padding:.25rem;border-radius:.25rem;color:#4a5568;text-decoration:none;cursor:pointer;border:1px solid transparent;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}.editorItem[data-v-e3c47aed]:not(.active):not(.plain):hover{background-color:#f2f2f2;color:inherit;border-color:#d9d9d9}.editorItem.active[data-v-e3c47aed]{background-color:#e7eefa;color:inherit;border-color:#b8e7fd}.editorItem.plain[data-v-e3c47aed]{cursor:default}.editorText[data-v-e3c47aed]{position:relative;display:flex;flex-direction:column;border:1px solid #d9d9d9;border-radius:.25rem;z-index:15}.editorTooltip[data-v-e3c47aed]{position:relative;display:flex;flex-direction:column}.editorSection[data-v-e3c47aed]{border-top-left-radius:0}.editorSection .editorBlock[data-v-e3c47aed]{position:relative;display:flex;flex-direction:column;border:1px solid #d9d9d9;border-radius:.25rem;z-index:15;border-top-left-radius:0;margin-top:47px}.editorSection .editorBlock .editorToolbar[data-v-e3c47aed]{position:absolute;top:-37px;left:-1px;border:1px solid #d9d9d9;border-top-right-radius:.25rem;border-top-left-radius:.25rem;z-index:13}.editorBackdrop[data-v-e3c47aed]{position:fixed;z-index:25;inset:0 3em 3em 0;width:100vw;height:100vh;display:none}.editorInline[data-v-e3c47aed]{position:relative;display:inline-block}.editorInline .editorToolbar[data-v-e3c47aed]{visibility:hidden;position:absolute;z-index:75;bottom:-47px;left:0px;display:inline-block;border:1px solid #d9d9d9;border-radius:.25rem}.editorInline:hover .editorToolbar[data-v-e3c47aed]{visibility:visible}.editorInline .editorToolbar[data-v-e3c47aed]:after{content:"";position:absolute;z-index:74;top:-16px;left:20px;margin-left:-10px;border-width:8px;border-style:solid;transform:rotate(180deg);border-color:#d9d9d9 transparent transparent transparent}@media (prefers-color-scheme: dark){.editor[data-v-e3c47aed]{background-color:#2f2f2f}.editorToolbar[data-v-e3c47aed],.editorStatusbar[data-v-e3c47aed],.editorContent[data-v-e3c47aed]{background-color:#2f2f2f;border-color:#5f5f5f}.editorItem[data-v-e3c47aed]{color:#d9d9d9}.editorItem[data-v-e3c47aed]:not(.active):not(.plain):hover{background-color:#5f5f5f;color:#d9d9d9;border-color:#5f5f5f}.editorItem.active[data-v-e3c47aed]{background-color:#4a5568;color:#b8e7fd;border-color:#b8e7fd}.editorText[data-v-e3c47aed],.editorSection .editorBlock[data-v-e3c47aed],.editorSection .editorBlock .editorToolbar[data-v-e3c47aed],.editorInline .editorToolbar[data-v-e3c47aed]{border-color:#5f5f5f}.editorInline .editorToolbar[data-v-e3c47aed]:after{border-color:#5f5f5f transparent transparent transparent}}@media (prefers-color-scheme: light){[data-mode=dark] .editor[data-v-e3c47aed]{background-color:#2f2f2f}[data-mode=dark] .editorToolbar[data-v-e3c47aed],[data-mode=dark] .editorStatusbar[data-v-e3c47aed],[data-mode=dark] .editorContent[data-v-e3c47aed]{background-color:#2f2f2f;border-color:#5f5f5f}[data-mode=dark] .editorItem[data-v-e3c47aed]{color:#d9d9d9}[data-mode=dark] .editorItem[data-v-e3c47aed]:not(.active):not(.plain):hover{background-color:#5f5f5f;color:#d9d9d9;border-color:#5f5f5f}[data-mode=dark] .editorItem.active[data-v-e3c47aed]{background-color:#4a5568;color:#b8e7fd;border-color:#b8e7fd}[data-mode=dark] .editorText[data-v-e3c47aed],[data-mode=dark] .editorSection .editorBlock[data-v-e3c47aed],[data-mode=dark] .editorSection .editorBlock .editorToolbar[data-v-e3c47aed],[data-mode=dark] .editorInline .editorToolbar[data-v-e3c47aed]{border-color:#5f5f5f}[data-mode=dark] .editorInline .editorToolbar[data-v-e3c47aed]:after{border-color:#5f5f5f transparent transparent transparent}}@media (prefers-color-scheme: dark){[data-mode=light] .editor[data-v-e3c47aed]{background-color:#fff}[data-mode=light] .editorToolbar[data-v-e3c47aed],[data-mode=light] .editorStatusbar[data-v-e3c47aed],[data-mode=light] .editorContent[data-v-e3c47aed]{background-color:#fff;border-color:#d9d9d9}[data-mode=light] .editorItem[data-v-e3c47aed]{color:#4a5568}[data-mode=light] .editorItem[data-v-e3c47aed]:not(.active):not(.plain):hover{background-color:#f2f2f2;color:inherit;border-color:#d9d9d9}[data-mode=light] .editorItem.active[data-v-e3c47aed]{background-color:#e7eefa;color:inherit;border-color:#b8e7fd}[data-mode=light] .editorText[data-v-e3c47aed],[data-mode=light] .editorSection .editorBlock[data-v-e3c47aed],[data-mode=light] .editorSection .editorBlock .editorToolbar[data-v-e3c47aed],[data-mode=light] .editorInline .editorToolbar[data-v-e3c47aed]{border-color:#d9d9d9}[data-mode=light] .editorInline .editorToolbar[data-v-e3c47aed]:after{border-color:#d9d9d9 transparent transparent transparent}}
`, Sa = /* @__PURE__ */ Be(ka, [["styles", [Pa]], ["__scopeId", "data-v-e3c47aed"]]), Ra = yc(Sa);
function Fa() {
  customElements.define("text-editor", Ra);
}
export {
  Ra as TextEditor,
  Fa as useTedirEditor
};
