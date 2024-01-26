import {$ as G, a0 as ce, a1 as q, r as d, a2 as A, a3 as zr, j as n, c as S, a4 as ve, a5 as Qr, a6 as Kr, a7 as Gr, a8 as qr, a9 as Yr, aa as Jr, ab as Xr, ac as xs, ad as Zr, p as ee, ae as ei, af as ti, ag as ni, ah as si, ai as ps, q as De, aj as Y, ak as ri, al as ii, am as Tn, an as Xt, ao as ai, ap as Zt, aq as bs, ar as oi, as as $, at as li, v} from "./vendor-sZzeK2xX.js";
import {_ as ci, i as ui, H as le, u as ys, a as mt, t as Mt, r as di, F as mi, b as C, c as hi, L as en, d as se, N as Ke, e as fi, T as Me, f as gi, g as vs, h as xi, j as pi, k as bi, l as yi, m as vi, n as ji, o as wi, p as ki, B as Ni, q as Si} from "./react-dom-aIKBZ0FD.js";
import {c as Ci, a as Ei, d as Ii, f as Li, i as Ti, n as Pi, p as Ri, t as Ai, v as Mi, z as _i, h as Oi, s as Di, b as Bi, m as Fi, l as Ui, e as $i, g as Vi, j as Hi, k as Wi, o as zi, q as Qi, r as Ki, u as Gi, w as qi, x as Yi, y as Ji, A as Xi, B as Zi, C as ea, D as ta, E as na, F as sa, G as ra, H as ia, I as aa, J as oa, K as la, L as ca, M as ua} from "./locales-Uh0OzjGf.js";
import {g as tn, I, a as k, U as js, F as da, b as ws, s as ma, c as Le} from "./Icons-z4rFBofc.js";
import {f as J} from "./auth-PrcDRVv8.js";
import {d as ha, f as fa, g as nn, h as ks, l as ga, F as xa} from "./caption-parsing-2Q8ZLDHc.js";
import {H as oe} from "./hls-zqvr_1ex.js";
import "./language-db-l3NI_WD5.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const a of i)
            if (a.type === "childList")
                for (const o of a.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(i) {
        const a = {};
        return i.integrity && (a.integrity = i.integrity),
        i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const a = s(i);
        fetch(i.href, a)
    }
}
)();
let P = function(e) {
    return e.MOVIE = "movie",
    e.SERIES = "series",
    e.ANIME = "anime",
    e
}({})
  , Ge = 0;
const z = G(ce(q(e=>({
    bookmarks: {},
    updateQueue: [],
    removeBookmark(t) {
        e(s=>{
            Ge += 1,
            s.updateQueue.push({
                id: Ge.toString(),
                action: "delete",
                tmdbId: t
            }),
            delete s.bookmarks[t]
        }
        )
    },
    addBookmark(t) {
        e(s=>{
            Ge += 1,
            s.updateQueue.push({
                id: Ge.toString(),
                action: "add",
                tmdbId: t.tmdbId,
                type: t.type,
                title: t.title,
                year: t.releaseYear,
                poster: t.poster
            }),
            s.bookmarks[t.tmdbId] = {
                type: t.type,
                title: t.title,
                year: t.releaseYear,
                poster: t.poster,
                updatedAt: Date.now()
            }
        }
        )
    },
    replaceBookmarks(t) {
        e(s=>{
            s.bookmarks = t
        }
        )
    },
    clear() {
        e(t=>{
            t.bookmarks = {}
        }
        )
    },
    clearUpdateQueue() {
        e(t=>{
            t.updateQueue = []
        }
        )
    },
    removeUpdateItem(t) {
        e(s=>{
            s.updateQueue = [...s.updateQueue.filter(r=>r.id !== t)]
        }
        )
    }
})), {
    name: "__MW::bookmarks"
}))
  , re = {}
  , Ns = {};
async function pa() {
    var e, t;
    for (const [s,r] of Object.values(Ns)) {
        const i = r.versions.sort((u,m)=>u.version - m.version)
          , a = s._raw()
          , o = a["--version"] && typeof a["--version"] == "number" ? a["--version"] : 0
          , l = i.filter(u=>u.version >= o);
        let c = a;
        try {
            for (const u of l)
                u.migrate && (localStorage.setItem(`BACKUP-v${u.version}-${r.key}`, JSON.stringify(c)),
                c = await u.migrate(c))
        } catch (u) {
            console.error(`FAILED TO MIGRATE STORE ${r.key}`, u),
            c = ((t = (e = l[l.length - 1]).create) == null ? void 0 : t.call(e)) ?? {}
        }
        s.save(c)
    }
}
function ba(e) {
    const t = e.key ?? ""
      , s = e.versions.sort((l,c)=>c.version - l.version)[0];
    function r(l) {
        return re[t] || (re[t] = []),
        re[t].push(l),
        {
            destroy() {
                re[t] = re[t].filter(c=>c === l)
            }
        }
    }
    function i() {
        var c;
        const l = ((c = s.create) == null ? void 0 : c.call(s)) ?? {};
        return l["--version"] = s.version,
        l
    }
    function a() {
        const l = localStorage.getItem(t);
        if (!l)
            return i();
        try {
            return JSON.parse(l)
        } catch (c) {
            return console.error(`FAILED TO PARSE LOCALSTORAGE FOR KEY ${t}`, c),
            i()
        }
    }
    function o(l) {
        const c = {
            ...l
        };
        c["--version"] = s.version,
        localStorage.setItem(t, JSON.stringify(c)),
        re[t] || (re[t] = []),
        re[t].forEach(u=>u(window.structuredClone(l)))
    }
    return {
        get() {
            const l = a();
            return delete l["--version"],
            l
        },
        _raw() {
            return a()
        },
        onChange: r,
        save: o
    }
}
function ya(e) {
    var r;
    const t = e.versions.sort((i,a)=>i.version - a.version);
    if (t.forEach((i,a,o)=>{
        if (a !== 0 && i.version !== o[a - 1].version + 1)
            throw new Error("Version list of store is not incremental")
    }
    ),
    t.forEach(i=>{
        if (i.version < 0)
            throw new Error("Versions cannot be negative")
    }
    ),
    ((r = t[0]) == null ? void 0 : r.version) !== 0)
        throw new Error("Version 0 doesn't exist in version list of store");
    if (!e.versions[e.versions.length - 1].create)
        throw new Error("Missing create function on latest version of store");
    if (!e.key)
        throw new Error("storage key not set in store");
    const s = [...t];
    s.pop(),
    s.forEach(i=>{
        if (!i.migrate)
            throw new Error(`Migration missing on version ${i.version}`)
    }
    )
}
function ht() {
    const e = {
        versions: [],
        key: null
    };
    return {
        setKey(t) {
            return e.key = t,
            this
        },
        addVersion(t) {
            return e.versions.push(t),
            this
        },
        build() {
            ya(e);
            const t = ba(e);
            return Ns[e.key ?? ""] = [t, e],
            t
        }
    }
}
const Pn = "https://apis.justwatch.com"
  , va = "https://images.justwatch.com";
function ja(e) {
    if (e === P.MOVIE)
        return "movie";
    if (e === P.SERIES)
        return "show";
    throw new Error("unsupported type")
}
function wa(e) {
    if (e === "movie")
        return P.MOVIE;
    if (e === "show")
        return P.SERIES;
    throw new Error("unsupported type")
}
function ka(e, t) {
    var i, a;
    const s = wa(e.object_type);
    let r;
    return s === P.SERIES && (r = (i = e.seasons) == null ? void 0 : i.sort((o,l)=>o.season_number - l.season_number).map(o=>({
        id: o.id.toString(),
        number: o.season_number,
        title: o.title
    }))),
    {
        title: e.title,
        id: e.id.toString(),
        year: (a = e.original_release_year) == null ? void 0 : a.toString(),
        poster: e.poster ? `${va}${e.poster.replace("{profile}", "s166")}` : void 0,
        type: s,
        seasons: r,
        seasonData: t ? {
            id: t.id.toString(),
            number: t.season_number,
            title: t.title,
            episodes: t.episodes.sort((o,l)=>o.episode_number - l.episode_number).map(o=>({
                id: o.id.toString(),
                number: o.episode_number,
                title: o.title
            }))
        } : void 0
    }
}
const Na = "4.2.5"
  , Sa = "https://discord.Jelly.app"
  , Ca = ""
  , Ea = "https://toasty2436.github.io/JellyDownload/"
  , Ia = "G-44YVXRL61C"
  , La = "https://backend.movie-web.app";
var ie = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.2.5"
};
const Ta = {
    TMDB_READ_API_KEY: ie.VITE_TMDB_READ_API_KEY,
    APP_VERSION: void 0,
    GITHUB_LINK: void 0,
    DONATION_LINK: void 0,
    DISCORD_LINK: void 0,
    DMCA_EMAIL: ie.VITE_DMCA_EMAIL,
    CORS_PROXY_URL: ie.VITE_CORS_PROXY_URL,
    NORMAL_ROUTER: ie.VITE_NORMAL_ROUTER,
    BACKEND_URL: ie.VITE_BACKEND_URL,
    DISALLOWED_IDS: ie.VITE_DISALLOWED_IDS,
    TURNSTILE_KEY: ie.VITE_TURNSTILE_KEY,
    CDN_REPLACEMENTS: ie.VITE_CDN_REPLACEMENTS
};
function Pa(e) {
    var s;
    let t = (s = window == null ? void 0 : window.__CONFIG__) == null ? void 0 : s[`VITE_${e}`];
    return t != null && t.length === 0 && (t = void 0),
    Ta[e] ?? t ?? void 0
}
function ae(e, t) {
    var s;
    return ((s = Pa(e)) == null ? void 0 : s.toString()) ?? t ?? ""
}
function _() {
    const e = ae("DMCA_EMAIL")
      , t = ae("TURNSTILE_KEY");
    return {
        APP_VERSION: Na,
        GITHUB_LINK: Ca,
        DONATION_LINK: Ea,
        DISCORD_LINK: Sa,
        DMCA_EMAIL: e.length > 0 ? e : null,
        BACKEND_URL: ae("BACKEND_URL", La),
        TMDB_READ_API_KEY: ae("TMDB_READ_API_KEY"),
        PROXY_URLS: ae("CORS_PROXY_URL").split(",").map(s=>s.trim()),
        NORMAL_ROUTER: ae("NORMAL_ROUTER", "false") === "true",
        TURNSTILE_KEY: t.length > 0 ? t : null,
        DISALLOWED_IDS: ae("DISALLOWED_IDS", "").split(",").map(s=>s.trim()).filter(s=>s.length > 0),
        CDN_REPLACEMENTS: ae("CDN_REPLACEMENTS", "").split(",").map(s=>s.split(":").map(r=>r.trim()).filter(r=>r.length > 0)).filter(s=>s.length === 2)
    }
}
let K = function(e) {
    return e.MOVIE = "movie",
    e.TV = "tv",
    e
}({});
const Ra = "https://backend.movie-web.app/metrics/providers"
  , Aa = "https://backend.movie-web.app/metrics/captcha"
  , Ma = ()=>zr(32);
function Ss(e, t) {
    const s = e.toString()
      , r = (e.stack ?? "").split(`
`, t + 1);
    return r.pop(),
    `${s}

${r.join(`
`)}`
}
async function _a(e) {
    return A(Ra, {
        method: "POST",
        body: {
            items: e,
            batchId: Ma()
        }
    })
}
const Oa = {
    success: "success",
    notfound: "notfound",
    failure: "failed",
    pending: null,
    waiting: null
};
function ye(e, t, s, r, i) {
    var c, u;
    const a = (c = e.episode) == null ? void 0 : c.tmdbId
      , o = (u = e.season) == null ? void 0 : u.tmdbId;
    let l;
    return i instanceof Error && (l = i),
    {
        status: r,
        providerId: t,
        title: e.title,
        tmdbId: e.tmdbId,
        type: e.type,
        embedId: s ?? void 0,
        episodeId: a,
        seasonId: o,
        errorMessage: l == null ? void 0 : l.message,
        fullError: l ? Ss(l, 5) : void 0
    }
}
function Rn(e, t, s) {
    const r = Oa[s.status];
    if (!r)
        return null;
    let i, a;
    e.type === "show" && (i = e.episode.tmdbId,
    a = e.season.tmdbId);
    let o;
    return s.error instanceof Error && (o = s.error),
    {
        status: r,
        providerId: t,
        title: e.title,
        tmdbId: e.tmdbId,
        type: e.type,
        embedId: s.embedId,
        episodeId: i,
        seasonId: a,
        errorMessage: s.reason ?? (o == null ? void 0 : o.message),
        fullError: o ? Ss(o, 5) : void 0
    }
}
function Gm(e, t, s) {
    const r = [];
    return t.forEach(i=>{
        const a = s[i.id];
        i.children.forEach(l=>{
            const c = s[l];
            if (!c.embedId)
                return;
            const u = Rn(e, a.id, c);
            u && r.push(u)
        }
        );
        const o = Rn(e, a.id, a);
        o && r.push(o)
    }
    ),
    r
}
function Cs() {
    return {
        report: d.useCallback(t=>{
            t.length !== 0 && _a(t).catch(()=>{}
            )
        }
        , [])
    }
}
function An(e) {
    A(Aa, {
        method: "POST",
        body: {
            success: e
        }
    }).catch(()=>{}
    )
}
const st = G(q((e,t)=>({
    isInWidget: !1,
    turnstiles: [],
    cbs: [],
    processToken(s, r) {
        const i = t().cbs
          , a = t().turnstiles.find(o=>o.id === r);
        (a == null ? void 0 : a.id) === r && (i.forEach(o=>o(s)),
        e(o=>{
            o.cbs = []
        }
        ))
    },
    getToken() {
        return new Promise((s,r)=>{
            e(i=>{
                i.cbs = [...i.cbs, a=>{
                    a ? s(a) : r(new Error("Failed to get token"))
                }
                ]
            }
            )
        }
        )
    },
    setTurnstile(s, r, i) {
        e(a=>{
            a.turnstiles = a.turnstiles.filter(o=>o.id !== s),
            r && a.turnstiles.push({
                controls: r,
                isInPopout: i,
                id: s
            })
        }
        )
    }
})));
function Es() {
    const e = st.getState().turnstiles
      , t = e.find(s=>s.isInPopout);
    return t || e[0]
}
function Da() {
    return !!Es()
}
async function Ba() {
    const e = Es();
    try {
        window.turnstile.execute(document.querySelector(`#${e.id}`), {});
        const t = await st.getState().getToken();
        return An(!0),
        t
    } catch (t) {
        throw An(!1),
        t
    }
}
function Is(e) {
    const t = _().TURNSTILE_KEY
      , s = d.useRef(null)
      , r = st(a=>a.setTurnstile)
      , i = st(a=>a.processToken);
    return t ? n.jsx("div", {
        className: S({
            hidden: !e.isInPopout
        }),
        children: n.jsx(ci, {
            sitekey: t,
            onLoad: (a,o)=>{
                s.current = a,
                r(a, o, !!e.isInPopout)
            }
            ,
            onError: ()=>{
                const a = s.current;
                a && i(null, a)
            }
            ,
            onVerify: a=>{
                var l;
                const o = s.current;
                o && (i(a, o),
                (l = e.onUpdateShow) == null || l.call(e, !1))
            }
            ,
            onBeforeInteractive: ()=>{
                var a;
                (a = e.onUpdateShow) == null || a.call(e, !0)
            }
            ,
            refreshExpired: "never",
            execution: "render"
        })
    }) : null
}
let rt = null
  , Te = null;
function qm(e) {
    rt = e
}
function ft() {
    return rt ?? []
}
function sn(e) {
    Te = e
}
function Fa() {
    if (!Te)
        return null;
    try {
        const e = Qr(Te);
        if (!e.exp)
            return `jwt|${Te}`;
        if (Date.now() / 1e3 < e.exp)
            return `jwt|${Te}`
    } catch {}
    return null
}
async function Ym(e) {
    if (rt)
        return;
    rt = (await _s(`${e}/metadata`)).flat()
}
function Mn(e) {
    let t = {};
    return e.type === "show" && (t = {
        episodeNumber: e.episode.number.toString(),
        episodeTmdbId: e.episode.tmdbId,
        seasonNumber: e.season.number.toString(),
        seasonTmdbId: e.season.tmdbId
    }),
    {
        type: e.type,
        releaseYear: e.releaseYear.toString(),
        imdbId: e.imdbId,
        tmdbId: e.tmdbId,
        title: e.title,
        ...t
    }
}
function qe(e, t) {
    Object.entries(t).forEach(s=>{
        s[1] && e.searchParams.set(s[0], s[1])
    }
    )
}
function _t(e) {
    const t = s=>new URL(`${e}${s}`);
    return {
        scrapeSource(s, r) {
            const i = t("/scrape/source");
            return qe(i, Mn(r)),
            qe(i, {
                id: s
            }),
            i.toString()
        },
        scrapeAll(s) {
            const r = t("/scrape");
            return qe(r, Mn(s)),
            r.toString()
        },
        scrapeEmbed(s, r) {
            const i = t("/scrape/embed");
            return qe(i, {
                id: s,
                url: r
            }),
            i.toString()
        }
    }
}
async function rn() {
    let e = Fa();
    return !e && Da() && (e = `turnstile|${await Ba()}`),
    e
}
function _n(e) {
    return e.length === 0 ? {} : JSON.parse(e)
}
async function Ot(e, t) {
    const s = await rn()
      , r = new URL(e);
    s && r.searchParams.set("token", s);
    const i = new EventSource(r.toString());
    let a, o;
    const l = new Promise((c,u)=>{
        o = c,
        a = u
    }
    );
    return t.forEach(c=>{
        i.addEventListener(c, u=>{
            i.close(),
            o(_n(u.data))
        }
        )
    }
    ),
    i.addEventListener("token", c=>{
        sn(_n(c.data))
    }
    ),
    i.addEventListener("error", c=>{
        if (i.close(),
        c.data) {
            const u = JSON.parse(c.data);
            let m = new Error("scrape error");
            u.name === ve.name && (m = new ve("Notfound from server")),
            Object.assign(m, u),
            a(m);
            return
        }
        console.error("Failed to connect to SSE", c),
        a(c)
    }
    ),
    i.addEventListener("message", c=>{
        if (!c) {
            i.close();
            return
        }
        setTimeout(()=>{
            a(new Error("SSE closed improperly"))
        }
        , 1e3)
    }
    ),
    {
        promise: ()=>l,
        on(c, u) {
            i.addEventListener(c, m=>u(JSON.parse(m.data)))
        }
    }
}
const U = G(ce(q(e=>({
    account: null,
    backendUrl: null,
    proxySet: null,
    setAccount(t) {
        e(s=>{
            s.account = t
        }
        )
    },
    removeAccount() {
        e(t=>{
            t.account = null
        }
        )
    },
    setBackendUrl(t) {
        e(s=>{
            s.backendUrl = t
        }
        )
    },
    setProxySet(t) {
        e(s=>{
            s.proxySet = t
        }
        )
    },
    setAccountProfile(t) {
        e(s=>{
            s.account && (s.account.profile = t)
        }
        )
    },
    updateAccount(t) {
        e(s=>{
            s.account && (s.account = {
                ...s.account,
                ...t
            })
        }
        )
    },
    updateDeviceName(t) {
        e(s=>{
            s.account && (s.account.deviceName = t)
        }
        )
    }
})), {
    name: "__MW::auth"
}))
  , Ua = _().PROXY_URLS
  , $a = ["proxy", "api"];
function On(e) {
    try {
        return !!new URL(e)
    } catch {
        return !1
    }
}
function Va(e) {
    return $a.includes(e)
}
function Ha(e) {
    const t = e.split(";").map(s=>s.split("=", 2).filter(r=>r.length !== 0)).filter(s=>s.length === 2);
    return Object.fromEntries(t)
}
function Ls() {
    const e = U.getState().proxySet ?? Ua
      , t = [];
    return e.forEach(s=>{
        if (!s.startsWith("|") && On(s)) {
            t.push({
                url: s,
                type: "proxy"
            });
            return
        }
        const r = /^\|([^|]+)\|(.*)$/g.exec(s);
        if (!r || !r[2] || !On(r[2]))
            return;
        const a = Ha(r[1]).type ?? "proxy";
        Va(a) && t.push({
            url: r[2],
            type: a
        })
    }
    ),
    t
}
function Ts() {
    return Ls().filter(e=>e.type === "proxy").map(e=>e.url)
}
function Wa() {
    return Ls().filter(e=>e.type === "api").map(e=>e.url)
}
function Ps(e) {
    let t = -1;
    return ()=>{
        const s = e();
        (t === -1 || t >= s.length) && (t = Math.floor(Math.random() * s.length));
        const r = s[t];
        return t = (t + 1) % s.length,
        r
    }
}
const Rs = Ps(Ts)
  , As = Ps(Wa);
async function za(e, t) {
    const s = await rn()
      , r = new Headers(t == null ? void 0 : t.headers);
    s && r.set("X-Token", s);
    const i = await fetch(e, t ? {
        ...t,
        headers: r
    } : void 0)
      , a = i.headers.get("X-Token");
    return a && sn(a),
    i
}
function Qa() {
    return async(t,s)=>Yr(Rs(), za)(t, s)
}
const Dt = Kr({
    fetcher: Gr(fetch),
    proxiedFetcher: Qa(),
    target: qr.BROWSER
})
  , Ms = A.create({
    retry: 0
});
function Dn(e, t) {
    let s = e;
    return Object.entries(t).forEach(r=>{
        let[i,a] = r;
        s = s.replace(`{${i}}`, encodeURIComponent(a))
    }
    ),
    s
}
function _s(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Ms(e, t)
}
async function Os(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = (s == null ? void 0 : s.baseURL) ?? "";
    r.length > 0 && r.endsWith("/") && t.startsWith("/") ? r += t.slice(1) : r.length > 0 && !r.endsWith("/") && !t.startsWith("/") ? r += `/${t}` : r += t;
    const i = new URL(r);
    Object.entries((s == null ? void 0 : s.params) ?? {}).forEach(l=>{
        let[c,u] = l;
        i.searchParams.set(c, u)
    }
    ),
    Object.entries((s == null ? void 0 : s.query) ?? {}).forEach(l=>{
        let[c,u] = l;
        i.searchParams.set(c, u)
    }
    );
    let a = s.headers ?? {};
    const o = await rn();
    return o && (a = {
        ...a,
        "X-Token": o
    }),
    Ms(e, {
        ...s,
        baseURL: void 0,
        params: {
            destination: i.toString()
        },
        query: {},
        headers: a,
        onResponse(l) {
            var u;
            const c = l.response.headers.get("X-Token");
            c && sn(c),
            (u = s.onResponse) == null || u.call(s, l)
        }
    })
}
function Bt(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Os(Rs(), e, t)
}
function it(e) {
    if (e === P.MOVIE)
        return K.MOVIE;
    if (e === P.SERIES)
        return K.TV;
    throw new Error("unsupported type")
}
function at(e) {
    if (e === "movie")
        return P.MOVIE;
    if (e === "show")
        return P.SERIES;
    throw new Error("unsupported type")
}
function Be(e) {
    if (e === K.MOVIE)
        return P.MOVIE;
    if (e === K.TV)
        return P.SERIES;
    throw new Error("unsupported type")
}
function Ka(e) {
    if (e === K.MOVIE)
        return "movie";
    if (e === K.TV)
        return "show";
    throw new Error("unsupported type")
}
function Ga(e, t) {
    var i, a;
    const s = Be(e.object_type);
    let r;
    return s === P.SERIES && (r = (i = e.seasons) == null ? void 0 : i.sort((o,l)=>o.season_number - l.season_number).map(o=>({
        title: o.title,
        id: o.id.toString(),
        number: o.season_number
    }))),
    {
        title: e.title,
        id: e.id.toString(),
        year: (a = e.original_release_year) == null ? void 0 : a.toString(),
        poster: e.poster,
        type: s,
        seasons: r,
        seasonData: t ? {
            id: t.id.toString(),
            number: t.season_number,
            title: t.title,
            episodes: t.episodes.sort((o,l)=>o.episode_number - l.episode_number).map(o=>({
                id: o.id.toString(),
                number: o.episode_number,
                title: o.title,
                air_date: o.air_date
            }))
        } : void 0
    }
}
function qa(e) {
    const t = Ka(e.object_type);
    return {
        title: e.title,
        id: e.id.toString(),
        year: e.original_release_year ?? 0,
        poster: e.poster,
        type: t
    }
}
function Pe(e, t, s) {
    return ["tmdb", it(e), t, Jr(s, {
        lower: !0,
        strict: !0
    })].join("-")
}
function Ya(e) {
    return Pe(at(e.type), e.id, e.title)
}
function Jm(e) {
    const [t,s,r] = e.split("-", 3);
    if (t !== "tmdb")
        return null;
    let i;
    try {
        i = Be(s)
    } catch {
        return null
    }
    return {
        type: i,
        id: r
    }
}
const Ja = "https://api.themoviedb.org/3"
  , Xa = {
    accept: "application/json",
    Authorization: `Bearer ${_().TMDB_READ_API_KEY}`
};
async function _e(e, t) {
    return await _s(encodeURI(e), {
        headers: Xa,
        baseURL: Ja,
        params: {
            ...t
        }
    })
}
async function Ds(e) {
    return (await _e("search/multi", {
        query: e,
        include_adult: !1,
        language: "en-US",
        page: 1
    })).results.filter(r=>r.media_type === K.MOVIE || r.media_type === K.TV)
}
async function Za(e) {
    const t = await Ds(e);
    if (t.length === 0)
        return;
    const s = t[0]
      , r = s.media_type === K.MOVIE ? s.title : s.name;
    return `/media/${Pe(Be(s.media_type), s.id.toString(), r)}`
}
function gt(e, t) {
    if (t === K.MOVIE)
        return _e(`/movie/${e}`, {
            append_to_response: "external_ids"
        });
    if (t === K.TV)
        return _e(`/tv/${e}`, {
            append_to_response: "external_ids"
        });
    throw new Error("Invalid media type")
}
function ot(e) {
    if (e)
        return `https://image.tmdb.org/t/p/w342/${e}`
}
async function Bs(e, t) {
    return (await _e(`/tv/${e}/season/${t}`)).episodes.map(r=>({
        id: r.id,
        episode_number: r.episode_number,
        title: r.name,
        air_date: r.air_date
    }))
}
async function Fs(e) {
    const s = (await _e(`/find/${e}`, {
        external_source: "imdb_id"
    })).movie_results[0];
    if (s)
        return s.id.toString()
}
function eo(e, t) {
    if (Be(t) === P.SERIES) {
        const i = e;
        return {
            title: i.name,
            poster: ot(i.poster_path),
            id: i.id,
            original_release_year: new Date(i.first_air_date).getFullYear(),
            object_type: t
        }
    }
    const r = e;
    return {
        title: r.title,
        poster: ot(r.poster_path),
        id: r.id,
        original_release_year: new Date(r.release_date).getFullYear(),
        object_type: t
    }
}
function to(e, t) {
    if (t === P.MOVIE) {
        const s = e;
        return {
            id: e.id,
            title: s.title,
            object_type: it(t),
            poster: ot(s.poster_path) ?? void 0,
            original_release_year: new Date(s.release_date).getFullYear()
        }
    }
    if (t === P.SERIES) {
        const s = e;
        return {
            id: e.id,
            title: s.name,
            object_type: it(t),
            seasons: s.seasons.map(r=>({
                id: r.id,
                season_number: r.season_number,
                title: r.name
            })),
            poster: ot(s.poster_path) ?? void 0,
            original_release_year: new Date(s.first_air_date).getFullYear()
        }
    }
    throw new Error("unsupported type")
}
async function Ft(e, t, s) {
    const r = await gt(t, it(e));
    if (!r)
        return null;
    const i = r.external_ids.imdb_id ?? void 0;
    let a;
    if (e === P.SERIES) {
        const c = r.seasons;
        let u = c.find(m=>m.id.toString() === s);
        if (u || (u = c.find(m=>m.season_number === 1)),
        u) {
            const m = await Bs(r.id.toString(), u.season_number);
            a = {
                id: u.id.toString(),
                season_number: u.season_number,
                title: u.name,
                episodes: m
            }
        }
    }
    const o = to(r, e);
    if (!o)
        return null;
    const l = Ga(o, a);
    return l ? {
        meta: l,
        imdbId: i,
        tmdbId: t
    } : null
}
async function Us(e, t, s) {
    var c, u, m, p, g;
    const r = ja(e);
    let i;
    try {
        const f = Dn("/content/titles/{type}/{id}/locale/en_US", {
            type: r,
            id: t
        });
        i = await Bt(f, {
            baseURL: Pn
        })
    } catch (f) {
        if (f instanceof Xr && (f.statusCode === 400 || f.statusCode === 404))
            return null;
        throw f
    }
    let a = (c = i.external_ids.find(f=>f.provider === "imdb_latest")) == null ? void 0 : c.external_id;
    a || (a = (u = i.external_ids.find(f=>f.provider === "imdb")) == null ? void 0 : u.external_id);
    let o = (m = i.external_ids.find(f=>f.provider === "tmdb_latest")) == null ? void 0 : m.external_id;
    o || (o = (p = i.external_ids.find(f=>f.provider === "tmdb")) == null ? void 0 : p.external_id);
    let l;
    if (i.object_type === "show") {
        const f = s ?? ((g = i.seasons) == null ? void 0 : g[0].id.toString()) ?? ""
          , h = Dn("/content/titles/show_season/{id}/locale/en_US", {
            id: f
        });
        l = await Bt(h, {
            baseURL: Pn
        })
    }
    return {
        meta: ka(i, l),
        imdbId: a,
        tmdbId: o
    }
}
function Ut(e) {
    return !!(e.startsWith("/media/JW") || e.startsWith("/media/tmdb-show"))
}
function no(e) {
    return !!e.startsWith("/media/tmdb-show")
}
async function so(e) {
    if (!Ut(e))
        return;
    const t = e.split("/").slice(2)
      , [,s,r] = t[0].split("-", 3)
      , i = t.slice(1).map(u=>`/${u}`).join("");
    if (no(e)) {
        const u = await gt(r, K.TV);
        return `/media/${Pe(P.SERIES, u.id.toString(), u.name)}${i}`
    }
    const a = Be(s)
      , o = await Us(a, r);
    if (!o)
        return;
    const {tmdbId: l, imdbId: c} = o;
    if (!(!l && !c) && c && a === P.MOVIE) {
        const u = await Fs(c);
        if (u)
            return `/media/${Pe(a, u, o.meta.title)}`;
        if (l)
            return `/media/${Pe(a, l, o.meta.title)}`
    }
}
class $s {
    constructor() {
        this.INTERVAL_MS = 2 * 60 * 1e3,
        this._interval = null,
        this._compare = null,
        this._storage = []
    }
    initialize() {
        if (this._interval)
            throw new Error("cache is already initialized");
        this._interval = setInterval(()=>{
            const t = new Date;
            this._storage.filter(s=>!(s.expiry < t))
        }
        , this.INTERVAL_MS)
    }
    destroy() {
        this._interval && clearInterval(this._interval),
        this.clear()
    }
    setCompare(t) {
        this._compare = t
    }
    has(t) {
        return !!this.get(t)
    }
    get(t) {
        if (!this._compare)
            throw new Error("Compare function not set");
        const s = this._storage.find(r=>this._compare && this._compare(r.key, t));
        if (s)
            return s.value
    }
    set(t, s, r) {
        if (!this._compare)
            throw new Error("Compare function not set");
        const i = this._storage.find(o=>this._compare && this._compare(o.key, t))
          , a = new Date(new Date().getTime() + r * 1e3);
        if (i) {
            i.key = t,
            i.value = s,
            i.expiry = a;
            return
        }
        this._storage.push({
            key: t,
            value: s,
            expiry: a
        })
    }
    remove(t) {
        if (!this._compare)
            throw new Error("Compare function not set");
        this._storage.filter(s=>!(this._compare && this._compare(s.key, t)))
    }
    clear() {
        this._storage = []
    }
}
const Re = new $s;
Re.setCompare((e,t)=>e.searchQuery.trim() === t.searchQuery.trim());
Re.initialize();
async function Vs(e) {
    if (Re.has(e))
        return Re.get(e);
    const {searchQuery: t} = e
      , r = (await Ds(t)).map(l=>{
        const c = eo(l, l.media_type);
        return qa(c)
    }
    )
      , i = r.filter(l=>l.poster)
      , a = r.filter(l=>!l.poster)
      , o = i.concat(a);
    return Re.set(e, o, 3600),
    o
}
function Bn(e) {
    return e.trim().toLowerCase().replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_")
}
function ro(e, t) {
    return Bn(e) === Bn(t)
}
async function Hs(e, t) {
    const s = (a,o)=>Math.abs(a - o) <= 1
      , r = {}
      , i = await Promise.all(Object.values(e).map(async a=>{
        const o = Number(a.year.toString().split("-")[0])
          , c = (await Vs({
            searchQuery: `${a.title} ${o}`
        })).find(u=>s(Number(u.year), o) && ro(u.title, a.title));
        if (!c) {
            console.error(`No item found for migration: ${a.title}`);
            return
        }
        return {
            id: a.mediaId,
            data: c
        }
    }
    ));
    for (const a of i.filter(Boolean)) {
        if (!a)
            continue;
        let o = [["0", "0"]];
        if (a.data.type === "show") {
            const l = await Ft(P.SERIES, a.data.id);
            if (!l || !(l != null && l.meta.seasons))
                return;
            o = [...new Set(t != null && t.items ? t.items.filter(m=>m.mediaId === a.id).map(m=>m.seasonId) : ["0"])].map(m=>{
                var p, g;
                return {
                    num: m,
                    season: (g = (p = l.meta) == null ? void 0 : p.seasons) == null ? void 0 : g[Math.max(0, m - 1)]
                }
            }
            ).map(m=>{
                var p;
                return m ? [m.num, (p = m == null ? void 0 : m.season) == null ? void 0 : p.id] : []
            }
            ).filter(m=>m.length > 0)
        }
        r[a.id] || (r[a.id] = {}),
        await Promise.all(o.map(async l=>{
            let[c,u] = l;
            c && (r[a.id][c] = await Ft(at(a.data.type), a.data.id, u === "0" || u === null ? void 0 : u))
        }
        ))
    }
    return r
}
async function io(e) {
    const t = e;
    if (!t)
        return;
    const s = {};
    t.bookmarks.forEach(a=>{
        s[a.mediaId] || (s[a.mediaId] = a)
    }
    );
    const r = await Hs(s);
    return r ? {
        bookmarks: Object.keys(r).map(a=>r[a][0]).map(a=>a == null ? void 0 : a.meta).filter(Boolean)
    } : void 0
}
async function ao(e) {
    var o, l, c, u;
    const t = e;
    if (!t)
        return;
    const s = {};
    t.items.forEach(m=>{
        s[m.mediaId] || (s[m.mediaId] = m)
    }
    );
    const r = await Hs(s, t);
    if (!r)
        return;
    const i = {
        ...t,
        items: []
    }
      , a = Date.now();
    for (const m of t.items)
        if (m.mediaType === "movie") {
            if (!((o = r[m.mediaId][0]) != null && o.meta))
                continue;
            const p = {
                item: {
                    meta: (l = r[m.mediaId][0]) == null ? void 0 : l.meta
                },
                progress: m.progress,
                percentage: m.percentage,
                watchedAt: Date.now()
            };
            t.items = t.items.filter(g=>JSON.stringify(g) !== JSON.stringify(m)),
            i.items.push(p)
        } else if (m.mediaType === "series") {
            if (!((c = r[m.mediaId][m.seasonId]) != null && c.meta))
                continue;
            const p = (u = r[m.mediaId][m.seasonId]) == null ? void 0 : u.meta;
            if (p.type !== "series")
                return;
            const g = {
                item: {
                    meta: p,
                    series: {
                        episode: Number(m.episodeId),
                        season: Number(m.seasonId),
                        seasonId: p.seasonData.id,
                        episodeId: p.seasonData.episodes[Number(m.episodeId) - 1].id
                    }
                },
                progress: m.progress,
                percentage: m.percentage,
                watchedAt: a + Number(m.seasonId) * 1e3 + Number(m.episodeId)
            };
            if (i.items.find(f=>{
                var h, v;
                return f.item.meta.id === g.item.meta.id && ((h = f.item.series) == null ? void 0 : h.episodeId) === ((v = g.item.series) == null ? void 0 : v.episodeId)
            }
            ))
                continue;
            t.items = t.items.filter(f=>JSON.stringify(f) !== JSON.stringify(m)),
            i.items.push(g)
        }
    return i
}
function oo(e) {
    return e != null
}
async function Ws(e, t) {
    const s = await Us(t, e);
    if (!s)
        return;
    const {tmdbId: r, imdbId: i} = s;
    if (!(!r && !i)) {
        if (i && t === P.MOVIE) {
            const a = await Fs(i);
            if (a)
                return a
        }
        if (r)
            return r
    }
}
async function lo(e) {
    const t = e.bookmarks.map(async s=>({
        ...s,
        id: await Ws(s.id, s.type).catch(()=>{}
        )
    }));
    return {
        bookmarks: (await Promise.all(t)).filter(s=>s.id)
    }
}
async function co(e) {
    return {
        items: (await Promise.all(e.items.map(async s=>{
            try {
                const r = await Ws(s.item.meta.id, s.item.meta.type);
                if (!r)
                    return null;
                const i = structuredClone(s);
                if (i.item.meta.id = r,
                i.item.series) {
                    const a = i.item.series
                      , l = (await gt(r, K.TV)).seasons.find(m=>m.season_number === a.season);
                    if (!l)
                        return null;
                    const u = (await Bs(r, l.season_number)).find(m=>m.episode_number === a.episode);
                    if (!u)
                        return null;
                    i.item.series.episodeId = u.id.toString(),
                    i.item.series.seasonId = l.id.toString()
                }
                return i
            } catch {
                return null
            }
        }
        ))).filter(oo)
    }
}
const uo = {
    [P.ANIME]: null,
    [P.MOVIE]: "movie",
    [P.SERIES]: "show"
};
ht().setKey("mw-bookmarks").addVersion({
    version: 0,
    migrate(e) {
        return io(e)
    }
}).addVersion({
    version: 1,
    migrate(e) {
        return lo(e)
    }
}).addVersion({
    version: 2,
    migrate(e) {
        const t = {};
        for (const s of e.bookmarks) {
            const r = uo[s.type];
            r && (t[s.id] = {
                title: s.title,
                year: s.year ? Number(s.year) : void 0,
                poster: s.poster,
                type: r,
                updatedAt: Date.now()
            })
        }
        return z.getState().replaceBookmarks(t),
        {
            bookmarks: []
        }
    }
}).addVersion({
    version: 3,
    create() {
        return {
            bookmarks: []
        }
    }
}).build();
const mo = {
    description: "Jelly is a web application that searches the internet for streams. The team aims for a mostly minimalistic approach to consuming content.",
    faqTitle: "Common questions",
    q1: {
        body: "Jelly does not host any content. When you click on something to watch, the internet is searched for the selected media (On the loading screen and in the 'video sources' tab you can see which source you're using). Media never gets uploaded by Jelly, everything is through this searching mechanism.",
        title: "Where does the content come from?"
    },
    q2: {
        body: "It's not possible to request a show or movie, Jelly does not manage any content. All content is viewed through sources on the internet.",
        title: "Where can I request a show or movie?"
    },
    q3: {
        body: "Our search results are powered by The Movie Database (TMDB) and display regardless of whether our sources actually have the content.",
        title: "The search results display the show or movie, why can't I play it?"
    },
    title: "About Jelly"
}
  , ho = {
    copied: "Copied",
    copy: "Copy"
}
  , fo = {
    createAccount: "Don't have an account yet? <0>Create an account.</0>",
    deviceNameLabel: "Device name",
    deviceNamePlaceholder: "Personal phone",
    generate: {
        description: "Your passphrase acts as your username and password. Make sure to keep it safe as you will need to enter it to login to your account",
        next: "I have saved my passphrase",
        passphraseFrameLabel: "Passphrase",
        title: "Your passphrase"
    },
    hasAccount: "Already have an account? <0>Login here.</0>",
    login: {
        description: "Please enter your passphrase to login to your account",
        deviceLengthError: "Please enter a device name",
        passphraseLabel: "12-Word passphrase",
        passphrasePlaceholder: "Passphrase",
        submit: "Login",
        title: "Login to your account",
        validationError: "Incorrect or incomplete passphrase"
    },
    register: {
        information: {
            color1: "Profile color one",
            color2: "Profile color two",
            header: "Enter a name for your device and pick colours and a user icon of your choosing",
            icon: "User icon",
            next: "Next",
            title: "Account information"
        }
    },
    trust: {
        failed: {
            text: "Did you configure it correctly?",
            title: "Failed to reach server"
        },
        host: "You are connecting to Jelly - please confirm you trust it before making an account",
        no: "Go back",
        title: "Do you trust this server?",
        yes: "I trust this server"
    },
    verify: {
        description: "Please enter your passphrase from earlier to confirm you have saved it and to create your account",
        invalidData: "Data is not valid",
        noMatch: "Passphrase doesn't match",
        passphraseLabel: "Your 12-word passphrase",
        recaptchaFailed: "ReCaptcha validation failed",
        register: "Create account",
        title: "Confirm your passphrase"
    }
}
  , go = {
    badge: "It broke",
    details: "Error details",
    reloadPage: "Reload the page",
    showError: "Show error details",
    title: "We encountered an error!"
}
  , xo = {
    legal: {
        disclaimer: "Disclaimer",
        disclaimerText: "Jelly does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. Jelly is not responsible for any media files shown by the video providers."
    },
    links: {
        discord: "Discord",
        dmca: "DMCA",
        github: "GitHub"
    },
    tagline: "Watch your favourite shows and movies with this all in one ad free app."
}
  , po = {
    name: "Jelly",
    pages: {
        about: "About",
        dmca: "DMCA",
        login: "Login",
        pagetitle: "{{title}} - Jelly",
        register: "Register",
        settings: "Settings"
    }
}
  , bo = {
    bookmarks: {
        sectionTitle: "Bookmarks"
    },
    continueWatching: {
        sectionTitle: "Continue Watching"
    },
    mediaList: {
        stopEditing: "Stop editing"
    },
    search: {
        allResults: "That's all we have!",
        failed: "Failed to find media, try again!",
        loading: "Loading...",
        noResults: "We couldn't find anything!",
        placeholder: "What do you want to watch?",
        sectionTitle: "Search results"
    },
    titles: {
        day: {
            default: "Welcome To Jelly!",
            extra: ["I hope your day is going great!"]
        },
        morning: {
            default: "Welcome To Jelly!",
            extra: ["If your're reading this your doing great."]
        },
        night: {
            default: "Welcome To Jelly!",
            extra: ["If your day is bad just know your loved :)"]
        }
    }
}
  , yo = {
    episodeDisplay: "S{{season}} E{{episode}}",
    types: {
        movie: "Movie",
        show: "Show"
    }
}
  , vo = {
    banner: {
        offline: "Check your internet connection"
    },
    menu: {
        about: "Home",
        logout: "Log out",
        register: "Login",
        settings: "Settings",
        support: "Support"
    }
}
  , jo = {
    badge: "Not found",
    goHome: "Back to home",
    message: "We looked everywhere: under the bins, in the closet, behind the proxy but ultimately couldn't find the page you are looking for.",
    title: "Couldn't find that page"
}
  , wo = {
    close: "Close"
}
  , ko = {
    turnstile: {
        verifyingHumanity: "Verifying your humanity...",
        title: "We need to verify that you're human.",
        description: "Please verify that you are human by completing the Captcha on the right. This is to keep Jelly safe!",
        error: "Failed to verify your humanity. Please try again."
    },
    back: {
        default: "Back to home",
        short: "Back"
    },
    casting: {
        enabled: "Casting to device..."
    },
    menus: {
        settings: {
            videoSection: "Video settings",
            experienceSection: "Viewing experience",
            enableSubtitles: "Enable Subtitles",
            subtitleItem: "Subtitle settings",
            sourceItem: "Video sources",
            playbackItem: "Playback settings",
            downloadItem: "Download",
            qualityItem: "Quality"
        },
        episodes: {
            button: "Episodes",
            loadingTitle: "Loading...",
            loadingList: "Loading...",
            loadingError: "Error loading season",
            emptyState: "There are no episodes in this season, check back later!",
            episodeBadge: "E{{episode}}",
            unairedEpisodes: "One or more episodes in this season have been disabled because they haven't been aired yet."
        },
        sources: {
            title: "Sources",
            unknownOption: "Unknown",
            noStream: {
                title: "No stream",
                text: "This source has no streams for this movie or show."
            },
            noEmbeds: {
                title: "No embeds found",
                text: "We were unable to find any embeds, please try a different source."
            },
            failed: {
                title: "Failed to scrape",
                text: "There was an error while trying to find any videos, please try a different source."
            }
        },
        subtitles: {
            title: "Subtitles",
            customizeLabel: "Customize",
            settings: {
                fixCapitals: "Fix capitalization",
                delay: "Subtitle delay",
                backlink: "Custom subtitles"
            },
            customChoice: "Select subtitle from file",
            offChoice: "Off",
            unknownLanguage: "Unknown"
        },
        downloads: {
            disclaimer: "Downloads are taken directly from the provider. Jelly does not have control over how the downloads are provided.",
            downloadSubtitle: "Download current subtitle",
            downloadPlaylist: "Download playlist",
            downloadVideo: "Download video",
            hlsDisclaimer: "Downloads are taken directly from the provider. Jelly does not have control over how the downloads are provided. Please note that you are downloading an HLS playlist, this is intended for users familiar with advanced multimedia streaming.",
            onAndroid: {
                1: "To download on Android, click the download button then, on the new page, <bold>tap and hold</bold> on the video, then select <bold>save</bold>.",
                shortTitle: "Download / Android",
                title: "Downloading on Android"
            },
            onIos: {
                1: "To download on iOS, click the download button then, on the new page, click <bold><ios_share /></bold>, then <bold>Save to Files <ios_files /></bold>.",
                shortTitle: "Download / iOS",
                title: "Downloading on iOS"
            },
            onPc: {
                1: "On PC, click the download button then, on the new page, right click the video and select <bold>Save video as</bold>",
                shortTitle: "Download / PC",
                title: "Downloading on PC"
            },
            title: "Download"
        },
        playback: {
            speedLabel: "Playback speed",
            title: "Playback settings"
        },
        quality: {
            automaticLabel: "Automatic quality",
            hint: "You can try <0>switching source</0> to get different quality options.",
            iosNoQuality: "Due to Apple-defined limitations, quality selection is not available on iOS for this source. You can try <0>switching to another source</0> to get different quality options.",
            title: "Quality"
        }
    },
    metadata: {
        failed: {
            badge: "Failed",
            homeButton: "Go home",
            text: "Could not load the media's metadata from TMDB. Please check whether TMDB is down or blocked on your internet connection.",
            title: "Failed to load metadata"
        },
        api: {
            text: "Could not load API metadata, please check your internet connection.",
            title: "Failed to load API metadata"
        },
        notFound: {
            badge: "Not found",
            homeButton: "Back to home",
            text: "We couldn't find the media you requested. Either it's been removed or you tampered with the URL.",
            title: "Couldn't find that media."
        }
    },
    nextEpisode: {
        cancel: "Cancel",
        next: "Next episode"
    },
    playbackError: {
        badge: "Playback error",
        errors: {
            errorAborted: "The fetching of the media was aborted by the user's request.",
            errorDecode: "Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.",
            errorGenericMedia: "Unknown media error occurred.",
            errorNetwork: "Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.",
            errorNotSupported: "The media or media provider object is not supported."
        },
        homeButton: "Go home",
        text: "There was an error trying to play the media. Please try again.",
        title: "Failed to play video!"
    },
    scraping: {
        items: {
            failure: "Error occurred",
            notFound: "Doesn't have the video",
            pending: "Checking for videos..."
        },
        notFound: {
            badge: "Not found",
            detailsButton: "Show details",
            homeButton: "Go home",
            text: "We have searched through our providers and cannot find the media you are looking for! We do not host the media and have no control over what is available. Please click 'Show details' below for more details.",
            title: "We couldn't find that"
        }
    },
    time: {
        regular: "{{timeWatched}} / {{duration}}",
        remaining: "{{timeLeft}} left • Finish at {{timeFinished, datetime}}",
        shortRegular: "{{timeWatched}}",
        shortRemaining: "-{{timeLeft}}"
    }
}
  , No = {
    dmca: {
        text: "Welcome to Jelly's DMCA contact page! We respect intellectual property rights and want to address any copyright concerns swiftly. If you believe your copyrighted work has been improperly used on our platform, please send a detailed DMCA notice to the email below. Please include a description of the copyrighted material, your contact details, and a statement of good faith belief. We're committed to resolving these matters promptly and appreciate your cooperation in keeping Jelly a place that respects creativity and copyrights.",
        title: "DMCA"
    },
    loadingApp: "Loading application",
    loadingUser: "Loading your profile",
    loadingUserError: {
        logout: "Logout",
        reset: "Reset custom server",
        text: "Failed to load your profile",
        textWithReset: "Failed to load your profile from your custom server, want to reset back to the default server?"
    },
    migration: {
        failed: "Failed to migrate your data.",
        inProgress: "Please hold, we are migrating your data. This shouldn't take long."
    }
}
  , So = {
    account: {
        accountDetails: {
            deviceNameLabel: "Device name",
            deviceNamePlaceholder: "Personal phone",
            editProfile: "Edit",
            logoutButton: "Log out"
        },
        actions: {
            delete: {
                button: "Delete account",
                confirmButton: "Delete account",
                confirmDescription: "Are you sure you want to delete your account? All your data will be lost!",
                confirmTitle: "Are you sure?",
                text: "This action is irreversible. All data will be deleted and nothing can be recovered.",
                title: "Delete account"
            },
            title: "Actions"
        },
        devices: {
            deviceNameLabel: "Device name",
            failed: "Failed to load sessions",
            removeDevice: "Remove",
            title: "Devices"
        },
        profile: {
            finish: "Finish editing",
            firstColor: "Profile color one",
            secondColor: "Profile color two",
            title: "Edit profile picture",
            userIcon: "User icon"
        },
        
    },
    appearance: {
        activeTheme: "Active",
        themes: {
            blue: "Blue",
            default: "Default",
            gray: "Gray",
            red: "Red",
            teal: "Teal"
        },
        title: "Appearance"
    },
    subtitles: {
        title: "Subtitles",
        previewQuote: "I must not fear. Fear is the mind-killer.",
        textSizeLabel: "Text size",
        backgroundLabel: "Background opacity",
        colorLabel: "Color"
    },
    connections: {
        server: {
            description: "If you would like to connect to a custom backend to store your data, enable this and provide the URL.",
            label: "Custom server",
            urlLabel: "Custom server URL"
        },
        title: "Connections",
        workers: {
            addButton: "Add new worker",
            description: "To make the application function, all traffic is routed through proxies. Enable this if you want to bring your own workers.",
            emptyState: "No workers yet, add one below",
            label: "Use custom proxy workers",
            urlLabel: "Worker URLs",
            urlPlaceholder: "https://"
        }
    },
    locale: {
        language: "Application language",
        languageDescription: "Language applied to the entire application.",
        title: "Locale"
    },
    reset: "Reset",
    save: "Save",
    sidebar: {
        info: {
            appVersion: "App version",
            backendUrl: "Backend URL",
            backendVersion: "Backend version",
            hostname: "Hostname",
            insecure: "Insecure",
            notLoggedIn: "You are not logged in",
            secure: "Secure",
            title: "App information",
            unknownVersion: "Unknown",
            userId: "User ID"
        }
    },
    unsaved: "You have unsaved changes"
}
  , Co = {
    about: mo,
    actions: ho,
    auth: fo,
    errors: go,
    footer: xo,
    global: po,
    home: bo,
    media: yo,
    navigation: vo,
    notFound: jo,
    overlays: wo,
    player: ko,
    screens: No,
    settings: So
}
  , zs = {
    en: Co,
    ca: Ci,
    cs: Ei,
    de: Ii,
    fr: Li,
    it: Ti,
    nl: Pi,
    pl: Ri,
    tr: Ai,
    vi: Mi,
    zh: _i,
    he: Oi,
    sv: Di,
    pirate: Bi,
    minion: Fi,
    lv: Ui,
    th: $i,
    ne: Vi,
    ar: Hi,
    es: Wi,
    et: zi,
    tok: Qi,
    hi: Ki,
    "pt-BR": Gi,
    uk: qi,
    bg: Yi,
    bn: Ji,
    el: Xi,
    fa: Zi,
    gu: ea,
    id: ta,
    ja: na,
    ko: sa,
    sl: ra,
    ta: ia,
    "zh-HANT": aa,
    ru: oa,
    gl: la,
    pa: ca,
    ro: ua
}
  , Eo = Object.keys(zs)
  , Io = Object.fromEntries(Object.entries(zs).map(e=>[e[0], {
    translation: e[1]
}]));
xs.use(ui).init({
    fallbackLng: "en",
    resources: Io,
    interpolation: {
        escapeValue: !1
    }
});
const Xm = Eo.map(e=>{
    const t = tn(e);
    if (!t)
        throw new Error(`Language with code ${e} cannot be found in database`);
    return t
}
)
  , Fe = G(ce(q(e=>({
    language: "en",
    setLanguage(t) {
        e(s=>{
            s.language = t
        }
        )
    }
})), {
    name: "__MW::locale"
}));
function Qs(e) {
    const t = tn(e);
    t && xs.changeLanguage(t.code)
}
function Lo(e) {
    const t = tn(e);
    return t ? t.isRtl : !1
}
function To() {
    const e = Fe(s=>s.language);
    d.useEffect(()=>{
        Qs(e)
    }
    , [e]);
    const t = Lo(e);
    return n.jsx(le, {
        children: n.jsx("html", {
            dir: t ? "rtl" : "ltr"
        })
    })
}
const D = G(ce(q(e=>({
    enabled: !1,
    lastSync: {
        lastSelectedLanguage: null
    },
    lastSelectedLanguage: null,
    overrideCasing: !1,
    delay: 0,
    styling: {
        color: "#ffffff",
        backgroundOpacity: .5,
        size: 1
    },
    resetSubtitleSpecificSettings() {
        e(t=>{
            t.delay = 0,
            t.overrideCasing = !1
        }
        )
    },
    updateStyling(t) {
        e(s=>{
            t.backgroundOpacity !== void 0 && (s.styling.backgroundOpacity = t.backgroundOpacity),
            t.color !== void 0 && (s.styling.color = t.color.toLowerCase()),
            t.size !== void 0 && (s.styling.size = Math.min(2, Math.max(.01, t.size)))
        }
        )
    },
    setLanguage(t) {
        e(s=>{
            s.enabled = !!t,
            t && (s.lastSelectedLanguage = t)
        }
        )
    },
    setCustomSubs() {
        e(t=>{
            t.enabled = !0,
            t.lastSelectedLanguage = null
        }
        )
    },
    setOverrideCasing(t) {
        e(s=>{
            s.overrideCasing = t
        }
        )
    },
    setDelay(t) {
        e(s=>{
            s.delay = Math.max(Math.min(500, t), -500)
        }
        )
    },
    importSubtitleLanguage(t) {
        e(s=>{
            s.lastSelectedLanguage = t,
            s.lastSync.lastSelectedLanguage = t
        }
        )
    }
})), {
    name: "__MW::subtitles"
}));
ht().setKey("mw-settings").addVersion({
    version: 0,
    create() {
        return {
            language: "en",
            captionSettings: {
                delay: 0,
                style: {
                    color: "#ffffff",
                    fontSize: 25,
                    backgroundColor: "#00000096"
                }
            }
        }
    },
    migrate(e) {
        return {
            language: e.language,
            captionSettings: {
                language: "none",
                ...e.captionSettings
            }
        }
    }
}).addVersion({
    version: 1,
    migrate(e) {
        const t = Fe.getState()
          , s = D.getState()
          , r = e.captionSettings.style.backgroundColor;
        let i = .5;
        if (r.length === 9) {
            const a = r.slice(7);
            i = parseInt(a, 16) / 255
        }
        return t.setLanguage(e.language),
        s.updateStyling({
            backgroundOpacity: i,
            color: e.captionSettings.style.color,
            size: e.captionSettings.style.fontSize / 25
        }),
        s.importSubtitleLanguage(e.captionSettings.language === "none" ? null : e.captionSettings.language),
        {}
    }
}).addVersion({
    version: 2,
    create() {
        return {}
    }
}).build();
const an = G(ce(q(e=>({
    volume: 1,
    setVolume(t) {
        e(s=>{
            s.volume = t
        }
        )
    }
})), {
    name: "__MW::volume"
}))
  , Ks = G(q(e=>({
    showVolume: !1,
    setShowVolume(t) {
        e(s=>{
            s.showVolume = t
        }
        )
    }
})));
ht().setKey("mw-volume").addVersion({
    version: 0,
    create() {
        return {
            volume: 1
        }
    },
    migrate(e) {
        return an.getState().setVolume(e.volume),
        {}
    }
}).addVersion({
    version: 1,
    create() {
        return {}
    }
}).build();
let Ye = 0;
const H = G(ce(q(e=>({
    items: {},
    updateQueue: [],
    removeItem(t) {
        e(s=>{
            Ye += 1,
            s.updateQueue.push({
                id: Ye.toString(),
                action: "delete",
                tmdbId: t
            }),
            delete s.items[t]
        }
        )
    },
    replaceItems(t) {
        e(s=>{
            s.items = t
        }
        )
    },
    updateItem(t) {
        let {meta: s, progress: r} = t;
        e(i=>{
            var o, l, c, u;
            Ye += 1,
            i.updateQueue.push({
                tmdbId: s.tmdbId,
                title: s.title,
                year: s.releaseYear,
                poster: s.poster,
                type: s.type,
                progress: {
                    ...r
                },
                id: Ye.toString(),
                episodeId: (o = s.episode) == null ? void 0 : o.tmdbId,
                seasonId: (l = s.season) == null ? void 0 : l.tmdbId,
                seasonNumber: (c = s.season) == null ? void 0 : c.number,
                episodeNumber: (u = s.episode) == null ? void 0 : u.number,
                action: "upsert"
            }),
            i.items[s.tmdbId] || (i.items[s.tmdbId] = {
                type: s.type,
                episodes: {},
                seasons: {},
                updatedAt: 0,
                title: s.title,
                year: s.releaseYear,
                poster: s.poster
            });
            const a = i.items[s.tmdbId];
            if (a.updatedAt = Date.now(),
            s.type === "movie") {
                a.progress || (a.progress = {
                    duration: 0,
                    watched: 0
                }),
                a.progress = {
                    ...r
                };
                return
            }
            !s.episode || !s.season || (a.seasons[s.season.tmdbId] || (a.seasons[s.season.tmdbId] = {
                id: s.season.tmdbId,
                number: s.season.number,
                title: s.season.title
            }),
            a.episodes[s.episode.tmdbId] || (a.episodes[s.episode.tmdbId] = {
                id: s.episode.tmdbId,
                number: s.episode.number,
                title: s.episode.title,
                seasonId: s.season.tmdbId,
                updatedAt: Date.now(),
                progress: {
                    duration: 0,
                    watched: 0
                }
            }),
            a.episodes[s.episode.tmdbId].progress = {
                ...r
            })
        }
        )
    },
    clear() {
        e(t=>{
            t.items = {}
        }
        )
    },
    clearUpdateQueue() {
        e(t=>{
            t.updateQueue = []
        }
        )
    },
    removeUpdateItem(t) {
        e(s=>{
            s.updateQueue = [...s.updateQueue.filter(r=>r.id !== t)]
        }
        )
    }
})), {
    name: "__MW::progress"
}));
function Po(e) {
    var s, r;
    const t = {};
    for (const i of e.items)
        if (i.item.meta.type === P.SERIES) {
            if (t[i.item.meta.id] || (t[i.item.meta.id] = {
                type: "show",
                episodes: {},
                seasons: {},
                title: i.item.meta.title,
                updatedAt: i.watchedAt,
                poster: i.item.meta.poster,
                year: Number(i.item.meta.year)
            }),
            i.item.series && !t[i.item.meta.id].episodes[i.item.series.episodeId]) {
                const a = (s = i.item.meta.seasonData.episodes.find(o=>{
                    var l;
                    return o.number === ((l = i.item.series) == null ? void 0 : l.episode)
                }
                )) == null ? void 0 : s.title;
                t[i.item.meta.id].seasons[i.item.series.seasonId] = {
                    id: i.item.series.seasonId,
                    number: i.item.series.season,
                    title: ((r = i.item.meta.seasons.find(o=>{
                        var l;
                        return o.number === ((l = i.item.series) == null ? void 0 : l.season)
                    }
                    )) == null ? void 0 : r.title) || "Unknown season"
                },
                t[i.item.meta.id].episodes[i.item.series.episodeId] = {
                    title: a || "Unknown",
                    id: i.item.series.episodeId,
                    number: i.item.series.episode,
                    seasonId: i.item.series.seasonId,
                    updatedAt: i.watchedAt,
                    progress: {
                        duration: 100 / i.percentage * i.progress,
                        watched: i.progress
                    }
                }
            }
        } else
            t[i.item.meta.id] = {
                type: "movie",
                episodes: {},
                seasons: {},
                title: i.item.meta.title,
                updatedAt: i.watchedAt,
                year: Number(i.item.meta.year),
                poster: i.item.meta.poster,
                progress: {
                    duration: 100 / i.percentage * i.progress,
                    watched: i.progress
                }
            };
    return t
}
ht().setKey("video-progress").addVersion({
    version: 0,
    migrate() {
        return {
            items: []
        }
    }
}).addVersion({
    version: 1,
    async migrate(e) {
        return ao(e)
    }
}).addVersion({
    version: 2,
    migrate(e) {
        return co(e)
    }
}).addVersion({
    version: 3,
    migrate(e) {
        return H.getState().replaceItems(Po(e)),
        {
            items: []
        }
    }
}).addVersion({
    version: 4,
    create() {
        return {
            items: []
        }
    }
}).build();
Zr.initialize([{
    trackingId: Ia
}]);
function xt(e) {
    return n.jsx("div", {
        className: ["spinner", e.className ?? ""].join(" ")
    })
}
function M(e) {
    var u;
    const t = ee()
      , {onClick: s, href: r, loading: i} = e
      , a = d.useCallback(()=>{
        i || (r ? t(r) : s == null || s())
    }
    , [s, r, t, i]);
    let o = "bg-white hover:bg-gray-200 text-black";
    e.theme === "secondary" && (o = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white"),
    e.theme === "danger" && (o = "bg-buttons-danger hover:bg-buttons-dangerHover text-white");
    let l = S("tabbable cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", e.padding ?? "px-4 py-3", e.className, o, e.disabled ? "cursor-not-allowed bg-opacity-60 text-opacity-60" : null);
    e.disabled && (l = l.split(" ").filter(m=>!m.startsWith("hover:") && !m.startsWith("active:")).join(" "));
    const c = n.jsxs(n.Fragment, {
        children: [e.icon && !e.loading ? n.jsx("span", {
            className: "mr-3 hidden md:inline-block",
            children: n.jsx(I, {
                icon: e.icon
            })
        }) : null, e.loading ? n.jsx("span", {
            className: "mr-3 inline-flex justify-center",
            children: n.jsx(xt, {
                className: "text-lg"
            })
        }) : null, e.children]
    });
    return e.href && (e.href.startsWith("https://") || (u = e.href) != null && u.startsWith("data:")) ? n.jsx("a", {
        className: l,
        href: e.href,
        target: "_blank",
        rel: "noreferrer",
        download: e.download,
        children: c
    }) : e.href ? n.jsx("a", {
        className: l,
        onClick: a,
        children: c
    }) : n.jsx("button", {
        type: "button",
        onClick: a,
        className: l,
        children: c
    })
}
function Fn(e) {
    let t = "bg-white hover:bg-gray-200 text-black";
    e.theme === "purple" && (t = "bg-buttons-purple hover:bg-buttons-purpleHover text-white"),
    e.theme === "secondary" && (t = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white");
    const s = S("cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", "px-4 py-3", e.className, t);
    return n.jsx("button", {
        type: "button",
        onClick: e.onClick,
        className: s,
        children: e.children
    })
}
const Ro = function(t) {
    return n.jsx("div", {
        className: t.className,
        children: n.jsxs("div", {
            className: "flex flex-col items-center justify-center",
            children: [n.jsxs("div", {
                className: "flex h-12 items-center justify-center",
                children: [n.jsx("div", {
                    className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30]"
                }), n.jsx("div", {
                    className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:150ms]"
                }), n.jsx("div", {
                    className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:300ms]"
                }), n.jsx("div", {
                    className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:450ms]"
                })]
            }), t.text && t.text.length ? n.jsx("p", {
                className: "mt-3 max-w-xs text-sm opacity-75",
                children: t.text
            }) : null]
        })
    })
}
  , Ue = Ro;
function V(e) {
    return {
        authorization: `Bearer ${e}`
    }
}
function Ao(e, t) {
    return {
        meta: {
            title: t.title,
            type: t.type,
            poster: t.poster,
            year: t.year ?? 0
        },
        tmdbId: e
    }
}
async function Mo(e, t, s) {
    return A(`/users/${t.userId}/bookmarks/${s.tmdbId}`, {
        method: "POST",
        headers: V(t.token),
        baseURL: e,
        body: s
    })
}
async function _o(e, t, s) {
    return A(`/users/${t.userId}/bookmarks/${s}`, {
        method: "DELETE",
        headers: V(t.token),
        baseURL: e
    })
}
async function Oo(e) {
    return ei(ti, e, "mnemonic", {
        c: 2048,
        dkLen: 32
    })
}
function Do(e) {
    return ni(e, ps)
}
async function Un(e) {
    const t = await Oo(e)
      , {privateKey: s, publicKey: r} = J.pki.ed25519.generateKeyPair({
        seed: t
    });
    return {
        privateKey: s,
        publicKey: r,
        seed: t
    }
}
function Bo() {
    return si(ps)
}
async function Fo(e, t) {
    return J.pki.ed25519.sign({
        encoding: "utf8",
        message: e,
        privateKey: t
    })
}
function $t(e) {
    return J.util.encode64(String.fromCodePoint(...e))
}
function Vt(e) {
    return $t(e).replace(/\//g, "_").replace(/\+/g, "-").replace(/=+$/, "")
}
async function $n(e, t) {
    const s = await Fo(t, e.privateKey);
    return Vt(s)
}
function on(e) {
    return J.util.binary.base64.decode(e)
}
function Et(e) {
    return J.util.createBuffer(on(e))
}
function Vn(e) {
    return J.util.encode64(e.getBytes())
}
async function Hn(e, t) {
    if (t.byteLength !== 32)
        throw new Error("Secret must be at least 256-bit");
    const s = await new Promise((o,l)=>{
        J.random.getBytes(16, (c,u)=>{
            c && l(c),
            o(u)
        }
        )
    }
    )
      , r = J.cipher.createCipher("AES-GCM", J.util.createBuffer(t));
    r.start({
        iv: s,
        tagLength: 128
    }),
    r.update(J.util.createBuffer(e, "utf8")),
    r.finish();
    const i = r.output
      , a = r.mode.tag;
    return `${J.util.encode64(s)}.${Vn(i)}.${Vn(a)}`
}
function Gs(e, t) {
    if (t.byteLength !== 32)
        throw new Error("Secret must be 256-bit");
    const [s,r,i] = e.split(".")
      , a = J.cipher.createDecipher("AES-GCM", J.util.createBuffer(t));
    if (a.start({
        iv: Et(s),
        tag: Et(i),
        tagLength: 128
    }),
    a.update(Et(r)),
    !a.finish())
        throw new Error("Error decrypting data");
    return a.output.toString()
}
function Uo(e, t, s) {
    return A(`/users/${t.userId}/progress/import`, {
        method: "PUT",
        body: s,
        baseURL: e,
        headers: V(t.token)
    })
}
function $o(e, t, s) {
    return A(`/users/${t.userId}/bookmarks`, {
        method: "PUT",
        body: s,
        baseURL: e,
        headers: V(t.token)
    })
}
async function Vo(e, t) {
    return A("/auth/login/start", {
        method: "POST",
        body: {
            publicKey: t
        },
        baseURL: e
    })
}
async function Ho(e, t) {
    return A("/auth/login/complete", {
        method: "POST",
        body: {
            namespace: "Jelly",
            ...t
        },
        baseURL: e
    })
}
function Wo(e) {
    var t, s;
    return {
        duration: ((t = e.progress) == null ? void 0 : t.duration) ?? 0,
        watched: ((s = e.progress) == null ? void 0 : s.watched) ?? 0,
        tmdbId: e.tmdbId,
        meta: {
            title: e.title ?? "",
            type: e.type ?? "",
            year: e.year ?? NaN,
            poster: e.poster
        },
        episodeId: e.episodeId,
        seasonId: e.seasonId,
        episodeNumber: e.episodeNumber,
        seasonNumber: e.seasonNumber
    }
}
function zo(e, t) {
    var s, r;
    return t.type === "show" ? Object.entries(t.episodes).flatMap(i=>{
        var l, c;
        let[a,o] = i;
        return {
            duration: ((l = t.progress) == null ? void 0 : l.duration) ?? o.progress.duration,
            watched: ((c = t.progress) == null ? void 0 : c.watched) ?? o.progress.watched,
            tmdbId: e,
            meta: {
                title: t.title ?? "",
                type: t.type ?? "",
                year: t.year ?? NaN,
                poster: t.poster
            },
            episodeId: o.id,
            seasonId: o.seasonId,
            episodeNumber: o.number,
            seasonNumber: t.seasons[o.seasonId].number,
            updatedAt: new Date(o.updatedAt).toISOString()
        }
    }
    ) : [{
        duration: ((s = t.progress) == null ? void 0 : s.duration) ?? 0,
        watched: ((r = t.progress) == null ? void 0 : r.watched) ?? 0,
        tmdbId: e,
        updatedAt: new Date(t.updatedAt).toISOString(),
        meta: {
            title: t.title ?? "",
            type: t.type ?? "",
            year: t.year ?? NaN,
            poster: t.poster
        }
    }]
}
async function Qo(e, t, s) {
    return A(`/users/${t.userId}/progress/${s.tmdbId}`, {
        method: "PUT",
        headers: V(t.token),
        baseURL: e,
        body: s
    })
}
async function Ko(e, t, s, r, i) {
    await A(`/users/${t.userId}/progress/${s}`, {
        method: "DELETE",
        headers: V(t.token),
        baseURL: e,
        body: {
            episodeId: r,
            seasonId: i
        }
    })
}
async function Go(e, t) {
    return A("/auth/register/start", {
        method: "POST",
        body: {
            captchaToken: t
        },
        baseURL: e
    })
}
async function qo(e, t) {
    return A("/auth/register/complete", {
        method: "POST",
        body: {
            namespace: "Jelly",
            ...t
        },
        baseURL: e
    })
}
async function Zm(e, t) {
    return A(`/users/${t.userId}/sessions`, {
        headers: V(t.token),
        baseURL: e
    })
}
async function eh(e, t, s) {
    return A(`/sessions/${t.sessionId}`, {
        method: "PATCH",
        headers: V(t.token),
        body: s,
        baseURL: e
    })
}
async function Yo(e, t, s) {
    return A(`/sessions/${s}`, {
        method: "DELETE",
        headers: V(t),
        baseURL: e
    })
}
function qs(e, t, s) {
    return A(`/users/${t.userId}/settings`, {
        method: "PUT",
        body: s,
        baseURL: e,
        headers: V(t.token)
    })
}
function Jo(e, t) {
    return A(`/users/${t.userId}/settings`, {
        method: "GET",
        baseURL: e,
        headers: V(t.token)
    })
}
function Xo(e) {
    const t = e.map(s=>{
        const r = {
            ...s.meta,
            updatedAt: new Date(s.updatedAt).getTime()
        };
        return [s.tmdbId, r]
    }
    );
    return Object.fromEntries(t)
}
function Zo(e) {
    const t = {};
    return e.forEach(s=>{
        t[s.tmdbId] || (t[s.tmdbId] = {
            title: s.meta.title,
            poster: s.meta.poster,
            type: s.meta.type,
            updatedAt: new Date(s.updatedAt).getTime(),
            episodes: {},
            seasons: {},
            year: s.meta.year
        });
        const r = t[s.tmdbId];
        r.type === "movie" && (r.progress = {
            duration: Number(s.duration),
            watched: Number(s.watched)
        }),
        r.type === "show" && s.season.id && s.episode.id && (r.seasons[s.season.id] = {
            id: s.season.id,
            number: s.season.number ?? 0,
            title: ""
        },
        r.episodes[s.episode.id] = {
            id: s.episode.id,
            number: s.episode.number ?? 0,
            title: "",
            progress: {
                duration: Number(s.duration),
                watched: Number(s.watched)
            },
            seasonId: s.season.id,
            updatedAt: new Date(s.updatedAt).getTime()
        })
    }
    ),
    t
}
async function Wn(e, t) {
    return A("/users/@me", {
        headers: V(t),
        baseURL: e
    })
}
async function th(e, t, s) {
    return A(`/users/${t.userId}`, {
        method: "PATCH",
        headers: V(t.token),
        body: s,
        baseURL: e
    })
}
async function nh(e, t) {
    return A(`/users/${t.userId}`, {
        headers: V(t.token),
        baseURL: e
    })
}
async function el(e, t) {
    return A(`/users/${t.userId}/bookmarks`, {
        headers: V(t.token),
        baseURL: e
    })
}
async function tl(e, t) {
    return A(`/users/${t.userId}/progress`, {
        headers: V(t.token),
        baseURL: e
    })
}
const ln = G(ce(q(e=>({
    theme: null,
    setTheme(t) {
        e(s=>{
            s.theme = t
        }
        )
    }
})), {
    name: "__MW::theme"
}));
function nl(e) {
    const t = ln(r=>r.theme)
      , s = t ? `theme-${t}` : void 0;
    return n.jsxs("div", {
        className: s,
        children: [e.applyGlobal ? n.jsx(le, {
            children: n.jsx("body", {
                className: s
            })
        }) : null, e.children]
    })
}
function sl() {
    const e = !!U(h=>h.account)
      , t = U(h=>h.setAccount)
      , s = U(h=>h.removeAccount)
      , r = U(h=>h.setProxySet)
      , i = z(h=>h.clear)
      , a = H(h=>h.clear)
      , o = ln(h=>h.setTheme)
      , l = Fe(h=>h.setLanguage)
      , c = D(h=>h.importSubtitleLanguage)
      , u = z(h=>h.replaceBookmarks)
      , m = H(h=>h.replaceItems)
      , p = d.useCallback(async(h,v,b,y)=>{
        const j = {
            token: h.token,
            userId: v.id,
            sessionId: h.session.id,
            deviceName: b.device,
            profile: v.profile,
            seed: y
        };
        return t(j),
        j
    }
    , [t])
      , g = d.useCallback(async()=>{
        s(),
        i(),
        a()
    }
    , [s, i, a])
      , f = d.useCallback(async(h,v,b,y,j)=>{
        u(Xo(y)),
        m(Zo(b)),
        j.applicationLanguage && l(j.applicationLanguage),
        j.defaultSubtitleLanguage && c(j.defaultSubtitleLanguage),
        j.applicationTheme && o(j.applicationTheme),
        j.proxyUrls && r(j.proxyUrls)
    }
    , [u, m, l, c, o, r]);
    return {
        loggedIn: e,
        login: p,
        logout: g,
        syncData: f
    }
}
function he() {
    return U(t=>t.backendUrl) ?? _().BACKEND_URL
}
function Ne() {
    const e = U(g=>g.account)
      , t = U(g=>{
        var f;
        return (f = g.account) == null ? void 0 : f.profile
    }
    )
      , s = !!U(g=>g.account)
      , r = he()
      , {logout: i, login: a, syncData: o} = sl()
      , l = d.useCallback(async g=>{
        const f = await Un(g.mnemonic)
          , h = Vt(f.publicKey)
          , {challenge: v} = await Vo(r, h)
          , b = await $n(f, v)
          , y = await Ho(r, {
            challenge: {
                code: v,
                signature: b
            },
            publicKey: h,
            device: await Hn(g.userData.device, f.seed)
        })
          , j = await Wn(r, y.token)
          , T = $t(f.seed);
        return a(y, j.user, j.session, T)
    }
    , [a, r])
      , c = d.useCallback(async()=>{
        if (e) {
            try {
                await Yo(r, e.token, e.sessionId)
            } catch {}
            await i()
        }
    }
    , [i, r, e])
      , u = d.useCallback(async g=>{
        const {challenge: f} = await Go(r, g.recaptchaToken)
          , h = await Un(g.mnemonic)
          , v = await $n(h, f)
          , b = await qo(r, {
            challenge: {
                code: f,
                signature: v
            },
            publicKey: Vt(h.publicKey),
            device: await Hn(g.userData.device, h.seed),
            profile: g.userData.profile
        });
        return a(b, b.user, b.session, $t(h.seed))
    }
    , [r, a])
      , m = d.useCallback(async(g,f,h)=>{
        if (Object.keys(f).length === 0 && Object.keys(h).length === 0)
            return;
        const v = Object.entries(f).flatMap(y=>{
            let[j,T] = y;
            return zo(j, T)
        }
        )
          , b = Object.entries(h).map(y=>{
            let[j,T] = y;
            return Ao(j, T)
        }
        );
        await Uo(r, g, v),
        await $o(r, g, b)
    }
    , [r])
      , p = d.useCallback(async g=>{
        var y, j, T;
        let f;
        try {
            f = await Wn(r, g.token)
        } catch (L) {
            const w = L;
            if (((y = w == null ? void 0 : w.response) == null ? void 0 : y.status) === 401 || ((j = w == null ? void 0 : w.response) == null ? void 0 : j.status) === 403 || ((T = w == null ? void 0 : w.response) == null ? void 0 : T.status) === 400) {
                await c();
                return
            }
            throw console.error(L),
            L
        }
        const h = await el(r, g)
          , v = await tl(r, g)
          , b = await Jo(r, g);
        o(f.user, f.session, v, h, b)
    }
    , [r, o, c]);
    return {
        loggedIn: s,
        profile: t,
        login: l,
        logout: c,
        register: u,
        restore: p,
        importData: m
    }
}
const rl = 12 * 60 * 60 * 1e3;
function il() {
    const {account: e} = U()
      , {restore: t} = Ne()
      , s = d.useRef(!1);
    return ys(()=>{
        e && t(e)
    }
    , rl),
    mt(async()=>{
        s.current || !e || await t(e).finally(()=>{
            s.current = !0
        }
        )
    }
    , [])
}
function cn(e) {
    return n.jsxs("div", {
        className: "bg-pill-background bg-opacity-50 px-4 py-2 rounded-full text-white flex justify-center items-center",
        children: [n.jsx(I, {
            icon: e.icon ?? k.WAND,
            className: "mr-3 text-xl text-type-link"
        }), e.children]
    })
}
function Oe(e) {
    return n.jsx("h2", {
        className: S("text-white text-3xl font-bold text-opacity-100 mt-6", e.className),
        children: e.children
    })
}
const pt = "pb-4 border-b border-utils-divider border-opacity-50";
function un(e) {
    return n.jsx("h1", {
        children: e.children
    })
}
function $e(e) {
    return n.jsx("h2", {
        className: ["text-xl lg:text-2xl font-bold text-white mt-20 mb-9", e.border ? pt : null, e.className ?? ""].join(" "),
        children: e.children
    })
}
function sh(e) {
    return n.jsx("h2", {
        className: ["text-lg lg:text-xl font-bold text-white mb-3", e.border ? pt : null, e.className ?? ""].join(" "),
        children: e.children
    })
}
function we(e) {
    return n.jsx("p", {
        className: ["text-type-text my-9 font-medium", e.border ? pt : null, e.className ?? ""].join(" "),
        children: e.children
    })
}
function dn(e) {
    return n.jsx("div", {
        className: S("w-full p-6 text-center flex flex-col items-center", e.maxWidth ?? "max-w-[28rem]"),
        children: e.children
    })
}
function mn(e) {
    return n.jsx("div", {
        className: "w-full h-full flex justify-center items-center flex-col",
        children: e.children
    })
}
function al(e, t) {
    return e === "slide-down" ? {
        leave: `transition-[transform,opacity] ${t}`,
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "-translate-y-4 opacity-0",
        enter: `transition-[transform,opacity] ${t}`,
        enterFrom: "opacity-0 -translate-y-4",
        enterTo: "translate-y-0 opacity-100"
    } : e === "slide-up" ? {
        leave: `transition-[transform,opacity] ${t}`,
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "translate-y-4 opacity-0",
        enter: `transition-[transform,opacity] ${t}`,
        enterFrom: "opacity-0 translate-y-4",
        enterTo: "translate-y-0 opacity-100"
    } : e === "slide-full-left" ? {
        leave: `transition-[transform] ${t}`,
        leaveFrom: "translate-x-0",
        leaveTo: "-translate-x-full",
        enter: `transition-[transform] ${t}`,
        enterFrom: "-translate-x-full",
        enterTo: "translate-x-0"
    } : e === "slide-full-right" ? {
        leave: `transition-[transform] ${t}`,
        leaveFrom: "translate-x-0",
        leaveTo: "translate-x-full",
        enter: `transition-[transform] ${t}`,
        enterFrom: "translate-x-full",
        enterTo: "translate-x-0"
    } : e === "fade" ? {
        leave: `transition-[transform,opacity] ${t}`,
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        enter: `transition-[transform,opacity] ${t}`,
        enterFrom: "opacity-0",
        enterTo: "opacity-100"
    } : {}
}
function Q(e) {
    const t = e.durationClass ?? "duration-200"
      , s = al(e.animation, t);
    return e.isChild ? n.jsx(Mt.Child, {
        as: d.Fragment,
        ...s,
        children: n.jsx("div", {
            className: e.className,
            style: e.style,
            children: e.children
        })
    }) : n.jsx(Mt, {
        show: e.show,
        as: d.Fragment,
        ...s,
        children: n.jsx("div", {
            className: e.className,
            style: e.style,
            children: e.children
        })
    })
}
function ol() {
    const e = De();
    return d.useMemo(()=>Object.fromEntries(new URLSearchParams(e.search).entries()), [e.search])
}
function hn(e) {
    const t = ol()
      , s = De()
      , r = ee()
      , i = t[e] ?? null
      , a = d.useCallback(o=>{
        const l = new URLSearchParams(s.search);
        o ? l.set(e, o) : l.delete(e),
        r({
            search: l.toString()
        })
    }
    , [e, s.search, r]);
    return [i, a]
}
const ke = G(q(e=>({
    transition: null,
    routes: {},
    anchorPoint: null,
    setTransition(t) {
        e(s=>{
            s.transition = t
        }
        )
    },
    registerRoute(t) {
        e(s=>{
            s.routes[t.id] = t
        }
        )
    },
    setAnchorPoint(t) {
        e(s=>{
            s.anchorPoint = t
        }
        )
    }
})));
function ge(e, t) {
    return [t ?? "", ...e.split("/")].filter(r=>r.length > 0)
}
function xe(e) {
    return `/${e.join("/")}`
}
function ll(e) {
    const [t] = hn("r")
      , s = ke(a=>a.setAnchorPoint)
      , r = d.useMemo(()=>!!t && t.startsWith(`/${e}`), [t, e])
      , i = d.useCallback(()=>{
        if (!r)
            return;
        const a = document.getElementById(`__overlayRouter::${e}`);
        if (a) {
            const o = a.getBoundingClientRect();
            s({
                h: o.height,
                w: o.width,
                x: o.x,
                y: o.y
            })
        }
    }
    , [r, s, e]);
    d.useEffect(()=>{
        i()
    }
    , [r, i]),
    d.useEffect(()=>{
        function a() {
            i()
        }
        return window.addEventListener("resize", a),
        ()=>{
            window.removeEventListener("resize", a)
        }
    }
    , [i])
}
function Se(e) {
    const [t,s] = hn("r")
      , r = ke(h=>h.transition)
      , i = ke(h=>h.setTransition)
      , a = !!t && t.startsWith(`/${e}`);
    function o(h) {
        return xe(ge(h, e))
    }
    function l(h) {
        const v = t
          , b = xe(ge(h, e));
        i({
            from: v ?? "/",
            to: b
        }),
        s(b)
    }
    function c(h) {
        if (!r)
            return "none";
        const v = xe(ge(h, e));
        return v === r.to && r.from.startsWith(r.to) || v === r.from && r.to.startsWith(r.from) ? "yes" : "no"
    }
    function u(h) {
        return a && t === xe(ge(h, e))
    }
    function m() {
        return a
    }
    const p = d.useCallback(h=>{
        t && !h && s(null),
        i(null)
    }
    , [s, t, i])
      , g = d.useCallback(function() {
        let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
        i(null),
        s(xe(ge(h, e)))
    }, [e, s, i]);
    return {
        activeRoute: a ? xe(ge(t.slice(`/${e}`.length))) : "/",
        showBackwardsTransition: c,
        isCurrentPage: u,
        isOverlayActive: m,
        navigate: l,
        close: p,
        open: g,
        makePath: o,
        currentRoute: t
    }
}
function B(e) {
    const t = Se(e);
    return {
        id: e,
        route: t.activeRoute,
        isRouterActive: t.isOverlayActive(),
        open: t.open,
        close: t.close,
        navigate: t.navigate
    }
}
const cl = function() {
    const {t} = C()
      , [s,r] = d.useState(!1);
    return n.jsx("div", {
        className: S("absolute w-10/12 max-w-[800px] bg-background-main p-20 rounded-lg select-none z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform", s ? "" : "hidden"),
        children: n.jsxs("div", {
            className: "w-full grid lg:grid-cols-[1fr,auto] gap-12 items-center",
            children: [n.jsxs("div", {
                className: "text-left",
                children: [n.jsx("h2", {
                    className: "text-type-emphasis font-bold text-xl mb-6",
                    children: t("player.turnstile.title")
                }), n.jsx("p", {
                    children: t("player.turnstile.description")
                })]
            }), n.jsx(Is, {
                isInPopout: !0,
                onUpdateShow: i=>r(i)
            })]
        })
    })
}
  , ul = cl;
function dl(e) {
    const t = Se("hello world :)")
      , s = d.useRef(t);
    return d.useEffect(()=>{
        const r = s.current;
        return r.close(),
        ()=>{
            r.close()
        }
    }
    , []),
    n.jsxs("div", {
        className: "popout-location",
        children: [n.jsx(ul, {}), e.children]
    })
}
function Ys(e) {
    const [t,s] = d.useState(null)
      , r = d.useRef(null)
      , i = e.close;
    return d.useEffect(()=>{
        var o;
        const a = (o = r.current) == null ? void 0 : o.closest(".popout-location");
        s(a ?? document.body)
    }
    , []),
    n.jsx("div", {
        ref: r,
        children: t ? di.createPortal(n.jsx(Q, {
            show: e.show,
            animation: "none",
            children: n.jsx(mi, {
                children: n.jsxs("div", {
                    className: "popout-wrapper fixed overflow-hidden pointer-events-auto inset-0 z-[999] select-none",
                    children: [n.jsx(Q, {
                        animation: "fade",
                        isChild: !0,
                        children: n.jsx("div", {
                            onClick: i,
                            className: S({
                                "absolute inset-0": !0,
                                "bg-black opacity-90": e.darken
                            })
                        })
                    }), n.jsxs(Q, {
                        animation: "slide-up",
                        className: "absolute inset-0 pointer-events-none",
                        isChild: !0,
                        children: [n.jsx("div", {
                            tabIndex: 1,
                            className: "focus:ring-0 focus:outline-none opacity-0"
                        }), e.children]
                    })]
                })
            })
        }), t) : null
    })
}
function Js(e) {
    const t = Se(e.id)
      , s = t.close;
    ll(e.id);
    const r = d.useCallback(()=>{
        s()
    }
    , [s]);
    return n.jsx(Ys, {
        close: r,
        show: t.isOverlayActive(),
        darken: e.darken,
        children: e.children
    })
}
function Xs(e) {
    const [t,s] = hn("m")
      , r = d.useCallback(()=>s(e), [e, s])
      , i = d.useCallback(()=>s(null), [s]);
    return {
        id: e,
        isShown: t === e,
        show: r,
        hide: i
    }
}
function rh(e) {
    return n.jsx("div", {
        className: "w-full max-w-[30rem] m-4",
        children: n.jsx("div", {
            className: "w-full bg-dropdown-background rounded-xl p-8 pointer-events-auto",
            children: e.children
        })
    })
}
function ml(e) {
    const t = Xs(e.id);
    return n.jsxs(Ys, {
        darken: !0,
        close: t.hide,
        show: t.isShown,
        children: [n.jsx(le, {
            children: n.jsx("html", {
                "data-no-scroll": !0
            })
        }), n.jsx("div", {
            className: "flex absolute inset-0 items-center justify-center flex-col",
            children: e.children
        })]
    })
}
const hl = function(t) {
    const [s,r] = d.useState(!1)
      , i = d.useRef(null)
      , {t: a} = C();
    let o = null;
    typeof t.error == "string" ? o = t.error : t.error.key ? o = `${t.error.type}: ${a(t.error.key)}` : t.error.message && (o = `${t.error.type}: ${a(t.error.message)}`);
    function l() {
        !t.error || !navigator.clipboard || (navigator.clipboard.writeText(`\`\`\`${o}\`\`\``),
        r(!0),
        i.current && clearTimeout(i.current),
        i.current = setTimeout(()=>r(!1), 2e3))
    }
    return n.jsxs("div", {
        className: "bg-errors-card w-full rounded-lg p-6 text-left",
        children: [n.jsxs("div", {
            className: "border-errors-border flex items-center justify-between border-b pb-2",
            children: [n.jsx("span", {
                className: "font-medium text-white",
                children: a("errors.details")
            }), n.jsxs("div", {
                className: "flex items-center justify-center gap-3",
                children: [n.jsx(M, {
                    theme: "secondary",
                    padding: "p-2 h-10 min-w-[40px] md:px-4",
                    onClick: ()=>l(),
                    children: s ? n.jsxs(n.Fragment, {
                        children: [n.jsx(I, {
                            icon: k.CHECKMARK,
                            className: "text-xs"
                        }), n.jsx("span", {
                            className: "hidden min-[400px]:inline-block ml-3",
                            children: a("actions.copied")
                        })]
                    }) : n.jsxs(n.Fragment, {
                        children: [n.jsx(I, {
                            icon: k.COPY,
                            className: "text-2xl"
                        }), n.jsx("span", {
                            className: "hidden min-[400px]:inline-block ml-3",
                            children: a("actions.copy")
                        })]
                    })
                }), n.jsx(M, {
                    theme: "secondary",
                    padding: "p-2 md:px-2",
                    onClick: t.onClose,
                    children: n.jsx(I, {
                        icon: k.X,
                        className: "text-2xl"
                    })
                })]
            })]
        }), n.jsx("div", {
            className: "pointer-events-auto mt-4 h-60 select-text overflow-y-auto whitespace-pre text-left",
            children: o
        })]
    })
}
  , Zs = hl;
function fl(e) {
    return !e.show || !e.error ? null : n.jsx("div", {
        className: "fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 p-12",
        children: n.jsx("div", {
            className: "w-full max-w-2xl",
            children: n.jsx(Zs, {
                error: e.error,
                onClose: e.onClose
            })
        })
    })
}
function gl(e) {
    return e.error ? n.jsx(ml, {
        id: e.id,
        children: n.jsx("div", {
            className: "pointer-events-auto w-11/12 max-w-2xl",
            children: n.jsx(Zs, {
                error: e.error,
                onClose: e.onClose
            })
        })
    }) : null
}
function xl(e) {
    const {t} = C()
      , [s,r] = d.useState(!1)
      , i = 5
      , a = (e.errorInfo.componentStack || "").split(`
`).slice(0, i)
      , o = `${e.error.toString()}
${a.join(`
`)}`;
    return n.jsx("div", {
        className: "relative flex min-h-screen flex-1 flex-col",
        children: n.jsx("div", {
            className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
            children: n.jsx(mn, {
                children: n.jsxs(dn, {
                    maxWidth: "max-w-2xl w-9/10",
                    children: [n.jsx(cn, {
                        icon: k.EYE_SLASH,
                        children: t("errors.badge")
                    }), n.jsx(Oe, {
                        children: t("errors.title")
                    }), n.jsx(we, {
                        children: e.error.toString()
                    }), n.jsx(fl, {
                        show: s,
                        onClose: ()=>r(!1),
                        error: o
                    }), n.jsxs("div", {
                        className: "flex gap-3",
                        children: [n.jsx(Fn, {
                            theme: "secondary",
                            className: "mt-6 p-2.5 md:px-12",
                            onClick: ()=>window.location.reload(),
                            children: t("errors.reloadPage")
                        }), n.jsx(Fn, {
                            theme: "purple",
                            className: "mt-6 p-2.5 md:px-12",
                            onClick: ()=>r(!0),
                            children: t("errors.showError")
                        })]
                    })]
                })
            })
        })
    })
}
class pl extends d.Component {
    constructor(t) {
        super(t),
        this.state = {
            error: void 0
        }
    }
    componentDidCatch(t, s) {
        console.error("Render error caught", t, s),
        this.setState(r=>({
            ...r,
            error: {
                error: t,
                errorInfo: s
            }
        }))
    }
    render() {
        return this.state.error ? n.jsx(xl, {
            error: this.state.error.error,
            errorInfo: this.state.error.errorInfo
        }) : this.props.children
    }
}
function Ce(e) {
    const {t} = C();
    return n.jsxs("div", {
        
        })
    }

function er(e) {
    return n.jsx("div", {
        className: `mx-auto max-w-full px-8 ${e.ultraWide ? "w-[1300px] sm:px-16" : "w-[900px] sm:px-8"} ${e.classNames || ""}`,
        children: e.children
    })
}
function bt(e) {
    return n.jsx("div", {
        className: `mx-auto w-[600px] max-w-full px-8 sm:px-0 ${e.classNames || ""}`,
        children: e.children
    })
}
function yt(e) {
    const {t} = C()
      , s = t(e.k)
      , r = t("global.pages.pagetitle", {
        title: s
    });
    return n.jsx(le, {
        children: n.jsx("title", {
            children: e.subpage ? r : s
        })
    })
}
function tr() {
    return !!_().DMCA_EMAIL
}
function bl() {
    const {t: e} = C();
    return n.jsxs(Ve, {
        children: [n.jsx(yt, {
            subpage: !0,
            k: "global.pages.dmca"
        }), n.jsxs(bt, {
            children: [n.jsx(un, {
                children: e("screens.dmca.title")
            }), n.jsx(we, {
                children: e("screens.dmca.text")
            }), n.jsxs(we, {
                className: "flex space-x-3 items-center",
                children: [n.jsx(I, {
                    icon: k.MAIL
                }), n.jsx("span", {
                    children: _().DMCA_EMAIL ?? ""
                })]
            })]
        })]
    })
}
function Ht(e) {
    const t = ee()
      , s = d.useCallback(()=>{
        e.to && t(e.to)
    }
    , [t, e.to]);
    return n.jsxs("a", {
        href: e.href,
        target: e.href ? "_blank" : void 0,
        rel: "noreferrer",
        className: "tabbable rounded py-2 px-3 inline-flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-type-emphasis",
        onClick: e.to ? s : void 0,
        children: [n.jsx(I, {
            icon: e.icon,
            
        })]
    })
}
function zn() {
    const {t: e} = C();
    return tr() ? n.jsx(Ht, {
        to: "/dmca",
        icon: k.DRAGON,
        children: e("footer.links.dmca")
    }) : null
}
function yl() {
    const {t: e} = C();
    return n.jsx("footer", {
        className: "mt-16 border-t border-type-divider py-16 md:py-8",
        children: n.jsxs(er, {
            ultraWide: !0,
            classNames: "grid md:grid-cols-2 gap-16 md:gap-8",
            children: [n.jsxs("div", {
                children: [n.jsx("div", {
                    className: "inline-block",
                    children: n.jsx(Ce, {})
                }), n.jsx("p", {
                    className: "mt-4 lg:max-w-[400px]",
                    children: e("footer.tagline")
                })]
            }), n.jsxs("div", {
                className: "md:text-right",
                children: [n.jsx("h3", {
                    className: "font-semibold text-type-emphasis",
                    children: e("footer.legal.disclaimer")
                }), n.jsx("p", {
                    className: "mt-3",
                    children: e("footer.legal.disclaimerText")
                })]
            }), n.jsxs("div", {
                className: "flex flex-wrap gap-[0.5rem] -ml-3",
                children: [n.jsx(Ht, {
                    icon: k.GITHUB,
                    href: _().GITHUB_LINK,
                    children: e("footer.links.github")
                }), n.jsx(Ht, {
                    icon: k.DISCORD,
                    href: _().DISCORD_LINK,
                    children: e("footer.links.discord")
                }), n.jsx("div", {
                    className: "inline md:hidden",
                    children: n.jsx(zn, {})
                })]
            }), n.jsx("div", {
                className: "hidden items-center justify-end md:flex -mr-3",
                children: n.jsx(zn, {})
            })]
        })
    })
}
function nr(e) {
    return n.jsxs("div", {
        className: ["flex min-h-screen flex-col", e.className || ""].join(" "),
        children: [n.jsx("div", {
            style: {
                flex: "1 0 auto"
            },
            children: e.children
        }), n.jsx(yl, {})]
    })
}
function sr(e) {
    return n.jsxs("div", {
        className: "relative inline-block",
        children: [n.jsx("div", {
            className: S(e.sizeClass, "rounded-full overflow-hidden flex items-center justify-center text-white"),
            style: {
                background: `linear-gradient(to bottom right, ${e.profile.colorA}, ${e.profile.colorB})`
            },
            children: n.jsx(js, {
                className: e.iconClass,
                icon: e.profile.icon
            })
        }), e.bottom ? n.jsx("div", {
            className: "absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2",
            children: e.bottom
        }) : null]
    })
}
function rr(e) {
    const t = U()
      , s = d.useMemo(()=>t.account && t.account.seed ? on(t.account.seed) : null, [t]);
    if (!t.account || t.account === null)
        return null;
    const r = s ? Gs(t.account.deviceName, s) : "...";
    return n.jsxs(n.Fragment, {
        children: [n.jsx(sr, {
            profile: t.account.profile,
            sizeClass: e.sizeClass ?? "w-[1.5rem] h-[1.5rem] ssm:w-[2rem] ssm:h-[2rem]",
            iconClass: e.iconClass,
            bottom: e.bottom
        }), e.withName && s ? n.jsx("span", {
            className: "hidden md:inline-block",
            children: r.length >= 20 ? `${r.slice(0, 19)}…` : r
        }) : null]
    })
}
function vl(e) {
    return n.jsx("div", {
        className: "relative inline-block p-1 text-type-dimmed",
        children: n.jsx(I, {
            className: e.iconClass ?? "text-base ssm:text-xl",
            icon: k.MENU
        })
    })
}
const jl = function(t) {
    const s = t.clickable ? "cursor-pointer hover:scale-110 hover:bg-pill-backgroundHover hover:text-white active:scale-125" : ""
      , r = t.transparent ? "bg-opacity-0 hover:bg-opacity-50" : ""
      , i = t.active ? "bg-pill-backgroundHover text-white" : ""
      , a = t.downsized ? "h-10 w-10" : "h-12 w-12";

        }
    

  , lt = jl;
function Qn() {
    return n.jsx("hr", {
        className: "border-0 w-full h-px bg-dropdown-border"
    })
}
const wl = function(t) {
    const s = ee()
      , r = i=>{
        i.startsWith("http") ? window.open(i, "_blank") : s(i)
    }
    ;
    return n.jsx("a", {
        tabIndex: 0,
        href: t.href,
        onClick: i=>{
            var a;
            i.preventDefault(),
            t.href ? r(t.href) : (a = t.onClick) == null || a.call(t)
        }
        ,
        className: t.className,
        children: t.children
    })
}
  , ir = wl;
function pe(e) {
    return n.jsxs(ir, {
        onClick: e.onClick,
        href: e.href,
        className: S("tabbable cursor-pointer flex gap-3 items-center m-3 p-1 rounded font-medium transition-colors duration-100", e.highlight ? "text-dropdown-highlight hover:text-dropdown-highlightHover" : "text-dropdown-text hover:text-white", e.className),
        children: [e.icon ? n.jsx(I, {
            icon: e.icon,
            
        }) : null, e.children]
    })
}
function It(e) {
    return n.jsx(ir, {
        href: e.href,
        className: "tabbable w-11 h-11 rounded-full bg-dropdown-contentBackground text-dropdown-text hover:text-white transition-colors duration-100 flex justify-center items-center",
        children: n.jsx(I, {
            className: "text-2xl",
            icon: e.icon
        })
    })
}
function kl(e) {
    const {t} = C()
      , [s,r] = d.useState(!1)
      , i = U(u=>{
        var m;
        return (m = u.account) == null ? void 0 : m.deviceName
    }
    )
      , a = U(u=>{
        var m;
        return (m = u.account) == null ? void 0 : m.seed
    }
    )
      , o = d.useMemo(()=>a ? on(a) : null, [a])
      , {logout: l} = Ne();
    d.useEffect(()=>{
        function u(m) {
            m.target.closest(".is-dropdown") || r(!1)
        }
        return window.addEventListener("click", u),
        ()=>window.removeEventListener("click", u)
    }
    , []);
    const c = d.useCallback(()=>{
        r(u=>!u)
    }
    , []);
    return n.jsxs("div", {
      className: "relative is-dropdown",
      children: [n.jsxs("div", {
          className: "cursor-pointer tabbable rounded-full flex gap-2 text-white items-center py-2 px-3 bg-pill-background bg-opacity-50 hover:bg-pill-backgroundHover transition-[background,transform] duration-100 hover:scale-105",
          tabIndex: 0,
          onClick: c,
          onKeyUp: u => u.key === "Enter" && c(),
          children: [e.children, n.jsx(I, {
              className: S("text-xl transition-transform duration-100", s ? "rotate-180" : ""),
              icon: k.CHEVRON_DOWN
          })]
      }), n.jsx(Q, {
          animation: "slide-down",
          show: s,
          children: n.jsxs("div", {
              className: "rounded-lg absolute w-64 bg-dropdown-altBackground top-full mt-3 right-0",
              children: [i && o ? n.jsxs(pe, {
                  className: "text-white",
                  href: "/settings",
                  children: [n.jsx(rr, {}), Gs(i, o)]
                }): n.jsx(pe, {
                    href: "/",
                    icon: k.CIRCLE_QUESTION,
                    children: t("navigation.menu.about")
            
             
              }), n.jsx(Qn, {}), n.jsx(pe, {
                  href: "/settings",
                  icon: k.SETTINGS,
                  children: t("navigation.menu.settings")
              
              }), n.jsx(pe, {
                  href: _().DONATION_LINK,
                  icon: k.LINK,
                  children: t("Download")
                }) , n.jsx(pe, {
                    href: "/login",
                    icon: k.RISING_STAR,
                    highlight: !0,
                    children: t("navigation.menu.register")
              }), i ? n.jsx(pe, {
                  className: "!text-type-danger opacity-75 hover:opacity-100",
                  icon: k.LOGOUT,
                  onClick: l,
                  children: t("navigation.menu.logout")
              
              }) : null, n.jsx(Qn, {}), []]  // Replace "(It, {" with an empty array
          })
      })]
  });
}  
class Nl {
    constructor(t) {
        this.x = 0,
        this.y = 0,
        this.radius = 0,
        this.direction = 0,
        this.speed = 0,
        this.lifetime = 0,
        this.ran = 0,
        this.image = null,
        this.size = 10;
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            horizontalMotion: !1,
            sizeRange: [10, 10]
        };
        s.imgSrc && (this.image = new Image,
        this.image.src = s.imgSrc),
        this.options = s,
        this.reset(t),
        this.initialize(t)
    }
    reset(t) {
        this.x = Math.round(Math.random() * t.width / 2 + t.width / 4),
        this.y = Math.random() * 100 + 5,
        this.radius = 1 + Math.floor(Math.random() * .5),
        this.direction = Math.random() * Math.PI / 2 + Math.PI / 4,
        this.speed = .02 + Math.random() * .08;
        const s = 60;
        this.lifetime = s * 3 + Math.random() * (s * 30),
        this.size = this.options.sizeRange ? Math.random() * (this.options.sizeRange[1] - this.options.sizeRange[0]) + this.options.sizeRange[0] : 10,
        this.options.horizontalMotion && (this.direction = Math.random() <= .5 ? 0 : Math.PI,
        this.lifetime = 30 * s),
        this.ran = 0
    }
    initialize(t) {
        this.ran = Math.random() * this.lifetime;
        const s = this.speed;
        this.speed = Math.random() * this.lifetime * s,
        this.update(t),
        this.speed = s
    }
    update(t) {
        this.ran += 1;
        const s = this.speed * Math.cos(this.direction)
          , r = this.speed * Math.sin(this.direction);
        this.x += s,
        this.y += r,
        this.ran > this.lifetime && this.reset(t)
    }
    render(t) {
        const s = t.getContext("2d");
        if (!s)
            return;
        s.save(),
        s.beginPath();
        const r = this.ran / this.lifetime
          , i = (r - r * r) * 4;
        if (s.globalAlpha = Math.max(0, i * .8),
        this.image) {
            s.translate(this.x, this.y);
            const a = this.size
              , o = this.image.naturalWidth / this.image.naturalHeight * a;
            s.rotate(this.direction - Math.PI),
            s.drawImage(this.image, -a / 2, o, o, a)
        } else
            s.ellipse(this.x, this.y, this.radius, this.radius * 1.5, this.direction, 0, Math.PI * 2),
            s.fillStyle = "white",
            s.fill();
        s.restore()
    }
}
function Sl() {
    const e = d.useRef(null);
    return d.useEffect(()=>{
        var h, v;
        if (!e.current)
            return;
        const t = e.current
          , s = [];
        t.width = t.scrollWidth,
        t.height = t.scrollHeight;
        const r = 20;
        let i = r
          , a = [];
        const o = new Date
          , l = o.getMonth()
          , c = o.getDate();
        l === 11 && c >= 24 && c <= 26 && (a = [{
            image: "/lightbar-images/snowflake.svg",
            sizeRange: [4, 15]
        }, {
            image: "/lightbar-images/santa.png",
            sizeRange: [15, 30]
        }]),
        Math.floor(Math.random() * 600) === 69 && (a = [{
            image: "/lightbar-images/fishie.png",
            sizeRange: [10, 11]
        }],
        i = r / 2);
        for (let b = 0; b < r; b += 1) {
            const y = a && b <= i
              , j = Math.floor(Math.random() * a.length)
              , T = (h = a[j]) == null ? void 0 : h.sizeRange
              , L = (v = a[j]) == null ? void 0 : v.image
              , w = new Nl(t,{
                imgSrc: y ? L : void 0,
                horizontalMotion: L == null ? void 0 : L.includes("fishie"),
                sizeRange: T
            });
            s.push(w)
        }
        let m = !0
          , p = null;
        function g() {
            if (t.getContext("2d")) {
                if (m) {
                    for (const y of s)
                        y.update(t);
                    m = !1
                }
                t.width = t.scrollWidth,
                t.height = t.scrollHeight;
                for (const y of s)
                    y.render(t);
                p = requestAnimationFrame(g)
            }
        }
        const f = setInterval(()=>{
            m = !0
        }
        , 1e3 / 120);
        return g(),
        ()=>{
            p && cancelAnimationFrame(p),
            clearInterval(f)
        }
    }
    , []),
    n.jsx("canvas", {
        className: "particles",
        ref: e
    })
}
const Cl = function(t) {
    return n.jsx("div", {
        className: "absolute inset-0 w-full h-[680px] overflow-hidden pointer-events-none -mt-64",
        children: n.jsx("div", {
            className: "max-w-screen w-full h-[680px] relative pt-64",
            children: n.jsx("div", {
                className: t.className,
                children: n.jsxs("div", {
                    className: "lightbar",
                    children: [n.jsx(Sl, {}), n.jsx("div", {
                        className: "lightbar-visual"
                    })]
                })
            })
        })
    })
}
  , El = Cl
  , ne = G(q(e=>({
    banners: [],
    isOnline: !0,
    isTurnstile: !1,
    location: null,
    updateOnline(t) {
        e(s=>{
            s.isOnline = t
        }
        )
    },
    updateTurnstile(t) {
        e(s=>{
            s.isTurnstile = t
        }
        )
    },
    setLocation(t) {
        e(s=>{
            s.location = t
        }
        )
    },
    showBanner(t) {
        e(s=>{
            s.banners.find(r=>r.id === t) || s.banners.push({
                id: t,
                height: 0
            })
        }
        )
    },
    hideBanner(t) {
        e(s=>{
            s.banners = s.banners.filter(r=>r.id !== t)
        }
        )
    },
    updateHeight(t, s) {
        e(r=>{
            const i = r.banners.find(a=>a.id === t);
            i && (i.height = s)
        }
        )
    }
})));
function vt(e) {
    const t = e ?? null
      , s = ne(a=>a.banners)
      , r = ne(a=>a.location)
      , i = s.reduce((a,o)=>a + o.height, 0);
    return t !== r ? 0 : i
}
function Il(e) {
    const [t,{height: s}] = hi()
      , r = ne(o=>o.updateHeight)
      , i = ne(o=>o.showBanner)
      , a = ne(o=>o.hideBanner);
    return d.useEffect(()=>(i(e),
    ()=>{
        a(e)
    }
    ), [i, a, e]),
    d.useEffect(()=>{
        r(e, s)
    }
    , [s, e, r]),
    [t]
}
const Ll = function(t) {
    const s = vt()
      , {loggedIn: r} = Ne();
    return n.jsxs(n.Fragment, {
        children: [t.noLightbar ? null : n.jsx("div", {
            className: "absolute inset-x-0 top-0 flex h-[88px] items-center justify-center",
            style: {
                top: `${s}px`
            },
            children: n.jsx("div", {
                className: "absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0",
                children: n.jsx(El, {})
            })
        }), n.jsx("div", {
            className: "fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]",
            style: {
                top: `${s}px`
            },
            children: n.jsxs("div", {
                className: S("fixed left-0 right-0 h-20 flex items-center", t.doBackground ? "bg-background-main border-b border-utils-divider border-opacity-50" : null),
                children: [t.doBackground ? n.jsx("div", {
                    className: "absolute w-full h-full inset-0 overflow-hidden",
                    children: n.jsx(jt, {
                        positionClass: "absolute"
                    })
                }) : null, n.jsx("div", {
                    className: "opacity-0 absolute inset-0 block h-20 pointer-events-auto"
                }), n.jsx("div", {
                    className: `${t.bg ? "opacity-100" : "opacity-0"} absolute inset-0 block h-24 bg-background-main transition-opacity duration-300`,
                    children: n.jsx("div", {
                        className: "absolute -bottom-24 h-24 w-full bg-gradient-to-b from-background-main to-transparent"
                    })
                })]
            })
        }), n.jsx("div", {
            className: "fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]",
            style: {
                top: `${s}px`
            },
            children: n.jsx("div", {
                className: S("fixed left-0 right-0 flex items-center"),
                children: n.jsxs("div", {
                    className: "px-7 py-5 relative z-[60] flex flex-1 items-center justify-between",
                    children: [n.jsxs("div", {
                        className: "flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto",
                        children: [n.jsx(en, {
                            className: "block tabbable rounded-full text-xs ssm:text-base",
                            to: "/",
                            children: n.jsx(Ce, {
                                clickable: !0
                            })
                        }), n.jsx("a", {
                            href: _().DISCORD_LINK,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-xl text-white tabbable rounded-full",
                            children: n.jsx(lt, {
                                icon: k.DISCORD,
                                clickable: !0,
                                downsized: !0
                            })
                        }), n.jsx("a", {
                            href: _().GITHUB_LINK,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-xl text-white tabbable rounded-full",
                            children: n.jsx(lt, {
                                icon: k.GITHUB,
                                clickable: !0,
                                downsized: !0
                            })
                        })]
                    }), n.jsx("div", {
                        className: "relative pointer-events-auto",
                        children: n.jsx(kl, {
                            children: r ? n.jsx(rr, {
                                withName: !0
                            }) : n.jsx(vl, {})
                        })
                    })]
                })
            })
        })]
    })
}
  , fn = Ll;
function jt(e) {
    return n.jsxs(n.Fragment, {
        children: [n.jsx("div", {
            className: S(e.positionClass ?? "fixed", "top-0 -right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentA blur-[100px] pointer-events-none opacity-25")
        }), n.jsx("div", {
            className: S(e.positionClass ?? "fixed", "top-0 right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentB blur-[100px] pointer-events-none opacity-25")
        })]
    })
}
function Ve(e) {
    return n.jsxs("div", {
        className: "bg-background-main",
        style: {
            backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to) 800px)"
        },
        children: [n.jsx(jt, {}), n.jsxs(nr, {
            children: [n.jsx(fn, {
                doBackground: !0,
                noLightbar: !0
            }), n.jsx("div", {
                className: "mt-40 relative",
                children: e.children
            })]
        })]
    })
}
function Tl() {
    const {t: e} = C();
    return n.jsxs("div", {
        className: "flex flex-col justify-center items-center h-screen text-center font-medium",
        children: [n.jsx(jt, {}), n.jsx("div", {
            className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
            children: n.jsx(Ce, {})
        }), n.jsx(Ue, {}), n.jsx("p", {
            className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
            children: e("screens.migration.inProgress")
        })]
    })
}
function ar(e) {
    return n.jsxs("div", {
        className: "flex flex-col justify-center items-center h-screen text-center font-medium",
        children: [n.jsx(jt, {}), n.jsx("div", {
            className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
            children: n.jsx(Ce, {})
        }), e.iconSlot ? e.iconSlot : null, n.jsx("div", {
            className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
            children: e.children
        })]
    })
}
const Pl = "modulepreload"
  , Rl = function(e) {
    return "/" + e
}
  , Kn = {}
  , wt = function(t, s, r) {
    let i = Promise.resolve();
    if (s && s.length > 0) {
        const a = document.getElementsByTagName("link");
        i = Promise.all(s.map(o=>{
            if (o = Rl(o),
            o in Kn)
                return;
            Kn[o] = !0;
            const l = o.endsWith(".css")
              , c = l ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let p = a.length - 1; p >= 0; p--) {
                    const g = a[p];
                    if (g.href === o && (!l || g.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${o}"]${c}`))
                return;
            const m = document.createElement("link");
            if (m.rel = l ? "stylesheet" : Pl,
            l || (m.as = "script",
            m.crossOrigin = ""),
            m.href = o,
            document.head.appendChild(m),
            l)
                return new Promise((p,g)=>{
                    m.addEventListener("load", p),
                    m.addEventListener("error", ()=>g(new Error(`Unable to preload CSS for ${o}`)))
                }
                )
        }
        ))
    }
    return i.then(()=>t()).catch(a=>{
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = a,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw a
    }
    )
};
function Al() {
    const e = ne(s=>s.updateOnline)
      , t = d.useRef(!0);
    d.useEffect(()=>{
        let s = 0
          , r = null;
        const i = setInterval(()=>{
            if (s += 1,
            t.current && s < 10)
                return;
            s = 0,
            r && r.abort(),
            r = new AbortController;
            const a = r.signal;
            fetch("/ping.txt", {
                signal: a
            }).then(()=>{
                e(!0),
                t.current = !0
            }
            ).catch(o=>{
                o.name !== "AbortError" && (e(!1),
                t.current = !1)
            }
            )
        }
        , 5e3);
        return ()=>{
            clearInterval(i),
            r && r.abort()
        }
    }
    , [e])
}
const Ml = function(t) {
    return n.jsx("ol", {
        children: t.items.map((s,r)=>n.jsxs("li", {
            className: S("grid grid-cols-[auto,1fr] gap-6", r !== t.items.length - 1 ? "pb-12" : void 0),
            children: [n.jsxs("div", {
                className: "relative z-0",
                children: [n.jsx("div", {
                    className: "w-7 h-7 rounded-full bg-about-circle text-about-circleText font-medium flex justify-center items-center relative z-10",
                    children: r + 1
                }), r !== t.items.length - 1 ? n.jsx("div", {
                    className: "h-[calc(100%+1.5rem)] w-px absolute top-6 left-1/2 transform -translate-x-1/2",
                    style: {
                        backgroundImage: "linear-gradient(to bottom, transparent 5px, #1F1F29 5px, #1F1F29 10px)",
                        backgroundSize: "10px 10px",
                        backgroundRepeat: "Repeat"
                    }
                }) : null]
            }), n.jsx("div", {
                children: s
            })]
        }))
    })
}
  , _l = Ml;
function Lt(e) {
    return n.jsxs(n.Fragment, {
        children: [n.jsx("p", {
            className: "text-white mb-2 font-medium",
            children: e.title
        }), n.jsx("div", {
            className: "text-type-text",
            children: e.children
        })]
    })
}
function Ol() {
    const {t: e} = C();
    return n.jsxs(Ve, {
        children: [n.jsx(yt, {
            subpage: !0,
            k: "global.pages.about"
        }), n.jsxs(bt, {
            children: [n.jsx(un, {
                children: e("about.title")
            }), n.jsx(we, {
                children: e("about.description")
            }), n.jsx($e, {
                children: e("about.faqTitle")
            }), n.jsx(_l, {
                items: [n.jsx(Lt, {
                    title: e("about.q1.title"),
                    children: e("about.q1.body")
                }), n.jsx(Lt, {
                    title: e("about.q2.title"),
                    children: e("about.q2.body")
                }), n.jsx(Lt, {
                    title: e("about.q3.title"),
                    children: e("about.q3.body")
                })]
            })]
        })]
    })
}
function gn(e) {
    return n.jsx("hr", {
        className: S("w-full h-px border-0 bg-utils-divider bg-opacity-50", e.marginClass ?? "my-8")
    })
}
function Tt(e) {
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("div", {
            className: "flex",
            children: [n.jsx("p", {
                className: "flex-1 font-bold text-white",
                children: e.name
            }), n.jsx("p", {
                children: e.children
            })]
        }), n.jsx(gn, {
            marginClass: "my-3"
        })]
    })
}
function Dl() {
    const e = _().NORMAL_ROUTER
      , t = _().APP_VERSION
      , s = _().BACKEND_URL;
    return n.jsxs(n.Fragment, {
        children: [n.jsx($e, {
            className: "mb-8 mt-12",
            children: "Configured values"
        }), n.jsx(Tt, {
            name: "Routing mode",
            children: e ? "Normal routing" : "Hash based routing"
        }), n.jsxs(Tt, {
            name: "Application version",
            children: ["v", t]
        }), n.jsx(Tt, {
            name: "Backend URL",
            children: s
        })]
    })
}
function xn(e) {
    return n.jsx("div", {
        className: "bg-video-scraping-card rounded-xl p-8",
        children: e.children
    })
}
function Bl() {
    const e = _().TMDB_READ_API_KEY
      , [t,s] = d.useState({
        hasTested: !1,
        success: !1,
        errorText: ""
    })
      , [r,i] = se(async()=>{
        if (s({
            hasTested: !1,
            success: !1,
            errorText: ""
        }),
        e.length === 0)
            return s({
                hasTested: !0,
                success: !1,
                errorText: "TMDB api key is not set"
            });
        if (!(e.split(".").length > 2))
            return s({
                hasTested: !0,
                success: !1,
                errorText: "TMDB api key is not a read only key"
            });
        try {
            await gt("556574", K.MOVIE)
        } catch {
            return s({
                hasTested: !0,
                success: !1,
                errorText: "Failed to call tmdb, double check api key and your internet connection"
            })
        }
        return s({
            hasTested: !0,
            success: !0,
            errorText: ""
        })
    }
    , [e, s]);
    return n.jsxs(n.Fragment, {
        children: [n.jsx($e, {
            className: "mb-8 mt-12",
            children: "TMDB tests"
        }), n.jsx(xn, {
            children: n.jsxs("div", {
                className: "flex items-center",
                children: [n.jsx("div", {
                    className: "flex-1",
                    children: t.hasTested ? t.success ? n.jsxs("p", {
                        className: "flex items-center",
                        children: [n.jsx(I, {
                            icon: k.CIRCLE_CHECK,
                            className: "text-video-scraping-success mr-2"
                        }), "TMDB is working as expected"]
                    }) : n.jsxs(n.Fragment, {
                        children: [n.jsxs("p", {
                            className: "text-white font-bold w-full mb-3 flex items-center gap-1",
                            children: [n.jsx(I, {
                                icon: k.CIRCLE_EXCLAMATION,
                                className: "text-video-scraping-error mr-2"
                            }), "TMDB is not working"]
                        }), n.jsx("p", {
                            children: t.errorText
                        })]
                    }) : n.jsx("p", {
                        children: "Run the test to validate TMDB"
                    })
                }), n.jsxs(M, {
                    theme: "purple",
                    onClick: i,
                    children: [r.loading ? n.jsx(xt, {
                        className: "text-base mr-2"
                    }) : null, "Test TMDB"]
                })]
            })
        })]
    })
}
function Je(e) {
    return n.jsxs("div", {
        className: "flex mb-2",
        children: [n.jsx(I, {
            icon: e.errored ? k.WARNING : e.success ? k.CIRCLE_CHECK : k.EYE_SLASH,
            className: S({
                "text-xl mr-2 mt-0.5": !0,
                "text-video-scraping-error": e.errored,
                "text-video-scraping-noresult": !e.errored && !e.success,
                "text-video-scraping-success": e.success
            })
        }), n.jsxs("div", {
            className: "flex-1",
            children: [n.jsx("p", {
                className: "text-white font-bold",
                children: e.name
            }), e.errorText ? n.jsx("p", {
                children: e.errorText
            }) : null]
        })]
    })
}
function Fl() {
    const e = d.useMemo(()=>Ts().map((a,o)=>({
        id: o.toString(),
        url: a
    })), [])
      , [t,s] = d.useState([])
      , [r,i] = se(async()=>{
        function a(o, l) {
            s(c=>[...c.filter(u=>u.id !== o), l])
        }
        s([]);
        for (const o of e)
            try {
                if (o.url.endsWith("/")) {
                    a(o.id, {
                        id: o.id,
                        status: "error",
                        error: new Error("URL ends with slash")
                    });
                    continue
                }
                await Os(o.url, "https://postman-echo.com/get", {}),
                a(o.id, {
                    id: o.id,
                    status: "success"
                })
            } catch (l) {
                a(o.id, {
                    id: o.id,
                    status: "error",
                    error: l
                })
            }
    }
    , [e, s]);
    return n.jsxs(n.Fragment, {
        children: [n.jsx($e, {
            className: "!mb-0 mt-12",
            children: "Worker tests"
        }), n.jsxs("p", {
            className: "mb-8 mt-2",
            children: [e.length, " worker(s) registered"]
        }), n.jsxs(xn, {
            children: [e.map((a,o)=>{
                var u;
                const l = t.find(m=>m.id === a.id)
                  , c = `Worker ${o + 1}`;
                return l ? l.status === "error" ? n.jsx(Je, {
                    name: c,
                    errored: !0,
                    errorText: (u = l.error) == null ? void 0 : u.toString()
                }, a.id) : l.status === "success" ? n.jsx(Je, {
                    name: c,
                    success: !0
                }, a.id) : n.jsx(Je, {
                    name: c
                }, a.id) : n.jsx(Je, {
                    name: c
                }, a.id)
            }
            ), n.jsx(gn, {}), n.jsx("div", {
                className: "flex justify-end",
                children: n.jsx(M, {
                    theme: "purple",
                    loading: r.loading,
                    onClick: i,
                    children: "Test workers"
                })
            })]
        })]
    })
}
async function or(e) {
    return A("/meta", {
        baseURL: e
    })
}
function Ul() {
    var a, o, l, c;
    const e = _().BACKEND_URL
      , [t,s] = d.useState({
        hasTested: !1,
        success: !1,
        errorText: "",
        value: null
    })
      , [r,i] = se(async()=>{
        s({
            hasTested: !1,
            success: !1,
            errorText: "",
            value: null
        });
        try {
            const u = await or(e);
            return s({
                hasTested: !0,
                success: !0,
                errorText: "Failed to call backend, double check the URL key and your internet connection",
                value: u
            })
        } catch {
            return s({
                hasTested: !0,
                success: !1,
                errorText: "Failed to call backend, double check the URL key and your internet connection",
                value: null
            })
        }
    }
    , [s]);
    return n.jsxs(n.Fragment, {
        children: [n.jsx($e, {
            className: "mb-8 mt-12",
            children: "Backend API test"
        }), n.jsxs(xn, {
            children: [n.jsx("div", {
                children: n.jsx("div", {
                    className: "flex-1",
                    children: t.hasTested && t.success ? n.jsxs(n.Fragment, {
                        children: [n.jsxs("p", {
                            children: [n.jsx("span", {
                                className: "inline-block w-36 text-white font-medium",
                                children: "Version:"
                            }), (a = t.value) == null ? void 0 : a.version]
                        }), n.jsxs("p", {
                            children: [n.jsx("span", {
                                className: "inline-block w-36 text-white font-medium",
                                children: "Backend name:"
                            }), (o = t.value) == null ? void 0 : o.name]
                        }), n.jsxs("p", {
                            children: [n.jsx("span", {
                                className: "inline-block w-36 text-white font-medium",
                                children: "Description:"
                            }), ((l = t.value) == null ? void 0 : l.description) ?? "Not set"]
                        }), n.jsxs("p", {
                            children: [n.jsx("span", {
                                className: "inline-block w-36 text-white font-medium",
                                children: "Captcha enabled:"
                            }), (c = t.value) != null && c.hasCaptcha ? "Yes" : "No"]
                        }), n.jsx(gn, {})]
                    }) : null
                })
            }), n.jsxs("div", {
                className: "w-full flex gap-6 justify-between items-center",
                children: [t.hasTested ? t.success ? n.jsxs("p", {
                    className: "flex items-center text-md",
                    children: [n.jsx(I, {
                        icon: k.CIRCLE_CHECK,
                        className: "text-video-scraping-success mr-2"
                    }), "Backend is working as expected"]
                }) : n.jsxs("div", {
                    children: [n.jsxs("p", {
                        className: "text-white font-bold w-full mb-3 flex items-center gap-1",
                        children: [n.jsx(I, {
                            icon: k.CIRCLE_EXCLAMATION,
                            className: "text-video-scraping-error mr-2"
                        }), "Backend is not working"]
                    }), n.jsx("p", {
                        children: t.errorText
                    })]
                }) : n.jsx("p", {
                    children: "Run the test to validate backend"
                }), n.jsx(M, {
                    theme: "purple",
                    loading: r.loading,
                    className: "whitespace-nowrap",
                    onClick: i,
                    children: "Test backend"
                })]
            })]
        })]
    })
}
function $l() {
    return n.jsx(Ve, {
        children: n.jsxs(bt, {
            children: [n.jsx(un, {
                children: "Admin tools"
            }), n.jsx(we, {
                children: "Useful tools to test out your current deployment"
            }), n.jsx(Dl, {}), n.jsx(Ul, {}), n.jsx(Fl, {}), n.jsx(Bl, {})]
        })
    })
}
function Vl(e) {
    return n.jsx("div", {
        className: "relative my-4 max-w-[25rem]",
        children: n.jsx(Ke, {
            value: e.selectedItem,
            onChange: e.setSelectedItem,
            children: ()=>n.jsxs(n.Fragment, {
                children: [n.jsxs(Ke.Button, {
                    className: "relative w-full rounded-lg bg-dropdown-background hover:bg-dropdown-hoverBackground py-3 pl-3 pr-10 text-left text-white shadow-md focus:outline-none tabbable cursor-pointer",
                    children: [n.jsxs("span", {
                        className: "flex gap-4 items-center truncate",
                        children: [e.selectedItem.leftIcon ? e.selectedItem.leftIcon : null, e.selectedItem.name]
                    }), n.jsx("span", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: n.jsx(I, {
                            icon: k.UP_DOWN_ARROW,
                            className: "transform transition-transform text-xl text-dropdown-secondary"
                        })
                    })]
                }), n.jsx(Mt, {
                    as: d.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: n.jsx(Ke.Options, {
                        className: "absolute left-0 right-0 top-10 z-[1] mt-4 max-h-60 overflow-auto rounded-md bg-dropdown-background py-1 text-white shadow-lg ring-1 ring-black ring-opacity-5 scrollbar-thin scrollbar-track-background-secondary scrollbar-thumb-type-secondary focus:outline-none sm:top-10",
                        children: e.options.map(t=>n.jsxs(Ke.Option, {
                            className: s=>{
                                let {active: r} = s;
                                return `cursor-pointer flex gap-4 items-center relative select-none py-3 pl-4 pr-4 ${r ? "bg-background-secondaryHover text-type-link" : "text-white"}`
                            }
                            ,
                            value: t,
                            children: [t.leftIcon ? t.leftIcon : null, t.name]
                        }, t.id))
                    })
                })]
            })
        })
    })
}
const Hl = e=>({
    casting: {
        instance: null,
        player: null,
        controller: null,
        setInstance(t) {
            e(s=>{
                s.casting.instance = t
            }
            )
        },
        setPlayer(t) {
            e(s=>{
                s.casting.player = t
            }
            )
        },
        setController(t) {
            e(s=>{
                s.casting.controller = t
            }
            )
        },
        setIsCasting(t) {
            e(s=>{
                s.interface.isCasting = t
            }
            )
        },
        clear() {
            e(t=>{
                t.casting.instance = null
            }
            )
        }
    }
})
  , Wl = {
    unknown: 0,
    360: 10,
    480: 20,
    720: 30,
    1080: 40,
    "4k": 25
}
  , de = Object.entries(Wl).sort((e,t)=>t[1] - e[1]).map(e=>e[0]);
function lr(e, t) {
    if (t.automaticQuality || t.lastChosenQuality === null || t.lastChosenQuality === "unknown")
        return de.find(i=>e.includes(i));
    const s = de.indexOf(t.lastChosenQuality);
    let r;
    for (let i = s; i < de.length; i += 1)
        if (e.includes(de[i])) {
            r = de[i];
            break
        }
    if (r)
        return r;
    for (let i = s; i >= 0; i -= 1)
        if (e.includes(de[i])) {
            r = de[i];
            break
        }
    return r
}
function Wt(e, t) {
    if (e.type === "hls")
        return {
            stream: e,
            quality: null
        };
    if (e.type === "file") {
        const s = Object.entries(e.qualities).filter(i=>(i[1].url.length ?? 0) > 0).map(i=>i[0])
          , r = lr(s, t);
        if (r) {
            const i = e.qualities[r];
            if (i)
                return {
                    stream: i,
                    quality: r
                }
        }
    }
    throw new Error("couldn't select quality")
}
const cr = {
    "4k": "4K",
    1080: "1080p",
    360: "360p",
    480: "480p",
    720: "720p",
    unknown: "unknown"
}
  , zl = Object.keys(cr);
function ur(e) {
    return cr[e]
}
const Ae = G(ce(q(e=>({
    quality: {
        automaticQuality: !0,
        lastChosenQuality: null
    },
    setLastChosenQuality(t) {
        e(s=>{
            s.quality.lastChosenQuality = t
        }
        )
    },
    setAutomaticQuality(t) {
        e(s=>{
            s.quality.automaticQuality = t
        }
        )
    }
})), {
    name: "__MW::quality"
}))
  , R = {
    IDLE: "idle",
    SCRAPING: "scraping",
    PLAYING: "playing",
    SCRAPE_NOT_FOUND: "scrapeNotFound",
    PLAYBACK_ERROR: "playbackError"
};
function dr(e) {
    if (e.type === "show") {
        if (!e.episode || !e.season)
            throw new Error("missing show data");
        return {
            title: e.title,
            releaseYear: e.releaseYear,
            tmdbId: e.tmdbId,
            type: "show",
            imdbId: e.imdbId,
            episode: e.episode,
            season: e.season
        }
    }
    return {
        title: e.title,
        releaseYear: e.releaseYear,
        tmdbId: e.tmdbId,
        type: "movie",
        imdbId: e.imdbId
    }
}
const Ql = (e,t)=>({
    source: null,
    sourceId: null,
    qualities: [],
    captionList: [],
    currentQuality: null,
    status: R.IDLE,
    meta: null,
    caption: {
        selected: null,
        asTrack: !1
    },
    setSourceId(s) {
        e(r=>{
            r.sourceId = s
        }
        )
    },
    setStatus(s) {
        e(r=>{
            r.status = s
        }
        )
    },
    setMeta(s, r) {
        e(i=>{
            i.meta = s,
            i.interface.hideNextEpisodeBtn = !1,
            r && (i.status = r)
        }
        )
    },
    setCaption(s) {
        var i;
        (i = t().display) == null || i.setCaption(s),
        e(a=>{
            a.caption.selected = s
        }
        )
    },
    setSource(s, r, i) {
        let a = [];
        s.type === "file" && (a = Object.keys(s.qualities));
        const o = Ae.getState()
          , l = Wt(s, o.quality);
        e(u=>{
            u.source = s,
            u.qualities = a,
            u.currentQuality = l.quality,
            u.captionList = r
        }
        ),
        t().redisplaySource(i)
    },
    redisplaySource(s) {
        var l;
        const r = t()
          , i = r.currentQuality;
        if (!r.source)
            return;
        const a = Ae.getState()
          , o = Wt(r.source, {
            automaticQuality: a.quality.automaticQuality,
            lastChosenQuality: i
        });
        (l = r.display) == null || l.load({
            source: o.stream,
            startAt: s,
            automaticQuality: a.quality.automaticQuality,
            preferredQuality: a.quality.lastChosenQuality
        })
    },
    switchQuality(s) {
        var i, a;
        const r = t();
        if (r.source)
            if (r.source.type === "file") {
                const o = r.source.qualities[s];
                if (!o)
                    return;
                e(l=>{
                    l.currentQuality = s
                }
                ),
                (i = r.display) == null || i.load({
                    source: o,
                    startAt: r.progress.time,
                    automaticQuality: !1,
                    preferredQuality: s
                })
            } else
                r.source.type === "hls" && ((a = r.display) == null || a.changeQuality(!1, s))
    },
    enableAutomaticQuality() {
        var r;
        (r = t().display) == null || r.changeQuality(!0, null)
    }
})
  , Kl = (e,t)=>({
    display: null,
    setDisplay(s) {
        const r = t().display;
        if (r && r.destroy(),
        !s) {
            e(i=>{
                i.display = null
            }
            );
            return
        }
        s.on("pause", ()=>e(i=>{
            i.mediaPlaying.isPaused = !0,
            i.mediaPlaying.isPlaying = !1
        }
        )),
        s.on("play", ()=>e(i=>{
            i.mediaPlaying.hasPlayedOnce = !0,
            i.mediaPlaying.isPaused = !1,
            i.mediaPlaying.isPlaying = !0
        }
        )),
        s.on("fullscreen", i=>e(a=>{
            a.interface.isFullscreen = i
        }
        )),
        s.on("time", i=>e(a=>{
            a.progress.time = i
        }
        )),
        s.on("volumechange", i=>e(a=>{
            a.mediaPlaying.volume = i
        }
        )),
        s.on("duration", i=>e(a=>{
            a.progress.duration = i
        }
        )),
        s.on("buffered", i=>e(a=>{
            a.progress.buffered = i
        }
        )),
        s.on("loading", i=>e(a=>{
            a.mediaPlaying.isLoading = i
        }
        )),
        s.on("qualities", i=>{
            e(a=>{
                a.qualities = i
            }
            )
        }
        ),
        s.on("changedquality", i=>{
            e(a=>{
                a.currentQuality = i
            }
            )
        }
        ),
        s.on("needstrack", i=>{
            e(a=>{
                a.caption.asTrack = i
            }
            )
        }
        ),
        s.on("canairplay", i=>{
            e(a=>{
                a.interface.canAirplay = i
            }
            )
        }
        ),
        s.on("playbackrate", i=>{
            e(a=>{
                a.mediaPlaying.playbackRate = i
            }
            )
        }
        ),
        s.on("error", i=>{
            e(a=>{
                a.status = R.PLAYBACK_ERROR,
                a.interface.error = i
            }
            )
        }
        ),
        e(i=>{
            i.display = s
        }
        )
    },
    reset() {
        var s;
        (s = t().display) == null || s.load({
            source: null,
            startAt: 0,
            automaticQuality: !1,
            preferredQuality: null
        }),
        e(r=>{
            r.status = R.IDLE,
            r.meta = null,
            r.thumbnails.images = [],
            r.progress.time = 0,
            r.progress.duration = 0
        }
        )
    }
});
let be = function(e) {
    return e[e.REGULAR = 0] = "REGULAR",
    e[e.REMAINING = 1] = "REMAINING",
    e
}({})
  , X = function(e) {
    return e.NOT_HOVERING = "not_hovering",
    e.MOUSE_HOVER = "mouse_hover",
    e.MOBILE_TAPPED = "mobile_tapped",
    e
}({});
const Gl = (e,t)=>({
    interface: {
        isCasting: !1,
        hasOpenOverlay: !1,
        isFullscreen: !1,
        isSeeking: !1,
        lastVolume: 0,
        leftControlHovering: !1,
        isHoveringControls: !1,
        hovering: X.NOT_HOVERING,
        lastHoveringState: X.NOT_HOVERING,
        volumeChangedWithKeybind: !1,
        volumeChangedWithKeybindDebounce: null,
        timeFormat: be.REGULAR,
        canAirplay: !1,
        hideNextEpisodeBtn: !1,
        shouldStartFromBeginning: !1
    },
    setShouldStartFromBeginning(s) {
        e(r=>{
            r.interface.shouldStartFromBeginning = s
        }
        )
    },
    setLastVolume(s) {
        e(r=>{
            r.interface.lastVolume = s
        }
        )
    },
    setHasOpenOverlay(s) {
        e(r=>{
            r.interface.hasOpenOverlay = s
        }
        )
    },
    setTimeFormat(s) {
        e(r=>{
            r.interface.timeFormat = s
        }
        )
    },
    updateInterfaceHovering(s) {
        e(r=>{
            s !== X.NOT_HOVERING && (r.interface.lastHoveringState = s),
            r.interface.hovering = s
        }
        )
    },
    setSeeking(s) {
        const r = t().display;
        r == null || r.setSeeking(s),
        e(i=>{
            i.interface.isSeeking = s
        }
        )
    },
    setHoveringLeftControls(s) {
        e(r=>{
            r.interface.leftControlHovering = s
        }
        )
    },
    setHoveringAnyControls(s) {
        e(r=>{
            r.interface.isHoveringControls = s
        }
        )
    },
    hideNextEpisodeButton() {
        e(s=>{
            s.interface.hideNextEpisodeBtn = !0
        }
        )
    }
})
  , ql = e=>({
    mediaPlaying: {
        isPlaying: !1,
        isPaused: !0,
        isLoading: !1,
        isSeeking: !1,
        isDragSeeking: !1,
        hasPlayedOnce: !1,
        volume: 1,
        playbackRate: 1
    },
    play() {
        e(t=>{
            t.mediaPlaying.isPlaying = !0,
            t.mediaPlaying.isPaused = !1
        }
        )
    },
    pause() {
        e(t=>{
            t.mediaPlaying.isPlaying = !1,
            t.mediaPlaying.isPaused = !1
        }
        )
    }
})
  , Yl = e=>({
    progress: {
        time: 0,
        duration: 0,
        buffered: 0,
        draggingTime: 0
    },
    setDraggingTime(t) {
        e(s=>{
            s.progress.draggingTime = t
        }
        )
    }
});
function Jl(e, t) {
    if (e.length === 0)
        return null;
    const s = e.findIndex(l=>l.at > t);
    if (s === -1)
        return {
            index: e.length - 1,
            image: e[e.length - 1]
        };
    const r = e[s];
    if (s === 0)
        return {
            index: s,
            image: r
        };
    const i = e[s - 1]
      , a = t - i.at
      , o = r.at - t;
    return a < o ? {
        index: s - 1,
        image: i
    } : {
        index: s,
        image: r
    }
}
const Xl = (e,t)=>({
    thumbnails: {
        images: [],
        resetImages() {
            e(s=>{
                s.thumbnails.images = []
            }
            )
        },
        addImage(s) {
            const r = t()
              , i = r.thumbnails.images.findIndex(o=>o.at >= s.at);
            if (i === -1) {
                e(o=>{
                    o.thumbnails.images.push(s),
                    o.thumbnails.images = [...o.thumbnails.images]
                }
                );
                return
            }
            if (r.thumbnails.images[i].at === s.at) {
                e(o=>{
                    o.thumbnails.images[i] = s,
                    o.thumbnails.images = [...o.thumbnails.images]
                }
                );
                return
            }
            e(o=>{
                o.thumbnails.images.splice(i, 0, s),
                o.thumbnails.images = [...o.thumbnails.images]
            }
            )
        }
    }
})
  , x = G(q(function() {
    return {
        ...Gl(...arguments),
        ...Yl(...arguments),
        ...ql(...arguments),
        ...Ql(...arguments),
        ...Kl(...arguments),
        ...Hl(...arguments),
        ...Xl(...arguments)
    }
}))
  , Zl = ha.sanitize;
function ec(e, t, s, r) {
    const i = e / 1e3 + s
      , a = t / 1e3 + s;
    return Math.max(0, i) <= r && Math.max(0, a) >= r
}
function tc(e, t, s) {
    return `${e}-${t}-${s}`
}
function mr(e) {
    const t = e.trim();
    if (t === "")
        throw new Error("Given text is empty");
    const s = nn(t, "vtt");
    if (ks(s) === "")
        throw new Error("Invalid subtitle format");
    return s
}
function hr(e) {
    const t = e.trim();
    if (t === "")
        throw new Error("Given text is empty");
    const s = nn(t, "srt");
    if (ks(s) === "")
        throw new Error("Invalid subtitle format");
    return s
}
function nc(e, t) {
    const s = mr(e);
    return fa(s).filter(r=>r.type === "caption")
}
function sc(e) {
    return btoa(String.fromCodePoint(...new TextEncoder().encode(e)))
}
function rc(e) {
    return `data:application/x-subrip;base64,${sc(hr(e))}`
}
function ic(e) {
    return URL.createObjectURL(new Blob([mr(e)],{
        type: "text/vtt"
    }))
}
function zt(e) {
    return e.map(t=>({
        language: t.language,
        url: t.url,
        needsProxy: t.hasCorsRestrictions
    }))
}
const ac = ga().map(e=>`.${e}`)
  , Qt = new $s;
Qt.setCompare((e,t)=>e === t);
const oc = 24 * 60 * 60;
async function lc(e) {
    const t = Qt.get(e.url);
    if (t)
        return t;
    let s;
    if (e.needsProxy ? s = await Bt(e.url, {
        responseType: "text"
    }) : s = await fetch(e.url).then(i=>i.text()),
    !s)
        throw new Error("failed to get caption data");
    const r = hr(s);
    return Qt.set(e.url, r, oc),
    r
}
function kt() {
    const e = D(p=>p.setLanguage)
      , t = D(p=>p.enabled)
      , s = D(p=>p.resetSubtitleSpecificSettings)
      , r = x(p=>p.setCaption)
      , i = D(p=>p.lastSelectedLanguage)
      , a = x(p=>p.captionList)
      , o = d.useCallback(async p=>{
        const g = a.find(h=>h.language === p);
        if (!g)
            return;
        const f = await lc(g);
        r({
            language: g.language,
            srtData: f,
            url: g.url
        }),
        s(),
        e(p)
    }
    , [e, a, r, s])
      , l = d.useCallback(async()=>{
        r(null),
        e(null)
    }
    , [r, e])
      , c = d.useCallback(async()=>(await o(i ?? "en"),
    !0), [i, o])
      , u = d.useCallback(async()=>{
        t ? l() : await c()
    }
    , [c, l, t])
      , m = d.useCallback(async()=>{
        t && await c()
    }
    , [c, t]);
    return {
        selectLanguage: o,
        disable: l,
        selectLastUsedLanguage: c,
        toggleLastUsed: u,
        selectLastUsedLanguageIfEnabled: m
    }
}
function cc() {
    const e = x(r=>r.display)
      , t = an(r=>r.volume);
    return {
        init: d.useCallback(()=>{
            e == null || e.setVolume(t)
        }
        , [e, t])
    }
}
function uc() {
    const e = x(i=>i.source)
      , t = d.useMemo(()=>e ? JSON.stringify(e) : null, [e])
      , {selectLastUsedLanguageIfEnabled: s} = kt()
      , r = d.useRef(s);
    d.useEffect(()=>{
        r.current = s
    }
    , [s]),
    d.useEffect(()=>{
        t && r.current()
    }
    , [t])
}
function dc(e, t) {
    var i;
    const s = e[(t == null ? void 0 : t.tmdbId) ?? ""];
    if (!s || !t)
        return 0;
    if (t.type === "movie")
        return s.progress ? s.progress.watched : 0;
    const r = s.episodes[((i = t.episode) == null ? void 0 : i.tmdbId) ?? ""];
    return r ? r.progress.watched : 0
}
function fr() {
    const e = x(g=>g.setStatus)
      , t = x(g=>g.setMeta)
      , s = x(g=>g.setSource)
      , r = x(g=>g.setCaption)
      , i = x(g=>g.setSourceId)
      , a = x(g=>g.status)
      , o = x(g=>g.interface.shouldStartFromBeginning)
      , l = x(g=>g.setShouldStartFromBeginning)
      , c = x(g=>g.reset)
      , u = x(g=>g.meta)
      , {init: m} = cc()
      , p = H();
    return {
        meta: u,
        reset: c,
        status: a,
        shouldStartFromBeginning: o,
        setShouldStartFromBeginning: l,
        setMeta(g, f) {
            t(g, f)
        },
        playMedia(g, f, h, v) {
            const b = v ?? dc(p.items, u);
            r(null),
            s(g, f, b),
            i(h),
            e(R.PLAYING),
            m()
        },
        setScrapeStatus() {
            e(R.SCRAPING)
        },
        setScrapeNotFound() {
            e(R.SCRAPE_NOT_FOUND)
        }
    }
}
const pn = d.forwardRef((e,t)=>{
    let {onChange: s, onUnFocus: r, value: i, label: a, name: o, autoComplete: l, className: c, placeholder: u, onFocus: m, passwordToggleable: p} = e
      , g = "text";
    const [f,h] = d.useState(!0);
    p && (g = f ? "password" : "text");
    const v = n.jsxs("div", {
        className: "relative",
        children: [n.jsx("input", {
            type: g,
            ref: t,
            className: S(c, p && "pr-12"),
            placeholder: u,
            onChange: b=>s && s(b.target.value),
            value: i,
            name: o,
            autoComplete: l,
            onBlur: ()=>r && r(),
            onFocus: ()=>m == null ? void 0 : m(),
            onKeyDown: b=>b.key === "Enter" ? b.target.blur() : null
        }), p ? n.jsx("button", {
            type: "button",
            className: "absolute top-1/2 -translate-y-1/2 right-1 text-xl p-3",
            onClick: ()=>h(!f),
            children: n.jsx(I, {
                icon: f ? k.EYE : k.EYE_SLASH
            })
        }) : null]
    });
    return a ? n.jsxs("label", {
        children: [n.jsx("span", {
            children: a
        }), v]
    }) : v
}
);
function mc(e) {
    return n.jsx("p", {
        className: S("text-errors-type-secondary", e.marginClass ?? "mt-6"),
        children: e.children
    })
}
function hc() {
    const {t: e} = C()
      , t = x(r=>r.interface.error)
      , s = Xs("error");
    return n.jsxs(mn, {
        children: [n.jsxs(dn, {
            children: [n.jsx(cn, {
                icon: k.WAND,
                children: e("player.playbackError.badge")
            }), n.jsx(Oe, {
                children: e("player.playbackError.title")
            }), n.jsx(mc, {
                children: e("player.playbackError.text")
            }), n.jsxs("div", {
                className: "flex gap-3",
                children: [n.jsx(M, {
                    href: "/",
                    theme: "secondary",
                    padding: "md:px-12 p-2.5",
                    className: "mt-6",
                    children: e("player.playbackError.homeButton")
                }), n.jsx(M, {
                    onClick: ()=>s.show(),
                    theme: "purple",
                    padding: "md:px-12 p-2.5",
                    className: "mt-6",
                    children: e("errors.showError")
                })]
            })]
        }), n.jsx(gl, {
            onClose: ()=>s.hide(),
            error: t,
            id: s.id
        })]
    })
}
const te = d.forwardRef((e,t)=>n.jsxs("button", {
    ref: t,
    type: "button",
    onClick: s=>{
        var r;
        return (r = e.onClick) == null ? void 0 : r.call(e, s.currentTarget)
    }
    ,
    className: S(["tabbable p-2 rounded-full hover:bg-video-buttonBackground hover:bg-opacity-50 transition-transform duration-100 flex items-center gap-3", e.activeClass ?? "active:scale-110 active:bg-opacity-75 active:text-white", e.className ?? ""]),
    children: [e.icon && n.jsx(I, {
        className: e.iconSizeClass || "text-2xl",
        icon: e.icon
    }), e.children]
}));
function Gn(e) {
    const t = x(i=>i.display)
      , {isPaused: s} = x(i=>i.mediaPlaying)
      , r = ()=>{
        s ? t == null || t.play() : t == null || t.pause()
    }
    ;
    return n.jsx(te, {
        className: e.className,
        iconSizeClass: e.iconSizeClass,
        onClick: r,
        icon: s ? k.PLAY : k.PAUSE
    })
}
function qn() {
    const {isFullscreen: e} = x(s=>s.interface)
      , t = x(s=>s.display);
    return n.jsx(te, {
        onClick: ()=>t == null ? void 0 : t.toggleFullscreen(),
        icon: e ? k.COMPRESS : k.EXPAND
    })
}
const gr = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let Pt = null;
async function ct() {
    if (Pt === null) {
        const e = new Promise(s=>{
            setTimeout(()=>s(!1), 1e3)
        }
        )
          , t = new Promise(s=>{
            const r = document.createElement("video")
              , i = ()=>{
                r.removeEventListener("volumechange", i),
                s(!0)
            }
            ;
            r.addEventListener("volumechange", i),
            r.volume = .5
        }
        );
        Pt = await Promise.race([t, e])
    }
    return Pt
}
function Nt() {
    return Y.fullscreenEnabled
}
function xr() {
    return Nt() || gr
}
function pr() {
    return Nt() || xr()
}
function br() {
    return "pictureInPictureEnabled"in document
}
function yr() {
    return "webkitSupportsPresentationMode"in document.createElement("video")
}
function et(e) {
    return oe.isSupported() ? !1 : !!e.canPlayType("application/vnd.apple.mpegurl")
}
function Yn() {
    const e = x(t=>t.display);
    return !br() && !yr() ? null : n.jsx(te, {
        onClick: ()=>e == null ? void 0 : e.togglePictureInPicture(),
        icon: k.PICTURE_IN_PICTURE
    })
}
function fc(e) {
    return `${e.toFixed(2)}%`
}
function Jn(e) {
    return Number(Math.max(0, Math.min(e, 100)).toFixed(2))
}
function gc(e) {
    return e.type === "mousedown" || e.type === "mouseup" || e.type === "mousemove"
}
const Rt = e=>gc(e) ? e.pageX : e.changedTouches[0].pageX;
function bn(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const [r,i] = d.useState(!1)
      , [a,o] = d.useState(0);
    d.useEffect(()=>{
        function c(m) {
            if (!r || !e.current)
                return;
            const p = e.current.getBoundingClientRect()
              , g = (Rt(m) - p.left) / e.current.offsetWidth;
            o(g * 100),
            s && t(g)
        }
        function u(m) {
            if (!r || (i(!1),
            document.body.removeAttribute("data-no-select"),
            !e.current))
                return;
            const p = e.current.getBoundingClientRect()
              , g = (Rt(m) - p.left) / e.current.offsetWidth;
            t(g)
        }
        return document.addEventListener("mousemove", c),
        document.addEventListener("touchmove", c),
        document.addEventListener("mouseup", u),
        document.addEventListener("touchend", u),
        ()=>{
            document.removeEventListener("mousemove", c),
            document.removeEventListener("touchmove", c),
            document.removeEventListener("mouseup", u),
            document.removeEventListener("touchend", u)
        }
    }
    , [r, e, t, s]);
    const l = d.useCallback(c=>{
        if (i(!0),
        document.body.setAttribute("data-no-select", "true"),
        !e.current)
            return;
        const u = e.current.getBoundingClientRect()
          , m = (Rt(c) - u.left) / e.current.offsetWidth * 100;
        o(m)
    }
    , [o, e]);
    return {
        dragging: r,
        dragPercentage: a,
        dragMouseDown: l
    }
}
function tt(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (Number.isNaN(e))
        return t ? "0:00:00" : "0:00";
    let s = e;
    const r = Math.floor(s % 60);
    s /= 60;
    const i = Math.floor(s % 60);
    s /= 60;
    const a = Math.floor(s)
      , o = r.toString().padStart(2, "0")
      , l = i.toString().padStart(2, "0");
    return t ? [a, l, o].join(":") : [l, o].join(":")
}
function Kt(e) {
    return e > 60 * 60
}
function xc(e) {
    const t = x(o=>o.thumbnails.images)
      , s = d.useMemo(()=>{
        var o;
        return (o = Jl(t, e.at)) == null ? void 0 : o.image
    }
    , [t, e.at])
      , [r,i] = d.useState({
        offscreenLeft: 0,
        offscreenRight: 0
    })
      , a = d.useRef(null);
    return d.useEffect(()=>{
        if (!a.current)
            return;
        const o = a.current.getBoundingClientRect()
          , l = 32
          , c = Math.max(0, (o.left - l) * -1)
          , u = Math.max(0, o.right + l - window.innerWidth);
        i({
            offscreenLeft: c,
            offscreenRight: u
        })
    }
    , [e.at]),
    !e.show || !s ? null : n.jsx("div", {
        className: "flex flex-col items-center -translate-x-1/2 pointer-events-none",
        children: n.jsx("div", {
            className: "w-screen flex justify-center",
            children: n.jsx("div", {
                ref: a,
                children: n.jsxs("div", {
                    style: {
                        transform: `translateX(${r.offscreenLeft > 0 ? r.offscreenLeft : -r.offscreenRight}px)`
                    },
                    children: [n.jsx("img", {
                        src: s.data,
                        className: "h-24 border rounded-xl border-gray-800"
                    }), n.jsx("p", {
                        className: "text-center mt-1",
                        children: tt(Math.max(e.at, 0), Kt(e.at))
                    })]
                })
            })
        })
    })
}
function pc(e) {
    const [t,s] = d.useState(-1)
      , r = d.useCallback(a=>{
        if (!e.current)
            return;
        const l = e.current.getBoundingClientRect()
          , c = (a.pageX - l.left) / e.current.offsetWidth;
        s(c * 100)
    }
    , [s, e])
      , i = d.useCallback(()=>{
        s(-1)
    }
    , [s]);
    return {
        mousePos: t,
        mouseMove: r,
        mouseLeave: i
    }
}
const bc = function() {
    const {duration: t, time: s, buffered: r} = x(b=>b.progress)
      , i = x(b=>b.display)
      , a = x(b=>b.setDraggingTime)
      , o = x(b=>b.setSeeking)
      , {isSeeking: l} = x(b=>b.interface)
      , c = d.useCallback(b=>{
        i == null || i.setTime(b * t)
    }
    , [t, i])
      , u = d.useRef(null)
      , {mouseMove: m, mouseLeave: p, mousePos: g} = pc(u)
      , {dragging: f, dragPercentage: h, dragMouseDown: v} = bn(u, c);
    return d.useEffect(()=>{
        o(f)
    }
    , [o, f]),
    d.useEffect(()=>{
        a(h / 100 * t)
    }
    , [a, t, h]),
    n.jsxs("div", {
        className: "w-full relative",
        dir: "ltr",
        children: [n.jsx("div", {
            className: "top-0 absolute inset-x-0",
            children: n.jsx("div", {
                className: "absolute bottom-0",
                style: {
                    left: `${g}%`
                },
                children: n.jsx(xc, {
                    at: Math.floor(g / 100 * t),
                    show: g > -1
                })
            })
        }), n.jsx("div", {
            className: "w-full",
            ref: u,
            children: n.jsx("div", {
                className: "group w-full h-8 flex items-center cursor-pointer",
                onMouseDown: v,
                onTouchStart: v,
                onMouseLeave: p,
                onMouseMove: m,
                children: n.jsxs("div", {
                    className: ["relative w-full h-1 bg-progress-background bg-opacity-25 rounded-full transition-[height] duration-100 group-hover:h-1.5", f ? "!h-1.5" : ""].join(" "),
                    children: [n.jsx("div", {
                        className: "absolute top-0 left-0 h-full rounded-full bg-progress-preloaded bg-opacity-50 flex justify-end items-center",
                        style: {
                            width: `${r / t * 100}%`
                        }
                    }), n.jsx("div", {
                        className: "absolute top-0 dir-neutral:left-0 h-full rounded-full bg-progress-filled flex justify-end items-center",
                        style: {
                            width: `${Math.max(0, Math.min(1, f ? h / 100 : s / t)) * 100}%`
                        },
                        children: n.jsx("div", {
                            className: ["w-[1rem] min-w-[1rem] h-[1rem] rounded-full transform translate-x-1/2 scale-0 group-hover:scale-100 bg-white transition-[transform] duration-100", l ? "scale-100" : ""].join(" ")
                        })
                    })]
                })
            })
        })]
    })
}
  , yc = bc;
function Xn(e) {
    const t = x(i=>i.display)
      , s = x(i=>i.progress.time)
      , r = d.useCallback(()=>{
        t == null || t.setTime(s + 10)
    }
    , [t, s]);
    return n.jsx(te, {
        iconSizeClass: e.iconSizeClass,
        onClick: r,
        icon: k.SKIP_FORWARD
    })
}
function Zn(e) {
    const t = x(i=>i.display)
      , s = x(i=>i.progress.time)
      , r = d.useCallback(()=>{
        t == null || t.setTime(s - 10)
    }
    , [t, s]);
    return n.jsx(te, {
        iconSizeClass: e.iconSizeClass,
        onClick: r,
        icon: k.SKIP_BACKWARD
    })
}
function es(e) {
    const t = x(y=>y.interface.timeFormat)
      , s = x(y=>y.setTimeFormat)
      , {duration: r, time: i, draggingTime: a} = x(y=>y.progress)
      , {isSeeking: o} = x(y=>y.interface)
      , {t: l} = C()
      , c = Kt(r);
    function u() {
        s(t === be.REGULAR ? be.REMAINING : be.REGULAR)
    }
    const m = Math.min(Math.max(o ? a : i, 0), r)
      , p = Math.abs(m - r)
      , g = tt(p, Kt(p))
      , f = tt(m, c)
      , h = new Date(Date.now() + p * 1e3)
      , v = tt(r, c);
    let b = t === be.REGULAR ? "regular" : "remaining";
    return e.short && (b = t === be.REGULAR ? "shortRegular" : "shortRemaining"),
    n.jsx(te, {
        onClick: ()=>u(),
        children: n.jsx("span", {
            children: l(`player.time.${b}`, {
                timeFinished: h,
                timeWatched: f,
                timeLeft: g,
                duration: v,
                formatParams: {
                    timeFinished: {
                        hour: "numeric",
                        minute: "numeric"
                    }
                }
            })
        })
    })
}
function vc() {
    return x(t=>t.mediaPlaying.isLoading) ? n.jsx(xt, {
        className: "text-4xl"
    }) : null
}
function jc() {
    const e = x(o=>o.display)
      , t = x(o=>o.mediaPlaying.isPlaying)
      , s = x(o=>o.mediaPlaying.isLoading)
      , r = x(o=>o.mediaPlaying.hasPlayedOnce)
      , i = x(o=>o.status)
      , a = d.useCallback(()=>{
        e == null || e.play()
    }
    , [e]);
    return r || t || s || i !== R.PLAYING ? null : n.jsx("div", {
        onClick: a,
        className: "group pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center bg-video-autoPlay-background hover:bg-video-autoPlay-hover rounded-full text-white transition-[background-color,transform] hover:scale-125 active:scale-100",
        children: n.jsx(I, {
            icon: k.PLAY,
            className: "text-2xl transition-transform group-hover:scale-125"
        })
    })
}
function vr() {
    const e = x(o=>o.mediaPlaying.volume)
      , t = x(o=>o.interface.lastVolume)
      , s = x(o=>o.setLastVolume)
      , r = x(o=>o.display)
      , i = an(o=>o.setVolume)
      , a = ()=>{
        let o = 0;
        e > 0 ? (o = 0,
        s(e)) : t > 0 ? o = t : o = 1,
        r == null || r.setVolume(o),
        i(o)
    }
    ;
    return {
        toggleMute() {
            a()
        },
        setVolume(o) {
            i(o),
            s(o),
            r == null || r.setVolume(o)
        }
    }
}
const wc = function(t) {
    const s = d.useRef(null)
      , r = x(b=>b.setHoveringLeftControls)
      , i = x(b=>b.interface.leftControlHovering)
      , a = x(b=>b.mediaPlaying.volume)
      , {setVolume: o, toggleMute: l} = vr()
      , c = d.useCallback(b=>{
        o(b)
    }
    , [o])
      , {dragging: u, dragPercentage: m, dragMouseDown: p} = bn(s, c, !0)
      , g = d.useCallback(()=>{
        l()
    }
    , [l])
      , f = d.useCallback(async()=>{
        await ct() && r(!0)
    }
    , [r]);
    let h = Jn(a * 100);
    u && (h = Jn(m));
    const v = fc(h);
    return n.jsx("div", {
        className: t.className,
        onMouseEnter: f,
        children: n.jsxs("div", {
            className: "pointer-events-auto flex cursor-pointer items-center py-0",
            children: [n.jsx("div", {
                className: "px-4 text-2xl text-white",
                onClick: g,
                children: n.jsx(I, {
                    icon: h > 0 ? k.VOLUME : k.VOLUME_X
                })
            }), n.jsx("div", {
                className: `linear -ml-2 w-0 overflow-hidden transition-[width,opacity] duration-300 ${i || u ? "!w-24 opacity-100" : "w-4 opacity-0"}`,
                children: n.jsx("div", {
                    ref: s,
                    className: "flex h-10 w-20 items-center px-2",
                    onMouseDown: p,
                    onTouchStart: p,
                    children: n.jsx("div", {
                        className: "relative h-1 flex-1 rounded-full bg-gray-500 bg-opacity-50",
                        children: n.jsx("div", {
                            className: "absolute inset-y-0 left-0 flex items-center justify-end rounded-full bg-video-audio-set",
                            style: {
                                width: v
                            },
                            children: n.jsx("div", {
                                className: "absolute h-3 w-3 translate-x-1/2 rounded-full bg-white"
                            })
                        })
                    })
                })
            })]
        })
    })
}
  , kc = wc;
function Nc() {
    const e = x(t=>{
        var s;
        return (s = t.meta) == null ? void 0 : s.title
    }
    );
    return n.jsx("p", {
        children: e
    })
}
function Sc() {
    var s, r, i;
    const {t: e} = C()
      , t = x(a=>a.meta);
    return (t == null ? void 0 : t.type) !== "show" ? null : n.jsxs("div", {
        className: "flex gap-3",
        children: [n.jsx("span", {
            className: "text-white font-medium",
            children: e("media.episodeDisplay", {
                season: (s = t == null ? void 0 : t.season) == null ? void 0 : s.number,
                episode: (r = t == null ? void 0 : t.episode) == null ? void 0 : r.number
            })
        }), n.jsx("span", {
            className: "text-type-secondary font-medium",
            children: (i = t == null ? void 0 : t.episode) == null ? void 0 : i.title
        })]
    })
}
function jr(e) {
    return n.jsxs("div", {
        className: S("relative", e.className),
        children: [n.jsx("div", {
            id: `__overlayRouter::${e.id}`,
            className: "absolute inset-0 -z-10"
        }), e.children]
    })
}
function St(e) {
    const [t,s] = d.useState(!1)
      , r = d.useRef(!1);
    return d.useEffect(()=>{
        function i() {
            const a = e ? window.innerHeight < 600 : window.innerWidth < 1024;
            r.current !== a && (r.current = a,
            s(a))
        }
        return i(),
        window.addEventListener("resize", i),
        ()=>{
            window.removeEventListener("resize", i)
        }
    }
    , [e]),
    {
        isMobile: t
    }
}
function W(e) {
    const t = Se(e.id)
      , s = t.showBackwardsTransition(e.path)
      , r = t.isCurrentPage(e.path)
      , i = ke(u=>u.registerRoute)
      , a = d.useMemo(()=>t.makePath(e.path), [e.path, t])
      , {isMobile: o} = St();
    d.useEffect(()=>{
        i({
            id: a,
            width: e.width,
            height: e.height
        })
    }
    , [e.height, e.width, a, i]);
    const l = o ? "100%" : `${e.width}px`;
    let c = "none";
    return (s === "yes" || s === "no") && (c = s === "yes" ? "slide-full-left" : "slide-full-right"),
    n.jsx(Q, {
        animation: c,
        className: "absolute inset-0",
        durationClass: "duration-[400ms]",
        show: r,
        children: n.jsx("div", {
            className: S(["grid grid-rows-1 max-h-full", e.className]),
            style: {
                height: e.height ? `${e.height}px` : void 0,
                width: e.width ? l : void 0
            },
            children: e.children
        })
    })
}
function Cc() {
    const e = ke(u=>u.anchorPoint)
      , t = d.useRef(null)
      , [s,r] = d.useState(0)
      , [i,a] = d.useState(0)
      , [o,l] = d.useState(null)
      , c = d.useCallback((u,m)=>{
        if (!u)
            return;
        const p = u.x + u.w / 2
          , g = window.innerHeight - (u.y + u.h);
        a(window.innerHeight - g - u.h - m.height - 30),
        r(Math.min(p - m.width / 2, window.innerWidth - m.width - 30))
    }
    , []);
    return d.useEffect(()=>{
        !e || !o || c(e, o)
    }
    , [e, c, o]),
    d.useEffect(()=>{
        if (!t.current)
            return;
        function u() {
            var g;
            const p = (g = t.current) == null ? void 0 : g.getBoundingClientRect();
            l(p ?? null)
        }
        u();
        const m = new ResizeObserver(u);
        return m.observe(t.current),
        ()=>{
            m.disconnect()
        }
    }
    , []),
    [t, s, i]
}
function Ec(e) {
    const [t,s,r] = Cc();
    return n.jsx("div", {
        ref: t,
        style: {
            transform: `translateX(${s}px) translateY(${r}px)`
        },
        className: S(["[&>*]:pointer-events-auto z-10 flex dir-neutral:items-start rtl:justify-start ltr:justify-end dir-neutral:origin-top-left touch-none", e.className]),
        children: e.children
    })
}
const Ic = function(t) {
    const s = Se("hello world :)")
      , {t: r} = C();
    return n.jsxs("div", {
        className: S(["pointer-events-auto px-4 pb-6 z-10 ml-[env(safe-area-inset-left)] mr-[env(safe-area-inset-right)] bottom-0 origin-top-left inset-x-0 absolute overflow-hidden max-h-[calc(100vh-1.5rem)] grid grid-rows-[minmax(0,1fr),auto]", t.className]),
        children: [t.children, n.jsx("button", {
            className: "w-full text-video-context-type-main bg-video-context-background z-10 relative hover:bg-video-context-closeHover active:scale-95 rounded-2xl pointer-events-auto transition-all duration-100 flex justify-center items-center py-3 mt-3 font-bold border border-video-context-border hover:text-white",
            type: "button",
            onClick: ()=>s.close(),
            children: r("overlays.close")
        }), n.jsx("div", {
            className: "pointer-events-none absolute z-0 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
        })]
    })
}
  , Lc = Ic
  , Tc = 200
  , Pc = "--colors-global-accentA";
function Rc(e) {
    return n.jsx("div", {
        tabIndex: e.tabIndex,
        className: S(e.className, "relative"),
        onKeyUp: e.onKeyUp,
        children: e.children
    })
}
function Ac(e) {
    return n.jsx("div", {
        className: S(e.className, "relative"),
        children: e.children
    })
}
const Mc = function(t) {
    const s = d.useRef(null)
      , r = t.flareSize ?? Tc
      , i = t.cssColorVar ?? Pc;
    return d.useEffect(()=>{
        function a(o) {
            if (!s.current)
                return;
            const l = s.current.getBoundingClientRect()
              , c = r / 2;
            s.current.style.setProperty("--bg-x", `${(o.clientX - l.left - c).toFixed(0)}px`),
            s.current.style.setProperty("--bg-y", `${(o.clientY - l.top - c).toFixed(0)}px`)
        }
        return document.addEventListener("mousemove", a),
        ()=>document.removeEventListener("mousemove", a)
    }
    , [r]),
    n.jsx("div", {
        ref: s,
        className: S("flare-light pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-[400ms]", t.className, {
            "!opacity-100": t.enabled ?? !1
        }),
        style: {
            backgroundImage: `radial-gradient(circle at center, rgba(var(${i}), 1), rgba(var(${i}), 0) 70%)`,
            backgroundPosition: "var(--bg-x) var(--bg-y)",
            backgroundRepeat: "no-repeat",
            backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
        },
        children: n.jsx("div", {
            className: S("absolute inset-[1px] overflow-hidden", t.className, t.backgroundClass),
            children: n.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    background: `radial-gradient(circle at center, rgba(var(${i}), 1), rgba(var(${i}), 0) 70%)`,
                    backgroundPosition: "var(--bg-x) var(--bg-y)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
                }
            })
        })
    })
}
  , _c = Mc
  , Z = {
    Base: Rc,
    Light: _c,
    Child: Ac
};
function Oc(e) {
    const t = d.useRef(null)
      , {isMobile: s} = St()
      , r = ke(u=>u.routes)
      , i = Se(e.id)
      , a = d.useMemo(()=>r[i.currentRoute ?? ""], [r, i])
      , [o,l] = ri(()=>({
        from: {
            height: `${(a == null ? void 0 : a.height) ?? 0}px`,
            width: s ? "100%" : `${(a == null ? void 0 : a.width) ?? 0}px`
        },
        config: {
            easing: ii.linear
        }
    }), [])
      , c = d.useRef(null);
    return d.useEffect(()=>{
        const u = {
            height: a == null ? void 0 : a.height,
            width: a == null ? void 0 : a.width,
            isMobile: s
        }
          , m = JSON.stringify(u);
        if (m !== c.current) {
            const p = c.current ? JSON.parse(c.current) : null;
            c.current = m,
            u.isMobile ? (l.set({
                width: "100%"
            }),
            l.start({
                height: `${(a == null ? void 0 : a.height) ?? 0}px`
            })) : (p == null ? void 0 : p.height) === void 0 && u.height !== void 0 ? l.set({
                height: `${(a == null ? void 0 : a.height) ?? 0}px`,
                width: `${(a == null ? void 0 : a.width) ?? 0}px`
            }) : l.start({
                height: `${(a == null ? void 0 : a.height) ?? 0}px`,
                width: `${(a == null ? void 0 : a.width) ?? 0}px`
            })
        }
    }
    , [a == null ? void 0 : a.height, a == null ? void 0 : a.width, s, l]),
    n.jsx(fi.div, {
        ref: t,
        style: o,
        className: "overflow-hidden relative z-10 max-h-full",
        children: n.jsxs(Z.Base, {
            className: "group w-full bg-video-context-border h-full rounded-2xl transition-colors duration-100 text-video-context-type-main",
            children: [n.jsx(Z.Light, {
                flareSize: 400,
                cssColorVar: "--colors-video-context-light",
                backgroundClass: "bg-video-context-background duration-100",
                className: "rounded-2xl opacity-100"
            }), n.jsx(Z.Child, {
                className: "pointer-events-auto relative transition-transform duration-100 h-full",
                children: e.children
            })]
        })
    })
}
function wr(e) {
    const {isMobile: t} = St()
      , s = n.jsx(Oc, {
        id: e.id,
        children: e.children
    });
    return t ? n.jsx(Lc, {
        children: s
    }) : n.jsx(Ec, {
        children: s
    })
}
const Dc = {
    "4k": "4k",
    1080: "1080",
    480: "480",
    360: "360",
    720: "720",
    unknown: "unknown"
}
  , Bc = Object.keys(Dc)
  , Fc = ["mp4"];
function Uc(e) {
    return Bc.includes(e)
}
function Gt(e) {
    if (e.stream.type === "hls")
        return {
            type: "hls",
            url: e.stream.playlist
        };
    if (e.stream.type === "file") {
        const t = {};
        return Object.entries(e.stream.qualities).forEach(s=>{
            if (!Uc(s[0])) {
                console.warn(`unrecognized quality: ${s[0]}`);
                return
            }
            if (!Fc.includes(s[1].type)) {
                console.warn(`unrecognized file type: ${s[1].type}`);
                return
            }
            t[s[0]] = {
                type: s[1].type,
                url: s[1].url
            }
        }
        ),
        {
            type: "file",
            qualities: t
        }
    }
    throw new Error("unrecognized type")
}
function $c(e, t, s, r) {
    const i = x(f=>f.setSource)
      , a = x(f=>f.setCaption)
      , o = x(f=>f.setSourceId)
      , l = x(f=>f.progress.time)
      , c = x(f=>f.meta)
      , u = B(e)
      , {report: m} = Cs()
      , [p,g] = se(async()=>{
        const f = As();
        let h;
        if (c) {
            try {
                if (f) {
                    const v = _t(f);
                    h = await (await Ot(v.scrapeEmbed(r, s), ["completed", "noOutput"])).promise()
                } else
                    h = await Dt.runEmbedScraper({
                        id: r,
                        url: s
                    })
            } catch (v) {
                console.error(`Failed to scrape ${r}`, v);
                const y = v instanceof ve ? "notfound" : "failed";
                throw m([ye(c, t, r, y, v)]),
                v
            }
            m([ye(c, t, null, "success", null)]),
            o(t),
            a(null),
            i(Gt({
                stream: h.stream[0]
            }), zt(h.stream[0].captions), l),
            u.close()
        }
    }
    , [r, t, c, u, m, a]);
    return {
        run: g,
        loading: p.loading,
        errored: !!p.error
    }
}
function Vc(e, t) {
    const s = x(p=>p.meta)
      , r = x(p=>p.setSource)
      , i = x(p=>p.setCaption)
      , a = x(p=>p.setSourceId)
      , o = x(p=>p.progress.time)
      , l = B(t)
      , {report: c} = Cs()
      , [u,m] = se(async()=>{
        if (!e || !s)
            return null;
        const p = dr(s)
          , g = As();
        let f;
        try {
            if (g) {
                const h = _t(g);
                f = await (await Ot(h.scrapeSource(e, p), ["completed", "noOutput"])).promise()
            } else
                f = await Dt.runSourceScraper({
                    id: e,
                    media: p
                })
        } catch (h) {
            console.error(`Failed to scrape ${e}`, h);
            const b = h instanceof ve ? "notfound" : "failed";
            throw c([ye(s, e, null, b, h)]),
            h
        }
        if (c([ye(s, e, null, "success", null)]),
        f.stream)
            return i(null),
            r(Gt({
                stream: f.stream[0]
            }), zt(f.stream[0].captions), o),
            a(e),
            l.close(),
            null;
        if (f.embeds.length === 1) {
            let h;
            if (!s)
                return;
            try {
                if (g) {
                    const v = _t(g);
                    h = await (await Ot(v.scrapeEmbed(f.embeds[0].embedId, f.embeds[0].url), ["completed", "noOutput"])).promise()
                } else
                    h = await Dt.runEmbedScraper({
                        id: f.embeds[0].embedId,
                        url: f.embeds[0].url
                    })
            } catch (v) {
                console.error(`Failed to scrape ${f.embeds[0].embedId}`, v);
                const y = v instanceof ve ? "notfound" : "failed";
                throw c([ye(s, e, f.embeds[0].embedId, y, v)]),
                v
            }
            c([ye(s, e, f.embeds[0].embedId, "success", null)]),
            a(e),
            i(null),
            r(Gt({
                stream: h.stream[0]
            }), zt(h.stream[0].captions), o),
            l.close()
        }
        return f.embeds
    }
    , [e, s, l, i]);
    return {
        run: m,
        watching: (u.value ?? null) === null,
        loading: u.loading,
        items: u.value,
        notfound: u.error instanceof ve,
        errored: !!u.error
    }
}
function Hc(e) {
    return n.jsx("div", {
        className: "h-full grid grid-rows-[1fr]",
        children: n.jsx("div", {
            className: "px-6 h-full flex flex-col justify-start overflow-y-auto overflow-x-hidden",
            children: e.children
        })
    })
}
function Wc(e) {
    return n.jsx("div", {
        className: "[&>*]:px-6 h-full grid grid-rows-[auto,1fr] [&>*:nth-child(2)]:overflow-y-auto [&>*:nth-child(2)]:overflow-x-hidden",
        children: e.children
    })
}
const zc = Object.freeze(Object.defineProperty({
    __proto__: null,
    Card: Hc,
    CardWithScrollable: Wc
}, Symbol.toStringTag, {
    value: "Module"
}));
function kr(e) {
    return n.jsx("div", {
        children: n.jsxs("h3", {
            className: "font-bold text-video-context-type-main pb-3 pt-5 border-b border-video-context-border flex justify-between items-center",
            children: [n.jsx("div", {
                className: "flex items-center space-x-3",
                children: e.children
            }), n.jsx("div", {
                children: e.rightSide
            })]
        })
    })
}
function Qc(e) {
    return n.jsx("button", {
        type: "button",
        onClick: e.onClick,
        children: n.jsx(I, {
            className: "text-xl",
            icon: e.icon
        })
    })
}
function Kc() {
    return n.jsx("hr", {
        className: "!my-4 border-0 w-full h-px bg-video-context-border"
    })
}
function Gc(e) {
    return n.jsx("p", {
        className: "text-sm mt-8 font-medium",
        children: e.children
    })
}
function qc(e) {
    return n.jsx("a", {
        type: "button",
        className: "text-video-context-type-accent cursor-pointer",
        onClick: e.onClick,
        children: e.children
    })
}
function Yc(e) {
    return n.jsx("p", {
        className: "font-medium",
        children: e.children
    })
}
function Jc(e) {
    return n.jsx("p", {
        className: e.marginClass ?? "my-3",
        children: e.children
    })
}
function Xc(e) {
    return n.jsx("span", {
        className: "text-white",
        children: e.children
    })
}
function Zc(e) {
    return n.jsx("div", {
        className: "w-full h-full flex justify-center items-center text-center",
        children: n.jsxs("div", {
            className: "flex items-center gap-4 flex-col",
            children: [e.noIcon ? null : n.jsx("div", {
                className: "w-16 h-10 border border-video-context-border rounded-lg flex justify-center items-center",
                children: n.jsx(I, {
                    className: "text-xl",
                    icon: k.EYE_SLASH
                })
            }), e.title ? n.jsx("h2", {
                className: "text-white text-lg font-bold",
                children: e.title
            }) : null, n.jsx("div", {
                children: e.children
            })]
        })
    })
}
const eu = Object.freeze(Object.defineProperty({
    __proto__: null,
    Anchor: qc,
    Divider: Kc,
    FieldTitle: Yc,
    Highlight: Xc,
    IconButton: Qc,
    Paragraph: Jc,
    SmallText: Gc,
    TextDisplay: Zc,
    Title: kr
}, Symbol.toStringTag, {
    value: "Module"
}));
function Nr(e) {
    return n.jsxs("span", {
        className: "text-white flex items-center font-medium",
        children: [e.children, n.jsx(I, {
            className: "text-xl ml-1 -mr-1.5",
            icon: k.CHEVRON_RIGHT
        })]
    })
}
function yn(e) {
    return n.jsx("span", {
        className: S(["font-medium text-left", e.textClass || "text-video-context-type-main"]),
        children: e.children
    })
}
function tu(e) {
    return n.jsxs(kr, {
        rightSide: e.rightSide,
        children: [n.jsx("button", {
            type: "button",
            className: "-ml-2 p-2 rounded tabbable hover:bg-video-context-light hover:bg-opacity-10",
            onClick: e.onClick,
            children: n.jsx(I, {
                className: "text-xl",
                icon: k.ARROW_LEFT
            })
        }), n.jsx("span", {
            className: "line-clamp-1 break-all",
            children: e.children
        })]
    })
}
function vn(e) {
    const t = S("flex py-2 px-3 rounded-lg w-full -ml-3", {
        "cursor-default": !e.clickable,
        "hover:bg-video-context-hoverColor hover:bg-opacity-50 cursor-pointer tabbable": e.clickable,
        "bg-video-context-hoverColor bg-opacity-50": e.active
    })
      , s = {
        width: "calc(100% + 1.5rem)"
    }
      , r = n.jsxs("div", {
        className: S("flex items-center flex-1", e.className),
        children: [n.jsx("div", {
            className: "flex-1 text-left",
            children: e.children
        }), n.jsx("div", {
            className: "flex",
            children: e.rightSide
        })]
    });
    return e.onClick ? n.jsx("button", {
        type: "button",
        className: t,
        style: s,
        onClick: e.onClick,
        "data-active-link": e.active ? !0 : void 0,
        children: r
    }) : n.jsx("div", {
        className: t,
        style: s,
        "data-active-link": e.active ? !0 : void 0,
        children: r
    })
}
function nu(e) {
    const t = n.jsx(Nr, {
        children: e.rightText
    });
    return n.jsx(vn, {
        onClick: e.onClick,
        active: e.active,
        clickable: !0,
        rightSide: t,
        children: n.jsx(yn, {
            children: e.children
        })
    })
}
function He(e) {
    let t;
    return e.selected && (t = n.jsx(I, {
        icon: k.CIRCLE_CHECK,
        className: "text-xl text-video-context-type-accent"
    })),
    e.error && (t = n.jsx("span", {
        className: "flex items-center text-video-context-error",
        children: n.jsx(I, {
            className: "ml-2",
            icon: k.WARNING
        })
    })),
    e.loading && (t = n.jsx(xt, {
        className: "text-lg"
    })),
    n.jsx(vn, {
        onClick: e.onClick,
        clickable: !e.disabled,
        rightSide: t,
        children: n.jsx(yn, {
            textClass: S({
                "text-white": e.selected,
                "text-video-context-type-main text-opacity-40": e.disabled
            }),
            children: e.children
        })
    })
}
const su = Object.freeze(Object.defineProperty({
    __proto__: null,
    BackLink: tu,
    Chevron: Nr,
    ChevronLink: nu,
    Link: vn,
    LinkTitle: yn,
    SelectableLink: He
}, Symbol.toStringTag, {
    value: "Module"
}));
function ru(e) {
    return n.jsx("h3", {
        className: S("uppercase font-bold text-video-context-type-secondary text-xs pt-8 pl-1 pb-2.5 border-b border-video-context-border", e.className),
        children: e.children
    })
}
function iu(e) {
    return n.jsx("div", {
        className: S("pt-4 space-y-1", e.className),
        children: e.children
    })
}
function au(e) {
    const t = d.useRef(null);
    return d.useEffect(()=>{
        var o, l, c;
        const s = (o = t.current) == null ? void 0 : o.querySelector("[data-active-link]")
          , r = (l = t.current) == null ? void 0 : l.getBoundingClientRect()
          , i = s == null ? void 0 : s.getBoundingClientRect();
        if (!i || !r)
            return;
        const a = i.top - r.top;
        (c = t.current) == null || c.scrollTo(0, a - r.height / 2 + i.height / 2)
    }
    , [e.loaded]),
    n.jsx("div", {
        ref: t,
        className: S("pt-4 space-y-1", e.className),
        children: e.children
    })
}
const ou = Object.freeze(Object.defineProperty({
    __proto__: null,
    ScrollToActiveSection: au,
    Section: iu,
    SectionTitle: ru
}, Symbol.toStringTag, {
    value: "Module"
}))
  , N = {
    ...zc,
    ...su,
    ...ou,
    ...eu
};
function lu(e) {
    const {t} = C()
      , s = t("player.menus.sources.unknownOption")
      , r = d.useMemo(()=>{
        if (!e.embedId)
            return s;
        const l = ft().find(c=>c.id === e.embedId);
        return (l == null ? void 0 : l.name) ?? s
    }
    , [e.embedId, s])
      , {run: i, errored: a, loading: o} = $c(e.routerId, e.sourceId, e.url, e.embedId);
    return n.jsx(He, {
        loading: o,
        error: a,
        onClick: i,
        children: n.jsx("span", {
            className: "flex flex-col",
            children: n.jsx("span", {
                children: r
            })
        })
    })
}
function cu(e) {
    let {sourceId: t, id: s} = e;
    const {t: r} = C()
      , i = B(s)
      , {run: a, watching: o, notfound: l, loading: c, items: u, errored: m} = Vc(t, s)
      , p = d.useMemo(()=>{
        if (!t)
            return "...";
        const h = ft().find(v=>v.id === t);
        return (h == null ? void 0 : h.name) ?? "..."
    }
    , [t])
      , g = d.useRef(null);
    d.useEffect(()=>{
        g.current !== t && (g.current = t,
        t && a())
    }
    , [a, t]);
    let f = null;
    return c ? f = n.jsx(N.TextDisplay, {
        noIcon: !0,
        children: n.jsx(Ue, {})
    }) : l ? f = n.jsx(N.TextDisplay, {
        title: r("player.menus.sources.noStream.title") ?? void 0,
        children: r("player.menus.sources.noStream.text")
    }) : (u == null ? void 0 : u.length) === 0 ? f = n.jsx(N.TextDisplay, {
        title: r("player.menus.sources.noEmbeds.title") ?? void 0,
        children: r("player.menus.sources.noEmbeds.text")
    }) : m ? f = n.jsx(N.TextDisplay, {
        title: r("player.menus.sources.failed.title") ?? void 0,
        children: r("player.menus.sources.failed.text")
    }) : o ? f = null : u && t && (f = u.map(h=>n.jsx(lu, {
        embedId: h.embedId,
        url: h.url,
        routerId: s,
        sourceId: t
    }, `${h.embedId}-${h.url}`))),
    n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>i.navigate("/source"),
            children: p
        }), n.jsx(N.Section, {
            children: f
        })]
    })
}
function uu(e) {
    let {id: t, onChoose: s} = e;
    const {t: r} = C()
      , i = B(t)
      , a = x(c=>{
        var u;
        return (u = c.meta) == null ? void 0 : u.type
    }
    )
      , o = x(c=>c.sourceId)
      , l = d.useMemo(()=>a ? ft().filter(c=>c.type === "source").filter(c=>{
        var u;
        return (u = c.mediaTypes) == null ? void 0 : u.includes(a)
    }
    ) : [], [a]);
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>i.navigate("/"),
            children: r("player.menus.sources.title")
        }), n.jsx(N.Section, {
            children: l.map(c=>n.jsx(He, {
                onClick: ()=>{
                    s == null || s(c.id),
                    i.navigate("/source/embeds")
                }
                ,
                selected: c.id === o,
                children: c.name
            }, c.id))
        })]
    })
}
const du = function(t) {
    return n.jsx("button", {
        type: "button",
        onClick: t.onClick,
        className: S("w-11 h-6 p-1 rounded-full grid transition-colors duration-100 group/toggle tabbable", t.enabled ? "bg-buttons-toggle" : "bg-buttons-toggleDisabled"),
        children: n.jsx("div", {
            className: "relative w-full h-full",
            children: n.jsx("div", {
                className: S("scale-90 group-hover/toggle:scale-100 h-full aspect-square rounded-full bg-white absolute transition-all duration-100", t.enabled ? "left-full transform -translate-x-full" : "left-0")
            })
        })
    })
}
  , jn = du
  , mu = function(t) {
    return n.jsx("button", {
        type: "button",
        className: S("tabbable p-1.5 bg-video-context-buttonFocus rounded transition-colors duration-100", t.active ? "bg-opacity-100" : "bg-opacity-0 cursor-pointer"),
        onClick: t.onClick,
        children: n.jsx("div", {
            className: "w-6 h-6 rounded-full flex justify-center items-center",
            style: {
                backgroundColor: t.color
            },
            children: t.active ? n.jsx(I, {
                className: "text-sm text-black",
                icon: k.CHECKMARK
            }) : null
        })
    })
}
  , hu = mu
  , fu = function(t) {
    const s = d.useRef(null)
      , r = d.useRef(null)
      , i = (t.value - t.min) / (t.max - t.min)
      , a = d.useCallback(b=>{
        var T;
        const y = t.max - t.min
          , j = Math.min(Math.max(b, 0), 1);
        (T = t.onChange) == null || T.call(t, t.min + y * j)
    }
    , [t])
      , {dragging: o, dragPercentage: l, dragMouseDown: c} = bn(r, a, !0)
      , [u,m] = d.useState(!1)
      , [p,g] = d.useState("");
    d.useEffect(()=>{
        function b(y) {
            var j;
            y.key === "Enter" && u && ((j = s.current) == null || j.blur())
        }
        return window.addEventListener("keydown", b),
        ()=>{
            window.removeEventListener("keydown", b)
        }
    }
    , [u]);
    const f = `tabbable py-1 bg-video-context-inputBg rounded text-white cursor-text ${t.controlButtons ? "text-center px-4 w-24" : "px-3 text-left w-20"}`
      , h = "tabbable hover:text-white transition-colors duration-100 w-full h-full flex justify-center items-center hover:bg-video-context-buttonOverInputHover rounded"
      , v = t.textTransformer ?? (b=>b);
    return n.jsxs("div", {
        children: [n.jsx(N.FieldTitle, {
            children: t.label
        }), n.jsxs("div", {
            className: "grid items-center grid-cols-[1fr,auto] gap-4",
            children: [n.jsx("div", {
                ref: r,
                children: n.jsx("div", {
                    className: "group/progress w-full h-8 flex items-center cursor-pointer",
                    onMouseDown: c,
                    onTouchStart: c,
                    children: n.jsx("div", {
                        dir: "ltr",
                        className: ["relative w-full h-1 bg-video-context-slider bg-opacity-25 rounded-full transition-[height] duration-100 group-hover/progress:h-1.5", o ? "!h-1.5" : ""].join(" "),
                        children: n.jsx("div", {
                            className: "absolute top-0 left-0 h-full rounded-full bg-video-context-sliderFilled flex justify-end items-center",
                            style: {
                                width: `${Math.max(0, Math.min(1, o ? l / 100 : i)) * 100}%`
                            },
                            children: n.jsx("div", {
                                className: ["w-[1rem] min-w-[1rem] h-[1rem] border-[4px] border-video-context-sliderFilled rounded-full transform translate-x-1/2 bg-white transition-[transform] duration-100"].join(" ")
                            })
                        })
                    })
                })
            }), n.jsx("div", {
                children: u ? n.jsx("input", {
                    className: f,
                    value: p,
                    autoFocus: !0,
                    onFocus: b=>{
                        b.target.select()
                    }
                    ,
                    onBlur: b=>{
                        var j;
                        m(!1);
                        const y = Number(b.target.value);
                        Number.isNaN(y) || (j = t.onChange) == null || j.call(t, (t.decimalsAllowed ?? 0) === 0 ? Math.round(y) : y)
                    }
                    ,
                    ref: s,
                    onChange: b=>g(b.target.value)
                }) : n.jsxs("div", {
                    className: "relative",
                    onClick: b=>{
                        b.target.closest(".actions") || (g(t.value.toFixed(t.decimalsAllowed ?? 0)),
                        m(!0))
                    }
                    ,
                    children: [n.jsx("button", {
                        className: S(f, t.controlButtons ? "relative" : void 0),
                        type: "button",
                        tabIndex: 0,
                        children: v(t.value.toFixed(t.decimalsAllowed ?? 0))
                    }), t.controlButtons ? n.jsxs(n.Fragment, {
                        children: [n.jsx("div", {
                            className: "actions w-6 h-full absolute left-0 top-0 grid grid-cols-1 items-center justify-center",
                            children: n.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    var b;
                                    return (b = t.onChange) == null ? void 0 : b.call(t, t.value - 1 / 10 ** (t.decimalsAllowed ?? 0))
                                }
                                ,
                                className: h,
                                children: n.jsx(I, {
                                    icon: k.CHEVRON_LEFT
                                })
                            })
                        }), n.jsx("div", {
                            className: "actions w-6 h-full absolute right-0 top-0 grid grid-cols-1 items-center justify-center",
                            children: n.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    var b;
                                    return (b = t.onChange) == null ? void 0 : b.call(t, t.value + 1 / 10 ** (t.decimalsAllowed ?? 0))
                                }
                                ,
                                className: h,
                                children: n.jsx(I, {
                                    icon: k.CHEVRON_RIGHT
                                })
                            })
                        })]
                    }) : null]
                })
            })]
        })]
    })
}
  , At = fu
  , gu = ["#ffffff", "#b0b0b0", "#80b1fa", "#e2e535"];
function xu(e) {
    let {id: t} = e;
    const {t: s} = C()
      , r = B(t)
      , i = D(m=>m.styling)
      , a = D(m=>m.overrideCasing)
      , o = D(m=>m.delay)
      , l = D(m=>m.setOverrideCasing)
      , c = D(m=>m.setDelay)
      , u = D(m=>m.updateStyling);
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>r.navigate("/captions"),
            children: s("player.menus.subtitles.settings.backlink")
        }), n.jsxs(N.Section, {
            className: "space-y-6",
            children: [n.jsx(At, {
                label: s("player.menus.subtitles.settings.delay"),
                max: 10,
                min: -10,
                onChange: m=>c(m),
                value: o,
                textTransformer: m=>`${m}s`,
                decimalsAllowed: 1,
                controlButtons: !0
            }), n.jsxs("div", {
                className: "flex justify-between items-center",
                children: [n.jsx(N.FieldTitle, {
                    children: s("player.menus.subtitles.settings.fixCapitals")
                }), n.jsx("div", {
                    className: "flex justify-center items-center",
                    children: n.jsx(jn, {
                        enabled: a,
                        onClick: ()=>l(!a)
                    })
                })]
            }), n.jsx(N.Divider, {}), n.jsx(At, {
                label: s("settings.subtitles.backgroundLabel"),
                max: 100,
                min: 0,
                onChange: m=>u({
                    backgroundOpacity: m / 100
                }),
                value: i.backgroundOpacity * 100,
                textTransformer: m=>`${m}%`
            }), n.jsx(At, {
                label: s("settings.subtitles.textSizeLabel"),
                max: 200,
                min: 1,
                textTransformer: m=>`${m}%`,
                onChange: m=>u({
                    size: m / 100
                }),
                value: i.size * 100
            }), n.jsxs("div", {
                className: "flex justify-between items-center",
                children: [n.jsx(N.FieldTitle, {
                    children: s("settings.subtitles.colorLabel")
                }), n.jsx("div", {
                    className: "flex justify-center items-center",
                    children: gu.map(m=>n.jsx(hu, {
                        onClick: ()=>u({
                            color: m
                        }),
                        color: m,
                        active: i.color === m
                    }, m))
                })]
            })]
        })]
    })
}
function pu(e) {
    return n.jsxs("div", {
        className: "w-full relative",
        children: [n.jsx(I, {
            className: "pointer-events-none absolute top-1/2 left-3 transform -translate-y-1/2 text-video-context-inputPlaceholder",
            icon: k.SEARCH
        }), n.jsx("input", {
            placeholder: "Search",
            className: "w-full py-2 px-3 pl-[calc(0.75rem+24px)] tabbable bg-video-context-inputBg rounded placeholder:text-video-context-inputPlaceholder",
            value: e.value,
            onInput: t=>e.onInput(t.currentTarget.value)
        })]
    })
}
function qt(e) {
    return n.jsx(He, {
        selected: e.selected,
        loading: e.loading,
        error: e.error,
        onClick: e.onClick,
        children: n.jsxs("span", {
            "data-active-link": e.selected ? !0 : void 0,
            className: "flex items-center",
            children: [n.jsx("span", {
                "data-code": e.countryCode,
                className: "mr-3 inline-flex",
                children: n.jsx(da, {
                    langCode: e.countryCode
                })
            }), n.jsx("span", {
                children: e.children
            })]
        })
    })
}
function bu() {
    const {t: e} = C()
      , t = x(a=>{
        var o;
        return (o = a.caption.selected) == null ? void 0 : o.language
    }
    )
      , s = x(a=>a.setCaption)
      , r = D(a=>a.setCustomSubs)
      , i = d.useRef(null);
    return n.jsxs(qt, {
        selected: t === "custom",
        onClick: ()=>{
            var a;
            return (a = i.current) == null ? void 0 : a.click()
        }
        ,
        children: [e("player.menus.subtitles.customChoice"), n.jsx("input", {
            className: "hidden",
            ref: i,
            accept: ac.join(","),
            type: "file",
            onChange: a=>{
                if (!a.target.files)
                    return;
                const o = new FileReader;
                o.addEventListener("load", l=>{
                    if (!l.target || typeof l.target.result != "string")
                        return;
                    const c = nn(l.target.result, "srt");
                    s({
                        language: "custom",
                        srtData: c
                    }),
                    r()
                }
                ),
                o.readAsText(a.target.files[0], "utf-8")
            }
        })]
    })
}
function yu(e, t) {
    const {t: s} = C()
      , r = s("player.menus.subtitles.unknownLanguage");
    return d.useMemo(()=>{
        const i = e.map(l=>({
            ...l,
            languageName: ws(l.language) ?? r
        }))
          , a = ma(i.map(l=>l.language));
        let o = i.sort((l,c)=>a.indexOf(l.language) - a.indexOf(c.language));
        return t.trim().length > 0 && (o = new xa(i,{
            includeScore: !0,
            keys: ["languageName"]
        }).search(t).map(c=>c.item)),
        o
    }
    , [e, t, r])
}
function vu(e) {
    let {id: t} = e;
    const {t: s} = C()
      , r = B(t)
      , i = x(b=>{
        var y;
        return (y = b.caption.selected) == null ? void 0 : y.language
    }
    )
      , [a,o] = d.useState(null)
      , {selectLanguage: l, disable: c} = kt()
      , u = x(b=>b.captionList)
      , [m,p] = d.useState("")
      , g = yu(u, m)
      , [f,h] = se(async b=>(o(b),
    l(b)), [l, o])
      , v = g.map((b,y)=>n.jsx(qt, {
        countryCode: b.language,
        selected: i === b.language,
        loading: b.language === a && f.loading,
        error: b.language === a && f.error ? f.error.toString() : void 0,
        onClick: ()=>h(b.language),
        children: b.languageName
    }, `${y}-${b.url}`));
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("div", {
            children: [n.jsx(N.BackLink, {
                onClick: ()=>r.navigate("/"),
                rightSide: n.jsx("button", {
                    type: "button",
                    onClick: ()=>r.navigate("/captions/settings"),
                    className: "py-1 -my-1 px-3 -mx-3 rounded tabbable",
                    children: s("player.menus.subtitles.customizeLabel")
                }),
                children: s("player.menus.subtitles.title")
            }), n.jsx("div", {
                className: "mt-3",
                children: n.jsx(pu, {
                    value: m,
                    onInput: p
                })
            })]
        }), n.jsxs(N.ScrollToActiveSection, {
            className: "!pt-1 mt-2 pb-3",
            children: [n.jsx(qt, {
                onClick: ()=>c(),
                selected: !i,
                children: s("player.menus.subtitles.offChoice")
            }), n.jsx(bu, {}), v]
        })]
    })
}
function ju() {
    const e = x(r=>r.source)
      , t = x(r=>r.currentQuality);
    return d.useMemo(()=>{
        var r;
        return (e == null ? void 0 : e.type) === "file" && t ? ((r = e.qualities[t]) == null ? void 0 : r.url) ?? null : (e == null ? void 0 : e.type) === "hls" ? e.url : null
    }
    , [e, t])
}
function me(e) {
    return n.jsx(Me, {
        i18nKey: e.k,
        components: {
            bold: n.jsx(N.Highlight, {}),
            ios_share: n.jsx(I, {
                icon: k.IOS_SHARE,
                className: "inline-block text-xl -mb-1"
            }),
            ios_files: n.jsx(I, {
                icon: k.IOS_FILES,
                className: "inline-block text-xl -mb-1"
            })
        }
    })
}
function wu(e) {
    let {id: t} = e;
    const s = B(t)
      , {t: r} = C()
      , i = ju()
      , a = x(c=>{
        var u;
        return (u = c.source) == null ? void 0 : u.type
    }
    )
      , o = x(c=>{
        var u;
        return (u = c.caption) == null ? void 0 : u.selected
    }
    )
      , l = d.useMemo(()=>o ? rc(o == null ? void 0 : o.srtData) : null, [o]);
    return i ? n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/"),
            children: r("player.menus.downloads.title")
        }), n.jsx(N.Section, {
            children: n.jsx("div", {
                children: a === "hls" ? n.jsxs(n.Fragment, {
                    children: [n.jsx(N.Paragraph, {
                        marginClass: "mb-6",
                        children: n.jsx(me, {
                            k: "player.menus.downloads.hlsDisclaimer"
                        })
                    }), n.jsx(M, {
                        className: "w-full",
                        href: i,
                        theme: "purple",
                        children: r("player.menus.downloads.downloadPlaylist")
                    }), n.jsx(M, {
                        className: "w-full mt-2",
                        href: l ?? void 0,
                        disabled: !l,
                        theme: "secondary",
                        download: "subtitles.srt",
                        children: r("player.menus.downloads.downloadSubtitle")
                    })]
                }) : n.jsxs(n.Fragment, {
                    children: [n.jsx(N.ChevronLink, {
                        onClick: ()=>s.navigate("/download/pc"),
                        children: r("player.menus.downloads.onPc.title")
                    }), n.jsx(N.ChevronLink, {
                        onClick: ()=>s.navigate("/download/ios"),
                        children: r("player.menus.downloads.onIos.title")
                    }), n.jsx(N.ChevronLink, {
                        onClick: ()=>s.navigate("/download/android"),
                        children: r("player.menus.downloads.onAndroid.title")
                    }), n.jsx(N.Divider, {}), n.jsx(N.Paragraph, {
                        marginClass: "my-6",
                        children: n.jsx(me, {
                            k: "player.menus.downloads.disclaimer"
                        })
                    }), n.jsx(M, {
                        className: "w-full",
                        href: i,
                        theme: "purple",
                        children: r("player.menus.downloads.downloadVideo")
                    }), n.jsx(M, {
                        className: "w-full mt-2",
                        href: l ?? void 0,
                        disabled: !l,
                        theme: "secondary",
                        download: "subtitles.srt",
                        children: r("player.menus.downloads.downloadSubtitle")
                    })]
                })
            })
        })]
    }) : null
}
function ku(e) {
    let {id: t} = e;
    const s = B(t)
      , {t: r} = C();
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/"),
            children: r("player.menus.downloads.title")
        }), n.jsx(N.Section, {
            children: n.jsx(N.Paragraph, {
                children: n.jsx(me, {
                    k: "player.menus.downloads.hlsExplanation"
                })
            })
        })]
    })
}
function Nu(e) {
    let {id: t} = e;
    const s = B(t)
      , {t: r} = C();
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/download"),
            children: r("player.menus.downloads.onAndroid.shortTitle")
        }), n.jsx(N.Section, {
            children: n.jsx(N.Paragraph, {
                children: n.jsx(me, {
                    k: "player.menus.downloads.onAndroid.1"
                })
            })
        })]
    })
}
function Su(e) {
    let {id: t} = e;
    const s = B(t)
      , {t: r} = C();
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/download"),
            children: r("player.menus.downloads.onPc.shortTitle")
        }), n.jsx(N.Section, {
            children: n.jsx(N.Paragraph, {
                children: n.jsx(me, {
                    k: "player.menus.downloads.onPc.1"
                })
            })
        })]
    })
}
function Cu(e) {
    let {id: t} = e;
    const s = B(t);
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/download"),
            children: n.jsx(me, {
                k: "player.menus.downloads.onIos.shortTitle"
            })
        }), n.jsx(N.Section, {
            children: n.jsx(N.Paragraph, {
                children: n.jsx(me, {
                    k: "player.menus.downloads.onIos.1"
                })
            })
        })]
    })
}
function Eu(e) {
    let {id: t} = e;
    return n.jsxs(n.Fragment, {
        children: [n.jsx(W, {
            id: t,
            path: "/download",
            width: 343,
            height: 490,
            children: n.jsx(N.CardWithScrollable, {
                children: n.jsx(wu, {
                    id: t
                })
            })
        }), n.jsx(W, {
            id: t,
            path: "/download/unable",
            width: 343,
            height: 440,
            children: n.jsx(N.CardWithScrollable, {
                children: n.jsx(ku, {
                    id: t
                })
            })
        }), n.jsx(W, {
            id: t,
            path: "/download/ios",
            width: 343,
            height: 440,
            children: n.jsx(N.CardWithScrollable, {
                children: n.jsx(Cu, {
                    id: t
                })
            })
        }), n.jsx(W, {
            id: t,
            path: "/download/android",
            width: 343,
            height: 440,
            children: n.jsx(N.CardWithScrollable, {
                children: n.jsx(Nu, {
                    id: t
                })
            })
        }), n.jsx(W, {
            id: t,
            path: "/download/pc",
            width: 343,
            height: 440,
            children: n.jsx(N.CardWithScrollable, {
                children: n.jsx(Su, {
                    id: t
                })
            })
        })]
    })
}
const Iu = function(t) {
    return n.jsx("div", {
        className: "flex items-center bg-video-context-buttons-list p-1 rounded-lg",
        children: t.options.map(s=>n.jsxs("button", {
            type: "button",
            className: S("w-full px-2 py-1 rounded-md tabbable", t.selected === s ? "bg-video-context-buttons-active text-white" : null),
            onClick: ()=>t.onClick(s),
            children: [s, "x"]
        }, s))
    })
}
  , Lu = Iu;
function Tu(e) {
    let {id: t} = e;
    const {t: s} = C()
      , r = B(t)
      , i = x(c=>c.mediaPlaying.playbackRate)
      , a = x(c=>c.display)
      , o = d.useCallback(c=>{
        a == null || a.setPlaybackRate(c)
    }
    , [a])
      , l = [.25, .5, 1, 1.5, 2];
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>r.navigate("/"),
            children: s("player.menus.playback.title")
        }), n.jsx(N.Section, {
            children: n.jsxs("div", {
                className: "space-y-4 mt-3",
                children: [n.jsx(N.FieldTitle, {
                    children: s("player.menus.playback.speedLabel")
                }), n.jsx(Lu, {
                    options: l,
                    selected: i,
                    onClick: o
                })]
            })
        })]
    })
}
const Pu = {
    unknown: !1,
    360: !0,
    480: !0,
    720: !0,
    1080: !0,
    "4k": !1
};
function Ru() {
    const e = x(s=>{
        var r;
        return (r = s.source) == null ? void 0 : r.type
    }
    );
    return d.useMemo(()=>{
        const s = document.createElement("video");
        return !(e !== "hls" || oe.isSupported() || !et(s))
    }
    , [e])
}
function Au(e) {
    let {id: t} = e;
    const s = B(t)
      , r = Ru()
      , i = x(h=>h.qualities)
      , a = x(h=>h.currentQuality)
      , o = x(h=>h.switchQuality)
      , l = x(h=>h.enableAutomaticQuality)
      , c = Ae(h=>h.setAutomaticQuality)
      , u = Ae(h=>h.setLastChosenQuality)
      , m = Ae(h=>h.quality.automaticQuality)
      , p = d.useCallback(h=>{
        u(h),
        c(!1),
        o(h),
        s.close()
    }
    , [s, o, u, c])
      , g = d.useCallback(()=>{
        const h = !m;
        c(h),
        h && l()
    }
    , [c, m, l])
      , f = zl.filter(h=>!!(Pu[h] || i.includes(h)));
    return n.jsxs(n.Fragment, {
        children: [n.jsx(N.BackLink, {
            onClick: ()=>s.navigate("/"),
            children: Tn("player.menus.quality.title")
        }), n.jsxs(N.Section, {
            className: "flex flex-col pb-4",
            children: [f.map(h=>n.jsx(He, {
                selected: h === a,
                onClick: i.includes(h) ? ()=>p(h) : void 0,
                disabled: !i.includes(h),
                children: ur(h)
            }, h)), n.jsx(N.Divider, {}), n.jsx(N.Link, {
                rightSide: n.jsx(jn, {
                    onClick: g,
                    enabled: m
                }),
                children: Tn("player.menus.quality.automaticLabel")
            }), n.jsx(N.SmallText, {
                children: n.jsx(Me, {
                    i18nKey: r ? "player.menus.quality.iosNoQuality" : "player.menus.quality.hint",
                    children: n.jsx(N.Anchor, {
                        onClick: ()=>s.navigate("/source"),
                        children: "text"
                    })
                })
            })]
        })]
    })
}
function Mu(e) {
    let {id: t} = e;
    const {t: s} = C()
      , r = B(t)
      , i = x(f=>f.currentQuality)
      , a = x(f=>{
        var h;
        return (h = f.caption.selected) == null ? void 0 : h.language
    }
    )
      , o = D(f=>f.enabled)
      , l = x(f=>f.sourceId)
      , c = d.useMemo(()=>{
        if (!l)
            return "...";
        const f = ft().find(h=>h.id === l);
        return (f == null ? void 0 : f.name) ?? "..."
    }
    , [l])
      , {toggleLastUsed: u} = kt()
      , m = a ? ws(a) ?? s("player.menus.subtitles.unknownLanguage") : void 0
      , p = x(f=>f.source)
      , g = (p == null ? void 0 : p.type) === "file" || (p == null ? void 0 : p.type) === "hls";
    return n.jsxs(N.Card, {
        children: [n.jsx(N.SectionTitle, {
            children: s("player.menus.settings.videoSection")
        }), n.jsxs(N.Section, {
            children: [n.jsx(N.ChevronLink, {
                onClick: ()=>r.navigate("/quality"),
                rightText: i ? ur(i) : "",
                children: s("player.menus.settings.qualityItem")
            }), n.jsx(N.ChevronLink, {
                onClick: ()=>r.navigate("/source"),
                rightText: c,
                children: s("player.menus.settings.sourceItem")
            }), n.jsx(N.Link, {
                clickable: !0,
                onClick: ()=>r.navigate(g ? "/download" : "/download/unable"),
                rightSide: n.jsx(I, {
                    className: "text-xl",
                    icon: k.DOWNLOAD
                }),
                className: g ? "opacity-100" : "opacity-50",
                children: s("player.menus.settings.downloadItem")
            })]
        }), n.jsx(N.SectionTitle, {
            children: s("player.menus.settings.experienceSection")
        }), n.jsxs(N.Section, {
            children: [n.jsx(N.Link, {
                rightSide: n.jsx(jn, {
                    enabled: o,
                    onClick: ()=>u().catch(()=>{}
                    )
                }),
                children: s("player.menus.settings.enableSubtitles")
            }), n.jsx(N.ChevronLink, {
                onClick: ()=>r.navigate("/captions"),
                rightText: m ?? void 0,
                children: s("player.menus.settings.subtitleItem")
            }), n.jsx(N.ChevronLink, {
                onClick: ()=>r.navigate("/playback"),
                children: s("player.menus.settings.playbackItem")
            })]
        })]
    })
}
function _u(e) {
    let {id: t} = e;
    const [s,r] = d.useState(null)
      , i = B(t);
    return d.useEffect(()=>{
        i.isRouterActive || r(null),
        i.route === "/" && r(null)
    }
    , [i.isRouterActive, i.route]),
    n.jsx(Js, {
        id: t,
        children: n.jsxs(wr, {
            id: t,
            children: [n.jsx(W, {
                id: t,
                path: "/",
                width: 343,
                height: 431,
                children: n.jsx(Mu, {
                    id: t
                })
            }), n.jsx(W, {
                id: t,
                path: "/quality",
                width: 343,
                height: 400,
                children: n.jsx(N.Card, {
                    children: n.jsx(Au, {
                        id: t
                    })
                })
            }), n.jsx(W, {
                id: t,
                path: "/captions",
                width: 343,
                height: 431,
                children: n.jsx(N.CardWithScrollable, {
                    children: n.jsx(vu, {
                        id: t
                    })
                })
            }), n.jsx(W, {
                id: t,
                path: "/captions/settings",
                width: 343,
                height: 450,
                children: n.jsx(N.Card, {
                    children: n.jsx(xu, {
                        id: t
                    })
                })
            }), n.jsx(W, {
                id: t,
                path: "/source",
                width: 343,
                height: 431,
                children: n.jsx(N.CardWithScrollable, {
                    children: n.jsx(uu, {
                        id: t,
                        onChoose: r
                    })
                })
            }), n.jsx(W, {
                id: t,
                path: "/source/embeds",
                width: 343,
                height: 431,
                children: n.jsx(N.CardWithScrollable, {
                    children: n.jsx(cu, {
                        id: t,
                        sourceId: s
                    })
                })
            }), n.jsx(W, {
                id: t,
                path: "/playback",
                width: 343,
                height: 215,
                children: n.jsx(N.Card, {
                    children: n.jsx(Tu, {
                        id: t
                    })
                })
            }), n.jsx(Eu, {
                id: t
            })]
        })
    })
}
function Ou() {
    return n.jsx(_u, {
        id: "settings"
    })
}
function ts() {
    const e = B("settings")
      , t = x(s=>s.setHasOpenOverlay);
    return d.useEffect(()=>{
        t(e.isRouterActive)
    }
    , [t, e.isRouterActive]),
    n.jsx(jr, {
        id: e.id,
        children: n.jsx(te, {
            onClick: ()=>e.open(),
            icon: k.GEAR
        })
    })
}
const Du = function(t) {
    const s = t.radius ?? 40;
    return n.jsxs("svg", {
        className: `${t.className ?? ""} -rotate-90`,
        viewBox: "0 0 100 100",
        children: [n.jsx("circle", {
            className: `fill-transparent stroke-type-text stroke-[15] opacity-25 ${t.backingRingClassname ?? ""}`,
            r: s,
            cx: "50",
            cy: "50"
        }), n.jsx("circle", {
            className: "fill-transparent stroke-current stroke-[15] transition-[stroke-dashoffset] duration-150",
            r: s,
            cx: "50",
            cy: "50",
            style: {
                strokeDasharray: `${2 * Math.PI * s} ${2 * Math.PI * s}`,
                strokeDashoffset: `${2 * Math.PI * s - t.percentage / 100 * (2 * Math.PI * s)}`
            }
        })]
    })
}
  , Bu = Du;
function Sr() {
    const {meta: e, setMeta: t} = fr()
      , s = d.useMemo(()=>e ? dr(e) : null, [e])
      , r = d.useCallback(a=>{
        t(a, R.SCRAPING)
    }
    , [t])
      , i = d.useCallback((a,o)=>{
        let l;
        if (a.meta.type === P.SERIES) {
            const c = a.meta.seasonData.episodes.find(u=>u.id === o);
            if (!c)
                return null;
            l = {
                type: "show",
                releaseYear: +(a.meta.year ?? 0),
                title: a.meta.title,
                poster: a.meta.poster,
                tmdbId: a.tmdbId ?? "",
                imdbId: a.imdbId,
                episodes: a.meta.seasonData.episodes.map(u=>({
                    number: u.number,
                    title: u.title,
                    tmdbId: u.id
                })),
                episode: {
                    number: c.number,
                    title: c.title,
                    tmdbId: c.id
                },
                season: {
                    number: a.meta.seasonData.number,
                    title: a.meta.seasonData.title,
                    tmdbId: a.meta.seasonData.id
                }
            }
        } else
            l = {
                type: "movie",
                releaseYear: +(a.meta.year ?? 0),
                title: a.meta.title,
                poster: a.meta.poster,
                tmdbId: a.tmdbId ?? "",
                imdbId: a.imdbId
            };
        return r(l),
        l
    }
    , [r]);
    return {
        playerMeta: e,
        setPlayerMeta: i,
        setDirectMeta: r,
        scrapeMedia: s
    }
}
const Xe = {};
function Ze(e) {
    if (Xe[e])
        return Xe[e];
    const t = new Date
      , s = new Date(e);
    return Xe[e] = s < t,
    Xe[e]
}
function ut(e) {
    return n.jsx("div", {
        className: "h-full w-full flex justify-center items-center p-8 text-center",
        children: e.children
    })
}
function Cr(e, t) {
    const [s,r] = d.useState(null);
    return [mt(async()=>{
        const a = await Ft(P.SERIES, e, t);
        return (a == null ? void 0 : a.meta.type) !== P.SERIES ? null : (r(a.meta.seasons),
        {
            season: a.meta.seasonData,
            fullData: a
        })
    }
    , [e, t]), s]
}
function Fu(e) {
    let {selectedSeason: t, setSeason: s} = e;
    const {t: r} = C()
      , i = x(c=>c.meta)
      , [a,o] = Cr((i == null ? void 0 : i.tmdbId) ?? "", t);
    let l = null;
    return o ? l = n.jsx(N.Section, {
        className: "pb-6",
        children: o == null ? void 0 : o.map(c=>n.jsx(N.ChevronLink, {
            onClick: ()=>s(c.id),
            children: c.title
        }, c.id))
    }) : a.error ? l = n.jsx(ut, {
        children: r("player.menus.episodes.loadingError")
    }) : a.loading && (l = n.jsx(ut, {
        children: r("player.menus.episodes.loadingList")
    })),
    n.jsxs(N.CardWithScrollable, {
        children: [n.jsx(N.Title, {
            children: (i == null ? void 0 : i.title) ?? r("player.menus.episodes.loadingTitle")
        }), l]
    })
}
function Uu(e) {
    var f;
    let {id: t, selectedSeason: s, goBack: r, onChange: i} = e;
    const {t: a} = C()
      , o = B(t)
      , {setPlayerMeta: l} = Sr()
      , c = x(h=>h.meta)
      , [u] = Cr((c == null ? void 0 : c.tmdbId) ?? "", s)
      , m = H()
      , p = d.useCallback(h=>{
        if (u.value) {
            const v = l(u.value.fullData, h);
            v && (i == null || i(v))
        }
        o.close(!0)
    }
    , [l, u, o, i]);
    if (!(c != null && c.tmdbId))
        return null;
    let g = null;
    if (u.error)
        g = n.jsx(ut, {
            children: a("player.menus.episodes.loadingError")
        });
    else if (u.loading)
        g = n.jsx(ut, {
            children: a("player.menus.episodes.loadingList")
        });
    else if (u.value) {
        const h = u.value.season.episodes.some(v=>!Ze(v.air_date));
        g = n.jsxs(N.ScrollToActiveSection, {
            className: "pb-6",
            children: [u.value.season.episodes.length === 0 ? n.jsx(N.TextDisplay, {
                title: "No episodes found",
                children: a("player.menus.episodes.emptyState")
            }) : null, u.value.season.episodes.map(v=>{
                var j, T, L, w, E, O;
                const b = (T = (j = m.items[c == null ? void 0 : c.tmdbId]) == null ? void 0 : j.episodes) == null ? void 0 : T[v.id];
                let y;
                if (b) {
                    const F = b.progress.watched / b.progress.duration * 100;
                    y = n.jsx(Bu, {
                        className: "h-[18px] w-[18px] text-white",
                        percentage: F > 90 ? 100 : F
                    })
                }
                return n.jsx(N.Link, {
                    onClick: ()=>p(v.id),
                    active: v.id === ((L = c == null ? void 0 : c.episode) == null ? void 0 : L.tmdbId),
                    clickable: Ze(v.air_date),
                    rightSide: y,
                    children: n.jsx(N.LinkTitle, {
                        children: n.jsxs("div", {
                            className: S("text-left flex items-center space-x-3 text-video-context-type-main", Ze(v.air_date) || v.id === ((w = c == null ? void 0 : c.episode) == null ? void 0 : w.tmdbId) ? "" : "text-opacity-25"),
                            children: [n.jsx("span", {
                                className: S("p-0.5 px-2 rounded inline bg-video-context-hoverColor", v.id === ((E = c == null ? void 0 : c.episode) == null ? void 0 : E.tmdbId) ? "text-white bg-opacity-100" : "bg-opacity-50", Ze(v.air_date) || v.id === ((O = c == null ? void 0 : c.episode) == null ? void 0 : O.tmdbId) ? "" : "!bg-opacity-25"),
                                children: a("player.menus.episodes.episodeBadge", {
                                    episode: v.number
                                })
                            }), n.jsx("span", {
                                className: "line-clamp-1 break-all",
                                children: v.title
                            })]
                        })
                    })
                }, v.id)
            }
            ), h ? n.jsx("p", {
                children: a("player.menus.episodes.unairedEpisodes")
            }) : null]
        })
    }
    return n.jsxs(N.CardWithScrollable, {
        children: [n.jsx(N.BackLink, {
            onClick: r,
            children: ((f = u == null ? void 0 : u.value) == null ? void 0 : f.season.title) || a("player.menus.episodes.loadingTitle")
        }), g]
    })
}
function $u(e) {
    let {id: t, onChange: s} = e;
    const r = B(t)
      , i = x(u=>u.meta)
      , [a,o] = d.useState("")
      , l = d.useRef(!1);
    d.useEffect(()=>{
        var u;
        l.current !== r.isRouterActive && (l.current = r.isRouterActive,
        o(((u = i == null ? void 0 : i.season) == null ? void 0 : u.tmdbId) ?? ""))
    }
    , [i, a, o, r.isRouterActive]);
    const c = d.useCallback(u=>{
        o(u),
        r.navigate("/episodes")
    }
    , [r]);
    return n.jsx(Js, {
        id: t,
        children: n.jsxs(wr, {
            id: t,
            children: [n.jsx(W, {
                id: t,
                path: "/",
                width: 343,
                height: 431,
                children: n.jsx(Fu, {
                    setSeason: c,
                    selectedSeason: a
                })
            }), n.jsx(W, {
                id: t,
                path: "/episodes",
                width: 343,
                height: 431,
                children: a.length > 0 ? n.jsx(Uu, {
                    selectedSeason: a,
                    id: t,
                    goBack: ()=>r.navigate("/"),
                    onChange: s
                }) : null
            })]
        })
    })
}
function Vu(e) {
    return n.jsx($u, {
        onChange: e.onChange,
        id: "episodes"
    })
}
function ns() {
    const {t: e} = C()
      , t = B("episodes")
      , s = x(i=>i.setHasOpenOverlay)
      , r = x(i=>{
        var a;
        return (a = i.meta) == null ? void 0 : a.type
    }
    );
    return d.useEffect(()=>{
        s(t.isRouterActive)
    }
    , [s, t.isRouterActive]),
    r !== "show" ? null : n.jsx(jr, {
        id: t.id,
        children: n.jsx(te, {
            onClick: ()=>t.open("/episodes"),
            icon: k.EPISODES,
            children: e("player.menus.episodes.button")
        })
    })
}
function ss() {
    const e = x(s=>s.interface.canAirplay)
      , t = x(s=>s.display);
    return e ? n.jsx(te, {
        onClick: ()=>t == null ? void 0 : t.startAirplay(),
        icon: k.AIRPLAY
    }) : null
}
function Hu() {
    const e = Ks()
      , t = x(s=>s.mediaPlaying.volume);
    return n.jsx(Q, {
        animation: "slide-down",
        show: e.showVolume,
        className: "absolute inset-x-0 top-4 flex justify-center pointer-events-none",
        children: n.jsxs(Z.Base, {
            className: "hover:flare-enabled pointer-events-auto bg-video-context-background pl-4 pr-6 py-3 group w-72 h-full rounded-lg transition-colors text-video-context-type-main",
            children: [n.jsx(Z.Light, {
                enabled: !0,
                flareSize: 200,
                cssColorVar: "--colors-video-context-light",
                backgroundClass: "bg-video-context-background duration-100",
                className: "rounded-lg"
            }), n.jsxs(Z.Child, {
                className: "grid grid-cols-[auto,1fr] gap-3 pointer-events-auto relative transition-transform",
                children: [n.jsx(I, {
                    className: "text-2xl",
                    icon: t > 0 ? k.VOLUME : k.VOLUME_X
                }), n.jsx("div", {
                    className: "w-full flex items-center",
                    children: n.jsx("div", {
                        className: "w-full h-1.5 rounded-full bg-video-context-slider bg-opacity-25",
                        children: n.jsx("div", {
                            className: "h-full bg-video-context-sliderFilled rounded-full transition-[width] duration-100",
                            style: {
                                width: `${t * 100}%`
                            }
                        })
                    })
                })]
            })]
        })
    })
}
function Wu(e, t) {
    const s = e / t;
    return t - e <= 30 ? "always" : s >= .9 ? "hover" : "none"
}
function rs(e) {
    return n.jsx("button", {
        className: S("font-bold rounded h-10 w-40 scale-95 hover:scale-100 transition-all duration-200", e.className),
        type: "button",
        onClick: e.onClick,
        children: e.children
    })
}
function zu(e) {
    var y;
    const {t} = C()
      , s = x(j=>j.progress.duration)
      , r = x(j=>j.interface.hideNextEpisodeBtn)
      , i = x(j=>j.meta)
      , {setDirectMeta: a} = Sr()
      , o = x(j=>j.hideNextEpisodeButton)
      , l = x(j=>{
        var T;
        return (T = j.meta) == null ? void 0 : T.type
    }
    )
      , c = x(j=>j.progress.time)
      , u = Wu(c, s)
      , m = x(j=>j.status)
      , p = x(j=>j.setShouldStartFromBeginning);
    let g = !1;
    (u === "always" || u === "hover" && e.controlsShowing) && (g = !0),
    (r || m !== "playing" || s === 0) && (g = !1);
    const f = u === "hover" ? "slide-up" : "fade";
    let h = "bottom-[calc(6rem+env(safe-area-inset-bottom))]";
    u === "always" && (h = e.controlsShowing ? h : "bottom-[calc(3rem+env(safe-area-inset-bottom))]");
    const v = (y = i == null ? void 0 : i.episodes) == null ? void 0 : y.find(j=>{
        var T;
        return j.number === (((T = i == null ? void 0 : i.episode) == null ? void 0 : T.number) ?? 0) + 1
    }
    )
      , b = d.useCallback(()=>{
        var T;
        if (!i || !v)
            return;
        const j = {
            ...i
        };
        j.episode = v,
        p(!0),
        a(j),
        (T = e.onChange) == null || T.call(e, j)
    }
    , [a, v, i, e, p]);
    return !(i != null && i.episode) || !v || l !== "show" ? null : n.jsx(Q, {
        animation: f,
        show: g,
        className: "absolute right-[calc(3rem+env(safe-area-inset-right))] bottom-0",
        children: n.jsxs("div", {
            className: S(["absolute bottom-0 right-0 transition-[bottom] duration-200 flex items-center space-x-3", h]),
            children: [n.jsx(rs, {
                className: "py-px box-content bg-buttons-secondary hover:bg-buttons-secondaryHover bg-opacity-90 text-buttons-secondaryText",
                onClick: o,
                children: t("player.nextEpisode.cancel")
            }), n.jsxs(rs, {
                onClick: ()=>b(),
                className: "bg-buttons-primary hover:bg-buttons-primaryHover text-buttons-primaryText flex justify-center items-center",
                children: [n.jsx(I, {
                    className: "text-xl mr-1",
                    icon: k.SKIP_EPISODE
                }), t("player.nextEpisode.next")]
            })]
        })
    })
}
function is(e) {
    const [t,s] = d.useState(!1)
      , r = x(o=>o.interface.isCasting)
      , i = d.useRef(null)
      , a = d.useCallback(o=>{
        const l = (o.getAttribute("style") ?? "").includes("inline");
        s(!l)
    }
    , [s]);
    return d.useEffect(()=>{
        var c;
        const o = (c = i.current) == null ? void 0 : c.querySelector("google-cast-launcher");
        if (!o)
            return;
        const l = new MutationObserver(()=>{
            a(o)
        }
        );
        return l.observe(o, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        a(o),
        ()=>{
            l.disconnect()
        }
    }
    , [a]),
    n.jsx(te, {
        ref: i,
        className: [e.className ?? "", "google-cast-button", r ? "casting" : "", t ? "hidden" : ""].join(" "),
        icon: k.CASTING,
        onClick: o=>{
            const l = o.querySelector("google-cast-launcher");
            l && l.click()
        }
    })
}
function Qu() {
    const {t: e} = C()
      , t = x(i=>i.mediaPlaying.isLoading)
      , s = x(i=>i.display)
      , r = (s == null ? void 0 : s.getType()) === "casting";
    return t || !r ? null : n.jsxs("div", {
        className: "flex flex-col items-center justify-center gap-4",
        children: [n.jsx("div", {
            className: "rounded-full bg-opacity-10 bg-video-buttonBackground p-3 brightness-100 grayscale",
            children: n.jsx(I, {
                icon: k.CASTING
            })
        }), n.jsx("p", {
            className: "text-center",
            children: e("player.casting.enabled")
        })]
    })
}
function Ku(e, t) {
    for (let s = 0; s < t.length; s += 1)
        if (t.start(t.length - 1 - s) < e)
            return t.end(t.length - 1 - s);
    return 0
}
const Gu = {
    1: {
        name: "MEDIA_ERR_ABORTED",
        key: "player.playbackError.errors.errorAborted"
    },
    2: {
        name: "MEDIA_ERR_NETWORK",
        key: "player.playbackError.errors.errorNetwork"
    },
    3: {
        name: "MEDIA_ERR_DECODE",
        key: "player.playbackError.errors.errorDecode"
    },
    4: {
        name: "MEDIA_ERR_SRC_NOT_SUPPORTED",
        key: "player.playbackError.errors.errorNotSupported"
    }
};
function qu(e) {
    const t = Gu[(e == null ? void 0 : e.code) ?? -1];
    return t || {
        name: "MEDIA_ERR_GENERIC",
        key: "player.playbackError.errors.errorGenericMedia"
    }
}
function je(e) {
    const t = new URL(e)
      , s = _().CDN_REPLACEMENTS;
    for (const [r,i] of s)
        if (t.hostname.endsWith(r))
            return t.hostname = i,
            t.port = "",
            t.protocol = "https://",
            t.toString();
    return e
}
function Er() {
    const e = {};
    return {
        on(t, s) {
            var r;
            e[t] || (e[t] = []),
            (r = e[t]) == null || r.push(s)
        },
        off(t, s) {
            var r;
            e[t] = ((r = e[t]) == null ? void 0 : r.filter(i=>i !== s)) ?? []
        },
        emit(t, s) {
            (e[t] ?? []).forEach(r=>r(s))
        }
    }
}
const Ir = {
    360: "360",
    1080: "1080",
    720: "720",
    480: "480"
};
function nt(e) {
    return Ir[e.height] ?? null
}
function Yu(e) {
    const t = Object.entries(Ir).find(s=>s[1] === e);
    return t ? +t[0] : null
}
function Ju(e) {
    return e.map(t=>nt(t)).filter(t=>!!t)
}
function Lr() {
    const {emit: e, on: t, off: s} = Er();
    let r = null
      , i = null
      , a = null
      , o = null
      , l = !1
      , c = !1
      , u = !1
      , m = 0
      , p = !1
      , g = null
      , f = 1;
    function h() {
        if (!i)
            return;
        const E = i.levels.map(O=>nt(O)).filter(O=>!!O);
        e("qualities", E)
    }
    function v() {
        if (a && et(a) || !i)
            return;
        if (p)
            i.currentLevel = -1,
            i.loadLevel = -1;
        else {
            const E = Ju(i.levels)
              , O = lr(E, {
                lastChosenQuality: g,
                automaticQuality: p
            });
            if (O) {
                const F = i.levels.findIndex(ue=>ue.height === Yu(O));
                F !== -1 && (i.currentLevel = F,
                i.loadLevel = F)
            }
        }
        const w = nt(i.levels[i.currentLevel]);
        e("changedquality", w)
    }
    function b(w, E) {
        if (E.type === "hls") {
            if (et(w)) {
                w.src = je(E.url),
                w.currentTime = m;
                return
            }
            if (!oe.isSupported())
                throw new Error("HLS not supported");
            i || (i = new oe({
                maxBufferSize: 500 * 1e3 * 1e3,
                fragLoadPolicy: {
                    default: {
                        maxLoadTimeMs: 30 * 1e3,
                        maxTimeToFirstByteMs: 30 * 1e3,
                        errorRetry: {
                            maxNumRetry: 2,
                            retryDelayMs: 1e3,
                            maxRetryDelayMs: 8e3
                        },
                        timeoutRetry: {
                            maxNumRetry: 3,
                            maxRetryDelayMs: 0,
                            retryDelayMs: 0
                        }
                    }
                }
            }),
            i.on(oe.Events.ERROR, (O,F)=>{
                console.error("HLS error", F),
                F.fatal && e("error", {
                    message: F.error.message,
                    stackTrace: F.error.stack,
                    errorName: F.error.name,
                    type: "hls"
                })
            }
            ),
            i.on(oe.Events.MANIFEST_LOADED, ()=>{
                i && (h(),
                v())
            }
            ),
            i.on(oe.Events.LEVEL_SWITCHED, ()=>{
                if (!i)
                    return;
                const O = nt(i.levels[i.currentLevel]);
                e("changedquality", O)
            }
            )),
            i.attachMedia(w),
            i.loadSource(je(E.url)),
            w.currentTime = m;
            return
        }
        w.src = je(E.url),
        w.currentTime = m
    }
    function y() {
        !a || !r || (b(a, r),
        a.addEventListener("play", ()=>{
            e("play", void 0),
            e("loading", !1)
        }
        ),
        a.addEventListener("error", ()=>{
            const w = (a == null ? void 0 : a.error) ?? null
              , E = qu(w);
            e("error", {
                errorName: E.name,
                key: E.key,
                type: "htmlvideo"
            })
        }
        ),
        a.addEventListener("playing", ()=>e("play", void 0)),
        a.addEventListener("pause", ()=>e("pause", void 0)),
        a.addEventListener("canplay", ()=>e("loading", !1)),
        a.addEventListener("waiting", ()=>e("loading", !0)),
        a.addEventListener("volumechange", ()=>e("volumechange", a != null && a.muted ? 0 : (a == null ? void 0 : a.volume) ?? 0)),
        a.addEventListener("timeupdate", ()=>e("time", (a == null ? void 0 : a.currentTime) ?? 0)),
        a.addEventListener("loadedmetadata", ()=>{
            (r == null ? void 0 : r.type) === "hls" && a && et(a) && (e("qualities", ["unknown"]),
            e("changedquality", "unknown")),
            e("duration", (a == null ? void 0 : a.duration) ?? 0)
        }
        ),
        a.addEventListener("progress", ()=>{
            a && e("buffered", Ku(a.currentTime, a.buffered))
        }
        ),
        a.addEventListener("webkitendfullscreen", ()=>{
            l = !1,
            e("fullscreen", l),
            l || e("needstrack", !1)
        }
        ),
        a.addEventListener("webkitplaybacktargetavailabilitychanged", w=>{
            w.availability === "available" && e("canairplay", !0)
        }
        ),
        a.addEventListener("ratechange", ()=>{
            a && e("playbackrate", a.playbackRate)
        }
        ))
    }
    function j() {
        a && (a.removeAttribute("src"),
        a.load()),
        i && (i.destroy(),
        i = null)
    }
    function T() {
        j(),
        a && (a = null)
    }
    function L() {
        l = !!document.fullscreenElement || !!document.webkitFullscreenElement,
        e("fullscreen", l),
        l || e("needstrack", !1)
    }
    return Y.addEventListener("fullscreenchange", L),
    {
        on: t,
        off: s,
        getType() {
            return "web"
        },
        destroy: ()=>{
            T(),
            Y.removeEventListener("fullscreenchange", L)
        }
        ,
        load(w) {
            w.source || j(),
            p = w.automaticQuality,
            g = w.preferredQuality,
            r = w.source,
            e("loading", !0),
            m = w.startAt,
            y()
        },
        changeQuality(w, E) {
            (r == null ? void 0 : r.type) === "hls" && (p = w,
            g = E,
            v())
        },
        processVideoElement(w) {
            T(),
            a = w,
            y(),
            this.setVolume(f)
        },
        processContainerElement(w) {
            o = w
        },
        setMeta() {},
        setCaption() {},
        pause() {
            a == null || a.pause()
        },
        play() {
            a == null || a.play()
        },
        setSeeking(w) {
            if (w !== u) {
                if (u = w,
                !w) {
                    c || this.play();
                    return
                }
                c = (a == null ? void 0 : a.paused) ?? !0,
                this.pause()
            }
        },
        setTime(w) {
            if (!a)
                return;
            let E = Math.min(w, a.duration);
            E = Math.max(0, E),
            !Number.isNaN(E) && (e("time", E),
            a.currentTime = E)
        },
        async setVolume(w) {
            let E = Math.min(w, 1);
            if (E = Math.max(0, E),
            f = w,
            !a)
                return;
            a.muted = E === 0,
            await ct() ? a.volume = E : e("volumechange", E === 0 ? 0 : 1)
        },
        toggleFullscreen() {
            if (l) {
                if (l = !1,
                e("fullscreen", l),
                e("needstrack", !1),
                !Y.fullscreenElement)
                    return;
                Y.exitFullscreen();
                return
            }
            if (l = !0,
            e("fullscreen", l),
            !(!pr() || Y.fullscreenElement)) {
                if (Nt()) {
                    o && Y.requestFullscreen(o);
                    return
                }
                xr() && a && (e("needstrack", !0),
                a.webkitEnterFullscreen())
            }
        },
        togglePictureInPicture() {
            if (a) {
                if (yr()) {
                    const w = a;
                    w.webkitSetPresentationMode(w.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture")
                }
                br() && (a !== document.pictureInPictureElement ? a.requestPictureInPicture() : document.exitPictureInPicture())
            }
        },
        startAirplay() {
            const w = a;
            w && w.webkitShowPlaybackTargetPicker && w.webkitShowPlaybackTargetPicker()
        },
        setPlaybackRate(w) {
            a && (a.playbackRate = w)
        }
    }
}
function Xu(e) {
    const {emit: t, on: s, off: r} = Er();
    let i = !1
      , a = 1
      , o = null
      , l = null
      , c = null
      , u = !1
      , m = !1
      , p = !1
      , g = 0
      , f = {
        title: "",
        type: P.MOVIE
    };
    function h() {
        var w;
        const L = async E=>{
            switch (E.field) {
            case "volumeLevel":
                await ct() && t("volumechange", E.value);
                break;
            case "currentTime":
                t("time", E.value);
                break;
            case "duration":
                t("duration", E.value ?? 0);
                break;
            case "mediaInfo":
                E.value && t("duration", E.value.duration ?? 0);
                break;
            case "playerState":
                t("loading", E.value === "BUFFERING"),
                E.value === "PLAYING" ? t("play", void 0) : E.value === "PAUSED" && t("pause", void 0),
                i = E.value === "PAUSED";
                break;
            case "isMuted":
                t("volumechange", E.value ? 1 : 0);
                break
            }
        }
        ;
        return (w = e.controller) == null || w.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, L),
        ()=>{
            var E;
            (E = e.controller) == null || E.removeEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, L)
        }
    }
    function v() {
        var ue;
        if (!o) {
            (ue = e.controller) == null || ue.stop();
            return
        }
        let L = "video/mp4";
        o.type === "hls" && (L = "application/x-mpegurl");
        const w = new chrome.cast.media.GenericMediaMetadata;
        w.title = f.title;
        const E = new chrome.cast.media.MediaInfo("video",L);
        E.contentUrl = je(o.url),
        E.streamType = chrome.cast.media.StreamType.BUFFERED,
        E.metadata = w,
        E.customData = {
            playbackRate: a
        };
        const O = new chrome.cast.media.LoadRequest(E);
        if (O.autoplay = !0,
        O.currentTime = g,
        o.type === "hls") {
            const Ee = chrome.cast.media
              , Ie = O.media;
            Ie.hlsSegmentFormat = Ee.HlsSegmentFormat.FMP4,
            Ie.hlsVideoSegmentFormat = Ee.HlsVideoSegmentFormat.FMP4
        }
        const F = e.instance.getCurrentSession();
        F == null || F.loadMedia(O)
    }
    function b() {
        !l || !o || v()
    }
    function y() {
        l && (l = null)
    }
    function j() {
        u = !!document.fullscreenElement || !!document.webkitFullscreenElement,
        t("fullscreen", u),
        u || t("needstrack", !1)
    }
    Y.addEventListener("fullscreenchange", j);
    const T = h();
    return {
        on: s,
        off: r,
        getType() {
            return "casting"
        },
        destroy: ()=>{
            T(),
            y(),
            Y.removeEventListener("fullscreenchange", j)
        }
        ,
        load(L) {
            o = L.source,
            t("loading", !0),
            g = L.startAt,
            b()
        },
        changeQuality() {},
        setCaption(L) {
            b()
        },
        processVideoElement(L) {
            y(),
            l = L,
            b()
        },
        processContainerElement(L) {
            c = L
        },
        setMeta(L) {
            f = L,
            b()
        },
        pause() {
            i || (e.controller.playOrPause(),
            i = !0)
        },
        play() {
            i && (e.controller.playOrPause(),
            i = !1)
        },
        setSeeking(L) {
            if (L !== p) {
                if (p = L,
                !L) {
                    m || this.play();
                    return
                }
                m = i ?? !0,
                this.pause()
            }
        },
        setTime(L) {
            if (!l)
                return;
            let w = Math.min(L, e.player.duration);
            w = Math.max(0, w),
            !Number.isNaN(w) && (t("time", w),
            e.player.currentTime = w,
            e.controller.seek())
        },
        async setVolume(L) {
            let w = Math.min(L, 1);
            w = Math.max(0, w),
            await ct() ? (e.player.volumeLevel = w,
            e.controller.setVolumeLevel(),
            t("volumechange", w)) : t("volumechange", w === 0 ? 0 : 1)
        },
        toggleFullscreen() {
            if (u) {
                if (u = !1,
                t("fullscreen", u),
                t("needstrack", !1),
                !Y.fullscreenElement)
                    return;
                Y.exitFullscreen();
                return
            }
            u = !0,
            t("fullscreen", u),
            !(!pr() || Y.fullscreenElement) && Nt() && c && Y.requestFullscreen(c)
        },
        togglePictureInPicture() {},
        startAirplay() {},
        setPlaybackRate(L) {
            a = L,
            b()
        }
    }
}
const Zu = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"
  , Tr = [];
let Yt = null;
function ed(e) {
    Yt = e,
    Tr.forEach(t=>t(e))
}
function td(e) {
    if (Yt !== null)
        return e(Yt);
    Tr.push(e)
}
function nd() {
    if (window.__onGCastApiAvailable = t=>{
        ed(t)
    }
    ,
    !!!document.getElementById("chromecast-script")) {
        const t = document.createElement("script");
        t.setAttribute("src", Zu),
        t.setAttribute("id", "chromecast-script"),
        document.body.appendChild(t)
    }
}
function sd() {
    const [e,t] = d.useState(null);
    return d.useEffect(()=>{
        td(s=>t(s))
    }
    , []),
    e
}
function rd() {
    const e = x(y=>y.casting.setInstance)
      , t = x(y=>y.casting.setController)
      , s = x(y=>y.casting.setPlayer)
      , r = x(y=>y.casting.setIsCasting)
      , i = x(y=>y.interface.isCasting)
      , a = x(y=>{
        var j;
        return (j = y.caption) == null ? void 0 : j.selected
    }
    )
      , o = x(y=>y.setDisplay)
      , l = x(y=>y.redisplaySource)
      , c = sd()
      , u = x(y=>y.display)
      , m = x(y=>y.casting.controller)
      , p = x(y=>y.casting.player)
      , g = x(y=>y.casting.instance)
      , f = x(y=>y.progress.time)
      , h = x(y=>{
        var j;
        return (j = y.meta) == null ? void 0 : j.title
    }
    )
      , v = x(y=>{
        var j;
        return (j = y.meta) == null ? void 0 : j.type
    }
    )
      , b = d.useRef({
        controller: m,
        player: p,
        instance: g,
        time: f,
        metaTitle: h,
        metaType: v,
        caption: a
    });
    return d.useEffect(()=>{
        b.current = {
            controller: m,
            player: p,
            instance: g,
            time: f,
            metaTitle: h,
            metaType: v,
            caption: a
        }
    }
    , [m, p, g, f, h, v, a]),
    d.useEffect(()=>{
        if (i) {
            if (b.current.controller && b.current.instance && b.current.player) {
                const y = Xu({
                    controller: b.current.controller,
                    instance: b.current.instance,
                    player: b.current.player
                });
                y.setMeta({
                    title: b.current.metaTitle ?? "",
                    type: at(b.current.metaType ?? "movie")
                }),
                y.setCaption(b.current.caption),
                o(y),
                l(b.current.time ?? 0)
            }
        } else {
            const y = Lr();
            o(y),
            l(b.current.time ?? 0)
        }
    }
    , [i, o, l]),
    d.useEffect(()=>{
        u == null || u.setMeta({
            title: b.current.metaTitle ?? "",
            type: at(b.current.metaType ?? "movie")
        })
    }
    , [h, v, u]),
    d.useEffect(()=>{
        if (!c)
            return;
        const y = cast.framework.CastContext.getInstance();
        e(y),
        y.setOptions({
            receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
        const j = new cast.framework.RemotePlayer;
        s(j);
        const T = new cast.framework.RemotePlayerController(j);
        t(T);
        function L(w) {
            w.field === "isConnected" && r(w.value)
        }
        return T.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, L),
        ()=>{
            T.removeEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, L)
        }
    }
    , [c, s, t, e, r]),
    null
}
function id() {
    var r, i;
    const {t: e} = C()
      , t = x(a=>a.meta);
    if (!t)
        return null;
    if (t.type !== "show")
        return n.jsx(le, {
            children: n.jsx("title", {
                children: t.title
            })
        });
    const s = e("media.episodeDisplay", {
        season: (r = t.season) == null ? void 0 : r.number,
        episode: (i = t.episode) == null ? void 0 : i.number
    });
    return n.jsx(le, {
        children: n.jsxs("title", {
            children: [t.title, " - ", s]
        })
    })
}
function ad() {
    const e = B("")
      , t = x(h=>h.display)
      , s = x(h=>h.progress)
      , {isSeeking: r} = x(h=>h.interface)
      , i = x(h=>h.mediaPlaying)
      , a = x(h=>h.progress.time)
      , {setVolume: o, toggleMute: l} = vr()
      , {toggleLastUsed: c} = kt()
      , u = Ks(h=>h.setShowVolume)
      , [m,p] = d.useState(!1)
      , g = d.useRef()
      , f = d.useRef({
        setShowVolume: u,
        setVolume: o,
        toggleMute: l,
        setIsRolling: p,
        toggleLastUsed: c,
        display: t,
        mediaPlaying: i,
        mediaProgress: s,
        isSeeking: r,
        isRolling: m,
        time: a,
        router: e
    });
    return d.useEffect(()=>{
        f.current = {
            setShowVolume: u,
            setVolume: o,
            toggleMute: l,
            setIsRolling: p,
            toggleLastUsed: c,
            display: t,
            mediaPlaying: i,
            mediaProgress: s,
            isSeeking: r,
            isRolling: m,
            time: a,
            router: e
        }
    }
    , [u, o, l, p, c, t, i, s, r, m, a, e]),
    d.useEffect(()=>{
        const h = v=>{
            var y, j, T, L, w, E, O, F, ue, Ee, Ie, Sn, Cn, En, In;
            if (v.target && v.target.nodeName === "INPUT")
                return;
            const b = v.key;
            if (["ArrowUp", "ArrowDown", "m"].includes(b) && (f.current.setShowVolume(!0),
            g.current && clearTimeout(g.current),
            g.current = setTimeout(()=>{
                f.current.setShowVolume(!1)
            }
            , 3e3)),
            b === "ArrowUp" && f.current.setVolume((((y = f.current.mediaPlaying) == null ? void 0 : y.volume) || 0) + .15),
            b === "ArrowDown" && f.current.setVolume((((j = f.current.mediaPlaying) == null ? void 0 : j.volume) || 0) - .15),
            b === "m" && f.current.toggleMute(),
            b === ">" || b === "<") {
                const fe = [.25, .5, 1, 1.5, 2];
                let Ct = fe.indexOf((T = f.current.mediaPlaying) == null ? void 0 : T.playbackRate);
                Ct === -1 && (Ct = fe.indexOf(1));
                const Wr = Ct + (b === ">" ? 1 : -1)
                  , Ln = fe[Wr];
                Ln && ((L = f.current.display) == null || L.setPlaybackRate(Ln))
            }
            if (b === "ArrowRight" && ((w = f.current.display) == null || w.setTime(f.current.time + 5)),
            b === "ArrowLeft" && ((E = f.current.display) == null || E.setTime(f.current.time - 5)),
            b === "j" && ((O = f.current.display) == null || O.setTime(f.current.time - 10)),
            b === "l" && ((F = f.current.display) == null || F.setTime(f.current.time + 10)),
            b === "." && ((ue = f.current.mediaPlaying) != null && ue.isPaused) && ((Ee = f.current.display) == null || Ee.setTime(f.current.time + 1)),
            b === "," && ((Ie = f.current.mediaPlaying) != null && Ie.isPaused) && ((Sn = f.current.display) == null || Sn.setTime(f.current.time - 1)),
            b === "f" && ((Cn = f.current.display) == null || Cn.toggleFullscreen()),
            b === " " && ((En = f.current.display) == null || En[f.current.mediaPlaying.isPaused ? "play" : "pause"]()),
            b === "Escape" && f.current.router.close(),
            b === "c" && f.current.toggleLastUsed().catch(()=>{}
            ),
            b === "r") {
                if (f.current.isRolling || v.ctrlKey || v.metaKey)
                    return;
                f.current.setIsRolling(!0),
                (In = document.querySelector(".popout-location")) == null || In.classList.add("roll"),
                document.body.setAttribute("data-no-scroll", "true"),
                setTimeout(()=>{
                    var fe;
                    (fe = document.querySelector(".popout-location")) == null || fe.classList.remove("roll"),
                    document.body.removeAttribute("data-no-scroll"),
                    f.current.setIsRolling(!1)
                }
                , 1e3)
            }
        }
        ;
        return window.addEventListener("keydown", h),
        ()=>{
            window.removeEventListener("keydown", h)
        }
    }
    , []),
    null
}
function od() {
    const e = x(r=>r.meta)
      , t = x(r=>r.progress)
      , s = x(r=>r.mediaPlaying);
    return d.useEffect(()=>(window.meta || (window.meta = {}),
    e && (window.meta.player = {
        meta: {
            title: e.title,
            type: e.type,
            tmdbId: e.tmdbId,
            year: e.releaseYear,
            poster: e.poster
        },
        controls: {
            isPlaying: s.isPlaying,
            isLoading: s.isLoading
        },
        season: e.season ? {
            number: e.season.number,
            tmdbId: e.season.tmdbId,
            title: e.season.title
        } : void 0,
        episode: e.episode ? {
            number: e.episode.number,
            tmdbId: e.episode.tmdbId,
            title: e.episode.title
        } : void 0,
        progress: {
            time: t.time,
            duration: t.duration
        }
    }),
    ()=>{
        window.meta && delete window.meta.player
    }
    ), [e, t, s]),
    null
}
function ld() {
    const e = x(l=>l.meta)
      , t = x(l=>l.progress)
      , s = H(l=>l.updateItem)
      , r = x(l=>l.status)
      , i = x(l=>l.mediaPlaying.hasPlayedOnce)
      , a = d.useRef(null)
      , o = d.useRef({
        updateItem: s,
        meta: e,
        progress: t,
        status: r,
        hasPlayedOnce: i
    });
    return d.useEffect(()=>{
        o.current.updateItem = s,
        o.current.meta = e,
        o.current.progress = t,
        o.current.status = r,
        o.current.hasPlayedOnce = i
    }
    , [s, t, e, r, i]),
    ys(()=>{
        var u, m;
        const l = o.current;
        if (!l.progress || !l.meta || !l.updateItem || l.status !== R.PLAYING || !i)
            return;
        let c = !1;
        a.current ? (((u = a.current) == null ? void 0 : u.duration) !== t.duration || ((m = a.current) == null ? void 0 : m.watched) !== t.time) && (c = !0) : c = !0,
        a.current = {
            duration: t.duration,
            watched: t.time
        },
        c && l.updateItem({
            meta: l.meta,
            progress: a.current
        })
    }
    , 3e3),
    null
}
function cd(e) {
    const t = [0, 1];
    let s = .5
      , r = 0;
    for (let i = 0; i < e; i += 1) {
        const a = 1 / s - 1;
        for (let o = 0; o < a - r; o += 1) {
            const l = o * s * 2;
            t.push(l + s)
        }
        r = a,
        s /= 2
    }
    return t
}
class ud {
    constructor(t) {
        this.videoEl = null,
        this.canvasEl = null,
        this.hls = null,
        this.cb = t.addImage,
        this.interrupted = !1
    }
    start(t) {
        if (gr)
            return !1;
        const s = document.createElement("video");
        s.setAttribute("muted", "true");
        const r = document.createElement("canvas");
        if (this.hls = new oe,
        t.type === "mp4")
            s.src = je(t.url),
            s.crossOrigin = "anonymous";
        else if (t.type === "hls")
            this.hls.attachMedia(s),
            this.hls.loadSource(je(t.url));
        else
            throw new Error("Invalid loadable source type");
        this.videoEl = s,
        this.canvasEl = r,
        this.begin().catch(i=>console.error(i))
    }
    destroy() {
        var t, s;
        this.interrupted = !0,
        this.videoEl = null,
        this.canvasEl = null,
        (t = this.hls) == null || t.detachMedia(),
        (s = this.hls) == null || s.destroy(),
        this.hls = null
    }
    async initVideo() {
        !this.videoEl || !this.canvasEl || (await new Promise((t,s)=>{
            var r, i;
            (r = this.videoEl) == null || r.addEventListener("loadedmetadata", t),
            (i = this.videoEl) == null || i.addEventListener("error", s)
        }
        ),
        !(!this.videoEl || !this.canvasEl) && (this.canvasEl.height = this.videoEl.videoHeight,
        this.canvasEl.width = this.videoEl.videoWidth))
    }
    async takeSnapshot(t) {
        if (!this.videoEl || !this.canvasEl || (this.videoEl.currentTime = t,
        await new Promise(i=>{
            var o;
            const a = ()=>{
                var l;
                (l = this.videoEl) == null || l.removeEventListener("seeked", a),
                i(null)
            }
            ;
            (o = this.videoEl) == null || o.addEventListener("seeked", a)
        }
        ),
        !this.videoEl || !this.canvasEl))
            return;
        const s = this.canvasEl.getContext("2d");
        if (!s)
            return;
        s.drawImage(this.videoEl, 0, 0, this.canvasEl.width, this.canvasEl.height);
        const r = this.canvasEl.toDataURL();
        this.interrupted || r === "data:," || !r || this.cb({
            at: t,
            data: r
        })
    }
    async begin() {
        const t = this.videoEl;
        if (!t)
            return;
        await this.initVideo();
        const s = cd(6);
        for (let r = 0; r < s.length; r += 1) {
            if (this.interrupted)
                return;
            await this.takeSnapshot(t.duration * s[r])
        }
    }
}
function dd() {
    var m, p;
    const e = x(g=>g.thumbnails.addImage)
      , t = x(g=>g.status)
      , s = x(g=>g.thumbnails.resetImages)
      , r = x(g=>g.meta)
      , i = x(g=>g.source)
      , a = d.useRef(null)
      , o = JSON.stringify(i)
      , l = d.useCallback(()=>{
        let g = null;
        if (i && (g = Wt(i, {
            automaticQuality: !1,
            lastChosenQuality: "360"
        })),
        a.current || t !== R.PLAYING || !g)
            return;
        s();
        const f = new ud({
            addImage: e
        });
        a.current = f,
        f.start(g.stream)
    }
    , [i, e, s, t])
      , c = d.useRef(l);
    d.useEffect(()=>{
        c.current = l
    }
    , [l, t]),
    d.useEffect(()=>{
        c.current()
    }
    , [o]),
    d.useEffect(()=>()=>{
        a.current && (a.current.destroy(),
        a.current = null)
    }
    , []);
    const u = JSON.stringify({
        id: r == null ? void 0 : r.tmdbId,
        ep: (m = r == null ? void 0 : r.episode) == null ? void 0 : m.tmdbId,
        se: (p = r == null ? void 0 : r.season) == null ? void 0 : p.tmdbId
    });
    return d.useEffect(()=>{
        a.current && (a.current.destroy(),
        a.current = null),
        c.current()
    }
    , [u, o, t]),
    null
}
function md() {
    const e = x(r=>r.display)
      , t = x(r=>r.setDisplay)
      , s = d.useRef(e);
    d.useEffect(()=>{
        s.current = e
    }
    , [e]),
    d.useEffect(()=>{
        if (!s.current) {
            const r = Lr();
            s.current = r,
            t(r)
        }
        return ()=>{
            s.current && (s.current = null,
            t(null))
        }
    }
    , [t])
}
function Pr() {
    return x(t=>t.status) === R.PLAYING
}
function hd(e, t) {
    const s = d.useRef(null)
      , r = d.useMemo(()=>{
        s.current && URL.revokeObjectURL(s.current);
        const i = e();
        return s.current = i,
        i
    }
    , t);
    return d.useEffect(()=>()=>{
        s.current && URL.revokeObjectURL(s.current)
    }
    , []),
    r
}
const fd = function() {
    const t = d.useRef(null)
      , s = d.useRef(null)
      , r = x(u=>u.display)
      , i = x(u=>{
        var m;
        return (m = u.caption.selected) == null ? void 0 : m.srtData
    }
    )
      , a = x(u=>u.caption.asTrack)
      , o = x(u=>{
        var m;
        return (m = u.caption.selected) == null ? void 0 : m.language
    }
    )
      , l = hd(()=>i ? ic(i) : null, [i]);
    d.useEffect(()=>{
        r && t.current && r.processVideoElement(t.current)
    }
    , [r, t]),
    d.useEffect(()=>{
        s.current && (s.current.track.mode = "showing")
    }
    , [s]);
    let c = null;
    return a && l && o && (c = n.jsx("track", {
        label: "Jelly",
        kind: "subtitles",
        srcLang: o,
        src: l,
        default: !0
    })),
    n.jsx("video", {
        className: "absolute inset-0 w-full h-screen bg-black",
        autoPlay: !0,
        playsInline: !0,
        ref: t,
        children: c
    })
}
  , gd = fd;
function xd() {
    const e = Pr();
    return md(),
    uc(),
    e ? n.jsx(gd, {}) : null
}
function pd(e) {
    const t = Pr()
      , s = x(p=>p.display)
      , r = x(p=>p.mediaPlaying.isPaused)
      , i = x(p=>p.updateInterfaceHovering)
      , a = x(p=>p.interface.hovering)
      , [o,l,c] = gi(()=>{
        i(X.NOT_HOVERING)
    }
    , 3e3);
    vs(()=>{
        l()
    }
    );
    const u = d.useCallback(()=>{
        s == null || s.toggleFullscreen()
    }
    , [s])
      , m = d.useCallback(p=>{
        if (p.pointerType === "mouse") {
            if (p.button !== 0)
                return;
            r ? s == null || s.play() : s == null || s.pause();
            return
        }
        a !== X.MOBILE_TAPPED ? (i(X.MOBILE_TAPPED),
        c()) : (i(X.NOT_HOVERING),
        l())
    }
    , [s, r, a, i, c, l]);
    return t ? n.jsx("div", {
        className: S("absolute inset-0", {
            "absolute inset-0": !0,
            "cursor-none": !e.showingControls
        }),
        onDoubleClick: u,
        onPointerUp: m
    }) : null
}
function bd(e) {
    const t = d.useRef(null)
      , s = x(i=>i.updateInterfaceHovering)
      , r = x(i=>i.interface.hovering);
    d.useEffect(()=>{
        if (!e.current)
            return;
        const i = e.current;
        function a(l) {
            l.pointerType === "mouse" && (s(X.MOUSE_HOVER),
            t.current && clearTimeout(t.current),
            t.current = setTimeout(()=>{
                s(X.NOT_HOVERING),
                t.current = null
            }
            , 3e3))
        }
        function o(l) {
            l.pointerType === "mouse" && (s(X.NOT_HOVERING),
            t.current && clearTimeout(t.current))
        }
        return i.addEventListener("pointermove", a),
        i.addEventListener("pointerleave", o),
        ()=>{
            i.removeEventListener("pointermove", a),
            i.removeEventListener("pointerleave", o)
        }
    }
    , [e, r, s])
}
function yd(e) {
    const t = d.useRef(null)
      , s = x(r=>r.display);
    return bd(t),
    d.useEffect(()=>{
        s && t.current && s.processContainerElement(t.current)
    }
    , [s, t]),
    n.jsx("div", {
        ref: t,
        children: n.jsx(dl, {
            children: n.jsx("div", {
                className: "h-screen select-none",
                children: e.children
            })
        })
    })
}
function vd(e) {
    const t = d.useRef(e.onLoad);
    return d.useEffect(()=>{
        var s;
        (s = t.current) == null || s.call(t)
    }
    , []),
    n.jsx("div", {
        className: "relative",
        children: n.jsxs(yd, {
            children: [n.jsx(od, {}), n.jsx(dd, {}), n.jsx(rd, {}), n.jsx(xd, {}), n.jsx(ld, {}), n.jsx(ad, {}), n.jsxs("div", {
                className: "relative h-screen overflow-hidden",
                children: [n.jsx(pd, {
                    showingControls: e.showingControls
                }), n.jsx(id, {}), e.children]
            })]
        })
    })
}
const jd = function(t) {
    const [s] = Il(t.id)
      , r = {
        error: "bg-[#C93957] text-white"
    }
      , i = {
        error: k.CIRCLE_EXCLAMATION
    };
    return n.jsx("div", {
        ref: s,
        children: n.jsx("div", {
            className: [r[t.type], "flex items-center justify-center p-1"].join(" "),
            children: n.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [n.jsx(I, {
                    icon: i[t.type]
                }), n.jsx("div", {
                    children: t.children
                })]
            })
        })
    })
}
  , wd = jd;
function Rr(e) {
    const {t} = C()
      , s = ne(o=>o.isOnline)
      , r = ne(o=>o.setLocation)
      , i = ne(o=>o.location)
      , a = e.location ?? null;
    return d.useEffect(()=>{
        if (a)
            return r(a),
            ()=>{
                r(null)
            }
    }
    , [r, a]),
    i !== a ? null : n.jsx("div", {
        children: s ? null : n.jsx(wd, {
            id: "offline",
            type: "error",
            children: t("navigation.banner.offline")
        })
    })
}
function kd(e) {
    const t = vt("player")
      , s = x(r=>r.setHoveringAnyControls);
    return d.useEffect(()=>()=>{
        s(!1)
    }
    , [s]),
    n.jsxs("div", {
        className: "w-full text-white",
        children: [n.jsx(Q, {
            animation: "fade",
            show: e.show,
            style: {
                top: `${t}px`
            },
            className: "pointer-events-none flex justify-end pb-32 bg-gradient-to-b from-black to-transparent [margin-bottom:env(safe-area-inset-bottom)] transition-opacity duration-200 absolute top-0 w-full"
        }), n.jsx("div", {
            className: "relative z-10",
            children: n.jsx(Rr, {
                location: "player"
            })
        }), n.jsx("div", {
            onMouseOver: ()=>s(!0),
            onMouseOut: ()=>s(!1),
            className: "pointer-events-auto pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pt-6 absolute top-0 w-full",
            style: {
                top: `${t}px`
            },
            children: n.jsx(Q, {
                animation: "slide-down",
                show: e.show,
                className: "text-white",
                children: e.children
            })
        })]
    })
}
function as(e) {
    return n.jsx("div", {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none [&>*]:pointer-events-auto",
        children: e.children
    })
}
function Nd(e) {
    const t = x(s=>s.setHoveringAnyControls);
    return d.useEffect(()=>()=>{
        t(!1)
    }
    , [t]),
    n.jsxs("div", {
        className: "w-full text-white",
        children: [n.jsx(Q, {
            animation: "fade",
            show: e.show,
            className: "pointer-events-none flex justify-end pt-32 bg-gradient-to-t from-black to-transparent transition-opacity duration-200 absolute bottom-0 w-full"
        }), n.jsx("div", {
            onMouseOver: ()=>t(!0),
            onMouseOut: ()=>t(!1),
            className: "pointer-events-auto z-10 pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pb-3 mb-[env(safe-area-inset-bottom)] absolute bottom-0 w-full",
            children: n.jsx(Q, {
                animation: "slide-up",
                show: e.show,
                children: e.children
            })
        })]
    })
}
function Sd(e) {
    return n.jsx(Q, {
        animation: "fade",
        show: e.show,
        className: "absolute inset-0 w-full h-full bg-black bg-opacity-20 pointer-events-none"
    })
}
const Cd = function(t) {
    const {t: s} = C()
      , r = ee();
    return n.jsx("div", {
        className: "flex items-center",
        children: n.jsxs("button", {
            type: "button",
            onClick: ()=>r(t.url),
            className: "py-1 -my-1 px-2 -mx-2 tabbable rounded-lg flex items-center cursor-pointer text-type-secondary hover:text-white transition-colors duration-200 font-medium",
            children: [n.jsx(I, {
                className: "mr-2",
                icon: k.ARROW_LEFT
            }), n.jsx("span", {
                className: "md:hidden",
                children: s("player.back.short")
            }), n.jsx("span", {
                className: "hidden md:block",
                children: s("player.back.default")
            })]
        })
    })
}
  , Ed = Cd;
function Id(e) {
    const t = x(r=>r.setHoveringLeftControls)
      , s = d.useCallback(()=>{
        t(!1)
    }
    , [t]);
    return d.useEffect(()=>()=>{
        t(!1)
    }
    , [t]),
    n.jsx("div", {
        className: S(["flex space-x-3 items-center", e.className]),
        onMouseLeave: s,
        children: e.children
    })
}
function Ld(e) {
    return n.jsx(Q, {
        animation: "fade",
        show: e.show,
        className: "pointer-events-none",
        children: n.jsx("div", {
            className: S(["absolute inset-0 flex space-x-6 items-center justify-center pointer-events-none [&>*]:pointer-events-auto", e.className]),
            children: e.children
        })
    })
}
const Td = {
    i: "I"
};
function Pd(e) {
    let {text: t, styling: s, overrideCasing: r} = e;
    const i = d.useMemo(()=>{
        let a = t;
        r && t && (a = t.slice(0, 1) + t.slice(1).toLowerCase());
        const o = (a || "").split(" ").map(c=>Td[c] ?? c).join(" ").replaceAll(/ i'/g, " I'").replaceAll(/\r?\n/g, "<br />");
        return Zl(o, {
            ALLOWED_TAGS: ["c", "b", "i", "u", "span", "ruby", "rt", "br"],
            ADD_TAGS: ["v", "lang"],
            ALLOWED_ATTR: ["title", "lang"]
        })
    }
    , [t, r]);
    return n.jsx("p", {
        className: "pointer-events-none mb-1 select-none rounded px-4 py-1 text-center leading-normal [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]",
        style: {
            color: s.color,
            fontSize: `${(1.5 * s.size).toFixed(2)}em`,
            backgroundColor: `rgba(0,0,0,${s.backgroundOpacity.toFixed(2)})`
        },
        children: n.jsx("span", {
            dangerouslySetInnerHTML: {
                __html: i
            },
            dir: "ltr"
        })
    })
}
function Rd() {
    const e = x(c=>c.progress.time)
      , t = x(c=>{
        var u;
        return (u = c.caption.selected) == null ? void 0 : u.srtData
    }
    )
      , s = x(c=>{
        var u;
        return (u = c.caption.selected) == null ? void 0 : u.language
    }
    )
      , r = D(c=>c.styling)
      , i = D(c=>c.overrideCasing)
      , a = D(c=>c.delay)
      , o = d.useMemo(()=>t ? nc(t) : [], [t, s])
      , l = d.useMemo(()=>o.filter(c=>{
        let {start: u, end: m} = c;
        return ec(u, m, a, e)
    }
    ), [o, e, a]);
    return n.jsx("div", {
        children: l.map((c,u)=>{
            let {start: m, end: p, content: g} = c;
            return n.jsx(Pd, {
                text: g,
                styling: r,
                overrideCasing: i
            }, tc(u, m, p))
        }
        )
    })
}
function Ad(e) {
    const t = x(a=>a.caption.selected)
      , s = x(a=>a.caption.asTrack)
      , r = x(a=>a.display)
      , i = (r == null ? void 0 : r.getType()) === "casting";
    return s || !t || i ? null : n.jsx(Q, {
        className: "absolute inset-0 pointer-events-none",
        animation: "slide-up",
        show: !0,
        children: n.jsx("div", {
            className: S(["text-white absolute flex w-full flex-col items-center transition-[bottom]", e.controlsShown ? "bottom-24" : "bottom-12"]),
            children: n.jsx(Rd, {})
        })
    })
}
function Md() {
    const e = z(o=>o.addBookmark)
      , t = z(o=>o.removeBookmark)
      , s = z(o=>o.bookmarks)
      , r = x(o=>o.meta)
      , i = !!s[(r == null ? void 0 : r.tmdbId) ?? ""]
      , a = d.useCallback(()=>{
        r && (i ? t(r.tmdbId) : e(r))
    }
    , [i, r, e, t]);
    return n.jsx(te, {
        onClick: ()=>a(),
        icon: i ? k.BOOKMARK : k.BOOKMARK_OUTLINE,
        iconSizeClass: "text-base",
        className: "p-3"
    })
}
function _d() {
    const e = x(m=>m.interface.hovering)
      , t = x(m=>m.interface.lastHoveringState)
      , s = x(m=>m.mediaPlaying.isPaused)
      , r = x(m=>m.interface.hasOpenOverlay)
      , i = x(m=>m.interface.isHoveringControls)
      , a = t === X.MOBILE_TAPPED
      , l = e !== X.NOT_HOVERING || i && !a || r
      , u = a ? l : l || s;
    return {
        showTouchTargets: a && u,
        showTargets: u
    }
}
function Od(e) {
    const {showTargets: t, showTouchTargets: s} = _d()
      , r = x(o=>o.status)
      , {isMobile: i} = St()
      , a = x(o=>o.mediaPlaying.isLoading);
    return n.jsxs(vd, {
        onLoad: e.onLoad,
        showingControls: t,
        children: [e.children, n.jsx(Sd, {
            show: t && r === R.PLAYING
        }), n.jsx(Vu, {
            onChange: e.onMetaChange
        }), n.jsx(Ou, {}), n.jsx(Ad, {
            controlsShown: t
        }), r === R.PLAYING ? n.jsxs(n.Fragment, {
            children: [n.jsxs(as, {
                children: [n.jsx(vc, {}), n.jsx(jc, {})]
            }), n.jsx(as, {
                children: n.jsx(Qu, {})
            })]
        }) : null, n.jsxs(Ld, {
            className: "text-white",
            show: s && r === R.PLAYING,
            children: [n.jsx(Zn, {
                iconSizeClass: "text-3xl"
            }), n.jsx(Gn, {
                iconSizeClass: "text-5xl",
                className: a ? "opacity-0" : "opacity-100"
            }), n.jsx(Xn, {
                iconSizeClass: "text-3xl"
            })]
        }), n.jsx(kd, {
            show: t,
            children: n.jsxs("div", {
                className: "grid grid-cols-[1fr,auto] xl:grid-cols-3 items-center",
                children: [n.jsxs("div", {
                    className: "flex space-x-3 items-center",
                    children: [n.jsx(Ed, {
                        url: e.backUrl
                    }), n.jsx("span", {
                        className: "text mx-3 text-type-secondary",
                        children: "/"
                    }), n.jsx(Nc, {}), n.jsx(Md, {})]
                }), n.jsx("div", {
                    className: "text-center hidden xl:flex justify-center items-center",
                    children: n.jsx(Sc, {})
                }), n.jsx("div", {
                    className: "hidden sm:flex items-center justify-end",
                    children: n.jsx(Ce, {})
                }), n.jsx("div", {
                    className: "flex sm:hidden items-center justify-end",
                    children: r === R.PLAYING ? n.jsxs(n.Fragment, {
                        children: [n.jsx(ss, {}), n.jsx(is, {})]
                    }) : null
                })]
            })
        }), n.jsxs(Nd, {
            show: t,
            children: [n.jsx("div", {
                className: "flex items-center space-x-3",
                children: r === R.PLAYING ? n.jsxs(n.Fragment, {
                    children: [i ? n.jsx(es, {
                        short: !0
                    }) : null, n.jsx(yc, {})]
                }) : null
            }), n.jsxs("div", {
                className: "hidden lg:flex justify-between",
                dir: "ltr",
                children: [n.jsx(Id, {
                    children: r === R.PLAYING ? n.jsxs(n.Fragment, {
                        children: [n.jsx(Gn, {}), n.jsx(Zn, {}), n.jsx(Xn, {}), n.jsx(kc, {}), n.jsx(es, {})]
                    }) : null
                }), n.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [n.jsx(ns, {}), r === R.PLAYING ? n.jsxs(n.Fragment, {
                        children: [n.jsx(Yn, {}), n.jsx(ss, {}), n.jsx(is, {})]
                    }) : null, r === R.PLAYBACK_ERROR || r === R.PLAYING ? n.jsx(ts, {}) : null, n.jsx(qn, {})]
                })]
            }), n.jsxs("div", {
                className: "grid grid-cols-[2.5rem,1fr,2.5rem] gap-3 lg:hidden",
                children: [n.jsx("div", {}), n.jsxs("div", {
                    className: "flex justify-center space-x-3",
                    children: [r === R.PLAYING ? n.jsx(Yn, {}) : null, n.jsx(ns, {}), r === R.PLAYING ? n.jsx(ts, {}) : null]
                }), n.jsx("div", {
                    children: n.jsx(qn, {})
                })]
            })]
        }), n.jsx(Hu, {}), n.jsx(zu, {
            controlsShowing: t,
            onChange: e.onMetaChange
        })]
    })
}
const Dd = {
    releaseYear: 2010,
    title: "Sintel",
    tmdbId: "",
    type: "movie"
}
  , os = {
    hls: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
}
  , ls = {
    hls: "HLS",
    mp4: "MP4"
};
function Bd() {
    const {status: e, playMedia: t, setMeta: s} = fr()
      , [r,i] = d.useState("mp4")
      , [a,o] = d.useState("")
      , l = d.useCallback((c,u)=>{
        let m;
        if (u === "hls")
            m = {
                type: "hls",
                url: c
            };
        else if (u === "mp4")
            m = {
                type: "file",
                qualities: {
                    unknown: {
                        type: "mp4",
                        url: c
                    }
                }
            };
        else
            throw new Error("Invalid type");
        s(Dd),
        t(m, [], null)
    }
    , [t, s]);
    return n.jsxs(Od, {
        backUrl: "/",
        children: [e === R.IDLE ? n.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: n.jsx("div", {
                className: "w-full max-w-4xl rounded-xl bg-video-scraping-card p-10 m-4",
                children: n.jsxs("div", {
                    className: "flex gap-16 flex-col lg:flex-row",
                    children: [n.jsxs("div", {
                        className: "flex-1",
                        children: [n.jsx(Oe, {
                            children: "Custom stream"
                        }), n.jsxs("div", {
                            className: "grid grid-cols-[1fr,auto] gap-2 items-center",
                            children: [n.jsx(pn, {
                                className: "bg-video-context-flagBg rounded-md p-2 text-white w-full",
                                value: a,
                                onChange: o,
                                placeholder: "https://..."
                            }), n.jsx(Vl, {
                                options: Object.entries(ls).map(c=>({
                                    id: c[0],
                                    name: c[1]
                                })),
                                selectedItem: {
                                    id: r,
                                    name: ls[r]
                                },
                                setSelectedItem: c=>i(c.id)
                            })]
                        }), n.jsx(M, {
                            onClick: ()=>l(a, r),
                            children: "Start stream"
                        })]
                    }), n.jsxs("div", {
                        className: "flex-1",
                        children: [n.jsx(Oe, {
                            children: "Preset tests"
                        }), n.jsxs("div", {
                            className: "grid grid-cols-[1fr,1fr] gap-2",
                            children: [n.jsx(M, {
                                onClick: ()=>l(os.hls, "hls"),
                                children: "HLS test"
                            }), n.jsx(M, {
                                onClick: ()=>l(os.mp4, "mp4"),
                                children: "MP4 test"
                            })]
                        })]
                    })]
                })
            })
        }) : null, e === R.PLAYBACK_ERROR ? n.jsx(hc, {}) : null]
    })
}
function Fd() {
    const {t: e} = C();
    return n.jsxs("div", {
        className: "relative flex flex-1 flex-col",
        children: [n.jsx(le, {
            children: n.jsx("title", {
                children: e("notFound.badge")
            })
        }), n.jsx(fn, {}), n.jsx("div", {
            className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
            children: n.jsx(mn, {
                children: n.jsxs(dn, {
                    children: [n.jsx(cn, {
                        icon: k.EYE_SLASH,
                        children: e("notFound.badge")
                    }), n.jsx(Oe, {
                        children: e("notFound.title")
                    }), n.jsx(we, {
                        children: e("notFound.message")
                    }), n.jsx(M, {
                        href: "/",
                        theme: "purple",
                        padding: "md:px-12 p-2.5",
                        className: "mt-6",
                        children: e("notFound.goHome")
                    })]
                })
            })
        })]
    })
}
function Ud() {
    return n.jsx(Fd, {})
}
function $d(e, t) {
    const [s,r] = d.useState(e);
    return d.useEffect(()=>{
        const i = setTimeout(()=>{
            r(e)
        }
        , t);
        return ()=>{
            clearTimeout(i)
        }
    }
    , [e, t]),
    s
}
function cs(e) {
    return e ? decodeURIComponent(e) : ""
}
function Vd() {
    const e = ee()
      , t = Xt()
      , [s,r] = d.useState(cs(t.query));
    d.useEffect(()=>{
        r(cs(t.query))
    }
    , [t.query]);
    const i = function(o) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (r(o),
        !!l) {
            if (o.length === 0) {
                e("/", {
                    replace: !0
                });
                return
            }
            e(ai("/browse/:query", {
                query: o
            }), {
                replace: !0
            })
        }
    };
    return [s, i, ()=>{
        i(s, !0)
    }
    ]
}
function Hd(e) {
    return n.jsxs(nr, {
        children: [n.jsx(fn, {
            bg: e.showBg
        }), e.children]
    })
}
function Ar(e) {
    const {t} = C()
      , [s] = Zt()
      , r = d.useCallback(()=>{
        var i;
        (i = e.onEdit) == null || i.call(e, !e.editing)
    }
    , [e]);
    return n.jsx("button", {
        type: "button",
        onClick: r,
        className: "flex h-12 items-center overflow-hidden rounded-full bg-background-secondary px-4 py-2 text-white transition-[background-color,transform] hover:bg-background-secondaryHover active:scale-105",
        children: n.jsx("span", {
            ref: s,
            children: e.editing ? n.jsx("span", {
                className: "mx-4 whitespace-nowrap",
                children: t("home.mediaList.stopEditing")
            }) : n.jsx(I, {
                icon: k.EDIT
            })
        })
    })
}
function wn(e) {
    return n.jsx("div", {
        className: e.className,
        children: n.jsxs("div", {
            className: "mb-5 flex items-center",
            children: [n.jsxs("p", {
                className: "flex flex-1 items-center font-bold uppercase text-type-text",
                children: [e.icon ? n.jsx("span", {
                    className: "mr-2 text-xl",
                    children: n.jsx(I, {
                        icon: e.icon
                    })
                }) : null, e.title]
            }), e.children]
        })
    })
}
const kn = d.forwardRef((e,t)=>n.jsx("div", {
    className: "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4",
    ref: t,
    children: e.children
}))
  , us = {
    duration: 0,
    watched: 0
};
function Wd(e, t) {
    return e - t < 60 * 2
}
function Mr(e, t) {
    return t < 20
}
function zd(e, t) {
    return !(Mr(e, t) || Wd(e, t))
}
function _r(e) {
    var r, i;
    if (e.type !== "show")
        return {
            show: zd(((r = e.progress) == null ? void 0 : r.duration) ?? 0, ((i = e.progress) == null ? void 0 : i.watched) ?? 0),
            progress: e.progress ?? us
        };
    const t = Object.values(e.episodes).sort((a,o)=>o.updatedAt - a.updatedAt).filter(a=>!Mr(a.progress.duration, a.progress.watched))[0]
      , s = e.seasons[t == null ? void 0 : t.seasonId];
    return !t || !s ? {
        show: !1,
        progress: us
    } : {
        season: s,
        episode: t,
        show: !0,
        progress: t.progress
    }
}
function Qd(e) {
    return n.jsx("p", {
        className: `font-semibold text-type-secondary ${e.className || ""}`,
        children: e.content.map((t,s)=>n.jsxs("span", {
            children: [s !== 0 ? n.jsx("span", {
                className: "mx-[0.6em] text-[1em]",
                children: "●"
            }) : null, t]
        }, t))
    })
}
function Kd(e) {
    let {media: t, linkable: s, series: r, percentage: i, closable: a, onClose: o} = e;
    const {t: l} = C()
      , c = `${Math.round(i ?? 0).toFixed(0)}%`
      , u = s && !a
      , m = [l(`media.types.${t.type}`)];
    return t.year && m.push(t.year.toFixed()),
    n.jsxs(Z.Base, {
        className: `group -m-3 mb-2 rounded-xl bg-background-main transition-colors duration-100 focus:relative focus:z-10 ${u ? "hover:bg-mediaCard-hoverBackground tabbable" : ""}`,
        tabIndex: u ? 0 : -1,
        onKeyUp: p=>p.key === "Enter" && p.currentTarget.click(),
        children: [n.jsx(Z.Light, {
            flareSize: 300,
            cssColorVar: "--colors-mediaCard-hoverAccent",
            backgroundClass: "bg-mediaCard-hoverBackground duration-100",
            className: S({
                "rounded-xl bg-background-main group-hover:opacity-100": u
            })
        }), n.jsxs(Z.Child, {
            className: `pointer-events-auto relative mb-2 p-3 transition-transform duration-100 ${u ? "group-hover:scale-95" : ""}`,
            children: [n.jsxs("div", {
                className: S("relative mb-4 pb-[150%] w-full overflow-hidden rounded-xl bg-mediaCard-hoverBackground bg-cover bg-center transition-[border-radius] duration-100", {
                    "group-hover:rounded-lg": !a
                }),
                style: {
                    backgroundImage: t.poster ? `url(${t.poster})` : void 0
                },
                children: [r ? n.jsx("div", {
                    className: ["absolute right-2 top-2 rounded-md bg-mediaCard-badge px-2 py-1 transition-colors"].join(" "),
                    children: n.jsx("p", {
                        className: ["text-center text-xs font-bold text-mediaCard-badgeText transition-colors", a ? "" : "group-hover:text-white"].join(" "),
                        children: l("media.episodeDisplay", {
                            season: r.season || 1,
                            episode: r.episode
                        })
                    })
                }) : null, i !== void 0 ? n.jsxs(n.Fragment, {
                    children: [n.jsx("div", {
                        className: `absolute inset-x-0 -bottom-px pb-1 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${u ? "group-hover:from-mediaCard-hoverShadow" : ""}`
                    }), n.jsx("div", {
                        className: `absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${u ? "group-hover:from-mediaCard-hoverShadow" : ""}`
                    }), n.jsx("div", {
                        className: "absolute inset-x-0 bottom-0 p-3",
                        children: n.jsx("div", {
                            className: "relative h-1 overflow-hidden rounded-full bg-mediaCard-barColor",
                            children: n.jsx("div", {
                                className: "absolute inset-y-0 left-0 rounded-full bg-mediaCard-barFillColor",
                                style: {
                                    width: c
                                }
                            })
                        })
                    })]
                }) : null, n.jsx("div", {
                    className: `absolute inset-0 flex items-center justify-center bg-mediaCard-badge bg-opacity-80 transition-opacity duration-200 ${a ? "opacity-100" : "pointer-events-none opacity-0"}`,
                    children: n.jsx(lt, {
                        clickable: !0,
                        className: "text-2xl text-mediaCard-badgeText",
                        onClick: ()=>a && (o == null ? void 0 : o()),
                        icon: k.X
                    })
                })]
            }), n.jsx("h1", {
                className: "mb-1 line-clamp-3 max-h-[4.5rem] text-ellipsis break-words font-bold text-white",
                children: n.jsx("span", {
                    children: t.title
                })
            }), n.jsx(Qd, {
                className: "text-xs",
                content: m
            })]
        })]
    })
}
function Gd(e) {
    const t = n.jsx(Kd, {
        ...e
    })
      , s = e.linkable && !e.closable;
    let r = s ? `/media/${encodeURIComponent(Ya(e.media))}` : "#";
    return s && e.series && (e.series.season === 0 && !e.series.episodeId ? r += `/${encodeURIComponent(e.series.seasonId)}` : r += `/${encodeURIComponent(e.series.seasonId)}/${encodeURIComponent(e.series.episodeId)}`),
    e.linkable ? n.jsx(en, {
        to: r,
        tabIndex: -1,
        className: S("tabbable", e.closable ? "hover:cursor-default" : ""),
        children: t
    }) : n.jsx("span", {
        children: t
    })
}
function qd(e) {
    var t, s, r, i;
    if (!(!e || !e.episode || !e.season))
        return {
            episode: (t = e.episode) == null ? void 0 : t.number,
            season: (s = e.season) == null ? void 0 : s.number,
            episodeId: (r = e.episode) == null ? void 0 : r.id,
            seasonId: (i = e.season) == null ? void 0 : i.id
        }
}
function Nn(e) {
    const t = H(a=>a.items)
      , s = d.useMemo(()=>t[e.media.id], [t, e.media])
      , r = d.useMemo(()=>s ? _r(s) : null, [s])
      , i = r != null && r.show ? r.progress.watched / r.progress.duration * 100 : void 0;
    return n.jsx(Gd, {
        media: e.media,
        series: qd(r),
        linkable: !0,
        percentage: i,
        onClose: e.onClose,
        closable: e.closable
    })
}
function Yd() {
    const {t: e} = C()
      , t = H(c=>c.items)
      , s = z(c=>c.bookmarks)
      , r = z(c=>c.removeBookmark)
      , [i,a] = d.useState(!1)
      , [o] = Zt()
      , l = d.useMemo(()=>{
        let c = [];
        return Object.entries(s).forEach(u=>{
            c.push({
                id: u[0],
                ...u[1]
            })
        }
        ),
        c = c.sort((u,m)=>{
            const p = s[u.id]
              , g = s[m.id]
              , f = t[u.id]
              , h = t[m.id]
              , v = Math.max(p.updatedAt, (f == null ? void 0 : f.updatedAt) ?? 0);
            return Math.max(g.updatedAt, (h == null ? void 0 : h.updatedAt) ?? 0) - v
        }
        ),
        c
    }
    , [s, t]);
    return l.length === 0 ? null : n.jsxs("div", {
        children: [n.jsx(wn, {
            title: e("home.bookmarks.sectionTitle") || "Bookmarks",
            icon: k.BOOKMARK,
            children: n.jsx(Ar, {
                editing: i,
                onEdit: a
            })
        }), n.jsx(kn, {
            ref: o,
            children: l.map(c=>n.jsx(Nn, {
                media: c,
                closable: i,
                onClose: ()=>r(c.id)
            }, c.id))
        })]
    })
}
const Jd = d.forwardRef((e,t)=>{
    const [s,r] = d.useState(!1);
    function i(a) {
        e.onChange(a, !1)
    }
    return n.jsxs(Z.Base, {
        className: S({
            "hover:flare-enabled group flex flex-col rounded-[28px] transition-colors sm:flex-row sm:items-center relative": !0,
            "bg-search-background": !s,
            "bg-search-focused": s
        }),
        children: [n.jsx(Z.Light, {
            flareSize: 400,
            enabled: s,
            className: "rounded-[28px]",
            backgroundClass: S({
                "transition-colors": !0,
                "bg-search-background": !s,
                "bg-search-focused": s
            })
        }), n.jsxs(Z.Child, {
            className: "flex flex-1 flex-col",
            children: [n.jsx("div", {
                className: "pointer-events-none absolute bottom-0 left-5 top-0 flex max-h-14 items-center text-search-icon",
                children: n.jsx(I, {
                    icon: k.SEARCH
                })
            }), n.jsx(pn, {
                ref: t,
                onUnFocus: ()=>{
                    r(!1),
                    e.onUnFocus()
                }
                ,
                onFocus: ()=>r(!0),
                onChange: a=>i(a),
                value: e.value,
                className: "w-full flex-1 bg-transparent px-4 py-4 pl-12 text-search-text placeholder-search-placeholder focus:outline-none sm:py-4 sm:pr-2",
                placeholder: e.placeholder
            })]
        })]
    })
}
);
function Xd(e) {
    d.useEffect(()=>{
        const t = s=>{
            var r;
            if (s.key === "/") {
                if (document.activeElement && document.activeElement.tagName.toLowerCase() === "input")
                    return;
                s.preventDefault(),
                (r = e.current) == null || r.focus()
            }
        }
        ;
        return window.addEventListener("keydown", t),
        ()=>{
            window.removeEventListener("keydown", t)
        }
    }
    , [e])
}
function Zd(e) {
    return n.jsx("h1", {
        className: `text-2xl font-bold text-white sm:text-3xl md:text-4xl ${e.className ?? ""}`,
        children: e.children
    })
}
const em = ()=>Math.floor(Math.random() * 10) === 0;
function tm() {
    const {t: e} = C()
      , t = d.useMemo(()=>em(), [])
      , s = d.useMemo(()=>Math.random(), []);
    return {
        t: d.useCallback(i=>{
            const a = e(`${i}.default`) ?? "";
            if (!t)
                return a;
            const o = e(`${i}.extra`, {
                returnObjects: !0,
                defaultValue: a
            });
            return Array.isArray(o) ? o.length === 0 ? a : o[Math.floor(s * o.length)] : typeof o == "string" ? o : a
        }
        , [e, s, t])
    }
}
function nm(e) {
    const t = e.getHours();
    return t < 5 ? "night" : t < 12 ? "morning" : t < 19 ? "day" : "night"
}
function sm(e) {
    let {setIsSticky: t, searchParams: s} = e;
    const {t: r} = tm()
      , {t: i} = C()
      , [a,o,l] = s
      , [,c] = d.useState(!1)
      , u = vt()
      , m = d.useCallback(j=>{
        c(j),
        t(j)
    }
    , [c, t])
      , {width: p} = xi()
      , g = 16
      , [f,h] = d.useState(g);
    d.useEffect(()=>{
        p > 1200 ? h(g) : h(g + 60)
    }
    , [p]);
    const v = nm(new Date)
      , b = r(`home.titles.${v}`)
      , y = d.useRef(null);
    return Xd(y),
    n.jsx(bt, {
        children: n.jsxs("div", {
            className: "mt-44 space-y-16 text-center",
            children: [n.jsx("div", {
                className: "relative z-10 mb-16",
                children: n.jsx(Zd, {
                    className: "mx-auto max-w-md",
                    children: b
                })
            }), n.jsx("div", {
                className: "relative h-20 z-30",
                children: n.jsx(pi, {
                    topOffset: f * -1 + u,
                    stickyStyle: {
                        paddingTop: `${f + u}px`
                    },
                    onFixedToggle: m,
                    children: n.jsx(Jd, {
                        ref: y,
                        onChange: o,
                        value: a,
                        onUnFocus: l,
                        placeholder: i("home.search.placeholder") ?? ""
                    })
                })
            })]
        })
    })
}
function rm() {
    const {t: e} = C()
      , t = z(c=>c.bookmarks)
      , s = H(c=>c.items)
      , r = H(c=>c.removeItem)
      , [i,a] = d.useState(!1)
      , [o] = Zt()
      , l = d.useMemo(()=>{
        let c = [];
        return Object.entries(s).filter(u=>_r(u[1]).show).sort((u,m)=>m[1].updatedAt - u[1].updatedAt).forEach(u=>{
            c.push({
                id: u[0],
                ...u[1]
            })
        }
        ),
        c = c.filter(u=>!!!t[u.id]),
        c
    }
    , [s, t]);
    return l.length === 0 ? null : n.jsxs("div", {
        children: [n.jsx(wn, {
            title: e("home.continueWatching.sectionTitle"),
            icon: k.CLOCK,
            children: n.jsx(Ar, {
                editing: i,
                onEdit: a
            })
        }), n.jsx(kn, {
            ref: o,
            children: l.map(c=>n.jsx(Nn, {
                media: c,
                closable: i,
                onClose: ()=>r(c.id)
            }, c.id))
        })]
    })
}
function Or() {
    const {t: e} = C();
    return n.jsx(Ue, {
        className: "mb-24 mt-40",
        text: e("home.search.loading") ?? void 0
    })
}
function ds(e) {
    const {t} = C()
      , s = e.failed ? k.WARNING : k.EYE_SLASH;
    return n.jsxs("div", {
        className: "mb-24 mt-40  flex flex-col items-center justify-center space-y-3 text-center",
        children: [n.jsx(lt, {
            icon: s,
            className: `text-xl ${e.failed ? "text-red-400" : "text-type-logo"}`
        }), e.failed ? null : n.jsx("div", {
            children: (e.results ?? 0) > 0 ? n.jsx("p", {
                children: t("home.search.allResults")
            }) : n.jsx("p", {
                children: t("home.search.noResults")
            })
        }), e.failed ? n.jsx("div", {
            children: n.jsx("p", {
                children: t("home.search.failed")
            })
        }) : null]
    })
}
function im(e) {
    let {searchQuery: t} = e;
    const {t: s} = C()
      , [r,i] = d.useState([])
      , [a,o] = se(l=>Vs(l));
    return d.useEffect(()=>{
        async function l(c) {
            const u = await o(c);
            u && i(u)
        }
        t !== "" && l({
            searchQuery: t
        })
    }
    , [t, o]),
    a.loading ? n.jsx(Or, {}) : a.error ? n.jsx(ds, {
        failed: !0
    }) : r ? n.jsxs("div", {
        children: [r.length > 0 ? n.jsxs("div", {
            children: [n.jsx(wn, {
                title: s("home.search.sectionTitle"),
                icon: k.SEARCH
            }), n.jsx(kn, {
                children: r.map(l=>n.jsx(Nn, {
                    media: l
                }, l.id.toString()))
            })]
        }) : null, n.jsx(ds, {
            results: r.length
        })]
    }) : null
}
function am(e) {
    const [t,s] = d.useState(!1)
      , [r,i] = d.useState(!1)
      , a = $d(e, 500);
    return d.useEffect(()=>{
        s(e !== ""),
        i(e !== "")
    }
    , [e]),
    d.useEffect(()=>{
        i(!1)
    }
    , [a]),
    {
        loading: r,
        searching: t
    }
}
function ms() {
    const {t: e} = C()
      , [t,s] = d.useState(!1)
      , r = Vd()
      , [i] = r
      , a = am(i);
    return n.jsxs(Hd, {
        showBg: t,
        children: [n.jsxs("div", {
            className: "mb-16 sm:mb-24",
            children: [n.jsx(le, {
                children: n.jsx("title", {
                    children: e("global.name")
                })
            }), n.jsx(sm, {
                searchParams: r,
                setIsSticky: s
            })]
        }), n.jsx(er, {
            children: a.loading ? n.jsx(Or, {}) : a.searching ? n.jsx(im, {
                searchQuery: i
            }) : n.jsxs(n.Fragment, {
                children: [n.jsx(Yd, {}), n.jsx(rm, {})]
            })
        })]
    })
}
function We(e) {
    return n.jsxs("div", {
        className: "flex flex-col items-center",
        children: [e.top ? n.jsx("div", {
            className: "inline-block transform translate-y-1/2",
        }) : null, n.jsx("div", {
            className: "w-full rounded-xl bg-largeCard-background bg-opacity-50 max-w-[600px] mx-auto p-[3rem]",
            children: e.children
        })]
    })
}
function ze(e) {
    return n.jsx("div", {
        className: "flex flex-col items-center text-center mb-8",
        children: n.jsxs("div", {
            className: "flex flex-col items-center text-center max-w-[318px]",
            children: [e.icon ? n.jsx("div", {
                className: "text-2xl mb-4 text-largeCard-icon",
                children: e.icon
            }) : null, n.jsx("h2", {
                className: "text-xl text-white font-bold",
                children: e.title
            }), e.children ? n.jsx("div", {
                className: "text-type-text mt-4",
                children: e.children
            }) : null]
        })
    })
}
function Qe(e) {
    return n.jsx("div", {
        className: "mt-12",
        children: n.jsx("div", {
            className: S("mx-auto", {
                "flex flex-row-reverse justify-between items-center": e.splitAlign,
                "flex max-w-xs flex-col-reverse gap-3": !e.splitAlign
            }),
            children: e.children
        })
    })
}
function Dr(e) {
    const t = !!e.url
      , s = !!e.to
      , r = n.jsx("span", {
        className: "group mt-1 cursor-pointer font-bold text-type-link hover:text-type-linkHover active:scale-95",
        children: e.children
    });
    return t ? n.jsx("a", {
        href: e.url,
        children: r
    }) : s ? n.jsx(en, {
        to: e.to ?? "",
        children: r
    }) : n.jsx("span", {
        onClick: ()=>e.onClick && e.onClick(),
        children: r
    })
}
function dt(e) {
    return n.jsxs("div", {
        className: "space-y-3",
        children: [e.label ? n.jsx("p", {
            className: "font-bold text-white",
            children: e.label
        }) : null, n.jsx(pn, {
            name: e.name,
            value: e.value,
            autoComplete: e.autoComplete,
            onChange: e.onChange,
            placeholder: e.placeholder,
            passwordToggleable: e.passwordToggleable,
            className: "w-full flex-1 bg-authentication-inputBg px-4 py-3 text-search-text focus:outline-none rounded-lg placeholder:text-gray-700"
        })]
    })
}
function om(e) {
    const [t,s] = d.useState("")
      , [r,i] = d.useState("")
      , {login: a, restore: o, importData: l} = Ne()
      , c = H(f=>f.items)
      , u = z(f=>f.bookmarks)
      , {t: m} = C()
      , [p,g] = se(async(f,h)=>{
        var y;
        if (!Do(f))
            throw new Error(m("auth.login.validationError") ?? void 0);
        const v = h.trim();
        if (v.length === 0)
            throw new Error(m("auth.login.deviceLengthError") ?? void 0);
        let b;
        try {
            b = await a({
                mnemonic: f,
                userData: {
                    device: v
                }
            })
        } catch (j) {
            throw j.status === 401 ? new Error(m("auth.login.validationError") ?? void 0) : j
        }
        await l(b, c, u),
        await o(b),
        (y = e.onLogin) == null || y.call(e)
    }
    , [e, a, o, m]);
    return n.jsxs(We, {
        top: n.jsx(Ce, {
            backgroundClass: "bg-[#161527]"
        }),
        children: [n.jsx(ze, {
            title: m("auth.login.title"),
            children: m("auth.login.description")
        }), n.jsxs("div", {
            className: "space-y-4",
            children: [n.jsx(dt, {
                label: m("auth.login.passphraseLabel") ?? void 0,
                value: t,
                autoComplete: "username",
                name: "username",
                onChange: s,
                placeholder: m("auth.login.passphrasePlaceholder") ?? void 0,
                passwordToggleable: !0
            }), n.jsx(dt, {
                label: m("auth.deviceNameLabel") ?? void 0,
                value: r,
                onChange: i,
                placeholder: m("auth.deviceNamePlaceholder") ?? void 0
            }), p.error && !p.loading ? n.jsx("p", {
                className: "text-authentication-errorText",
                children: p.error.message
            }) : null]
        }), n.jsx(Qe, {
            children: n.jsx(M, {
                theme: "purple",
                loading: p.loading,
                onClick: ()=>g(t, r),
                children: m("auth.login.submit")
            })
        }), n.jsx("p", {
            className: "text-center mt-6",
            children: n.jsx(Me, {
                i18nKey: "auth.createAccount",
                children: n.jsx(Dr, {
                    to: "/register",
                    children: "."
                })
            })
        })]
    })
}
function lm() {
    const e = ee();
    return n.jsxs(Ve, {
        children: [n.jsx(yt, {
            subpage: !0,
            k: "global.pages.login"
        }), n.jsx(om, {
            onLogin: ()=>{
                e("/")
            }
        })]
    })
}
const Br = ["#0A54FF", "#CF2E68", "#F9DD7F", "#7652DD", "#2ECFA8"]
  , hs = Br[0]
  , cm = function(t) {
    return n.jsxs("div", {
        className: "space-y-3",
        children: [t.label ? n.jsx("p", {
            className: "font-bold text-white",
            children: t.label
        }) : null, n.jsx("div", {
            className: "flex gap-3",
            children: Br.map(s=>n.jsx("button", {
                type: "button",
                tabIndex: 0,
                className: S("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "border-white" : "border-transparent"),
                onClick: ()=>t.onInput(s),
                style: {
                    backgroundColor: s
                },
                children: t.value === s ? n.jsx(I, {
                    icon: k.CHECKMARK
                }) : null
            }, s))
        })]
    })
}
  , fs = cm
  , Fr = [Le.USER_GROUP, Le.COUCH, Le.MOBILE, Le.TICKET, Le.HANDCUFFS]
  , um = Fr[0]
  , dm = function(t) {
    return n.jsxs("div", {
        className: "space-y-3",
        children: [t.label ? n.jsx("p", {
            className: "font-bold text-white",
            children: t.label
        }) : null, n.jsx("div", {
            className: "flex gap-3",
            children: Fr.map(s=>n.jsx("button", {
                type: "button",
                tabIndex: 0,
                className: S("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "bg-buttons-purple border-white" : "bg-authentication-inputBg border-transparent"),
                onClick: ()=>t.onInput(s),
                children: n.jsx(js, {
                    className: "text-xl",
                    icon: s
                })
            }, s))
        })]
    })
}
  , mm = dm;
function hm(e) {
    const [t,s] = d.useState("")
      , [r,i] = d.useState(hs)
      , [a,o] = d.useState(hs)
      , [l,c] = d.useState(um)
      , {t: u} = C()
      , [m,p] = d.useState(!1)
      , g = d.useCallback(()=>{
        var h;
        p(!1);
        const f = t.trim();
        if (f.length === 0) {
            p(!0);
            return
        }
        (h = e.onNext) == null || h.call(e, {
            device: f,
            profile: {
                colorA: r,
                colorB: a,
                icon: l
            }
        })
    }
    , [t, e, r, a, l]);
    return n.jsxs(We, {
        children: [n.jsx(ze, {
            icon: n.jsx(sr, {
                profile: {
                    colorA: r,
                    colorB: a,
                    icon: l
                },
                iconClass: "text-3xl",
                sizeClass: "w-16 h-16"
            }),
            title: u("auth.register.information.title") ?? void 0,
            children: u("auth.register.information.header")
        }), n.jsxs("div", {
            className: "space-y-6",
            children: [n.jsx(dt, {
                label: u("auth.deviceNameLabel") ?? void 0,
                value: t,
                onChange: s,
                placeholder: u("auth.deviceNamePlaceholder") ?? void 0
            }), n.jsx(fs, {
                label: u("auth.register.information.color1"),
                value: r,
                onInput: i
            }), n.jsx(fs, {
                label: u("auth.register.information.color2"),
                value: a,
                onInput: o
            }), n.jsx(mm, {
                label: u("auth.register.information.icon"),
                value: l,
                onInput: c
            }), m ? n.jsx("p", {
                className: "text-authentication-errorText",
                children: u("auth.login.deviceLengthError")
            }) : null]
        }), n.jsx(Qe, {
            children: n.jsx(M, {
                theme: "purple",
                onClick: ()=>g(),
                children: u("auth.register.information.next")
            })
        })]
    })
}
const fm = function(t) {
    const {t: s} = C()
      , r = t.mnemonic.split(" ")
      , [,i] = bi()
      , [a,o] = d.useState(!1)
      , l = yi()
      , c = d.useRef();
    function u() {
        i(t.mnemonic),
        o(!0),
        c.current && clearTimeout(c.current),
        c.current = setTimeout(()=>l() && o(!1), 500)
    }
    return n.jsxs("div", {
        className: "rounded-lg border border-authentication-border/50 ",
        children: [n.jsxs("div", {
            className: "px-4 py-2 flex justify-between border-b border-authentication-border/50",
            children: [n.jsx("p", {
                className: "font-bold text-sm text-white",
                children: s("auth.generate.passphraseFrameLabel")
            }), n.jsxs("button", {
                type: "button",
                className: "text-authentication-copyText hover:text-authentication-copyTextHover transition-colors flex gap-2 items-center cursor-pointer",
                onClick: ()=>u(),
                children: [n.jsx(I, {
                    icon: a ? k.CHECKMARK : k.COPY,
                    className: a ? "text-xs" : ""
                }), n.jsx("span", {
                    className: "text-sm",
                    children: s("actions.copy")
                })]
            })]
        }), n.jsx("div", {
            className: "px-4 py-4 grid grid-cols-3 text-sm sm:text-base sm:grid-cols-4 gap-2",
            children: r.map((m,p)=>n.jsx("div", {
                className: "rounded-md py-2 bg-authentication-wordBackground text-white font-medium text-center",
                children: m
            }, p))
        })]
    })
}
  , gm = fm;
function xm(e) {
    const t = d.useMemo(()=>Bo(), [])
      , {t: s} = C();
    return n.jsxs(We, {
        children: [n.jsx(ze, {
            title: s("auth.generate.title"),
            icon: n.jsx(I, {
                icon: k.USER
            }),
            children: s("auth.generate.description")
        }), n.jsx(gm, {
            mnemonic: t
        }), n.jsx(Qe, {
            children: n.jsx(M, {
                theme: "purple",
                onClick: ()=>{
                    var r;
                    return (r = e.onNext) == null ? void 0 : r.call(e, t)
                }
                ,
                children: s("auth.generate.next")
            })
        })]
    })
}
function pm(e) {
    const t = ee()
      , s = he()
      , r = d.useMemo(()=>new URL(s).hostname, [s])
      , i = mt(()=>or(s), [s])
      , {t: a} = C();
    let o = n.jsxs(n.Fragment, {
        children: [n.jsx("h3", {
            className: "",
            children: a("auth.trust.failed.title")
        }), n.jsx("p", {
            children: a("auth.trust.failed.text")
        })]
    });
    return i.loading && (o = n.jsx(Ue, {})),
    i.value && (o = n.jsxs(n.Fragment, {
        children: [n.jsx("h3", {
            className: "",
            children: i.value.name
        }), i.value.description ? n.jsx("p", {
            className: "text-center",
            children: i.value.description
        }) : null]
    })),
    n.jsxs(We, {
        children: [n.jsx(ze, {
            title: a("auth.trust.title"),
            icon: n.jsx(I, {
                icon: k.CIRCLE_EXCLAMATION
            }),
            children: n.jsx(Me, {
                i18nKey: "auth.trust.host",
                values: {
                    hostname: r
                },
                children: n.jsx("span", {
                    className: "text-white"
                })
            })
        }), n.jsx("div", {
            children: o
        }), n.jsxs(Qe, {
            children: [n.jsx(M, {
                theme: "secondary",
                onClick: ()=>t("/"),
                children: a("auth.trust.no")
            }), n.jsx(M, {
                theme: "purple",
                onClick: ()=>{
                    var l;
                    return i.value && ((l = e.onNext) == null ? void 0 : l.call(e, i.value))
                }
                ,
                children: a("auth.trust.yes")
            })]
        }), n.jsx("p", {
            className: "text-center mt-6",
            children: n.jsx(Me, {
                i18nKey: "auth.hasAccount",
                children: n.jsx(Dr, {
                    to: "/login",
                    children: "."
                })
            })
        })]
    })
}
function bm(e) {
    const [t,s] = d.useState("")
      , {register: r, restore: i, importData: a} = Ne()
      , o = H(b=>b.items)
      , l = z(b=>b.bookmarks)
      , c = Fe(b=>b.language)
      , u = D(b=>b.lastSelectedLanguage)
      , m = ln(b=>b.theme)
      , p = he()
      , {t: g} = C()
      , {executeRecaptcha: f} = vi()
      , [h,v] = se(async b=>{
        var T;
        if (!e.mnemonic || !e.userData)
            throw new Error(g("auth.verify.invalidData") ?? void 0);
        let y;
        if (e.hasCaptcha && (y = f ? await f() : void 0,
        !y))
            throw new Error(g("auth.verify.recaptchaFailed") ?? void 0);
        if (b !== e.mnemonic)
            throw new Error(g("auth.verify.noMatch") ?? void 0);
        const j = await r({
            mnemonic: b,
            userData: e.userData,
            recaptchaToken: y
        });
        await a(j, o, l),
        await qs(p, j, {
            applicationLanguage: c,
            defaultSubtitleLanguage: u ?? void 0,
            applicationTheme: m ?? void 0,
            proxyUrls: void 0
        }),
        await i(j),
        (T = e.onNext) == null || T.call(e)
    }
    , [e, r, i]);
    return n.jsx(We, {
        children: n.jsxs("form", {
            children: [n.jsx(ze, {
                icon: n.jsx(I, {
                    icon: k.CIRCLE_CHECK
                }),
                title: g("auth.verify.title"),
                children: g("auth.verify.description")
            }), n.jsx(dt, {
                label: g("auth.verify.passphraseLabel") ?? void 0,
                autoComplete: "username",
                name: "username",
                value: t,
                onChange: s,
                passwordToggleable: !0
            }), h.error ? n.jsx("p", {
                className: "mt-3 text-authentication-errorText",
                children: h.error.message
            }) : null, n.jsx(Qe, {
                children: n.jsx(M, {
                    theme: "purple",
                    loading: h.loading,
                    onClick: ()=>v(t),
                    children: g("auth.verify.register")
                })
            })]
        })
    })
}
function ym(e) {
    return e.siteKey ? n.jsx(ji, {
        reCaptchaKey: e.siteKey,
        children: e.children
    }) : e.children
}
function vm() {
    const e = ee()
      , [t,s] = d.useState(0)
      , [r,i] = d.useState(null)
      , [a,o] = d.useState(null)
      , [l,c] = d.useState(null);
    return n.jsx(ym, {
        siteKey: l,
        children: n.jsxs(Ve, {
            children: [n.jsx(yt, {
                subpage: !0,
                k: "global.pages.register"
            }), t === 0 ? n.jsx(pm, {
                onNext: u=>{
                    c(u.hasCaptcha && u.captchaClientKey ? u.captchaClientKey : null),
                    s(1)
                }
            }) : null, t === 1 ? n.jsx(xm, {
                onNext: u=>{
                    i(u),
                    s(2)
                }
            }) : null, t === 2 ? n.jsx(hm, {
                onNext: u=>{
                    o(u),
                    s(3)
                }
            }) : null, t === 3 ? n.jsx(bm, {
                hasCaptcha: !!l,
                mnemonic: r,
                userData: a,
                onNext: ()=>{
                    e("/")
                }
            }) : null]
        })
    })
}
function jm(e) {
    const t = vt()
      , s = ne(r=>r.location);
    return n.jsxs("div", {
        children: [n.jsx("div", {
            className: "fixed inset-x-0 z-[1000]",
            children: n.jsx(Rr, {})
        }), n.jsx("div", {
            style: {
                paddingTop: s === null ? `${t}px` : "0px"
            },
            className: "flex min-h-screen flex-col",
            children: e.children
        })]
    })
}
const Ur = G(q(e=>({
    routes: [],
    registerRoute(t) {
        e(s=>{
            s.routes.push(t)
        }
        )
    }
})));
function wm() {
    const e = De()
      , t = Ur(s=>s.registerRoute);
    d.useEffect(()=>{
        t({
            path: e.pathname
        })
    }
    , [e.pathname, t]),
    vs(()=>{
        t({
            path: e.pathname
        })
    }
    )
}
function ih() {
    const e = Ur(r=>r.routes)
      , t = De();
    return d.useMemo(()=>{
        const r = [...e];
        r.reverse();
        const i = r.find(a=>!a.path.startsWith("/media") && t.pathname !== a.path && !a.path.startsWith("/s/"));
        return (i == null ? void 0 : i.path) ?? "/"
    }
    , [e, t])
}
const km = d.lazy(()=>wt(()=>import("./DeveloperPage-Os0GMtVk.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
d.lazy(()=>wt(()=>import("./TestView-NPfrXC8A.js"), __vite__mapDeps([10, 1, 2, 3, 4, 8, 5, 6, 7, 9])));
const Jt = bs(()=>wt(()=>import("./PlayerView-fKsnnXsB.js"), __vite__mapDeps([11, 1, 2, 3, 5, 6, 7, 4, 8, 9])))
  , $r = bs(()=>wt(()=>import("./Settings-GCXSvvm0.js"), __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 7, 9, 8])));
Jt.preload();
$r.preload();
function gs(e) {
    let {children: t} = e;
    const s = De()
      , r = ee();
    return d.useEffect(()=>{
        const i = s.pathname;
        Ut(i) && so(s.pathname).then(a=>{
            r(a ?? "/", {
                replace: !0
            })
        }
        )
    }
    , [s.pathname, r]),
    Ut(s.pathname) ? null : t
}
function Nm() {
    const {query: e} = Xt()
      , t = ee();
    return d.useEffect(()=>{
        e ? Za(e).then(s=>{
            t(s ?? "/", {
                replace: !0
            })
        }
        ) : t("/", {
            replace: !0
        })
    }
    , [e, t]),
    null
}
function Sm() {
    const {query: e} = Xt()
      , t = ee();
    return d.useEffect(()=>{
        e ? t(`/browse/${e}`, {
            replace: !0
        }) : t("/", {
            replace: !0
        })
    }
    , [e, t]),
    null
}
function Cm() {
    return wm(),
    Al(),
    n.jsxs(jm, {
        children: [n.jsx(To, {}), n.jsxs(oi, {
            children: [n.jsx($, {
                path: "/s/:query",
                element: n.jsx(Nm, {})
            }), n.jsx($, {
                path: "/search/:type",
                element: n.jsx(li, {
                    to: "/browse"
                })
            }), n.jsx($, {
                path: "/search/:type/:query?",
                element: n.jsx(Sm, {})
            }), n.jsx($, {
                path: "/media/:media",
                element: n.jsx(gs, {
                    children: n.jsx(d.Suspense, {
                        fallback: null,
                        children: n.jsx(Jt, {})
                    })
                })
            }), n.jsx($, {
                path: "/media/:media/:season/:episode",
                element: n.jsx(gs, {
                    children: n.jsx(d.Suspense, {
                        fallback: null,
                        children: n.jsx(Jt, {})
                    })
                })
            }), n.jsx($, {
                path: "/browse/:query?",
                element: n.jsx(ms, {})
            }), n.jsx($, {
                path: "/",
                element: n.jsx(ms, {})
            }), n.jsx($, {
                path: "/register",
                element: n.jsx(vm, {})
            }), n.jsx($, {
                path: "/login",
                element: n.jsx(lm, {})
            }), n.jsx($, {
                path: "/about",
                element: n.jsx(Ol, {})
            }), tr() ? n.jsx($, {
                path: "/dmca",
                element: n.jsx(bl, {})
            }) : null, n.jsx($, {
                path: "/settings",
                element: n.jsx(d.Suspense, {
                    fallback: null,
                    children: n.jsx($r, {})
                })
            }), n.jsx($, {
                path: "/admin",
                element: n.jsx($l, {})
            }), n.jsx($, {
                path: "/dev",
                element: n.jsx(km, {})
            }), n.jsx($, {
                path: "/dev/video",
                element: n.jsx(Bd, {})
            }), null, n.jsx($, {
                path: "*",
                element: n.jsx(Ud, {})
            })]
        })]
    })
}
const Em = 5 * 1e3;
async function Im(e, t, s, r) {
    for (const i of e)
        if (t(i.id),
        !!r)
            try {
                if (i.action === "delete") {
                    await _o(s, r, i.tmdbId);
                    continue
                }
                if (i.action === "add") {
                    await Mo(s, r, {
                        meta: {
                            poster: i.poster,
                            title: i.title ?? "",
                            type: i.type ?? "",
                            year: i.year ?? NaN
                        },
                        tmdbId: i.tmdbId
                    });
                    continue
                }
            } catch (a) {
                console.error(`Failed to sync bookmark: ${i.tmdbId} - ${i.action}`, a)
            }
}
function Lm() {
    const e = z(r=>r.clearUpdateQueue)
      , t = z(r=>r.removeUpdateItem)
      , s = he();
    return d.useEffect(()=>{
        e()
    }
    , [e]),
    d.useEffect(()=>{
        const r = setInterval(()=>{
            (async()=>{
                const i = z.getState()
                  , a = U.getState();
                await Im(i.updateQueue, t, s, a.account)
            }
            )()
        }
        , Em);
        return ()=>{
            clearInterval(r)
        }
    }
    , [t, s]),
    null
}
const Tm = 5 * 1e3;
async function Pm(e, t, s, r) {
    for (const i of e)
        if (t(i.id),
        !!r)
            try {
                if (i.action === "delete") {
                    await Ko(s, r, i.tmdbId, i.seasonId, i.episodeId);
                    continue
                }
                if (i.action === "upsert") {
                    await Qo(s, r, Wo(i));
                    continue
                }
            } catch (a) {
                console.error(`Failed to sync progress: ${i.tmdbId} - ${i.action}`, a)
            }
}
function Rm() {
    const e = H(r=>r.clearUpdateQueue)
      , t = H(r=>r.removeUpdateItem)
      , s = he();
    return d.useEffect(()=>{
        e()
    }
    , [e]),
    d.useEffect(()=>{
        const r = setInterval(()=>{
            (async()=>{
                const i = H.getState()
                  , a = U.getState();
                await Pm(i.updateQueue, t, s, a.account)
            }
            )()
        }
        , Tm);
        return ()=>{
            clearInterval(r)
        }
    }
    , [t, s]),
    null
}
const Am = 5 * 1e3;
function Mm() {
    const e = D(s=>s.importSubtitleLanguage)
      , t = he();
    return d.useEffect(()=>{
        const s = setInterval(()=>{
            (async()=>{
                const r = D.getState()
                  , i = U.getState();
                r.lastSync.lastSelectedLanguage !== r.lastSelectedLanguage && i.account && r.lastSelectedLanguage && (await qs(t, i.account, {
                    defaultSubtitleLanguage: r.lastSelectedLanguage
                }),
                e(r.lastSelectedLanguage))
            }
            )()
        }
        , Am);
        return ()=>{
            clearInterval(s)
        }
    }
    , [e, t]),
    null
}
nd();
function Vr(e) {
    const t = {
        user: "screens.loadingUser",
        lazy: "screens.loadingApp"
    }
      , {t: s} = C();
    return n.jsx(ar, {
        iconSlot: n.jsx(Ue, {}),
        children: s(t[e.type] ?? "unknown.translation")
    })
}
function Hr(e) {
    const {t} = C()
      , {logout: s} = Ne()
      , r = U(o=>o.setBackendUrl)
      , i = d.useCallback(()=>{
        r(null),
        location.reload()
    }
    , [r])
      , a = d.useCallback(()=>{
        s().then(()=>{
            location.reload()
        }
        )
    }
    , [s]);
    return n.jsxs(ar, {
        iconSlot: n.jsx(I, {
            className: "text-type-danger text-2xl",
            icon: k.WARNING
        }),
        children: [e.children, e.showResetButton ? n.jsx("div", {
            className: "mt-6",
            children: n.jsx(M, {
                theme: "secondary",
                onClick: i,
                children: t("screens.loadingUserError.reset")
            })
        }) : null, e.showLogoutButton ? n.jsx("div", {
            className: "mt-6",
            children: n.jsx(M, {
                theme: "secondary",
                onClick: a,
                children: t("screens.loadingUserError.logout")
            })
        }) : null]
    })
}
function _m() {
    const e = il()
      , t = _().BACKEND_URL
      , s = he()
      , {t: r} = C()
      , i = t !== s;
    return e.loading ? n.jsx(Vr, {
        type: "user"
    }) : e.error ? n.jsx(Hr, {
        showResetButton: i,
        showLogoutButton: !i,
        children: r(i ? "screens.loadingUserError.textWithReset" : "screens.loadingUserError.text")
    }) : n.jsx(Cm, {})
}
function Om() {
    const e = mt(async()=>{
        Qs(Fe.getState().language),
        await pa()
    }
    , [])
      , {t} = C();
    return e.loading ? n.jsx(Tl, {}) : e.error ? n.jsx(Hr, {
        children: t("screens.migration.failed")
    }) : n.jsx(_m, {})
}
function Dm(e) {
    return _().NORMAL_ROUTER ? n.jsx(Ni, {
        children: e.children
    }) : n.jsx(Si, {
        children: e.children
    })
}
const Bm = document.getElementById("root")
  , Fm = wi(Bm);
Fm.render(n.jsx(d.StrictMode, {
    children: n.jsxs(pl, {
        children: [n.jsx(Is, {}), n.jsx(ki, {
            children: n.jsx(d.Suspense, {
                fallback: n.jsx(Vr, {
                    type: "lazy"
                }),
                children: n.jsxs(nl, {
                    applyGlobal: !0,
                    children: [n.jsx(Rm, {}), n.jsx(Lm, {}), n.jsx(Mm, {}), n.jsx(Dm, {
                        children: n.jsx(Om, {})
                    })]
                })
            })
        })]
    })
}));
export {gu as $, R as A, M as B, hc as C, he as D, mn as E, U as F, sl as G, nh as H, cn as I, $e as J, sh as K, Ue as L, P as M, fn as N, ml as O, mc as P, rh as Q, we as R, sr as S, bt as T, fs as U, mm as V, Ne as W, dt as X, un as Y, At as Z, N as _, Oe as a, hu as a0, Pd as a1, jn as a2, gn as a3, Gs as a4, on as a5, Yo as a6, St as a7, or as a8, Xm as a9, Vl as aa, Zm as ab, ln as ac, Fe as ad, D as ae, qs as af, Hn as ag, eh as ah, th as ai, Ve as aj, yt as ak, er as al, Ft as b, dn as c, Jm as d, _ as e, Ym as f, As as g, Wa as h, gl as i, Q as j, Ot as k, ft as l, _t as m, jt as n, Cs as o, Dt as p, Gm as q, hn as r, qm as s, fr as t, Xs as u, Sr as v, ih as w, Gt as x, zt as y, Od as z};
//# sourceMappingURL=index-yD3PZac5.js.map
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/DeveloperPage-Os0GMtVk.js", "assets/vendor-sZzeK2xX.js", "assets/auth-PrcDRVv8.js", "assets/caption-parsing-2Q8ZLDHc.js", "assets/react-dom-aIKBZ0FD.js", "assets/Icons-z4rFBofc.js", "assets/language-db-l3NI_WD5.js", "assets/Icons-L9H4Bkh4.css", "assets/locales-Uh0OzjGf.js", "assets/hls-zqvr_1ex.js", "assets/TestView-NPfrXC8A.js", "assets/PlayerView-fKsnnXsB.js", "assets/Settings-GCXSvvm0.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
