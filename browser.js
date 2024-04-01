// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,u,l,s,f,p,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+w(h):w(h)+p)),u+=n.arg||"",l+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){var r,t;if("string"!=typeof e)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var k,I=Object.prototype,F=I.toString,R=I.__defineGetter__,V=I.__defineSetter__,C=I.__lookupGetter__,N=I.__lookupSetter__;k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&V&&V.call(e,r,t.set),e};var $=k;function B(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J=/./;function G(e){return"boolean"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&U.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"",z=M()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=W(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},Y=Boolean,D=Boolean.prototype.toString,H=M();function K(e){return"object"==typeof e&&(e instanceof Y||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function Q(e){return G(e)||K(e)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!G(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;B(ae,"REGEXP",ce);var ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function le(e){return null!==e&&"object"==typeof e}function se(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return le(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var fe="function"==typeof J||"object"==typeof oe||"function"==typeof ie?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function pe(e){return"function"===fe(e)}var ge=Math.floor;function de(e){return ge(e)===e}var he=9007199254740991;function ye(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var be,ve=Number.POSITIVE_INFINITY,me=Object,we=Object.getPrototypeOf;be=pe(Object.getPrototypeOf)?we:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===z(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var je=be,_e=Object.prototype;function Ee(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ue(e)}(e)&&(r=function(e){return null==e?null:(e=me(e),je(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&pe(r.constructor)&&"[object Function]"===z(r.constructor)&&W(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===_e||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function Oe(e){return"number"==typeof e}var Te=Number,Se=Te.prototype.toString,Ae=M();function xe(e){return"object"==typeof e&&(e instanceof Te||(Ae?function(e){try{return Se.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function Pe(e){return Oe(e)||xe(e)}B(Pe,"isPrimitive",Oe),B(Pe,"isObject",xe);var ke=Te.NEGATIVE_INFINITY;function Ie(e){return e<ve&&e>ke&&de(e)}function Fe(e){return Oe(e)&&Ie(e)}function Re(e){return xe(e)&&Ie(e.valueOf())}function Ve(e){return Fe(e)||Re(e)}function Ce(e){return Fe(e)&&e>0}function Ne(e){return Re(e)&&e.valueOf()>0}function $e(e){return Ce(e)||Ne(e)}function Be(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}B(Ve,"isPrimitive",Fe),B(Ve,"isObject",Re),B($e,"isPrimitive",Ce),B($e,"isObject",Ne);var Je=Be(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-right-async:limit");function Ge(e,r){var t,n,i;if(t={},arguments.length>1){if(n=function(e,r){return Ee(r)?(W(r,"thisArg")&&(e.thisArg=r.thisArg),W(r,"series")&&(e.series=r.series,!G(e.series))?new TypeError(ye("1RJ2o","series",e.series)):W(r,"limit")&&(e.limit=r.limit,!Ce(e.limit))?new TypeError(ye("1RJ3P","limit",e.limit)):null):new TypeError(ye("1RJ2V",r))}(t,e),n)throw n;i=r}else i=e;if(!pe(i))throw new TypeError(ye("1RJ3q",i));return t.series?t.limit=1:t.limit||(t.limit=ve),function(e,r){if(!("object"==typeof(n=e)&&null!==n&&"number"==typeof n.length&&de(n.length)&&n.length>=0&&n.length<=he))throw new TypeError(ye("1RJAh",e));var n;if(!pe(r))throw new TypeError(ye("1RJ3q",r));return function(e,r,t,n){var i,o,a,c,u,l;if(c=e.length,Je("Collection length: %d",c),0===c)return Je("Finished processing a collection."),n();for(a=c<r.limit?c:r.limit,Je("Concurrency limit: %d",a),Je("Number of arguments: %d",t.length),i=0,u=c,l=0;l<a;l++)u>0&&s();function s(){var n;function i(r,t){if(!o){if(r)return o=!0,f(r);e[n]=t,f()}}Je("Collection element %d: %s.",n=u-=1,JSON.stringify(e[n])),2===t.length?t.call(r.thisArg,e[n],i):3===t.length?t.call(r.thisArg,e[n],n,i):t.call(r.thisArg,e[n],n,e,i)}function f(e){return e?(Je("Encountered an error: %s",e.message),n(e)):(Je("Processed %d of %d collection elements.",i+=1,c),u>0?s():i===c?(Je("Finished processing a collection."),n()):void 0)}}(e,t,i,(function(t){if(t)return r(t,e);r(null,e)}))}}function Le(e,r,t,n){if(arguments.length<4)return Ge(r)(e,t);Ge(r,t)(e,n)}return B(Le,"factory",Ge),Le},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).inmapRightAsync=r();
//# sourceMappingURL=browser.js.map
