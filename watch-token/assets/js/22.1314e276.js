(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        465: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(62),
                r = (a(123), a(197), a(385), a(116), a(446)),
                o = a(375),
                s = (a(372), a(387)),
                c = a.n(s),
                i = new(a(447).BitlyClient)(c.a.bitlyAccessToken, {}),
                l = {
                    methods: {
                        shorten: function(t) {
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, i.shorten(t);
                                        case 3:
                                            return a = e.sent, e.abrupt("return", a.link);
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", t);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        }
                    }
                },
                k = {
                    name: "Page",
                    mixins: [o.a, l],
                    components: { Disqus: r.a },
                    data: function() { return { loaded: !1, loading: !0, share: {}, currentNetwork: null, blockchain: "", token: {} } },
                    computed: { tokenType: function() { return this.network.current ? this.network.current.tokenType : "ERC20" } },
                    mounted: function() { this.currentNetwork = this.getParam("network") || this.network.default, this.initDapp() },
                    methods: {
                        initDapp: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.network.current = t.network.list[t.currentNetwork], e.prev = 1, t.blockchain = t.network.current.network, e.next = 5, t.initWeb3(t.currentNetwork, !0);
                                        case 5:
                                            return e.next = 7, t.getToken(decodeURIComponent(t.getParam("hash")));
                                        case 7:
                                            e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(1), console.log(e.t0), t.makeToast("Some error occurred", e.t0.message, "danger");
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 9]
                                ])
                            })))()
                        },
                        getToken: function(t) {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function a() {
                                var n;
                                return regeneratorRuntime.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (!t) { a.next = 19; break }
                                            return n = JSON.parse(e.web3.utils.hexToAscii(t)), e.token.hash = t, e.token.address = n.address, e.getTokenByAddress(e.token.address), a.next = 7, e.promisify(e.instances.token.methods.name().call);
                                        case 7:
                                            return e.token.name = a.sent, a.next = 10, e.promisify(e.instances.token.methods.symbol().call);
                                        case 10:
                                            return e.token.symbol = a.sent, a.next = 13, e.promisify(e.instances.token.methods.decimals().call);
                                        case 13:
                                            e.token.decimals = a.sent.valueOf(), e.token.logo = n.logo ? n.logo : "", e.token.name && e.token.symbol && e.token.decimals ? (e.token.explorerLink = "".concat(e.network.current.explorerLink, "/token/").concat(e.token.address), e.loaded = !0, document.title = "".concat(e.token.name, " (").concat(e.token.symbol, ") | ").concat(e.$page.frontmatter.title)) : (e.makeToast("Some error occurred", "It seems that it is not a valid Token or you are on the wrong network", "danger"), e.loaded = !1), e.loading = !1, a.next = 20;
                                            break;
                                        case 19:
                                            e.makeToast("Some error occurred", "It seems that it is not a valid Token or you are on the wrong network", "danger");
                                        case 20:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        addToMetaMask: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.metamask.installed) { e.next = 5; break }
                                            return t.makeToast("Warning", "Please install MetaMask and try again!", "danger"), e.abrupt("return");
                                        case 5:
                                            if (t.metamask.netId === t.network.current.id) { e.next = 8; break }
                                            return t.makeToast("Warning", "Your MetaMask in on the wrong network. Please switch on ".concat(t.network.current.name, " and try again!"), "warning"), e.abrupt("return");
                                        case 8:
                                            return e.prev = 8, e.next = 11, t.web3Provider.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: t.token.address, symbol: t.token.symbol.substr(0, 11), decimals: t.token.decimals, image: t.token.logo } } });
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(8), console.log(e.t0);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [8, 13]
                                ])
                            })))()
                        },
                        shareToken: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.share.tokenLink = window.location.origin + t.$withBase("/token-watcher/page/?hash=".concat(t.token.hash, "&network=").concat(t.currentNetwork)), e.next = 3, t.shorten(t.share.tokenLink);
                                        case 3:
                                            t.share.shortLink = e.sent, t.share.facebook = "https://www.facebook.com/sharer.php?u=".concat(t.share.shortLink, "&quote=Discover more about ").concat(t.token.name, " (").concat(t.token.symbol, ")."), t.share.twitter = "https://twitter.com/intent/tweet?url=".concat(t.share.shortLink, "&text=Discover more about ").concat(t.token.name, " (").concat(t.token.symbol, ")."), t.share.telegram = "https://t.me/share/url?url=".concat(t.share.shortLink, "&text=Discover more about ").concat(t.token.name, " (").concat(t.token.symbol, ")."), t.share.whatsapp = "https://wa.me/?text=Discover more about ".concat(t.token.name, " (").concat(t.token.symbol, "). ").concat(t.share.shortLink), t.$forceUpdate(), t.$refs.shareModal.show();
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                u = a(61),
                m = Object(u.a)(k, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("b-row", { staticClass: "mx-0" }, [a("b-col", { staticClass: "mb-3 p-0", attrs: { lg: "12", xl: "10", "offset-xl": "1" } }, [a("b-card", { attrs: { "bg-variant": "transparent", "border-variant": "0" } }, [a("b-row", { staticClass: "p-0 pt-3" }, [t.loading ? a("b-col", { staticClass: "my-5 py-5", attrs: { lg: "8", "offset-lg": "2" } }, [a("div", { staticClass: "p-5 my-5 d-flex flex-column justify-content-center text-center" }, [a("ui--loader", { attrs: { loading: t.loading } })], 1)]) : t._e(), t._v(" "), t.loading || t.loaded ? t._e() : a("b-col", { attrs: { lg: "8", "offset-lg": "2" } }, [a("b-card", { attrs: { "bg-variant": "light" } }, [a("blockquote", [t._v("Some error occurred")]), t._v(" "), a("router-link", { attrs: { to: t.$withBase("/token-watcher/create/") } }, [t._v("Try adding your token")])], 1)], 1), t._v(" "), t.loaded ? a("b-col", { staticClass: "mt-2 p-0", attrs: { lg: "8", "offset-lg": "2" } }, [a("b-jumbotron", { staticClass: "my-4", attrs: { "bg-variant": "white", "border-variant": "light", "header-level": "4" }, scopedSlots: t._u([{ key: "header", fn: function() { return [a("b-media", { staticClass: "mb-3 text-break" }, [t.token.logo ? a("b-img", { attrs: { slot: "aside", src: t.token.logo, rounded: "circle", width: "64", height: "64", alt: t.token.name }, slot: "aside" }) : t._e(), t._v("\n                  " + t._s(t.token.name) + "\n                ")], 1)] }, proxy: !0 }], null, !1, 3646522315) }, [t._v(" "), a("h6", [a("b-badge", { attrs: { variant: "dark" } }, [t._v(t._s(t.tokenType))]), t._v(" "), a("b-badge", { class: t.blockchain + "-gradient" }, [t._v(t._s(t.blockchains[t.blockchain]))])], 1), t._v(" "), a("hr", { staticClass: "my-3" }), t._v(" "), a("h5", [t._v("Name: "), a("span", { staticClass: "text-muted" }, [t._v(t._s(t.token.name))])]), t._v(" "), a("h5", [t._v("Symbol: "), a("span", { staticClass: "text-muted" }, [t._v(t._s(t.token.symbol))])]), t._v(" "), a("h5", [t._v("Decimals: "), a("span", { staticClass: "text-muted" }, [t._v(t._s(t.token.decimals))])]), t._v(" "), a("h5", [t._v("Address: "), a("span", { staticClass: "text-muted token-address text-break" }, [t._v(t._s(t.token.address))])]), t._v(" "), a("hr", { staticClass: "my-4" }), t._v(" "), a("b-link", { staticClass: "btn btn-success my-2", on: { click: t.addToMetaMask } }, [a("b-icon-plus-circle-fill"), t._v("\n                Add to MetaMask\n              ")], 1), t._v(" "), a("b-link", { staticClass: "btn btn-primary my-2", attrs: { href: t.token.explorerLink, target: "_blank" } }, [a("b-icon-arrow-up-right-circle-fill"), t._v("\n                View on " + t._s(t.network.current.explorerName) + "\n              ")], 1), t._v(" "), a("b-link", { staticClass: "btn btn-info my-2 float-right", on: { click: t.shareToken } }, [a("b-icon-share")], 1)], 1), t._v(" "), a("b-modal", { ref: "shareModal", attrs: { "hide-footer": "", title: "Share " + t.token.name + " page" } }, [a("b-row", [a("b-col", { attrs: { lg: "12" } }, [a("b-form-group", { attrs: { label: "Share link", "label-for": "tokenLink" } }, [a("b-form-input", { attrs: { id: "tokenLink", name: "tokenLink", placeholder: "Your token link", size: "lg", readonly: "" }, model: { value: t.share.shortLink, callback: function(e) { t.$set(t.share, "shortLink", "string" == typeof e ? e.trim() : e) }, expression: "share.shortLink" } })], 1)], 1), t._v(" "), a("b-col", { attrs: { lg: "12" } }, [a("p", { staticClass: "share-link" }, [a("b-btn", { staticClass: "twitter", attrs: { href: t.share.twitter, target: "_blank" } }, [a("font-awesome-icon", { attrs: { icon: ["fab", "twitter"] } })], 1), t._v(" "), a("b-btn", { staticClass: "facebook", attrs: { href: t.share.facebook, target: "_blank" } }, [a("font-awesome-icon", { attrs: { icon: ["fab", "facebook-f"] } })], 1), t._v(" "), a("b-btn", { staticClass: "telegram", attrs: { href: t.share.telegram, target: "_blank" } }, [a("font-awesome-icon", { attrs: { icon: ["fab", "telegram-plane"] } })], 1), t._v(" "), a("b-btn", { staticClass: "whatsapp", attrs: { href: t.share.whatsapp, target: "_blank" } }, [a("font-awesome-icon", { attrs: { icon: ["fab", "whatsapp"] } })], 1)], 1)])], 1)], 1), t._v(" "), a("b-card", { attrs: { "bg-variant": "white", "border-variant": "light" } }, [a("Disqus", { attrs: { shortname: "smartcontractstools", pageConfig: { identifier: t.token.address } } })], 1)], 1) : t._e()], 1)], 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.default = m.exports
        }
    }
]);