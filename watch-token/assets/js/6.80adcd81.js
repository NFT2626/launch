(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        367: function(e, r, t) {
            var n = t(2),
                u = t(3),
                l = t(19),
                c = t(33).f,
                o = t(9),
                i = u((function() { c(1) }));
            n({ target: "Object", stat: !0, forced: !o || i, sham: !o }, { getOwnPropertyDescriptor: function(e, r) { return c(l(e), r) } })
        },
        368: function(e, r, t) {
            var n = t(2),
                u = t(9),
                l = t(119).f;
            n({ target: "Object", stat: !0, forced: Object.defineProperties !== l, sham: !u }, { defineProperties: l })
        },
        369: function(e, r, t) { t(117), e.exports = function(e, r, t) { return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e }, e.exports.__esModule = !0, e.exports.default = e.exports },
        372: function(e, r, t) {
            "use strict";
            var n = t(2),
                u = t(373);
            n({ target: "String", proto: !0, forced: t(374)("link") }, { link: function(e) { return u(this, "a", "href", e) } })
        },
        373: function(e, r, t) {
            var n = t(4),
                u = t(32),
                l = t(18),
                c = /"/g,
                o = n("".replace);
            e.exports = function(e, r, t, n) {
                var i = l(u(e)),
                    s = "<" + r;
                return "" !== t && (s += " " + t + '="' + o(l(n), c, "&quot;") + '"'), s + ">" + i + "</" + r + ">"
            }
        },
        374: function(e, r, t) {
            var n = t(3);
            e.exports = function(e) { return n((function() { var r = "" [e]('"'); return r !== r.toLowerCase() || r.split('"').length > 3 })) }
        },
        376: function(e, r, t) {
            t(118), t(64), t(63), t(12), t(367), t(120), t(121), t(198), t(368), t(117);
            var n = t(369);

            function u(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }
            e.exports = function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? u(Object(t), !0).forEach((function(r) { n(e, r, t[r]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        384: function(e, r, t) {
            "use strict";
            var n = t(2),
                u = t(43).find,
                l = t(126),
                c = !0;
            "find" in [] && Array(1).find((function() { c = !1 })), n({ target: "Array", proto: !0, forced: c }, { find: function(e) { return u(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), l("find")
        },
        385: function(e, r, t) {
            "use strict";
            var n = t(2),
                u = t(4),
                l = t(32),
                c = t(65),
                o = t(18),
                i = u("".slice),
                s = Math.max,
                m = Math.min;
            n({ target: "String", proto: !0, forced: !"".substr || "b" !== "ab".substr(-1) }, {
                substr: function(e, r) {
                    var t, n, u = o(l(this)),
                        a = u.length,
                        f = c(e);
                    return f === 1 / 0 && (f = 0), f < 0 && (f = s(a + f, 0)), (t = void 0 === r ? a : c(r)) <= 0 || t === 1 / 0 || f >= (n = m(f + t, a)) ? "" : i(u, f, n)
                }
            })
        },
        388: function(e, r, t) {
            var n = t(0),
                u = t(44),
                l = t(5),
                c = t(66),
                o = t(69),
                i = t(200),
                s = /MSIE .\./.test(c),
                m = n.Function,
                a = function(e) {
                    return s ? function(r, t) {
                        var n = i(arguments.length, 1) > 2,
                            c = l(r) ? r : m(r),
                            s = n ? o(arguments, 2) : void 0;
                        return e(n ? function() { u(c, this, s) } : c, t)
                    } : e
                };
            e.exports = { setTimeout: a(n.setTimeout), setInterval: a(n.setInterval) }
        },
        403: function(e, r, t) { t(404), t(405) },
        404: function(e, r, t) {
            var n = t(2),
                u = t(0),
                l = t(388).setInterval;
            n({ global: !0, bind: !0, forced: u.setInterval !== l }, { setInterval: l })
        },
        405: function(e, r, t) {
            var n = t(2),
                u = t(0),
                l = t(388).setTimeout;
            n({ global: !0, bind: !0, forced: u.setTimeout !== l }, { setTimeout: l })
        },
        460: function(e, r, t) {
            "use strict";
            t.d(r, "b", (function() { return G })), t.d(r, "a", (function() { return Z }));
            const n = {
                    name: "Austria",
                    codes: ["AT", "AUT", "040"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 7; t++) {
                            const u = Number(e.charAt(t)) * n.rules.multipliers.common[t];
                            r += u > 9 ? Math.floor(u / 10) + u % 10 : u
                        }
                        return r = 10 - (r + 4) % 10, 10 === r && (r = 0), r === Number(e.slice(7, 8))
                    },
                    rules: { multipliers: { common: [1, 2, 1, 2, 1, 2, 1] }, regex: [/^(AT)U(\d{8})$/] }
                },
                u = e => e % 11 < 2 ? 0 : 11 - e % 11,
                l = { name: "Brazil", codes: ["BR", "BRA", "076"], calcFn: e => { const r = e.split("").map(Number); if ((t = r).every(e => t[0] === e)) return !1; var t; const n = ((e, r) => r.reduce(([r, t], n, u) => [0 === u ? 0 : r + e[u - 1] * n, t + e[u] * n], [0, 0]))(r, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]); return r[12] === u(n[0]) && r[13] === u(n[1]) }, rules: { multipliers: {}, regex: [/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/] } },
                c = {
                    name: "Bulgaria",
                    codes: ["BG", "BGR", "100"],
                    calcFn: e => {
                        if (9 === e.length) return function(e) {
                            let r, t = o(0, e, 0, 8, 1);
                            const n = Number(e.slice(8));
                            if (r = t % 11, 10 !== r) return r === n;
                            t = o(0, e, 0, 8, 3), r = t % 11, 10 === r && (r = 0);
                            return r === n
                        }(e);
                        const { multipliers: r } = c.rules;
                        return function(e, r) { if (/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(e)) { const t = Number(e.slice(2, 4)); if (t > 0 && t < 13 || t > 20 && t < 33 || t > 40 && t < 53) { let t = i(0, e, 0, 9, r); if (t %= 11, 10 === t && (t = 0), t === Number(e.substr(9, 1))) return !0 } } return !1 }(e, r.physical) || function(e, r) { return i(0, e, 0, 9, r.foreigner) % 10 === Number(e.substr(9, 1)) }(e, r) || function(e, r) {
                            let t = i(0, e, 0, 9, r.miscellaneous);
                            if (t = 11 - t % 11, 10 === t) return !1;
                            11 === t && (t = 0);
                            const n = Number(e.substr(9, 1));
                            return t === n
                        }(e, r)
                    },
                    rules: { multipliers: { physical: [2, 4, 8, 5, 10, 9, 7, 3, 6], foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1], miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2] }, regex: [/^(BG)(\d{9,10})$/] }
                };

            function o(e, r, t, n, u) { let l = e; for (let e = t; e < n; e++) l += Number(r.charAt(e)) * (e + u); return l }

            function i(e, r, t, n, u) { let l = e; for (let e = t; e < n; e++) l += Number(r.charAt(e)) * u[e]; return l }
            const s = {
                name: "Czech Republic",
                codes: ["CZ", "CZE", "203"],
                calcFn: e => {
                    const { rules: r } = s, { multipliers: t, additional: n, lookup: u } = r;
                    return !!n && (function(e, r, t) {
                        let n = 0;
                        if (t[0].test(e)) {
                            for (let t = 0; t < 7; t++) n += Number(e.charAt(t)) * r[t];
                            n = 11 - n % 11, 10 === n && (n = 0), 11 === n && (n = 1);
                            const t = Number(e.slice(7, 8));
                            return n === t
                        }
                        return !1
                    }(e, t.common, n) || function(e, r, t, n) {
                        let u = 0;
                        if (t[2].test(e)) {
                            for (let t = 0; t < 7; t++) u += Number(e.charAt(t + 1)) * r[t];
                            let t;
                            t = u % 11 == 0 ? u + 11 : 11 * Math.ceil(u / 11);
                            const l = t - u - 1,
                                c = Number(e.slice(8, 9));
                            return !!n && n[l] === c
                        }
                        return !1
                    }(e, t.common, n, u) || function(e, r) {
                        if (r[3].test(e)) {
                            const r = Number(e.slice(0, 2)) + Number(e.slice(2, 4)) + Number(e.slice(4, 6)) + Number(e.slice(6, 8)) + Number(e.slice(8)),
                                t = Number(e) % 11 == 0;
                            return !(r % 11 != 0 || !t)
                        }
                        return !1
                    }(e, n) || function(e, r) { if (r[1].test(e)) return Number(e.slice(0, 2)) <= 62; return !1 }(e, n))
                },
                rules: { multipliers: { common: [8, 7, 6, 5, 4, 3, 2] }, lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8], regex: [/^(CZ)(\d{8,10})(\d{3})?$/], additional: [/^\d{8}$/, /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/, /^6\d{8}$/, /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/] }
            };
            const m = { name: "Denmark", codes: ["DK", "DNK", "208"], calcFn: e => { let r = 0; for (let t = 0; t < 8; t++) r += Number(e.charAt(t)) * m.rules.multipliers.common[t]; return r % 11 == 0 }, rules: { multipliers: { common: [2, 7, 6, 5, 4, 3, 2, 1] }, regex: [/^(DK)(\d{8})$/] } },
                a = { name: "Estonia", codes: ["EE", "EST", "233"], calcFn: e => { let r, t = 0; for (let r = 0; r < 8; r++) t += Number(e.charAt(r)) * a.rules.multipliers.common[r]; return t = 10 - t % 10, 10 === t && (t = 0), r = Number(e.slice(8, 9)), t === r }, rules: { multipliers: { common: [3, 7, 1, 3, 7, 1, 3, 7] }, regex: [/^(EE)(10\d{7})$/] } },
                f = {
                    name: "Finland",
                    codes: ["FI", "FIN", "246"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 7; t++) r += Number(e.charAt(t)) * f.rules.multipliers.common[t];
                        r = 11 - r % 11, r > 9 && (r = 0);
                        return r === Number(e.slice(7, 8))
                    },
                    rules: { multipliers: { common: [7, 9, 10, 5, 8, 4, 2] }, regex: [/^(FI)(\d{8})$/] }
                },
                d = {
                    name: "Greece",
                    codes: ["GR", "GRC", "300"],
                    calcFn: e => {
                        let r = 0;
                        const t = 8 === e.length ? "0" + e : e;
                        for (let e = 0; e < 8; e++) r += Number(t.charAt(e)) * d.rules.multipliers.common[e];
                        r %= 11, r = r > 9 ? 0 : r;
                        return r === Number(t.slice(8, 9))
                    },
                    rules: { multipliers: { common: [256, 128, 64, 32, 16, 8, 4, 2] }, regex: [/^(EL)(\d{9})$/] }
                },
                b = {
                    name: "Hungary",
                    codes: ["HU", "HUN", "348"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 7; t++) r += Number(e.charAt(t)) * b.rules.multipliers.common[t];
                        r = 10 - r % 10, 10 === r && (r = 0);
                        return r === Number(e.slice(7, 8))
                    },
                    rules: { multipliers: { common: [9, 7, 3, 1, 9, 7, 3] }, regex: [/^(HU)(\d{8})$/] }
                },
                p = {
                    name: "Ireland",
                    codes: ["IE", "IRL", "372"],
                    calcFn: e => {
                        const { typeFormats: r, multipliers: t } = p.rules;
                        if (!r || !r.first) return !1;
                        let n = 0,
                            u = e;
                        r.first.test(e) && (u = "0" + e.substring(2, 7) + e.substring(0, 1) + e.substring(7, 8));
                        for (let e = 0; e < 7; e++) n += Number(u.charAt(e)) * t.common[e];
                        r.third.test(u) && (n += "H" === u.charAt(8) ? 72 : 9), n %= 23, n = 0 === n ? "W" : String.fromCharCode(n + 64);
                        return n === u.slice(7, 8)
                    },
                    rules: { multipliers: { common: [8, 7, 6, 5, 4, 3, 2] }, typeFormats: { first: /^\d[A-Z*+]/, third: /^\d{7}[A-Z][AH]$/ }, regex: [/^(IE)(\d{7}[A-W])$/, /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/, /^(IE)(\d{7}[A-W][AH])$/] }
                },
                N = {
                    name: "Italy",
                    codes: ["IT", "ITA", "380"],
                    calcFn: e => {
                        let r, t = 0;
                        if (0 === Number(e.slice(0, 7))) return !1;
                        if (r = Number(e.slice(7, 10)), r < 1 || r > 201 && 999 !== r && 888 !== r) return !1;
                        for (let n = 0; n < 10; n++) r = Number(e.charAt(n)) * N.rules.multipliers.common[n], t += r > 9 ? Math.floor(r / 10) + r % 10 : r;
                        t = 10 - t % 10, t > 9 && (t = 0);
                        return t === Number(e.slice(10, 11))
                    },
                    rules: { multipliers: { common: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2] }, regex: [/^(IT)(\d{11})$/] }
                },
                g = {
                    name: "Latvia",
                    codes: ["LV", "LVA", "428"],
                    calcFn: e => {
                        let r = 0;
                        if (/^[0-3]/.test(e)) return Boolean(/^[0-3][0-9][0-1][0-9]/.test(e));
                        for (let t = 0; t < 10; t++) r += Number(e.charAt(t)) * g.rules.multipliers.common[t];
                        r % 11 == 4 && 9 === Number(e[0]) && (r -= 45), r % 11 == 4 ? r = 4 - r % 11 : r % 11 > 4 ? r = 14 - r % 11 : r % 11 < 4 && (r = 3 - r % 11);
                        return r === Number(e.slice(10, 11))
                    },
                    rules: { multipliers: { common: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6] }, regex: [/^(LV)(\d{11})$/] }
                },
                h = {
                    name: "Lithuania",
                    codes: ["LT", "LTU", "440"],
                    calcFn: e => function(e, r) {
                        let t = 0;
                        if (9 === e.length) {
                            if (!/^\d{7}1/.test(e)) return !1;
                            t = function(e, r) { let t = r; for (let r = 0; r < 8; r++) t += Number(e.charAt(r)) * (r + 1); return t }(e, t), t = function(e, r, t) { let n = r; if (n % 11 == 10) { n = 0; for (let r = 0; r < 8; r++) n += A(e, t.multipliers.short, r) } return n }(e, t, r), t = $(t);
                            const n = Number(e.slice(8, 9));
                            return t === n
                        }
                        return !1
                    }(e, h.rules) || function(e, r) {
                        let t = 0;
                        if (12 === e.length) {
                            if (!r.check) return !1;
                            if (!r.check.test(e)) return !1;
                            t = function(e, r, t) { let n = r; for (let r = 0; r < 11; r++) n += A(e, t.multipliers.med, r); return n }(e, t, r), t = function(e, r, t) { let n = r; if (r % 11 == 10) { n = 0; for (let r = 0; r < 11; r++) n += A(e, t.multipliers.alt, r) } return n }(e, t, r), t = $(t);
                            const n = Number(e.slice(11, 12));
                            return t === n
                        }
                        return !1
                    }(e, h.rules),
                    rules: { multipliers: { short: [3, 4, 5, 6, 7, 8, 9, 1], med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2], alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4] }, check: /^\d{10}1/, regex: [/^(LT)(\d{9}|\d{12})$/] }
                };

            function A(e, r, t) { return Number(e.charAt(t)) * r[t] }

            function $(e) { let r = e % 11; return 10 === r && (r = 0), r }
            const F = {
                    name: "Malta",
                    codes: ["MT", "MLT", "470"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 6; t++) r += Number(e.charAt(t)) * F.rules.multipliers.common[t];
                        r = 37 - r % 37;
                        return r === Number(e.slice(6, 8))
                    },
                    rules: { multipliers: { common: [3, 4, 6, 7, 8, 9] }, regex: [/^(MT)([1-9]\d{7})$/] }
                },
                x = {
                    name: "Netherlands",
                    codes: ["NL", "NLD", "528"],
                    calcFn: e => {
                        const r = e.replace(/[\ \-\_]/g, "").toUpperCase(),
                            { additional: t, multipliers: n } = x.rules;
                        if (!t) return !1;
                        const u = r.match(t[0]);
                        if (!u || !u[1]) return !1;
                        const l = u[1],
                            c = ("NL" + r).split("").map(E);
                        let o = 0;
                        for (let e = 0; e < 8; e++) o += Number(l.charAt(e)) * n.common[e];
                        o %= 11, o > 9 && (o = 0);
                        return o === Number(l.slice(8, 9)) || 1 === function(e, r) { let t = 0; for (const n of e.split("")) t = (10 * t + +n) % r; return t }(c.join(""), 97)
                    },
                    rules: { multipliers: { common: [9, 8, 7, 6, 5, 4, 3, 2] }, regex: [/^(NL)(\d{9}B\d{2})$/], additional: [/^(\d{9})B\d{2}$/] }
                };

            function E(e) { if ("+" === e) return 36; if ("*" === e) return 37; const r = e.charCodeAt(0) - 55; return r > 9 && r < 91 ? r : parseInt(e, 10) }
            const S = { name: "Norway", codes: ["NO", "NOR", "578"], calcFn: e => { let r = 0; for (let t = 0; t < 8; t++) r += Number(e.charAt(t)) * S.rules.multipliers.common[t]; if (r = 11 - r % 11, 11 === r && (r = 0), r < 10) { return r === Number(e.slice(8, 9)) } return !1 }, rules: { multipliers: { common: [3, 2, 7, 6, 5, 4, 3, 2] }, regex: [/^(NO)(\d{9})(MVA)?$/] } },
                v = {
                    name: "Poland",
                    codes: ["PL", "POL", "616"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 9; t++) r += Number(e.charAt(t)) * v.rules.multipliers.common[t];
                        r %= 11, r > 9 && (r = 0);
                        return r === Number(e.slice(9, 10))
                    },
                    rules: { multipliers: { common: [6, 5, 7, 2, 3, 4, 5, 6, 7] }, regex: [/^(PL)(\d{10})$/] }
                },
                R = {
                    name: "Portugal",
                    codes: ["PT", "PRT", "620"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 8; t++) r += Number(e.charAt(t)) * R.rules.multipliers.common[t];
                        r = 11 - r % 11, r > 9 && (r = 0);
                        return r === Number(e.slice(8, 9))
                    },
                    rules: { multipliers: { common: [9, 8, 7, 6, 5, 4, 3, 2] }, regex: [/^(PT)(\d{9})$/] }
                },
                L = {
                    name: "Romania",
                    codes: ["RO", "ROU", "642"],
                    calcFn: e => {
                        let r = 0;
                        const t = e.length,
                            n = L.rules.multipliers.common.slice(10 - t);
                        for (let t = 0; t < e.length - 1; t++) r += Number(e.charAt(t)) * n[t];
                        r = 10 * r % 11, 10 === r && (r = 0);
                        return r === Number(e.slice(e.length - 1, e.length))
                    },
                    rules: { multipliers: { common: [7, 5, 3, 2, 1, 7, 5, 3, 2] }, regex: [/^(RO)([1-9]\d{1,9})$/] }
                },
                O = {
                    name: "Russian Federation",
                    codes: ["RU", "RUS", "643"],
                    calcFn: e => function(e, r) {
                        let t = 0;
                        if (10 === e.length) {
                            for (let n = 0; n < 10; n++) t += Number(e.charAt(n)) * r.multipliers.m_1[n];
                            t %= 11, t > 9 && (t %= 10);
                            const n = Number(e.slice(9, 10));
                            return t === n
                        }
                        return !1
                    }(e, O.rules) || function(e, r) {
                        let t = 0,
                            n = 0;
                        if (12 === e.length) {
                            for (let n = 0; n < 11; n++) t += Number(e.charAt(n)) * r.multipliers.m_2[n];
                            t %= 11, t > 9 && (t %= 10);
                            for (let t = 0; t < 11; t++) n += Number(e.charAt(t)) * r.multipliers.m_3[t];
                            n %= 11, n > 9 && (n %= 10);
                            const u = t === Number(e.slice(10, 11)),
                                l = n === Number(e.slice(11, 12));
                            return u && l
                        }
                        return !1
                    }(e, O.rules),
                    rules: { multipliers: { m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0], m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0] }, regex: [/^(RU)(\d{10}|\d{12})$/] }
                };
            const C = {
                    name: "Slovenia",
                    codes: ["SI", "SVN", "705"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 7; t++) r += Number(e.charAt(t)) * C.rules.multipliers.common[t];
                        r = 11 - r % 11, 10 === r && (r = 0);
                        const t = Number(e.slice(7, 8));
                        return !(11 === r || r !== t)
                    },
                    rules: { multipliers: { common: [8, 7, 6, 5, 4, 3, 2] }, regex: [/^(SI)([1-9]\d{7})$/] }
                },
                P = {
                    name: "Spain",
                    codes: ["ES", "ESP", "724"],
                    calcFn: e => {
                        const { additional: r, multipliers: t } = P.rules;
                        return !!r && (r[0].test(e) ? function(e, r) {
                            let t = B(e, r, 0);
                            t = 10 - t % 10, 10 === t && (t = 0);
                            const n = Number(e.slice(8, 9));
                            return t === n
                        }(e, t.common) : r[1].test(e) ? function(e, r) {
                            let t = B(e, r, 0);
                            t = 10 - t % 10;
                            const n = String.fromCharCode(t + 64),
                                u = e.slice(8, 9);
                            return n === u
                        }(e, t.common) : r[2].test(e) ? function(e) { let r = e; "Y" === r.substring(0, 1) && (r = r.replace(/Y/, "1")); "Z" === r.substring(0, 1) && (r = r.replace(/Z/, "2")); const t = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(+r.substring(0, 8) % 23); return r.charAt(8) === t }(e) : !!r[3].test(e) && function(e) { const r = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(e.substring(1, 8)) % 23); return e.charAt(8) === r }(e))
                    },
                    rules: { multipliers: { common: [2, 1, 2, 1, 2, 1, 2] }, regex: [/^(ES)([A-Z]\d{8})$/, /^(ES)([A-HN-SW]\d{7}[A-J])$/, /^(ES)([0-9YZ]\d{7}[A-Z])$/, /^(ES)([KLMX]\d{7}[A-Z])$/], additional: [/^[A-H|J|U|V]\d{8}$/, /^[A-H|N-S|W]\d{7}[A-J]$/, /^[0-9|Y|Z]\d{7}[A-Z]$/, /^[K|L|M|X]\d{7}[A-Z]$/] }
                };

            function B(e, r, t) { let n, u = t; for (let t = 0; t < 7; t++) n = Number(e.charAt(t + 1)) * r[t], u += n > 9 ? Math.floor(n / 10) + n % 10 : n; return u }
            const y = {
                    name: "Switzerland",
                    codes: ["CH", "CHE", "756"],
                    calcFn: e => {
                        let r = 0;
                        for (let t = 0; t < 8; t++) r += Number(e.charAt(t)) * y.rules.multipliers.common[t];
                        if (r = 11 - r % 11, 10 === r) return !1;
                        11 === r && (r = 0);
                        return r === Number(e.substr(8, 1))
                    },
                    rules: { multipliers: { common: [5, 4, 3, 2, 7, 6, 5, 4] }, regex: [/^(CHE)(\d{9})(MWST|TVA|IVA)?$/] }
                },
                T = {
                    name: "United Kingdom",
                    codes: ["GB", "GBR", "826"],
                    calcFn: e => "GD" === e.substr(0, 2) ? function(e) { return Number(e.substr(2, 3)) < 500 }(e) : "HA" === e.substr(0, 2) ? function(e) { return Number(e.substr(2, 3)) > 499 }(e) : function(e, r) {
                        let t = 0;
                        if (0 === Number(e.slice(0))) return !1;
                        const n = Number(e.slice(0, 7));
                        for (let n = 0; n < 7; n++) t += Number(e.charAt(n)) * r[n];
                        let u = t;
                        for (; u > 0;) u -= 97;
                        if (u = Math.abs(u), u === Number(e.slice(7, 9)) && n < 9990001 && (n < 1e5 || n > 999999) && (n < 9490001 || n > 97e5)) return !0;
                        u >= 55 ? u -= 55 : u += 42;
                        const l = Number(e.slice(7, 9));
                        return Boolean(u === l && n > 1e6)
                    }(e, T.rules.multipliers.common),
                    rules: { multipliers: { common: [8, 7, 6, 5, 4, 3, 2] }, regex: [/^(GB)?(\d{9})$/, /^(GB)?(\d{12})$/, /^(GB)?(GD\d{3})$/, /^(GB)?(HA\d{3})$/] }
                };

            function H(e, r, t) { return { value: e || void 0, isValid: Boolean(r), isValidFormat: !!t && M(e, t.rules.regex).isValid, isSupportedCountry: Boolean(t), country: t ? { name: t.name, isoCode: { short: t.codes[0], long: t.codes[1], numeric: t.codes[2] } } : void 0 } }
            const I = [l.name];

            function U(e) { return !!e.match(/^\d{2}/) }

            function D(e, r) { return function(e) { return [...e.codes, "Greece" === e.name ? "EL" : void 0].filter(Boolean) }(r).filter(r => e.startsWith(r)).length > 0 }

            function M(e, r) { for (const t of r) { if (t.test(e)) return { isValid: !0, regex: t } } return { isValid: !1, regex: void 0 } }

            function Z(e, r = []) {
                if (!e) return H(e, !1);
                const t = function(e = "") { return e.toString().toUpperCase().replace(/(\s|-|\.|\/)+/g, "") }(e),
                    n = function(e, r) {
                        for (const n of r)
                            if (D(e, n) || (t = n.name, I.includes(t) && U(e))) return {...n };
                        var t
                    }(t, r);
                return H(t, !!n && function(e, r) { const t = M(e, r.rules.regex); if (!t.isValid || !t.regex) return !1; const n = t.regex.exec(e); return !!n && r.calcFn(n[2]) }(t, n), n)
            }
            const G = [{ name: "Andorra", codes: ["AD", "AND", "020"], calcFn: e => 8 === e.length, rules: { multipliers: {}, regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/] } }, n, { name: "Belgium", codes: ["BE", "BEL", "056"], calcFn: e => { const r = 9 === e.length ? "0" + e : e; if (0 === Number(r.slice(1, 2))) return !1; return 97 - Number(r.slice(0, 8)) % 97 === Number(r.slice(8, 10)) }, rules: { multipliers: {}, regex: [/^(BE)(0?\d{9})$/] } }, l, c, {
                name: "Croatia",
                codes: ["HR", "HRV", "191"],
                calcFn: e => {
                    let r = 10,
                        t = 0;
                    for (let n = 0; n < 10; n++) t = (Number(e.charAt(n)) + r) % 10, 0 === t && (t = 10), r = 2 * t % 11;
                    return (r + Number(e.slice(10, 11))) % 10 == 1
                },
                rules: { multipliers: {}, regex: [/^(HR)(\d{11})$/] }
            }, {
                name: "Cyprus",
                codes: ["CY", "CYP", "196"],
                calcFn: e => {
                    if (12 === Number(e.slice(0, 2))) return !1;
                    let r = function(e, r) {
                        let t = r;
                        for (let r = 0; r < 8; r++) {
                            let n = Number(e.charAt(r));
                            if (r % 2 == 0) switch (n) {
                                case 0:
                                    n = 1;
                                    break;
                                case 1:
                                    n = 0;
                                    break;
                                case 2:
                                    n = 5;
                                    break;
                                case 3:
                                    n = 7;
                                    break;
                                case 4:
                                    n = 9;
                                    break;
                                default:
                                    n = 2 * n + 3
                            }
                            t += n
                        }
                        return t
                    }(e, 0);
                    r %= 26, r = String.fromCharCode(r + 65);
                    return r === e.substr(8, 1)
                },
                rules: { multipliers: {}, regex: [/^(CY)([0-59]\d{7}[A-Z])$/] }
            }, s, m, a, { name: "Europe", codes: ["EU", "EUR", "000"], calcFn: () => !0, rules: { multipliers: {}, regex: [/^(EU)(\d{9})$/] } }, f, {
                name: "France",
                codes: ["FR", "FRA", "250"],
                calcFn: e => {
                    let r;
                    if (!/^\d{11}$/.test(e)) return !0;
                    r = Number(e.substring(2)), r = (100 * r + 12) % 97;
                    return r === Number(e.slice(0, 2))
                },
                rules: { multipliers: {}, regex: [/^(FR)(\d{11})$/, /^(FR)([A-HJ-NP-Z]\d{10})$/, /^(FR)(\d[A-HJ-NP-Z]\d{9})$/, /^(FR)([A-HJ-NP-Z]{2}\d{9})$/] }
            }, {
                name: "Germany",
                codes: ["DE", "DEU", "276"],
                calcFn: e => {
                    let r, t = 10,
                        n = 0,
                        u = 0;
                    for (let r = 0; r < 8; r++) n = (Number(e.charAt(r)) + t) % 10, 0 === n && (n = 10), t = 2 * n % 11;
                    return u = 11 - t == 10 ? 0 : 11 - t, r = Number(e.slice(8, 9)), u === r
                },
                rules: { multipliers: {}, regex: [/^(DE)([1-9]\d{8})$/] }
            }, d, b, p, N, g, h, { name: "Luxembourg", codes: ["LU", "LUX", "442"], calcFn: e => { const r = Number(e.slice(6, 8)); return Number(e.slice(0, 6)) % 89 === r }, rules: { multipliers: {}, regex: [/^(LU)(\d{8})$/] } }, F, x, S, v, R, L, O, {
                name: "Serbia",
                codes: ["RS", "SRB", "688"],
                calcFn: e => {
                    let r = 10,
                        t = 0;
                    for (let n = 0; n < 8; n++) t = (Number(e.charAt(n)) + r) % 10, 0 === t && (t = 10), r = 2 * t % 11;
                    return 1 === (r + Number(e.slice(8, 9))) % 10
                },
                rules: { multipliers: {}, regex: [/^(RS)(\d{9})$/] }
            }, { name: "Slovakia Republic", codes: ["SK", "SVK", "703"], calcFn: e => 0 === Number(e) % 11, rules: { multipliers: {}, regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/] } }, C, P, {
                name: "Sweden",
                codes: ["SE", "SWE", "752"],
                calcFn: e => {
                    let r, t = 0;
                    for (let r = 0; r < 9; r += 2) {
                        const n = Number(e.charAt(r));
                        t += Math.floor(n / 5) + 2 * n % 10
                    }
                    let n = 0;
                    for (let r = 1; r < 9; r += 2) n += Number(e.charAt(r));
                    const u = (10 - (t + n) % 10) % 10;
                    return r = Number(e.slice(9, 10)), u === r
                },
                rules: { multipliers: {}, regex: [/^(SE)(\d{10}01)$/] }
            }, y, T]
        }
    }
]);