function Vt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Is = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", As = /* @__PURE__ */ Vt(Is);
function hr(e) {
  return !!e || e === "";
}
function Rt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = te(o) ? Ps(o) : Rt(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (te(e))
      return e;
    if (Z(e))
      return e;
  }
}
const Ms = /;(?![^(]*\))/g, ks = /:(.+)/;
function Ps(e) {
  const t = {};
  return e.split(Ms).forEach((n) => {
    if (n) {
      const o = n.split(ks);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = ge(e[n]);
      o && (t += o + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const kn = (e) => te(e) ? e : e == null ? "" : I(e) || Z(e) && (e.toString === vr || !k(e.toString)) ? JSON.stringify(e, mr, 2) : String(e), mr = (e, t) => t && t.__v_isRef ? mr(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : _r(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Z(t) && !I(t) && !br(t) ? String(t) : t, z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, gr = () => !1, Ss = /^on[^a-z]/, zt = (e) => Ss.test(e), an = (e) => e.startsWith("onUpdate:"), Q = Object.assign, ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rs = Object.prototype.hasOwnProperty, F = (e, t) => Rs.call(e, t), I = Array.isArray, lt = (e) => gn(e) === "[object Map]", _r = (e) => gn(e) === "[object Set]", k = (e) => typeof e == "function", te = (e) => typeof e == "string", fo = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", uo = (e) => Z(e) && k(e.then) && k(e.catch), vr = Object.prototype.toString, gn = (e) => vr.call(e), po = (e) => gn(e).slice(8, -1), br = (e) => gn(e) === "[object Object]", ho = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ Vt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fs = /* @__PURE__ */ Vt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, Ze = _n((e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")), js = /\B([A-Z])/g, Ve = _n((e) => e.replace(js, "-$1").toLowerCase()), vn = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = _n((e) => e ? `on${vn(e)}` : ""), Ft = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ln = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Po;
const Er = () => Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class Ls {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && Ae && (this.parent = Ae, this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Bn("cannot run an inactive effect scope.");
  }
  on() {
    Ae = this;
  }
  off() {
    Ae = this.parent;
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
function Bs(e, t = Ae) {
  t && t.active && t.effects.push(e);
}
const Ht = (e) => {
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
}, Un = /* @__PURE__ */ new WeakMap();
let At = 0, Qe = 1;
const Kn = 30;
let de;
const ct = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class mo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Bs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = de, n = Xe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = de, de = this, Xe = !0, Qe = 1 << ++At, At <= Kn ? Us(this) : So(this), this.fn();
    } finally {
      At <= Kn && Ks(this), Qe = 1 << --At, de = this.parent, Xe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    de === this ? this.deferStop = !0 : this.active && (So(this), this.onStop && this.onStop(), this.active = !1);
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
function me(e, t, n) {
  if (Xe && de) {
    let o = Un.get(e);
    o || Un.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ht());
    const s = process.env.NODE_ENV !== "production" ? { effect: de, target: e, type: t, key: n } : void 0;
    Wn(r, s);
  }
}
function Wn(e, t) {
  let n = !1;
  At <= Kn ? yr(e) || (e.n |= Qe, n = !Nr(e)) : n = !e.has(de), n && (e.add(de), de.deps.push(e), process.env.NODE_ENV !== "production" && de.onTrack && de.onTrack(Object.assign({ effect: de }, t)));
}
function Le(e, t, n, o, r, s) {
  const i = Un.get(e);
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
        I(e) ? ho(n) && c.push(i.get("length")) : (c.push(i.get(ct)), lt(e) && c.push(i.get(zn)));
        break;
      case "delete":
        I(e) || (c.push(i.get(ct)), lt(e) && c.push(i.get(zn)));
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
    process.env.NODE_ENV !== "production" ? Et(Ht(u), a) : Et(Ht(u));
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
  (e !== de || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Q({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const zs = /* @__PURE__ */ Vt("__proto__,__v_isRef,__isVue"), wr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fo)
), Ws = /* @__PURE__ */ bn(), qs = /* @__PURE__ */ bn(!1, !0), Js = /* @__PURE__ */ bn(!0), Ys = /* @__PURE__ */ bn(!0, !0), Fo = /* @__PURE__ */ Xs();
function Xs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = S(this);
      for (let s = 0, i = this.length; s < i; s++)
        me(o, "get", s + "");
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
function bn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Ar : Ir : t ? $r : Tr).get(o))
      return o;
    const i = I(o);
    if (!e && i && F(Fo, r))
      return Reflect.get(Fo, r, s);
    const c = Reflect.get(o, r, s);
    return (fo(r) ? wr.has(r) : zs(r)) || (e || me(o, "get", r), t) ? c : re(c) ? i && ho(r) ? c : c.value : Z(c) ? e ? Mr(c) : _o(c) : c;
  };
}
const Zs = /* @__PURE__ */ xr(), Qs = /* @__PURE__ */ xr(!0);
function xr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Ge(i) && re(i) && !re(r))
      return !1;
    if (!e && (!un(r) && !Ge(r) && (i = S(i), r = S(r)), !I(n) && re(i) && !re(r)))
      return i.value = r, !0;
    const c = I(n) && ho(o) ? Number(o) < n.length : F(n, o), a = Reflect.set(n, o, r, s);
    return n === S(s) && (c ? Ft(r, i) && Le(n, "set", o, r, i) : Le(n, "add", o, r)), a;
  };
}
function Gs(e, t) {
  const n = F(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Le(e, "delete", t, void 0, o), r;
}
function ei(e, t) {
  const n = Reflect.has(e, t);
  return (!fo(t) || !wr.has(t)) && me(e, "has", t), n;
}
function ti(e) {
  return me(e, "iterate", I(e) ? "length" : ct), Reflect.ownKeys(e);
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
    return process.env.NODE_ENV !== "production" && Bn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Bn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ni = /* @__PURE__ */ Q({}, Dr, {
  get: qs,
  set: Qs
}), oi = /* @__PURE__ */ Q({}, Vr, {
  get: Ys
}), go = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function Xt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = S(e), s = S(t);
  n || (t !== s && me(r, "get", t), me(r, "get", s));
  const { has: i } = En(r), c = o ? go : n ? vo : jt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Zt(e, t = !1) {
  const n = this.__v_raw, o = S(n), r = S(e);
  return t || (e !== r && me(o, "has", e), me(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Qt(e, t = !1) {
  return e = e.__v_raw, !t && me(S(e), "iterate", ct), Reflect.get(e, "size", e);
}
function Ho(e) {
  e = S(e);
  const t = S(this);
  return En(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function jo(e, t) {
  t = S(t);
  const n = S(this), { has: o, get: r } = En(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Cr(n, o, e) : (e = S(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Ft(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function Lo(e) {
  const t = S(this), { has: n, get: o } = En(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Cr(t, n, e) : (e = S(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Le(t, "delete", e, void 0, s), i;
}
function Bo() {
  const e = S(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? lt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), o;
}
function Gt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = S(i), a = t ? go : e ? vo : jt;
    return !e && me(c, "iterate", ct), i.forEach((u, h) => o.call(r, a(u), a(h), s));
  };
}
function en(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = S(r), i = lt(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...o), h = n ? go : t ? vo : jt;
    return !t && me(s, "iterate", a ? zn : ct), {
      next() {
        const { value: d, done: _ } = u.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: _
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function We(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${vn(e)} operation ${n}failed: target is readonly.`, S(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ri() {
  const e = {
    get(s) {
      return Xt(this, s);
    },
    get size() {
      return Qt(this);
    },
    has: Zt,
    add: Ho,
    set: jo,
    delete: Lo,
    clear: Bo,
    forEach: Gt(!1, !1)
  }, t = {
    get(s) {
      return Xt(this, s, !1, !0);
    },
    get size() {
      return Qt(this);
    },
    has: Zt,
    add: Ho,
    set: jo,
    delete: Lo,
    clear: Bo,
    forEach: Gt(!1, !0)
  }, n = {
    get(s) {
      return Xt(this, s, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(s) {
      return Zt.call(this, s, !0);
    },
    add: We("add"),
    set: We("set"),
    delete: We("delete"),
    clear: We("clear"),
    forEach: Gt(!0, !1)
  }, o = {
    get(s) {
      return Xt(this, s, !0, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(s) {
      return Zt.call(this, s, !0);
    },
    add: We("add"),
    set: We("set"),
    delete: We("delete"),
    clear: We("clear"),
    forEach: Gt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = en(s, !1, !1), n[s] = en(s, !0, !1), t[s] = en(s, !1, !0), o[s] = en(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [si, ii, li, ci] = /* @__PURE__ */ ri();
function Nn(e, t) {
  const n = t ? e ? ci : li : e ? ii : si;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(F(n, r) && r in o ? n : o, r, s);
}
const ai = {
  get: /* @__PURE__ */ Nn(!1, !1)
}, fi = {
  get: /* @__PURE__ */ Nn(!1, !0)
}, ui = {
  get: /* @__PURE__ */ Nn(!0, !1)
}, di = {
  get: /* @__PURE__ */ Nn(!0, !0)
};
function Cr(e, t, n) {
  const o = S(n);
  if (o !== n && t.call(e, o)) {
    const r = po(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Tr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(po(e));
}
function _o(e) {
  return Ge(e) ? e : yn(e, !1, Dr, ai, Tr);
}
function mi(e) {
  return yn(e, !1, ni, fi, $r);
}
function Mr(e) {
  return yn(e, !0, Vr, ui, Ir);
}
function Nt(e) {
  return yn(e, !0, oi, di, Ar);
}
function yn(e, t, n, o, r) {
  if (!Z(e))
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
function un(e) {
  return !!(e && e.__v_isShallow);
}
function qn(e) {
  return at(e) || Ge(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function kr(e) {
  return fn(e, "__v_skip", !0), e;
}
const jt = (e) => Z(e) ? _o(e) : e, vo = (e) => Z(e) ? Mr(e) : e;
function Pr(e) {
  Xe && de && (e = S(e), process.env.NODE_ENV !== "production" ? Wn(e.dep || (e.dep = Ht()), {
    target: e,
    type: "get",
    key: "value"
  }) : Wn(e.dep || (e.dep = Ht())));
}
function Sr(e, t) {
  e = S(e), e.dep && (process.env.NODE_ENV !== "production" ? Et(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Et(e.dep));
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function $e(e) {
  return gi(e, !1);
}
function gi(e, t) {
  return re(e) ? e : new _i(e, t);
}
class _i {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : S(t), this._value = n ? t : jt(t);
  }
  get value() {
    return Pr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || un(t) || Ge(t);
    t = n ? t : S(t), Ft(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : jt(t), Sr(this, t));
  }
}
function Rr(e) {
  return re(e) ? e.value : e;
}
const vi = {
  get: (e, t, n) => Rr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return re(r) && !re(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fr(e) {
  return at(e) ? e : new Proxy(e, vi);
}
var Hr;
class bi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hr] = !1, this._dirty = !0, this.effect = new mo(t, () => {
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
  const s = k(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : le) : (o = e.get, r = e.set);
  const i = new bi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ft = [];
function nn(e) {
  ft.push(e);
}
function on() {
  ft.pop();
}
function O(e, ...t) {
  ht();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ni();
  if (o)
    je(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Tn(n, s.type)}>`).join(`
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Tn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...wi(e.props), s] : [r + s];
}
function wi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jr(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = jr(e, S(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : k(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), n ? t : [`${e}=`, t]);
}
const bo = {
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
function je(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    On(s, t, n);
  }
  return r;
}
function Ne(e, t, n, o) {
  if (k(e)) {
    const s = je(e, t, n, o);
    return s && uo(s) && s.catch((i) => {
      On(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Ne(e[s], t, n, o));
  return r;
}
function On(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? bo[n] : n;
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
      je(a, null, 10, [e, i, c]);
      return;
    }
  }
  xi(e, n, r, o);
}
function xi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = bo[t];
    if (n && nn(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && on(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Lt = !1, Jn = !1;
const ae = [];
let ke = 0;
const wt = [];
let Me = null, qe = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let Eo = null;
const Di = 100;
function Br(e) {
  const t = Eo || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = ke + 1, n = ae.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Bt(ae[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  (!ae.length || !ae.includes(e, Lt && e.allowRecurse ? ke + 1 : ke)) && (e.id == null ? ae.push(e) : ae.splice(Vi(e.id), 0, e), Ur());
}
function Ur() {
  !Lt && !Jn && (Jn = !0, Eo = Lr.then(Wr));
}
function Ci(e) {
  const t = ae.indexOf(e);
  t > ke && ae.splice(t, 1);
}
function Kr(e) {
  I(e) ? wt.push(...e) : (!Me || !Me.includes(e, e.allowRecurse ? qe + 1 : qe)) && wt.push(e), Ur();
}
function Uo(e, t = Lt ? ke + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ae.length; t++) {
    const n = ae[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && No(e, n))
        continue;
      ae.splice(t, 1), t--, n();
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
    for (Me = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Me.sort((n, o) => Bt(n) - Bt(o)), qe = 0; qe < Me.length; qe++)
      process.env.NODE_ENV !== "production" && No(e, Me[qe]) || Me[qe]();
    Me = null, qe = 0;
  }
}
const Bt = (e) => e.id == null ? 1 / 0 : e.id, Ti = (e, t) => {
  const n = Bt(e) - Bt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  Jn = !1, Lt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ae.sort(Ti);
  const t = process.env.NODE_ENV !== "production" ? (n) => No(e, n) : le;
  try {
    for (ke = 0; ke < ae.length; ke++) {
      const n = ae[ke];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        je(n, null, 14);
      }
    }
  } finally {
    ke = 0, ae.length = 0, zr(e), Lt = !1, Eo = null, (ae.length || wt.length) && Wr(e);
  }
}
function No(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Di) {
      const o = t.ownerInstance, r = o && xs(o.type);
      return O(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let ut = !1;
const bt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Er().__VUE_HMR_RUNTIME__ = {
  createRecord: Pn(qr),
  rerender: Pn(Ai),
  reload: Pn(Mi)
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
function Ai(e, t) {
  const n = pt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, kt(o.type).render = t), o.renderCache = [], ut = !0, o.update(), ut = !1;
  }));
}
function Mi(e, t) {
  const n = pt.get(e);
  if (!n)
    return;
  t = kt(t), Ko(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = kt(r.type);
    bt.has(s) || (s !== n.initialDef && Ko(s, t), bt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (bt.add(s), r.ceReload(t.styles), bt.delete(s)) : r.parent ? (wn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
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
function Pn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let rt, Mt = [], Yn = !1;
function Wt(e, ...t) {
  rt ? rt.emit(e, ...t) : Yn || Mt.push({ event: e, args: t });
}
function Jr(e, t) {
  var n, o;
  rt = e, rt ? (rt.enabled = !0, Mt.forEach(({ event: r, args: s }) => rt.emit(r, ...s)), Mt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Jr(s, t);
  }), setTimeout(() => {
    rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yn = !0, Mt = []);
  }, 3e3)) : (Yn = !0, Mt = []);
}
function ki(e, t) {
  Wt("app:init", e, t, {
    Fragment: we,
    Text: Vn,
    Comment: ce,
    Static: ln
  });
}
function Pi(e) {
  Wt("app:unmount", e);
}
const Si = /* @__PURE__ */ yo("component:added"), Yr = /* @__PURE__ */ yo("component:updated"), Ri = /* @__PURE__ */ yo("component:removed");
function yo(e) {
  return (t) => {
    Wt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Fi = /* @__PURE__ */ Xr("perf:start"), Hi = /* @__PURE__ */ Xr("perf:end");
function Xr(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ji(e, t, n) {
  Wt("component:emit", e.appContext.app, e, t, n);
}
function Li(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || z;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [d] } = e;
    if (h)
      if (!(t in h))
        (!d || !(nt(t) in d)) && O(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(t)}" prop.`);
      else {
        const _ = h[t];
        k(_) && (_(...n) || O(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: _ } = o[h] || z;
    _ && (r = n.map((D) => D.trim())), d && (r = n.map(Ln));
  }
  if (process.env.NODE_ENV !== "production" && ji(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[nt(h)] && O(`Event "${h}" is emitted in component ${Tn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ve(t)}" instead of "${t}".`);
  }
  let c, a = o[c = nt(t)] || o[c = nt(Ze(t))];
  !a && s && (a = o[c = nt(Ve(t))]), a && Ne(a, e, 6, r);
  const u = o[c + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ne(u, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!k(e)) {
    const a = (u) => {
      const h = Zr(u, t, !0);
      h && (c = !0, Q(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !c ? (Z(e) && o.set(e, null), null) : (I(s) ? s.forEach((a) => i[a] = null) : Q(i, s), Z(e) && o.set(e, i), i);
}
function xn(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, Ve(t)) || F(e, t));
}
let be = null, Qr = null;
function dn(e) {
  const t = be;
  return be = e, Qr = e && e.type.__scopeId || null, t;
}
function Bi(e, t = be, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && nr(-1);
    const s = dn(t), i = e(...r);
    return dn(s), o._d && nr(1), process.env.NODE_ENV !== "production" && Yr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Xn = !1;
function pn() {
  Xn = !0;
}
function Sn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: a, emit: u, render: h, renderCache: d, data: _, setupState: D, ctx: A, inheritAttrs: C } = e;
  let W, U;
  const H = dn(e);
  process.env.NODE_ENV !== "production" && (Xn = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = r || o;
      W = xe(h.call(K, K, d, s, D, _, A)), U = a;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && a === s && pn(), W = xe(K.length > 1 ? K(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return pn(), a;
        },
        slots: c,
        emit: u
      } : { attrs: a, slots: c, emit: u }) : K(s, null)), U = t.props ? a : Ki(a);
    }
  } catch (K) {
    St.length = 0, On(K, e, 1), W = ne(ce);
  }
  let q = W, se;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([q, se] = Ui(W)), U && C !== !1) {
    const K = Object.keys(U), { shapeFlag: ye } = q;
    if (K.length) {
      if (ye & 7)
        i && K.some(an) && (U = zi(U, i)), q = Pe(q, U);
      else if (process.env.NODE_ENV !== "production" && !Xn && q.type !== ce) {
        const R = Object.keys(a), b = [], T = [];
        for (let P = 0, ee = R.length; P < ee; P++) {
          const ie = R[P];
          zt(ie) ? an(ie) || b.push(ie[2].toLowerCase() + ie.slice(3)) : T.push(ie);
        }
        T.length && O(`Extraneous non-props attributes (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), b.length && O(`Extraneous non-emits event listeners (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !zo(q) && O("Runtime directive used on component with non-element root node. The directives will not function as intended."), q = Pe(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !zo(q) && O("Component inside <Transition> renders non-element root node that cannot be animated."), q.transition = n.transition), process.env.NODE_ENV !== "production" && se ? se(q) : W = q, dn(H), W;
}
const Ui = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [xe(o), i];
};
function Gr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Vo(o)) {
      if (o.type !== ce || o.children === "v-if") {
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
    (n === "class" || n === "style" || zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zi = (e, t) => {
  const n = {};
  for (const o in e)
    (!an(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, zo = (e) => e.shapeFlag & 7 || e.type === ce;
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
        const _ = h[d];
        if (i[_] !== o[_] && !xn(u, _))
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
    if (t[s] !== e[s] && !xn(n, s))
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
  if (!oe)
    process.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const o = oe || be;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && k(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const qo = {};
function Pt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !k(t) && O("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), es(e, t, n);
}
function es(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = z) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && O('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (H) => {
    O("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = oe;
  let u, h = !1, d = !1;
  if (re(e) ? (u = () => e.value, h = un(e)) : at(e) ? (u = () => e, o = !0) : I(e) ? (d = !0, h = e.some((H) => at(H) || un(H)), u = () => e.map((H) => {
    if (re(H))
      return H.value;
    if (at(H))
      return yt(H);
    if (k(H))
      return je(H, a, 2);
    process.env.NODE_ENV !== "production" && c(H);
  })) : k(e) ? t ? u = () => je(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), Ne(e, a, 3, [D]);
  } : (u = le, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const H = u;
    u = () => yt(H());
  }
  let _, D = (H) => {
    _ = U.onStop = () => {
      je(H, a, 4);
    };
  };
  if (Kt)
    return D = le, t ? n && Ne(t, a, 3, [
      u(),
      d ? [] : void 0,
      D
    ]) : u(), le;
  let A = d ? [] : qo;
  const C = () => {
    if (!!U.active)
      if (t) {
        const H = U.run();
        (o || h || (d ? H.some((q, se) => Ft(q, A[se])) : Ft(H, A))) && (_ && _(), Ne(t, a, 3, [
          H,
          A === qo ? void 0 : A,
          D
        ]), A = H);
      } else
        U.run();
  };
  C.allowRecurse = !!t;
  let W;
  r === "sync" ? W = C : r === "post" ? W = () => he(C, a && a.suspense) : (C.pre = !0, a && (C.id = a.uid), W = () => wn(C));
  const U = new mo(u, W);
  return process.env.NODE_ENV !== "production" && (U.onTrack = s, U.onTrigger = i), t ? n ? C() : A = U.run() : r === "post" ? he(U.run.bind(U), a && a.suspense) : U.run(), () => {
    U.stop(), a && a.scope && ao(a.scope.effects, U);
  };
}
function Zi(e, t, n) {
  const o = this.proxy, r = te(e) ? e.includes(".") ? ts(o, e) : () => o[e] : e.bind(o, o);
  let s;
  k(t) ? s = t : (s = t.handler, n = t);
  const i = oe;
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
  if (!Z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), re(e))
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
  return Oo(() => {
    e.isMounted = !0;
  }), ls(() => {
    e.isUnmounting = !0;
  }), e;
}
const ve = [Function, Array], Gi = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ve,
    onEnter: ve,
    onAfterEnter: ve,
    onEnterCancelled: ve,
    onBeforeLeave: ve,
    onLeave: ve,
    onAfterLeave: ve,
    onLeaveCancelled: ve,
    onBeforeAppear: ve,
    onAppear: ve,
    onAfterAppear: ve,
    onAppearCancelled: ve
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
        for (const W of s)
          if (W.type !== ce) {
            if (process.env.NODE_ENV !== "production" && C) {
              O("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = W, C = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = S(e), { mode: a } = c;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && O(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Fn(i);
      const u = Jo(i);
      if (!u)
        return Fn(i);
      const h = Zn(u, c, o, n);
      Qn(u, h);
      const d = n.subTree, _ = d && Jo(d);
      let D = !1;
      const { getTransitionKey: A } = u.type;
      if (A) {
        const C = A();
        r === void 0 ? r = C : C !== r && (r = C, D = !0);
      }
      if (_ && _.type !== ce && (!st(u, _) || D)) {
        const C = Zn(_, c, o, n);
        if (Qn(_, C), a === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Fn(i);
        a === "in-out" && u.type !== ce && (C.delayLeave = (W, U, H) => {
          const q = ns(o, _);
          q[String(_.key)] = _, W._leaveCb = () => {
            U(), W._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = H;
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
function Zn(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: a, onAfterEnter: u, onEnterCancelled: h, onBeforeLeave: d, onLeave: _, onAfterLeave: D, onLeaveCancelled: A, onBeforeAppear: C, onAppear: W, onAfterAppear: U, onAppearCancelled: H } = t, q = String(e.key), se = ns(n, e), K = (b, T) => {
    b && Ne(b, o, 9, T);
  }, ye = (b, T) => {
    const P = T[1];
    K(b, T), I(b) ? b.every((ee) => ee.length <= 1) && P() : b.length <= 1 && P();
  }, R = {
    mode: s,
    persisted: i,
    beforeEnter(b) {
      let T = c;
      if (!n.isMounted)
        if (r)
          T = C || c;
        else
          return;
      b._leaveCb && b._leaveCb(!0);
      const P = se[q];
      P && st(e, P) && P.el._leaveCb && P.el._leaveCb(), K(T, [b]);
    },
    enter(b) {
      let T = a, P = u, ee = h;
      if (!n.isMounted)
        if (r)
          T = W || a, P = U || u, ee = H || h;
        else
          return;
      let ie = !1;
      const Se = b._enterCb = (Jt) => {
        ie || (ie = !0, Jt ? K(ee, [b]) : K(P, [b]), R.delayedLeave && R.delayedLeave(), b._enterCb = void 0);
      };
      T ? ye(T, [b, Se]) : Se();
    },
    leave(b, T) {
      const P = String(e.key);
      if (b._enterCb && b._enterCb(!0), n.isUnmounting)
        return T();
      K(d, [b]);
      let ee = !1;
      const ie = b._leaveCb = (Se) => {
        ee || (ee = !0, T(), Se ? K(A, [b]) : K(D, [b]), b._leaveCb = void 0, se[P] === e && delete se[P]);
      };
      se[P] = e, _ ? ye(_, [b, ie]) : ie();
    },
    clone(b) {
      return Zn(b, t, n, o);
    }
  };
  return R;
}
function Fn(e) {
  if (qt(e))
    return e = Pe(e), e.children = null, e;
}
function Jo(e) {
  return qt(e) ? e.children ? e.children[0] : void 0 : e;
}
function Qn(e, t) {
  e.shapeFlag & 6 && e.component ? Qn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function os(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === we ? (i.patchFlag & 128 && r++, o = o.concat(os(i.children, t, c))) : (t || i.type !== ce) && o.push(c != null ? Pe(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function rs(e) {
  return k(e) ? { setup: e, name: e.name } : e;
}
const rn = (e) => !!e.type.__asyncLoader, qt = (e) => e.type.__isKeepAlive;
function tl(e, t) {
  ss(e, "a", t);
}
function nl(e, t) {
  ss(e, "da", t);
}
function ss(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Dn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      qt(r.parent.vnode) && ol(o, t, n, r), r = r.parent;
  }
}
function ol(e, t, n, o) {
  const r = Dn(t, e, o, !0);
  cs(() => {
    ao(o[t], r);
  }, n);
}
function Dn(e, t, n = oe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ht(), Dt(n);
      const c = Ne(t, n, e, i);
      return dt(), mt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = nt(bo[e].replace(/ hook$/, ""));
    O(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Be = (e) => (t, n = oe) => (!Kt || e === "sp") && Dn(e, (...o) => t(...o), n), rl = Be("bm"), Oo = Be("m"), sl = Be("bu"), is = Be("u"), ls = Be("bum"), cs = Be("um"), il = Be("sp"), ll = Be("rtg"), cl = Be("rtc");
function al(e, t = oe) {
  Dn("ec", e, t);
}
function as(e) {
  Fs(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[o];
    a && (ht(), Ne(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), mt());
  }
}
const fl = Symbol(), Gn = (e) => e ? Os(e) ? To(e) || e.proxy : Gn(e.parent) : null, xt = /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Nt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Nt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Nt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Nt(e.refs) : e.refs,
  $parent: (e) => Gn(e.parent),
  $root: (e) => Gn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => xo(e),
  $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
  $nextTick: (e) => e.n || (e.n = Br.bind(e.proxy)),
  $watch: (e) => Zi.bind(e)
}), wo = (e) => e === "_" || e === "$", fs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== z && o.__isScriptSetup && F(o, t))
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
        if (o !== z && F(o, t))
          return i[t] = 1, o[t];
        if (r !== z && F(r, t))
          return i[t] = 2, r[t];
        if ((u = e.propsOptions[0]) && F(u, t))
          return i[t] = 3, s[t];
        if (n !== z && F(n, t))
          return i[t] = 4, n[t];
        eo && (i[t] = 0);
      }
    }
    const h = xt[t];
    let d, _;
    if (h)
      return t === "$attrs" && (me(e, "get", t), process.env.NODE_ENV !== "production" && pn()), h(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== z && F(n, t))
      return i[t] = 4, n[t];
    if (_ = a.config.globalProperties, F(_, t))
      return _[t];
    process.env.NODE_ENV !== "production" && be && (!te(t) || t.indexOf("__v") !== 0) && (r !== z && wo(t[0]) && F(r, t) ? O(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === be && O(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== z && F(r, t) ? (r[t] = n, !0) : o !== z && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== z && F(e, i) || t !== z && F(t, i) || (c = s[0]) && F(c, i) || F(o, i) || F(xt, i) || F(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (fs.ownKeys = (e) => (O("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
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
      set: le
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
      set: le
    });
  });
}
function pl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(S(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
        O(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: le
      });
    }
  });
}
function hl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function ml(e) {
  const t = xo(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: u,
    created: h,
    beforeMount: d,
    mounted: _,
    beforeUpdate: D,
    updated: A,
    activated: C,
    deactivated: W,
    beforeDestroy: U,
    beforeUnmount: H,
    destroyed: q,
    unmounted: se,
    render: K,
    renderTracked: ye,
    renderTriggered: R,
    errorCaptured: b,
    serverPrefetch: T,
    expose: P,
    inheritAttrs: ee,
    components: ie,
    directives: Se,
    filters: Jt
  } = t, Ke = process.env.NODE_ENV !== "production" ? hl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const B in L)
        Ke("Props", B);
  }
  if (u && gl(u, o, Ke, e.appContext.config.unwrapInjectedRef), i)
    for (const L in i) {
      const B = i[L];
      k(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = B.bind(n), process.env.NODE_ENV !== "production" && Ke("Methods", L)) : process.env.NODE_ENV !== "production" && O(`Method "${L}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && O("The data option must be a function. Plain object usage is no longer supported.");
    const L = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && uo(L) && O("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Z(L))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = _o(L), process.env.NODE_ENV !== "production")
      for (const B in L)
        Ke("Data", B), wo(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => L[B],
          set: le
        });
  }
  if (eo = !0, s)
    for (const L in s) {
      const B = s[L], Ce = k(B) ? B.bind(n, n) : k(B.get) ? B.get.bind(n, n) : le;
      process.env.NODE_ENV !== "production" && Ce === le && O(`Computed property "${L}" has no getter.`);
      const $n = !k(B) && k(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(`Write operation failed: computed property "${L}" is readonly.`);
      } : le, Ct = Vs({
        get: Ce,
        set: $n
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (gt) => Ct.value = gt
      }), process.env.NODE_ENV !== "production" && Ke("Computed", L);
    }
  if (c)
    for (const L in c)
      us(c[L], o, n, L);
  if (a) {
    const L = k(a) ? a.call(n) : a;
    Reflect.ownKeys(L).forEach((B) => {
      Xi(B, L[B]);
    });
  }
  h && Yo(h, e, "c");
  function pe(L, B) {
    I(B) ? B.forEach((Ce) => L(Ce.bind(n))) : B && L(B.bind(n));
  }
  if (pe(rl, d), pe(Oo, _), pe(sl, D), pe(is, A), pe(tl, C), pe(nl, W), pe(al, b), pe(cl, ye), pe(ll, R), pe(ls, H), pe(cs, se), pe(il, T), I(P))
    if (P.length) {
      const L = e.exposed || (e.exposed = {});
      P.forEach((B) => {
        Object.defineProperty(L, B, {
          get: () => n[B],
          set: (Ce) => n[B] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === le && (e.render = K), ee != null && (e.inheritAttrs = ee), ie && (e.components = ie), Se && (e.directives = Se);
}
function gl(e, t, n = le, o = !1) {
  I(e) && (e = to(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Z(s) ? "default" in s ? i = Rn(s.from || r, s.default, !0) : i = Rn(s.from || r) : i = Rn(s), re(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && O(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Yo(e, t, n) {
  Ne(I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function us(e, t, n, o) {
  const r = o.includes(".") ? ts(n, o) : () => n[o];
  if (te(e)) {
    const s = t[e];
    k(s) ? Pt(r, s) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, s);
  } else if (k(e))
    Pt(r, e.bind(n));
  else if (Z(e))
    if (I(e))
      e.forEach((s) => us(s, t, n, o));
    else {
      const s = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(s) ? Pt(r, s, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function xo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((u) => hn(a, u, i, !0)), hn(a, t, i)), Z(t) && s.set(t, a), a;
}
function hn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && hn(e, s, n, !0), r && r.forEach((i) => hn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
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
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: ot,
  directives: ot,
  watch: bl,
  provide: Xo,
  inject: vl
};
function Xo(e, t) {
  return t ? e ? function() {
    return Q(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t);
  } : t : e;
}
function vl(e, t) {
  return ot(to(e), to(t));
}
function to(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
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
    n[o] = ue(e[o], t[o]);
  return n;
}
function El(e, t, n, o = !1) {
  const r = {}, s = {};
  fn(s, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ds(e, t, r, s);
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
        let _ = h[d];
        if (xn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (a)
          if (F(s, _))
            D !== s[_] && (s[_] = D, u = !0);
          else {
            const A = Ze(_);
            r[A] = no(a, c, A, D, e, !1);
          }
        else
          D !== s[_] && (s[_] = D, u = !0);
      }
    }
  } else {
    ds(e, t, r, s) && (u = !0);
    let h;
    for (const d in c)
      (!t || !F(t, d) && ((h = Ve(d)) === d || !F(t, h))) && (a ? n && (n[d] !== void 0 || n[h] !== void 0) && (r[d] = no(a, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !F(t, d) && !0) && (delete s[d], u = !0);
  }
  u && Le(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && hs(t || {}, r, e);
}
function ds(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (tn(a))
        continue;
      const u = t[a];
      let h;
      r && F(r, h = Ze(a)) ? !s || !s.includes(h) ? n[h] = u : (c || (c = {}))[h] = u : xn(e.emitsOptions, a) || (!(a in o) || u !== o[a]) && (o[a] = u, i = !0);
    }
  if (s) {
    const a = S(n), u = c || z;
    for (let h = 0; h < s.length; h++) {
      const d = s[h];
      n[d] = no(r, a, d, u[d], e, !F(u, d));
    }
  }
  return i;
}
function no(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = F(i, "default");
    if (c && o === void 0) {
      const a = i.default;
      if (i.type !== Function && k(a)) {
        const { propsDefaults: u } = r;
        n in u ? o = u[n] : (Dt(r), o = u[n] = a.call(null, t), dt());
      } else
        o = a;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Ve(n)) && (o = !0));
  }
  return o;
}
function ps(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let a = !1;
  if (!k(e)) {
    const h = (d) => {
      a = !0;
      const [_, D] = ps(d, t, !0);
      Q(i, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !a)
    return Z(e) && o.set(e, Ot), Ot;
  if (I(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !te(s[h]) && O("props must be strings when using array syntax.", s[h]);
      const d = Ze(s[h]);
      Zo(d) && (i[d] = z);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Z(s) && O("invalid props options", s);
    for (const h in s) {
      const d = Ze(h);
      if (Zo(d)) {
        const _ = s[h], D = i[d] = I(_) || k(_) ? { type: _ } : _;
        if (D) {
          const A = Go(Boolean, D.type), C = Go(String, D.type);
          D[0] = A > -1, D[1] = C < 0 || A < C, (A > -1 || F(D, "default")) && c.push(d);
        }
      }
    }
  }
  const u = [i, c];
  return Z(e) && o.set(e, u), u;
}
function Zo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qo(e, t) {
  return oo(e) === oo(t);
}
function Go(e, t) {
  return I(t) ? t.findIndex((n) => Qo(n, e)) : k(t) && Qo(t, e) ? 0 : -1;
}
function hs(e, t, n) {
  const o = S(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Ol(s, o[s], i, !F(e, s) && !F(e, Ve(s)));
  }
}
function Ol(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const a = I(r) ? r : [r], u = [];
      for (let h = 0; h < a.length && !c; h++) {
        const { valid: d, expectedType: _ } = xl(t, a[h]);
        u.push(_ || ""), c = d;
      }
      if (!c) {
        O(Dl(e, t, u));
        return;
      }
    }
    i && !i(t) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wl = /* @__PURE__ */ Vt("String,Number,Boolean,Function,Symbol,BigInt");
function xl(e, t) {
  let n;
  const o = oo(t);
  if (wl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Z(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Dl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(vn).join(" | ")}`;
  const r = n[0], s = po(t), i = er(t, r), c = er(t, s);
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
const ms = (e) => e[0] === "_" || e === "$stable", Do = (e) => I(e) ? e.map(xe) : [xe(e)], Cl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bi((...r) => (process.env.NODE_ENV !== "production" && oe && O(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Do(t(...r))), n);
  return o._c = !1, o;
}, gs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ms(r))
      continue;
    const s = e[r];
    if (k(s))
      t[r] = Cl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && O(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Do(s);
      t[r] = () => i;
    }
  }
}, _s = (e, t) => {
  process.env.NODE_ENV !== "production" && !qt(e.vnode) && O("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Do(t);
  e.slots.default = () => n;
}, Tl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = S(t), fn(t, "_", n)) : gs(t, e.slots = {});
  } else
    e.slots = {}, t && _s(e, t);
  fn(e.slots, Cn, 1);
}, $l = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = z;
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
function Al(e, t) {
  return function(o, r = null) {
    k(o) || (o = Object.assign({}, o)), r != null && !Z(r) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), r = null);
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
        process.env.NODE_ENV !== "production" && O("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...h) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : u && k(u.install) ? (i.add(u), u.install(a, ...h)) : k(u) ? (i.add(u), u(a, ...h)) : process.env.NODE_ENV !== "production" && O('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && O("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), a;
      },
      component(u, h) {
        return process.env.NODE_ENV !== "production" && so(u, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[u] && O(`Component "${u}" has already been registered in target app.`), s.components[u] = h, a) : s.components[u];
      },
      directive(u, h) {
        return process.env.NODE_ENV !== "production" && as(u), h ? (process.env.NODE_ENV !== "production" && s.directives[u] && O(`Directive "${u}" has already been registered in target app.`), s.directives[u] = h, a) : s.directives[u];
      },
      mount(u, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && O("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && O("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const _ = ne(o, r);
          return _.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Pe(_), u, d);
          }), h && t ? t(_, u) : e(_, u, d), c = !0, a._container = u, u.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = _.component, ki(a, sr)), To(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Pi(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(u, h) {
        return process.env.NODE_ENV !== "production" && u in s.provides && O(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = h, a;
      }
    };
    return a;
  };
}
function ro(e, t, n, o, r = !1) {
  if (I(e)) {
    e.forEach((_, D) => ro(_, t && (I(t) ? t[D] : t), n, o, r));
    return;
  }
  if (rn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? To(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    O("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, h = c.refs === z ? c.refs = {} : c.refs, d = c.setupState;
  if (u != null && u !== a && (te(u) ? (h[u] = null, F(d, u) && (d[u] = null)) : re(u) && (u.value = null)), k(a))
    je(a, c, 12, [i, h]);
  else {
    const _ = te(a), D = re(a);
    if (_ || D) {
      const A = () => {
        if (e.f) {
          const C = _ ? h[a] : a.value;
          r ? I(C) && ao(C, s) : I(C) ? C.includes(s) || C.push(s) : _ ? (h[a] = [s], F(d, a) && (d[a] = h[a])) : (a.value = [s], e.k && (h[e.k] = a.value));
        } else
          _ ? (h[a] = i, F(d, a) && (d[a] = i)) : D ? (a.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (A.id = -1, he(A, n)) : A();
    } else
      process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let It, Ye;
function Fe(e, t) {
  e.appContext.config.performance && mn() && Ye.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Fi(e, t, mn() ? Ye.now() : Date.now());
}
function He(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ye.mark(o), Ye.measure(`<${Tn(e, e.type)}> ${t}`, n, o), Ye.clearMarks(n), Ye.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Hi(e, t, mn() ? Ye.now() : Date.now());
}
function mn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Ye = window.performance) : It = !1), It;
}
function Ml() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const he = Yi;
function kl(e) {
  return Pl(e);
}
function Pl(e, t) {
  Ml();
  const n = Er();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Jr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: a, setText: u, setElementText: h, parentNode: d, nextSibling: _, setScopeId: D = le, insertStaticContent: A } = e, C = (l, f, p, g = null, m = null, N = null, w = !1, E = null, y = process.env.NODE_ENV !== "production" && ut ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !st(l, f) && (g = Yt(l), ze(l, m, N, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: v, ref: V, shapeFlag: x } = f;
    switch (v) {
      case Vn:
        W(l, f, p, g);
        break;
      case ce:
        U(l, f, p, g);
        break;
      case ln:
        l == null ? H(f, p, g, w) : process.env.NODE_ENV !== "production" && q(l, f, p, w);
        break;
      case we:
        Se(l, f, p, g, m, N, w, E, y);
        break;
      default:
        x & 1 ? ye(l, f, p, g, m, N, w, E, y) : x & 6 ? Jt(l, f, p, g, m, N, w, E, y) : x & 64 || x & 128 ? v.process(l, f, p, g, m, N, w, E, y, _t) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", v, `(${typeof v})`);
    }
    V != null && m && ro(V, l && l.ref, N, f || l, !f);
  }, W = (l, f, p, g) => {
    if (l == null)
      o(f.el = c(f.children), p, g);
    else {
      const m = f.el = l.el;
      f.children !== l.children && u(m, f.children);
    }
  }, U = (l, f, p, g) => {
    l == null ? o(f.el = a(f.children || ""), p, g) : f.el = l.el;
  }, H = (l, f, p, g) => {
    [l.el, l.anchor] = A(l.children, f, p, g, l.el, l.anchor);
  }, q = (l, f, p, g) => {
    if (f.children !== l.children) {
      const m = _(l.anchor);
      K(l), [f.el, f.anchor] = A(f.children, p, m, g);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, se = ({ el: l, anchor: f }, p, g) => {
    let m;
    for (; l && l !== f; )
      m = _(l), o(l, p, g), l = m;
    o(f, p, g);
  }, K = ({ el: l, anchor: f }) => {
    let p;
    for (; l && l !== f; )
      p = _(l), r(l), l = p;
    r(f);
  }, ye = (l, f, p, g, m, N, w, E, y) => {
    w = w || f.type === "svg", l == null ? R(f, p, g, m, N, w, E, y) : P(l, f, m, N, w, E, y);
  }, R = (l, f, p, g, m, N, w, E) => {
    let y, v;
    const { type: V, props: x, shapeFlag: $, transition: M, dirs: j } = l;
    if (y = l.el = i(l.type, N, x && x.is, x), $ & 8 ? h(y, l.children) : $ & 16 && T(l.children, y, null, g, m, N && V !== "foreignObject", w, E), j && et(l, null, g, "created"), x) {
      for (const J in x)
        J !== "value" && !tn(J) && s(y, J, null, x[J], N, l.children, g, m, Re);
      "value" in x && s(y, "value", null, x.value), (v = x.onVnodeBeforeMount) && Ie(v, g, l);
    }
    b(y, l, l.scopeId, w, g), process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), j && et(l, null, g, "beforeMount");
    const Y = (!m || m && !m.pendingBranch) && M && !M.persisted;
    Y && M.beforeEnter(y), o(y, f, p), ((v = x && x.onVnodeMounted) || Y || j) && he(() => {
      v && Ie(v, g, l), Y && M.enter(y), j && et(l, null, g, "mounted");
    }, m);
  }, b = (l, f, p, g, m) => {
    if (p && D(l, p), g)
      for (let N = 0; N < g.length; N++)
        D(l, g[N]);
    if (m) {
      let N = m.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Gr(N.children) || N), f === N) {
        const w = m.vnode;
        b(l, w, w.scopeId, w.slotScopeIds, m.parent);
      }
    }
  }, T = (l, f, p, g, m, N, w, E, y = 0) => {
    for (let v = y; v < l.length; v++) {
      const V = l[v] = E ? Je(l[v]) : xe(l[v]);
      C(null, V, f, p, g, m, N, w, E);
    }
  }, P = (l, f, p, g, m, N, w) => {
    const E = f.el = l.el;
    let { patchFlag: y, dynamicChildren: v, dirs: V } = f;
    y |= l.patchFlag & 16;
    const x = l.props || z, $ = f.props || z;
    let M;
    p && tt(p, !1), (M = $.onVnodeBeforeUpdate) && Ie(M, p, f, l), V && et(f, l, p, "beforeUpdate"), p && tt(p, !0), process.env.NODE_ENV !== "production" && ut && (y = 0, w = !1, v = null);
    const j = m && f.type !== "foreignObject";
    if (v ? (ee(l.dynamicChildren, v, E, p, g, j, N), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && sn(l, f)) : w || Ce(l, f, E, null, p, g, j, N, !1), y > 0) {
      if (y & 16)
        ie(E, f, x, $, p, g, m);
      else if (y & 2 && x.class !== $.class && s(E, "class", null, $.class, m), y & 4 && s(E, "style", x.style, $.style, m), y & 8) {
        const Y = f.dynamicProps;
        for (let J = 0; J < Y.length; J++) {
          const G = Y[J], Oe = x[G], vt = $[G];
          (vt !== Oe || G === "value") && s(E, G, Oe, vt, m, l.children, p, g, Re);
        }
      }
      y & 1 && l.children !== f.children && h(E, f.children);
    } else
      !w && v == null && ie(E, f, x, $, p, g, m);
    ((M = $.onVnodeUpdated) || V) && he(() => {
      M && Ie(M, p, f, l), V && et(f, l, p, "updated");
    }, g);
  }, ee = (l, f, p, g, m, N, w) => {
    for (let E = 0; E < f.length; E++) {
      const y = l[E], v = f[E], V = y.el && (y.type === we || !st(y, v) || y.shapeFlag & 70) ? d(y.el) : p;
      C(y, v, V, null, g, m, N, w, !0);
    }
  }, ie = (l, f, p, g, m, N, w) => {
    if (p !== g) {
      if (p !== z)
        for (const E in p)
          !tn(E) && !(E in g) && s(l, E, p[E], null, w, f.children, m, N, Re);
      for (const E in g) {
        if (tn(E))
          continue;
        const y = g[E], v = p[E];
        y !== v && E !== "value" && s(l, E, v, y, w, f.children, m, N, Re);
      }
      "value" in g && s(l, "value", p.value, g.value);
    }
  }, Se = (l, f, p, g, m, N, w, E, y) => {
    const v = f.el = l ? l.el : c(""), V = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: $, slotScopeIds: M } = f;
    process.env.NODE_ENV !== "production" && (ut || x & 2048) && (x = 0, y = !1, $ = null), M && (E = E ? E.concat(M) : M), l == null ? (o(v, p, g), o(V, p, g), T(f.children, p, V, m, N, w, E, y)) : x > 0 && x & 64 && $ && l.dynamicChildren ? (ee(l.dynamicChildren, $, p, m, N, w, E), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? sn(l, f) : (f.key != null || m && f === m.subTree) && sn(l, f, !0)) : Ce(l, f, p, V, m, N, w, E, y);
  }, Jt = (l, f, p, g, m, N, w, E, y) => {
    f.slotScopeIds = E, l == null ? f.shapeFlag & 512 ? m.ctx.activate(f, p, g, w, y) : Ke(f, p, g, m, N, w, y) : pe(l, f, y);
  }, Ke = (l, f, p, g, m, N, w) => {
    const E = l.component = ql(l, g, m);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && $i(E), process.env.NODE_ENV !== "production" && (nn(l), Fe(E, "mount")), qt(l) && (E.ctx.renderer = _t), process.env.NODE_ENV !== "production" && Fe(E, "init"), Xl(E), process.env.NODE_ENV !== "production" && He(E, "init"), E.asyncDep) {
      if (m && m.registerDep(E, L), !l.el) {
        const y = E.subTree = ne(ce);
        U(null, y, f, p);
      }
      return;
    }
    L(E, l, f, p, m, N, w), process.env.NODE_ENV !== "production" && (on(), He(E, "mount"));
  }, pe = (l, f, p) => {
    const g = f.component = l.component;
    if (Wi(l, f, p))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && nn(f), B(g, f, p), process.env.NODE_ENV !== "production" && on();
        return;
      } else
        g.next = f, Ci(g.update), g.update();
    else
      f.el = l.el, g.vnode = f;
  }, L = (l, f, p, g, m, N, w) => {
    const E = () => {
      if (l.isMounted) {
        let { next: V, bu: x, u: $, parent: M, vnode: j } = l, Y = V, J;
        process.env.NODE_ENV !== "production" && nn(V || l.vnode), tt(l, !1), V ? (V.el = j.el, B(l, V, w)) : V = j, x && $t(x), (J = V.props && V.props.onVnodeBeforeUpdate) && Ie(J, M, V, j), tt(l, !0), process.env.NODE_ENV !== "production" && Fe(l, "render");
        const G = Sn(l);
        process.env.NODE_ENV !== "production" && He(l, "render");
        const Oe = l.subTree;
        l.subTree = G, process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(
          Oe,
          G,
          d(Oe.el),
          Yt(Oe),
          l,
          m,
          N
        ), process.env.NODE_ENV !== "production" && He(l, "patch"), V.el = G.el, Y === null && qi(l, G.el), $ && he($, m), (J = V.props && V.props.onVnodeUpdated) && he(() => Ie(J, M, V, j), m), process.env.NODE_ENV !== "production" && Yr(l), process.env.NODE_ENV !== "production" && on();
      } else {
        let V;
        const { el: x, props: $ } = f, { bm: M, m: j, parent: Y } = l, J = rn(f);
        if (tt(l, !1), M && $t(M), !J && (V = $ && $.onVnodeBeforeMount) && Ie(V, Y, f), tt(l, !0), x && Mn) {
          const G = () => {
            process.env.NODE_ENV !== "production" && Fe(l, "render"), l.subTree = Sn(l), process.env.NODE_ENV !== "production" && He(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "hydrate"), Mn(x, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && He(l, "hydrate");
          };
          J ? f.type.__asyncLoader().then(
            () => !l.isUnmounted && G()
          ) : G();
        } else {
          process.env.NODE_ENV !== "production" && Fe(l, "render");
          const G = l.subTree = Sn(l);
          process.env.NODE_ENV !== "production" && He(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(null, G, p, g, l, m, N), process.env.NODE_ENV !== "production" && He(l, "patch"), f.el = G.el;
        }
        if (j && he(j, m), !J && (V = $ && $.onVnodeMounted)) {
          const G = f;
          he(() => Ie(V, Y, G), m);
        }
        (f.shapeFlag & 256 || Y && rn(Y.vnode) && Y.vnode.shapeFlag & 256) && l.a && he(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Si(l), f = p = g = null;
      }
    }, y = l.effect = new mo(
      E,
      () => wn(v),
      l.scope
    ), v = l.update = () => y.run();
    v.id = l.uid, tt(l, !0), process.env.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (V) => $t(l.rtc, V) : void 0, y.onTrigger = l.rtg ? (V) => $t(l.rtg, V) : void 0, v.ownerInstance = l), v();
  }, B = (l, f, p) => {
    f.component = l;
    const g = l.vnode.props;
    l.vnode = f, l.next = null, yl(l, f.props, g, p), $l(l, f.children, p), ht(), Uo(), mt();
  }, Ce = (l, f, p, g, m, N, w, E, y = !1) => {
    const v = l && l.children, V = l ? l.shapeFlag : 0, x = f.children, { patchFlag: $, shapeFlag: M } = f;
    if ($ > 0) {
      if ($ & 128) {
        Ct(v, x, p, g, m, N, w, E, y);
        return;
      } else if ($ & 256) {
        $n(v, x, p, g, m, N, w, E, y);
        return;
      }
    }
    M & 8 ? (V & 16 && Re(v, m, N), x !== v && h(p, x)) : V & 16 ? M & 16 ? Ct(v, x, p, g, m, N, w, E, y) : Re(v, m, N, !0) : (V & 8 && h(p, ""), M & 16 && T(x, p, g, m, N, w, E, y));
  }, $n = (l, f, p, g, m, N, w, E, y) => {
    l = l || Ot, f = f || Ot;
    const v = l.length, V = f.length, x = Math.min(v, V);
    let $;
    for ($ = 0; $ < x; $++) {
      const M = f[$] = y ? Je(f[$]) : xe(f[$]);
      C(l[$], M, p, null, m, N, w, E, y);
    }
    v > V ? Re(l, m, N, !0, !1, x) : T(f, p, g, m, N, w, E, y, x);
  }, Ct = (l, f, p, g, m, N, w, E, y) => {
    let v = 0;
    const V = f.length;
    let x = l.length - 1, $ = V - 1;
    for (; v <= x && v <= $; ) {
      const M = l[v], j = f[v] = y ? Je(f[v]) : xe(f[v]);
      if (st(M, j))
        C(M, j, p, null, m, N, w, E, y);
      else
        break;
      v++;
    }
    for (; v <= x && v <= $; ) {
      const M = l[x], j = f[$] = y ? Je(f[$]) : xe(f[$]);
      if (st(M, j))
        C(M, j, p, null, m, N, w, E, y);
      else
        break;
      x--, $--;
    }
    if (v > x) {
      if (v <= $) {
        const M = $ + 1, j = M < V ? f[M].el : g;
        for (; v <= $; )
          C(null, f[v] = y ? Je(f[v]) : xe(f[v]), p, j, m, N, w, E, y), v++;
      }
    } else if (v > $)
      for (; v <= x; )
        ze(l[v], m, N, !0), v++;
    else {
      const M = v, j = v, Y = /* @__PURE__ */ new Map();
      for (v = j; v <= $; v++) {
        const fe = f[v] = y ? Je(f[v]) : xe(f[v]);
        fe.key != null && (process.env.NODE_ENV !== "production" && Y.has(fe.key) && O("Duplicate keys found during update:", JSON.stringify(fe.key), "Make sure keys are unique."), Y.set(fe.key, v));
      }
      let J, G = 0;
      const Oe = $ - j + 1;
      let vt = !1, Ao = 0;
      const Tt = new Array(Oe);
      for (v = 0; v < Oe; v++)
        Tt[v] = 0;
      for (v = M; v <= x; v++) {
        const fe = l[v];
        if (G >= Oe) {
          ze(fe, m, N, !0);
          continue;
        }
        let Te;
        if (fe.key != null)
          Te = Y.get(fe.key);
        else
          for (J = j; J <= $; J++)
            if (Tt[J - j] === 0 && st(fe, f[J])) {
              Te = J;
              break;
            }
        Te === void 0 ? ze(fe, m, N, !0) : (Tt[Te - j] = v + 1, Te >= Ao ? Ao = Te : vt = !0, C(fe, f[Te], p, null, m, N, w, E, y), G++);
      }
      const Mo = vt ? Sl(Tt) : Ot;
      for (J = Mo.length - 1, v = Oe - 1; v >= 0; v--) {
        const fe = j + v, Te = f[fe], ko = fe + 1 < V ? f[fe + 1].el : g;
        Tt[v] === 0 ? C(null, Te, p, ko, m, N, w, E, y) : vt && (J < 0 || v !== Mo[J] ? gt(Te, p, ko, 2) : J--);
      }
    }
  }, gt = (l, f, p, g, m = null) => {
    const { el: N, type: w, transition: E, children: y, shapeFlag: v } = l;
    if (v & 6) {
      gt(l.component.subTree, f, p, g);
      return;
    }
    if (v & 128) {
      l.suspense.move(f, p, g);
      return;
    }
    if (v & 64) {
      w.move(l, f, p, _t);
      return;
    }
    if (w === we) {
      o(N, f, p);
      for (let x = 0; x < y.length; x++)
        gt(y[x], f, p, g);
      o(l.anchor, f, p);
      return;
    }
    if (w === ln) {
      se(l, f, p);
      return;
    }
    if (g !== 2 && v & 1 && E)
      if (g === 0)
        E.beforeEnter(N), o(N, f, p), he(() => E.enter(N), m);
      else {
        const { leave: x, delayLeave: $, afterLeave: M } = E, j = () => o(N, f, p), Y = () => {
          x(N, () => {
            j(), M && M();
          });
        };
        $ ? $(N, j, Y) : Y();
      }
    else
      o(N, f, p);
  }, ze = (l, f, p, g = !1, m = !1) => {
    const { type: N, props: w, ref: E, children: y, dynamicChildren: v, shapeFlag: V, patchFlag: x, dirs: $ } = l;
    if (E != null && ro(E, null, p, l, !0), V & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const M = V & 1 && $, j = !rn(l);
    let Y;
    if (j && (Y = w && w.onVnodeBeforeUnmount) && Ie(Y, f, l), V & 6)
      $s(l.component, p, g);
    else {
      if (V & 128) {
        l.suspense.unmount(p, g);
        return;
      }
      M && et(l, null, f, "beforeUnmount"), V & 64 ? l.type.remove(l, f, p, m, _t, g) : v && (N !== we || x > 0 && x & 64) ? Re(v, f, p, !1, !0) : (N === we && x & 384 || !m && V & 16) && Re(y, f, p), g && In(l);
    }
    (j && (Y = w && w.onVnodeUnmounted) || M) && he(() => {
      Y && Ie(Y, f, l), M && et(l, null, f, "unmounted");
    }, p);
  }, In = (l) => {
    const { type: f, el: p, anchor: g, transition: m } = l;
    if (f === we) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((w) => {
        w.type === ce ? r(w.el) : In(w);
      }) : Ts(p, g);
      return;
    }
    if (f === ln) {
      K(l);
      return;
    }
    const N = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: E } = m, y = () => w(p, N);
      E ? E(l.el, N, y) : y();
    } else
      N();
  }, Ts = (l, f) => {
    let p;
    for (; l !== f; )
      p = _(l), r(l), l = p;
    r(f);
  }, $s = (l, f, p) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ii(l);
    const { bum: g, scope: m, update: N, subTree: w, um: E } = l;
    g && $t(g), m.stop(), N && (N.active = !1, ze(w, l, f, p)), E && he(E, f), he(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ri(l);
  }, Re = (l, f, p, g = !1, m = !1, N = 0) => {
    for (let w = N; w < l.length; w++)
      ze(l[w], f, p, g, m);
  }, Yt = (l) => l.shapeFlag & 6 ? Yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : _(l.anchor || l.el), Io = (l, f, p) => {
    l == null ? f._vnode && ze(f._vnode, null, null, !0) : C(f._vnode || null, l, f, null, null, null, p), Uo(), zr(), f._vnode = l;
  }, _t = {
    p: C,
    um: ze,
    m: gt,
    r: In,
    mt: Ke,
    mc: T,
    pc: Ce,
    pbc: ee,
    n: Yt,
    o: e
  };
  let An, Mn;
  return t && ([An, Mn] = t(_t)), {
    render: Io,
    hydrate: An,
    createApp: Al(Io, An)
  };
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function sn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (I(o) && I(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Je(r[s]), c.el = i.el), n || sn(i, c)), process.env.NODE_ENV !== "production" && c.type === ce && !c.el && (c.el = i.el);
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
const Rl = (e) => e.__isTeleport, we = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Vn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ce = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), ln = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), St = [];
let De = null;
function _e(e = !1) {
  St.push(De = e ? null : []);
}
function Fl() {
  St.pop(), De = St[St.length - 1] || null;
}
let Ut = 1;
function nr(e) {
  Ut += e;
}
function bs(e) {
  return e.dynamicChildren = Ut > 0 ? De || Ot : null, Fl(), Ut > 0 && De && De.push(e), e;
}
function Ee(e, t, n, o, r, s) {
  return bs(X(e, t, n, o, r, s, !0));
}
function Hl(e, t, n, o, r) {
  return bs(ne(e, t, n, o, r, !0));
}
function Vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function st(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && bt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const jl = (...e) => Ns(...e), Cn = "__vInternal", Es = ({ key: e }) => e != null ? e : null, cn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? te(e) || re(e) || k(e) ? { i: be, r: e, k: t, f: !!n } : e : null;
function X(e, t = null, n = null, o = 0, r = null, s = e === we ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Es(t),
    ref: t && cn(t),
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
  return c ? (Co(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), Ut > 0 && !i && De && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && De.push(a), a;
}
const ne = process.env.NODE_ENV !== "production" ? jl : Ns;
function Ns(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === fl) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = ce), Vo(e)) {
    const c = Pe(e, t, !0);
    return n && Co(c, n), Ut > 0 && !s && De && (c.shapeFlag & 6 ? De[De.indexOf(e)] = c : De.push(c)), c.patchFlag |= -2, c;
  }
  if (Ds(e) && (e = e.__vccOpts), t) {
    t = Ll(t);
    let { class: c, style: a } = t;
    c && !te(c) && (t.class = ge(c)), Z(a) && (qn(a) && !I(a) && (a = Q({}, a)), t.style = Rt(a));
  }
  const i = te(e) ? 1 : Ji(e) ? 128 : Rl(e) ? 64 : Z(e) ? 4 : k(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && qn(e) && (e = S(e), O("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), X(e, t, n, o, r, i, s, !0);
}
function Ll(e) {
  return e ? qn(e) || Cn in e ? Q({}, e) : e : null;
}
function Pe(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Kl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Es(c),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && I(i) ? i.map(ys) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== we ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Pe(e.ssContent),
    ssFallback: e.ssFallback && Pe(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ys(e) {
  const t = Pe(e);
  return I(e.children) && (t.children = e.children.map(ys)), t;
}
function Bl(e = " ", t = 0) {
  return ne(Vn, null, e, t);
}
function Ul(e = "", t = !1) {
  return t ? (_e(), Hl(ce, null, e)) : ne(ce, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? ne(ce) : I(e) ? ne(
    we,
    null,
    e.slice()
  ) : typeof e == "object" ? Je(e) : ne(Vn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pe(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Co(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Cn in t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    k(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Bl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ge([t.class, o.class]));
      else if (r === "style")
        t.style = Rt([t.style, o.style]);
      else if (zt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(I(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ie(e, t, n, o = null) {
  Ne(e, t, 7, [
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
    propsDefaults: z,
    inheritAttrs: o.inheritAttrs,
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
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
let oe = null;
const Jl = () => oe || be, Dt = (e) => {
  oe = e, e.scope.on();
}, dt = () => {
  oe && oe.scope.off(), oe = null;
}, Yl = /* @__PURE__ */ Vt("slot,component");
function so(e, t) {
  const n = t.isNativeTag || gr;
  (Yl(e) || n(e)) && O("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Os(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function Xl(e, t = !1) {
  Kt = t;
  const { props: n, children: o } = e.vnode, r = Os(e);
  El(e, n, r, t), Tl(e, o);
  const s = r ? Zl(e, t) : void 0;
  return Kt = !1, s;
}
function Zl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && so(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        so(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        as(s[i]);
    }
    o.compilerOptions && Ql() && O('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = kr(new Proxy(e.ctx, fs)), process.env.NODE_ENV !== "production" && dl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Gl(e) : null;
    Dt(e), ht();
    const i = je(r, e, 0, [process.env.NODE_ENV !== "production" ? Nt(e.props) : e.props, s]);
    if (mt(), dt(), uo(i)) {
      if (i.then(dt, dt), t)
        return i.then((c) => {
          or(e, c, t);
        }).catch((c) => {
          On(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        O(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      or(e, i, t);
  } else
    ws(e, t);
}
function or(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) ? (process.env.NODE_ENV !== "production" && Vo(t) && O("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Fr(t), process.env.NODE_ENV !== "production" && pl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), ws(e, n);
}
let io;
const Ql = () => !io;
function ws(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && io && !o.render) {
      const r = o.template || xo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: a } = o, u = Q(Q({
          isCustomElement: s,
          delimiters: c
        }, i), a);
        o.render = io(r, u), process.env.NODE_ENV !== "production" && He(e, "compile");
      }
    }
    e.render = o.render || le;
  }
  Dt(e), ht(), ml(e), mt(), dt(), process.env.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? O('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : O("Component is missing template or render function."));
}
function rr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return pn(), me(e, "get", "$attrs"), t[n];
    },
    set() {
      return O("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return O("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function Gl(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && O("expose() should be called only once per setup()."), e.exposed = o || {};
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
function To(e) {
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
  return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tn(e, t, n = !1) {
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
  return k(e) && "__vccOpts" in e;
}
const Vs = (e, t) => Ei(e, t, Kt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function nc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return Z(d) ? d.__isVue ? ["div", e, "VueInstance"] : re(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : at(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Ge(d) ? " (readonly)" : ""}`
      ] : Ge(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReadonly" : "Readonly"],
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
    const _ = [];
    d.type.props && d.props && _.push(i("props", S(d.props))), d.setupState !== z && _.push(i("setup", d.setupState)), d.data !== z && _.push(i("data", S(d.data)));
    const D = a(d, "computed");
    D && _.push(i("computed", D));
    const A = a(d, "inject");
    return A && _.push(i("injected", A)), _.push([
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
    ]), _;
  }
  function i(d, _) {
    return _ = Q({}, _), Object.keys(_).length ? [
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
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : Z(d) ? ["object", { object: _ ? S(d) : d }] : ["span", n, String(d)];
  }
  function a(d, _) {
    const D = d.type;
    if (k(D))
      return;
    const A = {};
    for (const C in d.ctx)
      u(D, C, _) && (A[C] = d.ctx[C]);
    return A;
  }
  function u(d, _, D) {
    const A = d[D];
    if (I(A) && A.includes(_) || Z(A) && _ in A || d.extends && u(d.extends, _, D) || d.mixins && d.mixins.some((C) => u(C, _, D)))
      return !0;
  }
  function h(d) {
    return Hn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
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
  const o = e.style, r = te(n);
  if (n && !r) {
    for (const s in n)
      lo(o, s, n[s]);
    if (t && !te(t))
      for (const s in t)
        n[s] == null && lo(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const lr = /\s*!important$/;
function lo(e, t, n) {
  if (I(n))
    n.forEach((o) => lo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = lc(e, t);
    lr.test(n) ? e.setProperty(Ve(o), n.replace(lr, ""), "important") : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], jn = {};
function lc(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let o = Ze(t);
  if (o !== "filter" && o in e)
    return jn[t] = o;
  o = vn(o);
  for (let r = 0; r < cr.length; r++) {
    const s = cr[r] + o;
    if (s in e)
      return jn[t] = s;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function cc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const s = As(t);
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
    process.env.NODE_ENV !== "production" && !c && O(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
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
let co = 0;
const uc = /* @__PURE__ */ Promise.resolve(), dc = () => {
  co = 0;
}, pc = () => co || (uc.then(dc), co = Cs());
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
  return [e[2] === ":" ? e.slice(3) : Ve(e.slice(2)), t];
}
function vc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || Cs();
    (fc || r >= n.attached - 1) && Ne(bc(o, n.value), t, 5, [o]);
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
  t === "class" ? sc(e, o, r) : t === "style" ? ic(e, n, o) : zt(t) ? an(t) || gc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, o, r)) ? ac(e, t, o, s, i, c, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), cc(e, t, o, r));
};
function Nc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ur.test(t) && k(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ur.test(t) && te(n) ? !1 : t in e;
}
function yc(e, t) {
  const n = rs(e);
  class o extends $o {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Oc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class $o extends Oc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && O("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
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
          (h === Number || h && h.type === Number) && (this._props[u] = Ln(this._props[u]), (a || (a = /* @__PURE__ */ Object.create(null)))[u] = !0);
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
    this._numberProps && this._numberProps[t] && (n = Ln(n)), this._setProp(Ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Ve(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ve(t), n + "") : n || this.removeAttribute(Ve(t))));
  }
  _update() {
    pr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ne(this._def, Q({}, this._props));
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
        if (o instanceof $o) {
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
const Ue = (e, t) => {
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
}, Ic = /* @__PURE__ */ X("path", { d: "M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" }, null, -1), Ac = [
  Ic
];
function Mc(e, t) {
  return _e(), Ee("svg", $c, Ac);
}
const kc = /* @__PURE__ */ Ue(Tc, [["render", Mc]]), Pc = {}, Sc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h1",
  viewBox: "0 0 16 16"
}, Rc = /* @__PURE__ */ X("path", { d: "M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" }, null, -1), Fc = [
  Rc
];
function Hc(e, t) {
  return _e(), Ee("svg", Sc, Fc);
}
const jc = /* @__PURE__ */ Ue(Pc, [["render", Hc]]), Lc = {}, Bc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h2",
  viewBox: "0 0 16 16"
}, Uc = /* @__PURE__ */ X("path", { d: "M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" }, null, -1), Kc = [
  Uc
];
function zc(e, t) {
  return _e(), Ee("svg", Bc, Kc);
}
const Wc = /* @__PURE__ */ Ue(Lc, [["render", zc]]), qc = {}, Jc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-h3",
  viewBox: "0 0 16 16"
}, Yc = /* @__PURE__ */ X("path", { d: "M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" }, null, -1), Xc = [
  Yc
];
function Zc(e, t) {
  return _e(), Ee("svg", Jc, Xc);
}
const Qc = /* @__PURE__ */ Ue(qc, [["render", Zc]]), Gc = {}, ea = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-bold",
  viewBox: "0 0 16 16"
}, ta = /* @__PURE__ */ X("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" }, null, -1), na = [
  ta
];
function oa(e, t) {
  return _e(), Ee("svg", ea, na);
}
const ra = /* @__PURE__ */ Ue(Gc, [["render", oa]]), sa = {}, ia = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-italic",
  viewBox: "0 0 16 16"
}, la = /* @__PURE__ */ X("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }, null, -1), ca = [
  la
];
function aa(e, t) {
  return _e(), Ee("svg", ia, ca);
}
const fa = /* @__PURE__ */ Ue(sa, [["render", aa]]), ua = {}, da = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-underline",
  viewBox: "0 0 16 16"
}, pa = /* @__PURE__ */ X("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" }, null, -1), ha = [
  pa
];
function ma(e, t) {
  return _e(), Ee("svg", da, ha);
}
const ga = /* @__PURE__ */ Ue(ua, [["render", ma]]), _a = {}, va = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-type-strikethrough",
  viewBox: "0 0 16 16"
}, ba = /* @__PURE__ */ X("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" }, null, -1), Ea = [
  ba
];
function Na(e, t) {
  return _e(), Ee("svg", va, Ea);
}
const ya = /* @__PURE__ */ Ue(_a, [["render", Na]]), Oa = { class: "editorToolbar" }, wa = { class: "editorMenu" }, xa = {
  key: 0,
  class: "editorMenu"
}, Da = ["value"], Va = ["srcdoc"], Ca = { class: "editorStatusbar" }, Ta = { class: "editorMenu" }, $a = { class: "editorItem plain" }, Ia = { class: "editorMenu" }, Aa = { class: "editorItem plain" }, Ma = /* @__PURE__ */ rs({
  __name: "TextEditor",
  props: {
    modelValue: { default: "<p>Start writing...</p>" },
    height: { default: "300px" },
    showCode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = $e(""), r = $e(""), s = $e([]), i = $e(null), c = $e(null), a = $e(null), u = $e(null), h = $e(n.modelValue || "<p></p>"), d = $e("text");
    Cc();
    const _ = Vs(() => `<!doctype html>
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
    ${h.value.replace(/\<(p|h1|h2|h3)\>/g, '<div data-tag="$1">').replace(/\<\/(p|h1|h2|h3)\>/g, "</div>").replace(/\<(b|i|u|s)\>/g, '<span data-tag="$1">').replace(/\<\/(b|i|u|s)\>/g, "</span>")}
  </body>
</html>`);
    Oo(() => {
      setTimeout(() => {
        if (i.value !== null) {
          const R = i.value.contentDocument, b = [].slice.call(R.body.children);
          for (let T of b)
            T.addEventListener("click", (P) => {
              P.preventDefault(), D(P.target), C(T.children);
            });
          R.addEventListener("selectionchange", se);
        }
      }, 200);
    }), is(() => {
      setTimeout(() => {
        if (i.value !== null) {
          const R = i.value.contentDocument, b = [].slice.call(R.body.children);
          for (let T of b)
            T.addEventListener("click", (P) => {
              P.preventDefault(), D(P.target), C(T.children);
            });
          R.addEventListener("selectionchange", se);
        }
      }, 200);
    }), Pt(d, () => {
      h.value = n.modelValue;
    }), Pt(h, () => {
      H();
    });
    const D = (R) => {
      (R == null ? void 0 : R.tagName.toLowerCase()) === "div" && (c.value = R, o.value = R.getAttribute("data-tag"), s.value = []);
    }, A = () => {
      c.value !== null && c.value.tagName.toLowerCase() === "div" && (c.value.setAttribute("data-tag", o.value), H());
    }, C = (R) => {
      const b = [].slice.call(R);
      for (let T of b)
        T.addEventListener("click", (P) => {
          P.preventDefault(), P.stopPropagation(), s.value = [], W(P.target.parentElement), s.value.push(P.target.getAttribute("data-tag")), a.value = P.target, C(T.children);
        });
    }, W = (R) => {
      R.tagName.toLowerCase() !== "div" && s.value.unshift(R.getAttribute("data-tag"));
    }, U = $e(null), H = () => {
      clearTimeout(U.value), U.value = setTimeout(() => {
        if (i.value !== null) {
          const T = [].slice.call(i.value.contentDocument.body.children).map((P) => {
            const ee = P.getAttribute("data-tag");
            return `<${ee}>${q(P.childNodes)}</${ee}>`;
          }).join(`
`).replaceAll("<null></null>", "");
          t("update:modelValue", T);
        }
      }, 300);
    }, q = (R) => {
      let b = "";
      for (let T of R)
        if (T.nodeName === "#text")
          b = b + T.nodeValue;
        else if (T.childNodes) {
          const P = T.getAttribute("data-tag");
          P === "span" ? b = b + q(T.childNodes) : b = b + `<${P}>${q(T.childNodes)}</${P}>`;
        }
      return b;
    }, se = (R) => {
      r.value = "";
      const b = i.value.contentDocument.getSelection();
      (Number((b == null ? void 0 : b.anchorOffset) || 0) !== 0 && Number((b == null ? void 0 : b.focusOffset) || 0) !== 0 || Number((b == null ? void 0 : b.anchorOffset) || 0) < Number((b == null ? void 0 : b.focusOffset) || 0)) && (u.value = b);
    }, K = () => {
      if (u.value !== null) {
        const R = u.value.getRangeAt(0);
        if (R.toString().length >= 2) {
          const b = i.value.contentDocument.createElement("span");
          b.setAttribute("data-tag", r.value), R.surroundContents(b);
        } else
          a.value !== null && (a.value.getAttribute("data-tag") === "span" ? ye(a.value.parentElement) : a.value.setAttribute("data-tag", "span"));
        H();
      }
    }, ye = (R) => {
      ["b", "i", "u", "s"].includes(R.getAttribute("data-tag")) && (R.setAttribute("data-tag", "span"), ye(R));
    };
    return (R, b) => (_e(), Ee("div", {
      class: "editor editorText tedirEditor",
      onMouseout: H
    }, [
      X("div", Oa, [
        X("ul", wa, [
          X("li", {
            class: ge(["editorItem", o.value === "p" ? "active" : ""]),
            onClick: b[0] || (b[0] = (T) => {
              o.value = "p", A();
            })
          }, [
            ne(kc)
          ], 2),
          X("li", {
            class: ge(["editorItem", o.value === "h1" ? "active" : ""]),
            onClick: b[1] || (b[1] = (T) => {
              o.value = "h1", A();
            })
          }, [
            ne(jc)
          ], 2),
          X("li", {
            class: ge(["editorItem", o.value === "h2" ? "active" : ""]),
            onClick: b[2] || (b[2] = (T) => {
              o.value = "h2", A();
            })
          }, [
            ne(Wc)
          ], 2),
          X("li", {
            class: ge(["editorItem", o.value === "h3" ? "active" : ""]),
            onClick: b[3] || (b[3] = (T) => {
              o.value = "h3", A();
            })
          }, [
            ne(Qc)
          ], 2),
          X("li", {
            class: ge(["editorItem", s.value.includes("b") ? "active" : ""]),
            onClick: b[4] || (b[4] = (T) => {
              r.value = "b", K();
            })
          }, [
            ne(ra)
          ], 2),
          X("li", {
            class: ge(["editorItem", s.value.includes("i") ? "active" : ""]),
            onClick: b[5] || (b[5] = (T) => {
              r.value = "i", K();
            })
          }, [
            ne(fa)
          ], 2),
          X("li", {
            class: ge(["editorItem", s.value.includes("u") ? "active" : ""]),
            onClick: b[6] || (b[6] = (T) => {
              r.value = "u", K();
            })
          }, [
            ne(ga)
          ], 2),
          X("li", {
            class: ge(["editorItem", s.value.includes("s") ? "active" : ""]),
            onClick: b[7] || (b[7] = (T) => {
              r.value = "s", K();
            })
          }, [
            ne(ya)
          ], 2)
        ]),
        e.showCode === !0 ? (_e(), Ee("ul", xa, [
          X("li", {
            class: ge(["editorItem", { active: d.value === "text" }]),
            onClick: b[8] || (b[8] = (T) => d.value = "text")
          }, "Editor", 2),
          X("li", {
            class: ge(["editorItem", { active: d.value === "html" }]),
            onClick: b[9] || (b[9] = (T) => d.value = "html")
          }, "HTML", 2)
        ])) : Ul("", !0)
      ]),
      e.showCode === !0 && d.value === "html" ? (_e(), Ee("textarea", {
        key: 0,
        class: "editorContent",
        value: e.modelValue,
        style: Rt({ height: e.height }),
        readonly: ""
      }, null, 12, Da)) : (_e(), Ee("iframe", {
        key: 1,
        ref_key: "editorContentRef",
        ref: i,
        src: "about:blank",
        srcdoc: Rr(_),
        class: "editorContent",
        style: Rt({ height: e.height })
      }, null, 12, Va)),
      X("div", Ca, [
        X("ul", Ta, [
          X("li", $a, kn(o.value) + " " + kn(s.value.length >= 1 ? "\u203A " + s.value.join(" \u203A ") : ""), 1)
        ]),
        X("ul", Ia, [
          X("li", Aa, "Total: " + kn(String(h.value).split(" ").length) + " words", 1)
        ])
      ])
    ], 32));
  }
}), ka = `.editor[data-v-bc55e090]{width:100%;background-color:#fff;background-clip:border-box;word-wrap:break-word}.editor>*[data-v-bc55e090]:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.editor>*[data-v-bc55e090]:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.editorToolbar[data-v-bc55e090]{border-bottom:1px solid #d9d9d9;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:.5rem;background-color:#fff;color:inherit}.editorStatusbar[data-v-bc55e090]{border-top:1px solid #d9d9d9;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:.5rem;background-color:#fff;color:inherit}.editorContent[data-v-bc55e090]{flex:1 1 auto;padding:1rem .75rem;outline:0;display:block;position:relative;z-index:14;background-color:#fff;border-color:#d9d9d9}.editorMenu[data-v-bc55e090]{display:flex;padding-left:0;margin:0;list-style:none;gap:5px}.editorItem[data-v-bc55e090]{display:block;padding:.25rem;border-radius:.25rem;color:#4a5568;text-decoration:none;cursor:pointer;border:1px solid transparent;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}.editorItem[data-v-bc55e090]:not(.active):not(.plain):hover{background-color:#f2f2f2;color:inherit;border-color:#d9d9d9}.editorItem.active[data-v-bc55e090]{background-color:#e7eefa;color:inherit;border-color:#b8e7fd}.editorItem.plain[data-v-bc55e090]{cursor:default}.editorText[data-v-bc55e090]{position:relative;display:flex;flex-direction:column;border:1px solid #d9d9d9;border-radius:.25rem;z-index:15}.editorTooltip[data-v-bc55e090]{position:relative;display:flex;flex-direction:column}.editorSection[data-v-bc55e090]{border-top-left-radius:0}.editorSection .editorBlock[data-v-bc55e090]{position:relative;display:flex;flex-direction:column;border:1px solid #d9d9d9;border-radius:.25rem;z-index:15;border-top-left-radius:0;margin-top:47px}.editorSection .editorBlock .editorToolbar[data-v-bc55e090]{position:absolute;top:-37px;left:-1px;border:1px solid #d9d9d9;border-top-right-radius:.25rem;border-top-left-radius:.25rem;z-index:13}.editorBackdrop[data-v-bc55e090]{position:fixed;z-index:25;inset:0 3em 3em 0;width:100vw;height:100vh;display:none}.editorInline[data-v-bc55e090]{position:relative;display:inline-block}.editorInline .editorToolbar[data-v-bc55e090]{visibility:hidden;position:absolute;z-index:75;bottom:-47px;left:0px;display:inline-block;border:1px solid #d9d9d9;border-radius:.25rem}.editorInline:hover .editorToolbar[data-v-bc55e090]{visibility:visible}.editorInline .editorToolbar[data-v-bc55e090]:after{content:"";position:absolute;z-index:74;top:-16px;left:20px;margin-left:-10px;border-width:8px;border-style:solid;transform:rotate(180deg);border-color:#d9d9d9 transparent transparent transparent}@media (prefers-color-scheme: dark){.editor[data-v-bc55e090]{background-color:#2f2f2f}.editorToolbar[data-v-bc55e090],.editorStatusbar[data-v-bc55e090],.editorContent[data-v-bc55e090]{background-color:#2f2f2f;border-color:#5f5f5f}.editorItem[data-v-bc55e090]{color:#d9d9d9}.editorItem[data-v-bc55e090]:not(.active):not(.plain):hover{background-color:#5f5f5f;color:#d9d9d9;border-color:#5f5f5f}.editorItem.active[data-v-bc55e090]{background-color:#4a5568;color:#b8e7fd;border-color:#b8e7fd}.editorText[data-v-bc55e090],.editorSection .editorBlock[data-v-bc55e090],.editorSection .editorBlock .editorToolbar[data-v-bc55e090],.editorInline .editorToolbar[data-v-bc55e090]{border-color:#5f5f5f}.editorInline .editorToolbar[data-v-bc55e090]:after{border-color:#5f5f5f transparent transparent transparent}}@media (prefers-color-scheme: light){[data-mode=dark] .editor[data-v-bc55e090]{background-color:#2f2f2f}[data-mode=dark] .editorToolbar[data-v-bc55e090],[data-mode=dark] .editorStatusbar[data-v-bc55e090],[data-mode=dark] .editorContent[data-v-bc55e090]{background-color:#2f2f2f;border-color:#5f5f5f}[data-mode=dark] .editorItem[data-v-bc55e090]{color:#d9d9d9}[data-mode=dark] .editorItem[data-v-bc55e090]:not(.active):not(.plain):hover{background-color:#5f5f5f;color:#d9d9d9;border-color:#5f5f5f}[data-mode=dark] .editorItem.active[data-v-bc55e090]{background-color:#4a5568;color:#b8e7fd;border-color:#b8e7fd}[data-mode=dark] .editorText[data-v-bc55e090],[data-mode=dark] .editorSection .editorBlock[data-v-bc55e090],[data-mode=dark] .editorSection .editorBlock .editorToolbar[data-v-bc55e090],[data-mode=dark] .editorInline .editorToolbar[data-v-bc55e090]{border-color:#5f5f5f}[data-mode=dark] .editorInline .editorToolbar[data-v-bc55e090]:after{border-color:#5f5f5f transparent transparent transparent}}@media (prefers-color-scheme: dark){[data-mode=light] .editor[data-v-bc55e090]{background-color:#fff}[data-mode=light] .editorToolbar[data-v-bc55e090],[data-mode=light] .editorStatusbar[data-v-bc55e090],[data-mode=light] .editorContent[data-v-bc55e090]{background-color:#fff;border-color:#d9d9d9}[data-mode=light] .editorItem[data-v-bc55e090]{color:#4a5568}[data-mode=light] .editorItem[data-v-bc55e090]:not(.active):not(.plain):hover{background-color:#f2f2f2;color:inherit;border-color:#d9d9d9}[data-mode=light] .editorItem.active[data-v-bc55e090]{background-color:#e7eefa;color:inherit;border-color:#b8e7fd}[data-mode=light] .editorText[data-v-bc55e090],[data-mode=light] .editorSection .editorBlock[data-v-bc55e090],[data-mode=light] .editorSection .editorBlock .editorToolbar[data-v-bc55e090],[data-mode=light] .editorInline .editorToolbar[data-v-bc55e090]{border-color:#d9d9d9}[data-mode=light] .editorInline .editorToolbar[data-v-bc55e090]:after{border-color:#d9d9d9 transparent transparent transparent}}
`, Pa = /* @__PURE__ */ Ue(Ma, [["styles", [ka]], ["__scopeId", "data-v-bc55e090"]]), Sa = yc(Pa);
function Ra() {
  customElements.define("text-editor", Sa);
}
export {
  Sa as TextEditor,
  Ra as useTedirEditor
};
