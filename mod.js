// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var l=function(r,e,t){var n,l,f,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),f="get"in t,p="set"in t,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},f=n,p=l,v=t()?f:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,h=/./;var d=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,j=y;var E=function(r){return j.call(r)},T=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&T.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",_=P,V=O,x=y;var S=E,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[V],e=_(r,V);try{r[V]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[V]=t:delete r[V],n},A=w()?k:S,F=Boolean.prototype.toString;var I=A,N=function(r){try{return F.call(r),!0}catch(r){return!1}},M=w();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(M?N(r):"[object Boolean]"===I(r)))},$=d,C=R;var L=m,B=function(r){return $(r)||C(r)},G=R;L(B,"isPrimitive",d),L(B,"isObject",G);var Z=B;var z="object"==typeof self?self:null,D="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X=Z.isPrimitive,q=function(){return new Function("return this;")()},U=z,Y=D,J=r(Object.freeze({__proto__:null}));var H=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(U)return U;if(Y)return Y;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")},K=H(),Q=K.document&&K.document.childNodes,rr=Int8Array,er=h,tr=Q,nr=rr;var ir=function(){return"function"==typeof er||"object"==typeof nr||"function"==typeof tr};var or=function(){return/^\s*function\s*([^(]*)/i},ar=or;m(ar,"REGEXP",or());var ur=ar,cr=A;var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===cr(r)},lr=sr;var fr=function(r){return null!==r&&"object"==typeof r};m(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var pr=fr;var vr=A,gr=ur.REGEXP,mr=function(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=vr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},dr=hr;var br=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e},yr=function(r){return br(r).toLowerCase()},jr=ir()?yr:wr;var Er=function(r){return"function"===jr(r)},Tr=Math.floor;var Pr=function(r){return Tr(r)===r},Or=Pr;var _r=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=9007199254740991};var Vr=function(r){return"string"==typeof r},xr=String.prototype.valueOf;var Sr=A,kr=function(r){try{return xr.call(r),!0}catch(r){return!1}},Ar=w();var Fr=function(r){return"object"==typeof r&&(r instanceof String||(Ar?kr(r):"[object String]"===Sr(r)))},Ir=Vr,Nr=Fr;var Mr=m,Rr=function(r){return Ir(r)||Nr(r)},$r=Fr;Mr(Rr,"isPrimitive",Vr),Mr(Rr,"isObject",$r);var Cr=Rr;var Lr=function(r){return"number"==typeof r},Br=Number,Gr=Br.prototype.toString;var Zr=A,zr=Br,Dr=function(r){try{return Gr.call(r),!0}catch(r){return!1}},Wr=w();var Xr=function(r){return"object"==typeof r&&(r instanceof zr||(Wr?Dr(r):"[object Number]"===Zr(r)))},qr=Lr,Ur=Xr;var Yr=m,Jr=function(r){return qr(r)||Ur(r)},Hr=Xr;Yr(Jr,"isPrimitive",Lr),Yr(Jr,"isObject",Hr);var Kr=Jr,Qr=Number.POSITIVE_INFINITY,re=Br.NEGATIVE_INFINITY,ee=Qr,te=re,ne=Pr;var ie=function(r){return r<ee&&r>te&&ne(r)},oe=Kr.isPrimitive,ae=ie;var ue=function(r){return oe(r)&&ae(r)},ce=Kr.isObject,se=ie;var le=function(r){return ce(r)&&se(r.valueOf())},fe=ue,pe=le;var ve=m,ge=function(r){return fe(r)||pe(r)},me=le;ve(ge,"isPrimitive",ue),ve(ge,"isObject",me);var he=ge;var de=function(r){return r!=r},be=Kr.isPrimitive,we=de;var ye=function(r){return be(r)&&we(r)},je=Kr.isObject,Ee=de;var Te=function(r){return je(r)&&Ee(r.valueOf())},Pe=ye,Oe=Te;var _e=m,Ve=function(r){return Pe(r)||Oe(r)},xe=Te;_e(Ve,"isPrimitive",ye),_e(Ve,"isObject",xe);var Se=_r,ke=he.isPrimitive,Ae=Cr.isPrimitive,Fe=Ve.isPrimitive;var Ie=function(r,e,t){var n,i,o;if(!Se(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ke(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Fe(e)){for(o=i;o<n;o++)if(Fe(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Ne=Cr.isPrimitive;var Me=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Re=Cr.isPrimitive;var $e=function(r){if(!Re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ce=Me,Le=$e,Be=Cr.isPrimitive;var Ge=function(r){return Be(r)&&r===Le(r)&&r!==Ce(r)},Ze=Qr,ze=re;var De=function(r){return r==r&&r>ze&&r<Ze},We=he.isPrimitive;var Xe=function(r){return We(r)&&r>=0},qe=he.isObject;var Ue=function(r){return qe(r)&&r.valueOf()>=0},Ye=Xe,Je=Ue;var He=m,Ke=function(r){return Ye(r)||Je(r)},Qe=Ue;He(Ke,"isPrimitive",Xe),He(Ke,"isObject",Qe);var rt=Ke.isPrimitive,et=Cr.isPrimitive;var tt=function(r,e){var t,n;if(!et(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!rt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},nt=he.isPrimitive,it=Cr.isPrimitive;var ot=tt,at=function(r,e,t){var n,i;if(!it(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!nt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ut=function(r,e,t){var n=!1,i=e-r.length;return i<0||(at(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ot("0",i):ot("0",i)+r,n&&(r="-"+r)),r},ct=Ge,st=$e,lt=Me,ft=De,pt=Kr.isPrimitive,vt=ut;var gt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ft(n)){if(!pt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=vt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=vt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ct(r.specifier)?st(t):lt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},mt=Cr.isPrimitive,ht=/[-\/\\^$*+?.()|[\]{}]/g;var dt=function(r){var e,t;if(!mt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ht,"\\$&"):(e=(e=r.substring(1,t)).replace(ht,"\\$&"),r=r[0]+e+r.substring(t))},bt=RegExp.prototype.exec;var wt=A,yt=function(r){try{return bt.call(r),!0}catch(r){return!1}},jt=w();var Et=dt,Tt=Er,Pt=Cr.isPrimitive,Ot=function(r){return"object"==typeof r&&(r instanceof RegExp||(jt?yt(r):"[object RegExp]"===wt(r)))};var _t=Ge,Vt=$e,xt=Me,St=function(r,e,t){if(!Pt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Pt(e))e=Et(e),e=new RegExp(e,"g");else if(!Ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Pt(t)&&!Tt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},kt=De,At=Kr.isPrimitive,Ft=function(r){return Math.abs(r)},It=/e\+(\d)$/,Nt=/e-(\d)$/,Mt=/^(\d+)$/,Rt=/^(\d+)e/,$t=/\.0$/,Ct=/\.0*e/,Lt=/(\..*[^0])0*e/;var Bt=function(r){var e,t,n=parseFloat(r.arg);if(!kt(n)){if(!At(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ft(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=St(t,Lt,"$1e"),t=St(t,Ct,"e"),t=St(t,$t,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=St(t,It,"e+0$1"),t=St(t,Nt,"e-0$1"),r.alternate&&(t=St(t,Mt,"$1."),t=St(t,Rt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=_t(r.specifier)?Vt(t):xt(t)},Gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Zt=tt;var zt=Cr.isPrimitive,Dt=Ie,Wt=de,Xt=gt,qt=Bt,Ut=function(r){var e,t,n,i,o;for(e=0,n=[],o=Gt.exec(r);o;)(t=r.slice(e,Gt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Gt.lastIndex,o=Gt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Yt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Zt(" ",n):Zt(" ",n)+r},Jt=ut,Ht=String.fromCharCode;var Kt=function(r){var e,t,n,i,o,a,u,c,s;if(!zt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Ut(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],zt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Dt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Wt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Wt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Xt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Wt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wt(o)?String(n.arg):Ht(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Jt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Yt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Qt=sr;var rn=function(r){return"object"==typeof r&&null!==r&&!Qt(r)},en=Object.getPrototypeOf;var tn=function(r){return r.__proto__},nn=A,on=tn;var an=function(r){var e=on(r);return e||null===e?e:"[object Function]"===nn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},un=en,cn=an,sn=Er(Object.getPrototypeOf)?un:cn;var ln=rn,fn=Er,pn=function(r){return null==r?null:(r=Object(r),sn(r))},vn=P,gn=A,mn=Object.prototype;var hn=function(r){var e;return!!ln(r)&&(!(e=pn(r))||!vn(r,"constructor")&&vn(e,"constructor")&&fn(e.constructor)&&"[object Function]"===gn(e.constructor)&&vn(e,"isPrototypeOf")&&fn(e.isPrototypeOf)&&(e===mn||function(r){var e;for(e in r)if(!vn(r,e))return!1;return!0}(r)))},dn=hn,bn=he.isPrimitive;var wn=function(r){return bn(r)&&r>0},yn=he.isObject;var jn=function(r){return yn(r)&&r.valueOf()>0},En=wn,Tn=jn;var Pn=m,On=function(r){return En(r)||Tn(r)},_n=jn;Pn(On,"isPrimitive",wn),Pn(On,"isObject",_n);var Vn=dn,xn=P,Sn=Z.isPrimitive,kn=On.isPrimitive,An=Kt;var Fn=function(r,e){return Vn(e)?(xn(e,"thisArg")&&(r.thisArg=e.thisArg),xn(e,"series")&&(r.series=e.series,!Sn(r.series))?new TypeError(An("invalid option. `%s` option must be a boolean. Option: `%s`.","series",r.series)):xn(e,"limit")&&(r.limit=e.limit,!kn(r.limit))?new TypeError(An("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",r.limit)):null):new TypeError(An("invalid argument. Options argument must be an object. Value: `%s`.",e))};function In(){throw new Error("setTimeout has not been defined")}function Nn(){throw new Error("clearTimeout has not been defined")}var Mn=In,Rn=Nn;function $n(r){if(Mn===setTimeout)return setTimeout(r,0);if((Mn===In||!Mn)&&setTimeout)return Mn=setTimeout,setTimeout(r,0);try{return Mn(r,0)}catch(e){try{return Mn.call(null,r,0)}catch(e){return Mn.call(this,r,0)}}}"function"==typeof W.setTimeout&&(Mn=setTimeout),"function"==typeof W.clearTimeout&&(Rn=clearTimeout);var Cn,Ln=[],Bn=!1,Gn=-1;function Zn(){Bn&&Cn&&(Bn=!1,Cn.length?Ln=Cn.concat(Ln):Gn=-1,Ln.length&&zn())}function zn(){if(!Bn){var r=$n(Zn);Bn=!0;for(var e=Ln.length;e;){for(Cn=Ln,Ln=[];++Gn<e;)Cn&&Cn[Gn].run();Gn=-1,e=Ln.length}Cn=null,Bn=!1,function(r){if(Rn===clearTimeout)return clearTimeout(r);if((Rn===Nn||!Rn)&&clearTimeout)return Rn=clearTimeout,clearTimeout(r);try{Rn(r)}catch(e){try{return Rn.call(null,r)}catch(e){return Rn.call(this,r)}}}(r)}}function Dn(r,e){this.fun=r,this.array=e}Dn.prototype.run=function(){this.fun.apply(null,this.array)};function Wn(){}var Xn=Wn,qn=Wn,Un=Wn,Yn=Wn,Jn=Wn,Hn=Wn,Kn=Wn;var Qn=W.performance||{},ri=Qn.now||Qn.mozNow||Qn.msNow||Qn.oNow||Qn.webkitNow||function(){return(new Date).getTime()};var ei=new Date;var ti={nextTick:function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Ln.push(new Dn(r,e)),1!==Ln.length||Bn||$n(zn)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Xn,addListener:qn,once:Un,off:Yn,removeListener:Jn,removeAllListeners:Hn,emit:Kn,binding:function(r){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(r){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(r){var e=.001*ri.call(Qn),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-ei)/1e3}};module.exports=void 0!==ti&&"renderer"===ti.type?require("./browser.js"):require("./node.js");var ni=r(Object.freeze({__proto__:null}))("inmap-right-async:limit");var ii=Er,oi=_r,ai=Kt,ui=Qr,ci=Fn,si=function(r,e,t,n){var i,o,a,u,c,s;if(u=r.length,ni("Collection length: %d",u),0===u)return ni("Finished processing a collection."),n();for(a=u<e.limit?u:e.limit,ni("Concurrency limit: %d",a),ni("Number of arguments: %d",t.length),i=0,c=u,s=0;s<a;s++)c>0&&l();function l(){var n;function i(e,t){if(!o){if(e)return o=!0,f(e);r[n]=t,f()}}ni("Collection element %d: %s.",n=c-=1,JSON.stringify(r[n])),2===t.length?t.call(e.thisArg,r[n],i):3===t.length?t.call(e.thisArg,r[n],n,i):t.call(e.thisArg,r[n],n,r,i)}function f(r){return r?(ni("Encountered an error: %s",r.message),n(r)):(ni("Processed %d of %d collection elements.",i+=1,u),c>0?l():i===u?(ni("Finished processing a collection."),n()):void 0)}};var li=function(r,e){var t,n,i;if(t={},arguments.length>1){if(n=ci(t,r))throw n;i=e}else i=r;if(!ii(i))throw new TypeError(ai("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=ui),o;function o(r,e){if(!oi(r))throw new TypeError(ai("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!ii(e))throw new TypeError(ai("invalid argument. Last argument must be a function. Value: `%s`.",e));return si(r,t,i,(function(t){if(t)return e(t,r);e(null,r)}))}},fi=li;var pi=function(r,e,t,n){if(arguments.length<4)return fi(e)(r,t);fi(e,t)(r,n)},vi=li;m(pi,"factory",vi);var gi=pi;export{gi as default,vi as factory};
//# sourceMappingURL=mod.js.map
