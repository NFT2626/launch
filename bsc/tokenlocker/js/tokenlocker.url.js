var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var d=$jscomp.propertyToPolyfillSymbol[b];if(null==d)return a[b];d=a[d];return void 0!==d?d:a[b]};$jscomp.polyfill=function(a,b,d,f){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,d,f):$jscomp.polyfillUnisolated(a,b,d,f))};
$jscomp.polyfillUnisolated=function(a,b,d,f){d=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var e=a[f];if(!(e in d))return;d=d[e]}a=a[a.length-1];f=d[a];b=b(f);b!=f&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,d,f){var e=a.split(".");a=1===e.length;f=e[0];f=!a&&f in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var h=0;h<e.length-1;h++){var c=e[h];if(!(c in f))return;f=f[c]}e=e[e.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?f[e]:null;b=b(d);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==d&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&(d=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+d+"$"+e),$jscomp.defineProperty(f,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(d){}return!1};
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};
$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){var d=$jscomp.makeIterator(a),f=d.next();$jscomp.generator.ensureIteratorResultIsObject_(f);if(f.done)this.yieldResult=f.value,this.nextAddress=b;else return this.yieldAllIterator_=d,this.yield(f.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,d){d?this.finallyContexts_[d]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var d=this.finallyContexts_.splice(b||0)[0];if(d=this.abruptCompletion_=this.abruptCompletion_||d){if(d.isException)return this.jumpToErrorHandler_();void 0!=d.jumpTo&&this.finallyAddress_<d.jumpTo?(this.nextAddress=d.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(d){return{value:d,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,d){try{var f=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(f);if(!f.done)return this.context_.stop_(),f;var e=f.value}catch(h){return this.context_.yieldAllIterator_=null,this.context_.throw_(h),this.nextStep_()}this.context_.yieldAllIterator_=null;d.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var d=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(d,a.prototype);return d};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(f){return a.next(f)}function d(f){return a["throw"](f)}return new Promise(function(f,e){function h(c){c.done?f(c.value):Promise.resolve(c.value).then(b,d).then(h,e)}h(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
$jscomp.initSymbol=function(){};$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(h,c){this.$jscomp$symbol$id_=h;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:c})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0,e=function(h){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(d+(h||"")+"_"+f++,h)};return e},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var f=$jscomp.global[b[d]];"function"===typeof f&&"function"!=typeof f.prototype[a]&&$jscomp.defineProperty(f.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function d(c){return c instanceof e?c:new e(function(g,k){g(c)})}if(a&&(!($jscomp.FORCE_POLYFILL_PROMISE||$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION&&"undefined"===typeof $jscomp.global.PromiseRejectionEvent)||!$jscomp.global.Promise||-1===$jscomp.global.Promise.toString().indexOf("[native code]")))return a;b.prototype.asyncExecute=function(c){if(null==this.batch_){this.batch_=[];var g=this;this.asyncExecuteFunction(function(){g.executeBatch_()})}this.batch_.push(c)};
var f=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(c){f(c,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var c=this.batch_;this.batch_=[];for(var g=0;g<c.length;++g){var k=c[g];c[g]=null;try{k()}catch(l){this.asyncThrow_(l)}}}this.batch_=null};b.prototype.asyncThrow_=function(c){this.asyncExecuteFunction(function(){throw c;})};var e=function(c){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];this.isRejectionHandled_=!1;var g=this.createResolveAndReject_();
try{c(g.resolve,g.reject)}catch(k){g.reject(k)}};e.prototype.createResolveAndReject_=function(){function c(l){return function(m){k||(k=!0,l.call(g,m))}}var g=this,k=!1;return{resolve:c(this.resolveTo_),reject:c(this.reject_)}};e.prototype.resolveTo_=function(c){if(c===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof e)this.settleSameAsPromise_(c);else{a:switch(typeof c){case "object":var g=null!=c;break a;case "function":g=!0;break a;default:g=!1}g?this.resolveToNonPromiseObj_(c):
this.fulfill_(c)}};e.prototype.resolveToNonPromiseObj_=function(c){var g=void 0;try{g=c.then}catch(k){this.reject_(k);return}"function"==typeof g?this.settleSameAsThenable_(g,c):this.fulfill_(c)};e.prototype.reject_=function(c){this.settle_(2,c)};e.prototype.fulfill_=function(c){this.settle_(1,c)};e.prototype.settle_=function(c,g){if(0!=this.state_)throw Error("Cannot settle("+c+", "+g+"): Promise already settled in state"+this.state_);this.state_=c;this.result_=g;2===this.state_&&this.scheduleUnhandledRejectionCheck_();
this.executeOnSettledCallbacks_()};e.prototype.scheduleUnhandledRejectionCheck_=function(){var c=this;f(function(){if(c.notifyUnhandledRejection_()){var g=$jscomp.global.console;"undefined"!==typeof g&&g.error(c.result_)}},1)};e.prototype.notifyUnhandledRejection_=function(){if(this.isRejectionHandled_)return!1;var c=$jscomp.global.CustomEvent,g=$jscomp.global.Event,k=$jscomp.global.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):
"function"===typeof g?c=new g("unhandledrejection",{cancelable:!0}):(c=$jscomp.global.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.result_;return k(c)};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var c=0;c<this.onSettledCallbacks_.length;++c)h.asyncExecute(this.onSettledCallbacks_[c]);this.onSettledCallbacks_=null}};var h=new b;e.prototype.settleSameAsPromise_=function(c){var g=this.createResolveAndReject_();
c.callWhenSettled_(g.resolve,g.reject)};e.prototype.settleSameAsThenable_=function(c,g){var k=this.createResolveAndReject_();try{c.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(c,g){function k(n,p){return"function"==typeof n?function(q){try{l(n(q))}catch(r){m(r)}}:p}var l,m,t=new e(function(n,p){l=n;m=p});this.callWhenSettled_(k(c,l),k(g,m));return t};e.prototype["catch"]=function(c){return this.then(void 0,c)};e.prototype.callWhenSettled_=function(c,g){function k(){switch(l.state_){case 1:c(l.result_);
break;case 2:g(l.result_);break;default:throw Error("Unexpected state: "+l.state_);}}var l=this;null==this.onSettledCallbacks_?h.asyncExecute(k):this.onSettledCallbacks_.push(k);this.isRejectionHandled_=!0};e.resolve=d;e.reject=function(c){return new e(function(g,k){k(c)})};e.race=function(c){return new e(function(g,k){for(var l=$jscomp.makeIterator(c),m=l.next();!m.done;m=l.next())d(m.value).callWhenSettled_(g,k)})};e.all=function(c){var g=$jscomp.makeIterator(c),k=g.next();return k.done?d([]):new e(function(l,
m){function t(q){return function(r){n[q]=r;p--;0==p&&l(n)}}var n=[],p=0;do n.push(void 0),p++,d(k.value).callWhenSettled_(t(n.length-1),m),k=g.next();while(!k.done)})};return e},"es6","es3");
var trackerMain="https://bscscan.com/",trackerTest="https://testnet.bscscan.com/",tokentracker,mainnet=56,mainnetAlt=56,testnet=97,mainnetname="Binance Smart Chain (BSC) Mainnet",testnetname="Binance Smart Chain (BSC) Testnet",wrongnet='<span class="err">Please use Binance Smart Chain (BSC)</span>',contractAddress,tokenAddress,decimals,symbol,contractLocker,contractLockerSign,contractToken,balance,abiLocker=[{inputs:[{internalType:"address",name:"_TokenAddress",type:"address"},{internalType:"address",
name:"_TokenOwner",type:"address"},{internalType:"uint256",name:"_UnlockTime",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"LockedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TokenOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",
type:"function"},{inputs:[],name:"UnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"locked",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],abiToken=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256",name:"_dec",
type:"uint256"},{internalType:"uint256",name:"_supply",type:"uint256"},{internalType:"uint256",name:"_tax1",type:"uint256"},{internalType:"address",name:"_address1",type:"address"},{internalType:"uint256",name:"_tax2",type:"uint256"},{internalType:"address",name:"_address2",type:"address"},{internalType:"uint256",name:"_deflation",type:"uint256"},{internalType:"uint256",name:"_minSupply",type:"uint256"},{internalType:"address",name:"_owner",type:"address"}],stateMutability:"nonpayable",type:"constructor"},
{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"addressTax1",
outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"addressTax2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",
type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burnt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",
outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"initialSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",
outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",
name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalTax1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalTax2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",
type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],network,curnet,tracker,myAddress,signer,provider;$(function(){connect()});
function connect(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){provider=new ethers.providers.Web3Provider(window.ethereum,"any");provider.on("network",function(b,d){d&&getNetwork()});ethereum.on("accountsChanged",function(b){getNetwork()});ethereum.on("connect",function(b){getNetwork()});getNetwork();a.jumpToEnd()})}
function getNetwork(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){if(1==a.nextAddress)return a.yield(provider.getNetwork(),2);network=a.yieldResult;curnet=network.chainId;curnet==mainnet||curnet==mainnetAlt?($("#curnet").html(mainnetname),tracker=trackerMain,getAddress(),init()):curnet==testnet?($("#curnet").html(testnetname),tracker=trackerTest,getAddress(),init()):($("#curnet").html(wrongnet),$("#myAddr").html(""));a.jumpToEnd()})}
function getAddress(){var a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(b){switch(b.nextAddress){case 1:return signer=provider.getSigner(),b.setCatchFinallyBlocks(2),b.yield(signer.getAddress(),4);case 4:myAddress=b.yieldResult;b.leaveTryBlock(3);break;case 2:a=b.enterCatchBlock(),console.log(a),!myAddress&&window.ethereum&&ethereum.request({method:"eth_requestAccounts"}).then(getNetwork);case 3:$("#myAddr").html(myAddress),myAddress?$("#errors").html(""):$("#errors").html("Please connect to your wallet!"),
b.jumpToEnd()}})}
function init(){var a,b,d,f,e;return $jscomp.asyncExecutePromiseGeneratorProgram(function(h){switch(h.nextAddress){case 1:return getUrlParams(),$("#addressLocker").html('<a title="View on explorer" target="_blank" href="'+tracker+"address/"+contractAddress+'">'+contractAddress+"</a>"),$("#adminContract").html(contractAddress),contract=new ethers.Contract(contractAddress,abiLocker,provider),contractSign=contract.connect(signer),h.yield(contract.TokenAddress(),2);case 2:return tokenAddress=h.yieldResult,
$("#addressToken").html('<a title="View on explorer" target="_blank" href="'+tracker+"token/"+tokenAddress+'">'+tokenAddress+"</a>"),contractToken=new ethers.Contract(tokenAddress,abiToken,provider),contractTokenSign=contractToken.connect(signer),h.yield(contractToken.name(),3);case 3:return a=h.yieldResult,$("#name").html(a),h.yield(contractToken.symbol(),4);case 4:return symbol=h.yieldResult,$(".symbol").html(symbol),h.yield(contractToken.decimals(),5);case 5:return decimals=h.yieldResult,h.yield(contractToken.balanceOf(contractAddress),
6);case 6:return balance=h.yieldResult,$("#balance").html(ethers.utils.formatUnits(balance,decimals)),h.yield(contract.UnlockTime(),7);case 7:return b=h.yieldResult,b=new Date(1E3*Number(b)),$("#date").html(b),h.yield(contract.locked(),8);case 8:return(d=h.yieldResult)?(f='<span style="color: red">Locked &#128274;</span>',$("#withdraw").prop("disabled",!0),$("#adminLock").show()):(f='<span style="color: green">Unlocked &#128275;</span>',$("#withdraw").prop("disabled",!1),$("#adminLock").hide()),$("#status").html(f),
h.yield(contract.TokenOwner(),9);case 9:e=h.yieldResult,e==myAddress?$("#admin").show():$("#admin").hide(),getQRAdmin(contractAddress),h.jumpToEnd()}})}$("#withdraw").click(function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){if(1==a.nextAddress)return 0<balance?a.yield(contractSign.withdraw({gasLimit:1E5}),3):($("#nothing").fadeIn(1E3).fadeOut(1E3),a.jumpTo(0));if(4!=a.nextAddress)return tx=a.yieldResult,a.yield(tx.wait(),4);init();a.jumpToEnd()})});
$("#copyAddressAdmin").on("click",function(){var a=$("<textarea>");$("body").append(a);a.val($("#adminContract").html()).select();document.execCommand("copy");a.remove()});function getQRAdmin(a){a=encodeURIComponent(a);$("#adminqr").html('<img style="max-width: 80%" src="https://create.metaexchange.finance/php/qr.php?data='+a+'">');$("#admind").attr("href","https://create.metaexchange.finance/php/qr.php?data="+a)}
function getUrlParams(){var a=new URLSearchParams(window.location.search);!0===a.has("id")&&""!==a.get("id")&&ethers.utils.isAddress(a.get("id"))&&(contractAddress=a.get("id"))}$("#addToken").click(function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:String(tokenAddress),symbol:String(symbol),decimals:Number(decimals)}}});a.jumpToEnd()})});