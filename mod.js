// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,l,f,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t,n;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var V,R=Object.prototype,C=R.toString,N=R.__defineGetter__,$=R.__defineSetter__,J=R.__lookupGetter__,B=R.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var G=V;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function Z(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&q.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof D?D.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[Y],e=z(r,Y);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return Z(r)||er(r)}function nr(){return new Function("return this;")()}L(tr,"isPrimitive",Z),L(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ar?ar:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;L(pr,"REGEXP",gr);var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function yr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var br="function"==typeof M||"object"==typeof sr||"function"==typeof fr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function vr(r){return"function"===br(r)}var wr=Math.floor;function mr(r){return wr(r)===r}function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=9007199254740991}function _r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Er=Number.POSITIVE_INFINITY;var Or,Sr=Object,Tr=Object.getPrototypeOf;Or=vr(Object.getPrototypeOf)?Tr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ar=Or;var Pr=Object.prototype;function kr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!dr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Ar(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&vr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function xr(r){return"number"==typeof r}var Fr=Number,Ir=Fr.prototype.toString;var Vr=W();function Rr(r){return"object"==typeof r&&(r instanceof Fr||(Vr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Cr(r){return xr(r)||Rr(r)}L(Cr,"isPrimitive",xr),L(Cr,"isObject",Rr);var Nr=Fr.NEGATIVE_INFINITY;function $r(r){return r<Er&&r>Nr&&mr(r)}function Jr(r){return xr(r)&&$r(r)}function Br(r){return Rr(r)&&$r(r.valueOf())}function Gr(r){return Jr(r)||Br(r)}function Lr(r){return Jr(r)&&r>0}function Mr(r){return Br(r)&&r.valueOf()>0}function Zr(r){return Lr(r)||Mr(r)}function Ur(r,e){return kr(e)?(z(e,"thisArg")&&(r.thisArg=e.thisArg),z(e,"series")&&(r.series=e.series,!Z(r.series))?new TypeError(_r("1RJ2o,GE","series",r.series)):z(e,"limit")&&(r.limit=e.limit,!Lr(r.limit))?new TypeError(_r("1RJ3P,Fv","limit",r.limit)):null):new TypeError(_r("1RJ2V,FD",e))}function Wr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}L(Gr,"isPrimitive",Jr),L(Gr,"isObject",Br),L(Zr,"isPrimitive",Lr),L(Zr,"isObject",Mr);var Xr=Wr(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-right-async:limit");function qr(r,e,t,n){var i,o,a,c,u,l;if(c=r.length,Xr("Collection length: %d",c),0===c)return Xr("Finished processing a collection."),n();for(a=c<e.limit?c:e.limit,Xr("Concurrency limit: %d",a),Xr("Number of arguments: %d",t.length),i=0,u=c,l=0;l<a;l++)u>0&&f();function f(){var n;function i(e,t){if(!o){if(e)return o=!0,s(e);r[n]=t,s()}}Xr("Collection element %d: %s.",n=u-=1,JSON.stringify(r[n])),2===t.length?t.call(e.thisArg,r[n],i):3===t.length?t.call(e.thisArg,r[n],n,i):t.call(e.thisArg,r[n],n,r,i)}function s(r){return r?(Xr("Encountered an error: %s",r.message),n(r)):(Xr("Processed %d of %d collection elements.",i+=1,c),u>0?f():i===c?(Xr("Finished processing a collection."),n()):void 0)}}function zr(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Ur(t,r))throw n;i=e}else i=r;if(!vr(i))throw new TypeError(_r("1RJ3q,JV",i));return t.series?t.limit=1:t.limit||(t.limit=Er),o;function o(r,e){if(!jr(r))throw new TypeError(_r("1RJAh,O3",r));if(!vr(e))throw new TypeError(_r("1RJ3q,JV",e));return qr(r,t,i,(function(t){if(t)return e(t,r);e(null,r)}))}}function Dr(r,e,t,n){if(arguments.length<4)return zr(e)(r,t);zr(e,t)(r,n)}L(Dr,"factory",zr);export{Dr as default,zr as factory};
//# sourceMappingURL=mod.js.map
