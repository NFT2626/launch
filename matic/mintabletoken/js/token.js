var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) { return a.raw = a };
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) { a.raw = b; return a };
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};
$jscomp.getGlobal = function(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
    var c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function(a, b, c, f) { b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, f) : $jscomp.polyfillUnisolated(a, b, c, f)) };
$jscomp.polyfillUnisolated = function(a, b, c, f) {
    c = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
        var e = a[f];
        if (!(e in c)) return;
        c = c[e]
    }
    a = a[a.length - 1];
    f = c[a];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b })
};
$jscomp.polyfillIsolated = function(a, b, c, f) {
    var e = a.split(".");
    a = 1 === e.length;
    f = e[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var h = 0; h < e.length - 1; h++) {
        var d = e[h];
        if (!(d in f)) return;
        f = f[d]
    }
    e = e[e.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? f[e] : null;
    b = b(c);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, { configurable: !0, writable: !0, value: b }) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && (c = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ?
        $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + c + "$" + e), $jscomp.defineProperty(f, $jscomp.propertyToPolyfillSymbol[e], { configurable: !0, writable: !0, value: b })))
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = { a: !0 },
        b = {};
    try { return b.__proto__ = a, b.a } catch (c) {}
    return !1
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null;
$jscomp.arrayIteratorImpl = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
$jscomp.arrayIterator = function(a) { return { next: $jscomp.arrayIteratorImpl(a) } };
$jscomp.makeIterator = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : $jscomp.arrayIterator(a) };
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(a) { if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object"); };
$jscomp.generator.Context = function() {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null
};
$jscomp.generator.Context.prototype.start_ = function() {
    if (this.isRunning_) throw new TypeError("Generator is already running");
    this.isRunning_ = !0
};
$jscomp.generator.Context.prototype.stop_ = function() { this.isRunning_ = !1 };
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() { this.nextAddress = this.catchAddress_ || this.finallyAddress_ };
$jscomp.generator.Context.prototype.next_ = function(a) { this.yieldResult = a };
$jscomp.generator.Context.prototype.throw_ = function(a) {
    this.abruptCompletion_ = { exception: a, isException: !0 };
    this.jumpToErrorHandler_()
};
$jscomp.generator.Context.prototype["return"] = function(a) {
    this.abruptCompletion_ = { "return": a };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(a) {
    this.abruptCompletion_ = { jumpTo: a };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.yield = function(a, b) { this.nextAddress = b; return { value: a } };
$jscomp.generator.Context.prototype.yieldAll = function(a, b) {
    var c = $jscomp.makeIterator(a),
        f = c.next();
    $jscomp.generator.ensureIteratorResultIsObject_(f);
    if (f.done) this.yieldResult = f.value, this.nextAddress = b;
    else return this.yieldAllIterator_ = c, this.yield(f.value, b)
};
$jscomp.generator.Context.prototype.jumpTo = function(a) { this.nextAddress = a };
$jscomp.generator.Context.prototype.jumpToEnd = function() { this.nextAddress = 0 };
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(a, b) {
    this.catchAddress_ = a;
    void 0 != b && (this.finallyAddress_ = b)
};
$jscomp.generator.Context.prototype.setFinallyBlock = function(a) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0
};
$jscomp.generator.Context.prototype.leaveTryBlock = function(a, b) {
    this.nextAddress = a;
    this.catchAddress_ = b || 0
};
$jscomp.generator.Context.prototype.enterCatchBlock = function(a) {
    this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return a
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function(a, b, c) {
    c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = b || 0
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(a, b) {
    var c = this.finallyContexts_.splice(b || 0)[0];
    if (c = this.abruptCompletion_ = this.abruptCompletion_ || c) {
        if (c.isException) return this.jumpToErrorHandler_();
        void 0 != c.jumpTo && this.finallyAddress_ < c.jumpTo ? (this.nextAddress = c.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
    } else this.nextAddress = a
};
$jscomp.generator.Context.prototype.forIn = function(a) { return new $jscomp.generator.Context.PropertyIterator(a) };
$jscomp.generator.Context.PropertyIterator = function(a) {
    this.object_ = a;
    this.properties_ = [];
    for (var b in a) this.properties_.push(b);
    this.properties_.reverse()
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() { for (; 0 < this.properties_.length;) { var a = this.properties_.pop(); if (a in this.object_) return a } return null };
$jscomp.generator.Engine_ = function(a) {
    this.context_ = new $jscomp.generator.Context;
    this.program_ = a
};
$jscomp.generator.Engine_.prototype.next_ = function(a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.return_ = function(a) {
    this.context_.start_();
    var b = this.context_.yieldAllIterator_;
    if (b) return this.yieldAllStep_("return" in b ? b["return"] : function(c) { return { value: c, done: !0 } }, a, this.context_["return"]);
    this.context_["return"](a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.throw_ = function(a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(a, b, c) {
    try {
        var f = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(f);
        if (!f.done) return this.context_.stop_(), f;
        var e = f.value
    } catch (h) { return this.context_.yieldAllIterator_ = null, this.context_.throw_(h), this.nextStep_() }
    this.context_.yieldAllIterator_ = null;
    c.call(this.context_, e);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.nextStep_ = function() {
    for (; this.context_.nextAddress;) try { var a = this.program_(this.context_); if (a) return this.context_.stop_(), { value: a.value, done: !1 } } catch (b) { this.context_.yieldResult = void 0, this.context_.throw_(b) }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException) throw a.exception;
        return { value: a["return"], done: !0 }
    }
    return { value: void 0, done: !0 }
};
$jscomp.generator.Generator_ = function(a) {
    this.next = function(b) { return a.next_(b) };
    this["throw"] = function(b) { return a.throw_(b) };
    this["return"] = function(b) { return a.return_(b) };
    this[Symbol.iterator] = function() { return this }
};
$jscomp.generator.createGenerator = function(a, b) {
    var c = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
    $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(c, a.prototype);
    return c
};
$jscomp.asyncExecutePromiseGenerator = function(a) {
    function b(f) { return a.next(f) }

    function c(f) { return a["throw"](f) }
    return new Promise(function(f, e) {
        function h(d) { d.done ? f(d.value) : Promise.resolve(d.value).then(b, c).then(h, e) }
        h(a.next())
    })
};
$jscomp.asyncExecutePromiseGeneratorFunction = function(a) { return $jscomp.asyncExecutePromiseGenerator(a()) };
$jscomp.asyncExecutePromiseGeneratorProgram = function(a) { return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a))) };
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) {
    if (a) return a;
    var b = function(h, d) {
        this.$jscomp$symbol$id_ = h;
        $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: d })
    };
    b.prototype.toString = function() { return this.$jscomp$symbol$id_ };
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        f = 0,
        e = function(h) { if (this instanceof e) throw new TypeError("Symbol is not a constructor"); return new b(c + (h || "") + "_" + f++, h) };
    return e
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var f = $jscomp.global[b[c]]; "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, { configurable: !0, writable: !0, value: function() { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }) }
        return a
    }, "es6",
    "es3");
$jscomp.iteratorPrototype = function(a) {
    a = { next: a };
    a[Symbol.iterator] = function() { return this };
    return a
};
$jscomp.polyfill("Promise", function(a) {
    function b() { this.batch_ = null }

    function c(d) { return d instanceof e ? d : new e(function(g, k) { g(d) }) }
    if (a && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))) return a;
    b.prototype.asyncExecute = function(d) {
        if (null == this.batch_) {
            this.batch_ = [];
            var g = this;
            this.asyncExecuteFunction(function() { g.executeBatch_() })
        }
        this.batch_.push(d)
    };
    var f = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function(d) { f(d, 0) };
    b.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var d = this.batch_;
            this.batch_ = [];
            for (var g = 0; g < d.length; ++g) {
                var k = d[g];
                d[g] = null;
                try { k() } catch (l) { this.asyncThrow_(l) }
            }
        }
        this.batch_ = null
    };
    b.prototype.asyncThrow_ = function(d) { this.asyncExecuteFunction(function() { throw d; }) };
    var e = function(d) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var g = this.createResolveAndReject_();
        try { d(g.resolve, g.reject) } catch (k) { g.reject(k) }
    };
    e.prototype.createResolveAndReject_ = function() {
        function d(l) { return function(n) { k || (k = !0, l.call(g, n)) } }
        var g = this,
            k = !1;
        return { resolve: d(this.resolveTo_), reject: d(this.reject_) }
    };
    e.prototype.resolveTo_ = function(d) {
        if (d === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (d instanceof e) this.settleSameAsPromise_(d);
        else {
            a: switch (typeof d) {
                case "object":
                    var g = null != d;
                    break a;
                case "function":
                    g = !0;
                    break a;
                default:
                    g = !1
            }
            g ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d)
        }
    };
    e.prototype.resolveToNonPromiseObj_ = function(d) { var g = void 0; try { g = d.then } catch (k) { this.reject_(k); return } "function" == typeof g ? this.settleSameAsThenable_(g, d) : this.fulfill_(d) };
    e.prototype.reject_ = function(d) { this.settle_(2, d) };
    e.prototype.fulfill_ = function(d) { this.settle_(1, d) };
    e.prototype.settle_ = function(d, g) {
        if (0 != this.state_) throw Error("Cannot settle(" + d + ", " + g + "): Promise already settled in state" + this.state_);
        this.state_ = d;
        this.result_ = g;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_()
    };
    e.prototype.scheduleUnhandledRejectionCheck_ = function() {
        var d = this;
        f(function() { if (d.notifyUnhandledRejection_()) { var g = $jscomp.global.console; "undefined" !== typeof g && g.error(d.result_) } }, 1)
    };
    e.prototype.notifyUnhandledRejection_ = function() {
        if (this.isRejectionHandled_) return !1;
        var d = $jscomp.global.CustomEvent,
            g = $jscomp.global.Event,
            k = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof d ? d = new d("unhandledrejection", { cancelable: !0 }) :
            "function" === typeof g ? d = new g("unhandledrejection", { cancelable: !0 }) : (d = $jscomp.global.document.createEvent("CustomEvent"), d.initCustomEvent("unhandledrejection", !1, !0, d));
        d.promise = this;
        d.reason = this.result_;
        return k(d)
    };
    e.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var d = 0; d < this.onSettledCallbacks_.length; ++d) h.asyncExecute(this.onSettledCallbacks_[d]);
            this.onSettledCallbacks_ = null
        }
    };
    var h = new b;
    e.prototype.settleSameAsPromise_ = function(d) {
        var g = this.createResolveAndReject_();
        d.callWhenSettled_(g.resolve, g.reject)
    };
    e.prototype.settleSameAsThenable_ = function(d, g) { var k = this.createResolveAndReject_(); try { d.call(g, k.resolve, k.reject) } catch (l) { k.reject(l) } };
    e.prototype.then = function(d, g) {
        function k(p, q) { return "function" == typeof p ? function(r) { try { l(p(r)) } catch (t) { n(t) } } : q }
        var l, n, m = new e(function(p, q) {
            l = p;
            n = q
        });
        this.callWhenSettled_(k(d, l), k(g, n));
        return m
    };
    e.prototype["catch"] = function(d) { return this.then(void 0, d) };
    e.prototype.callWhenSettled_ = function(d, g) {
        function k() {
            switch (l.state_) {
                case 1:
                    d(l.result_);
                    break;
                case 2:
                    g(l.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + l.state_);
            }
        }
        var l = this;
        null == this.onSettledCallbacks_ ? h.asyncExecute(k) : this.onSettledCallbacks_.push(k);
        this.isRejectionHandled_ = !0
    };
    e.resolve = c;
    e.reject = function(d) { return new e(function(g, k) { k(d) }) };
    e.race = function(d) { return new e(function(g, k) { for (var l = $jscomp.makeIterator(d), n = l.next(); !n.done; n = l.next()) c(n.value).callWhenSettled_(g, k) }) };
    e.all = function(d) {
        var g = $jscomp.makeIterator(d),
            k = g.next();
        return k.done ? c([]) : new e(function(l,
            n) {
            function m(r) {
                return function(t) {
                    p[r] = t;
                    q--;
                    0 == q && l(p)
                }
            }
            var p = [],
                q = 0;
            do p.push(void 0), q++, c(k.value).callWhenSettled_(m(p.length - 1), n), k = g.next(); while (!k.done)
        })
    };
    return e
}, "es6", "es3");
$(".erc").html(" (ERC-20)");
$(".changenet").each(function() { this.href += "mintabletoken/" });
var contractAddressMain = "0xfC36e31c4facD0fbe36af60F2d6079Ba07d59c95",
    contractAddressTest = "0xf3c1B97Ba716DD79076369a25036Ba966B3eD284",
    builderCost, contractThis, contractThisSign, balanceEth, thisDecimals, maxDecimals = 18,
    abi = [{ inputs: [{ internalType: "uint256", name: "_cost", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "oldBeneficiary", type: "address" }, { indexed: !0, internalType: "address", name: "newBeneficiary", type: "address" }],
        name: "BeneficiarySet",
        type: "event"
    }, { inputs: [{ internalType: "address", name: "newBeneficiary", type: "address" }], name: "changeBeneficiary", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_newcost", type: "uint256" }], name: "changeCost", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "changeOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "newCost",
            type: "uint256"
        }],
        name: "Cost",
        type: "event"
    }, { inputs: [{ internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "uint256", name: "decimals", type: "uint256" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }, { internalType: "address", name: "to", type: "address" }], name: "createToken", outputs: [{ internalType: "address", name: "tokenAddress", type: "address" }], stateMutability: "payable", type: "function" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "oldOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }],
        name: "OwnerSet",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "tokenCreator", type: "address" }, { indexed: !0, internalType: "address", name: "tokenAddress", type: "address" }, { indexed: !1, internalType: "string", name: "name", type: "string" }, { indexed: !1, internalType: "string", name: "symbol", type: "string" }, {
            indexed: !1,
            internalType: "uint256",
            name: "decimals",
            type: "uint256"
        }, { indexed: !1, internalType: "uint256", name: "totalSupply", type: "uint256" }],
        name: "TokenCreated",
        type: "event"
    }, { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "beneficiary", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "cost", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [{ internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" }
        ],
        name: "mytokens",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
    }, { inputs: [], name: "myTokens", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
        inputs: [],
        name: "totalBuilt",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    }],
    abiToken = [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "uint256", name: "_dec", type: "uint256" }, { internalType: "uint256", name: "_supply", type: "uint256" }, { internalType: "address", name: "_owner", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }],
        name: "Approval",
        type: "event"
    }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "oldOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnerSet", type: "event" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }],
        name: "Transfer",
        type: "event"
    }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "allowed", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, { internalType: "uint256", name: "value", type: "uint256" }],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "balances",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function"
    }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "burn", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "burnFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [{
            internalType: "address",
            name: "recipient",
            type: "address"
        }, { internalType: "uint256", name: "amount", type: "uint256" }],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, {
        inputs: [{
            internalType: "address",
            name: "from",
            type: "address"
        }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function"
    }];

function init() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
        if (1 == a.nextAddress) return $("#strHtml").html(""), contract = new ethers.Contract(contractAddress, abi, provider), contractSign = contract.connect(signer), a.yield(contract.cost(), 2);
        builderCost = a.yieldResult;
        $("#buildercost").html(ethers.utils.formatEther(builderCost));
        $("#newto").val(myAddress);
        filter = contract.filters.TokenCreated(myAddress);
        contract.on(filter, function(b, c, f, e, h, d) {
            console.log("New token - " + f + " (" + e + ") - created at address " +
                c + ".");
            makeTable()
        });
        makeTable();
        a.jumpToEnd()
    })
}

function makeTable() {
    var a, b, c, f, e, h, d, g, k, l, n;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(m) {
        switch (m.nextAddress) {
            case 1:
                return a = "", m.yield(contract.myTokens({ from: myAddress }), 2);
            case 2:
                b = m.yieldResult;
                if (b == []) { m.jumpTo(3); break }
                c = b;
                f = 0;
            case 4:
                if (!(f < c.length)) { m.jumpTo(3); break }
                e = c[f];
                h = new ethers.Contract(e, abiToken, provider);
                return m.yield(h.name(), 7);
            case 7:
                return d = m.yieldResult, m.yield(h.symbol(), 8);
            case 8:
                return g = m.yieldResult, m.yield(h.decimals(), 9);
            case 9:
                return k = m.yieldResult,
                    m.yield(h.totalSupply(), 10);
            case 10:
                l = m.yieldResult;
                n = Number(f + 1);
                a = a + "<tr><td>" + n + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + e + '">' + e + "</a></td><td>" + d + "</td><td>" + g + "</td><td>" + k + "</td><td>" + ethers.utils.formatUnits(l, k) + '</td><td><span title="Admin panel" class="clickable" onclick="tokenAdmin(\'' + e + '\')">admin</span></td><td><span title="Add to wallet" class="clickable" onclick="watchToken(\'' + e + "', '" + g + "', " + k + ')">add</span></td>';
                a += "</tr>";
                f++;
                m.jumpTo(4);
                break;
            case 3:
                $("#strHtml").html(a),
                    m.jumpToEnd()
        }
    })
}

function tokenAdmin(a) {
    var b, c, f, e;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(h) {
        switch (h.nextAddress) {
            case 1:
                return $("#admin").show(), $("#thisAddr").html(a), $("#viewThis").html('<a title="View on explorer" target="_blank" href="' + tracker + a + '">' + a + "</a>"), contractThis = new ethers.Contract(a, abiToken, provider), contractThisSign = contractThis.connect(signer), h.yield(contractThis.name(), 2);
            case 2:
                return b = h.yieldResult, $("#thisName").html(b), h.yield(contractThis.symbol(), 3);
            case 3:
                return c =
                    h.yieldResult, $("#thisSymbol").html(c), h.yield(contractThis.decimals(), 4);
            case 4:
                return thisDecimals = h.yieldResult, $("#thisDec").html(Number(thisDecimals)), h.yield(contractThis.totalSupply(), 5);
            case 5:
                return f = h.yieldResult, $("#thisSupply").html(ethers.utils.formatUnits(f, thisDecimals)), h.yield(contractThis.balanceOf(myAddress), 6);
            case 6:
                e = h.yieldResult, $("#thisBalance").html(ethers.utils.formatUnits(e, thisDecimals)), $("#mintTo").val(myAddress), h.jumpToEnd()
        }
    })
}

function updateSupply() {
    var a, b;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(c) {
        if (1 == c.nextAddress) return makeTable(), c.yield(contractThis.totalSupply(), 2);
        if (3 != c.nextAddress) return a = c.yieldResult, $("#thisSupply").html(ethers.utils.formatUnits(a, thisDecimals)), c.yield(contractThis.balanceOf(myAddress), 3);
        b = c.yieldResult;
        $("#thisBalance").html(ethers.utils.formatUnits(b, thisDecimals));
        c.jumpToEnd()
    })
}
$("#mintBtn").click(function() {
    var a, b;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(c) {
        if (1 == c.nextAddress) return a = ethers.utils.parseUnits($("#mintAmount").val(), thisDecimals), b = $("#mintTo").val(), a && b ? c.yield(contractThisSign.mint(String(b), String(a), { gasLimit: 1E6 }), 3) : c.jumpTo(0);
        if (4 != c.nextAddress) return tx = c.yieldResult, c.yield(tx.wait(), 4);
        updateSupply();
        c.jumpToEnd()
    })
});
$("#burnBtn").click(function() {
    var a;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
        if (1 == b.nextAddress) return (a = ethers.utils.parseUnits($("#burnAmount").val(), thisDecimals)) ? b.yield(contractThisSign.burn(String(a), { gasLimit: 1E6 }), 3) : b.jumpTo(0);
        if (4 != b.nextAddress) return tx = b.yieldResult, b.yield(tx.wait(), 4);
        updateSupply();
        b.jumpToEnd()
    })
});
$("#changeOwner").click(function() {
    var a;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
        if (1 == b.nextAddress) return (a = $("#newOwner").val()) ? b.yield(contractThisSign.setOwner(String(a), { gasLimit: 1E6 }), 3) : b.jumpTo(0);
        if (4 != b.nextAddress) return tx = b.yieldResult, b.yield(tx.wait(), 4);
        init();
        b.jumpToEnd()
    })
});

function watchToken(a, b, c) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(f) {
        ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: String(a), symbol: String(b), decimals: String(c) } } });
        f.jumpToEnd()
    })
}
$("#buildbtn").click(function() {
    var a, b, c, f, e;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(h) {
        if (1 == h.nextAddress) {
            a = $("#newname").val();
            b = $("#newsymbol").val();
            c = $("#newdecimals").val();
            f = $("#newsupply").val();
            e = $("#newto").val();
            "" == e && (e = myAddress, $("#newto").val(e));
            if (!("" != a && "" != b && f && c && Number(c) <= Number(maxDecimals))) return $("#errors").html("Error: fields are empty or incorrect!"), h.jumpTo(0);
            $("#errors").html("");
            return h.yield(contractSign.createToken(String(a), String(b),
                String(c), String(f), String(e), { value: builderCost }), 3)
        }
        if (4 != h.nextAddress) return tx = h.yieldResult, h.yield(tx.wait(), 4);
        makeTable();
        h.jumpToEnd()
    })
});
$("#newdecimals").change(function() {
    decval = $("#newdecimals").val();
    0 > Number(decval) && $("#newdecimals").val(0);
    Number(decval) > Number(maxDecimals) && $("#newdecimals").val(maxDecimals)
});