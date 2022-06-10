(window.webpackJsonp = window.webpackJsonp || []).push([[15], { 355: function (e, t, a) { "use strict"; t.a = { data: function () { return { tokenDetails: { ethereum: [{ name: "HelloERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 884955 }, { name: "SimpleERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: .05, price: .03, gas: 887192 }, { name: "StandardERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .15, price: .07, gas: 877509 }, { name: "BurnableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .2, price: .095, gas: 1017744 }, { name: "MintableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .25, price: .1, gas: 1283249 }, { name: "PausableERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Pausable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .3, price: .3, gas: 1356111 }, { name: "CommonERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .35, price: .18, gas: 1416325 }, { name: "UnlimitedERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .45, price: .28, gas: 1923213 }, { name: "AmazingERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: .85, price: .42, gas: 1886138 }, { name: "PowerfulERC20", type: "ERC20", currency: "ETH", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: .95, price: .5, gas: 2468313 }], polygon: [{ name: "HelloERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 884955 }, { name: "SimpleERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 50, price: 15, gas: 887192 }, { name: "StandardERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 100, price: 35, gas: 877509 }, { name: "BurnableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "None", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 150, price: 50, gas: 1017744 }, { name: "MintableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 200, price: 100, gas: 1283249 }, { name: "PausableERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Pausable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 300, price: 300, gas: 1356111 }, { name: "CommonERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 275, price: 170, gas: 1416325 }, { name: "UnlimitedERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 400, price: 200, gas: 1923213 }, { name: "AmazingERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 650, price: 250, gas: 1886138 }, { name: "PowerfulERC20", type: "ERC20", currency: "MATIC", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 800, price: 300, gas: 2468313 }], bsc: [{ name: "HelloBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "10k", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: 0, price: 0, gas: 1087811 }, { name: "SimpleBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !1, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !1, originalPrice: .3, price: .25, gas: 1090033 }, { name: "StandardBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: .5, price: .5, gas: 1073230 }, { name: "BurnableBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Fixed", accessType: "Ownable", transferType: "Unstoppable", mintable: !1, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 1, price: .85, gas: 1207529 }, { name: "MintableBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !1, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 1.5, price: 1.25, gas: 1298638 }, { name: "CommonBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 2, price: 1.85, gas: 1431775 }, { name: "UnlimitedBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !1, tokenRecover: !1, removeCopyright: !0, originalPrice: 2.5, price: 2.15, gas: 1942584 }, { name: "AmazingBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Unlimited", accessType: "Ownable", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 3, price: 3, gas: 1905092 }, { name: "PowerfulBEP20", type: "BEP20", currency: "BNB", standard: !0, verified: !0, detailed: !0, customizeDecimals: !0, supplyType: "Capped", accessType: "Role Based", transferType: "Unstoppable", mintable: !0, burnable: !0, erc1363: !0, tokenRecover: !0, removeCopyright: !0, originalPrice: 4, price: 3.85, gas: 2484063 }] } } } } }, 386: function (e, t, a) { "use strict"; a.r(t); a(10), a(19), a(24); var r = { name: "PricingTable", mixins: [a(355).a], props: { blockchain: { type: String, default: null } }, data: function () { return { carousel: null, slide: null } }, mounted: function () { var e = this; a.e(42).then(a.t.bind(null, 445, 7)).then((function (t) { e.carousel = t.Carousel, e.slide = t.Slide })).catch((function (e) { console.log(e) })) } }, i = a(55), n = Object(i.a)(r, (function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("div", { staticClass: "pricing-table" }, [a("b-row", { staticClass: "mb-5" }, [a("b-col", { attrs: { lg: "10", "offset-lg": "1" } }, [a("h4", { staticClass: "text-center font-weight-light text-white" }, [e._v("\n        Choose between " + e._s(e.tokenDetails[e.blockchain] ? e.tokenDetails[e.blockchain].length : 0) + " different Token types.\n      ")]), e._v(" "), a("p", { staticClass: "text-center font-weight-light text-white" }, [e._v("\n        What are your Token requirements?\n      ")])])], 1), e._v(" "), e.carousel ? a(e.carousel, { tag: "component", attrs: { perPageCustom: [[0, 1], [576, 2], [992, 3], [1536, 4]], paginationColor: "#343a40", paginationActiveColor: "#f8f9fa" } }, e._l(e.tokenDetails[e.blockchain], (function (t, r) { return e.slide ? a(e.slide, { tag: "component" }, [a("b-card", { staticClass: "mb-3 mx-3", attrs: { "no-body": "", itemscope: "", itemtype: "http://schema.org/Product" } }, [a("b-card-title", { staticClass: "pt-5 font-weight-light text-center", attrs: { itemprop: "name" } }, [e._v("\n          " + e._s(t.name) + "\n        ")]), e._v(" "), a("meta", { attrs: { itemprop: "sku", content: t.name } }), e._v(" "), a("div", { attrs: { itemprop: "brand", itemtype: "http://schema.org/Brand", itemscope: "" } }, [a("meta", { attrs: { itemprop: "name", content: "SmartContracts Tools" } })]), e._v(" "), a("p", { staticClass: "card-price text-center" }, [t.originalPrice !== t.price ? a("b-badge", { attrs: { variant: "danger" } }, [a("s", [e._v(e._s(t.originalPrice) + " "), a("small", [e._v(e._s(t.currency))])])]) : e._e(), e._v(" "), a("span", { staticClass: "align-middle", attrs: { itemprop: "offers", itemscope: "", itemtype: "http://schema.org/Offer" } }, [a("span", { attrs: { itemprop: "price" } }, [e._v(e._s(t.price))]), e._v(" "), a("small", { staticClass: "term", attrs: { itemprop: "priceCurrency" } }, [e._v(e._s(t.currency))]), e._v(" "), a("link", { attrs: { itemprop: "url", href: e.$withBase("/token-generator/create/" + e.blockchain + "/?tokenType=" + t.name) } }), e._v(" "), a("meta", { attrs: { itemprop: "availability", content: "InStock" } })])], 1), e._v(" "), a("b-list-group", { attrs: { flush: "" } }, [a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            " + e._s(t.type) + " Compliant\n            "), a("ui--checkmark", { attrs: { value: t.standard } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Verified Source Code\n            "), a("ui--checkmark", { attrs: { value: t.verified } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Detailed\n            "), a("ui--checkmark", { attrs: { value: t.detailed } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Customizable Decimals\n            "), a("ui--checkmark", { attrs: { value: t.customizeDecimals } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Remove Copyright\n            "), a("ui--checkmark", { attrs: { value: t.removeCopyright } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Supply Type\n            "), a("b-badge", { attrs: { variant: "Capped" === t.supplyType ? "success" : "Unlimited" === t.supplyType ? "info" : "Fixed" === t.supplyType ? "warning" : "danger" } }, [e._v("\n              " + e._s(t.supplyType) + "\n            ")])], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Access Type\n            "), a("b-badge", { attrs: { variant: "Role Based" === t.accessType ? "success" : "Ownable" === t.accessType ? "info" : "warning" } }, [e._v("\n              " + e._s(t.accessType) + "\n            ")])], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Transfer Type\n            "), a("b-badge", { attrs: { variant: "Unstoppable" === t.transferType ? "success" : "warning" } }, [e._v("\n              " + e._s(t.transferType) + "\n            ")])], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Burnable\n            "), a("ui--checkmark", { attrs: { value: t.burnable } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Mintable\n            "), a("ui--checkmark", { attrs: { value: t.mintable } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            ERC1363/Operable\n            "), a("ui--checkmark", { attrs: { value: t.erc1363 } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "d-flex justify-content-between align-items-center" }, [e._v("\n            Token Recover\n            "), a("ui--checkmark", { attrs: { value: t.tokenRecover } })], 1), e._v(" "), a("b-list-group-item", { staticClass: "justify-content-between align-items-center text-center py-3", attrs: { variant: "warning", to: { path: e.$withBase("/token-generator/create/" + e.blockchain + "/"), query: { tokenType: t.name } }, itemprop: "url" } }, [e._v("\n            Create\n          ")])], 1)], 1)], 1) : e._e() })), 1) : e._e(), e._v(" "), a("b-row", [a("b-col", { staticClass: "mt-4", attrs: { lg: "6", "offset-lg": "3" } }, [a("p", { staticClass: "text-center text-white" }, [e._v("\n        * GAS fee will be added to final amount\n      ")])])], 1)], 1) }), [], !1, null, null, null); t.default = n.exports } }]);