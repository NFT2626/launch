(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    461: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = {
            name: "Faq",
            props: {
                blockchain: {
                    type: String,
                    default: null
                },
                token: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            }
        }
          , o = a(61)
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "faq-table",
                attrs: {
                    itemscope: "",
                    itemtype: "https://schema.org/FAQPage"
                }
            }, [a("b-row", [a("b-col", [a("b-card", {
                staticClass: "mb-4",
                attrs: {
                    "bg-variant": "light"
                }
            }, [a("h3", {
                staticClass: "font-weight-light"
            }, [t._v("Token Generator")]), t._v(" "), a("p", {
                staticClass: "font-weight-light"
            }, [t._v("\n          " + t._s(t.$page.frontmatter.description) + "\n        ")]), t._v(" "), a("hr", {
                staticClass: "my-4"
            }), t._v(" "), "bsc" !== t.blockchain ? [a("h6", {
                staticClass: "font-weight-light"
            }, [t._v("The ERC20 Standard")]), t._v(" "), a("p", {
                staticClass: "font-weight-light"
            }, [t._v("\n            ERC20 provides basic functionality to transfer tokens, as well as allow tokens to be approved so\n            they can be spent by another on-chain third party.\n          ")])] : t._e(), t._v(" "), "bsc" === t.blockchain ? [a("h6", {
                staticClass: "font-weight-light"
            }, [t._v("The BEP20 Standard")]), t._v(" "), a("p", {
                staticClass: "font-weight-light"
            }, [t._v("\n            BEP20 defines the implementation of APIs for token smart contracts. It is proposed by deriving\n            the ERC20 protocol of Ethereum and provides the basic functionality to transfer tokens,\n            allow tokens to be approved so they can be spent by another on-chain third party, and transfer\n            between Binance Chain and Binance Smart Chain.\n          ")])] : t._e()], 2)], 1)], 1), t._v(" "), a("b-row", [a("b-col", [a("h5", {
                staticClass: "font-weight-light text-white"
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#about-token-features"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("b-icon-caret-down-fill"), t._v("\n          Token Features\n        ")], 1)]), t._v(" "), a("b-collapse", {
                staticClass: "mt-4",
                attrs: {
                    id: "about-token-features",
                    visible: "",
                    accordion: "main-accordion"
                }
            }, [a("div", {
                staticClass: "accordion mb-3",
                attrs: {
                    role: "tablist"
                }
            }, [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#difference-between-fixed-capped"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  What's the difference between 10k, Fixed, Capped and Unlimited Supply?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "difference-between-fixed-capped",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [a("b", [t._v("10k")]), a("br"), t._v("\n                  Your token supply will be 10.000.\n                  The entire token supply will be generated during deploy and sent to Token Owner\n                  wallet. You can't increase or reduce supply later."), a("br"), a("br"), t._v(" "), a("b", [t._v("Fixed Supply")]), a("br"), t._v("\n                  The entire token supply will be generated during deploy and sent to Token Owner\n                  wallet. You can't increase or reduce supply later."), a("br"), a("br"), t._v(" "), a("b", [t._v("Capped Supply")]), a("br"), t._v("\n                  You can define an initial supply to sent to Token Owner's wallet. You can\n                  increase or reduce supply later by minting or burning tokens (if allowed).\n                  You won't be able to generate more tokens than the defined supply cap."), a("br"), a("br"), t._v(" "), a("b", [t._v("Unlimited Supply")]), a("br"), t._v("\n                  You can define an initial supply to sent to Token Owner's wallet. You can\n                  increase or reduce supply later by minting or burning tokens (if allowed).\n                  You will be able to generate unlimited tokens without an upper limit.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#difference-between-enabled-pausable"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  What's the difference between Unstoppable or Pausable Transfer?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "difference-between-enabled-pausable",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [a("b", [t._v("Unstoppable")]), a("br"), t._v("\n                  Everyone can always transfer his own tokens. Transfer can't be stopped."), a("br"), a("br"), t._v(" "), a("b", [t._v("Pausable")]), a("br"), t._v("\n                  Token owner can stop token transfers. Useful for scenarios such as preventing\n                  trades until the end of an evaluation period, or having an emergency switch for\n                  freezing all token transfers in the event of a large bug.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#difference-between-access"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  What's the difference between None, Ownable and Role Based Access?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "difference-between-access",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [a("b", [t._v("None")]), a("br"), t._v("\n                  Your Token doesn't need an access type because of there are not actions that\n                  needs privileges. "), a("br"), a("br"), t._v(" "), a("b", [t._v("Ownable")]), a("br"), t._v("\n                  Your Token will have an Owner. The account you use to deploy your Token will be\n                  owner by default and will be able to mint new tokens or call the finish minting\n                  function. You can transfer token ownership to addresses or Smart Contract.\n                  "), a("br"), a("br"), t._v(" "), a("b", [t._v("Role Based")]), a("br"), t._v('\n                  Your Token will have Roles. Accounts with "MINTER" role will be able to mint new\n                  tokens. Accounts with "ADMIN" role will be able to add or remove roles to\n                  minters or other admins. The account you use to deploy your Token will be ADMIN\n                  and MINTER by default. In addition your Token will have the Ownable behaviour\n                  too.\n                ')])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#who-can-mint-burn"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Who can mint or burn tokens?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "who-can-mint-burn",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [a("b", [t._v("Mint")]), a("br"), t._v("\n                  It depends on your Token Access Type. If you choose Ownable Access only Token\n                  Owner will be able to mint new tokens. If you choose Role Based Access only\n                  addresses with MINTER role will be able to mint new tokens.\n                  In both cases, if you choose a Capped supply you won't be able to mint more\n                  tokens than the defined cap. By choosing Unlimited supply instead, you will be\n                  able to generate unlimited tokens."), a("br"), a("br"), t._v(" "), a("b", [t._v("Burn")]), a("br"), t._v("\n                  Everyone will be able to burn tokens he held. A third party can burn tokens from\n                  other addresses only after an approval. Nobody, not even the Token Owner, will\n                  be able to burn tokens from other addresses without approval.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#who-can-pause"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Who can pause transfers?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "who-can-pause",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  If you choose a Pausable token, only token owner will be able to pause and\n                  unpause token transfers."), a("br"), t._v("\n                  Note that Pausable is a powerful feature to add emergency stop to smart\n                  contracts. It is a privileged role, so users need to trust the project team.\n                  The project should clearly document what privileged roles they have and under\n                  what circumstances they use them.\n                ")])])], 1)], 1), t._v(" "), "bsc" !== t.blockchain ? [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-erc1363"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is ERC1363 Payable Token?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-erc1363",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    There is no way to execute code after a ERC-20 transfer or approval (i.e.\n                    making a payment), so to make an action it is required to send another\n                    transaction and pay GAS twice. ERC1363 makes token payments easier and working\n                    without the use of any other listener. It allows to make a callback after a\n                    transfer or approval in a single transaction."), a("br"), t._v("\n                    There are many proposed uses of Ethereum Smart Contracts that can accept ERC-20\n                    payments."), a("br"), t._v("\n                    Examples could be:\n                    "), a("ul", [a("li", [t._v("\n                        to create a token payable crowdsale\n                      ")]), t._v(" "), a("li", [t._v("\n                        selling services for tokens\n                      ")]), t._v(" "), a("li", [t._v("\n                        paying invoices\n                      ")]), t._v(" "), a("li", [t._v("\n                        making subscriptions\n                      ")])])])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://eips.ethereum.org/EIPS/eip-1363",
                    target: "_blank"
                }
            }, [t._v("\n                  Discover ERC1363\n                ")])], 1)], 1)] : t._e(), t._v(" "), "bsc" === t.blockchain ? [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-operable"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is Operable Token?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-operable",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    There is no way to execute code after a BEP-20 transfer or approval (i.e.\n                    making a payment), so to make an action it is required to send another\n                    transaction and pay GAS twice. Operable Token makes token payments easier and\n                    working without the use of any other listener. It allows to make a callback\n                    after a transfer or approval in a single transaction."), a("br"), t._v("\n                    There are many proposed uses of Ethereum Smart Contracts that can accept BEP-20\n                    payments."), a("br"), t._v("\n                    Examples could be:\n                    "), a("ul", [a("li", [t._v("\n                        to create a token payable crowdsale\n                      ")]), t._v(" "), a("li", [t._v("\n                        selling services for tokens\n                      ")]), t._v(" "), a("li", [t._v("\n                        paying invoices\n                      ")]), t._v(" "), a("li", [t._v("\n                        making subscriptions\n                      ")])]), t._v("\n                    Operable Token is derived by ERC1363.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://eips.ethereum.org/EIPS/eip-1363",
                    target: "_blank"
                }
            }, [t._v("\n                  Discover ERC1363\n                ")])], 1)], 1)] : t._e(), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-token-recover"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  What is Token Recover?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-token-recover",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  There are lots of tokens lost forever into Smart Contracts. Each Ethereum\n                  contract is a potential token trap for " + t._s(t.token.type) + " tokens. They can't be recovered so\n                  it means money losses for end users."), a("br"), t._v("\n                  TokenRecover allows the contract owner to recover any " + t._s(t.token.type) + " token\n                  sent into the contract for error.\n                ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "/eth-token-recover/",
                    target: "_blank"
                }
            }, [t._v("\n                Discover Token Recover\n              ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#will-copyright-be-an-issue"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Will be having " + t._s(t.token.type) + " Generator Copyright an issue?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "will-copyright-be-an-issue",
                    accordion: "features-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  No. Token Generator code is released under MIT License so, using\n                  Hello" + t._s(t.token.type) + " for FREE or Simple" + t._s(t.token.type) + ', you will have a view\n                  method in your Smart Contract named "generator" showing a link to this page.\n                  You will also have a disclaimer in source code.\n                  It is not an issue for you because of your Token will be fully\n                  compliant with ' + t._s(t.token.type) + " definition.\n                  You can use your Token in Exchanges, DEX, Uniswap, PancakeSwap any\n                  " + t._s(t.token.type) + " compatible wallet, etc.\n                  You can remove it by choosing a token type with remove Copyright feature.\n                ")])])], 1)], 1)], 2)]), t._v(" "), a("h5", {
                staticClass: "font-weight-light text-white"
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#about-token-behaviours"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("b-icon-caret-down-fill"), t._v("\n          Token Behaviours\n        ")], 1)]), t._v(" "), a("b-collapse", {
                staticClass: "mt-4",
                attrs: {
                    id: "about-token-behaviours",
                    accordion: "main-accordion"
                }
            }, [a("div", {
                staticClass: "accordion mb-3",
                attrs: {
                    role: "tablist"
                }
            }, [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#where-is-my-token-address"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Where is my Token address?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "where-is-my-token-address",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Once you confirm your transaction you will receive transaction hash (first) and\n                  Token address (when transaction is confirmed). If your transaction will take\n                  some time to be confirmed due to network status, you can monitor it and your\n                  Token will be visible in transaction page. Watch the above video tutorial for\n                  details.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#who-will-be-token-owner"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Who will be Token Owner?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "who-will-be-token-owner",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Once your Token will be deployed you (your MetaMask address) will be the only\n                  owner.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#where-token-supply-will-go"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Where will token supply go after deploy?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "where-token-supply-will-go",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  The initial token supply will be held by the address used to deploy the token\n                  (your MetaMask address). This address will be Token Owner and will be able to\n                  generate new tokens (in case you selected a token type with Mintable behaviour).\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#which-wallet-support"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Which wallet will my Token be supported by?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "which-wallet-support",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Your Token will be a fully " + t._s(t.token.type) + " compatible token.\n                  Any " + t._s(t.token.type) + " wallet will support your Token.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#how-to-mint-new-tokens"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  How to mint new tokens?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "how-to-mint-new-tokens",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v('\n                  To generate new tokens you must use the "mint" function using token owner\n                  wallet. You can doing this by using the Contract/Write tab on your blockchain\n                  explorer token page (i.e. Etherscan, BscScan or PolygonScan).\n                  You can also import ABI from the Docs page in tools like\n                  MyEtherWallet and calling the mint function.'), a("br"), a("br"), t._v(" "), a("small", [t._v("\n                    Note: remember that your tokens has a number of decimals (usually 18), so\n                    you must use the entire number with decimals."), a("br"), t._v("I.e. if you need to\n                    generate 500 additional tokens, call the mint function by inserting\n                    500000000000000000000.\n                  ")])])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-i-use-in-exchange"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can I use my token in Exchanges or with DeFi protocols?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-i-use-in-exchange",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Yes, you can use your Token in Exchanges, Dex, or DeFi protocols like Uniswap.\n                  It is a " + t._s(t.token.type) + " compliant so you can use for any purpose where\n                  " + t._s(t.token.type) + " applies.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-i-use-for-ico"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can I use my Token for ICO?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-i-use-for-ico",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Yes, you can use Token for ICO or Crowdsales."), a("br"), t._v("\n                  Note: you need to develop an ICO or Crowdsale Smart Contract; Token address\n                  can't receive " + t._s(t.token.currency) + ".\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-token-receive-eth"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can my Token receive " + t._s(t.token.currency) + "?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-token-receive-eth",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  No, Token address can't receive " + t._s(t.token.currency) + ". If you want to create ICO,\n                  you need to develop a Smart Contract able to do that.\n                ")])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#will-my-token-be-verified"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Will my Token Source Code be verified?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "will-my-token-be-verified",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Yes, your token source code will be already verified on blockchain explorer like\n                  Etherscan, BscScan or PolygonScan.\n                ")])])], 1)], 1), t._v(" "), "ethereum" === t.blockchain ? a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-i-add-logo"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can I add logo and information to my token on Etherscan?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-i-add-logo",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Once your token will be deployed you will be able to add information on\n                  Etherscan using their procedure.\n                ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://info.etherscan.com/how-to-update-token-information-on-token-page",
                    target: "_blank"
                }
            }, [t._v("\n                Update Token Information\n              ")])], 1)], 1) : t._e(), t._v(" "), "polygon" === t.blockchain ? a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-i-add-logo"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can I add logo and information to my token on PolygonScan?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-i-add-logo",
                    accordion: "erc20-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Once your token will be deployed you will be able to add information on\n                  PolygonScan using their procedure.\n                ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://support.etherscan.com/support/solutions/articles/69000775720-token-info-submission-guidelines",
                    target: "_blank"
                }
            }, [t._v("\n                Update Token Information\n              ")])], 1)], 1) : t._e(), t._v(" "), "bsc" === t.blockchain ? a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#can-i-add-logo"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Can I add logo and information to my token on BscScan?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "can-i-add-logo",
                    accordion: "bep20-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  Once your token will be deployed you will be able to add information on BscScan\n                  using their procedure.\n                ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://bscscan.freshdesk.com/support/solutions/articles/67000666500-token-info-submission-guidelines",
                    target: "_blank"
                }
            }, [t._v("\n                Update Token Information\n              ")])], 1)], 1) : t._e(), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#will-people-mark-as-scam"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                  Will people mark my token as SCAM?\n                ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "will-people-mark-as-scam",
                    accordion: "behave-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                  No, your Token is not SCAM. Code is well tested and updated regularly, token has\n                  verified source code already used by thousands of tokens. It will be SCAM if you\n                  use as it. Token Generator is FREE to use and there are lot of tokens built on.\n                  Maybe someone used it to SCAM but it doesn't mean you will use for it too.\n                  "), a("b", [t._v("YOU DON'T.")]), t._v("\n                  Below the link to documentation about the project you can share to demonstrate\n                  trustability of your token source code (not of your intentions).\n                ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    to: t.$withBase("/token-generator/docs/" + t.blockchain + "/")
                }
            }, [t._v("\n                Documentation\n              ")])], 1)], 1)], 1)]), t._v(" "), "ethereum" === t.blockchain ? [a("h5", {
                staticClass: "font-weight-light text-white"
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#about-ethereum"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("b-icon-caret-down-fill"), t._v("\n            Ethereum Blockchain and Ecosystem\n          ")], 1)]), t._v(" "), a("b-collapse", {
                staticClass: "mt-4",
                attrs: {
                    id: "about-ethereum",
                    accordion: "main-accordion"
                }
            }, [a("div", {
                staticClass: "accordion mb-3",
                attrs: {
                    role: "tablist"
                }
            }, [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-ethereum"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is Ethereum?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-ethereum",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    Ethereum is a decentralized platform that runs Smart Contracts: applications\n                    that run exactly as programmed without any possibility of downtime, censorship,\n                    fraud or third-party interference."), a("br"), t._v("\n                    These apps run on a custom built blockchain, an enormously powerful shared\n                    global infrastructure that can move value around and represent the ownership of\n                    property."), a("br"), t._v("\n                    This enables developers to create markets, store registries of debts or\n                    promises, move funds in accordance with instructions given long in the past\n                    (like a will or a futures contract) and many other things that have not been\n                    invented yet, all without a middleman or counterparty risk.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://www.ethereum.org",
                    target: "_blank"
                }
            }, [t._v("\n                  Ethereum official website\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#explore-ethereum"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    How to explore the Ethereum blockchain?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "explore-ethereum",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    A Block Explorer is basically a search engine that allows users to easily\n                    lookup, confirm and validate transactions that have taken place on the Ethereum\n                    Blockchain.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://etherscan.io",
                    target: "_blank"
                }
            }, [t._v("\n                  Etherscan\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-a-dapp"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is a DApp?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-a-dapp",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    DApp is an abbreviated form for decentralized application."), a("br"), t._v("\n                    A DApp has its backend code running on a decentralized peer-to-peer network.\n                    Contrast this with an app where the backend code is running on centralized\n                    servers."), a("br"), t._v("\n                    A DApp can have frontend code and user interfaces written in any language (just\n                    like an app) that can make calls to its backend. Furthermore, its frontend can\n                    be hosted on decentralized storage such as Swarm or IPFS."), a("br"), t._v("\n                    For an application to be considered a Dapp (pronounced Dee-app, similar to\n                    Email) it must meet the following criteria:\n                    "), a("ul", [a("li", [t._v("\n                        The application must be completely open-source, it must operate\n                        autonomously, and with no entity controlling the majority of its tokens.\n                        The application may adapt its protocol in response to proposed\n                        improvements and market feedback but all changes must be decided by\n                        consensus of its users.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application's data and records of operation must be\n                        cryptographically stored in a public, decentralized blockchain in order\n                        to avoid any central points of failure.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must use a cryptographic token (bitcoin or a token\n                        native to its system) which is necessary for access to the application\n                        and any contribution of value from (miners / farmers) should be rewarded\n                        in the application’s tokens.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must generate tokens according to a standard\n                        crytptographic algorithm acting as a proof of the value nodes are\n                        contributing to the application (Bitcoin uses the Proof of Work\n                        Algorithm).\n                      ")])])])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-an-erc20-token"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is an ERC20 token?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-an-erc20-token",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    The Ethereum token standard (ERC20) defines a common list of rules that an\n                    Ethereum token has to implement. Giving developers the ability to program how\n                    new tokens will function within the Ethereum ecosystem. This token protocol\n                    became popular with crowdfunding companies via initial coin offering (ICO).\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://eips.ethereum.org/EIPS/eip-20",
                    target: "_blank"
                }
            }, [t._v("\n                  ERC20 Technical specification\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-gas"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is GAS and how to set Gas price?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-gas",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v('\n                    "Gas" is the name for a special unit used in Ethereum. It measures how much\n                    "work" an action or set of actions takes to perform.'), a("br"), t._v("\n                    Every operation that can be performed by a transaction or contract on the\n                    Ethereum platform costs a certain number of gas, with operations that require\n                    more computational resources costing more gas than operations that require few\n                    computational resources."), a("br"), t._v("\n                    The reason gas is important is that it helps to ensure an appropriate fee is\n                    being paid by transactions submitted to the network. By requiring that a\n                    transaction pay for each operation it performs (or causes a contract to\n                    perform), we ensure that network doesn't become bogged down with performing a\n                    lot of intensive work that isn't valuable to anyone."), a("br"), t._v("\n                    Use the links below to discover more about Gas and Gas Price.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas",
                    target: "_blank"
                }
            }, [t._v("\n                  Good explanation of Gas\n                ")]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://etherscan.io/gastracker",
                    target: "_blank"
                }
            }, [t._v("\n                  Etherscan Gas tracker\n                ")]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://ethgasstation.info",
                    target: "_blank"
                }
            }, [t._v("\n                  ETH Gas Station\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-multisig"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is a Multisig Wallet?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-multisig",
                    accordion: "ethereum-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    If such an account (wallet) with privileges is lost or were to fall in the\n                    hands of a malicious user, they could wreak havoc in your system.\n                    A good option for securing owner accounts is to use a special contract, such as\n                    a multisig, instead of a regular externally owned account."), a("br"), t._v("\n                    Multisig is a smart contract wallet running on Ethereum that requires a minimum\n                    number of people to approve a transaction before it can occur.\n                    If for example you have 3 main stakeholders in your business, you are able to\n                    set up the wallet to require approval from all 3 people before the transaction\n                    is sent. This assures that no single person could compromise the funds.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://gnosis-safe.io/",
                    target: "_blank"
                }
            }, [t._v("\n                  Gnosis Safe Multisig\n                ")])], 1)], 1)], 1)])] : t._e(), t._v(" "), "polygon" === t.blockchain ? [a("h5", {
                staticClass: "font-weight-light text-white"
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#about-polygon"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("b-icon-caret-down-fill"), t._v("\n            Polygon Blockchain and Ecosystem\n          ")], 1)]), t._v(" "), a("b-collapse", {
                staticClass: "mt-4",
                attrs: {
                    id: "about-polygon",
                    accordion: "main-accordion"
                }
            }, [a("div", {
                staticClass: "accordion mb-3",
                attrs: {
                    role: "tablist"
                }
            }, [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-polygon"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is Polygon?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-polygon",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    Polygon is a protocol and a framework for building and connecting\n                    Ethereum-compatible blockchain networks.\n                    Aggregating scalable solutions on Ethereum supporting a multi-chain\n                    Ethereum ecosystem."), a("br"), t._v("\n                    Polygon combines the best of Ethereum and sovereign blockchains into a\n                    full-fledged multi-chain system.\n                    Polygon solves pain points associated with Blockchains, like high gas fees and\n                    slow speeds, without sacrificing on security.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://polygon.technology/",
                    target: "_blank"
                }
            }, [t._v("\n                  Polygon official website\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#explore-polygon"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    How to explore the Polygon network?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "explore-polygon",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    A Block Explorer is basically a search engine that allows users to easily\n                    lookup, confirm and validate transactions that have taken place on the Polygon\n                    network.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://polygonscan.com",
                    target: "_blank"
                }
            }, [t._v("\n                  PolygonScan\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-a-dapp"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is a DApp?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-a-dapp",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    DApp is an abbreviated form for decentralized application."), a("br"), t._v("\n                    A DApp has its backend code running on a decentralized peer-to-peer network.\n                    Contrast this with an app where the backend code is running on centralized\n                    servers."), a("br"), t._v("\n                    A DApp can have frontend code and user interfaces written in any language (just\n                    like an app) that can make calls to its backend. Furthermore, its frontend can\n                    be hosted on decentralized storage such as Swarm or IPFS."), a("br"), t._v("\n                    For an application to be considered a Dapp (pronounced Dee-app, similar to\n                    Email) it must meet the following criteria:\n                    "), a("ul", [a("li", [t._v("\n                        The application must be completely open-source, it must operate\n                        autonomously, and with no entity controlling the majority of its tokens.\n                        The application may adapt its protocol in response to proposed\n                        improvements and market feedback but all changes must be decided by\n                        consensus of its users.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application's data and records of operation must be\n                        cryptographically stored in a public, decentralized blockchain in order\n                        to avoid any central points of failure.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must use a cryptographic token (bitcoin or a token\n                        native to its system) which is necessary for access to the application\n                        and any contribution of value from (miners / farmers) should be rewarded\n                        in the application’s tokens.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must generate tokens according to a standard\n                        crytptographic algorithm acting as a proof of the value nodes are\n                        contributing to the application (Bitcoin uses the Proof of Work\n                        Algorithm).\n                      ")])])])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-an-erc20-token"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is an ERC20 token?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-an-erc20-token",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    The Ethereum token standard (ERC20) defines a common list of rules that an\n                    Ethereum token has to implement. Giving developers the ability to program how\n                    new tokens will function within the Ethereum ecosystem. This token protocol\n                    became popular with crowdfunding companies via initial coin offering (ICO).\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://eips.ethereum.org/EIPS/eip-20",
                    target: "_blank"
                }
            }, [t._v("\n                  ERC20 Technical specification\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-gas"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is GAS and how to set Gas price?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-gas",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v('\n                    "Gas" is the name for a special unit used in Polygon. It measures how much\n                    "work" an action or set of actions takes to perform.'), a("br"), t._v("\n                    Every operation that can be performed by a transaction or contract on the\n                    Polygon platform costs a certain number of gas, with operations that require\n                    more computational resources costing more gas than operations that require few\n                    computational resources."), a("br"), t._v("\n                    The reason gas is important is that it helps to ensure an appropriate fee is\n                    being paid by transactions submitted to the network. By requiring that a\n                    transaction pay for each operation it performs (or causes a contract to\n                    perform), we ensure that network doesn't become bogged down with performing a\n                    lot of intensive work that isn't valuable to anyone."), a("br"), t._v("\n                    Use the links below to discover more about Gas and Gas Price.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas",
                    target: "_blank"
                }
            }, [t._v("\n                  Good explanation of Gas\n                ")]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://polygonscan.com/gastracker",
                    target: "_blank"
                }
            }, [t._v("\n                  PolygonScan Gas tracker\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#connect-metamask-to-polygon"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    How to connect MetaMask to Polygon Network\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "connect-metamask-to-polygon",
                    accordion: "polygon-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    You need to access the "), a("b", [t._v("Settings")]), t._v(" to point the wallet towards Polygon\n                    network nodes. On the Settings page, locate the "), a("b", [t._v("Networks")]), t._v(" menu.\n                    Click "), a("b", [t._v("Add Network")]), t._v(" in the top-right corner to manually add the Binance\n                    Smart Chain one."), a("br"), t._v("\n                    There are two networks we can use here:\n                    the testnet or the mainnet. Below are the parameters to fill in for each.\n                    "), a("br"), a("br"), t._v(" "), a("b", [t._v("Mainnet (This is the one you are probably looking for)")]), t._v(" "), a("ul", [a("li", [t._v("Network Name: Polygon Mainnet")]), t._v(" "), a("li", [t._v("New RPC URL: https://polygon-rpc.com/")]), t._v(" "), a("li", [t._v("ChainID: 137")]), t._v(" "), a("li", [t._v("Symbol: MATIC")]), t._v(" "), a("li", [t._v("Block Explorer URL: https://polygonscan.com/")])]), t._v(" "), a("b", [t._v("Testnet")]), t._v(" "), a("ul", [a("li", [t._v("Network Name: Matic Mumbai")]), t._v(" "), a("li", [t._v("New RPC URL: https://rpc-mumbai.maticvigil.com/")]), t._v(" "), a("li", [t._v("ChainID: 80001")]), t._v(" "), a("li", [t._v("Symbol: MATIC")]), t._v(" "), a("li", [t._v("Block Explorer URL: https://mumbai.polygonscan.com/")])])])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/#add-the-polygon-network-manually",
                    target: "_blank"
                }
            }, [t._v("\n                  More details\n                ")])], 1)], 1)], 1)])] : t._e(), t._v(" "), "bsc" === t.blockchain ? [a("h5", {
                staticClass: "font-weight-light text-white"
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#about-bsc"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("b-icon-caret-down-fill"), t._v("\n            Binance Smart Chain and Ecosystem\n          ")], 1)]), t._v(" "), a("b-collapse", {
                staticClass: "mt-4",
                attrs: {
                    id: "about-bsc",
                    accordion: "main-accordion"
                }
            }, [a("div", {
                staticClass: "accordion mb-3",
                attrs: {
                    role: "tablist"
                }
            }, [a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-bsc"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is Binance Smart Chain?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-bsc",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    Binance Chain was launched by Binance in April 2019. Its primary focus is to\n                    facilitate fast, decentralized (or non-custodial) trading."), a("br"), t._v("\n                    Binance Smart Chain (BSC) is best described as a blockchain that runs in\n                    parallel to the Binance Chain. Unlike Binance Chain, BSC boasts smart contract\n                    functionality and compatibility with the Ethereum Virtual Machine (EVM).\n                    The design goal here was to leave the high throughput of Binance Chain intact\n                    while introducing smart contracts into its ecosystem.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://docs.binance.org/smart-chain/guides/bsc-intro.html",
                    target: "_blank"
                }
            }, [t._v("\n                  BSC official website\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#explore-bsc"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    How to explore the BSC blockchain?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "explore-bsc",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    A Block Explorer is basically a search engine that allows users to easily\n                    lookup, confirm and validate transactions that have taken place on the Binance\n                    Smart Chain.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://bscscan.com",
                    target: "_blank"
                }
            }, [t._v("\n                  BscScan\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-a-dapp"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is a DApp?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-a-dapp",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    DApp is an abbreviated form for decentralized application."), a("br"), t._v("\n                    A DApp has its backend code running on a decentralized peer-to-peer network.\n                    Contrast this with an app where the backend code is running on centralized\n                    servers."), a("br"), t._v("\n                    A DApp can have frontend code and user interfaces written in any language (just\n                    like an app) that can make calls to its backend. Furthermore, its frontend can\n                    be hosted on decentralized storage such as Swarm or IPFS."), a("br"), t._v("\n                    For an application to be considered a Dapp (pronounced Dee-app, similar to\n                    Email) it must meet the following criteria:\n                    "), a("ul", [a("li", [t._v("\n                        The application must be completely open-source, it must operate\n                        autonomously, and with no entity controlling the majority of its tokens.\n                        The application may adapt its protocol in response to proposed\n                        improvements and market feedback but all changes must be decided by\n                        consensus of its users.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application's data and records of operation must be\n                        cryptographically stored in a public, decentralized blockchain in order\n                        to avoid any central points of failure.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must use a cryptographic token (bitcoin or a token\n                        native to its system) which is necessary for access to the application\n                        and any contribution of value from (miners / farmers) should be rewarded\n                        in the application’s tokens.\n                      ")]), t._v(" "), a("li", [t._v("\n                        The application must generate tokens according to a standard\n                        crytptographic algorithm acting as a proof of the value nodes are\n                        contributing to the application (Bitcoin uses the Proof of Work\n                        Algorithm).\n                      ")])])])])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-a-bep20-token"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is a BEP20 token?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-a-bep20-token",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    BEP-20 is a token standard on Binance Smart Chain that extends ERC-20, the most\n                    common Ethereum token standard. You can think of it as a blueprint for tokens\n                    that defines how they can be spent, who can spend them, and other rules for\n                    their usage. Due to its similarity to Binance Chain’s BEP-2 and Ethereum’s\n                    ERC-20, it’s compatible with both."), a("br"), t._v("\n                    BEP-20 was conceived as a technical specification for Binance Smart Chain,\n                    with the goal of providing a flexible format for developers to launch a\n                    range of different tokens. These could represent anything from shares in a\n                    business to dollars stored in a bank vault (i.e., a stablecoin).\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://github.com/binance-chain/BEPs/blob/master/BEP20.md",
                    target: "_blank"
                }
            }, [t._v("\n                  BEP20 Technical specification\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#what-is-gas"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    What is GAS and how to set Gas price?\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "what-is-gas",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v('\n                    "Gas" is the name for a special unit used in BSC. It measures how much\n                    "work" an action or set of actions takes to perform.'), a("br"), t._v("\n                    Every operation that can be performed by a transaction or contract on the\n                    BSC platform costs a certain number of gas, with operations that require\n                    more computational resources costing more gas than operations that require few\n                    computational resources."), a("br"), t._v("\n                    The reason gas is important is that it helps to ensure an appropriate fee is\n                    being paid by transactions submitted to the network. By requiring that a\n                    transaction pay for each operation it performs (or causes a contract to\n                    perform), we ensure that network doesn't become bogged down with performing\n                    a lot of intensive work that isn't valuable to anyone.\n                  ")])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://bscscan.com/gastracker",
                    target: "_blank"
                }
            }, [t._v("\n                  BscScan Gas tracker\n                ")])], 1)], 1), t._v(" "), a("b-card", {
                attrs: {
                    "no-body": "",
                    "bg-variant": "light",
                    itemscope: "",
                    itemprop: "mainEntity",
                    itemtype: "https://schema.org/Question"
                }
            }, [a("b-card-header", {
                attrs: {
                    role: "tab"
                }
            }, [a("a", {
                directives: [{
                    name: "b-toggle",
                    rawName: "v-b-toggle"
                }],
                staticClass: "btn-block text-reset text-decoration-none",
                attrs: {
                    href: "#connect-metamask-to-bsc"
                },
                on: {
                    click: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("span", {
                attrs: {
                    itemprop: "name"
                }
            }, [t._v("\n                    How to connect MetaMask to Binance Smart Chain\n                  ")])])]), t._v(" "), a("b-collapse", {
                staticClass: "p-4",
                attrs: {
                    id: "connect-metamask-to-bsc",
                    accordion: "bsc-accordion"
                }
            }, [a("b-card-text", {
                attrs: {
                    itemscope: "",
                    itemprop: "acceptedAnswer",
                    itemtype: "https://schema.org/Answer"
                }
            }, [a("span", {
                attrs: {
                    itemprop: "text"
                }
            }, [t._v("\n                    You need to access the "), a("b", [t._v("Settings")]), t._v(" to point the wallet towards Binance Smart\n                    Chain nodes. On the Settings page, locate the "), a("b", [t._v("Networks")]), t._v(" menu.\n                    Click "), a("b", [t._v("Add Network")]), t._v(" in the top-right corner to manually add the Binance\n                    Smart Chain one."), a("br"), t._v("\n                    There are two networks we can use here:\n                    the testnet or the mainnet. Below are the parameters to fill in for each.\n                    "), a("br"), a("br"), t._v(" "), a("b", [t._v("Mainnet (This is the one you are probably looking for)")]), t._v(" "), a("ul", [a("li", [t._v("Network Name: Binance Smart Chain")]), t._v(" "), a("li", [t._v("New RPC URL: https://bsc-dataseed.binance.org/")]), t._v(" "), a("li", [t._v("ChainID: 56")]), t._v(" "), a("li", [t._v("Symbol: BNB")]), t._v(" "), a("li", [t._v("Block Explorer URL: https://bscscan.com")])]), t._v(" "), a("b", [t._v("Testnet")]), t._v(" "), a("ul", [a("li", [t._v("Network Name: Binance Smart Chain - Testnet")]), t._v(" "), a("li", [t._v("New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/")]), t._v(" "), a("li", [t._v("ChainID: 97")]), t._v(" "), a("li", [t._v("Symbol: BNB")]), t._v(" "), a("li", [t._v("Block Explorer URL: https://testnet.bscscan.com")])])])]), t._v(" "), a("b-link", {
                staticClass: "card-link",
                attrs: {
                    href: "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
                    target: "_blank"
                }
            }, [t._v("\n                  More details\n                ")])], 1)], 1)], 1)])] : t._e()], 2)], 1), t._v(" "), a("b-row", [a("b-col", [a("b-alert", {
                staticClass: "mt-4",
                attrs: {
                    show: "",
                    variant: "warning"
                }
            }, [a("h4", {
                staticClass: "alert-heading"
            }, [t._v("DISCLAIMER")]), t._v(" "), a("p", [a("b", [t._v("SmartContracts Tools")]), t._v(" and its company are free of any liability regarding Tokens built using Token\n          Generator, and the use that is made of them. Tokens built on Token Generator, their projects, their teams,\n          their use of Token (as well as anything related to Token) are in no way connected to SmartContracts Tools\n          or its company.\n        ")]), t._v(" "), a("hr"), t._v(" "), a("small", [t._v("\n          Token source code is provided under MIT License. Source code has been tested with 100%  coverage and\n          continuously updated to reduce risk of bugs and to introduce language optimizations. Anyway the\n          purchase of tokens involves a high degree of risk. Before acquiring tokens, it is recommended to carefully\n          weighs all the information and risks detailed in Token owner's Conditions.\n        ")])])], 1)], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    }
}]);
