(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        367: function(e, t, n) {
            var r = n(2),
                a = n(3),
                i = n(19),
                s = n(33).f,
                o = n(9),
                c = a((function() { s(1) }));
            r({ target: "Object", stat: !0, forced: !o || c, sham: !o }, { getOwnPropertyDescriptor: function(e, t) { return s(i(e), t) } })
        },
        368: function(e, t, n) {
            var r = n(2),
                a = n(9),
                i = n(119).f;
            r({ target: "Object", stat: !0, forced: Object.defineProperties !== i, sham: !a }, { defineProperties: i })
        },
        369: function(e, t, n) { n(117), e.exports = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }, e.exports.__esModule = !0, e.exports.default = e.exports },
        370: function(e, t, n) {
            "use strict";
            t.a = { data: function() { return { tokenDetails: { ethereum: [{ name: "HelloERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 884955 }, { name: "SimpleERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: .05, price: .03, gas: 887192 }, { name: "StandardERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .15, price: .07, gas: 877509 }, { name: "BurnableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .2, price: .095, gas: 1017744 }, { name: "MintableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .25, price: .1, gas: 1283249 }, { name: "PausableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Pausable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .3, price: .3, gas: 1356111 }, { name: "CommonERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .35, price: .18, gas: 1416325 }, { name: "UnlimitedERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .45, price: .28, gas: 1923213 }, { name: "AmazingERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: .85, price: .42, gas: 1886138 }, { name: "PowerfulERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: .95, price: .5, gas: 2468313 }], polygon: [{ name: "HelloERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 884955 }, { name: "SimpleERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 50, price: 15, gas: 887192 }, { name: "StandardERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 100, price: 35, gas: 877509 }, { name: "BurnableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 150, price: 50, gas: 1017744 }, { name: "MintableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 200, price: 100, gas: 1283249 }, { name: "PausableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Pausable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 300, price: 300, gas: 1356111 }, { name: "CommonERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 275, price: 170, gas: 1416325 }, { name: "UnlimitedERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 400, price: 200, gas: 1923213 }, { name: "AmazingERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 650, price: 250, gas: 1886138 }, { name: "PowerfulERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 800, price: 300, gas: 2468313 }], bsc: [{ name: "HelloBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 1087811 }, { name: "SimpleBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: .3, price: .25, gas: 1090033 }, { name: "StandardBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .5, price: .5, gas: 1073230 }, { name: "BurnableBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 1, price: .85, gas: 1207529 }, { name: "MintableBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 1.5, price: 1.25, gas: 1298638 }, { name: "CommonBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 2, price: 1.85, gas: 1431775 }, { name: "UnlimitedBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 2.5, price: 2.15, gas: 1942584 }, { name: "AmazingBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 3, price: 3, gas: 1905092 }, { name: "PowerfulBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 4, price: 3.85, gas: 2484063 }] } } } }
        },
        376: function(e, t, n) {
            n(118), n(64), n(63), n(12), n(367), n(120), n(121), n(198), n(368), n(117);
            var r = n(369);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
                }
                return n
            }
            e.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) { r(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        377: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = 6e4,
                    t = 36e5,
                    n = "millisecond",
                    r = "second",
                    a = "minute",
                    i = "hour",
                    s = "day",
                    o = "week",
                    c = "month",
                    l = "quarter",
                    u = "year",
                    p = "date",
                    d = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
                    v = function(e, t, n) { var r = String(e); return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e },
                    f = {
                        s: v,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                a = n % 60;
                            return (t <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(a, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                a = t.clone().add(r, c),
                                i = n - a < 0,
                                s = t.clone().add(r + (i ? -1 : 1), c);
                            return +(-(r + (n - a) / (i ? a - s : s - a)) || 0)
                        },
                        a: function(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) },
                        p: function(e) { return { M: c, y: u, w: o, d: s, D: p, h: i, m: a, s: r, ms: n, Q: l }[e] || String(e || "").toLowerCase().replace(/s$/, "") },
                        u: function(e) { return void 0 === e }
                    },
                    h = "en",
                    g = {};
                g[h] = b;
                var k = function(e) { return e instanceof w },
                    _ = function e(t, n, r) {
                        var a;
                        if (!t) return h;
                        if ("string" == typeof t) {
                            var i = t.toLowerCase();
                            g[i] && (a = i), n && (g[i] = n, a = i);
                            var s = t.split("-");
                            if (!a && s.length > 1) return e(s[0])
                        } else {
                            var o = t.name;
                            g[o] = t, a = o
                        }
                        return !r && a && (h = a), a || !r && h
                    },
                    T = function(e, t) { if (k(e)) return e.clone(); var n = "object" == typeof t ? t : {}; return n.date = e, n.args = arguments, new w(n) },
                    C = f;
                C.l = _, C.i = k, C.w = function(e, t) { return T(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset }) };
                var w = function() {
                        function b(e) { this.$L = _(e.locale, null, !0), this.parse(e) }
                        var v = b.prototype;
                        return v.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (C.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(m);
                                    if (r) {
                                        var a = r[2] - 1 || 0,
                                            i = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, v.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, v.$utils = function() { return C }, v.isValid = function() { return !(this.$d.toString() === d) }, v.isSame = function(e, t) { var n = T(e); return this.startOf(t) <= n && n <= this.endOf(t) }, v.isAfter = function(e, t) { return T(e) < this.startOf(t) }, v.isBefore = function(e, t) { return this.endOf(t) < T(e) }, v.$g = function(e, t, n) { return C.u(e) ? this[t] : this.set(n, e) }, v.unix = function() { return Math.floor(this.valueOf() / 1e3) }, v.valueOf = function() { return this.$d.getTime() }, v.startOf = function(e, t) {
                            var n = this,
                                l = !!C.u(t) || t,
                                d = C.p(e),
                                m = function(e, t) { var r = C.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n); return l ? r : r.endOf(s) },
                                y = function(e, t) { return C.w(n.toDate()[e].apply(n.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n) },
                                b = this.$W,
                                v = this.$M,
                                f = this.$D,
                                h = "set" + (this.$u ? "UTC" : "");
                            switch (d) {
                                case u:
                                    return l ? m(1, 0) : m(31, 11);
                                case c:
                                    return l ? m(1, v) : m(0, v + 1);
                                case o:
                                    var g = this.$locale().weekStart || 0,
                                        k = (b < g ? b + 7 : b) - g;
                                    return m(l ? f - k : f + (6 - k), v);
                                case s:
                                case p:
                                    return y(h + "Hours", 0);
                                case i:
                                    return y(h + "Minutes", 1);
                                case a:
                                    return y(h + "Seconds", 2);
                                case r:
                                    return y(h + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, v.endOf = function(e) { return this.startOf(e, !1) }, v.$set = function(e, t) {
                            var o, l = C.p(e),
                                d = "set" + (this.$u ? "UTC" : ""),
                                m = (o = {}, o[s] = d + "Date", o[p] = d + "Date", o[c] = d + "Month", o[u] = d + "FullYear", o[i] = d + "Hours", o[a] = d + "Minutes", o[r] = d + "Seconds", o[n] = d + "Milliseconds", o)[l],
                                y = l === s ? this.$D + (t - this.$W) : t;
                            if (l === c || l === u) {
                                var b = this.clone().set(p, 1);
                                b.$d[m](y), b.init(), this.$d = b.set(p, Math.min(this.$D, b.daysInMonth())).$d
                            } else m && this.$d[m](y);
                            return this.init(), this
                        }, v.set = function(e, t) { return this.clone().$set(e, t) }, v.get = function(e) { return this[C.p(e)]() }, v.add = function(n, l) {
                            var p, d = this;
                            n = Number(n);
                            var m = C.p(l),
                                y = function(e) { var t = T(d); return C.w(t.date(t.date() + Math.round(e * n)), d) };
                            if (m === c) return this.set(c, this.$M + n);
                            if (m === u) return this.set(u, this.$y + n);
                            if (m === s) return y(1);
                            if (m === o) return y(7);
                            var b = (p = {}, p[a] = e, p[i] = t, p[r] = 1e3, p)[m] || 1,
                                v = this.$d.getTime() + n * b;
                            return C.w(v, this)
                        }, v.subtract = function(e, t) { return this.add(-1 * e, t) }, v.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || d;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                a = C.z(this),
                                i = this.$H,
                                s = this.$m,
                                o = this.$M,
                                c = n.weekdays,
                                l = n.months,
                                u = function(e, n, a, i) { return e && (e[n] || e(t, r)) || a[n].slice(0, i) },
                                p = function(e) { return C.s(i % 12 || 12, e, "0") },
                                m = n.meridiem || function(e, t, n) { var r = e < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r },
                                b = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o + 1, MM: C.s(o + 1, 2, "0"), MMM: u(n.monthsShort, o, l, 3), MMMM: u(l, o), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: u(n.weekdaysMin, this.$W, c, 2), ddd: u(n.weekdaysShort, this.$W, c, 3), dddd: c[this.$W], H: String(i), HH: C.s(i, 2, "0"), h: p(1), hh: p(2), a: m(i, s, !0), A: m(i, s, !1), m: String(s), mm: C.s(s, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: a };
                            return r.replace(y, (function(e, t) { return t || b[e] || a.replace(":", "") }))
                        }, v.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, v.diff = function(n, p, d) {
                            var m, y = C.p(p),
                                b = T(n),
                                v = (b.utcOffset() - this.utcOffset()) * e,
                                f = this - b,
                                h = C.m(this, b);
                            return h = (m = {}, m[u] = h / 12, m[c] = h, m[l] = h / 3, m[o] = (f - v) / 6048e5, m[s] = (f - v) / 864e5, m[i] = f / t, m[a] = f / e, m[r] = f / 1e3, m)[y] || f, d ? h : C.a(h)
                        }, v.daysInMonth = function() { return this.endOf(c).$D }, v.$locale = function() { return g[this.$L] }, v.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = _(e, t, !0);
                            return r && (n.$L = r), n
                        }, v.clone = function() { return C.w(this.$d, this) }, v.toDate = function() { return new Date(this.valueOf()) }, v.toJSON = function() { return this.isValid() ? this.toISOString() : null }, v.toISOString = function() { return this.$d.toISOString() }, v.toString = function() { return this.$d.toUTCString() }, b
                    }(),
                    R = w.prototype;
                return T.prototype = R, [
                    ["$ms", n],
                    ["$s", r],
                    ["$m", a],
                    ["$H", i],
                    ["$W", s],
                    ["$M", c],
                    ["$y", u],
                    ["$D", p]
                ].forEach((function(e) { R[e[1]] = function(t) { return this.$g(t, e[0], e[1]) } })), T.extend = function(e, t) { return e.$i || (e(t, w, T), e.$i = !0), T }, T.locale = _, T.isDayjs = k, T.unix = function(e) { return T(1e3 * e) }, T.en = g[h], T.Ls = g, T.p = {}, T
            }()
        },
        384: function(e, t, n) {
            "use strict";
            var r = n(2),
                a = n(43).find,
                i = n(126),
                s = !0;
            "find" in [] && Array(1).find((function() { s = !1 })), r({ target: "Array", proto: !0, forced: s }, { find: function(e) { return a(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), i("find")
        },
        470: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(62),
                a = (n(384), n(12), n(123), n(116), n(375)),
                i = n(370),
                s = {
                    name: "Docs",
                    mixins: [a.a, i.a],
                    data: function() { return { loaded: !1, blockchain: "ethereum", currentNetwork: null, tokenType: "", token: {} } },
                    computed: { controlFlow: function() { return "/token-generator/analysis/control-flow/".concat(this.contracts.token.contractName, ".png") }, inheritanceTree: function() { return "/token-generator/analysis/inheritance-tree/".concat(this.contracts.token.contractName, ".png") }, uml: function() { return "/token-generator/analysis/uml/".concat(this.contracts.token.contractName, ".svg") } },
                    mounted: function() { this.initDapp() },
                    methods: {
                        initDapp: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.tokenType = e.getParam("tokenType") || ("bsc" === e.blockchain ? "SimpleBEP20" : "SimpleERC20"), t.next = 4, e.loadToken();
                                        case 4:
                                            t.next = 10;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(0), console.log(t.t0), e.makeToast("Some error occurred", t.t0.message, "danger");
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 6]
                                ])
                            })))()
                        },
                        changeBlockchain: function() { this.tokenType = this.getParam("tokenType") || ("bsc" === this.blockchain ? "SimpleBEP20" : "SimpleERC20") },
                        loadToken: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.initToken(e.tokenType), e.token = e.tokenDetails[e.blockchain].find((function(t) { return t.name === e.tokenType })), e.loaded = !0;
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                o = n(61),
                c = Object(o.a)(s, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("b-row", { staticClass: "mx-0" }, [e.loaded ? [n("b-col", { attrs: { xl: "7", "offset-xl": "1" } }, [n("b-card", { staticClass: "mt-3", attrs: { header: "Blockchain", "header-bg-variant": "dark", "header-text-variant": "white" } }, [n("b-form-group", { attrs: { label: "Blockchain", "label-for": "blockchain" } }, [n("b-form-select", { attrs: { id: "blockchain", size: "lg" }, on: { change: e.changeBlockchain }, model: { value: e.blockchain, callback: function(t) { e.blockchain = t }, expression: "blockchain" } }, e._l(e.blockchains, (function(t, r) { return n("option", { domProps: { value: r } }, [e._v("\n                " + e._s(t) + "\n              ")]) })), 0)], 1)], 1), e._v(" "), n("b-card", { staticClass: "mt-3", attrs: { header: "Token Type", "header-bg-variant": "dark", "header-text-variant": "white" } }, [n("b-form-group", { attrs: { description: "Choose your Token.", label: "Token Type *", "label-for": "tokenType" } }, [n("b-form-select", { attrs: { id: "tokenType", size: "lg" }, on: { input: e.loadToken }, model: { value: e.tokenType, callback: function(t) { e.tokenType = t }, expression: "tokenType" } }, e._l(e.tokenDetails[e.blockchain], (function(t, r) { return n("option", { domProps: { value: t.name } }, [e._v("\n                " + e._s(t.name) + "\n              ")]) })), 0)], 1)], 1), e._v(" "), n("b-card", { staticClass: "mt-3", attrs: { "no-body": "", "bg-variant": "light", header: "Token Details", "header-bg-variant": "dark", "header-text-variant": "white" } }, [n("b-list-group", { attrs: { flush: "" } }, [n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Contract Name: "), n("b", [e._v(e._s(e.contracts.token.contractName))])]), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Compiler: "), n("b", [e._v(e._s(e.contracts.token.compiler.version))])]), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Optimization: "), n("b", [e._v("Yes")])]), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Runs (Optimizer): "), n("b", [e._v("200")])]), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Control Flow:\n              "), n("b-link", { attrs: { href: e.controlFlow, target: "_blank" } }, [n("b", [e._v(e._s(e.contracts.token.contractName) + ".png")])])], 1), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              Inheritance Tree:\n              "), n("b-link", { attrs: { href: e.inheritanceTree, target: "_blank" } }, [n("b", [e._v(e._s(e.contracts.token.contractName) + ".png")])])], 1), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [e._v("\n              UML:\n              "), n("b-link", { attrs: { href: e.uml, target: "_blank" } }, [n("b", [e._v(e._s(e.contracts.token.contractName) + ".svg")])])], 1), e._v(" "), n("b-list-group-item", { staticClass: "py-4" }, [n("div", { staticClass: "form-group" }, [n("label", [e._v("ABI:")]), e._v(" "), n("b-form-textarea", { attrs: { readonly: "", "no-resize": "", rows: "10" }, model: { value: e.contracts.token.stringifiedAbi, callback: function(t) { e.$set(e.contracts.token, "stringifiedAbi", t) }, expression: "contracts.token.stringifiedAbi" } })], 1)])], 1)], 1)], 1), e._v(" "), n("b-col", { attrs: { xl: "3" } }, [n("b-card", { staticClass: "mt-3", attrs: { "no-body": "", "bg-variant": "light", header: "Token Features", "header-bg-variant": "dark", "header-text-variant": "white" } }, [n("b-list-group", { attrs: { flush: "" } }, [n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                " + e._s(e.token.type) + " Compliant"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Your Token will be compliant with the " + e._s(e.token.type) + " Standard.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.standard } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Verified Source Code"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Your Token Source Code will be automatically verified on Etherscan.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.verified } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Detailed"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Your Token will have name, symbol and decimal amount.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.detailed } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Customizable Decimals"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  You can customize the decimal amount. 18 otherwise.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.customizeDecimals } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Remove Copyright"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Remove the link pointing to this page from your contract.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.removeCopyright } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Supply Type"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Choose between 10k, Fixed, Unlimited or Capped.\n                ")])]), e._v(" "), n("b-badge", { attrs: { variant: "Capped" === e.token.supplyType ? "success" : "Unlimited" === e.token.supplyType ? "info" : "Fixed" === e.token.supplyType ? "warning" : "danger" } }, [e._v("\n                " + e._s(e.token.supplyType) + "\n              ")])], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Access Type"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Choose between None, Ownable or Role Based.\n                ")])]), e._v(" "), n("b-badge", { attrs: { variant: "Role Based" === e.token.accessType ? "success" : "Ownable" === e.token.accessType ? "info" : "warning" } }, [e._v("\n                " + e._s(e.token.accessType) + "\n              ")])], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Transfer Type"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Choose between Unstoppable or Pausable.\n                ")])]), e._v(" "), n("b-badge", { attrs: { variant: "Unstoppable" === e.token.transferType ? "success" : "warning" } }, [e._v("\n                " + e._s(e.token.transferType) + "\n              ")])], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Burnable"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  Your Token can be burnt.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.burnable } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Mintable"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  You will be able to generate tokens by minting them.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.mintable } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                " + e._s("BEP20" === e.token.type ? "Operable" : "ERC1363")), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  The " + e._s("BEP20" === e.token.type ? "Operable" : "ERC1363") + " Token is a\n                  " + e._s(e.token.type) + " compatible Token that can make a callback on\n                  the receiver contract.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.erc1363 } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [n("div", [e._v("\n                Token Recover"), n("br"), e._v(" "), n("small", { staticClass: "text-muted" }, [e._v("\n                  It allows the contract owner to recover any " + e._s(e.token.type) + " token sent\n                  into the contract for error.\n                ")])]), e._v(" "), n("ui--checkmark", { attrs: { value: e.token.tokenRecover } })], 1), e._v(" "), n("b-list-group-item", { staticClass: "justify-content-between align-items-center text-center py-3", attrs: { variant: "warning", to: { path: e.$withBase("/token-generator/create/" + e.blockchain + "/"), query: { tokenType: e.token.name } } } }, [e._v("\n              Create\n            ")])], 1)], 1)], 1), e._v(" "), n("b-col", { attrs: { xl: "10", "offset-xl": "1" } }, [n("b-card", { staticClass: "mt-3", attrs: { header: "Methods", "header-bg-variant": "dark", "header-text-variant": "white" } }, e._l(e.contracts.token.abi, (function(t, r) { return t.name ? n("b-card", { key: r, staticClass: "mt-4", attrs: { "no-body": "", "bg-variant": "light" } }, [n("b-card-header", [n("a", { directives: [{ name: "b-toggle", rawName: "v-b-toggle" }], staticClass: "stretched-link text-reset text-decoration-none", attrs: { href: "#method-" + r }, on: { click: function(e) { e.preventDefault() } } }, [e._v("\n                " + e._s(t.name) + "\n              ")])]), e._v(" "), n("b-collapse", { staticClass: "p-4", attrs: { id: "method-" + r } }, [n("b-card-sub-title", [e._v("\n                Type: " + e._s(t.type) + "\n              ")]), e._v(" "), t.stateMutability ? n("b-card-text", [e._v("\n                State Mutability: " + e._s(t.stateMutability) + "\n              ")]) : e._e(), e._v(" "), t.inputs && t.inputs.length > 0 ? n("b-card-text", [n("p", [e._v("Inputs:")]), e._v(" "), n("ul", e._l(t.inputs, (function(t, r) { return n("li", { key: r }, [n("b", [e._v(e._s(t.type))]), e._v(" " + e._s(t.name) + "\n                  ")]) })), 0)]) : e._e(), e._v(" "), t.outputs && t.outputs.length > 0 ? n("b-card-text", [n("p", [e._v("Outputs:")]), e._v(" "), n("ul", e._l(t.outputs, (function(t, r) { return n("li", { key: r }, [n("b", [e._v(e._s(t.type))]), e._v(" " + e._s(t.name) + "\n                  ")]) })), 0)]) : e._e()], 1)], 1) : e._e() })), 1)], 1)] : e._e()], 2), e._v(" "), n("b-row", { staticClass: "bg-light text-dark mx-0 mt-5" }, [n("b-col", { staticClass: "mb-3 text-center", attrs: { lg: "10", "offset-lg": "1" } }, [n("h2", { staticClass: "pt-5 mb-4 font-weight-lighter text-dark" }, [e._v("Ready to deploy your " + e._s(e.token.type) + " Token?")]), e._v(" "), n("p", { staticClass: "font-weight-light" }, [e._v("\n        Try building your " + e._s(e.token.type) + " Token in less than a minute. You can try on Test Network before to go live.\n      ")]), e._v(" "), n("b-button", { staticClass: "my-5 py-3 px-5 text-uppercase", attrs: { to: e.$withBase("/token-generator/create/" + e.blockchain + "/"), size: "lg", variant: "success" } }, [e._v("\n        Create " + e._s(e.token.type) + " Token\n      ")])], 1)], 1)], 1)
                }), [], !1, null, null, null);
            t.default = c.exports
        }
    }
]);