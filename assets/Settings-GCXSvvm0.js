import {r as A, j as t, c as z, p as ss} from "./vendor-sZzeK2xX.js";
import {D as fe, F as L, G as as, u as It, H as is, J as Te, K as Ut, B as W, O as Bt, Q as Lt, R as rs, S as kt, U as jt, V as cs, W as Et, X as We, Y as he, Z as wt, _ as ls, $ as os, a0 as ds, j as Ot, a1 as us, a2 as Dt, a3 as Xe, a4 as Mt, a5 as qe, L as gs, a6 as fs, a7 as Rt, a8 as hs, e as ms, a9 as Nt, aa as xs, ab as ps, ac as _t, ad as Ct, ae as St, af as bs, ag as vs, ah as ys, ai as js, aj as ws, ak as Ns, al as _s} from "./index-yD3PZac5.js";
import {c as Ae, g as Cs} from "./auth-PrcDRVv8.js";
import {b as C, d as Ye, H as Ss, a as As, j as Ts} from "./react-dom-aIKBZ0FD.js";
import {I as ie, a as k, s as Ps, F as Is, g as Us} from "./Icons-z4rFBofc.js";
import "./hls-zqvr_1ex.js";
import "./caption-parsing-2Q8ZLDHc.js";
import "./language-db-l3NI_WD5.js";
import "./locales-Uh0OzjGf.js";
var Pe = {
    exports: {}
};
Pe.exports;
(function(s, i) {
    var c = 200
      , d = "__lodash_hash_undefined__"
      , o = 1
      , m = 2
      , g = 9007199254740991
      , u = "[object Arguments]"
      , p = "[object Array]"
      , E = "[object AsyncFunction]"
      , T = "[object Boolean]"
      , x = "[object Date]"
      , R = "[object Error]"
      , O = "[object Function]"
      , X = "[object GeneratorFunction]"
      , P = "[object Map]"
      , U = "[object Number]"
      , H = "[object Null]"
      , l = "[object Object]"
      , Y = "[object Promise]"
      , h = "[object Proxy]"
      , N = "[object RegExp]"
      , I = "[object Set]"
      , me = "[object String]"
      , Ue = "[object Symbol]"
      , Be = "[object Undefined]"
      , re = "[object WeakMap]"
      , xe = "[object ArrayBuffer]"
      , ce = "[object DataView]"
      , Le = "[object Float32Array]"
      , pe = "[object Float64Array]"
      , ke = "[object Int8Array]"
      , Ee = "[object Int16Array]"
      , Oe = "[object Int32Array]"
      , be = "[object Uint8Array]"
      , De = "[object Uint8ClampedArray]"
      , Je = "[object Uint16Array]"
      , Ft = "[object Uint32Array]"
      , Kt = /[\\^$.*+?()[\]{}|]/g
      , zt = /^\[object .+?Constructor\]$/
      , Gt = /^(?:0|[1-9]\d*)$/
      , b = {};
    b[Le] = b[pe] = b[ke] = b[Ee] = b[Oe] = b[be] = b[De] = b[Je] = b[Ft] = !0,
    b[u] = b[p] = b[xe] = b[T] = b[ce] = b[x] = b[R] = b[O] = b[P] = b[U] = b[l] = b[N] = b[I] = b[me] = b[re] = !1;
    var Qe = typeof Ae == "object" && Ae && Ae.Object === Object && Ae
      , $t = typeof self == "object" && self && self.Object === Object && self
      , G = Qe || $t || Function("return this")()
      , Ze = i && !i.nodeType && i
      , Ve = Ze && !0 && s && !s.nodeType && s
      , et = Ve && Ve.exports === Ze
      , Me = et && Qe.process
      , tt = function() {
        try {
            return Me && Me.binding && Me.binding("util")
        } catch {}
    }()
      , nt = tt && tt.isTypedArray;
    function qt(e, n) {
        for (var a = -1, r = e == null ? 0 : e.length, v = 0, f = []; ++a < r; ) {
            var j = e[a];
            n(j, a, e) && (f[v++] = j)
        }
        return f
    }
    function Wt(e, n) {
        for (var a = -1, r = n.length, v = e.length; ++a < r; )
            e[v + a] = n[a];
        return e
    }
    function Xt(e, n) {
        for (var a = -1, r = e == null ? 0 : e.length; ++a < r; )
            if (n(e[a], a, e))
                return !0;
        return !1
    }
    function Yt(e, n) {
        for (var a = -1, r = Array(e); ++a < e; )
            r[a] = n(a);
        return r
    }
    function Jt(e) {
        return function(n) {
            return e(n)
        }
    }
    function Qt(e, n) {
        return e.has(n)
    }
    function Zt(e, n) {
        return e == null ? void 0 : e[n]
    }
    function Vt(e) {
        var n = -1
          , a = Array(e.size);
        return e.forEach(function(r, v) {
            a[++n] = [v, r]
        }),
        a
    }
    function en(e, n) {
        return function(a) {
            return e(n(a))
        }
    }
    function tn(e) {
        var n = -1
          , a = Array(e.size);
        return e.forEach(function(r) {
            a[++n] = r
        }),
        a
    }
    var nn = Array.prototype
      , sn = Function.prototype
      , ve = Object.prototype
      , Re = G["__core-js_shared__"]
      , st = sn.toString
      , K = ve.hasOwnProperty
      , at = function() {
        var e = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }()
      , it = ve.toString
      , an = RegExp("^" + st.call(K).replace(Kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , rt = et ? G.Buffer : void 0
      , ye = G.Symbol
      , ct = G.Uint8Array
      , lt = ve.propertyIsEnumerable
      , rn = nn.splice
      , V = ye ? ye.toStringTag : void 0
      , ot = Object.getOwnPropertySymbols
      , cn = rt ? rt.isBuffer : void 0
      , ln = en(Object.keys, Object)
      , He = le(G, "DataView")
      , oe = le(G, "Map")
      , Fe = le(G, "Promise")
      , Ke = le(G, "Set")
      , ze = le(G, "WeakMap")
      , de = le(Object, "create")
      , on = ne(He)
      , dn = ne(oe)
      , un = ne(Fe)
      , gn = ne(Ke)
      , fn = ne(ze)
      , dt = ye ? ye.prototype : void 0
      , Ge = dt ? dt.valueOf : void 0;
    function ee(e) {
        var n = -1
          , a = e == null ? 0 : e.length;
        for (this.clear(); ++n < a; ) {
            var r = e[n];
            this.set(r[0], r[1])
        }
    }
    function hn() {
        this.__data__ = de ? de(null) : {},
        this.size = 0
    }
    function mn(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0,
        n
    }
    function xn(e) {
        var n = this.__data__;
        if (de) {
            var a = n[e];
            return a === d ? void 0 : a
        }
        return K.call(n, e) ? n[e] : void 0
    }
    function pn(e) {
        var n = this.__data__;
        return de ? n[e] !== void 0 : K.call(n, e)
    }
    function bn(e, n) {
        var a = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        a[e] = de && n === void 0 ? d : n,
        this
    }
    ee.prototype.clear = hn,
    ee.prototype.delete = mn,
    ee.prototype.get = xn,
    ee.prototype.has = pn,
    ee.prototype.set = bn;
    function $(e) {
        var n = -1
          , a = e == null ? 0 : e.length;
        for (this.clear(); ++n < a; ) {
            var r = e[n];
            this.set(r[0], r[1])
        }
    }
    function vn() {
        this.__data__ = [],
        this.size = 0
    }
    function yn(e) {
        var n = this.__data__
          , a = we(n, e);
        if (a < 0)
            return !1;
        var r = n.length - 1;
        return a == r ? n.pop() : rn.call(n, a, 1),
        --this.size,
        !0
    }
    function jn(e) {
        var n = this.__data__
          , a = we(n, e);
        return a < 0 ? void 0 : n[a][1]
    }
    function wn(e) {
        return we(this.__data__, e) > -1
    }
    function Nn(e, n) {
        var a = this.__data__
          , r = we(a, e);
        return r < 0 ? (++this.size,
        a.push([e, n])) : a[r][1] = n,
        this
    }
    $.prototype.clear = vn,
    $.prototype.delete = yn,
    $.prototype.get = jn,
    $.prototype.has = wn,
    $.prototype.set = Nn;
    function te(e) {
        var n = -1
          , a = e == null ? 0 : e.length;
        for (this.clear(); ++n < a; ) {
            var r = e[n];
            this.set(r[0], r[1])
        }
    }
    function _n() {
        this.size = 0,
        this.__data__ = {
            hash: new ee,
            map: new (oe || $),
            string: new ee
        }
    }
    function Cn(e) {
        var n = Ne(this, e).delete(e);
        return this.size -= n ? 1 : 0,
        n
    }
    function Sn(e) {
        return Ne(this, e).get(e)
    }
    function An(e) {
        return Ne(this, e).has(e)
    }
    function Tn(e, n) {
        var a = Ne(this, e)
          , r = a.size;
        return a.set(e, n),
        this.size += a.size == r ? 0 : 1,
        this
    }
    te.prototype.clear = _n,
    te.prototype.delete = Cn,
    te.prototype.get = Sn,
    te.prototype.has = An,
    te.prototype.set = Tn;
    function je(e) {
        var n = -1
          , a = e == null ? 0 : e.length;
        for (this.__data__ = new te; ++n < a; )
            this.add(e[n])
    }
    function Pn(e) {
        return this.__data__.set(e, d),
        this
    }
    function In(e) {
        return this.__data__.has(e)
    }
    je.prototype.add = je.prototype.push = Pn,
    je.prototype.has = In;
    function J(e) {
        var n = this.__data__ = new $(e);
        this.size = n.size
    }
    function Un() {
        this.__data__ = new $,
        this.size = 0
    }
    function Bn(e) {
        var n = this.__data__
          , a = n.delete(e);
        return this.size = n.size,
        a
    }
    function Ln(e) {
        return this.__data__.get(e)
    }
    function kn(e) {
        return this.__data__.has(e)
    }
    function En(e, n) {
        var a = this.__data__;
        if (a instanceof $) {
            var r = a.__data__;
            if (!oe || r.length < c - 1)
                return r.push([e, n]),
                this.size = ++a.size,
                this;
            a = this.__data__ = new te(r)
        }
        return a.set(e, n),
        this.size = a.size,
        this
    }
    J.prototype.clear = Un,
    J.prototype.delete = Bn,
    J.prototype.get = Ln,
    J.prototype.has = kn,
    J.prototype.set = En;
    function On(e, n) {
        var a = _e(e)
          , r = !a && Qn(e)
          , v = !a && !r && $e(e)
          , f = !a && !r && !v && vt(e)
          , j = a || r || v || f
          , w = j ? Yt(e.length, String) : []
          , _ = w.length;
        for (var y in e)
            (n || K.call(e, y)) && !(j && (y == "length" || v && (y == "offset" || y == "parent") || f && (y == "buffer" || y == "byteLength" || y == "byteOffset") || qn(y, _))) && w.push(y);
        return w
    }
    function we(e, n) {
        for (var a = e.length; a--; )
            if (mt(e[a][0], n))
                return a;
        return -1
    }
    function Dn(e, n, a) {
        var r = n(e);
        return _e(e) ? r : Wt(r, a(e))
    }
    function ue(e) {
        return e == null ? e === void 0 ? Be : H : V && V in Object(e) ? Gn(e) : Jn(e)
    }
    function ut(e) {
        return ge(e) && ue(e) == u
    }
    function gt(e, n, a, r, v) {
        return e === n ? !0 : e == null || n == null || !ge(e) && !ge(n) ? e !== e && n !== n : Mn(e, n, a, r, gt, v)
    }
    function Mn(e, n, a, r, v, f) {
        var j = _e(e)
          , w = _e(n)
          , _ = j ? p : Q(e)
          , y = w ? p : Q(n);
        _ = _ == u ? l : _,
        y = y == u ? l : y;
        var B = _ == l
          , F = y == l
          , S = _ == y;
        if (S && $e(e)) {
            if (!$e(n))
                return !1;
            j = !0,
            B = !1
        }
        if (S && !B)
            return f || (f = new J),
            j || vt(e) ? ft(e, n, a, r, v, f) : Kn(e, n, _, a, r, v, f);
        if (!(a & o)) {
            var D = B && K.call(e, "__wrapped__")
              , M = F && K.call(n, "__wrapped__");
            if (D || M) {
                var Z = D ? e.value() : e
                  , q = M ? n.value() : n;
                return f || (f = new J),
                v(Z, q, a, r, f)
            }
        }
        return S ? (f || (f = new J),
        zn(e, n, a, r, v, f)) : !1
    }
    function Rn(e) {
        if (!bt(e) || Xn(e))
            return !1;
        var n = xt(e) ? an : zt;
        return n.test(ne(e))
    }
    function Hn(e) {
        return ge(e) && pt(e.length) && !!b[ue(e)]
    }
    function Fn(e) {
        if (!Yn(e))
            return ln(e);
        var n = [];
        for (var a in Object(e))
            K.call(e, a) && a != "constructor" && n.push(a);
        return n
    }
    function ft(e, n, a, r, v, f) {
        var j = a & o
          , w = e.length
          , _ = n.length;
        if (w != _ && !(j && _ > w))
            return !1;
        var y = f.get(e);
        if (y && f.get(n))
            return y == n;
        var B = -1
          , F = !0
          , S = a & m ? new je : void 0;
        for (f.set(e, n),
        f.set(n, e); ++B < w; ) {
            var D = e[B]
              , M = n[B];
            if (r)
                var Z = j ? r(M, D, B, n, e, f) : r(D, M, B, e, n, f);
            if (Z !== void 0) {
                if (Z)
                    continue;
                F = !1;
                break
            }
            if (S) {
                if (!Xt(n, function(q, se) {
                    if (!Qt(S, se) && (D === q || v(D, q, a, r, f)))
                        return S.push(se)
                })) {
                    F = !1;
                    break
                }
            } else if (!(D === M || v(D, M, a, r, f))) {
                F = !1;
                break
            }
        }
        return f.delete(e),
        f.delete(n),
        F
    }
    function Kn(e, n, a, r, v, f, j) {
        switch (a) {
        case ce:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
            e = e.buffer,
            n = n.buffer;
        case xe:
            return !(e.byteLength != n.byteLength || !f(new ct(e), new ct(n)));
        case T:
        case x:
        case U:
            return mt(+e, +n);
        case R:
            return e.name == n.name && e.message == n.message;
        case N:
        case me:
            return e == n + "";
        case P:
            var w = Vt;
        case I:
            var _ = r & o;
            if (w || (w = tn),
            e.size != n.size && !_)
                return !1;
            var y = j.get(e);
            if (y)
                return y == n;
            r |= m,
            j.set(e, n);
            var B = ft(w(e), w(n), r, v, f, j);
            return j.delete(e),
            B;
        case Ue:
            if (Ge)
                return Ge.call(e) == Ge.call(n)
        }
        return !1
    }
    function zn(e, n, a, r, v, f) {
        var j = a & o
          , w = ht(e)
          , _ = w.length
          , y = ht(n)
          , B = y.length;
        if (_ != B && !j)
            return !1;
        for (var F = _; F--; ) {
            var S = w[F];
            if (!(j ? S in n : K.call(n, S)))
                return !1
        }
        var D = f.get(e);
        if (D && f.get(n))
            return D == n;
        var M = !0;
        f.set(e, n),
        f.set(n, e);
        for (var Z = j; ++F < _; ) {
            S = w[F];
            var q = e[S]
              , se = n[S];
            if (r)
                var yt = j ? r(se, q, S, n, e, f) : r(q, se, S, e, n, f);
            if (!(yt === void 0 ? q === se || v(q, se, a, r, f) : yt)) {
                M = !1;
                break
            }
            Z || (Z = S == "constructor")
        }
        if (M && !Z) {
            var Ce = e.constructor
              , Se = n.constructor;
            Ce != Se && "constructor"in e && "constructor"in n && !(typeof Ce == "function" && Ce instanceof Ce && typeof Se == "function" && Se instanceof Se) && (M = !1)
        }
        return f.delete(e),
        f.delete(n),
        M
    }
    function ht(e) {
        return Dn(e, es, $n)
    }
    function Ne(e, n) {
        var a = e.__data__;
        return Wn(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
    }
    function le(e, n) {
        var a = Zt(e, n);
        return Rn(a) ? a : void 0
    }
    function Gn(e) {
        var n = K.call(e, V)
          , a = e[V];
        try {
            e[V] = void 0;
            var r = !0
        } catch {}
        var v = it.call(e);
        return r && (n ? e[V] = a : delete e[V]),
        v
    }
    var $n = ot ? function(e) {
        return e == null ? [] : (e = Object(e),
        qt(ot(e), function(n) {
            return lt.call(e, n)
        }))
    }
    : ts
      , Q = ue;
    (He && Q(new He(new ArrayBuffer(1))) != ce || oe && Q(new oe) != P || Fe && Q(Fe.resolve()) != Y || Ke && Q(new Ke) != I || ze && Q(new ze) != re) && (Q = function(e) {
        var n = ue(e)
          , a = n == l ? e.constructor : void 0
          , r = a ? ne(a) : "";
        if (r)
            switch (r) {
            case on:
                return ce;
            case dn:
                return P;
            case un:
                return Y;
            case gn:
                return I;
            case fn:
                return re
            }
        return n
    }
    );
    function qn(e, n) {
        return n = n ?? g,
        !!n && (typeof e == "number" || Gt.test(e)) && e > -1 && e % 1 == 0 && e < n
    }
    function Wn(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null
    }
    function Xn(e) {
        return !!at && at in e
    }
    function Yn(e) {
        var n = e && e.constructor
          , a = typeof n == "function" && n.prototype || ve;
        return e === a
    }
    function Jn(e) {
        return it.call(e)
    }
    function ne(e) {
        if (e != null) {
            try {
                return st.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    function mt(e, n) {
        return e === n || e !== e && n !== n
    }
    var Qn = ut(function() {
        return arguments
    }()) ? ut : function(e) {
        return ge(e) && K.call(e, "callee") && !lt.call(e, "callee")
    }
      , _e = Array.isArray;
    function Zn(e) {
        return e != null && pt(e.length) && !xt(e)
    }
    var $e = cn || ns;
    function Vn(e, n) {
        return gt(e, n)
    }
    function xt(e) {
        if (!bt(e))
            return !1;
        var n = ue(e);
        return n == O || n == X || n == E || n == h
    }
    function pt(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= g
    }
    function bt(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function")
    }
    function ge(e) {
        return e != null && typeof e == "object"
    }
    var vt = nt ? Jt(nt) : Hn;
    function es(e) {
        return Zn(e) ? On(e) : Fn(e)
    }
    function ts() {
        return []
    }
    function ns() {
        return !1
    }
    s.exports = Vn
}
)(Pe, Pe.exports);
var Bs = Pe.exports;
const Ls = Cs(Bs);
function ae(s) {
    const [i,c] = A.useState(void 0);
    A.useEffect(()=>{
        c(void 0)
    }
    , [s]);
    const d = A.useMemo(()=>!Ls(i, s) && i !== void 0, [i, s])
      , o = A.useCallback(u=>{
        u instanceof Function ? c(p=>u(p !== void 0 ? p : s)) : c(u)
    }
    , [s, c])
      , m = i === void 0 ? s : i
      , g = A.useCallback(()=>c(void 0), [c]);
    return [m, o, g, d]
}
function ks(s, i, c, d, o, m, g) {
    const [u,p,E,T] = ae(o)
      , [x,R,O,X] = ae(m)
      , [P,U,H,l] = ae(s)
      , [Y,h,N,I] = ae(i)
      , [me,Ue,Be,re] = ae(c)
      , [xe,ce,Le,pe] = ae(d)
      , [ke,Ee,Oe,be] = ae(g);
    function De() {
        H(),
        N(),
        Be(),
        E(),
        O(),
        Le(),
        Oe()
    }
    return {
        reset: De,
        changed: l || I || re || pe || X || T || be,
        theme: {
            state: P,
            set: U,
            changed: l
        },
        appLanguage: {
            state: Y,
            set: h,
            changed: I
        },
        subtitleStyling: {
            state: me,
            set: Ue,
            changed: re
        },
        deviceName: {
            state: xe,
            set: ce,
            changed: pe
        },
        proxyUrls: {
            state: u,
            set: p,
            changed: T
        },
        backendUrl: {
            state: x,
            set: R,
            changed: X
        },
        profile: {
            state: ke,
            set: Ee,
            changed: be
        }
    }
}
function Ie(s) {
    return t.jsx("div", {
        className: z("w-full rounded-lg bg-settings-card-background bg-opacity-[0.15] border border-settings-card-border", s.paddingClass ?? "px-8 py-6", s.className),
        children: s.children
    })
}
function Ht(s) {
    
    
}
function Es() {
    const {t: s} = C()
      , i = fe()
      , c = L(u=>u.account)
      , {logout: d} = as()
      , o = It("account-delete")
      , [m,g] = Ye(async()=>{
        c && (await is(i, c),
        await d(),
        o.hide())
    }
    , [d, c, i, o.hide]);
    return c ? t.jsxs("div", {
        children: [t.jsx(Te, {
            border: !0,
            children: s("settings.account.actions.title")
        }), t.jsxs(Ht, {
            paddingClass: "px-6 py-12",
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12",
            children: [t.jsxs("div", {
                children: [t.jsx(Ut, {
                    children: s("settings.account.actions.delete.title")
                }), t.jsx("p", {
                    className: "text-type-text",
                    children: s("settings.account.actions.delete.text")
                })]
            }), t.jsx("div", {
                className: "flex justify-start lg:justify-end items-center",
                children: t.jsx(W, {
                    theme: "danger",
                    loading: m.loading,
                    onClick: o.show,
                    children: s("settings.account.actions.delete.button")
                })
            })]
        }), t.jsx(Bt, {
            id: o.id,
            children: t.jsxs(Lt, {
                children: [t.jsx(Te, {
                    className: "!mt-0",
                    children: s("settings.account.actions.delete.confirmTitle")
                }), t.jsx(rs, {
                    children: s("settings.account.actions.delete.confirmDescription")
                }), t.jsx(W, {
                    theme: "danger",
                    loading: m.loading,
                    onClick: g,
                    children: s("settings.account.actions.delete.confirmButton")
                })]
            })
        })]
    }) : null
}
function Os(s) {
    const {t: i} = C();
    return t.jsx(Bt, {
        id: s.id,
        children: t.jsxs(Lt, {
            children: [t.jsxs("div", {
                className: "flex justify-between items-center mb-9",
                children: [t.jsx(Te, {
                    className: "!mt-0 !mb-0",
                    children: i("settings.account.profile.title")
                }), t.jsx(kt, {
                    profile: {
                        colorA: s.colorA,
                        colorB: s.colorB,
                        icon: s.userIcon
                    },
                    iconClass: "text-2xl",
                    sizeClass: "w-12 h-12"
                })]
            }), t.jsxs("div", {
                className: "space-y-6",
                children: [t.jsx(jt, {
                    label: i("settings.account.profile.firstColor"),
                    value: s.colorA,
                    onInput: s.setColorA
                }), t.jsx(jt, {
                    label: i("settings.account.profile.secondColor"),
                    value: s.colorB,
                    onInput: s.setColorB
                }), t.jsx(cs, {
                    label: i("settings.account.profile.userIcon"),
                    value: s.userIcon,
                    onInput: s.setUserIcon
                })]
            }), t.jsx("div", {
                className: "flex justify-center mt-8",
                children: t.jsx(W, {
                    theme: "purple",
                    className: "!px-20",
                    onClick: s.close,
                    children: i("settings.account.profile.finish")
                })
            })]
        })
    })
}
function Ds(s) {
    const {t: i} = C()
      , {logout: c} = Et()
      , d = It("profile-edit");
    return t.jsxs(Ie, {
        paddingClass: "px-8 py-10",
        className: "!mt-8",
        children: [t.jsx(Os, {
            id: d.id,
            close: d.hide,
            colorA: s.colorA,
            setColorA: s.setColorA,
            colorB: s.colorB,
            setColorB: s.setColorB,
            userIcon: s.userIcon,
            setUserIcon: s.setUserIcon
        }), t.jsxs("div", {
            className: "grid lg:grid-cols-[auto,1fr] gap-8",
            children: [t.jsx("div", {
                children: t.jsx(kt, {
                    profile: {
                        colorA: s.colorA,
                        colorB: s.colorB,
                        icon: s.userIcon
                    },
                    iconClass: "text-5xl",
                    sizeClass: "w-32 h-32",
                    bottom: t.jsxs("button", {
                        type: "button",
                        className: "tabbable text-xs flex gap-2 items-center bg-editBadge-bg text-editBadge-text hover:bg-editBadge-bgHover py-1 px-3 rounded-full cursor-pointer",
                        onClick: d.show,
                        children: [t.jsx(ie, {
                            icon: k.EDIT
                        }), i("settings.account.accountDetails.editProfile")]
                    })
                })
            }), t.jsx("div", {
                children: t.jsxs("div", {
                    className: "space-y-8 max-w-xs",
                    children: [t.jsx(We, {
                        label: i("settings.account.accountDetails.deviceNameLabel") ?? void 0,
                        placeholder: i("settings.account.accountDetails.deviceNamePlaceholder") ?? void 0,
                        value: s.deviceName,
                        onChange: o=>s.setDeviceName(o)
                    }), t.jsx("div", {
                        className: "flex space-x-3",
                        children: t.jsx(W, {
                            theme: "danger",
                            onClick: c,
                            children: i("settings.account.accountDetails.logoutButton")
                        })
                    })]
                })
            })]
        })]
    })
}
function At(s) {
    const {t: i} = C();
    return t.jsxs("div", {
        className: z({
            "pointer-events-none overflow-hidden w-full rounded": !0,
            "aspect-video relative": !s.fullscreen,
            "fixed inset-0 z-[60]": s.fullscreen 
        }), 
        children: [s.fullscreen && s.show ? t.jsx(Ss, {
            children: t.jsx("html", {
                "data-no-scroll": !0
            })
        }) : null, t.jsx(Ot, {
            animation: "fade",
            show: s.show,
            children: t.jsxs("div", {
                className: "absolute inset-0 pointer-events-auto",
                style: {
                    backgroundImage: "radial-gradient(102.95% 87.07% at 100% 100%, #EEAA45 0%, rgba(165, 186, 151, 0.56) 54.69%, rgba(74, 207, 254, 0.00) 100%), linear-gradient(180deg, #48D3FF 0%, #3B27B2 100%)"
                },
                children: [t.jsx("button", {
                    type: "button",
                    className: "tabbable bg-black absolute right-3 top-3 text-white bg-opacity-25 duration-100 transition-[background-color,transform] active:scale-110 hover:bg-opacity-50 p-2 rounded-md cursor-pointer",
                    onClick: s.onToggle,
                    children: t.jsx(ie, {
                        icon: s.fullscreen ? k.X : k.EXPAND
                    })
                }), t.jsx("div", {
                    className: "text-white pointer-events-none absolute flex w-full flex-col items-center transition-[bottom] bottom-0 p-4",
                    children: t.jsx("div", {
                        className: s.fullscreen ? "" : "transform origin-bottom text-[0.5rem]",
                        children: t.jsx(us, {
                            text: i("settings.subtitles.previewQuote") ?? void 0,
                            styling: s.styling,
                            overrideCasing: !1
                        })
                    })
                })]
            })
        })]
    })
}
function Ms(s) {
    const {t: i} = C()
      , [c,d] = A.useState(!1);
    return t.jsxs("div", {
        children: [t.jsx(he, {
            border: !0,
            children: i("settings.subtitles.title")
        }), t.jsxs("div", {
            className: "grid md:grid-cols-[1fr,356px] gap-8",
            children: [t.jsxs("div", {
                className: "space-y-6",
                children: [t.jsx(wt, {
                    label: i("settings.subtitles.backgroundLabel"),
                    max: 100,
                    min: 0,
                    onChange: o=>s.setStyling({
                        ...s.styling,
                        backgroundOpacity: o / 100
                    }),
                    value: s.styling.backgroundOpacity * 100,
                    textTransformer: o=>`${o}%`
                }), t.jsx(wt, {
                    label: i("settings.subtitles.textSizeLabel"),
                    max: 200,
                    min: 1,
                    textTransformer: o=>`${o}%`,
                    onChange: o=>s.setStyling({
                        ...s.styling,
                        size: o / 100
                    }),
                    value: s.styling.size * 100
                }), t.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [t.jsx(ls.FieldTitle, {
                        children: i("settings.subtitles.colorLabel")
                    }), t.jsx("div", {
                        className: "flex justify-center items-center",
                        children: os.map(o=>t.jsx(ds, {
                            onClick: ()=>s.setStyling({
                                ...s.styling,
                                color: o
                            }),
                            color: o,
                            active: s.styling.color === o
                        }, o))
                    })]
                })]
            }), t.jsx(At, {
                show: !0,
                styling: s.styling,
                onToggle: ()=>d(o=>!o)
            }), t.jsx(At, {
                show: c,
                fullscreen: !0,
                styling: s.styling,
                onToggle: ()=>d(o=>!o)
            })]
        })]
    })
}
function Rs(s) {
    let {proxyUrls: i, setProxyUrls: c} = s;
    const {t: d} = C()
      , o = A.useCallback(()=>{
        c(u=>[...u ?? [], ""])
    }
    , [c])
      , m = A.useCallback((u,p)=>{
        c(E=>[...(E ?? []).map((T,x)=>x !== u ? T : p)])
    }
    , [c])
      , g = A.useCallback(u=>{
        c(p=>[...(p ?? []).filter((E,T)=>T !== u)])
    }
    , [c]);
    return t.jsxs(Ie, {
        children: [t.jsxs("div", {
            className: "flex justify-between items-center gap-4",
            children: [t.jsxs("div", {
                className: "my-3",
                children: [t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: d("settings.connections.workers.label")
                }), t.jsx("p", {
                    className: "max-w-[20rem] font-medium",
                    children: d("settings.connections.workers.description")
                })]
            }), t.jsx("div", {
                children: t.jsx(Dt, {
                    onClick: ()=>c(u=>u === null ? [] : null),
                    enabled: i !== null
                })
            })]
        }), i !== null ? t.jsxs(t.Fragment, {
            children: [t.jsx(Xe, {
                marginClass: "my-6 px-8 box-content -mx-8"
            }), t.jsx("p", {
                className: "text-white font-bold mb-3",
                children: d("settings.connections.workers.urlLabel")
            }), t.jsxs("div", {
                className: "my-6 space-y-2 max-w-md",
                children: [((i == null ? void 0 : i.length) ?? 0) === 0 ? t.jsx("p", {
                    children: d("settings.connections.workers.emptyState")
                }) : null, (i ?? []).map((u,p)=>t.jsxs("div", {
                    className: "grid grid-cols-[1fr,auto] items-center gap-2",
                    children: [t.jsx(We, {
                        value: u,
                        onChange: E=>m(p, E),
                        placeholder: d("settings.connections.workers.urlPlaceholder") ?? void 0
                    }), t.jsx("button", {
                        type: "button",
                        onClick: ()=>g(p),
                        className: "h-full scale-90 hover:scale-100 rounded-full aspect-square bg-authentication-inputBg hover:bg-authentication-inputBgHover flex justify-center items-center transition-transform duration-200 hover:text-white cursor-pointer",
                        children: t.jsx(ie, {
                            className: "text-xl",
                            icon: k.X
                        })
                    })]
                }, p))]
            }), t.jsx(W, {
                theme: "purple",
                onClick: o,
                children: d("settings.connections.workers.addButton")
            })]
        }) : null]
    })
}
function Hs(s) {
    let {backendUrl: i, setBackendUrl: c} = s;
    const {t: d} = C();
    return t.jsxs(Ie, {
        children: [t.jsxs("div", {
            className: "flex justify-between items-center gap-4",
            children: [t.jsxs("div", {
                className: "my-3",
                children: [t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: d("settings.connections.server.label")
                }), t.jsx("p", {
                    className: "max-w-[20rem] font-medium",
                    children: d("settings.connections.server.description")
                })]
            }), t.jsx("div", {
                children: t.jsx(Dt, {
                    onClick: ()=>c(o=>o === null ? "" : null),
                    enabled: i !== null
                })
            })]
        }), i !== null ? t.jsxs(t.Fragment, {
            children: [t.jsx(Xe, {
                marginClass: "my-6 px-8 box-content -mx-8"
            }), t.jsx("p", {
                className: "text-white font-bold mb-3",
                children: d("settings.connections.server.urlLabel")
            }), t.jsx(We, {
                onChange: c,
                value: i ?? ""
            })]
        }) : null]
    })
}
function Fs(s) {
    const {t: i} = C();
    return t.jsxs("div", {
        children: [t.jsx(he, {
            border: !0,
            children: i("settings.connections.title")
        }), t.jsxs("div", {
            className: "space-y-6",
            children: [t.jsx(Rs, {
                proxyUrls: s.proxyUrls,
                setProxyUrls: s.setProxyUrls
            }), t.jsx(Hs, {
                backendUrl: s.backendUrl,
                setBackendUrl: s.setBackendUrl
            })]
        })]
    })
}
function Ks(s) {
    return t.jsx("p", {
        className: "text-type-text",
        children: s.children
    })
}
function zs(s) {
    const {t: i} = C()
      , c = fe()
      , d = L(g=>{
        var u;
        return (u = g.account) == null ? void 0 : u.token
    }
    )
      , [o,m] = Ye(async()=>{
        var g;
        if (!d)
            throw new Error("No token present");
        await fs(c, d, s.id),
        (g = s.onRemove) == null || g.call(s)
    }
    , [c, d, s.id]);
    return t.jsxs(Ie, {
        className: "flex justify-between items-center",
        paddingClass: "px-6 py-4",
        children: [t.jsxs("div", {
            className: "font-medium",
            children: [t.jsx(Ks, {
                children: i("settings.account.devices.deviceNameLabel")
            }), t.jsx("p", {
                className: "text-white",
                children: s.name
            })]
        }), s.isCurrent ? null : t.jsx(W, {
            theme: "danger",
            loading: o.loading,
            onClick: m,
            children: i("settings.account.devices.removeDevice")
        })]
    })
}
function Gs(s) {
    const {t: i} = C()
      , c = L(g=>{
        var u;
        return (u = g.account) == null ? void 0 : u.seed
    }
    )
      , d = s.sessions
      , o = L(g=>{
        var u;
        return (u = g.account) == null ? void 0 : u.sessionId
    }
    )
      , m = A.useMemo(()=>{
        if (!c)
            return [];
        let g = d.map(u=>{
            const p = Mt(u.device, qe(c));
            return {
                current: u.id === o,
                id: u.id,
                name: p
            }
        }
        );
        return g = g.sort((u,p)=>u.current ? -1 : p.current ? 1 : u.name.localeCompare(p.name)),
        g
    }
    , [c, d, o]);
    return c ? t.jsxs("div", {
        children: [t.jsx(Te, {
            border: !0,
            className: "mt-0 mb-9",
            children: i("settings.account.devices.title")
        }), s.error ? t.jsx("p", {
            children: i("settings.account.devices.failed")
        }) : s.loading ? t.jsx(gs, {}) : t.jsx("div", {
            className: "space-y-5",
            children: m.map(g=>t.jsx(zs, {
                name: g.name,
                id: g.id,
                isCurrent: g.current,
                onRemove: s.onChange
            }, g.id))
        })]
    }) : null
}
function $s() {
    const s = ss()
      , {t: i} = C();
    return t.jsx("div", {
        children: t.jsxs(Ht, {
            paddingClass: "px-6 py-12",
            className: "grid grid-cols-2 gap-12 mt-5",
            children: [t.jsxs("div", {
                children: [t.jsx(Ut, {
                    children: i("")
                }), t.jsx("p", {
                    className: "text-type-text",
                    children: i("")
                })]
            }), t.jsx("div", {
                className: "flex justify-end items-center",
                children: t.jsx(W, {
                    theme: "purple",
                    
                    children: i("")
                })
            })]
        })
    })
}
function Tt(s) {
    return t.jsxs("section", {
        className: s.className ?? "",
        children: [t.jsx("p", {
            className: "text-sm font-bold uppercase text-settings-sidebar-type-secondary mb-2",
            children: s.title
        }), s.children]
    })
}
function qs(s) {
    return t.jsxs("button", {
        type: "button",
        onClick: s.onClick,
        className: z("tabbable w-full px-3 py-2 flex items-center space-x-3 cursor-pointer rounded my-2", s.active ? "bg-settings-sidebar-activeLink text-settings-sidebar-type-activated" : null),
        children: [t.jsx(ie, {
            className: z("text-2xl text-settings-sidebar-type-icon", s.active ? "text-settings-sidebar-type-iconActivated" : null),
            icon: s.icon
        }), t.jsx("span", {
            children: s.children
        })]
    })
}
const Ws = 16;
function Xs(s) {
    const {t: i} = C()
      , c = s.url.startsWith("https://");
    return t.jsxs("div", {
        className: "flex items-center gap-1 -mx-1 ml-3 px-1 rounded bg-largeCard-background font-bold",
        children: [t.jsx(ie, {
            icon: c ? k.LOCK : k.UNLOCK
        }), i(c ? "settings.sidebar.info.secure" : "settings.sidebar.info.insecure")]
    })
}
function Ys() {
    var T;
    const {t: s} = C()
      , {isMobile: i} = Rt()
      , {account: c} = L()
      , d = location.hostname
      , [o,m] = A.useState("")
      , g = [{
        
    }, {
        textKey: "settings.locale.title",
        id: "settings-locale",
        icon: k.BOOKMARK
    }, {
        textKey: "settings.appearance.title",
        id: "settings-appearance",
        icon: k.BRUSH
    }, {
        textKey: "settings.subtitles.title",
        id: "settings-captions",
        icon: k.CAPTIONS
    }, {
        textKey: "settings.connections.title",
        id: "settings-connection",
        icon: k.LINK
    }]
      , u = fe()
      , p = As(async()=>hs(u), [u]);
    A.useEffect(()=>{
        function x() {
            var P;
            const O = (window.innerHeight || document.documentElement.clientHeight) / 4
              , X = g.map(U=>{
                const H = document.getElementById(U.id);
                if (!H)
                    return {
                        distance: 1 / 0,
                        link: U.id
                    };
                const l = H.getBoundingClientRect()
                  , Y = Math.abs(O - l.top)
                  , h = Math.abs(O - l.bottom);
                return {
                    distance: Math.min(h, Y),
                    link: U.id
                }
            }
            ).sort((U,H)=>U.distance - H.distance);
            window.innerHeight + window.scrollY >= document.body.offsetHeight ? m(g[g.length - 1].id) : m(((P = X[0]) == null ? void 0 : P.link) ?? "")
        }
        return document.addEventListener("scroll", x),
        x(),
        ()=>{
            document.removeEventListener("scroll", x)
        }
    }
    );
    const E = A.useCallback(x=>{
        const R = document.getElementById(x);
        if (!R)
            return null;
        const O = R.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: O - 120,
            behavior: "smooth"
        })
    }
    , []);
    return t.jsx("div", {
        className: "text-settings-sidebar-type-inactive sidebar-boundary",
        children: t.jsxs(Ts, {
            topOffset: -6 * Ws,
            stickyClassName: "pt-[6rem]",
            disabled: i,
            hideOnBoundaryHit: !1,
            boundaryElement: ".sidebar-boundary",
            children: [t.jsxs("div", {
                className: "hidden lg:block",
                children: [t.jsx(Tt, {
                    title: s("global.pages.settings"),
                    children: g.map(x=>t.jsx(qs, {
                        icon: x.icon,
                        active: x.id === o,
                        onClick: ()=>E(x.id),
                        children: s(x.textKey)
                    }, x.id))
                }), t.jsx(Xe, {})]
            }), t.jsx(Tt, {
                className: "text-sm",
                title: s("settings.sidebar.info.title"),
                children: t.jsxs("div", {
                    className: "px-3 py-3.5 rounded-lg bg-largeCard-background bg-opacity-50 grid grid-cols-2 gap-4",
                    children: [t.jsxs("div", {
                        className: "col-span-2 space-y-1",
                        children: [t.jsx("p", {
                            className: "text-type-dimmed font-medium",
                            children: s("settings.sidebar.info.hostname")
                        }), t.jsx("p", {
                            className: "text-white",
                            children: d
                        })]
                    }), t.jsxs("div", {
                        className: "col-span-2 space-y-1",
                        children: [t.jsxs("div", {
                            className: "text-type-dimmed font-medium flex items-center",
                            children: [t.jsx("p", {
                                children: s("settings.sidebar.info.backendUrl")
                            }), t.jsx(Xs, {
                                url: u
                            })]
                        }), t.jsx("p", {
                            className: "text-white",
                            children: u.replace(/https?:\/\//, "")
                        })]
                    }), t.jsxs("div", {
                        className: "col-span-2 space-y-1",
                        children: [t.jsx("p", {
                            className: "text-type-dimmed font-medium",
                            children: s("settings.sidebar.info.userId")
                        }), t.jsx("p", {
                            className: "text-white",
                            children: (c == null ? void 0 : c.userId) ?? s("settings.sidebar.info.notLoggedIn")
                        })]
                    }), t.jsxs("div", {
                        className: "col-span-1 space-y-1",
                        children: [t.jsx("p", {
                            className: "text-type-dimmed font-medium",
                            children: s("settings.sidebar.info.appVersion")
                        }), t.jsx("p", {
                            className: "text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-block",
                            children: ms().APP_VERSION
                        })]
                    }), t.jsxs("div", {
                        className: "col-span-1 space-y-1",
                        children: [t.jsx("p", {
                            className: "text-type-dimmed font-medium",
                            children: s("settings.sidebar.info.backendVersion")
                        }), t.jsxs("p", {
                            className: "text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-flex items-center gap-1",
                            children: [p.error ? t.jsx(ie, {
                                icon: k.WARNING,
                                className: "text-type-danger text-base"
                            }) : null, p.loading ? t.jsx("span", {
                                className: "block h-4 w-12 bg-type-dimmed/20 rounded"
                            }) : ((T = p == null ? void 0 : p.value) == null ? void 0 : T.version) || s("settings.sidebar.info.unknownVersion")]
                        })]
                    })]
                })
            })]
        })
    })
}
const Js = [{
    id: "blue",
    key: "settings.appearance.themes.blue"
}, {
    id: "teal",
    key: "settings.appearance.themes.teal"
}, {
    id: "red",
    key: "settings.appearance.themes.red"
}, {
    id: "gray",
    key: "settings.appearance.themes.gray"
}]
  , Qs = function(i) {
    const {t: c} = C();
    return t.jsxs("div", {
        className: z(i.selector, "cursor-pointer group tabbable"),
        onClick: i.onClick,
        children: [t.jsxs("div", {
            tabIndex: 0,
            onKeyUp: d=>d.key === "Enter" && d.currentTarget.click(),
            className: z("tabbable scroll-mt-32 w-full h-32 relative rounded-lg border bg-gradient-to-br from-themePreview-primary/20 to-themePreview-secondary/10 bg-clip-content transition-colors duration-150", i.active ? "border-themePreview-primary" : "border-transparent group-hover:border-white/20"),
            children: [t.jsxs("div", {
                className: "absolute top-2 left-2",
                children: [t.jsx("div", {
                    className: "h-5 w-5 bg-themePreview-primary rounded-full"
                }), t.jsx("div", {
                    className: "h-5 w-5 bg-themePreview-secondary rounded-full -mt-2"
                })]
            }), t.jsx(ie, {
                icon: k.CHECKMARK,
                className: z("absolute top-3 right-3 text-xs text-white transition-opacity duration-150", i.active ? "opacity-100" : "opacity-0")
            }), t.jsx("div", {
                className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-4/5 rounded-t-lg -mb-px bg-background-main overflow-hidden",
                children: t.jsxs("div", {
                    className: "relative w-full h-full",
                    children: [t.jsx("div", {
                        className: "bg-themePreview-primary/50 w-[130%] h-10 absolute left-1/2 -top-5 blur-xl transform -translate-x-1/2 rounded-[100%]"
                    }), t.jsxs("div", {
                        className: "p-2 flex justify-between items-center",
                        children: [t.jsxs("div", {
                            className: "flex space-x-1",
                            children: [t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-4 h-2 rounded-full"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                            })]
                        }), t.jsx("div", {
                            className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                        })]
                    }), t.jsxs("div", {
                        className: "mt-1 flex items-center flex-col gap-1",
                        children: [t.jsx("div", {
                            className: "bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"
                        }), t.jsx("div", {
                            className: "bg-themePreview-ghost bg-opacity-20 w-6 h-0.5 rounded-full"
                        }), t.jsx("div", {
                            className: "bg-themePreview-ghost bg-opacity-10 w-16 h-2 mt-1 rounded-full"
                        })]
                    }), t.jsxs("div", {
                        className: "mt-5 px-3",
                        children: [t.jsxs("div", {
                            className: "flex gap-1 items-center",
                            children: [t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-20 w-2 h-2 rounded-full"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"
                            })]
                        }), t.jsxs("div", {
                            className: "flex w-full gap-1 mt-1",
                            children: [t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                            }), t.jsx("div", {
                                className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                            })]
                        })]
                    })]
                })
            })]
        }), t.jsxs("div", {
            className: "mt-2 flex justify-between items-center",
            children: [t.jsx("span", {
                className: "font-medium text-white",
                children: i.name
            }), t.jsx("span", {
                className: z("inline-block px-3 text-sm transition-opacity duration-150 rounded-full bg-[#27182F] text-white", i.active ? "opacity-100" : "opacity-0 pointer-events-none"),
                children: c("settings.appearance.activeTheme")
            })]
        })]
    })
}
  , Pt = Qs;
function Zs(s) {
    const {t: i} = C();
    return t.jsxs("div", {
        children: [t.jsx(he, {
            border: !0,
            children: i("settings.appearance.title")
        }), t.jsxs("div", {
            className: "grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 max-w-[700px]",
            children: [t.jsx(Pt, {
                name: i("settings.appearance.themes.default"),
                selector: "theme-default",
                active: s.active === null,
                onClick: ()=>s.setTheme(null)
            }), Js.map(c=>t.jsx(Pt, {
                selector: `theme-${c.id}`,
                active: s.active === c.id,
                name: i(c.key),
                onClick: ()=>s.setTheme(c.id)
            }, c.id))]
        })]
    })
}
function Vs(s) {
    const {t: i} = C()
      , c = Ps(Nt.map(m=>m.code))
      , d = Nt.sort((m,g)=>c.indexOf(m.code) - c.indexOf(g.code)).map(m=>({
        id: m.code,
        name: `${m.name}${m.nativeName ? ` — ${m.nativeName}` : ""}`,
        leftIcon: t.jsx(Is, {
            langCode: m.code
        })
    }))
      , o = d.find(m=>{
        var g;
        return m.id === ((g = Us(s.language)) == null ? void 0 : g.code)
    }
    );
    return t.jsxs("div", {
        children: [t.jsx(he, {
            border: !0,
            children: i("settings.locale.title")
        }), t.jsx("p", {
            className: "text-white font-bold mb-3",
            children: i("settings.locale.language")
        }), t.jsx("p", {
            className: "max-w-[20rem] font-medium",
            children: i("settings.locale.languageDescription")
        }), t.jsx(xs, {
            options: d,
            selectedItem: o || d[0],
            setSelectedItem: m=>s.setLanguage(m.id)
        })]
    })
}
function ea(s) {
    const {isMobile: i} = Rt();
    return t.jsx(_s, {
        ultraWide: !0,
        classNames: "overflow-visible",
        children: t.jsxs("div", {
            className: z("grid gap-12", i ? "grid-cols-1" : "lg:grid-cols-[280px,1fr]"),
            children: [t.jsx(Ys, {}), t.jsx("div", {
                children: s.children
            })]
        })
    })
}
function ta(s) {
    const i = fe()
      , {account: c} = s
      , [d,o] = Ye(()=>ps(i, c), [c, i]);
    return A.useEffect(()=>{
        o()
    }
    , [o]),
    t.jsxs(t.Fragment, {
        children: [t.jsx(Ds, {
            deviceName: s.deviceName,
            setDeviceName: s.setDeviceName,
            colorA: s.colorA,
            setColorA: s.setColorA,
            colorB: s.colorB,
            setColorB: s.setColorB,
            userIcon: s.userIcon,
            setUserIcon: s.setUserIcon
        }), t.jsx(Gs, {
            error: !!d.error,
            loading: d.loading,
            sessions: d.value ?? [],
            onChange: o
        }), t.jsx(Es, {})]
    })
}
function ua() {
    const {t: s} = C()
      , i = _t(h=>h.theme)
      , c = _t(h=>h.setTheme)
      , d = Ct(h=>h.language)
      , o = Ct(h=>h.setLanguage)
      , m = St(h=>h.styling)
      , g = St(h=>h.updateStyling)
      , u = L(h=>h.proxySet)
      , p = L(h=>h.setProxySet)
      , E = L(h=>h.backendUrl)
      , T = L(h=>h.setBackendUrl)
      , x = L(h=>h.account)
      , R = L(h=>h.setAccountProfile)
      , O = L(h=>h.updateDeviceName)
      , X = A.useMemo(()=>x ? Mt(x.deviceName, qe(x.seed)) : "", [x])
      , P = fe()
      , {logout: U} = Et()
      , H = L()
      , l = ks(i, d, m, X, u, E, x == null ? void 0 : x.profile)
      , Y = A.useCallback(async()=>{
        var h, N;
        if (x) {
            if ((l.appLanguage.changed || l.theme.changed || l.proxyUrls.changed) && await bs(P, x, {
                applicationLanguage: l.appLanguage.state,
                applicationTheme: l.theme.state,
                proxyUrls: ((h = l.proxyUrls.state) == null ? void 0 : h.filter(I=>I !== "")) ?? null
            }),
            l.deviceName.changed) {
                const I = await vs(l.deviceName.state, qe(x.seed));
                await ys(P, x, {
                    deviceName: I
                }),
                O(I)
            }
            l.profile.changed && await js(P, x, {
                profile: l.profile.state
            })
        }
        o(l.appLanguage.state),
        c(l.theme.state),
        g(l.subtitleStyling.state),
        p(((N = l.proxyUrls.state) == null ? void 0 : N.filter(I=>I !== "")) ?? null),
        l.profile.state && R(l.profile.state),
        l.backendUrl.changed && (await U(),
        T(l.backendUrl.state))
    }
    , [l, x, P, o, c, g, O, R, p, T, U]);
    return t.jsxs(ws, {
        children: [t.jsx(Ns, {
            subpage: !0,
            k: "global.pages.settings"
        }), t.jsxs(ea, {
            children: [t.jsxs("div", {
                id: "settings-account",
                children: [t.jsx(he, {
                    border: !0,
                    className: "!mb-0",
                    children: s("")
                }), H.account && l.profile.state ? t.jsx(ta, {
                    account: H.account,
                    deviceName: l.deviceName.state,
                    setDeviceName: l.deviceName.set,
                    colorA: l.profile.state.colorA,
                    setColorA: h=>{
                        l.profile.set(N=>N ? {
                            ...N,
                            colorA: h
                        } : void 0)
                    }
                    ,
                    colorB: l.profile.state.colorB,
                    setColorB: h=>l.profile.set(N=>N ? {
                        ...N,
                        colorB: h
                    } : void 0),
                    userIcon: l.profile.state.icon,
                    setUserIcon: h=>l.profile.set(N=>N ? {
                        ...N,
                        icon: h
                    } : void 0)
                }) : t.jsx($s, {})]
            }), t.jsx("div", {
                id: "settings-locale",
                className: "mt-48",
                children: t.jsx(Vs, {
                    language: l.appLanguage.state,
                    setLanguage: l.appLanguage.set
                })
            }), t.jsx("div", {
                id: "settings-appearance",
                className: "mt-48",
                children: t.jsx(Zs, {
                    active: l.theme.state,
                    setTheme: l.theme.set
                })
            }), t.jsx("div", {
                id: "settings-captions",
                className: "mt-48",
                children: t.jsx(Ms, {
                    styling: l.subtitleStyling.state,
                    setStyling: l.subtitleStyling.set
                })
            }), t.jsx("div", {
                id: "settings-connection",
                className: "mt-48",
                children: t.jsx(Fs, {
                    backendUrl: l.backendUrl.state,
                    setBackendUrl: l.backendUrl.set,
                    proxyUrls: l.proxyUrls.state,
                    setProxyUrls: l.proxyUrls.set
                })
            })]
        }), t.jsxs(Ot, {
            animation: "fade",
            show: l.changed,
            className: "bg-settings-saveBar-background border-t border-settings-card-border/50 py-4 transition-opacity w-full fixed bottom-0 flex justify-between flex-col md:flex-row px-8 items-start md:items-center gap-3",
            children: [t.jsx("p", {
                className: "text-type-danger",
                children: s("settings.unsaved")
            }), t.jsxs("div", {
                className: "space-x-3 w-full md:w-auto flex",
                children: [t.jsx(W, {
                    className: "w-full md:w-auto",
                    theme: "secondary",
                    onClick: l.reset,
                    children: s("settings.reset")
                }), t.jsx(W, {
                    className: "w-full md:w-auto",
                    theme: "purple",
                    onClick: Y,
                    children: s("settings.save")
                })]
            })]
        })]
    })
}
export {ta as AccountSettings, ua as SettingsPage, ua as default};
//# sourceMappingURL=Settings-GCXSvvm0.js.map
