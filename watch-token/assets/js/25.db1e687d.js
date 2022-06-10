(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        382: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = { name: "Header", props: { page: { type: String, default: null }, blockchain: { type: String, default: null } }, data: function() { return { scrolled: !1 } }, created: function() { window.addEventListener("scroll", this.handleScroll) }, destroyed: function() { window.removeEventListener("scroll", this.handleScroll) }, methods: { handleScroll: function(e) { this.scrolled = window.scrollY > 0 } } },
                n = a(61),
                o = Object(n.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("b-navbar", { class: [e.scrolled ? "is-sticky" : ""], attrs: { variant: "white", toggleable: "md", sticky: "" } }, [a("b-navbar-toggle", { attrs: { target: "nav_collapse" } }), e._v(" "), a("b-navbar-brand", { attrs: { to: "/" } }, [a("b-img", { staticStyle: { background: "#397fa0" }, attrs: { src: e.$withBase("/assets/images/smartcontractstools-transparent.png"), width: "32", thumbnail: "", rounded: "circle" } }), e._v("\n    SmartContracts Tools\n  ")], 1), e._v(" "), a("b-collapse", { attrs: { "is-nav": "", id: "nav_collapse" } }, [a("b-navbar-nav", [a("b-nav-item-dropdown", { attrs: { text: "Token Generator", right: "" } }, [a("b-dropdown-item", { attrs: { active: "TokenGenerator--Index" === e.page, href: e.$withBase("/token-generator/") } }, [a("div", { staticClass: "py-2" }, [a("b-icon-info-circle", { staticStyle: { width: "24px", height: "24px" }, attrs: { variant: "info" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Discover Token Generator")])], 1)]), e._v(" "), a("b-dropdown-divider"), e._v(" "), a("b-dropdown-item", { attrs: { disabled: "", active: "TokenGenerator--Overview" === e.page && "ethereum" === e.blockchain, href: e.$withBase("/token-generator/ethereum/") } }, [a("div", { staticClass: "py-2" }, [a("cryptoicon", { attrs: { symbol: "eth", size: "24" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Ethereum")])], 1)]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Create" === e.page && "ethereum" === e.blockchain, href: e.$withBase("/token-generator/create/ethereum/") } }, [e._v("\n          Create ERC20 on Ethereum\n        ")]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Overview" === e.page && "ethereum" === e.blockchain, href: e.$withBase("/token-generator/ethereum/") } }, [e._v("\n          Pricing and Features\n        ")]), e._v(" "), a("b-dropdown-divider"), e._v(" "), a("b-dropdown-item", { attrs: { disabled: "", active: "TokenGenerator--Overview" === e.page && "polygon" === e.blockchain, href: e.$withBase("/token-generator/polygon/") } }, [a("div", { staticClass: "py-2" }, [a("cryptoicon", { attrs: { symbol: "matic", size: "24" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Polygon")])], 1)]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Create" === e.page && "polygon" === e.blockchain, href: e.$withBase("/token-generator/create/polygon/") } }, [e._v("\n          Create ERC20 on Polygon\n        ")]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Overview" === e.page && "polygon" === e.blockchain, href: e.$withBase("/token-generator/polygon/") } }, [e._v("\n          Pricing and Features\n        ")]), e._v(" "), a("b-dropdown-divider"), e._v(" "), a("b-dropdown-item", { attrs: { disabled: "", active: "TokenGenerator--Overview" === e.page && "bsc" === e.blockchain, href: e.$withBase("/token-generator/bsc/") } }, [a("div", { staticClass: "py-2" }, [a("cryptoicon", { attrs: { symbol: "bnb", size: "24" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Binance Smart Chain")])], 1)]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Create" === e.page && "bsc" === e.blockchain, href: e.$withBase("/token-generator/create/bsc/") } }, [e._v("\n          Create BEP20 on BSC\n        ")]), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Overview" === e.page && "bsc" === e.blockchain, href: e.$withBase("/token-generator/bsc/") } }, [e._v("\n          Pricing and Features\n        ")]), e._v(" "), a("b-dropdown-divider"), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenGenerator--Docs" === e.page, href: e.$withBase("/token-generator/docs/") } }, [a("div", { staticClass: "py-2" }, [a("b-icon-file-code", { staticStyle: { width: "24px", height: "24px" }, attrs: { variant: "info" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Documentation")])], 1)])], 1), e._v(" "), a("b-nav-item-dropdown", { attrs: { text: "Token Watcher", right: "" } }, [a("b-dropdown-item", { attrs: { href: e.$withBase("/token-watcher/") } }, [a("div", { staticClass: "py-2" }, [a("b-icon-info-circle", { staticStyle: { width: "24px", height: "24px" }, attrs: { variant: "primary" } }), e._v(" "), a("span", { staticClass: "px-3" }, [e._v("Discover Token Watcher")])], 1)]), e._v(" "), a("b-dropdown-divider"), e._v(" "), a("b-dropdown-item", { attrs: { active: "TokenWatcher--Create" === e.page, href: e.$withBase("/token-watcher/create/") } }, [e._v("Create\n          Token Page\n        ")])], 1), e._v(" "), a("b-nav-item-dropdown", { attrs: { text: "Utilities", right: "" } }, [a("b-dropdown-item", { attrs: { active: "Utilities--CoinHistory" === e.page, href: e.$withBase("/utilities/coin-history/") } }, [e._v("\n          Coin History\n        ")])], 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            t.default = o.exports
        }
    }
]);