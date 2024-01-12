import {r as w, j as i, c as d} from "./vendor-sZzeK2xX.js";
import {c as m, a as f} from "./language-db-l3NI_WD5.js";
const u = ["en", "hi", "fr", "de", "nl", "pt"]
  , L = {
    zh: "cn"
}
  , x = ["ar-SA", "bg-BG", "bn-BD", "cs-CZ", "ca-AD", "de-DE", "el-GR", "en-US", "es-ES", "et-EE", "fa-IR", "fr-FR", "gl-ES", "gu-IN", "he-IL", "id-ID", "it-IT", "ja-JP", "ko-KR", "lv-LV", "ne-NP", "nl-NL", "pl-PL", "pt-BR", "ru-RU", "sl-SI", "sv-SE", "ta-LK", "th-TH", "tr-TR", "vi-VN", "zh-CN"]
  , M = {
    pirate: {
        code: "pirate",
        name: "Pirate",
        nativeName: "Pirate Tongue"
    },
    minion: {
        code: "minion",
        name: "Minion",
        nativeName: "Minionese"
    },
    tok: {
        code: "tok",
        name: "Toki pona",
        nativeName: "Toki pona"
    }
};
function C(e) {
    return e.includes("-") || e.length !== 2 ? e : x.find(t=>t.startsWith(`${e}-`)) ?? e
}
function F(e) {
    var l, h, n, c;
    const t = m.getTag(C(e), !0)
      , o = ((h = (l = t == null ? void 0 : t.language) == null ? void 0 : l.Description) == null ? void 0 : h[0]) ?? null;
    if (!o)
        return null;
    const s = ((c = (n = t == null ? void 0 : t.region) == null ? void 0 : n.Description) == null ? void 0 : c[0]) ?? null;
    let r = "";
    return s && (r = ` (${s})`),
    `${o}${r}`
}
function _(e) {
    const t = [...u].reverse();
    return e.sort((s,r)=>{
        const l = t.findIndex(n=>s.startsWith(`${n}-`) || s === n)
          , h = t.findIndex(n=>r.startsWith(`${n}-`) || r === n);
        return l !== -1 || h !== -1 ? h - l : s.localeCompare(r)
    }
    )
}
function y(e) {
    var l, h;
    let t = null;
    const o = m.getTag(C(e), !0);
    if (!((l = o == null ? void 0 : o.language) != null && l.Subtag) || (f.getLanguage(o.language.Subtag, (n,c)=>{
        c && (t = c)
    }
    ),
    !t))
        return null;
    const s = L[t.iso639_1.toLowerCase()];
    if (t.countries.length === 0)
        return s ?? null;
    if (s) {
        const n = t.countries.find(c=>c.code_2.toLowerCase() === s);
        if (n)
            return n.code_2.toLowerCase()
    }
    const r = (h = o == null ? void 0 : o.region) == null ? void 0 : h.Subtag.toLowerCase();
    if (r) {
        const n = t.countries.find(c=>c.code_2.toLowerCase() === r || c.code_3.toLowerCase() === r);
        if (n)
            return n.code_2.toLowerCase()
    }
    return t.countries[0].code_2.toLowerCase()
}
function b(e) {
    var n, c, g;
    const t = C(e)
      , o = M[t];
    if (o)
        return o;
    const s = m.getTag(t, !0);
    if (!((n = s == null ? void 0 : s.language) != null && n.Subtag))
        return null;
    let r = null;
    if (f.getLanguage(s.language.Subtag, (v,p)=>{
        p && (r = p)
    }
    ),
    !r)
        return null;
    const l = [];
    (c = s.region) != null && c.Description && l.push(s.region.Description[0]),
    (g = s.script) != null && g.Description && l.push(s.script.Description[0]);
    const h = l.map(v=>`(${v})`).join(" ");
    return {
        code: s.parts.langtag ?? t,
        isRtl: r.direction === "RTL",
        name: r.name[0] + (h ? ` ${h}` : ""),
        nativeName: r.nativeName[0] ?? void 0
    }
}
let a = function(e) {
    return e.SEARCH = "search",
    e.BOOKMARK = "bookmark",
    e.BOOKMARK_OUTLINE = "bookmark_outline",
    e.CLOCK = "clock",
    e.EYE = "eye",
    e.EYE_SLASH = "eyeSlash",
    e.ARROW_LEFT = "arrowLeft",
    e.ARROW_RIGHT = "arrowRight",
    e.CHEVRON_DOWN = "chevronDown",
    e.CHEVRON_UP = "chevronUp",
    e.CHEVRON_RIGHT = "chevronRight",
    e.CHEVRON_LEFT = "chevronLeft",
    e.CLAPPER_BOARD = "clapperBoard",
    e.FILM = "film",
    e.DRAGON = "dragon",
    e.WARNING = "warning",
    e.MOVIE_WEB = "movieWeb",
    e.DISCORD = "discord",
    e.GITHUB = "github",
    e.PLAY = "play",
    e.PAUSE = "pause",
    e.EXPAND = "expand",
    e.COMPRESS = "compress",
    e.VOLUME = "volume",
    e.VOLUME_X = "volume_x",
    e.X = "x",
    e.EDIT = "edit",
    e.AIRPLAY = "airplay",
    e.EPISODES = "episodes",
    e.SKIP_FORWARD = "skip_forward",
    e.SKIP_BACKWARD = "skip_backward",
    e.FILE = "file",
    e.CAPTIONS = "captions",
    e.LINK = "link",
    e.CASTING = "casting",
    e.CIRCLE_EXCLAMATION = "circle_exclamation",
    e.DOWNLOAD = "download",
    e.GEAR = "gear",
    e.WATCH_PARTY = "watch_party",
    e.PICTURE_IN_PICTURE = "pictureInPicture",
    e.CHECKMARK = "checkmark",
    e.TACHOMETER = "tachometer",
    e.MAIL = "mail",
    e.CIRCLE_CHECK = "circle_check",
    e.SKIP_EPISODE = "skip_episode",
    e.MORE_VERTICAL = "more_vertical",
    e.IOS_SHARE = "ios_share",
    e.IOS_FILES = "ios_files",
    e.WAND = "wand",
    e.COPY = "copy",
    e.USER = "user",
    e.UP_DOWN_ARROW = "up_down_arrow",
    e.RISING_STAR = "rising_star",
    e.SETTINGS = "settings",
    e.COINS = "coins",
    e.LOGOUT = "logout",
    e.MENU = "menu",
    e.LOCK = "lock",
    e.UNLOCK = "unlock",
    e.DONATION = "donation",
    e.CIRCLE_QUESTION = "circle_question",
    e.BRUSH = "brush",
    e
}({});
const V = {
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>',
    bookmark: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    eyeSlash: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"/></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',
    clapperBoard: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"/></svg>',
    film: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"/></svg>',
    dragon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M18.43 255.8L192 224L100.8 292.6C90.67 302.8 97.8 320 112 320h222.7c-9.499-26.5-14.75-54.5-14.75-83.38V194.2L200.3 106.8C176.5 90.88 145 92.75 123.3 111.2l-117.5 116.4C-6.562 238 2.436 258 18.43 255.8zM575.2 289.9l-100.7-50.25c-16.25-8.125-26.5-24.75-26.5-43V160h63.99l28.12 22.62C546.1 188.6 554.2 192 562.7 192h30.1c11.1 0 23.12-6.875 28.5-17.75l14.37-28.62c5.374-10.87 4.25-23.75-2.999-33.5l-74.49-99.37C552.1 4.75 543.5 0 533.5 0H296C288.9 0 285.4 8.625 290.4 13.62L351.1 64L292.4 88.75c-5.874 3-5.874 11.37 0 14.37L351.1 128l-.0011 108.6c0 72 35.99 139.4 95.99 179.4c-195.6 6.75-344.4 41-434.1 60.88c-8.124 1.75-13.87 9-13.87 17.38C.0463 504 8.045 512 17.79 512h499.1c63.24 0 119.6-47.5 122.1-110.8C642.3 354 617.1 310.9 575.2 289.9zM489.1 66.25l45.74 11.38c-2.75 11-12.5 18.88-24.12 18.25C497.7 95.25 484.8 83.38 489.1 66.25z"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    movieWeb: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" version="1.1"><path d="M 9.888 1.500 C 6.669 3.249, 4.662 7.806, 5.551 11.346 C 6.215 13.992, 6.247 14, 16 14 C 25.753 14, 25.785 13.992, 26.449 11.346 C 28.488 3.223, 18.091 -2.959, 9.888 1.500" stroke="none" fill="#85b5cc" fill-rule="evenodd"/><path d="M 4.592 15.448 C 4.312 16.519, 4.586 18.001, 5.200 18.740 C 5.813 19.480, 6.286 22.061, 6.249 24.476 C 6.178 29.211, 7.978 32.750, 9.865 31.584 C 10.507 31.187, 10.734 30.379, 10.369 29.789 C 9.380 28.187, 9.214 20, 10.171 20 C 11.066 20, 11.320 21.878, 11.025 26.300 C 10.841 29.065, 12.429 32, 14.108 32 C 14.583 32, 14.824 29.396, 14.644 26.214 C 14.367 21.328, 14.578 20.429, 16 20.429 C 17.422 20.429, 17.633 21.328, 17.356 26.214 C 17.176 29.396, 17.417 32, 17.892 32 C 19.571 32, 21.159 29.065, 20.975 26.300 C 20.680 21.878, 20.934 20, 21.829 20 C 22.786 20, 22.620 28.187, 21.631 29.789 C 21.266 30.379, 21.493 31.187, 22.135 31.584 C 24.022 32.750, 25.822 29.211, 25.751 24.476 C 25.714 22.061, 26.212 19.449, 26.858 18.671 C 27.541 17.848, 27.712 16.474, 27.265 15.379 C 26.584 13.705, 25.332 13.500, 15.800 13.500 C 6.036 13.500, 5.055 13.670, 4.592 15.448" stroke="none" fill="#2d6ea2" fill-rule="evenodd"/></svg>',
    discord: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1"> <g id="surface1"> <path style=" stroke:none;fill-rule:evenodd;fill:rgb(18.039216%,43.921569%,65.098039%);fill-opacity:1;" d=""/> </g> </svg>',
    github: '',
    play: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" style="transform: translateX(5%)" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>',
    expand: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>',
    compress: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>',
    volume: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',
    volume_x: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>',
    bookmark_outline: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>',
    airplay: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon fill="currentColor" points="12 15 17 21 7 21 12 15"></polygon></svg>',
    episodes: '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C1.34315 4 0 5.34314 0 7V13.9496C0 15.6065 1.34315 16.9496 3 16.9496H5.86645V14.9496H3C2.44772 14.9496 2 14.5019 2 13.9496V7C2 6.44771 2.44771 6 3 6H16.0327C16.585 6 17.0327 6.44772 17.0327 7V9.86645H19.0327V7C19.0327 5.34315 17.6896 4 16.0327 4H3Z" fill="currentColor"/><rect x="5.89929" y="10.5444" width="17" height="10" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
    skip_forward: '<svg width="1em" height="1em" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3333 12.3333L16 7.66667M16 7.66667L11.3333 3M16 7.66667H6.66667C5.42899 7.66667 4.242 8.15833 3.36684 9.0335C2.49167 9.90867 2 11.0957 2 12.3333C2 13.571 2.49167 14.758 3.36684 15.6332C4.242 16.5083 5.42899 17 6.66667 17H9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M16.5043 14.2727V23H14.6591V16.0241H14.608L12.6094 17.277V15.6406L14.7699 14.2727H16.5043ZM22.0004 23.1918C21.2674 23.1889 20.6367 23.0085 20.1083 22.6506C19.5827 22.2926 19.1779 21.7741 18.8938 21.0952C18.6126 20.4162 18.4734 19.5994 18.4762 18.6449C18.4762 17.6932 18.6168 16.8821 18.8981 16.2116C19.1822 15.5412 19.587 15.0312 20.1126 14.6818C20.641 14.3295 21.2702 14.1534 22.0004 14.1534C22.7305 14.1534 23.3583 14.3295 23.8839 14.6818C24.4123 15.0341 24.8185 15.5455 25.1026 16.2159C25.3867 16.8835 25.5273 17.6932 25.5245 18.6449C25.5245 19.6023 25.3825 20.4205 25.0984 21.0994C24.8171 21.7784 24.4137 22.2969 23.8881 22.6548C23.3626 23.0128 22.7333 23.1918 22.0004 23.1918ZM22.0004 21.6619C22.5004 21.6619 22.8995 21.4105 23.1978 20.9077C23.4961 20.4048 23.6438 19.6506 23.641 18.6449C23.641 17.983 23.5728 17.4318 23.4364 16.9915C23.3029 16.5511 23.1126 16.2202 22.8654 15.9986C22.6211 15.777 22.3327 15.6662 22.0004 15.6662C21.5032 15.6662 21.1055 15.9148 20.8072 16.4119C20.5089 16.9091 20.3583 17.6534 20.3555 18.6449C20.3555 19.3153 20.4222 19.875 20.5558 20.3239C20.6921 20.7699 20.8839 21.1051 21.131 21.3295C21.3782 21.5511 21.668 21.6619 22.0004 21.6619Z" fill="currentColor" /></svg>',
    skip_backward: '<svg width="1em" height="1em" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6667 12.3333L9 7.66667M9 7.66667L13.6667 3M9 7.66667H18.3333C19.571 7.66667 20.758 8.15833 21.6332 9.0335C22.5083 9.90867 23 11.0957 23 12.3333C23 13.571 22.5083 14.758 21.6332 15.6332C20.758 16.5083 19.571 17 18.3333 17H16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.50426 14.2727V23H2.65909V16.0241H2.60795L0.609375 17.277V15.6406L2.76989 14.2727H4.50426ZM10.0004 23.1918C9.2674 23.1889 8.63672 23.0085 8.10831 22.6506C7.58274 22.2926 7.17791 21.7741 6.89382 21.0952C6.61257 20.4162 6.47337 19.5994 6.47621 18.6449C6.47621 17.6932 6.61683 16.8821 6.89808 16.2116C7.18217 15.5412 7.587 15.0312 8.11257 14.6818C8.64098 14.3295 9.27024 14.1534 10.0004 14.1534C10.7305 14.1534 11.3583 14.3295 11.8839 14.6818C12.4123 15.0341 12.8185 15.5455 13.1026 16.2159C13.3867 16.8835 13.5273 17.6932 13.5245 18.6449C13.5245 19.6023 13.3825 20.4205 13.0984 21.0994C12.8171 21.7784 12.4137 22.2969 11.8881 22.6548C11.3626 23.0128 10.7333 23.1918 10.0004 23.1918ZM10.0004 21.6619C10.5004 21.6619 10.8995 21.4105 11.1978 20.9077C11.4961 20.4048 11.6438 19.6506 11.641 18.6449C11.641 17.983 11.5728 17.4318 11.4364 16.9915C11.3029 16.5511 11.1126 16.2202 10.8654 15.9986C10.6211 15.777 10.3327 15.6662 10.0004 15.6662C9.5032 15.6662 9.10547 15.9148 8.80717 16.4119C8.50888 16.9091 8.35831 17.6534 8.35547 18.6449C8.35547 19.3153 8.42223 19.875 8.55575 20.3239C8.69212 20.7699 8.88388 21.1051 9.13104 21.3295C9.3782 21.5511 9.66797 21.6619 10.0004 21.6619Z" fill="currentColor"/></svg>',
    file: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>',
    captions: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 25 20"><path transform="translate(-3 -6)" d="M25.5,6H5.5A2.507,2.507,0,0,0,3,8.5v15A2.507,2.507,0,0,0,5.5,26h20A2.507,2.507,0,0,0,28,23.5V8.5A2.507,2.507,0,0,0,25.5,6ZM5.5,16h5v2.5h-5ZM18,23.5H5.5V21H18Zm7.5,0h-5V21h5Zm0-5H13V16H25.5Z" fill="currentColor"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
    circle_exclamation: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
    casting: "",
    download: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    gear: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>',
    watch_party: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>',
    pictureInPicture: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>',
    checkmark: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" /></svg>',
    tachometer: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M128 288c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm154.65-97.08l16.24-48.71c1.16-3.45 3.18-6.35 4.92-9.43-4.73-2.76-9.94-4.78-15.81-4.78-17.67 0-32 14.33-32 32 0 15.78 11.63 28.29 26.65 30.92zM176 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zM288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112zM416 320c0 17.67 14.33 32 32 32s32-14.33 32-32-14.33-32-32-32-32 14.33-32 32zm-56.41-182.77c-12.72-4.23-26.16 2.62-30.38 15.17l-45.34 136.01C250.49 290.58 224 318.06 224 352c0 11.72 3.38 22.55 8.88 32h110.25c5.5-9.45 8.88-20.28 8.88-32 0-19.45-8.86-36.66-22.55-48.4l45.34-136.01c4.17-12.57-2.64-26.17-15.21-30.36zM432 208c0-15.8-11.66-28.33-26.72-30.93-.07.21-.07.43-.14.65l-19.5 58.49c4.37 2.24 9.11 3.8 14.36 3.8 17.67-.01 32-14.34 32-32.01z"/></svg>',
    mail: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 4.125H2.75C2.56766 4.125 2.3928 4.19743 2.26386 4.32636C2.13493 4.4553 2.0625 4.63016 2.0625 4.8125V16.5C2.0625 16.8647 2.20737 17.2144 2.46523 17.4723C2.72309 17.7301 3.07283 17.875 3.4375 17.875H18.5625C18.9272 17.875 19.2769 17.7301 19.5348 17.4723C19.7926 17.2144 19.9375 16.8647 19.9375 16.5V4.8125C19.9375 4.63016 19.8651 4.4553 19.7361 4.32636C19.6072 4.19743 19.4323 4.125 19.25 4.125ZM8.48289 11L3.4375 15.6243V6.3757L8.48289 11ZM9.50039 11.9324L10.5316 12.882C10.6585 12.9985 10.8244 13.0631 10.9966 13.0631C11.1687 13.0631 11.3346 12.9985 11.4615 12.882L12.4927 11.9324L17.4771 16.5H4.51773L9.50039 11.9324ZM13.5171 11L18.5625 6.37484V15.6252L13.5171 11Z" fill="currentColor" /></svg>',
    circle_check: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>',
    skip_episode: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 2.8125V15.1875C14.625 15.3367 14.5657 15.4798 14.4602 15.5852C14.3548 15.6907 14.2117 15.75 14.0625 15.75C13.9133 15.75 13.7702 15.6907 13.6648 15.5852C13.5593 15.4798 13.5 15.3367 13.5 15.1875V10.3198L5.09273 15.5777C4.92342 15.684 4.72878 15.7431 4.52895 15.7489C4.32913 15.7547 4.13139 15.707 3.95621 15.6107C3.78102 15.5144 3.63477 15.373 3.53258 15.2012C3.43039 15.0294 3.37599 14.8333 3.375 14.6334V3.36656C3.37599 3.16666 3.43039 2.97065 3.53258 2.79883C3.63477 2.62702 3.78102 2.48564 3.95621 2.38933C4.13139 2.29303 4.32913 2.2453 4.52895 2.25109C4.72878 2.25688 4.92342 2.31598 5.09273 2.42227L13.5 7.68023V2.8125C13.5 2.66332 13.5593 2.52024 13.6648 2.41475C13.7702 2.30926 13.9133 2.25 14.0625 2.25C14.2117 2.25 14.3548 2.30926 14.4602 2.41475C14.5657 2.52024 14.625 2.66332 14.625 2.8125Z" fill="currentColor"/></svg>',
    more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>',
    ios_share: '<svg width="1em" height="1em" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.3857C10.4409 15.3857 10.8101 15.0166 10.8101 14.5859V4.05518L10.7485 2.51709L11.4355 3.24512L12.9941 4.90625C13.1377 5.07031 13.353 5.15234 13.5479 5.15234C13.9683 5.15234 14.2964 4.84473 14.2964 4.42432C14.2964 4.20898 14.2041 4.04492 14.0503 3.89111L10.5845 0.54834C10.3794 0.343262 10.2051 0.271484 10 0.271484C9.78467 0.271484 9.61035 0.343262 9.40527 0.54834L5.93945 3.89111C5.78564 4.04492 5.69336 4.20898 5.69336 4.42432C5.69336 4.84473 6.00098 5.15234 6.43164 5.15234C6.62646 5.15234 6.85205 5.07031 6.99561 4.90625L8.5542 3.24512L9.24121 2.51709L9.17969 4.05518V14.5859C9.17969 15.0166 9.55908 15.3857 10 15.3857ZM4.11426 23.4146H15.8755C18.0186 23.4146 19.0952 22.3481 19.0952 20.2358V10.0024C19.0952 7.89014 18.0186 6.82373 15.8755 6.82373H13.0146V8.47461H15.8447C16.8599 8.47461 17.4443 9.02832 17.4443 10.0947V20.1436C17.4443 21.21 16.8599 21.7637 15.8447 21.7637H4.13477C3.10938 21.7637 2.54541 21.21 2.54541 20.1436V10.0947C2.54541 9.02832 3.10938 8.47461 4.13477 8.47461H6.9751V6.82373H4.11426C1.97119 6.82373 0.894531 7.89014 0.894531 10.0024V20.2358C0.894531 22.3481 1.97119 23.4146 4.11426 23.4146Z" fill="currentColor"/></svg>',
    ios_files: '<svg width="1em" height="1em" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.22405 20H21.024C22.9178 20 24 18.8772 24 16.7018V5.33333C24 3.1462 22.9065 2.03509 20.776 2.03509H10.5063C9.72851 2.03509 9.30014 1.85965 8.74777 1.36842L8.12776 0.818713C7.41757 0.187135 6.91029 0 5.85063 0H2.81822C1.01456 0 0 1.04094 0 3.1462V16.7018C0 18.8889 1.0822 20 3.22405 20ZM1.47675 3.22807C1.47675 2.08187 2.04039 1.50877 3.11132 1.50877H5.47863C6.23391 1.50877 6.65101 1.68421 7.21466 2.19883L7.84594 2.74854C8.52231 3.35673 9.06341 3.55556 10.1343 3.55556H20.7534C21.8807 3.55556 22.5233 4.18713 22.5233 5.4152V6.17544H1.47675V3.22807ZM3.24659 18.4795C2.09676 18.4795 1.47675 17.848 1.47675 16.6199V7.61403H22.5233V16.6316C22.5233 17.848 21.8807 18.4795 20.7534 18.4795H3.24659Z" fill="white"/></svg>',
    wand: '<svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33437 4.33438L8.15625 4.775C8.0625 4.80937 8 4.9 8 5C8 5.1 8.0625 5.19062 8.15625 5.225L9.33437 5.66563L9.775 6.84375C9.80938 6.9375 9.9 7 10 7C10.1 7 10.1906 6.9375 10.225 6.84375L10.6656 5.66563L11.8438 5.225C11.9375 5.19062 12 5.1 12 5C12 4.9 11.9375 4.80937 11.8438 4.775L10.6656 4.33438L10.225 3.15625C10.1906 3.0625 10.1 3 10 3C9.9 3 9.80938 3.0625 9.775 3.15625L9.33437 4.33438ZM3.44062 15.3562C2.85625 15.9406 2.85625 16.8906 3.44062 17.4781L4.52187 18.5594C5.10625 19.1437 6.05625 19.1437 6.64375 18.5594L18.5594 6.64062C19.1438 6.05625 19.1438 5.10625 18.5594 4.51875L17.4781 3.44063C16.8937 2.85625 15.9437 2.85625 15.3562 3.44063L3.44062 15.3562ZM17.1438 5.58125L13.8625 8.8625L13.1344 8.13438L16.4156 4.85312L17.1438 5.58125ZM2.23438 6.6625C2.09375 6.71562 2 6.85 2 7C2 7.15 2.09375 7.28438 2.23438 7.3375L4 8L4.6625 9.76562C4.71562 9.90625 4.85 10 5 10C5.15 10 5.28438 9.90625 5.3375 9.76562L6 8L7.76562 7.3375C7.90625 7.28438 8 7.15 8 7C8 6.85 7.90625 6.71562 7.76562 6.6625L6 6L5.3375 4.23438C5.28438 4.09375 5.15 4 5 4C4.85 4 4.71562 4.09375 4.6625 4.23438L4 6L2.23438 6.6625ZM13.2344 14.6625C13.0938 14.7156 13 14.85 13 15C13 15.15 13.0938 15.2844 13.2344 15.3375L15 16L15.6625 17.7656C15.7156 17.9062 15.85 18 16 18C16.15 18 16.2844 17.9062 16.3375 17.7656L17 16L18.7656 15.3375C18.9062 15.2844 19 15.15 19 15C19 14.85 18.9062 14.7156 18.7656 14.6625L17 14L16.3375 12.2344C16.2844 12.0938 16.15 12 16 12C15.85 12 15.7156 12.0938 15.6625 12.2344L15 14L13.2344 14.6625Z" fill="currentColor"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    up_down_arrow: '<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.53803 5.19018C4.50013 5.09883 4.49018 4.99829 4.50942 4.90128C4.52867 4.80427 4.57625 4.71514 4.64616 4.64518L7.64616 1.64518C7.69259 1.59869 7.74774 1.56181 7.80844 1.53665C7.86913 1.51149 7.9342 1.49854 7.99991 1.49854C8.06561 1.49854 8.13068 1.51149 8.19138 1.53665C8.25207 1.56181 8.30722 1.59869 8.35366 1.64518L11.3537 4.64518C11.4237 4.71511 11.4713 4.80423 11.4907 4.90128C11.51 4.99832 11.5001 5.09891 11.4622 5.19032C11.4243 5.28174 11.3602 5.35985 11.2779 5.41479C11.1956 5.46972 11.0989 5.49901 10.9999 5.49893H4.99991C4.90102 5.49891 4.80435 5.46956 4.72214 5.41461C4.63993 5.35965 4.57586 5.28155 4.53803 5.19018ZM10.9999 10.4989H4.99991C4.90096 10.4988 4.80421 10.5281 4.72191 10.5831C4.63962 10.638 4.57547 10.7161 4.53759 10.8075C4.49972 10.8989 4.48982 10.9995 4.50914 11.0966C4.52847 11.1936 4.57615 11.2828 4.64616 11.3527L7.64616 14.3527C7.69259 14.3992 7.74774 14.436 7.80844 14.4612C7.86913 14.4864 7.9342 14.4993 7.99991 14.4993C8.06561 14.4993 8.13068 14.4864 8.19138 14.4612C8.25207 14.436 8.30722 14.3992 8.35366 14.3527L11.3537 11.3527C11.4237 11.2828 11.4713 11.1936 11.4907 11.0966C11.51 10.9995 11.5001 10.8989 11.4622 10.8075C11.4243 10.7161 11.3602 10.638 11.2779 10.5831C11.1956 10.5281 11.0989 10.4988 10.9999 10.4989Z" fill="currentColor"/></svg>',
    rising_star: '<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5509 6.91102L15.5716 8.59852L16.1643 11.1108C16.2061 11.2869 16.195 11.4714 16.1325 11.6412C16.0699 11.811 15.9587 11.9587 15.8127 12.0656C15.6651 12.174 15.4888 12.2365 15.3058 12.2453C15.1229 12.254 14.9414 12.2087 14.7841 12.1148L12.5341 10.7789L10.2841 12.1148C10.1268 12.2087 9.94528 12.254 9.76231 12.2453C9.57935 12.2365 9.40303 12.174 9.2554 12.0656C9.10948 11.9586 8.99833 11.811 8.9358 11.6412C8.87328 11.4713 8.86216 11.2869 8.90384 11.1108L9.49657 8.59852L7.51657 6.91102C7.37802 6.79275 7.27755 6.63613 7.22781 6.46088C7.17808 6.28563 7.1813 6.09959 7.23708 5.92617C7.29286 5.75275 7.39869 5.59971 7.54126 5.48631C7.68383 5.37291 7.85677 5.30423 8.03829 5.28891L10.656 5.06742L11.677 2.68734C11.749 2.52049 11.8683 2.37837 12.0202 2.27853C12.1721 2.17869 12.3499 2.12549 12.5316 2.12549C12.7134 2.12549 12.8911 2.17869 13.043 2.27853C13.1949 2.37837 13.3142 2.52049 13.3863 2.68734L14.4072 5.06883L17.0242 5.28891C17.2062 5.30319 17.3798 5.37111 17.5231 5.48409C17.6665 5.59707 17.7731 5.75002 17.8294 5.9236C17.8858 6.09718 17.8894 6.28358 17.8399 6.45922C17.7903 6.63486 17.6897 6.79185 17.5509 6.91031V6.91102ZM7.02298 9.03938C6.97074 8.98708 6.9087 8.94559 6.84041 8.91728C6.77213 8.88897 6.69893 8.8744 6.62501 8.8744C6.55109 8.8744 6.47789 8.88897 6.4096 8.91728C6.34132 8.94559 6.27928 8.98708 6.22704 9.03938L2.28954 12.9769C2.18399 13.0824 2.12469 13.2256 2.12469 13.3748C2.12469 13.5241 2.18399 13.6673 2.28954 13.7728C2.39509 13.8784 2.53824 13.9377 2.68751 13.9377C2.83677 13.9377 2.97993 13.8784 3.08548 13.7728L7.02298 9.83531C7.07528 9.78307 7.11677 9.72104 7.14507 9.65275C7.17338 9.58446 7.18795 9.51127 7.18795 9.43735C7.18795 9.36342 7.17338 9.29023 7.14507 9.22194C7.11677 9.15365 7.07528 9.09162 7.02298 9.03938ZM8.14798 12.9769C8.09574 12.9246 8.0337 12.8831 7.96541 12.8548C7.89713 12.8265 7.82393 12.8119 7.75001 12.8119C7.67609 12.8119 7.60289 12.8265 7.5346 12.8548C7.46632 12.8831 7.40428 12.9246 7.35204 12.9769L3.41454 16.9144C3.36228 16.9666 3.32082 17.0287 3.29254 17.097C3.26425 17.1652 3.24969 17.2384 3.24969 17.3123C3.24969 17.3863 3.26425 17.4594 3.29254 17.5277C3.32082 17.596 3.36228 17.6581 3.41454 17.7103C3.52009 17.8159 3.66324 17.8752 3.81251 17.8752C3.88642 17.8752 3.9596 17.8606 4.02789 17.8323C4.09617 17.804 4.15821 17.7626 4.21048 17.7103L8.14798 13.7728C8.20028 13.7206 8.24177 13.6585 8.27007 13.5902C8.29838 13.522 8.31295 13.4488 8.31295 13.3748C8.31295 13.3009 8.29838 13.2277 8.27007 13.1594C8.24177 13.0912 8.20028 13.0291 8.14798 12.9769ZM12.4152 12.9769L8.47774 16.9144C8.37219 17.0199 8.3129 17.1631 8.3129 17.3123C8.3129 17.4616 8.37219 17.6048 8.47774 17.7103C8.58329 17.8159 8.72644 17.8752 8.87571 17.8752C9.02498 17.8752 9.16813 17.8159 9.27368 17.7103L13.2112 13.7728C13.3167 13.6674 13.3761 13.5243 13.3761 13.3751C13.3762 13.2259 13.317 13.0828 13.2115 12.9772C13.1061 12.8717 12.963 12.8123 12.8138 12.8123C12.6646 12.8122 12.5215 12.8714 12.4159 12.9769H12.4152Z" fill="currentColor"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    coins: '<svg width="1em" height="1em" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8125 7.69742V7.21875C15.8125 5.06344 12.5615 3.4375 8.25 3.4375C3.93852 3.4375 0.6875 5.06344 0.6875 7.21875V10.6562C0.6875 12.4515 2.94336 13.878 6.1875 14.3052V14.7812C6.1875 16.9366 9.43852 18.5625 13.75 18.5625C18.0615 18.5625 21.3125 16.9366 21.3125 14.7812V11.3438C21.3125 9.56484 19.128 8.13656 15.8125 7.69742ZM4.8125 12.6216C3.12898 12.1516 2.0625 11.3773 2.0625 10.6562V9.44711C2.76375 9.94383 3.70305 10.3443 4.8125 10.6133V12.6216ZM11.6875 10.6133C12.797 10.3443 13.7362 9.94383 14.4375 9.44711V10.6562C14.4375 11.3773 13.371 12.1516 11.6875 12.6216V10.6133ZM10.3125 16.7466C8.62898 16.2766 7.5625 15.5023 7.5625 14.7812V14.4229C7.78852 14.4315 8.01711 14.4375 8.25 14.4375C8.58344 14.4375 8.90914 14.4263 9.22883 14.4074C9.58397 14.5346 9.94572 14.6424 10.3125 14.7305V16.7466ZM10.3125 12.9121C9.62964 13.013 8.94027 13.0633 8.25 13.0625C7.55973 13.0633 6.87036 13.013 6.1875 12.9121V10.8677C6.87137 10.9568 7.56035 11.001 8.25 11C8.93965 11.001 9.62863 10.9568 10.3125 10.8677V12.9121ZM15.8125 17.0371C14.4448 17.2376 13.0552 17.2376 11.6875 17.0371V14.9875C12.3712 15.0794 13.0602 15.1253 13.75 15.125C14.4397 15.126 15.1286 15.0818 15.8125 14.9927V17.0371ZM19.9375 14.7812C19.9375 15.5023 18.871 16.2766 17.1875 16.7466V14.7383C18.297 14.4693 19.2362 14.0688 19.9375 13.5721V14.7812Z" fill="currentColor"/></svg>',
    logout: '<svg style="transform: scaleX(-1);" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    unlock: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-unlock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>',
    circle_question: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#B197FC" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
    brush: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" fill="currentColor"/></svg>'
};
function H() {
    const e = w.useRef(null);
    return w.useEffect(()=>{
        var o;
        const t = document.createElement("google-cast-launcher");
        t.setAttribute("id", "castbutton"),
        (o = e.current) == null || o.appendChild(t)
    }
    , []),
    i.jsx("div", {
        ref: e,
        className: "h-6"
    })
}
const k = w.memo(e=>{
    if (e.icon === a.CASTING)
        return i.jsx(H, {});
    const t = e.icon === a.ARROW_LEFT || e.icon === a.ARROW_RIGHT || e.icon === a.CHEVRON_LEFT || e.icon === a.CHEVRON_RIGHT ? "rtl:-scale-x-100" : "";
    return i.jsx("span", {
        dangerouslySetInnerHTML: {
            __html: V[e.icon]
        },
        className: d(e.className, t)
    })
}
);
let R = function(e) {
    return e.USER_GROUP = "userGroup",
    e.COUCH = "couch",
    e.MOBILE = "mobile",
    e.TICKET = "ticket",
    e.HANDCUFFS = "handcuffs",
    e
}({});
const z = {
    userGroup: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>',
    couch: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="currentColor" d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"/></svg>',
    mobile: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>',
    ticket: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>',
    handcuffs: '<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path opacity="1" fill="currentColor" d="M240 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 80c17.7 0 32 14.3 32 32h8c13.3 0 24 10.7 24 24v16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.8 39.7-122.4 96.5-146.9c-.4-1.6-.5-3.3-.5-5.1V184c0-13.3 10.7-24 24-24h8c0-17.7 14.3-32 32-32zm0 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm192-96c0-25.9-5.1-50.5-14.4-73.1c16.9-32.9 44.8-59.1 78.9-73.9c-.4-1.6-.5-3.3-.5-5.1V184c0-13.3 10.7-24 24-24h8c0-17.7 14.3-32 32-32s32 14.3 32 32h8c13.3 0 24 10.7 24 24v16c0 1.7-.2 3.4-.5 5.1C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 14.4-47.2 14.4-73.1zm224 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM368 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>'
}
  , E = w.memo(e=>{
    const t = z[e.icon];
    return t ? i.jsx("span", {
        dangerouslySetInnerHTML: {
            __html: t
        },
        className: e.className
    }) : i.jsx(k, {
        className: e.className,
        icon: a.X
    })
}
);
function N(e) {
    let t = e.country ?? null;
    if (e.langCode && (t = y(e.langCode)),
    e.langCode === "tok")
        return i.jsx("div", {
            className: "w-8 h-6 rounded bg-[#c8e1ed] flex justify-center items-center",
            children: i.jsx("img", {
                src: "/flags/tokiPona.svg",
                className: "w-7 h-5"
            })
        });
    if (e.langCode === "pirate")
        return i.jsx("div", {
            className: "w-8 h-6 rounded bg-[#2E3439] flex justify-center items-center",
            children: i.jsx("img", {
                src: "/flags/skull.svg",
                className: "w-4 h-4"
            })
        });
    if (e.langCode === "minion")
        return i.jsx("div", {
            className: "w-8 h-6 rounded bg-[#ffff1a] flex justify-center items-center",
            children: i.jsx("div", {
                className: "w-4 h-4 border-2 border-gray-500 rounded-full bg-white flex justify-center items-center",
                children: i.jsx("div", {
                    className: "w-1.5 h-1.5 rounded-full bg-gray-900 relative",
                    children: i.jsx("div", {
                        className: "absolute top-0 left-0 w-1 h-1 bg-white rounded-full transform -translate-x-1/3 -translate-y-1/3"
                    })
                })
            })
        });
    if (e.langCode === "gl-ES")
        return i.jsx("div", {
            className: "w-8 h-6 rounded bg-[#2E3439] flex justify-center items-center",
            children: i.jsx("img", {
                src: "/flags/galicia.svg",
                className: "rounded"
            })
        });
    let o = "bg-video-context-flagBg";
    return t === "np" && (o = "bg-white"),
    i.jsx("span", {
        className: d("!w-8 min-w-8 h-6 rounded overflow-hidden bg-cover bg-center block fi", o, t ? `fi-${t}` : void 0)
    })
}
export {N as F, k as I, E as U, a, F as b, R as c, b as g, _ as s};
//# sourceMappingURL=Icons-z4rFBofc.js.map
