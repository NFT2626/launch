(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        367: function(e, t, n) {
            var r = n(2),
                o = n(3),
                s = n(19),
                a = n(33).f,
                i = n(9),
                l = o((function() { a(1) }));
            r({ target: "Object", stat: !0, forced: !i || l, sham: !i }, { getOwnPropertyDescriptor: function(e, t) { return a(s(e), t) } })
        },
        368: function(e, t, n) {
            var r = n(2),
                o = n(9),
                s = n(119).f;
            r({ target: "Object", stat: !0, forced: Object.defineProperties !== s, sham: !o }, { defineProperties: s })
        },
        369: function(e, t, n) { n(117), e.exports = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }, e.exports.__esModule = !0, e.exports.default = e.exports },
        376: function(e, t, n) {
            n(118), n(64), n(63), n(12), n(367), n(120), n(121), n(198), n(368), n(117);
            var r = n(369);

            function o(e, t) {
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
                    t % 2 ? o(Object(n), !0).forEach((function(t) { r(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
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
                    o = "minute",
                    s = "hour",
                    a = "day",
                    i = "week",
                    l = "month",
                    u = "quarter",
                    c = "year",
                    d = "date",
                    f = "Invalid Date",
                    h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    p = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
                    g = function(e, t, n) { var r = String(e); return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e },
                    v = {
                        s: g,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                o = n % 60;
                            return (t <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(o, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                o = t.clone().add(r, l),
                                s = n - o < 0,
                                a = t.clone().add(r + (s ? -1 : 1), l);
                            return +(-(r + (n - o) / (s ? o - a : a - o)) || 0)
                        },
                        a: function(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) },
                        p: function(e) { return { M: l, y: c, w: i, d: a, D: d, h: s, m: o, s: r, ms: n, Q: u }[e] || String(e || "").toLowerCase().replace(/s$/, "") },
                        u: function(e) { return void 0 === e }
                    },
                    k = "en",
                    b = {};
                b[k] = p;
                var y = function(e) { return e instanceof x },
                    w = function e(t, n, r) {
                        var o;
                        if (!t) return k;
                        if ("string" == typeof t) {
                            var s = t.toLowerCase();
                            b[s] && (o = s), n && (b[s] = n, o = s);
                            var a = t.split("-");
                            if (!o && a.length > 1) return e(a[0])
                        } else {
                            var i = t.name;
                            b[i] = t, o = i
                        }
                        return !r && o && (k = o), o || !r && k
                    },
                    $ = function(e, t) { if (y(e)) return e.clone(); var n = "object" == typeof t ? t : {}; return n.date = e, n.args = arguments, new x(n) },
                    _ = v;
                _.l = w, _.i = y, _.w = function(e, t) { return $(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset }) };
                var x = function() {
                        function p(e) { this.$L = w(e.locale, null, !0), this.parse(e) }
                        var g = p.prototype;
                        return g.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (_.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(h);
                                    if (r) {
                                        var o = r[2] - 1 || 0,
                                            s = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, g.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, g.$utils = function() { return _ }, g.isValid = function() { return !(this.$d.toString() === f) }, g.isSame = function(e, t) { var n = $(e); return this.startOf(t) <= n && n <= this.endOf(t) }, g.isAfter = function(e, t) { return $(e) < this.startOf(t) }, g.isBefore = function(e, t) { return this.endOf(t) < $(e) }, g.$g = function(e, t, n) { return _.u(e) ? this[t] : this.set(n, e) }, g.unix = function() { return Math.floor(this.valueOf() / 1e3) }, g.valueOf = function() { return this.$d.getTime() }, g.startOf = function(e, t) {
                            var n = this,
                                u = !!_.u(t) || t,
                                f = _.p(e),
                                h = function(e, t) { var r = _.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n); return u ? r : r.endOf(a) },
                                m = function(e, t) { return _.w(n.toDate()[e].apply(n.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n) },
                                p = this.$W,
                                g = this.$M,
                                v = this.$D,
                                k = "set" + (this.$u ? "UTC" : "");
                            switch (f) {
                                case c:
                                    return u ? h(1, 0) : h(31, 11);
                                case l:
                                    return u ? h(1, g) : h(0, g + 1);
                                case i:
                                    var b = this.$locale().weekStart || 0,
                                        y = (p < b ? p + 7 : p) - b;
                                    return h(u ? v - y : v + (6 - y), g);
                                case a:
                                case d:
                                    return m(k + "Hours", 0);
                                case s:
                                    return m(k + "Minutes", 1);
                                case o:
                                    return m(k + "Seconds", 2);
                                case r:
                                    return m(k + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, g.endOf = function(e) { return this.startOf(e, !1) }, g.$set = function(e, t) {
                            var i, u = _.p(e),
                                f = "set" + (this.$u ? "UTC" : ""),
                                h = (i = {}, i[a] = f + "Date", i[d] = f + "Date", i[l] = f + "Month", i[c] = f + "FullYear", i[s] = f + "Hours", i[o] = f + "Minutes", i[r] = f + "Seconds", i[n] = f + "Milliseconds", i)[u],
                                m = u === a ? this.$D + (t - this.$W) : t;
                            if (u === l || u === c) {
                                var p = this.clone().set(d, 1);
                                p.$d[h](m), p.init(), this.$d = p.set(d, Math.min(this.$D, p.daysInMonth())).$d
                            } else h && this.$d[h](m);
                            return this.init(), this
                        }, g.set = function(e, t) { return this.clone().$set(e, t) }, g.get = function(e) { return this[_.p(e)]() }, g.add = function(n, u) {
                            var d, f = this;
                            n = Number(n);
                            var h = _.p(u),
                                m = function(e) { var t = $(f); return _.w(t.date(t.date() + Math.round(e * n)), f) };
                            if (h === l) return this.set(l, this.$M + n);
                            if (h === c) return this.set(c, this.$y + n);
                            if (h === a) return m(1);
                            if (h === i) return m(7);
                            var p = (d = {}, d[o] = e, d[s] = t, d[r] = 1e3, d)[h] || 1,
                                g = this.$d.getTime() + n * p;
                            return _.w(g, this)
                        }, g.subtract = function(e, t) { return this.add(-1 * e, t) }, g.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                o = _.z(this),
                                s = this.$H,
                                a = this.$m,
                                i = this.$M,
                                l = n.weekdays,
                                u = n.months,
                                c = function(e, n, o, s) { return e && (e[n] || e(t, r)) || o[n].slice(0, s) },
                                d = function(e) { return _.s(s % 12 || 12, e, "0") },
                                h = n.meridiem || function(e, t, n) { var r = e < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r },
                                p = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: i + 1, MM: _.s(i + 1, 2, "0"), MMM: c(n.monthsShort, i, u, 3), MMMM: c(u, i), D: this.$D, DD: _.s(this.$D, 2, "0"), d: String(this.$W), dd: c(n.weekdaysMin, this.$W, l, 2), ddd: c(n.weekdaysShort, this.$W, l, 3), dddd: l[this.$W], H: String(s), HH: _.s(s, 2, "0"), h: d(1), hh: d(2), a: h(s, a, !0), A: h(s, a, !1), m: String(a), mm: _.s(a, 2, "0"), s: String(this.$s), ss: _.s(this.$s, 2, "0"), SSS: _.s(this.$ms, 3, "0"), Z: o };
                            return r.replace(m, (function(e, t) { return t || p[e] || o.replace(":", "") }))
                        }, g.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, g.diff = function(n, d, f) {
                            var h, m = _.p(d),
                                p = $(n),
                                g = (p.utcOffset() - this.utcOffset()) * e,
                                v = this - p,
                                k = _.m(this, p);
                            return k = (h = {}, h[c] = k / 12, h[l] = k, h[u] = k / 3, h[i] = (v - g) / 6048e5, h[a] = (v - g) / 864e5, h[s] = v / t, h[o] = v / e, h[r] = v / 1e3, h)[m] || v, f ? k : _.a(k)
                        }, g.daysInMonth = function() { return this.endOf(l).$D }, g.$locale = function() { return b[this.$L] }, g.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = w(e, t, !0);
                            return r && (n.$L = r), n
                        }, g.clone = function() { return _.w(this.$d, this) }, g.toDate = function() { return new Date(this.valueOf()) }, g.toJSON = function() { return this.isValid() ? this.toISOString() : null }, g.toISOString = function() { return this.$d.toISOString() }, g.toString = function() { return this.$d.toUTCString() }, p
                    }(),
                    O = x.prototype;
                return $.prototype = O, [
                    ["$ms", n],
                    ["$s", r],
                    ["$m", o],
                    ["$H", s],
                    ["$W", a],
                    ["$M", l],
                    ["$y", c],
                    ["$D", d]
                ].forEach((function(e) { O[e[1]] = function(t) { return this.$g(t, e[0], e[1]) } })), $.extend = function(e, t) { return e.$i || (e(t, x, $), e.$i = !0), $ }, $.locale = w, $.isDayjs = y, $.unix = function(e) { return $(1e3 * e) }, $.en = b[k], $.Ls = b, $.p = {}, $
            }()
        },
        473: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(62),
                o = (n(123), n(122), n(197), n(116), n(114)),
                s = {
                    name: "Create",
                    mixins: [n(375).a],
                    data: function() { return { loaded: !1, loading: !1, currentNetwork: null, blockchain: "", address: "", token: { address: "", name: "", symbol: "", decimals: "", logo: "" } } },
                    computed: { tokenType: function() { return this.network.current ? this.network.current.tokenType : "ERC20" } },
                    mounted: function() { this.currentNetwork = this.getParam("network") || this.network.default, this.address = this.getParam("address") || "", this.initDapp() },
                    methods: {
                        changeBlockchain: function() { this.currentNetwork = "".concat(this.blockchain, "_mainnet") },
                        initDapp: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.token = { address: e.address, name: "", symbol: "", decimals: "", logo: "" }, e.network.current = e.network.list[e.currentNetwork], t.prev = 2, e.blockchain = e.network.current.network, t.next = 6, e.initWeb3(e.currentNetwork, !0);
                                        case 6:
                                            Object(o.extend)("eth_address", { message: "Insert a valid token address.", validate: function(t) { return e.web3.utils.isAddress(t) } }), "" !== e.address && e.getToken(), t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(2), console.log(t.t0), e.makeToast("Some error occurred", t.t0.message, "danger");
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [2, 10]
                                ])
                            })))()
                        },
                        getToken: function() {
                            var e = this;
                            this.$refs.searchObserver.validate().then(function() {
                                var t = Object(r.a)(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!n) { t.next = 25; break }
                                                return t.prev = 1, e.loaded = !1, e.loading = !0, e.getTokenByAddress(e.address), e.token.address = e.address, t.next = 8, e.promisify(e.instances.token.methods.name().call);
                                            case 8:
                                                return e.token.name = t.sent, t.next = 11, e.promisify(e.instances.token.methods.symbol().call);
                                            case 11:
                                                return e.token.symbol = t.sent, t.next = 14, e.promisify(e.instances.token.methods.decimals().call);
                                            case 14:
                                                e.token.decimals = t.sent.valueOf(), e.token.name && e.token.symbol && e.token.decimals ? e.loaded = !0 : (e.loaded = !1, e.makeToast("Some error occurred", "It seems that it is not a valid Token or you are on the wrong network", "danger"), e.loaded = !1), e.loading = !1, t.next = 25;
                                                break;
                                            case 19:
                                                t.prev = 19, t.t0 = t.catch(1), console.log(t.t0), e.loaded = !1, e.loading = !1, e.makeToast("Some error occurred", "It seems that it is not a valid Token or you are on the wrong network", "danger");
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 19]
                                    ])
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }()).catch((function(t) { console.log(t), e.loaded = !1, e.loading = !1, e.makeToast("Some error occurred", t.message, "danger") }))
                        },
                        createTokenPage: function() {
                            var e = this;
                            this.$refs.createObserver.validate().then((function(t) {
                                if (t) {
                                    var n = e.web3.utils.toHex(JSON.stringify({ address: e.token.address, logo: e.token.logo }));
                                    document.location.href = e.$withBase("/token-watcher/page/?hash=".concat(n, "&network=").concat(e.currentNetwork))
                                }
                            })).catch((function(t) { console.log(t), e.loaded = !1, e.loading = !1, e.makeToast("Some error occurred", t.message, "danger") }))
                        }
                    }
                },
                a = n(61),
                i = Object(a.a)(s, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("b-jumbotron", { staticClass: "mb-0 d-flex flex-column justify-content-center text-center text-white purple-gradient", attrs: { header: "Create your Token Page", fluid: "" }, scopedSlots: e._u([{ key: "lead", fn: function() { return [e._v("\n      " + e._s(e.$page.frontmatter.content) + "\n    ")] }, proxy: !0 }]) }), e._v(" "), n("b-row", { staticClass: "mx-0" }, [n("b-col", { staticClass: "mb-3 p-0", attrs: { lg: "12", xl: "10", "offset-xl": "1" } }, [n("b-card", { attrs: { "bg-variant": "transparent", "border-variant": "0" } }, [n("b-row", [n("b-col", { attrs: { md: "6" } }, [n("b-card", { staticClass: "mt-3", attrs: { header: "Create your " + e.tokenType + " Token Page on " + e.blockchains[e.blockchain], "header-bg-variant": "dark", "header-text-variant": "white" } }, [n("p", [e._v("\n                Enter your "), n("b", [e._v(e._s(e.tokenType))]), e._v(" Token details."), n("br"), e._v("\n                Create a page and share it with your customers.\n              ")]), e._v(" "), n("hr"), e._v(" "), n("ValidationObserver", { ref: "searchObserver", attrs: { tag: "form" }, on: { submit: function(t) { return t.preventDefault(), e.getToken.apply(null, arguments) } } }, [n("b-form-group", { attrs: { label: "Blockchain", "label-for": "blockchain" } }, [n("b-form-select", { attrs: { id: "blockchain", size: "lg" }, on: { change: e.changeBlockchain }, model: { value: e.blockchain, callback: function(t) { e.blockchain = t }, expression: "blockchain" } }, e._l(e.blockchains, (function(t, r) { return n("option", { domProps: { value: r } }, [e._v("\n                      " + e._s(t) + "\n                    ")]) })), 0)], 1), e._v(" "), n("b-form-group", { attrs: { label: "Network", "label-for": "network" } }, [n("b-form-select", { attrs: { id: "network", size: "lg" }, on: { input: e.initDapp }, model: { value: e.currentNetwork, callback: function(t) { e.currentNetwork = t }, expression: "currentNetwork" } }, e._l(e.network.list, (function(t, r) { return t.network === e.blockchain ? n("option", { domProps: { value: r } }, [e._v("\n                      " + e._s(t.name) + "\n                    ")]) : e._e() })), 0)], 1), e._v(" "), n("ValidationProvider", { attrs: { name: "Token Address", rules: { required: !0, eth_address: !0 } }, scopedSlots: e._u([{ key: "default", fn: function(t) { var r = t.errors; return [n("b-form-group", { attrs: { label: "Token Address", "label-for": "tokenAddress" } }, [n("b-input-group", [n("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "tokenAddress", name: "tokenAddress", placeholder: "0x123456789...", size: "lg" }, model: { value: e.address, callback: function(t) { e.address = "string" == typeof t ? t.trim() : t }, expression: "address" } }), e._v(" "), n("b-input-group-append", [n("b-button", { attrs: { disabled: e.loading, type: "submit", variant: "success" } }, [n("b-icon-search")], 1)], 1)], 1), e._v(" "), n("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [e._v("\n                      " + e._s(r[0]) + "\n                    ")])], 1)] } }]) })], 1)], 1)], 1), e._v(" "), e.loading ? e._e() : n("b-col", { attrs: { md: "6" } }, [n("ValidationObserver", { ref: "createObserver", attrs: { tag: "form" }, on: { submit: function(t) { return t.preventDefault(), e.createTokenPage.apply(null, arguments) } } }, [n("fieldset", { attrs: { disabled: !e.loaded } }, [n("b-card", { staticClass: "mt-3", attrs: { "bg-variant": "light" } }, [n("ValidationProvider", { attrs: { name: "token name", rules: { required: !0 } }, scopedSlots: e._u([{ key: "default", fn: function(t) { var r = t.errors; return [n("b-form-group", { attrs: { label: "Token Name", "label-for": "tokenName" } }, [n("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "tokenName", name: "tokenName", placeholder: "Your Token name", size: "lg", readonly: "" }, model: { value: e.token.name, callback: function(t) { e.$set(e.token, "name", "string" == typeof t ? t.trim() : t) }, expression: "token.name" } }), e._v(" "), n("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [e._v("\n                        " + e._s(r[0]) + "\n                      ")])], 1)] } }], null, !1, 2619888398) }), e._v(" "), n("ValidationProvider", { attrs: { name: "token symbol", rules: { required: !0 } }, scopedSlots: e._u([{ key: "default", fn: function(t) { var r = t.errors; return [n("b-form-group", { attrs: { label: "Token Symbol", "label-for": "tokenSymbol" } }, [n("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "tokenSymbol", name: "tokenSymbol", placeholder: "Your Token symbol", size: "lg", readonly: "" }, model: { value: e.token.symbol, callback: function(t) { e.$set(e.token, "symbol", "string" == typeof t ? t.trim() : t) }, expression: "token.symbol" } }), e._v(" "), n("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [e._v("\n                        " + e._s(r[0]) + "\n                      ")])], 1)] } }], null, !1, 2011086990) }), e._v(" "), n("ValidationProvider", { attrs: { name: "token Decimals", rules: { required: !0, numeric: !0, min_value: 0, max_value: 36 } }, scopedSlots: e._u([{ key: "default", fn: function(t) { var r = t.errors; return [n("b-form-group", { attrs: { label: "Token Decimals", "label-for": "tokenDecimals" } }, [n("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "tokenDecimals", name: "tokenDecimals", placeholder: "Your Token decimals", size: "lg", type: "number", min: "0", step: "1", readonly: "" }, model: { value: e.token.decimals, callback: function(t) { e.$set(e.token, "decimals", "string" == typeof t ? t.trim() : t) }, expression: "token.decimals" } }), e._v(" "), n("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [e._v("\n                        " + e._s(r[0]) + "\n                      ")])], 1)] } }], null, !1, 45767450) }), e._v(" "), n("ValidationProvider", { attrs: { name: "Token Logo" }, scopedSlots: e._u([{ key: "default", fn: function(t) { var r = t.errors; return [n("b-form-group", { attrs: { label: "Logo (optional)", "label-for": "tokenLogo", description: "Suggested: a square SVG or PNG with transparent background (recommended greater than 64x64px)." } }, [n("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "tokenLogo", name: "tokenLogo", placeholder: "Your Token logo link", size: "lg" }, model: { value: e.token.logo, callback: function(t) { e.$set(e.token, "logo", "string" == typeof t ? t.trim() : t) }, expression: "token.logo" } }), e._v(" "), n("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [e._v("\n                        " + e._s(r[0]) + "\n                      ")])], 1)] } }], null, !1, 1903035266) })], 1), e._v(" "), n("b-button", { staticClass: "mt-3 py-3 px-5 text-uppercase", attrs: { variant: "success", size: "lg", block: "", type: "submit" } }, [e._v("\n                  Create Token Page\n                ")])], 1)])], 1), e._v(" "), e.loading ? n("b-col", { attrs: { md: "6" } }, [n("b-card", { staticClass: "mt-3", attrs: { "bg-variant": "light" } }, [n("ui--loader", { attrs: { loading: e.loading } })], 1)], 1) : e._e()], 1)], 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            t.default = i.exports
        }
    }
]);