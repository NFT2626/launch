var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var d=$jscomp.propertyToPolyfillSymbol[b];if(null==d)return a[b];d=a[d];return void 0!==d?d:a[b]};$jscomp.polyfill=function(a,b,d,g){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,d,g):$jscomp.polyfillUnisolated(a,b,d,g))};
$jscomp.polyfillUnisolated=function(a,b,d,g){d=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var e=a[g];if(!(e in d))return;d=d[e]}a=a[a.length-1];g=d[a];b=b(g);b!=g&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,d,g){var e=a.split(".");a=1===e.length;g=e[0];g=!a&&g in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var m=0;m<e.length-1;m++){var c=e[m];if(!(c in g))return;g=g[c]}e=e[e.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?g[e]:null;b=b(d);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==d&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&(d=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+d+"$"+e),$jscomp.defineProperty(g,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(d){}return!1};
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};
$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){var d=$jscomp.makeIterator(a),g=d.next();$jscomp.generator.ensureIteratorResultIsObject_(g);if(g.done)this.yieldResult=g.value,this.nextAddress=b;else return this.yieldAllIterator_=d,this.yield(g.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,d){d?this.finallyContexts_[d]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var d=this.finallyContexts_.splice(b||0)[0];if(d=this.abruptCompletion_=this.abruptCompletion_||d){if(d.isException)return this.jumpToErrorHandler_();void 0!=d.jumpTo&&this.finallyAddress_<d.jumpTo?(this.nextAddress=d.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(d){return{value:d,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,d){try{var g=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(g);if(!g.done)return this.context_.stop_(),g;var e=g.value}catch(m){return this.context_.yieldAllIterator_=null,this.context_.throw_(m),this.nextStep_()}this.context_.yieldAllIterator_=null;d.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var d=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(d,a.prototype);return d};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(g){return a.next(g)}function d(g){return a["throw"](g)}return new Promise(function(g,e){function m(c){c.done?g(c.value):Promise.resolve(c.value).then(b,d).then(m,e)}m(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
$jscomp.initSymbol=function(){};$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(m,c){this.$jscomp$symbol$id_=m;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:c})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0,e=function(m){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(d+(m||"")+"_"+g++,m)};return e},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var g=$jscomp.global[b[d]];"function"===typeof g&&"function"!=typeof g.prototype[a]&&$jscomp.defineProperty(g.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function d(c){return c instanceof e?c:new e(function(f,k){f(c)})}if(a&&(!($jscomp.FORCE_POLYFILL_PROMISE||$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION&&"undefined"===typeof $jscomp.global.PromiseRejectionEvent)||!$jscomp.global.Promise||-1===$jscomp.global.Promise.toString().indexOf("[native code]")))return a;b.prototype.asyncExecute=function(c){if(null==this.batch_){this.batch_=[];var f=this;this.asyncExecuteFunction(function(){f.executeBatch_()})}this.batch_.push(c)};
var g=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(c){g(c,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var c=this.batch_;this.batch_=[];for(var f=0;f<c.length;++f){var k=c[f];c[f]=null;try{k()}catch(l){this.asyncThrow_(l)}}}this.batch_=null};b.prototype.asyncThrow_=function(c){this.asyncExecuteFunction(function(){throw c;})};var e=function(c){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];this.isRejectionHandled_=!1;var f=this.createResolveAndReject_();
try{c(f.resolve,f.reject)}catch(k){f.reject(k)}};e.prototype.createResolveAndReject_=function(){function c(l){return function(n){k||(k=!0,l.call(f,n))}}var f=this,k=!1;return{resolve:c(this.resolveTo_),reject:c(this.reject_)}};e.prototype.resolveTo_=function(c){if(c===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof e)this.settleSameAsPromise_(c);else{a:switch(typeof c){case "object":var f=null!=c;break a;case "function":f=!0;break a;default:f=!1}f?this.resolveToNonPromiseObj_(c):
this.fulfill_(c)}};e.prototype.resolveToNonPromiseObj_=function(c){var f=void 0;try{f=c.then}catch(k){this.reject_(k);return}"function"==typeof f?this.settleSameAsThenable_(f,c):this.fulfill_(c)};e.prototype.reject_=function(c){this.settle_(2,c)};e.prototype.fulfill_=function(c){this.settle_(1,c)};e.prototype.settle_=function(c,f){if(0!=this.state_)throw Error("Cannot settle("+c+", "+f+"): Promise already settled in state"+this.state_);this.state_=c;this.result_=f;2===this.state_&&this.scheduleUnhandledRejectionCheck_();
this.executeOnSettledCallbacks_()};e.prototype.scheduleUnhandledRejectionCheck_=function(){var c=this;g(function(){if(c.notifyUnhandledRejection_()){var f=$jscomp.global.console;"undefined"!==typeof f&&f.error(c.result_)}},1)};e.prototype.notifyUnhandledRejection_=function(){if(this.isRejectionHandled_)return!1;var c=$jscomp.global.CustomEvent,f=$jscomp.global.Event,k=$jscomp.global.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):
"function"===typeof f?c=new f("unhandledrejection",{cancelable:!0}):(c=$jscomp.global.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.result_;return k(c)};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var c=0;c<this.onSettledCallbacks_.length;++c)m.asyncExecute(this.onSettledCallbacks_[c]);this.onSettledCallbacks_=null}};var m=new b;e.prototype.settleSameAsPromise_=function(c){var f=this.createResolveAndReject_();
c.callWhenSettled_(f.resolve,f.reject)};e.prototype.settleSameAsThenable_=function(c,f){var k=this.createResolveAndReject_();try{c.call(f,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(c,f){function k(p,q){return"function"==typeof p?function(t){try{l(p(t))}catch(h){n(h)}}:q}var l,n,r=new e(function(p,q){l=p;n=q});this.callWhenSettled_(k(c,l),k(f,n));return r};e.prototype["catch"]=function(c){return this.then(void 0,c)};e.prototype.callWhenSettled_=function(c,f){function k(){switch(l.state_){case 1:c(l.result_);
break;case 2:f(l.result_);break;default:throw Error("Unexpected state: "+l.state_);}}var l=this;null==this.onSettledCallbacks_?m.asyncExecute(k):this.onSettledCallbacks_.push(k);this.isRejectionHandled_=!0};e.resolve=d;e.reject=function(c){return new e(function(f,k){k(c)})};e.race=function(c){return new e(function(f,k){for(var l=$jscomp.makeIterator(c),n=l.next();!n.done;n=l.next())d(n.value).callWhenSettled_(f,k)})};e.all=function(c){var f=$jscomp.makeIterator(c),k=f.next();return k.done?d([]):new e(function(l,
n){function r(t){return function(h){p[t]=h;q--;0==q&&l(p)}}var p=[],q=0;do p.push(void 0),q++,d(k.value).callWhenSettled_(r(p.length-1),n),k=f.next();while(!k.done)})};return e},"es6","es3");
var trackerMain="https://etherscan.io/",trackerTest="https://ropsten.etherscan.io/",tokentracker,mainnet=1,mainnetAlt=1,testnet=3,mainnetname="Ethereum Mainnet",testnetname="Ropsten Test Network",wrongnet='<span class="err">Please use Ethereum Mainnet</span>',wrongnetTest='<span class="err">Please use Ropsten Test Network</span>',tokenDecimals,tokenSymbol,price,pricedec,qty=0,buyAmount=0,saleOn,available,contractSale,contractSaleSign,contractToken,abiSale=[{inputs:[{internalType:"address",name:"_tokenAddress",
type:"address"},{internalType:"uint256",name:"_saleQuantity",type:"uint256"},{internalType:"uint256",name:"_salePrice",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"},{internalType:"uint256",name:"_refPercent",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"quantity",type:"uint256"}],
name:"TokenSold",type:"event"},{inputs:[{internalType:"address",name:"_ref",type:"address"}],name:"buyToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"endTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"refEarnings",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"refPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"refTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"saleQuantity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"startTime",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSold",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unsoldQuantity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAll",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],abiToken=[{inputs:[{internalType:"string",
name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256",name:"_dec",type:"uint256"},{internalType:"uint256",name:"_supply",type:"uint256"},{internalType:"uint256",name:"_tax1",type:"uint256"},{internalType:"address",name:"_address1",type:"address"},{internalType:"uint256",name:"_tax2",type:"uint256"},{internalType:"address",name:"_address2",type:"address"},{internalType:"uint256",name:"_deflation",type:"uint256"},{internalType:"uint256",name:"_minSupply",
type:"uint256"},{internalType:"address",name:"_owner",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},
{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"addressTax1",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"addressTax2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burnt",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"initialSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minSupply",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],
stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalTax1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalTax2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",
name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],network,curnet,tracker,myAddress,signer,provider,refLink="0x0000000000000000000000000000000000000000";
$(function(){$("#buyBtn").prop("disabled",!0);getQR();connect()});function connect(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){provider=new ethers.providers.Web3Provider(window.ethereum,"any");provider.on("network",function(b,d){d&&getNetwork()});ethereum.on("accountsChanged",function(b){getNetwork()});ethereum.on("connect",function(b){getNetwork()});getNetwork();a.jumpToEnd()})}
function getNetwork(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){if(1==a.nextAddress)return a.yield(provider.getNetwork(),2);network=a.yieldResult;curnet=network.chainId;curnet==mainnet||curnet==mainnetAlt?($("#curnet").html(mainnetname),tracker=trackerMain,getAddress(),init()):curnet==testnet&&1==test?($("#curnet").html(testnetname),tracker=trackerTest,getAddress(),init()):(test=!0,$("#curnet").html(wrongnetTest),$("#myAddr").html(""),$("#buyBtn").prop("disabled",!0),$("#copyreflink").prop("disabled",
!0),$("#refqr").hide(),$("#refd").hide(),$("#refErr").show());a.jumpToEnd()})}
function getAddress(){var a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(b){switch(b.nextAddress){case 1:return signer=provider.getSigner(),b.setCatchFinallyBlocks(2),b.yield(signer.getAddress(),4);case 4:myAddress=b.yieldResult;b.leaveTryBlock(3);break;case 2:a=b.enterCatchBlock(),console.log(a),!myAddress&&window.ethereum&&ethereum.request({method:"eth_requestAccounts"}).then(getNetwork);case 3:$("#myAddr").html(myAddress),myAddress?($("#buyBtn").prop("disabled",!1),$("#errors").html("")):
($("#buyBtn").prop("disabled",!0),$("#errors").html("Please connect to your wallet!")),b.jumpToEnd()}})}
function init(){var a,b,d,g,e,m,c,f,k,l,n,r,p,q,t;return $jscomp.asyncExecutePromiseGeneratorProgram(function(h){switch(h.nextAddress){case 1:return getUrlParams(),$("#saleAddress").html(contractAddressSale),$("#saleAddress").attr("href",tracker+"address/"+contractAddressSale),contractSale=new ethers.Contract(contractAddressSale,abiSale,provider),contractSaleSign=contractSale.connect(signer),contractToken=new ethers.Contract(contractAddressToken,abiToken,provider),$("#tokenAddress").html(contractAddressToken),
$("#tokenAddress").attr("href",tracker+"token/"+contractAddressToken),h.yield(contractToken.name(),2);case 2:return a=h.yieldResult,$("#tokenName").html(a),h.yield(contractToken.symbol(),3);case 3:return tokenSymbol=h.yieldResult,$("#tokenSymbol").html(tokenSymbol),h.yield(contractToken.decimals(),4);case 4:return tokenDecimals=h.yieldResult,$("#tokenDecimals").html(Number(tokenDecimals)),h.yield(contractToken.totalSupply(),5);case 5:return b=h.yieldResult,$("#tokenSupply").html(Number(ethers.utils.formatUnits(b,
tokenDecimals)).toFixed(0)),h.yield(contractToken.balanceOf(myAddress),6);case 6:return d=h.yieldResult,$("#myTokens").html(Number(ethers.utils.formatUnits(d,tokenDecimals))),h.yield(contractSale.saleQuantity(),7);case 7:return g=h.yieldResult,$("#quantity").html(Number(ethers.utils.formatUnits(g,tokenDecimals))),h.yield(contractSale.totalSold(),8);case 8:return e=h.yieldResult,$("#sold").html(Number(ethers.utils.formatUnits(e,tokenDecimals))),h.yield(contractSale.unsoldQuantity(),9);case 9:return m=
h.yieldResult,available=ethers.utils.formatUnits(m,tokenDecimals),$("#unsold").html(Number(available)),h.yield(contractSale.tokenPrice(),10);case 10:return pricedec=h.yieldResult,price=Number(ethers.utils.formatEther(pricedec)),$("#price").html(price),h.yield(contractSale.totalRaised(),11);case 11:return c=h.yieldResult,$("#raised").html(ethers.utils.formatEther(c)),$("#progress").attr("max",g),$("#progress").attr("value",e),h.yield(contractSale.startTime(),12);case 12:return f=h.yieldResult,k=new Date(1E3*
Number(f)),$("#start").html(k),h.yield(contractSale.endTime(),13);case 13:l=h.yieldResult;n=new Date(1E3*Number(l));$("#end").html(n);if(Date.now()>=1E3*Number(f)&&Date.now()<=1E3*Number(l)&&0<m)r='<span style="color: green">Active</span>';else if(Date.now()<1E3*Number(f))r="Upcoming",$("#buyBtn").prop("disabled",!0);else if(Date.now()>1E3*Number(l)||0>=m)r='<span style="color: red">Finished</span>',$("#buyBtn").prop("disabled",!0);$("#status").html(r);return h.yield(contractSale.refTotal(),14);case 14:return p=
h.yieldResult,$("#refTotal").html(ethers.utils.formatEther(p)),h.yield(contractSale.refPercent(),15);case 15:return q=h.yieldResult,$("#refPercent").html(Number(q)/10),h.yield(contractSale.refEarnings(myAddress),16);case 16:t=h.yieldResult,$("#refMy").html(ethers.utils.formatEther(t)),referralLink(),calcRatio(),calcAmount(),h.jumpToEnd()}})}$("#buyQty").on("keyup input",function(){var a=Number($("#buyQty").val());0>a?a=0:a>Number(available)&&(a=Number(available));$("#buyQty").val(Number(a));calcAmount()});
function calcRatio(){var a=1*Math.pow(10,18)/(Number(price)*Math.pow(10,18));$("#ratio").html(a)}function calcAmount(){qty=Number($("#buyQty").val());buyAmount=Number(qty)*Number(price);$("#buyAmount").html(buyAmount)}$("#copyaddress").on("click",function(){var a=$("<textarea>");$("body").append(a);a.val($("#saleAddress").html()).select();document.execCommand("copy");a.remove()});
function copyToClipboard(a){var b=$("<textarea>");$("body").append(b);b.val($(a).val()).select();document.execCommand("copy");b.remove()}function getQR(){var a=encodeURIComponent(contractAddressSale);$("#saleqr").html('<img style="width: 300px; max-width: 80%" src="https://dappbuilder.org/php/qr.php?data='+a+'">');$("#saled").attr("href","https://dappbuilder.org/php/qr.php?data="+a)}
$("#buyBtn").click(function(){var a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(b){if(1==b.nextAddress){calcAmount();console.log(qty,buyAmount);if(!(0<qty&&0<buyAmount))return b.jumpTo(0);a=ethers.utils.parseEther(String(buyAmount));return b.yield(contractSaleSign.buyToken(String(refLink),{value:a,gasLimit:2E5}),3)}if(4!=b.nextAddress)return tx=b.yieldResult,b.yield(tx.wait(),4);init();b.jumpToEnd()})});
$("#addToken").click(function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:String(contractAddressToken),symbol:String(tokenSymbol),decimals:Number(tokenDecimals)}}});a.jumpToEnd()})});$("#copyreflink").on("click",function(){copyToClipboard("#referLink")});
function getRefQR(){var a=encodeURIComponent($("#referLink").val());$("#refqr").html('<img style="width: 300px; max-width: 80%" src="https://dappbuilder.org/php/qr.php?data='+a+'">');$("#refd").attr("href","https://dappbuilder.org/php/qr.php?data="+a)}
function getUrlParams(){var a=new URLSearchParams(window.location.search);!0===a.has("ref")&&""!==a.get("ref")&&ethers.utils.isAddress(a.get("ref"))?(refLink=a.get("ref"),$("#referrer").html(refLink)):($("#referrer").html("none"),refLink="0x0000000000000000000000000000000000000000")}
function referralLink(){myAddress?($("#referLink").val(window.location.href.split("?")[0]+"?ref="+myAddress),$("#copyreflink").prop("disabled",!1),$("#refqr").show(),$("#refd").show(),$("#refErr").hide(),getRefQR()):($("#copyreflink").prop("disabled",!0),$("#refqr").hide(),$("#refd").hide(),$("#refErr").show())};