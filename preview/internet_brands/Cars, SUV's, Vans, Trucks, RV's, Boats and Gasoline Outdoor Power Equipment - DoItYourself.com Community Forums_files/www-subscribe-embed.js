(function(){var k,m=this;function aa(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ba(){}
function ca(a){a.ca=void 0;a.A=function(){return a.ca?a.ca:a.ca=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==da(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++la)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ma:t=na;return t.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var pa=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&aa(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ub=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var qa=window,ra=document,sa=qa.location;function ta(){}
var ua=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function va(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function wa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function xa(){var a;if((a=Object.create)&&ua.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var ya=x(qa,"gapi",{});function za(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
za.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.i();return a};
function Aa(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;function Ba(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(Ba,Error);Ba.prototype.name="CustomError";var Ca;function Da(a,b){this.width=a;this.height=b}
k=Da.prototype;k.ib=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.ib()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ea(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Fa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Ga(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ha(a){var b=Ia,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ja.length;f++)c=Ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function La(a){La[" "](a);return a}
La[" "]=ba;function Ma(a,b){var c=Na;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Oa(){}
;var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Qa=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ra(a){a=aa(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Qa("0",Math.max(0,2-b))+a}
function Sa(a,b){return a<b?-1:a>b?1:0}
function Ta(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Ua(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;function Va(a,b){return a?a.dataset?a.dataset[Wa(b)]:a.getAttribute("data-"+b):null}
var Xa={};function Wa(a){return Xa[a]||(Xa[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Ya(a,b){a&&(a.dataset?delete a.dataset[Wa(b)]:a.removeAttribute("data-"+b))}
function Za(a,b,c){a&&(a.dataset?a.dataset[Wa(b)]=c:a.setAttribute("data-"+b,c))}
;function $a(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ab||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
$a.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
$a.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
$a.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var ab={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var bb=null;"undefined"!=typeof XMLHttpRequest?bb=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(bb=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function y(a,b){this.version=a;this.args=b}
function cb(a){if(!a.Ma){var b={};a.call(b);a.Ma=b.version}return a.Ma}
function db(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=cb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
y.prototype.Eb=function(){return{version:this.version,args:this.args}};
function z(a,b){this.topic=a;this.U=b}
z.prototype.toString=function(){return this.topic};function eb(){this.i=this.i;this.o=this.o}
eb.prototype.i=!1;eb.prototype.X=function(){return this.i};
eb.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
eb.prototype.ba=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function fb(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var gb;a:{var hb=m.navigator;if(hb){var ib=hb.userAgent;if(ib){gb=ib;break a}}gb=""}function A(a){return-1!=gb.indexOf(a)}
;var jb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",jb);function kb(a){var b=arguments;if(1<b.length)jb[b[0]]=b[1];else{var b=b[0],c;for(c in b)jb[c]=b[c]}}
function C(a,b){return a in jb?jb[a]:b}
;function lb(a){y.call(this,1,arguments);this.b=a}
w(lb,y);function mb(a,b){y.call(this,2,arguments);this.f=a;this.b=b}
w(mb,y);function nb(a,b,c,d){y.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(nb,y);function ob(a,b){y.call(this,1,arguments);this.f=a;this.b=b||null}
w(ob,y);function pb(a){y.call(this,1,arguments)}
w(pb,y);var qb=new z("ypc-core-load",lb),rb=new z("ypc-guide-sync-success",mb),sb=new z("ypc-purchase-success",nb),tb=new z("ypc-subscription-cancel",pb),ub=new z("ypc-subscription-cancel-success",ob),vb=new z("ypc-init-subscription",pb);var D;D=x(qa,"___jsl",xa());x(D,"I",0);x(D,"hel",10);function wb(){var a=sa.href,b;if(D.dpo)b=D.h;else{b=D.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function xb(a){var b=x(D,"PQ",[]);D.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function yb(a){return x(x(D,"H",xa()),a,xa())}
;var zb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ab=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Bb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Cb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Db(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Eb(a,b){return 0<=zb(a,b)}
function Fb(a){return Array.prototype.concat.apply([],arguments)}
function Gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ib(a,b,c,d){return Array.prototype.splice.apply(a,Jb(arguments,1))}
function Jb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Kb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==da(d))for(var e=0;e<d.length;e+=8192)for(var f=Kb.apply(null,Jb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Lb(){this.f=this.b=null}
var Nb=new za(function(){return new Mb},function(a){a.reset()},100);
Lb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Mb(){this.next=this.scope=this.b=null}
Mb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Mb.prototype.reset=function(){this.next=this.scope=this.b=null};function Ob(a,b,c){fa(a)?(this.date=Pb(a,b||0,c||1),Qb(this,c||1)):ha(a)?(this.date=Pb(a.getFullYear(),a.getMonth(),a.getDate()),Qb(this,a.getDate())):(this.date=new Date(pa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Qb(this,a))}
function Pb(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=Ob.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
function Rb(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+Ra(c)+":"+Ra(b)}return a}
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.Z=function(a,b){return[this.getFullYear(),Ra(this.getMonth()+1),Ra(this.getDate())].join(a?"-":"")+(b?Rb(this):"")};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.Z()};
function Qb(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function Sb(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():pa())}
w(Sb,Ob);Sb.prototype.Z=function(a,b){var c=Ob.prototype.Z.call(this,a);return a?c+" "+Ra(this.date.getHours())+":"+Ra(this.date.getMinutes())+":"+Ra(this.date.getSeconds())+(b?Rb(this):""):c+"T"+Ra(this.date.getHours())+Ra(this.date.getMinutes())+Ra(this.date.getSeconds())+(b?Rb(this):"")};
Sb.prototype.equals=function(a){return this.getTime()==a.getTime()};
Sb.prototype.toString=function(){return this.Z()};var Tb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ub(a){return a?decodeURI(a):a}
function Vb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Wb(a,b,c){if("array"==da(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Xb(a,b,c){for(c=c||0;c<b.length;c+=2)Wb(b[c],b[c+1],a);return a}
function Yb(a,b){for(var c in b)Wb(c,b[c],a);return a}
function Zb(a,b){return Vb(2==arguments.length?Xb([a],arguments[1],0):Xb([a],arguments,1))}
;function $b(a){var b=p("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=C("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),kb("ERRORS",b))}
function ac(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$b(b)}}:a}
;function bc(){var a=C("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!C("SESSION_INDEX")&&!C("LOGGED_IN"))}
;var cc=x(D,"perf",xa());x(cc,"g",xa());var dc=x(cc,"i",xa());x(cc,"r",[]);xa();xa();function ec(a,b,c){b&&0<b.length&&(b=fc(b),c&&0<c.length&&(b+="___"+fc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(dc,"_p",xa()),x(b,c,xa())[a]=(new Date).getTime(),b=cc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function fc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function gc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function F(a,b){return a.classList?a.classList.contains(b):Eb(gc(a),b)}
function G(a,b){a.classList?a.classList.add(b):F(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function hc(a,b){if(a.classList)E(b,function(b){G(a,b)});
else{var c={};E(gc(a),function(a){c[a]=!0});
E(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function H(a,b){a.classList?a.classList.remove(b):F(a,b)&&(a.className=Ab(gc(a),function(a){return a!=b}).join(" "))}
function ic(a,b){a.classList?E(b,function(b){H(a,b)}):a.className=Ab(gc(a),function(a){return!Eb(b,a)}).join(" ")}
function jc(a,b,c){c?G(a,b):H(a,b)}
function kc(a,b,c){F(a,b)&&(H(a,b),G(a,c))}
function lc(a,b){var c=!F(a,b);jc(a,b,c)}
;function I(a,b){ga(a)&&(a=ac(a));return window.setTimeout(a,b)}
;function nc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==da(b[f])?Hb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function oc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=nc(d[1]||""),e;for(e in b)d[e]=b[e];return Vb(Yb([a],d))+c}
function pc(a){a=Yb([],a);a[0]="";return a.join("")}
;var qc=xa(),rc=[];function sc(a){throw Error("Bad hint"+(a?": "+a:""));}
rc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?D[b]=x(D,b,[]).concat(c):x(D,b,c)}if(b=a.u)a=x(D,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var tc=/^(\/[a-zA-Z0-9_\-]+)+$/,uc=[/\/amp\//,/\/amp$/,/^\/amp$/],vc=/^[a-zA-Z0-9\-_\.,!]+$/,wc=/^gapi\.loaded_[0-9]+$/,xc=/^[a-zA-Z0-9,._-]+$/;function yc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=qc[f],h=null;g?h=g(e,b,c,d):sc("no hint processor for: "+f);h||sc("failed to generate load url");b=h;c=b.match(zc);(d=b.match(Ac))&&1===d.length&&Bc.test(b)&&c&&1===c.length||sc("failed sanity: "+a);return h}
function Cc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Dc(a);wc.test(c)||sc("invalid_callback");b=Ec(b);d=d&&d.length?Ec(d):null;return[encodeURIComponent(a.Cb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.la?"/am="+e(a.la):"",a.Ha?"/rs="+e(a.Ha):"",a.Sa?"/t="+e(a.Sa):"","/cb=",e(c)].join("")}
function Dc(a){"/"!==a.charAt(0)&&sc("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))sc("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");tc.test(b)||sc("invalid_prefix");c=0;for(d=uc.length;c<d;++c)uc[c].test(b)&&sc("invalid_prefix");c=Fc(a,
"k",!0);d=Fc(a,"am");e=Fc(a,"rs");a=Fc(a,"t");return{Cb:b,version:c,la:d,Ha:e,Sa:a}}
function Ec(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");xc.test(e)&&b.push(e)}return b.join(",")}
function Fc(a,b,c){a=a[b];!a&&c&&sc("missing: "+b);if(a){if(vc.test(a))return a;sc("invalid: "+b)}return null}
var Bc=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ac=/\/cb=/g,zc=/\/\//g;function Gc(){var a=wb();if(!a)throw Error("Bad hint");return a}
qc.m=function(a,b,c,d){(a=a[0])||sc("missing_hint");return"https://apis.google.com"+Cc(a,b,c,d)};
var Hc=decodeURI("%73cript"),Ic=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Jc(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>va.call(b,e)&&c.push(e)}return c}
function Kc(){var a=D.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Ic)?a:D.nonce=null;var b=x(D,"us",[]);if(!b||!b.length)return D.nonce=null;for(var c=ra.getElementsByTagName(Hc),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Ic))return D.nonce=a}}return null}
function Lc(a){if("loading"!=ra.readyState)Mc(a);else{var b=Kc(),c="";null!==b&&(c=' nonce="'+b+'"');ra.write("<"+Hc+' src="'+encodeURI(a)+'"'+c+"></"+Hc+">")}}
function Mc(a){var b=ra.createElement(Hc);b.setAttribute("src",a);a=Kc();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=ra.getElementsByTagName(Hc)[0])?a.parentNode.insertBefore(b,a):(ra.head||ra.body||ra.documentElement).appendChild(b)}
function Nc(a,b){var c=b&&b._c;if(c)for(var d=0;d<rc.length;d++){var e=rc[d][0],f=rc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Oc(a,b,c){Pc(function(){var c;c=b===wb()?x(ya,"_",xa()):xa();c=x(yb(b),"_",c);a(c)},c)}
function Qc(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Nc(a,c);var d=a?a.split(":"):[],e=c.h||Gc(),f=x(D,"ah",xa());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,q=n;n&&n.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var N=g.length;if(1<N){var Q=c.callback;Q&&(c.callback=function(){0==--N&&Q()})}for(;d=g.shift();)Rc(d.features,c,d.hint)}else Rc(d||[],c,e)}
function Rc(a,b,c){function d(a,b){if(N)return 0;qa.clearTimeout(q);Q.push.apply(Q,u);var d=((ya||{}).config||{}).update;d?d(f):f&&x(D,"cu",[]).push(f);if(b){ec("me0",a,B);try{Oc(b,c,n)}finally{ec("me1",a,B)}}return 1}
a=wa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var q=null,N=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=x(yb(c),"r",[]).sort(),Q=x(yb(c),"L",[]).sort(),B=[].concat(l);0<g&&(q=qa.setTimeout(function(){N=!0;h()},g));
var u=Jc(a,Q);if(u.length){var u=Jc(a,l),ka=x(D,"CP",[]),T=ka.length;ka[T]=function(a){function b(){var a=ka[T+1];a&&a()}
function c(b){ka[T]=null;d(u,a)&&xb(function(){e&&e();b()})}
if(!a)return 0;ec("ml1",u,B);0<T&&ka[T-1]?ka[T]=function(){c(b)}:c(b)};
if(u.length){var mc="loaded_"+D.I++;ya[mc]=function(a){ka[T](a);ya[mc]=null};
a=yc(c,u,"gapi."+mc,l);l.push.apply(l,u);ec("ml0",u,B);b.sync||qa.___gapisync?Lc(a):Mc(a)}else ka[T](ta)}else d(u)&&e&&e()}
function Pc(a,b){if(D.hee&&0<D.hel)try{return a()}catch(c){b&&b(c),D.hel--,Qc("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
ya.load=function(a,b){return Pc(function(){return Qc(a,b)})};function Sc(a){m.setTimeout(function(){throw a;},0)}
var Tc;
function Uc(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(aa(c.next)){c=c.next;var a=c.na;c.na=null;a()}};
return function(a){d.next={na:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Vc(){this.b="";this.f=Wc}
Vc.prototype.wa=!0;Vc.prototype.sa=function(){return this.b};
var Xc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Wc={};function Yc(a){var b=new Vc;b.b=a;return b}
Yc("about:blank");var Zc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function $c(){}
$c.prototype.next=function(){throw Zc;};
$c.prototype.S=function(){return this};
function ad(a){if(a instanceof $c)return a;if("function"==typeof a.S)return a.S(!1);if(ea(a)){var b=0,c=new $c;c.next=function(){for(;;){if(b>=a.length)throw Zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bd(a,b){if(ea(a))try{E(a,b,void 0)}catch(c){if(c!==Zc)throw c;}else{a=ad(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zc)throw c;}}}
function cd(a){if(ea(a))return Gb(a);a=ad(a);var b=[];bd(a,function(a){b.push(a)});
return b}
;function J(a,b){this.j=aa(a)?a:0;this.l=aa(b)?b:0}
J.prototype.equals=function(a){return a instanceof J&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function dd(a,b){return new J(a.j-b.j,a.l-b.l)}
J.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
J.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
J.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};var ed=A("Opera"),K=A("Trident")||A("MSIE"),fd=A("Edge"),gd=fd||K,hd=A("Gecko")&&!(-1!=gb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),id=-1!=gb.toLowerCase().indexOf("webkit")&&!A("Edge"),jd=A("Windows");function kd(){var a=m.document;return a?a.documentMode:void 0}
var ld;a:{var md="",nd=function(){var a=gb;if(hd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(id)return/WebKit\/(\S+)/.exec(a);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nd&&(md=nd?nd[1]:"");if(K){var od=kd();if(null!=od&&od>parseFloat(md)){ld=String(od);break a}}ld=md}var pd=ld,Na={};
function qd(a){return Ma(a,function(){for(var b=0,c=Pa(String(pd)).split("."),d=Pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Sa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Sa(0==g[2].length,0==h[2].length)||Sa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var rd;var sd=m.document;rd=sd&&K?kd()||("CSS1Compat"==sd.compatMode?parseInt(pd,10):5):void 0;function td(a){var b=void 0;isNaN(b)&&(b=void 0);var c=p("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():I(a,b||0)}
;function ud(a,b){vd||wd();xd||(vd(),xd=!0);var c=yd,d=Nb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var vd;function wd(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);vd=function(){a.then(zd)}}else vd=function(){var a=zd;
!ga(m.setImmediate)||m.Window&&m.Window.prototype&&!A("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Tc||(Tc=Uc()),Tc(a)):m.setImmediate(a)}}
var xd=!1,yd=new Lb;function zd(){for(var a;a=yd.remove();){try{a.b.call(a.scope)}catch(b){Sc(b)}Aa(Nb,a)}xd=!1}
;var Ad=!hd&&!K||K&&9<=Number(rd)||hd&&qd("1.9.1"),Bd=K&&!qd("9");function Cd(){this.b="";this.f=Dd}
Cd.prototype.wa=!0;Cd.prototype.sa=function(){return this.b};
function Ed(a){if(a instanceof Cd&&a.constructor===Cd&&a.f===Dd)return a.b;da(a);return"type_error:SafeHtml"}
var Dd={};function Fd(a){var b=new Cd;b.b=a;return b}
Fd("<!DOCTYPE html>");Fd("");Fd("<br>");function Gd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=Gd.prototype;k.getHeight=function(){return this.bottom-this.top};
k.contains=function(a){return this&&a?a instanceof Gd?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.j>=this.left&&a.j<=this.right&&a.l>=this.top&&a.l<=this.bottom:!1};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Hd(){}
w(Hd,Oa);Hd.prototype.W=function(){var a=0;bd(this.S(!0),function(){a++});
return a};
Hd.prototype.clear=function(){var a=cd(this.S(!0)),b=this;E(a,function(a){b.remove(a)})};function Id(a){a=ga(a)?{callback:a}:a||{};if(a.gapiHintOverride||C("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=nc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Ka(a,{_c:{jsl:{h:b}}})}Qc("gapi.iframes:gapi.iframes.style.common",a)}
;var Jd=!K&&!(A("Safari")&&!((A("Chrome")||A("CriOS"))&&!A("Edge")||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android")));function Kd(a,b){return Jd&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Ld(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Ld.prototype.contains=function(a){return a instanceof J?a.j>=this.left&&a.j<=this.left+this.width&&a.l>=this.top&&a.l<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
Ld.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Ld.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Ld.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Md(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=ba)try{var c=this;a.call(b,function(a){Nd(c,2,a)},function(a){Nd(c,3,a)})}catch(d){Nd(this,3,d)}}
function Od(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
Od.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var Pd=new za(function(){return new Od},function(a){a.reset()},100);
function Qd(a,b,c){var d=Pd.get();d.i=a;d.f=b;d.context=c;return d}
Md.prototype.then=function(a,b,c){return Rd(this,ga(a)?a:null,ga(b)?b:null,c)};
Md.prototype.then=Md.prototype.then;Md.prototype.$goog_Thenable=!0;Md.prototype.cancel=function(a){0==this.b&&ud(function(){var b=new Sd(a);Td(this,b)},this)};
function Td(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Td(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ud(c),Vd(c,e,3,b)))}a.i=null}else Nd(a,3,b)}
function Wd(a,b){a.f||2!=a.b&&3!=a.b||Xd(a);a.o?a.o.next=b:a.f=b;a.o=b}
function Rd(a,b,c,d){var e=Qd(null,null,null);e.b=new Md(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!aa(e)&&b instanceof Sd?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;Wd(a,e);return e.b}
Md.prototype.K=function(a){this.b=0;Nd(this,2,a)};
Md.prototype.T=function(a){this.b=0;Nd(this,3,a)};
function Nd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.K,g=a.T;if(e instanceof Md)Wd(e,Qd(f||ba,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){Yd(e,l,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.B=c,a.b=b,a.i=null,Xd(a),3!=b||c instanceof Sd||Zd(a,c))}}
function Yd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Xd(a){a.w||(a.w=!0,ud(a.F,a))}
function Ud(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
Md.prototype.F=function(){for(var a;a=Ud(this);)Vd(this,a,this.b,this.B);this.w=!1};
function Vd(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,$d(b,c,d);else try{b.o?b.i.call(b.context):$d(b,c,d)}catch(e){ae.call(null,e)}Aa(Pd,b)}
function $d(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Zd(a,b){a.v=!0;ud(function(){a.v&&ae.call(null,b)})}
var ae=Sc;function Sd(a){Ba.call(this,a)}
w(Sd,Ba);Sd.prototype.name="cancel";function L(a){eb.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
w(L,eb);k=L.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function be(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function ce(a,b,c){if(b=a.f[b]){var d=a.b;(b=Db(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.R(b)}}
k.R=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=ba;else{if(c){var d=zb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.J=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];de(this.b[g+1],this.b[g+2],d)}else{this.w++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;c=this.v.pop();)this.R(c)}}return 0!=e}return!1};
function de(a,b,c){ud(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(E(b,this.R,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.W=function(a){if(a){var b=this.f[a];return b?b.length:0}a=0;for(b in this.f)a+=this.W(b);return a};
k.ba=function(){L.D.ba.call(this);this.clear();this.v.length=0};function ee(a){this.b=a}
w(ee,Hd);k=ee.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.W=function(){return this.b.length};
k.S=function(a){var b=0,c=this.b,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function fe(){return p("gapi.iframes.getContext")()}
function ge(a){(fe()||fe()).connectIframes(a)}
function he(a,b){fe().addOnConnectHandler("yt",a,void 0,b)}
function ie(){return fe().getParentIframe()}
;function je(a){return a?new ke(le(a)):Ca||(Ca=new ke)}
function M(a){return r(a)?document.getElementById(a):a}
function me(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ne("*",a,b)}
function O(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=ne("*",a,b)[0];return d||null}
function ne(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&Eb(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c}
function oe(a,b){Ea(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:pe.hasOwnProperty(d)?a.setAttribute(pe[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var pe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function qe(a){a=a.document;a=re(a)?a.documentElement:a.body;return new Da(a.clientWidth,a.clientHeight)}
function se(a){var b=te(a);a=ue(a);return K&&qd("10")&&a.pageYOffset!=b.scrollTop?new J(b.scrollLeft,b.scrollTop):new J(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function te(a){return a.scrollingElement?a.scrollingElement:!id&&re(a)?a.documentElement:a.body||a.documentElement}
function ue(a){return a.parentWindow||a.defaultView}
function re(a){return"CSS1Compat"==a.compatMode}
function ve(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function we(a){return Ad&&void 0!=a.children?a.children:Ab(a.childNodes,function(a){return 1==a.nodeType})}
function xe(a){return ha(a)&&1==a.nodeType}
function ye(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function le(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ze(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(le(a).createTextNode(String(b)))}}
function Ae(a,b){var c=[];return Be(a,b,c,!0)?c[0]:void 0}
function Be(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Be(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ce={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},De={IMG:" ",BR:"\n"};function Ee(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Fe(a)||Ge(a)):Fe(a)&&Ge(a))&&K){var c;!ga(a.getBoundingClientRect)||K&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Fe(a){return K&&!qd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Ge(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function He(a){if(Bd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ie(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Bd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ie(a,b,c){if(!(a.nodeName in Ce))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in De)b.push(De[a.nodeName]);else for(a=a.firstChild;a;)Ie(a,b,c),a=a.nextSibling}
function Je(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ke(a,function(a){return(!e||a.nodeName==e)&&(!c||r(a.className)&&Eb(a.className.split(/\s+/),c))},!0,d)}
function P(a,b){return Je(a,null,b,void 0)}
function Ke(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ke(a){this.b=a||m.document||document}
k=ke.prototype;k.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
k.createElement=function(a){return this.b.createElement(String(a))};
k.appendChild=function(a,b){a.appendChild(b)};
k.isElement=xe;k.contains=ye;function Le(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(Le,ee);function Me(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(Me,ee);var Ne=p("yt.pubsub.instance_")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.R;L.prototype.publish=L.prototype.J;L.prototype.clear=L.prototype.clear;v("yt.pubsub.instance_",Ne);var Oe=p("yt.pubsub.subscribedKeys_")||{};v("yt.pubsub.subscribedKeys_",Oe);var Pe=p("yt.pubsub.topicToKeys_")||{};v("yt.pubsub.topicToKeys_",Pe);var Qe=p("yt.pubsub.isSynchronous_")||{};v("yt.pubsub.isSynchronous_",Qe);var Re=p("yt.pubsub.skipSubId_")||null;
v("yt.pubsub.skipSubId_",Re);function Se(a,b,c){var d=Te();if(d){var e=d.subscribe(a,function(){if(!Re||Re!=e){var d=arguments,g;g=function(){Oe[e]&&b.apply(c||window,d)};
try{Qe[a]?g():I(g,0)}catch(h){$b(h)}}},c);
Oe[e]=!0;Pe[a]||(Pe[a]=[]);Pe[a].push(e);return e}return 0}
function Ue(a){var b=Te();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),E(a,function(a){b.unsubscribeByKey(a);delete Oe[a]}))}
function R(a,b){var c=Te();return c?c.publish.apply(c,arguments):!1}
function Ve(a,b){Qe[a]=!0;var c=Te();c&&c.publish.apply(c,arguments);Qe[a]=!1}
function Te(){return p("yt.pubsub.instance_")}
;var We=p("yt.pubsub2.instance_")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.R;L.prototype.publish=L.prototype.J;L.prototype.clear=L.prototype.clear;v("yt.pubsub2.instance_",We);var Xe=p("yt.pubsub2.subscribedKeys_")||{};v("yt.pubsub2.subscribedKeys_",Xe);var Ye=p("yt.pubsub2.topicToKeys_")||{};v("yt.pubsub2.topicToKeys_",Ye);var Ze=p("yt.pubsub2.isAsync_")||{};v("yt.pubsub2.isAsync_",Ze);v("yt.pubsub2.skipSubKey_",null);
function S(a,b){var c=$e();return c?c.publish.call(c,a.toString(),a,b):!1}
function af(a,b,c){window.yt.pubsub2.skipSubKey_=a;S.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function U(a,b,c){var d=$e();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Xe[e])try{if(g&&a instanceof z&&a!=d)try{g=db(a.U,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){$b(l)}};
Ze[a.toString()]?p("yt.scheduler.instance")?td(f):I(f,0):f()}});
Xe[e]=!0;Ye[a.toString()]||(Ye[a.toString()]=[]);Ye[a.toString()].push(e);return e}
function bf(a){var b=$e();b&&(fa(a)&&(a=[a]),E(a,function(a){b.unsubscribeByKey(a);delete Xe[a]}))}
function $e(){return p("yt.pubsub2.instance_")}
;function cf(a){this.f=null;this.b=a;a=ie();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^pa()).toString(36);a&&(ge({role:"ytsubscribe",iframe:a,data:{id:b}}),he(t(function(a){this.f=a},this),this.b))}
cf.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);he(c,this.b)}};
cf.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);he(c,this.b)}};function df(a,b,c){if(r(b))(b=ef(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ef(c,d);f&&(c.style[f]=e)}}
var ff={};function ef(a,b){var c=ff[b];if(!c){var d=Ta(b),c=d;void 0===a.style[d]&&(d=(id?"Webkit":hd?"Moz":K?"ms":ed?"O":null)+Ua(d),void 0!==a.style[d]&&(c=d));ff[b]=c}return c}
function gf(a,b){var c=le(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function hf(a,b){return gf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function jf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function kf(a){if(K&&!(8<=Number(rd)))return a.offsetParent;var b=le(a),c=hf(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=hf(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function lf(a){for(var b=new Gd(0,Infinity,Infinity,0),c=je(a),d=c.b.body,e=c.b.documentElement,f=te(c.b);a=kf(a);)if(!(K&&0==a.clientWidth||id&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=hf(a,"overflow")){var g=mf(a),h=new J(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
qe(ue(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function mf(a){var b=le(a),c=new J(0,0),d;d=b?le(b):document;d=!K||9<=Number(rd)||re(je(d).b)?d.documentElement:d.body;if(a==d)return c;a=jf(a);b=se(je(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function nf(a){a=jf(a);return new J(a.left,a.top)}
function of(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function pf(a){var b=qf;if("none"!=hf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function qf(a){var b=a.offsetWidth,c=a.offsetHeight,d=id&&!b&&!c;return aa(b)&&!d||!a.getBoundingClientRect?new Da(b,c):(a=jf(a),new Da(a.right-a.left,a.bottom-a.top))}
function rf(a){var b=mf(a);a=pf(a);return new Ld(b.j,b.l,a.width,a.height)}
function sf(a){return"rtl"==hf(a,"direction")}
function tf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function uf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?tf(a,c):0}
var vf={thin:2,medium:4,thick:6};function wf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in vf?vf[c]:tf(a,c)}
;var xf=0;function yf(a,b){var c=ne(a,null,b);return c.length?c[0]:null}
var zf=p("yt.dom.dom.getNextId")||function(){return++xf};
v("yt.dom.dom.getNextId",zf);function Af(){var a=document,b;Cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Bf(a){var b=a.__yt_uid_key;b||(b=zf(),a.__yt_uid_key=b);return b}
function Cf(a,b){a=M(a);b=M(b);return!!Ke(a,function(a){return a===b},!0,void 0)}
function Df(){jc(document.body,"hide-players",!1);E(me("preserve-players"),function(a){H(a,"preserve-players")})}
;var Ef=p("yt.logging.transport.logRequestsQueue_")||{};v("yt.logging.transport.logRequestsQueue_",Ef);var Ff=p("yt.logging.transport.tokenToCttAuthInfo_")||{};v("yt.logging.transport.tokenToCttAuthInfo_",Ff);function Gf(a){if(ea(a))return Hf(a);if(ha(a)&&!ga(a)&&!(ha(a)&&0<a.nodeType))return If(a);try{return m.JSON.stringify(a),a}catch(b){}}
function If(a){return Fa(a,function(a){return Gf(a)})}
function Hf(a){return Bb(a,function(a){return Gf(a)})}
;function Jf(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Zb(b,"mode","subscribe"),b=Zb("/signin?context=popup","next",b),b=Zb(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Se("LOGGED_IN",function(b){Ue(C("LOGGED_IN_PUBSUB_KEY",void 0));kb("LOGGED_IN",!0);a(b)});
kb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
v("yt.pubsub.publish",R);function Kf(){var a=Af();return a?a:null}
;var Ia=p("yt.events.events.listeners_")||{};v("yt.events.events.listeners_",Ia);var Lf=p("yt.events.events.counter_")||{count:0};v("yt.events.events.counter_",Lf);function Mf(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ha(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Mf(a,b,c,d);if(e)return e;var e=++Lf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new $a(d);if(!Ke(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new $a(b);
b.currentTarget=a;return c.call(a,b)};
g=ac(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ia[e]=[a,b,c,g,d];return e}
function Nf(a,b,c){return Of(a,b,function(a){return F(a,c)})}
function Of(a,b,c){var d=a||document;return V(d,"click",function(a){var e=Ke(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function W(a){a&&("string"==typeof a&&(a=[a]),E(a,function(a){if(a in Ia){var b=Ia[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ia[a]}}))}
function Pf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Qf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
;function Rf(a){try{return eval("("+a+")")}catch(b){throw b;}}
;function Sf(a,b,c,d,e,f,g){var h,l;if(h=c.offsetParent){var n="HTML"==h.tagName||"BODY"==h.tagName;n&&"static"==hf(h,"position")||(l=mf(h),n||(n=(n=sf(h))&&hd?-h.scrollLeft:!n||gd&&qd("8")||"visible"==hf(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,l=dd(l,new J(n,h.scrollTop))))}h=l||new J;l=rf(a);if(n=lf(a)){var q=new Ld(n.left,n.top,n.right-n.left,n.bottom-n.top),n=Math.max(l.left,q.left),N=Math.min(l.left+l.width,q.left+q.width);if(n<=N){var Q=Math.max(l.top,q.top),q=Math.min(l.top+
l.height,q.top+q.height);Q<=q&&(l.left=n,l.top=Q,l.width=N-n,l.height=q-Q)}}n=je(a);Q=je(c);if(n.b!=Q.b){var N=n.b.body,B;var Q=ue(Q.b),q=new J(0,0),u;u=(u=le(N))?ue(u):window;b:{try{La(u.parent);B=!0;break b}catch(mc){}B=!1}if(B){B=N;do{var ka=u==Q?mf(B):nf(B);q.j+=ka.j;q.l+=ka.l}while(u&&u!=Q&&u!=u.parent&&(B=u.frameElement)&&(u=u.parent))}B=dd(q,mf(N));!K||9<=Number(rd)||re(n.b)||(B=dd(B,se(n.b)));l.left+=B.j;l.top+=B.l}a=Tf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new J(b,l.top+(a&1?
l.height:0));b=dd(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var T;g&&(T=lf(c))&&(T.top-=h.l,T.right-=h.j,T.bottom-=h.l,T.left-=h.j);return Uf(b,c,d,f,T,g,void 0)}
function Uf(a,b,c,d,e,f,g){a=new J(a.j,a.l);var h=Tf(b,c);c=pf(b);g=g?new Da(g.width,g.height):new Da(c.width,c.height);a=new J(a.j,a.l);g=new Da(g.width,g.height);var l=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,l|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,l|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,l|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,l|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new Ld(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new J(f.left,f.top);g instanceof J?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=of(a,!1);b.style.top=of(g,!1);g=new Da(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=re(je(le(b)).b),!K||qd("10")||g&&qd("8")?(b=b.style,hd?b.MozBoxSizing="border-box":id?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(K?(g=uf(b,"paddingLeft"),f=uf(b,"paddingRight"),d=uf(b,"paddingTop"),h=uf(b,"paddingBottom"),g=new Gd(d,f,h,g)):(g=gf(b,"paddingLeft"),f=gf(b,"paddingRight"),d=gf(b,"paddingTop"),h=gf(b,"paddingBottom"),g=new Gd(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(g))),!K||9<=Number(rd)?(f=gf(b,"borderLeftWidth"),d=gf(b,"borderRightWidth"),h=gf(b,"borderTopWidth"),b=gf(b,"borderBottomWidth"),b=new Gd(parseFloat(h),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=wf(b,"borderLeft"),d=wf(b,"borderRight"),h=wf(b,"borderTop"),b=wf(b,"borderBottom"),b=new Gd(h,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function Tf(a,b){return(b&8&&sf(a)?b^4:b)&-9}
;function Vf(a,b){(a=M(a))&&a.style&&(a.style.display=b?"":"none",jc(a,"hid",!b))}
function Wf(a){return(a=M(a))?"none"!=a.style.display&&!F(a,"hid"):!1}
function Xf(a){E(arguments,function(a){!ea(a)||a instanceof Element?Vf(a,!0):E(a,function(a){Xf(a)})})}
function Yf(a){E(arguments,function(a){!ea(a)||a instanceof Element?Vf(a,!1):E(a,function(a){Yf(a)})})}
;var Zf={},$f="ontouchstart"in document;function ag(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Ke(c,function(a){return F(a,b)},!0,d)}
function bg(a){var b="mouseover"==a.type&&"mouseenter"in Zf||"mouseout"==a.type&&"mouseleave"in Zf,c=a.type in Zf||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Zf[b],d;for(d in c.f){var e=ag(b,d,a.target);e&&!Ke(a.relatedTarget,function(a){return a==e},!0)&&c.J(d,e,b,a)}}if(b=Zf[a.type])for(d in b.f)(e=ag(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
V(document,"blur",bg,!0);V(document,"change",bg,!0);V(document,"click",bg);V(document,"focus",bg,!0);V(document,"mouseover",bg);V(document,"mouseout",bg);V(document,"mousedown",bg);V(document,"keydown",bg);V(document,"keyup",bg);V(document,"keypress",bg);V(document,"cut",bg);V(document,"paste",bg);$f&&(V(document,"touchstart",bg),V(document,"touchend",bg),V(document,"touchcancel",bg));function cg(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ac(b)(l)}
var l=bb&&bb();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=dg(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function dg(a,b){b=b||{};var c;c=void 0;c=window.location.href;var d=a.match(Tb)[1]||null,e=Ub(a.match(Tb)[3]||null);d&&e?(d=c,c=a.match(Tb),d=d.match(Tb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ub(c.match(Tb)[3]||null)==e&&(Number(c.match(Tb)[4]||null)||null)==(Number(a.match(Tb)[4]||null)||null):!0;for(var f in eg){if((e=d=C(eg[f]))&&!(e=c)){var g=a,e=f,h=C("CORS_HEADER_WHITELIST")||{};e=(g=Ub(g.match(Tb)[3]||null))?(h=h[g])?Eb(h,e):!1:!0}e&&(b[f]=d)}return b}
function fg(a,b){var c=C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Wb&&(!Ub(a.match(Tb)[3]||null)||b.withCredentials||Ub(a.match(Tb)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.M&&b.M[c])}
function gg(a,b){var c=b.format||"JSON";b.Xb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=C("XSRF_FIELD_NAME",void 0),e=C("XSRF_TOKEN",void 0),f=b.La;f&&(f[d]&&delete f[d],a=oc(a,f||{}));var g=b.postBody||"",f=b.M;fg(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=nc(g),Ka(d,f),g=b.Db&&"JSON"==b.Db?JSON.stringify(d):pc(d));var h=!1,l,n=cg(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=hg(c,a,b.Vb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.da&&b.da.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.Ab&&0<b.timeout&&(l=I(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.Ab.call(b.context||m,n))},b.timeout))}
function hg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Rf(a));break;case "XML":if(b=(b=b.responseXML)?ig(b):null)d={},E(b.getElementsByTagName("*"),function(a){d[a.tagName]=jg(a)})}c&&kg(d);
return d}
function kg(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Fd(a[b]);a[c]=d}else kg(a[b])}}
function ig(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function jg(a){var b="";E(a.childNodes,function(a){b+=a.nodeValue});
return b}
var eg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function lg(a){this.v=a;this.B={};this.K=[];this.F=[]}
k=lg.prototype;k.C=function(a){return P(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
k.unregister=function(){Ue(this.K);this.K.length=0;bf(this.F);this.F.length=0};
k.init=ba;k.dispose=ba;function mg(a,b,c){a.K.push(Se(b,c,a))}
function ng(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in Zf||(Zf[b]=new L);Zf[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in Zf){var e=Zf[b];ce(e,X(a,d),a.B[c]);0>=e.W()&&(e.dispose(),delete Zf[b])}delete a.B[c]}
k.O=function(a,b,c){var d=this.g(a,b);if(d&&(d=p(d))){var e=Jb(arguments,2);Ib(e,0,0,a);d.apply(null,e)}};
k.g=function(a,b){return Va(a,b)};
function og(a,b){Za(a,"tooltip-text",b)}
;var pg={},qg=0;function rg(a){var b=new Image,c=""+qg++;pg[c]=b;b.onload=b.onerror=function(){delete pg[c]};
b.src=a}
;function sg(a){lg.call(this,a);this.i=null}
w(sg,lg);k=sg.prototype;k.C=function(a){var b=lg.prototype.C.call(this,a);return b?b:a};
k.register=function(){mg(this,"yt-uix-kbd-nav-move-out-done",this.H)};
k.dispose=function(){sg.D.dispose.call(this);tg(this)};
k.g=function(a,b){var c=sg.D.g.call(this,a,b);return c?c:(c=sg.D.g.call(this,a,"card-config"))&&(c=p(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){G(b,X(this,"active"));var c=ug(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;vg(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.O(b,"card-action",a);this.i=a;Yf(c);I(t(function(){e||(Xf(c),R("yt-uix-card-show",b,a,c));wg(c);G(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function ug(a,b,c){var d=c||b,e=X(a,"card");c=xg(a,d);var f=M(X(a,"card")+Bf(d));if(f)return a=O(X(a,"card-body"),f),ye(a,c)||(ve(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Bf(d);f.className=e;(d=a.g(d,"card-class"))&&hc(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;ve(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function vg(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=O(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f,q,N;n&&l?(N=13,q=8):n&&!l?(N=12,q=9):!n&&l?(N=9,q=12):(N=8,q=13);var Q=sf(document.body),f=sf(b);Q!=f&&(N^=4);var B;d?(f=b.offsetHeight/2-12,B=new J(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,B=new J(b.offsetWidth+6,-12));var u=pf(c),f=Math.min(f,(d?u.height:
u.width)-24-6);6>f&&(f=6,d?B.l+=12-b.offsetHeight/2:B.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");jc(c,b,n);jc(c,a,l);u=Sf(e,N,c,q,B,null,u);!g&&u&&(u&48&&(n=!n,N^=4,q^=4),u&192&&(l=!l,N^=1,q^=1),jc(c,b,n),jc(c,a,l),Sf(e,N,c,q,B));h&&(e=parseInt(c.style.top,10),g=se(document).l,df(c,"position","fixed"),df(c,"top",e-g+"px"));Q&&(c.style.right="",e=rf(c),e.left=e.left||parseInt(c.style.left,10),g=qe(window),c.style.left="",c.style.right=g.width-e.left-e.width+"px");
e=O("yt-uix-card-body-arrow",c);g=O("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!Q&&n||Q&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=O("yt-uix-card-arrow",c);n=O("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?pf(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
k.H=function(a){if(a=this.C(a)){var b=M(X(this,"card")+Bf(a));b&&(H(a,X(this,"active")),H(b,X(this,"card-visible")),Yf(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(ve(b.cardMask),b.cardMask=null))}};
function tg(a){a.i&&a.H(a.i)}
k.Fb=function(a,b){var c=this.C(a);if(c){if(b){var d=xg(this,c);if(!d)return;b instanceof Cd?d.innerHTML=Ed(b):ze(d,b)}F(c,X(this,"active"))&&(c=ug(this,a,c),vg(this,a,c),Xf(c),wg(c))}};
k.isActive=function(a){return(a=this.C(a))?F(a,X(this,"active")):!1};
function xg(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?M(c):O(d,b))||(c=document.createElement("div"));var f=c;H(f,d);G(f,e);b.cardContentNode=c}return c}
function wg(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',hc(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function yg(){lg.call(this,"kbd-nav")}
var zg;w(yg,lg);ca(yg);k=yg.prototype;k.register=function(){Y(this,"keydown",this.ua);mg(this,"yt-uix-kbd-nav-move-in",this.Da);mg(this,"yt-uix-kbd-nav-move-in-to",this.wb);mg(this,"yt-uix-kbd-move-next",this.Ea);mg(this,"yt-uix-kbd-nav-move-to",this.V)};
k.unregister=function(){Z(this,"keydown",this.ua);W(zg)};
k.ua=function(a,b,c){var d=c.keyCode;if(a=P(a,X(this)))switch(d){case 13:case 32:this.Da(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Kd(a,"kbdNavMoveOut");!c;){c=P(a.parentElement,X(this));if(!c)break a;c=Kd(c,"kbdNavMoveOut")}c=M(c);this.V(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&F(a,X(this,"list")))switch(d){case 40:this.Ea(b,a);break;case 38:d=document.activeElement==a,a=Ag(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Bg(this,a[b]))}c.preventDefault()}};
k.Da=function(a){var b=Kd(a,"kbdNavMoveIn"),b=M(b);Cg(this,a,b);this.V(b)};
k.wb=function(a){var b;a:{var c=document;try{b=c&&c.activeElement;break a}catch(d){}b=null}Cg(this,b,a);this.V(a)};
k.V=function(a){if(a)if(Ee(a))a.focus();else{var b=Ae(a,function(a){return xe(a)?Ee(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Cg(a,b,c){b&&c&&(G(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Jd&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.Ea=function(a,b){var c=document.activeElement==b,d=Ag(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Bg(this,d[c]))};
function Bg(a,b){if(b){var c=Je(b,"LI");c&&(G(c,X(a,"highlight")),zg=V(b,"blur",t(function(a){H(a,X(this,"highlight"));W(zg)},a,c)))}}
function Ag(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ab(we(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ab(Bb(a,function(a){return Wf(a)?Ae(a,function(a){return xe(a)?Ee(a):!1}):!1}),function(a){return!!a})}
;function Dg(){lg.call(this,"tooltip");this.b=0;this.f={}}
w(Dg,lg);ca(Dg);k=Dg.prototype;k.register=function(){Y(this,"mouseover",this.Y);Y(this,"mouseout",this.L);Y(this,"focus",this.ra);Y(this,"blur",this.ma);Y(this,"click",this.L);Y(this,"touchstart",this.Ka);Y(this,"touchend",this.$);Y(this,"touchcancel",this.$)};
k.unregister=function(){Z(this,"mouseover",this.Y);Z(this,"mouseout",this.L);Z(this,"focus",this.ra);Z(this,"blur",this.ma);Z(this,"click",this.L);Z(this,"touchstart",this.Ka);Z(this,"touchend",this.$);Z(this,"touchcancel",this.$);this.dispose();Dg.D.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.L(this.f[a]);this.f={}};
k.Y=function(a){if(!(this.b&&1E3>pa()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(Ya(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Eg(this,a);Ya(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Za(a,"tooltip-show-timer",b.toString());a.title&&(og(a,Fg(this,a)),a.title="");b=ia(a).toString();this.f[b]=a}};
k.L=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Ya(a,"tooltip-show-timer"));b=t(function(){if(a){var b=M(Gg(this,a));b&&(Hg(b),ve(b),Ya(a,"content-id"));b=M(Gg(this,a,"arialabel"));ve(b)}Ya(a,"tooltip-hide-timer")},this);
b=I(b,50);Za(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
k.ra=function(a){this.b=0;this.Y(a)};
k.ma=function(a){this.b=0;this.L(a)};
k.Ka=function(a,b,c){c.changedTouches&&(this.b=0,(a=ag(b,X(this),c.changedTouches[0].target))&&this.Y(a))};
k.$=function(a,b,c){c.changedTouches&&(this.b=pa(),(a=ag(b,X(this),c.changedTouches[0].target))&&this.L(a))};
function Ig(a,b,c){og(b,c);a=a.g(b,"content-id");(a=M(a))&&ze(a,c)}
function Fg(a,b){return a.g(b,"tooltip-text")||b.title}
function Eg(a,b){if(b){var c=Fg(a,b);if(c){var d=M(Gg(a,b));if(!d){d=document.createElement("div");d.id=Gg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=Jg(a,b),l=Gg(a,b,"content");g.id=l;Za(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=He(b),l=Gg(a,b,"arialabel"),f=document.createElement("div");G(f,X(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;ze(f,n);b.setAttribute("aria-labelledby",l);l=Kf()||document.body;l.appendChild(f);l.appendChild(d);Ig(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",G(g,X(a,"normal-wrap")));g=F(b,X(a,"reverse"));Kg(a,b,d,e,h,g)||Kg(a,b,d,e,h,!g);var q=X(a,"tip-visible");
I(function(){G(d,q)},0)}}}}
function Kg(a,b,c,d,e,f){jc(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=pf(b);f=new J((h.width-10)/2,f?h.height:0);var l=mf(b);Uf(new J(l.j+f.j,l.l+f.l),c,g);f=qe(window);var n;1==c.nodeType?n=nf(c):(c=c.changedTouches?c.changedTouches[0]:c,n=new J(c.clientX,c.clientY));c=pf(d);var q=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),l=!!(n.j<q);f=!!(f.width<n.j+q);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Gg(a,b,c){a=X(a)+Bf(b);c&&(a+="-"+c);return a}
function Jg(a,b){var c=null;jd&&F(b,X(a,"masked"))&&((c=M("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Xf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function Hg(a){var b=M("yt-uix-tooltip-shared-mask"),c=b&&Ke(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Yf(b),document.body.appendChild(b))}
;var Lg=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",Lg);function Mg(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?cg(c,void 0):rg(c))}}
;function Ng(){sg.call(this,"hovercard")}
w(Ng,sg);ca(Ng);k=Ng.prototype;k.register=function(){Y(this,"mouseenter",this.za,"target");Y(this,"mouseleave",this.Ba,"target");Y(this,"mouseenter",this.Aa,"card");Y(this,"mouseleave",this.Ca,"card")};
k.unregister=function(){Z(this,"mouseenter",this.za,"target");Z(this,"mouseleave",this.Ba,"target");Z(this,"mouseenter",this.Aa,"card");Z(this,"mouseleave",this.Ca,"card")};
k.za=function(a){if(Og!=a){Og&&(this.H(Og),Og=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=I(b,-1<c?c:200);Za(a,"card-timer",b.toString());Og=a;a.alt&&(Za(a,"card-alt",a.alt),a.alt="");a.title&&(Za(a,"card-title",a.title),a.title="")}};
k.Ba=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;I(t(this.qb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
k.qb=function(a){this.C(a).isCardHidable&&(this.H(a),Og=null)};
k.Aa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Ca=function(a){a&&this.H(a.cardTargetNode)};
var Og=null;(new Le).isAvailable();(new Me).isAvailable();function Pg(a){y.call(this,1,arguments);this.b=a}
w(Pg,y);function Qg(a){y.call(this,1,arguments);this.b=a}
w(Qg,y);function Rg(a,b,c){y.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
w(Rg,y);function Sg(a,b,c,d,e){y.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
w(Sg,y);function Tg(a,b,c){y.call(this,1,arguments);this.b=a;this.f=b}
w(Tg,y);function Ug(a,b,c,d,e,f,g){y.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
w(Ug,y);
var Vg=new z("subscription-batch-subscribe",Pg),Wg=new z("subscription-batch-unsubscribe",Pg),Xg=new z("subscription-subscribe",Sg),Yg=new z("subscription-subscribe-loading",Qg),Zg=new z("subscription-subscribe-loaded",Qg),$g=new z("subscription-subscribe-success",Tg),ah=new z("subscription-subscribe-external",Sg),bh=new z("subscription-unsubscribe",Ug),ch=new z("subscription-unsubscirbe-loading",Qg),dh=new z("subscription-unsubscribe-loaded",Qg),eh=new z("subscription-unsubscribe-success",Qg),fh=
new z("subscription-external-unsubscribe",Ug),gh=new z("subscription-enable-ypc",Qg),hh=new z("subscription-disable-ypc",Qg),ih=new z("subscription-prefs",Rg),jh=new z("subscription-prefs-success",Rg),kh=new z("subscription-prefs-failure",Rg);var lh="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),mh=[Yg,Zg,$g,ch,dh,eh,ah,fh],nh=[Yg,Zg,$g,ch,dh,eh,gh,hh];var oh=!1,ph=[];function qh(a){a.b?oh?S(ah,a):S(qb,new lb(function(){S(vb,new pb(a.b))})):rh(a.f,a.o,a.i,a.source)}
function sh(a){a.b?oh?S(fh,a):S(qb,new lb(function(){S(tb,new pb(a.b))})):th(a.f,a.v,a.o,a.i,a.source)}
function uh(a){vh(Gb(a.b))}
function wh(a){xh(Gb(a.b))}
function yh(a){zh(a.i,a.f,a.b)}
function Ah(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&S($g,new Tg(b,c,a.b.channelInfo))}
function Bh(a){var b=a.b;Ea(a.f,function(a,d){S($g,new Tg(d,a,b[d]))})}
function Ch(a){S(eh,new Qg(a.f.itemId));a.b&&a.b.length&&(Dh(a.b,eh),Dh(a.b,gh))}
function rh(a,b,c,d){var e=new Qg(a);S(Yg,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=C("PLAYBACK_ID"))&&(c.plid=d);(d=C("EVENT_ID"))&&(c.ei=d);b&&Eh(b,c);gg("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",La:f,M:c,P:function(b,c){var d=c.response;S($g,new Tg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Mg(d.actions)},
da:function(){S(Zg,e)}})}
function th(a,b,c,d,e){var f=new Qg(a);S(ch,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=C("PLAYBACK_ID"))&&(d.plid=a);(a=C("EVENT_ID"))&&(d.ei=a);c&&Eh(c,d);gg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",La:g,M:d,P:function(a,b){var c=b.response;S(eh,f);c.actions&&Mg(c.actions)},
da:function(){S(dh,f)}})}
function zh(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Rg(a,b,c);gg("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",M:d,onError:function(){S(kh,e)},
P:function(){S(jh,e)}})}}
function vh(a){if(a.length){var b=Ib(a,0,40);S("subscription-batch-subscribe-loading");Dh(b,Yg);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Dh(b,Zg)};
gg("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",M:c,P:function(c,f){d();var e=f.response,h=e.id;if("array"==da(h)&&h.length==b.length){var l=e.channel_info_map;E(h,function(a,c){var d=b[c];S($g,new Tg(d,a,l[d]))});
a.length?vh(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function xh(a){if(a.length){var b=Ib(a,0,40);S("subscription-batch-unsubscribe-loading");Dh(b,ch);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Dh(b,dh)};
gg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",M:c,P:function(){d();Dh(b,eh);a.length&&xh(a)},
onError:function(){d()}})}}
function Dh(a,b){E(a,function(a){S(b,new Qg(a))})}
function Eh(a,b){var c=nc(a),d;for(d in c)b[d]=c[d]}
;function Fh(){this.b=this.f=null}
function Gh(a,b){var c=p("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||Hh(a),e=ie();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Fh.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function Hh(a){if(!a.f){var b;b=p("gapi.iframes.makeWhiteListIframesFilter")(lh);a.f=b}return a.f}
;function Ih(){lg.call(this,"button");this.b=null;this.i=[];this.f={}}
w(Ih,lg);ca(Ih);k=Ih.prototype;k.register=function(){Y(this,"click",this.Oa);Y(this,"keydown",this.xa);Y(this,"keypress",this.ya);mg(this,"page-scroll",this.ob)};
k.unregister=function(){Z(this,"click",this.Oa);Z(this,"keydown",this.xa);Z(this,"keypress",this.ya);Jh(this);this.f={};Ih.D.unregister.call(this)};
k.Oa=function(a){a&&!a.disabled&&(Kh(this,a),this.click(a))};
k.xa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Lh(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Ae(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.vb:"table"==e&&(f=this.ub);f&&Mh(this,a,b,c,t(f,this))}}};
k.ob=function(){var a=this.f,b=0,c;for(c in a)b++;if(0!=b)for(var d in a){b=a[d];c=P(b.activeButtonNode||b.parentNode,X(this));if(void 0==c||void 0==b)break;Nh(this,c,b,!0)}};
function Mh(a,b,c,d,e){var f=Wf(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Oh(a,c)){if(aa(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;a=b;if("a"==a.tagName.toLowerCase()){var h,l;h=void 0===h?{}:h;l=void 0===l?"":l;b=window.location;h=Vb(Yb([a.href],h))+l;h instanceof Vc||h instanceof Vc||(h=h.wa?h.sa():String(h),Xc.test(h)||(h="about:invalid#zClosurez"),h=Yc(h));h instanceof Vc&&h.constructor===Vc&&h.f===Wc?h=h.b:(da(h),h="type_error:SafeUrl");
b.href=h}else Qf(a)}else g&&Ph(a,b);else f?27==d.keyCode?(Oh(a,c),Ph(a,b)):e(b,c,d):(h=F(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Qf(b),d.preventDefault()))}
k.ya=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Lh(this,a),Wf(a)&&c.preventDefault())};
function Oh(a,b){var c=X(a,"menu-item-highlight"),d=O(c,b);d&&H(d,c);return d}
function Qh(a,b,c){G(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.ub=function(a,b,c){var d=Oh(this,b);if(d){var e=yf("table",b);b=ne("td",null,e);d=Rh(d,b,ne("td",null,yf("tr",e)).length,c);-1!=d&&(Qh(this,a,b[d]),c.preventDefault())}};
k.vb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Oh(this,b);d&&(b=Ab(ne("li",null,b),Wf),Qh(this,a,b[Rh(d,b,1,c)]),c.preventDefault())}};
function Rh(a,b,c,d){var e=b.length;a=zb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Sh(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Yf(c),b.iframeMask=c);return c}
function Nh(a,b,c,d){var e=P(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=rf(b);if(F(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(q){}}F(b,"flip")&&(F(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=kf(e):a.g(b,"button-menu-root-container")&&(l=Th(a,b));K&&!qd("8")&&(l=null);var n;l&&(n=rf(l),n=new Gd(-n.top,n.left,n.top,-n.left));l=new J(0,1);F(b,X(a,"center-menu"))&&(l.j-=Math.round((pf(c).width-pf(b).width)/
2));d&&(l.l+=se(document).l);if(a=Sh(a,b))b=pf(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Sf(e,f,a,g,l,n,197),d&&df(a,"position","fixed");Sf(e,f,c,g,l,n,197)}
function Th(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return P(b,c)}return document.body}
k.Qa=function(a){if(a){var b=Lh(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=Th(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Sh(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[Bf(a).toString()]=b);Nh(this,a,b,c);Ve("yt-uix-button-menu-before-show",a,b);Xf(b);d&&Xf(d);
this.O(a,"button-menu-action",!0);G(a,X(this,"active"));b=t(this.Pa,this,a,!1);d=t(this.Pa,this,a,!0);c=t(this.Gb,this,a,void 0);this.b&&Lh(this,this.b)==Lh(this,a)||Jh(this);R("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function Ph(a,b){if(b){var c=Lh(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Yf(c);a.O(b,"button-menu-action",!1);var d=Sh(a,b),e=Bf(c).toString();delete a.f[e];I(function(){d&&d.parentNode&&(Yf(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=P(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));ic(b,f);R("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
k.Gb=function(a,b){var c=Lh(this,a);if(c){b&&(b instanceof Cd?c.innerHTML=Ed(b):ze(c,b));var d=!!this.g(a,"button-menu-fixed");Nh(this,a,c,d)}};
k.Pa=function(a,b,c){c=Pf(c);var d=P(c,X(this));if(d){var d=Lh(this,d),e=Lh(this,a);if(d==e)return}var d=P(c,X(this,"menu")),e=d==Lh(this,a),f=F(c,X(this,"menu-item")),g=F(c,X(this,"menu-close"));if(!d||e&&(f||g))Ph(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=O(X(this,"content"),a))&&ze(a,He(c)),Uh(this,d,c))};
function Uh(a,b,c){var d=X(a,"menu-item-selected");E(me(d,b),function(a){H(a,d)});
G(c.parentNode,d)}
function Lh(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&M(c),d=X(a,"menu");c?hc(c,[d,X(a,"menu-external")]):c=O(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return F(a,X(this,"toggled"))};
function Kh(a,b){if(a.g(b,"button-toggle")){var c=P(b,X(a,"group")),d=X(a,"toggled"),e=F(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");E(me(X(a),c),function(a){a!=b||"optional"==f&&e?(H(a,d),a.removeAttribute("aria-pressed")):(G(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),lc(b,d)}}
k.click=function(a){if(Lh(this,a)){var b=Lh(this,a);if(b){var c=P(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Ph(this,c),I(t(this.Qa,this,a),1)):Wf(b)?Ph(this,a):this.Qa(a)}a.focus()}this.O(a,"button-action")};
function Jh(a){a.b&&Ph(a,a.b)}
;function Vh(){this.b=new Fh;this.i=!1;this.f={}}
function Wh(a){E(mh,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Eb():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:Gf(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
Vh.prototype.o=function(a,b){var c=Db(nh,function(b){return b.toString()==a});
if(c&&(!c.U||b)){var d;if(c.U)try{d=db(c.U,b)}catch(f){return}var e=this.f[c.toString()];e?af(e,c,d):S(c,d)}};
Vh.prototype.v=function(a){Xh(this)&&Gh(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Vh.prototype.w=function(a){Xh(this)&&Gh(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Xh(a){return a.i||!!C("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Yh(){lg.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
w(Yh,lg);ca(Yh);function Zh(a){var b=Yh.A();if(F(a,X(b)))return a;var c=b.C(a);return c?c:P(a,X(b,"content"))==b.b?b.f:null}
k=Yh.prototype;k.register=function(){Y(this,"click",this.ta);Y(this,"mouseenter",this.mb);mg(this,"page-scroll",this.pb);mg(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);$h(this,a)});
this.o=new L};
k.unregister=function(){Z(this,"click",this.ta);this.f=this.b=null;W(Kb(Ga(this.i)));this.i={};Ea(this.w,function(a){ve(a)},this);
this.w={};fb(this.o);this.o=null;Yh.D.unregister.call(this)};
k.ta=function(a,b,c){a&&(b=ai(this,a),!b.disabled&&Cf(c.target,b)&&bi(this,a))};
k.mb=function(a,b,c){a&&F(a,X(this,"hover"))&&Cf(c.target,ai(this,a))&&bi(this,a,!0)};
k.pb=function(){this.b&&this.f&&ci(this,this.f,this.b)};
function ci(a,b,c){var d=di(a,b);if(d){var e=pf(c),f;if(e instanceof Da)f=e.height,e=e.width;else throw Error("missing height argument");d.style.width=of(e,!0);d.style.height=of(f,!0)}c==a.b&&(e=9,f=8,F(b,X(a,"reversed"))&&(e^=1,f^=1),F(b,X(a,"flipped"))&&(e^=4,f^=4),a=new J(0,1),d&&Sf(b,e,d,f,a,null,197),Sf(b,e,c,f,a,null,197))}
function bi(a,b,c){ei(a,b)&&!c?$h(a,b):(fi(a,b),!a.b||Cf(b,a.b)?a.Ra(b):be(a.o,t(a.Ra,a,b)))}
k.Ra=function(a){if(a){var b=gi(this,a);if(b){Ve("yt-uix-menu-before-show",a,b);this.b?Cf(a,this.b)||$h(this,this.f):(this.f=a,this.b=b,F(a,X(this,"sibling-content"))||(ve(b),document.body.appendChild(b)),b.style.minWidth=ai(this,a).offsetWidth-2+"px");var c=di(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);H(b,X(this,"content-hidden"));ci(this,a,b);hc(ai(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);hi(b);ii(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.Hb,this,a),e=t(this.sb,this,a),c=ia(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];F(a,X(this,"indicate-selected"))&&(d=t(this.tb,this,a),this.i[c].push(V(b,"click",d)));F(a,X(this,"hover"))&&(a=t(this.nb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
k.nb=function(a,b){var c=Pf(b);c&&(Cf(c,ai(this,a))||ji(this,c)||ki(this,a))};
k.Hb=function(a,b){var c=Pf(b);if(c){if(ji(this,c)){var d=P(c,X(this,"content")),e=Je(c,"LI");e&&d&&ye(d,e)&&Ve("yt-uix-menu-item-clicked",c);c=P(c,X(this,"close-on-select"));if(!c)return;d=Zh(c)}$h(this,d||a)}};
function fi(a,b){if(b){var c=P(b,X(a,"content"));c&&E(me(X(a),c),function(a){!Cf(a,b)&&ei(this,a)&&ki(this,a)},a)}}
function $h(a,b){if(b){var c=[];c.push(b);var d=gi(a,b);d&&(d=me(X(a),d),d=Gb(d),c=c.concat(d),E(c,function(a){ei(this,a)&&ki(this,a)},a))}}
function ki(a,b){if(b){var c=gi(a,b);ic(ai(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);G(c,X(a,"content-hidden"));var d=gi(a,b);d&&oe(d,{"aria-expanded":"false"});(d=di(a,b))&&d.parentNode&&ve(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.J("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=ia(b).toString();W(a.i[c]);delete a.i[c]}}
k.sb=function(a,b){var c=Pf(b);c&&li(this,a,c)};
k.tb=function(a,b){var c=Pf(b);if(c){var d=ai(this,a);if(d&&(c=Je(c,"LI")))if(c=He(c).trim(),d.hasChildNodes()){var e=Ih.A();(d=O(X(e,"content"),d))&&ze(d,c)}else ze(d,c)}};
function ii(a,b){var c=gi(a,b);if(c){E(c.children,function(a){"LI"==a.tagName&&oe(a,{role:"menuitem"})});
oe(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ia(c),c.id=d);(c=ai(a,b))&&oe(c,{"aria-controls":d})}}
function li(a,b,c){var d=gi(a,b);d&&F(b,X(a,"checked"))&&(a=Je(c,"LI"))&&(a=O("yt-ui-menu-item-checked-hid",a))&&(E(me("yt-ui-menu-item-checked",d),function(a){kc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),kc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function ei(a,b){var c=gi(a,b);return c?!F(c,X(a,"content-hidden")):!1}
function hi(a){E(ne("UL",null,a),function(a){a.tabIndex=0;var b=yg.A();hc(a,[X(b),X(b,"list")])})}
function gi(a,b){var c=Va(b,"menu-content-id");return c&&(c=M(c))?(hc(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:O(X(a,"content"),b)}
function di(a,b){var c=ia(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];E(gc(b),function(a){e.push(a+"-mask")});
hc(d,e);a.w[c]=d}return d||null}
function ai(a,b){return O(X(a,"trigger"),b)}
function ji(a,b){return Cf(b,a.b)||Cf(b,a.f)}
;function mi(){sg.call(this,"clickcard");this.b={};this.f={}}
w(mi,sg);ca(mi);k=mi.prototype;k.register=function(){mi.D.register.call(this);Y(this,"click",this.pa,"target");Y(this,"click",this.oa,"close")};
k.unregister=function(){mi.D.unregister.call(this);Z(this,"click",this.pa,"target");Z(this,"click",this.oa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
k.pa=function(a,b,c){c.preventDefault();b=Je(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=r(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(F(b,X(this,"active"))?(this.H(a),H(b,X(this,"active"))):(this.show(a),G(b,X(this,"active"))))}};
k.show=function(a){mi.D.show.call(this,a);var b=this.C(a),c=ia(a).toString();if(!Va(b,"click-outside-persists")){if(this.b[c])return;var b=V(document,"click",t(this.qa,this,a)),d=V(window,"blur",t(this.qa,this,a));this.b[c]=[b,d]}a=V(window,"resize",t(this.Fb,this,a,void 0));this.f[c]=a};
k.H=function(a){mi.D.H.call(this,a);a=ia(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
k.qa=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=P(b.target,c)||P(Zh(b.target),c));(d=d||P(document.activeElement,c)||P(Zh(document.activeElement),c))||this.H(a)};
k.oa=function(a){(a=P(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.H(a)};function ni(a,b,c,d,e,f){this.b=a;this.B=null;this.i=O("yt-dialog-fg",this.b)||this.b;if(a=O("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ia(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.T=O("yt-dialog-focus-trap",this.b);this.ga=!1;this.o=new L;this.F=[];this.F.push(Nf(this.b,t(this.xb,this),"yt-dialog-dismiss"));this.F.push(V(this.T,"focus",t(this.lb,this),!0));oi(this);this.Va=b;this.bb=c;this.ab=d;this.K=e;this.cb=f;this.w=
this.v=null}
var pi={LOADING:"loading",Mb:"content",Tb:"working"};function qi(a,b){a.X()||a.o.subscribe("post-all",b)}
function oi(a){a=O("yt-dialog-fg-content",a.b);var b=[];Ea(pi,function(a){b.push("yt-dialog-show-"+a)});
ic(a,b);G(a,"yt-dialog-show-content")}
k=ni.prototype;
k.show=function(){if(!this.X()){this.B=document.activeElement;if(!this.ab){this.f||(this.f=M("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=qe(b).height,re(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.f.style.height=a+"px";Xf(this.f)}this.va();a=ri(this);si(a);this.v=V(document,"keydown",t(this.rb,this));a=this.b;d=Se("player-added",this.va,this);Za(a,"player-ready-pubsub-key",d);this.bb&&(this.w=V(document,"click",t(this.Bb,this)));Xf(this.b);this.i.setAttribute("tabindex","0");ti(this);this.K||G(document.body,"yt-dialog-active");Jh(Ih.A());tg(mi.A());tg(Ng.A());R("yt-ui-dialog-show-complete",this)}};
function ui(){return Cb(me("yt-dialog"),function(a){return Wf(a)})}
k.va=function(){if(!this.cb){var a=this.b;jc(document.body,"hide-players",!0);a&&jc(a,"preserve-players",!0)}};
function ri(a){var b=ne("iframe",null,a.b);E(b,function(a){var b=Va(a,"onload");b&&(b=p(b))&&V(a,"load",b);if(b=Va(a,"src"))a.src=b},a);
return Gb(b)}
function si(a){E(document.getElementsByTagName("iframe"),function(b){-1==zb(a,b)&&G(b,"iframe-hid")})}
function vi(){E(me("iframe-hid"),function(a){H(a,"iframe-hid")})}
k.xb=function(a){a=a.currentTarget;a.disabled||(a=Va(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.X()){this.o.J("pre-all");this.o.J("pre-"+a);Yf(this.b);tg(mi.A());tg(Ng.A());this.i.setAttribute("tabindex","-1");ui()||(Yf(this.f),this.K||H(document.body,"yt-dialog-active"),Df(),vi());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=Va(b,"player-ready-pubsub-key");c&&(Ue(c),Ya(b,"player-ready-pubsub-key"))}this.o.J("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.o&&this.o.J("post-"+
a);this.B&&this.B.focus()}};
k.setTitle=function(a){ze(O("yt-dialog-title",this.b),a)};
k.rb=function(a){I(t(function(){this.Va||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&F(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Bb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.X=function(){return this.ga};
k.dispose=function(){Wf(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;I(t(function(){this.B=null},this),0);
this.T=this.i=null;this.o.dispose();this.o=null;this.ga=!0};
k.lb=function(a){a.stopPropagation();ti(this)};
function ti(a){I(t(function(){this.i&&this.i.focus()},a),0)}
v("yt.ui.Dialog",ni);function wi(){lg.call(this,"overlay");this.o=this.f=this.i=this.b=null}
w(wi,lg);ca(wi);k=wi.prototype;k.register=function(){Y(this,"click",this.ea,"target");Y(this,"click",this.Na,"close");xi(this)};
k.unregister=function(){wi.D.unregister.call(this);Z(this,"click",this.ea,"target");Z(this,"click",this.Na,"close");this.o&&(Ue(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
k.ea=function(a){if(!this.b||!Wf(this.b.b)){var b=this.C(a);a=yi(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new ni(a,c);this.i=b;var e=O("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));hc(e,f)}this.b.show();R("yt-uix-kbd-nav-move-to",e||a);xi(this);c||
d||(c=t(function(a){F(a.target,"yt-dialog-base")&&zi(this)},this),this.f=V(O("yt-dialog-base",a),"click",c));
this.O(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function xi(a){a.o||(a.o=Se("yt-uix-overlay-hide",Ai));a.b&&qi(a.b,function(){var a=wi.A();a.i=null;a.b.dispose();a.b=null})}
function zi(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.O(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function yi(a,b){var c;if(a)if(c=O("yt-dialog",a)){var d=M("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=P(b,"yt-dialog"));return c}
function Bi(){var a=wi.A();if(a.i)a=O("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=me("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=P(a[b],"yt-dialog");if(Wf(c)){a=a[b];break a}}a=null}return a}
k.Na=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function Ai(){zi(wi.A())}
k.show=function(a){this.ea(a)};var Ci={},Di=[];function Ei(a){a=P(a,"yt-uix-button-subscription-container");return O("yt-dialog",O("unsubscribe-confirmation-overlay-container",a))}
function Fi(a,b){W(Di);Di.length=0;Ci[b]||(Ci[b]=Ei(a));wi.A().show(Ci[b]);var c=Bi();return new Md(function(a){Di.push(Nf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Gi(){lg.call(this,"subscription-button");this.b=this.f=!1}
w(Gi,lg);ca(Gi);Gi.prototype.register=function(){Y(this,"click",this.fa);ng(this,Yg,this.Ga);ng(this,Zg,this.Fa);ng(this,$g,this.Ib);ng(this,ch,this.Ga);ng(this,dh,this.Fa);ng(this,eh,this.Jb);ng(this,gh,this.zb);ng(this,hh,this.yb)};
Gi.prototype.unregister=function(){Z(this,"click",this.fa);Gi.D.unregister.call(this)};
Gi.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var Hi={ha:"hover-enabled",Ta:"yt-uix-button-subscribe",Ua:"yt-uix-button-subscribed",Kb:"ypc-enabled",Wa:"yt-uix-button-subscription-container",Xa:"yt-subscription-button-disabled-mask-container"},Ii={Lb:"channel-external-id",Ya:"subscriber-count-show-when-subscribed",Za:"subscriber-count-tooltip",$a:"subscriber-count-title",Nb:"href",Ob:"insecure",ia:"is-subscribed",Pb:"parent-url",Qb:"clicktracking",eb:"show-unsub-confirm-dialog",Rb:"show-unsub-confirm-time-frame",fb:"style-type",ja:"subscribed-timestamp",
ka:"subscription-id",Sb:"target",gb:"ypc-enabled"};k=Gi.prototype;
k.fa=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=bc(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=Ji(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new Ug(b,f,e,a,d,c);Ki(this,a)?Fi(a,b).then(function(){S(bh,g)}):S(bh,g)}else S(Xg,new Sg(b,e,d,c));
else Li(this,a)};
k.Ga=function(a){this.N(a.b,this.Ia,!0)};
k.Fa=function(a){this.N(a.b,this.Ia,!1)};
k.Ib=function(a){this.N(a.b,this.Ja,!0,a.f)};
k.Jb=function(a){this.N(a.b,this.Ja,!1)};
k.zb=function(a){this.N(a.b,this.kb)};
k.yb=function(a){this.N(a.b,this.jb)};
k.Ja=function(a,b,c){b?(Za(a,Ii.ia,"true"),c&&Za(a,Ii.ka,c),this.g(a,Ii.eb)&&(b=new Sb,Za(a,Ii.ja,(b.getTime()/1E3).toString()))):(Ya(a,Ii.ia),Ya(a,Ii.ja),Ya(a,Ii.ka));Mi(this,a)};
function Ji(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ia=function(a,b){var c=P(a,Hi.Wa);jc(c,Hi.Xa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Mi(a,b){var c=a.g(b,Ii.fb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=Hi.Ua+c;jc(b,Hi.Ta+c,!d);jc(b,e,d);a.g(b,Ii.Za)&&!a.g(b,Ii.Ya)&&(c=X(Dg.A()),jc(b,c,!d),b.title=d?"":a.g(b,Ii.$a));d?I(function(){G(b,Hi.ha)},1E3):H(b,Hi.ha)}
k.kb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(G(a,"ypc-enabled"),Za(a,Ii.gb,"true"))};
k.jb=function(a){this.g(a,"ypc-enabled")&&(H(a,"ypc-enabled"),Ya(a,"ypc-enabled"))};
function Ni(a,b){return Ab(me(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
k.hb=function(a,b,c){var d=Jb(arguments,2);E(a,function(a){b.apply(this,Fb(a,d))},this)};
k.N=function(a,b,c){var d=Ni(this,a);this.hb.apply(this,Fb([d],Jb(arguments,1)))};
function Li(a,b){var c=t(function(a){a.discoverable_subscriptions&&kb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.fa(b)},a);
Jf(c)}
function Ki(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Sb).getTime()<1E3*(c+600))?!0:!1}
;function Oi(a){this.b=a;this.G=null;C("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Pi(this),V(this.b,"mouseover",t(this.o,this)),V(this.b,"mouseout",t(this.aa,this)),V(this.b,"click",t(this.aa,this)),U($g,oa(this.f,!0),this),U(eh,oa(this.f,!1),this),Qi(this))}
function Pi(a){var b={url:C("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.i,a);fe().open(b,a)}
function Qi(a){bc()||Se("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,Pi(this))},a)}
Oi.prototype.i=function(a){this.G=a;a=Gi.A().i(this.b);this.f(a)};
Oi.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
Oi.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
Oi.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=p("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function Ri(){Id(function(){var a;a=pf(M("yt-subscribe"));a={width:a.width,height:a.height};var b=Si;fe().ready(a,null,b)})}
function Si(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=M("yt-subscribe"),d=Gi.A(),c=O(X(d),c);a&&c&&(Gi.A(),Za(c,"parent-url",a));Ti()?(Gi.A().b=!0,b&&(Gi.A().f=!0)):c&&new Oi(c);a=new Vh;U($g,a.v,a);U(eh,a.w,a);if(Ti()){b=a.b;b.b=new cf(Hh(b));Wh(a);b=a.b;c=t(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",oa(b.i,c))}catch(e){}a.i=!0}}}
function Ti(){var a=ie().getOrigin();return Eb(lh,a)}
;v("yt.setConfig",kb);v("yt.config.set",kb);v("ytbin.www.subscribeembed.init",function(){oh=!0;ph.push(U(Xg,qh),U(bh,sh));oh||ph.push(U(ah,qh),U(fh,sh),U(Vg,uh),U(Wg,wh),U(ih,yh),U(sb,Ah),U(ub,Ch),U(rb,Bh));var a=Gi.A(),b=X(a);b in Lg||(a.register(),mg(a,"yt-uix-init-"+b,a.init),mg(a,"yt-uix-dispose-"+b,a.dispose),Lg[b]=a);Ri()});}).call(this);