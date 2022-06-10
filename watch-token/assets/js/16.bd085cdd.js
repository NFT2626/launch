(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        380: function(t, a, e) {
            "use strict";
            e(42), e(124), e(125), e(12), e(197);
            var r = e(377),
                n = e.n(r);
            a.a = {
                methods: {
                    isMobile: function() { try { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) } catch (t) { return !1 } },
                    getParam: function(t) { var a = {}; return window.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=?([^&]*)?/gi, (function(t, e, r) { a[e] = void 0 !== r ? r : "" })), t ? a[t] ? a[t] : null : a },
                    makeToast: function(t, a) {
                        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        this.$bvToast.toast(a, { title: t, variant: e, solid: !0 })
                    },
                    promisify: function(t) { for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) e[r - 1] = arguments[r]; return new Promise((function(a, r) { t.apply(void 0, e.concat([function(t, e) { t ? r(t) : a(e) }])) })) },
                    dateConvert: function(t, a) { return n()(t).format(a) },
                    gaSend: function(t, a, e) { try { ga("send", "event", t, a, e) } catch (r) { console.log("ga send", { category: t, action: a, label: e }) } },
                    fbtrack: function(t, a) { try { fbq("track", t, a || {}) } catch (e) { console.log("fb track", { eventName: t, eventParams: a || {} }) } }
                }
            }
        },
        475: function(t, a, e) {
            "use strict";
            e.r(a);
            var r = e(62),
                n = (e(116), e(203), e(197), e(29), e(30), e(378)),
                o = e.n(n),
                i = {
                    name: "CoinHistory",
                    mixins: [e(380).a],
                    data: function() { return { loaded: !1, loading: !1, amount: 1, date: null, currency: "ethereum", currencies: [{ id: "ethereum", name: "ETH" }, { id: "matic-network", name: "MATIC" }, { id: "binancecoin", name: "BNB" }, { id: "bitcoin", name: "BTC" }], coinData: {} } },
                    mounted: function() { this.date = this.dateConvert(new Date, "YYYY-MM-DD") },
                    methods: {
                        getHistoricalData: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function a() {
                                return regeneratorRuntime.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            t.$refs.convertObserver.validate().then(function() {
                                                var a = Object(r.a)(regeneratorRuntime.mark((function a(e) {
                                                    var r, n, i;
                                                    return regeneratorRuntime.wrap((function(a) {
                                                        for (;;) switch (a.prev = a.next) {
                                                            case 0:
                                                                if (!e) { a.next = 28; break }
                                                                return t.loading = !0, t.loaded = !1, r = t.dateConvert(t.date, "DD-MM-YYYY"), n = "https://api.coingecko.com/api/v3/coins/".concat(t.currency, "/history?date=").concat(r), a.prev = 5, a.next = 8, o.a.get(n);
                                                            case 8:
                                                                if ((i = a.sent).data.error) { a.next = 17; break }
                                                                if (t.coinData = i.data, t.loading = !1, t.loaded = !0, i.data.market_data) { a.next = 15; break }
                                                                throw new Error("No market data available");
                                                            case 15:
                                                                a.next = 20;
                                                                break;
                                                            case 17:
                                                                t.loading = !1, t.loaded = !1, t.makeToast("Some error occurred", i.data.error, "danger");
                                                            case 20:
                                                                a.next = 28;
                                                                break;
                                                            case 22:
                                                                a.prev = 22, a.t0 = a.catch(5), console.log(a.t0), t.loading = !1, t.loaded = !1, t.makeToast("Some errors occurred", a.t0.message, "danger");
                                                            case 28:
                                                            case "end":
                                                                return a.stop()
                                                        }
                                                    }), a, null, [
                                                        [5, 22]
                                                    ])
                                                })));
                                                return function(t) { return a.apply(this, arguments) }
                                            }()).catch((function(a) { console.log(a), t.loading = !1, t.loaded = !1, t.makeToast("Some error occurred", a.message, "danger") }));
                                        case 1:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        }
                    }
                },
                s = e(61),
                c = Object(s.a)(i, (function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", [e("b-jumbotron", { staticClass: "mb-0 d-flex flex-column justify-content-center peach-gradient text-white text-center", attrs: { fluid: "" }, scopedSlots: t._u([{ key: "header", fn: function() { return [e("span", { staticClass: "display-1" }, [t._v("Coin History")])] }, proxy: !0 }, { key: "lead", fn: function() { return [t._v("\n      Get historical data for a coin at a given date. Explore and analyze values for FREE.\n    ")] }, proxy: !0 }]) }), t._v(" "), e("b-row", [e("b-col", { staticClass: "mb-3 p-0", attrs: { lg: "12", xl: "10", "offset-xl": "1" } }, [e("b-card", { attrs: { "bg-variant": "transparent", "border-variant": "0" } }, [e("b-row", [e("b-col", { attrs: { md: "4" } }, [e("b-card", { staticClass: "mt-3", attrs: { header: "Get info about your preferred coin", "header-bg-variant": "dark", "header-text-variant": "white" } }, [e("ValidationObserver", { ref: "convertObserver", attrs: { tag: "form" }, on: { submit: function(a) { return a.preventDefault(), t.getHistoricalData.apply(null, arguments) } } }, [e("b-form-group", { attrs: { "label-for": "currency" } }, [e("b-form-select", { attrs: { id: "currency", size: "lg" }, model: { value: t.currency, callback: function(a) { t.currency = a }, expression: "currency" } }, t._l(t.currencies, (function(a) { return e("option", { domProps: { value: a.id } }, [t._v("\n                      " + t._s(a.name) + "\n                    ")]) })), 0)], 1), t._v(" "), e("ValidationProvider", { attrs: { name: "Date", rules: { required: !0 } }, scopedSlots: t._u([{ key: "default", fn: function(a) { var r = a.errors; return [e("b-form-group", { attrs: { "label-for": "date" } }, [e("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "date", name: "date", type: "date", size: "lg", max: t.dateConvert(new Date, "YYYY-MM-DD") }, model: { value: t.date, callback: function(a) { t.date = "string" == typeof a ? a.trim() : a }, expression: "date" } }), t._v(" "), e("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [t._v("\n                      " + t._s(r[0]) + "\n                    ")])], 1)] } }]) }), t._v(" "), e("b-button", { staticClass: "text-uppercase", attrs: { variant: "success", size: "lg", block: "", type: "submit" } }, [t._v("\n                  Search\n                ")])], 1)], 1)], 1), t._v(" "), t.loaded ? e("b-col", { attrs: { md: "8" } }, [e("b-card", { staticClass: "mt-3", attrs: { "bg-variant": "light" } }, [e("b-media", { staticClass: "mb-3 text-break" }, [t.coinData.image.small ? e("b-img", { attrs: { slot: "aside", src: t.coinData.image.small, rounded: "circle", width: "64", height: "64", alt: t.coinData.name }, slot: "aside" }) : t._e(), t._v(" "), e("span", { staticClass: "display-4" }, [t._v(t._s(t.coinData.name) + " (" + t._s(t.coinData.symbol.toUpperCase()) + ")")])], 1), t._v(" "), e("hr"), t._v(" "), e("div", [e("ValidationProvider", { attrs: { name: "Amount", rules: { required: !0, double: !0, min_value: 1e-18 } }, scopedSlots: t._u([{ key: "default", fn: function(a) { var r = a.errors; return [e("b-form-group", { attrs: { description: "Conversion value at " + t.date.toLocaleString() } }, [e("b-input-group", { attrs: { append: t.coinData.symbol.toUpperCase() } }, [e("b-form-input", { class: { "is-invalid": r.length > 0 }, attrs: { id: "amount", name: "amount", size: "lg" }, model: { value: t.amount, callback: function(a) { t.amount = "string" == typeof a ? a.trim() : a }, expression: "amount" } })], 1), t._v(" "), e("small", { directives: [{ name: "show", rawName: "v-show", value: r.length > 0, expression: "errors.length > 0" }], staticClass: "text-danger" }, [t._v("\n                      " + t._s(r[0]) + "\n                    ")])], 1)] } }], null, !1, 2311781537) })], 1), t._v(" "), e("h5", [t._v("FIAT")]), t._v(" "), e("h6", [t._v("EUR: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.eur).toFixed(2)))])]), t._v(" "), e("h6", [t._v("USD: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.usd).toFixed(2)))])]), t._v(" "), e("h6", [t._v("GBP: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.gbp).toFixed(2)))])]), t._v(" "), e("h6", [t._v("CNY: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.cny).toFixed(2)))])]), t._v(" "), e("h6", [t._v("JPY: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.jpy).toFixed(2)))])]), t._v(" "), e("h6", [t._v("KRW: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.krw).toFixed(2)))])]), t._v(" "), e("h6", [t._v("INR: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.inr).toFixed(2)))])]), t._v(" "), e("hr"), t._v(" "), e("h5", [t._v("Crypto")]), t._v(" "), "btc" !== t.coinData.symbol ? e("h6", [t._v("\n                BTC: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.btc).toFixed(8)))])]) : t._e(), t._v(" "), "eth" !== t.coinData.symbol ? e("h6", [t._v("\n                ETH: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.eth).toFixed(8)))])]) : t._e(), t._v(" "), "bnb" !== t.coinData.symbol ? e("h6", [t._v("\n                BNB: "), e("span", { staticClass: "text-muted" }, [t._v(t._s((t.amount * t.coinData.market_data.current_price.bnb).toFixed(8)))])]) : t._e()], 1), t._v(" "), e("div", { staticClass: "text-muted text-right" }, [e("small", [t._v("Powered using "), e("a", { attrs: { href: "https://www.coingecko.com/en/api", target: "_blank" } }, [t._v("CoinGecko\n                API")])])])], 1) : t._e(), t._v(" "), t.loading ? e("b-col", { attrs: { md: "8" } }, [e("b-card", { staticClass: "mt-3", attrs: { "bg-variant": "light" } }, [e("ui--loader", { attrs: { loading: t.loading } })], 1)], 1) : t._e()], 1)], 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            a.default = c.exports
        }
    }
]);