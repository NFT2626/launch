(window.webpackJsonp = window.webpackJsonp || []).push([[12, 24, 25], {
    371: function(t, e, a) {},
    381: function(t, e, a) {
        "use strict";
        a.r(e);
        a(12),
        a(20),
        a(25);
        var r = {
            name: "Footer",
            data: function() {
                return {
                    CookieLaw: null
                }
            },
            mounted: function() {
                var t = this;
                a.e(43).then(a.t.bind(null, 462, 7)).then((function(e) {
                    t.CookieLaw = e.default
                }
                )).catch((function(t) {
                    console.log(t)
                }
                ))
            }
        }
          , o = a(61)
          , n = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("b-container", {
                staticClass: "footer",
                attrs: {
                    fluid: ""
                }
            }, [a("b-row", {
                staticClass: "bg-dark text-light py-4"
            }, [a("b-col", {
                attrs: {
                    lg: "12",
                    xl: "8",
                    "offset-xl": "2"
                }
            }, [a("b-row", [a("b-col", {
                attrs: {
                    lg: "4"
                }
            }, [a("b-list-group", {
                attrs: {
                    flush: ""
                }
            }, [a("b-list-group-item", {
                attrs: {
                    disabled: ""
                }
            }, [t._v("\n              Token Generator\n            ")]), t._v(" "), a("b-list-group-item", {
                staticClass: "text-light",
                attrs: {
                    href: t.$withBase("/token-generator/create/ethereum/")
                }
            }, [t._v("\n              Create ERC20 on Ethereum\n            ")]), t._v(" "), a("b-list-group-item", {
                staticClass: "text-light",
                attrs: {
                    href: t.$withBase("/token-generator/create/polygon/")
                }
            }, [t._v("\n              Create ERC20 on Polygon\n            ")]), t._v(" "), a("b-list-group-item", {
                staticClass: "text-light",
                attrs: {
                    href: t.$withBase("/token-generator/create/bsc/")
                }
            }, [t._v("\n              Create BEP20 on BSC\n            ")])], 1)], 1), t._v(" "), a("b-col", {
                attrs: {
                    lg: "4"
                }
            }, [a("b-list-group", {
                attrs: {
                    flush: ""
                }
            }, [a("b-list-group-item", {
                attrs: {
                    disabled: ""
                }
            }, [t._v("\n              Token Watcher\n            ")]), t._v(" "), a("b-list-group-item", {
                staticClass: "text-light",
                attrs: {
                    href: t.$withBase("/token-watcher/create/")
                }
            }, [t._v("\n              Create Token Page\n            ")]), t._v(" "), a("b-list-group-item", {
                attrs: {
                    disabled: ""
                }
            }, [t._v("\n              Utilities\n            ")]), t._v(" "), a("b-list-group-item", {
                staticClass: "text-light",
                attrs: {
                    href: t.$withBase("/utilities/coin-history/")
                }
            }, [t._v("\n              Coin History\n            ")])], 1)], 1), t._v(" "), a("b-col", {
                attrs: {
                    lg: "4"
                }
            }, [a("b-list-group", {
                attrs: {
                    flush: ""
                }
            }, [a("b-list-group-item", {
                directives: [{
                    name: "b-modal",
                    rawName: "v-b-modal.modal-contact",
                    modifiers: {
                        "modal-contact": !0
                    }
                }]
            }, [a("small", [t._v("Contact Us")])]), t._v(" "), a("b-list-group-item", {
                directives: [{
                    name: "b-modal",
                    rawName: "v-b-modal.modal-terms",
                    modifiers: {
                        "modal-terms": !0
                    }
                }]
            }, [a("small", [t._v("Terms and Conditions")])]), t._v(" "), a("b-list-group-item", {
                directives: [{
                    name: "b-modal",
                    rawName: "v-b-modal.modal-privacy",
                    modifiers: {
                        "modal-privacy": !0
                    }
                }]
            }, [a("small", [t._v("Privacy Policy")])]), t._v(" "), a("b-list-group-item", [a("div", {
                staticClass: "social-buttons"
            }, [a("b-link", {
                attrs: {
                    href: "https://twitter.com/nonceptcom",
                    target: "_blank"
                }
            }, [a("font-awesome-icon", {
                staticClass: "px-2",
                attrs: {
                    icon: ["fab", "twitter"]
                }
            })], 1), t._v(" "), a("b-link", {
                attrs: {
                    href: "https://www.facebook.com/nonceptcom",
                    target: "_blank"
                }
            }, [a("font-awesome-icon", {
                staticClass: "px-2",
                attrs: {
                    icon: ["fab", "facebook-f"]
                }
            })], 1), t._v(" "), a("b-link", {
                attrs: {
                    href: "https://www.linkedin.com/company/noncept",
                    target: "_blank"
                }
            }, [a("font-awesome-icon", {
                staticClass: "px-2",
                attrs: {
                    icon: ["fab", "linkedin-in"]
                }
            })], 1)], 1)])], 1)], 1)], 1)], 1), t._v(" "), a("b-col", {
                attrs: {
                    lg: "12",
                    xl: "8",
                    "offset-xl": "2"
                }
            }, [a("hr"), t._v(" "), a("b-list-group", {
                attrs: {
                    flush: ""
                }
            }, [a("b-list-group-item", {
                staticClass: "text-muted"
            }, [a("small", [t._v("\n            © 2022 -\n            Made with "), a("b-icon-emoji-sunglasses-fill"), t._v(" at\n            "), a("b-link", {
                staticClass: "text-warning text-decoration-none",
                attrs: {
                    href: "https://noncept.com/",
                    target: "_blank"
                }
            }, [t._v("NONCEPT")]), t._v("\n            - All rights reserved.\n          ")], 1)])], 1)], 1)], 1), t._v(" "), a("b-modal", {
                attrs: {
                    id: "modal-tg-terms",
                    size: "xl",
                    centered: "",
                    scrollable: "",
                    "hide-footer": ""
                }
            }, [a("b-embed", {
                attrs: {
                    type: "iframe",
                    aspect: "4by3",
                    src: "/terms/token-generator-terms/",
                    allow: "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                    allowfullscreen: ""
                }
            })], 1), t._v(" "), a("b-modal", {
                attrs: {
                    id: "modal-terms",
                    size: "xl",
                    centered: "",
                    scrollable: "",
                    "hide-footer": ""
                }
            }, [a("b-embed", {
                attrs: {
                    type: "iframe",
                    aspect: "4by3",
                    src: "/terms/",
                    allow: "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                    allowfullscreen: ""
                }
            })], 1), t._v(" "), a("b-modal", {
                attrs: {
                    id: "modal-privacy",
                    size: "xl",
                    centered: "",
                    scrollable: "",
                    "hide-footer": ""
                }
            }, [a("b-embed", {
                attrs: {
                    type: "iframe",
                    aspect: "4by3",
                    src: "/privacy/",
                    allow: "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                    allowfullscreen: ""
                }
            })], 1), t._v(" "), a("b-modal", {
                attrs: {
                    id: "modal-contact",
                    size: "lg",
                    centered: "",
                    "hide-footer": ""
                }
            }, [a("b-embed", {
                attrs: {
                    type: "iframe",
                    aspect: "16by9",
                    src: "https://docs.google.com/forms/d/e/1FAIpQLSf7D0GdBekrJ4xgEd6xPvkIQpDXBoyjVYt4Nra2yy_7NhR5QQ/viewform?embedded=true",
                    allow: "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                    allowfullscreen: ""
                }
            })], 1), t._v(" "), a("ClientOnly", [t.CookieLaw ? a(t.CookieLaw, {
                tag: "component",
                attrs: {
                    buttonClass: "btn blue-gradient btn-lg text-white",
                    buttonText: "Accept"
                }
            }, [a("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [t._v("\n        This website makes use of cookies to enhance browsing experience and provide additional functionality.\n        "), a("router-link", {
                attrs: {
                    to: t.$withBase("/privacy/"),
                    target: "_blank"
                }
            }, [t._v("Learn more")])], 1)]) : t._e()], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.default = n.exports
    },
    382: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = {
            name: "Header",
            props: {
                page: {
                    type: String,
                    default: null
                },
                blockchain: {
                    type: String,
                    default: null
                }
            },
            data: function() {
                return {
                    scrolled: !1
                }
            },
            created: function() {
                window.addEventListener("scroll", this.handleScroll)
            },
            destroyed: function() {
                window.removeEventListener("scroll", this.handleScroll)
            },
            methods: {
                handleScroll: function(t) {
                    this.scrolled = window.scrollY > 0
                }
            }
        }
          , o = a(61)
          , n = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("b-navbar", {
                class: [t.scrolled ? "is-sticky" : ""],
                attrs: {
                    variant: "white",
                    toggleable: "md",
                    sticky: ""
                }
            }, [a("b-navbar-toggle", {
                attrs: {
                    target: "nav_collapse"
                }
            }), t._v(" "), a("b-navbar-brand", {
                attrs: {
                    to: "/"
                }
            }, [a("b-img", {
                staticStyle: {
                    background: "#397fa0"
                },
                attrs: {
                    src: t.$withBase("/assets/images/smartcontractstools-transparent.png"),
                    width: "32",
                    thumbnail: "",
                    rounded: "circle"
                }
            }), t._v("\n    SmartContracts Tools\n  ")], 1), t._v(" "), a("b-collapse", {
                attrs: {
                    "is-nav": "",
                    id: "nav_collapse"
                }
            }, [a("b-navbar-nav", [a("b-nav-item-dropdown", {
                attrs: {
                    text: "Token Generator",
                    right: ""
                }
            }, [a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Index" === t.page,
                    href: t.$withBase("/token-generator/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("b-icon-info-circle", {
                staticStyle: {
                    width: "24px",
                    height: "24px"
                },
                attrs: {
                    variant: "info"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Discover Token Generator")])], 1)]), t._v(" "), a("b-dropdown-divider"), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    disabled: "",
                    active: "TokenGenerator--Overview" === t.page && "ethereum" === t.blockchain,
                    href: t.$withBase("/token-generator/ethereum/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("cryptoicon", {
                attrs: {
                    symbol: "eth",
                    size: "24"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Ethereum")])], 1)]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Create" === t.page && "ethereum" === t.blockchain,
                    href: t.$withBase("/token-generator/create/ethereum/")
                }
            }, [t._v("\n          Create ERC20 on Ethereum\n        ")]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Overview" === t.page && "ethereum" === t.blockchain,
                    href: t.$withBase("/token-generator/ethereum/")
                }
            }, [t._v("\n          Pricing and Features\n        ")]), t._v(" "), a("b-dropdown-divider"), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    disabled: "",
                    active: "TokenGenerator--Overview" === t.page && "polygon" === t.blockchain,
                    href: t.$withBase("/token-generator/polygon/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("cryptoicon", {
                attrs: {
                    symbol: "matic",
                    size: "24"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Polygon")])], 1)]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Create" === t.page && "polygon" === t.blockchain,
                    href: t.$withBase("/token-generator/create/polygon/")
                }
            }, [t._v("\n          Create ERC20 on Polygon\n        ")]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Overview" === t.page && "polygon" === t.blockchain,
                    href: t.$withBase("/token-generator/polygon/")
                }
            }, [t._v("\n          Pricing and Features\n        ")]), t._v(" "), a("b-dropdown-divider"), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    disabled: "",
                    active: "TokenGenerator--Overview" === t.page && "bsc" === t.blockchain,
                    href: t.$withBase("/token-generator/bsc/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("cryptoicon", {
                attrs: {
                    symbol: "bnb",
                    size: "24"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Binance Smart Chain")])], 1)]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Create" === t.page && "bsc" === t.blockchain,
                    href: t.$withBase("/token-generator/create/bsc/")
                }
            }, [t._v("\n          Create BEP20 on BSC\n        ")]), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Overview" === t.page && "bsc" === t.blockchain,
                    href: t.$withBase("/token-generator/bsc/")
                }
            }, [t._v("\n          Pricing and Features\n        ")]), t._v(" "), a("b-dropdown-divider"), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenGenerator--Docs" === t.page,
                    href: t.$withBase("/token-generator/docs/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("b-icon-file-code", {
                staticStyle: {
                    width: "24px",
                    height: "24px"
                },
                attrs: {
                    variant: "info"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Documentation")])], 1)])], 1), t._v(" "), a("b-nav-item-dropdown", {
                attrs: {
                    text: "Token Watcher",
                    right: ""
                }
            }, [a("b-dropdown-item", {
                attrs: {
                    href: t.$withBase("/token-watcher/")
                }
            }, [a("div", {
                staticClass: "py-2"
            }, [a("b-icon-info-circle", {
                staticStyle: {
                    width: "24px",
                    height: "24px"
                },
                attrs: {
                    variant: "primary"
                }
            }), t._v(" "), a("span", {
                staticClass: "px-3"
            }, [t._v("Discover Token Watcher")])], 1)]), t._v(" "), a("b-dropdown-divider"), t._v(" "), a("b-dropdown-item", {
                attrs: {
                    active: "TokenWatcher--Create" === t.page,
                    href: t.$withBase("/token-watcher/create/")
                }
            }, [t._v("Create\n          Token Page\n        ")])], 1), t._v(" "), a("b-nav-item-dropdown", {
                attrs: {
                    text: "Utilities",
                    right: ""
                }
            }, [a("b-dropdown-item", {
                attrs: {
                    active: "Utilities--CoinHistory" === t.page,
                    href: t.$withBase("/utilities/coin-history/")
                }
            }, [t._v("\n          Coin History\n        ")])], 1)], 1)], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.default = n.exports
    },
    383: function(t, e, a) {
        "use strict";
        a(371)
    },
    466: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a(382)
          , o = a(381)
          , n = {
            components: {
                SiteHeader: r.default,
                SiteFooter: o.default
            },
            computed: {
                page: function() {
                    return this.$page.frontmatter.component || null
                },
                blockchain: function() {
                    return this.$page.frontmatter.blockchain || null
                }
            }
        }
          , i = (a(383),
        a(61))
          , s = Object(i.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "page-wrapper"
            }, [a("ClientOnly", ["MDReader" !== t.page ? a("site-header", {
                attrs: {
                    page: t.page,
                    blockchain: t.blockchain
                }
            }) : t._e()], 1), t._v(" "), a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [t.page ? a(t.page, {
                key: t.page,
                tag: "component"
            }) : t._e()], 1), t._v(" "), "MDReader" !== t.page ? a("site-footer") : t._e()], 1)
        }
        ), [], !1, null, null, null);
        e.default = s.exports
    }
}]);
