(function(){var f=void 0,h=true,i=null,j=false,l,m=this;function aa(a,b){function c(){}c.prototype=b.prototype;a.ka=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ba(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ca(a,b){var c="",d=da(encodeURIComponent(a));d.splice(b||5,d.length);n(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function da(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,g=271733878,s=3285377520,q=[],k,x,u,F,G,W=Math.ceil((a.length/4+2)/16),P=[W],z=0,t;z<W;z++){P[z]=[];for(k=0;k<16;k++)P[z][k]=a.charCodeAt(z*64+k*4)<<24|a.charCodeAt(z*64+k*4+1)<<16|a.charCodeAt(z*64+k*4+2)<<8|a.charCodeAt(z*64+k*4+3)}z=(a.length-1)*8;a=W-1;P[a][14]=Math.floor(z/Math.pow(2,32));P[a][15]=z&4294967295;for(z=0;z<W;z++){for(t=0;t<16;t++)q[t]=P[z][t];
for(t=16;t<80;t++)q[t]=(q[t-3]^q[t-8]^q[t-14]^q[t-16])<<1|(q[t-3]^q[t-8]^q[t-14]^q[t-16])>>>31;a=c;k=d;x=e;u=g;F=s;for(t=0;t<80;t++)G=Math.floor(t/20),G=(a<<5|a>>>27)+(G==0?k&x^~k&u:G==1?k^x^u:G==2?k&x^k&u^x&u:k^x^u)+F+b[G]+q[t]&4294967295,F=u,u=x,x=k<<30|k>>>2,k=a,a=G;c=c+a&4294967295;d=d+k&4294967295;e=e+x&4294967295;g=g+u&4294967295;s=s+F&4294967295}return[c,d,e,g,s]}
function ea(a){var b=m.navigator,c=m.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];n(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=m.performance;d=d.concat([b&&b.now?b.now():"",document.title,m.location.href,o(),ba()]);return d.concat(a||[]).join()}function p(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function r(a){return typeof a!=="undefined"}function v(a){return a.replace(/^www\./,"")}function w(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function y(a){return typeof a==="number"}function A(a){return typeof a==="string"}function B(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function o(){return(new Date).getTime()}
function n(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function fa(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function ga(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var g=0,s=a.length;g<=s;g++)c[0][g]=g;for(var q,k,x,d=1;d<=e;d++)for(g=1;g<=s;g++)q=d-1,k=g-1,x=c[q][k],b.charAt(q)==a.charAt(k)?c[d][g]=x:(k=c[d][k]+1,q=c[q][g]+1,x+=2,c[d][g]=Math.min(k,q,x));return c[b.length][a.length]}var ha,ia=m.setInterval,ja=m.clearInterval,ka=m.setTimeout,la=m.clearTimeout;function ma(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),n(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function na(a,b){var c="",d=m.location.href.split("?");if(d.length){var d=ma(d[1]),e=b||a;d[e]&&(c=d[e])}return c}function oa(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function pa(a){var b=[];n(qa,function(c){var d=a[c];r(d)&&(Object.prototype.toString.call(d)==="[object Array]"?n(d,function(a){b.push(c+"="+a)}):d&&d.constructor===Object?n(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function C(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=m.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=oa(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,g=e.indexOf("?");g===-1&&(g=e.indexOf("#"));if(g===-1)g=e.length;g=e.lastIndexOf("/",g);a=g===-1?"/"+a:e.substr(0,g)+"/"+
a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(oa(b.protocol,b.port)||b.port==="0")b.port="";return b}
function D(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function E(a,b,c){a[b]=a[b]||c}function ra(a){n(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=ma(b.src.split("?")[1]),E(a,"uid",b.uid),E(a,"domain",b.domain),j})}function H(a,b){return a[b]?encodeURIComponent(a[b]):""}function sa(a){var b={};n(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var I={};I.q=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return i;if(I.q.pa!==f)return I.q.pa;var a=o()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return I.q.pa=d}catch(e){}return I.q.pa=i};I.k=function(a){var b=I.q();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&o()>c)?(I.remove(a),""):b.getItem(a)||""};
I.create=function(a,b,c){var d=I.q();if(d){var e=new Date;e.setTime(o()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(g){}}};I.remove=function(a){var b=I.q();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function ta(){var a=document.createElement("script");a.async=h;a.src=(m.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("head");b&&b.length&&b[0].appendChild(a)}function ua(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=I.q(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),ta())}};function va(a){var b,c;b="pageYOffset";c="scrollTop";if(a){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)a=e.querySelectorAll(d+"[data-cb-scroll-element]");else{a=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&a.push(d[e])}if(a&&a.length)return a[0][c]}if(y(m[b]))return m[b];else if(document.body&&document.body[c])return document.body[c];else if(document.documentElement[c])return document.documentElement[c];return 0}
function wa(){var a=document,a=a[a.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0;window.innerHeight&&(a=Math.min(window.innerHeight,a));return a}function J(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function xa(a,b,c){var d=a.ownerDocument.documentElement,e=0,g=r(c)?c+1:-1;A(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==g;){if(c(a))return a;a=a.parentNode;e++}return i}
function ya(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function za(a){a=a||window.event;return!a?i:xa(a.target||a.srcElement,ya,10)};function Aa(){this.F={};this.Da=1}function K(a,b,c,d){a.Da++;a.F[b]=a.F[b]||{};a.F[b][a.Da]=[c,d];return a.Da}function L(a,b){if(A(b))a.F[b]=f,delete a.F[b];else if(y(b)){var c=h;n(a.F,function(a){n(a,function(e,g){if(parseInt(g,10)===b)return a[g]=f,delete a[g],c=j});return c})}}Aa.prototype.M=function(a,b){if(this.F[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];n(this.F[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};
Aa.prototype.addEventListener=function(a,b){var c=K(this,a,b);b._cbEventId=c};Aa.prototype.removeEventListener=function(a,b){this.F[a]&&this.F[a][b._cbEventId]&&this.F[a][b._cbEventId][0]===b&&L(this,b._cbEventId)};var M=new Aa;var N={};
N.B=function(){N.ra?N.fa("pageload"):(N.$a=[{target:m,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:m,event:"resize"},{target:document.body,event:"mousedown"}],N.la=i,N.Ca=j,N.X=i,N.Na={},N.na={},n(N.$a,function(a){var b=a.event;w(a.target,b,function(a){N.fa.call(N,b,a)})}),K(M,"f",function(){N.fa("focus")}),N.fa("pageload"),w(document.body,"click",function(a){(a=za(a))&&M.M("c",a)},h),w(document.body,"contextmenu",function(a){(a=za(a))&&M.M("r",
a)}),N.ra=h)};N.fb=function(){var a,b=N.Na.keydown;if(b===f)return j;b=o()-b;return b<=(a||15E3)&&b>=0};N.T=function(a,b){var c=N.na[a];if(!c)return"";var b=b||o(),d,e=0;n(c,function(a){d=Math.floor((b-a)/1E3);d>=0&&d<16&&(e|=1<<d)});c=("0000"+e.toString(16)).slice(-4);return c=="0000"?"":c};N.Cb=function(){N.na={}};N.Ha=100;N.fa=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}N.Hb(a);N.la===i?N.Wa():N.Ca=h};
N.Hb=function(a){var b=o();N.Na[a]=b;var c=N.na[a];c?c.length<2?c.push(b):c[c.length-2]>b-1E3?c[c.length-1]=b:c.push(b):c=[b];c.length>32&&c.shift();N.na[a]=c};N.Wa=function(){N.la=ka(N.jb,N.Ha);M.M("a");N.X!==i&&la(N.X);N.X=ka(function(){M.M("i");la(N.X);N.X=i},5E3+N.Ha)};N.jb=function(){la(N.la);N.la=i;if(N.Ca)N.Ca=j,N.Wa()};var Ba,Ca,O,Da,Ea;(function(){var a,b;n(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof m.document[a]==="boolean")return b=c,j});b!==f&&(Da=a,Ea=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),O=b+"visibilitychange")})();var Q=j;function Fa(){Q=Ea&&m.document[Ea]==="prerender"?h:j}function Ga(){Ca=h;M.M("f")}function Ha(){Ca=j;M.M("b")}
function Ia(a,b,c){m.addEventListener?m.addEventListener(a,c,j):m.document.attachEvent&&m.document.attachEvent(b,c)}function Ja(){var a=h;m.document.hasFocus&&(a=m.document.hasFocus());var b=j;Da&&(b=m.document[Da]);return a&&!b}function Ka(){Ja()?Ga():Ha()}function La(a){Fa();if(Q){var b=j,c=function(){b||(Fa(),Q||(b=h,a(),m.window.setTimeout(function(){m.document.removeEventListener(O,c,j)},100)))};m.document.addEventListener(O,c,j)}else a()};function R(){this.a=m._sf_async_config||{};this.lb=p(this.Sa,this)}R.prototype.B=function(){this.Ta=0};R.prototype.Sa=function(){};R.prototype.ia=function(a){if(!Q){var b=this.lb,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};var S={};S.ib=function(){try{S.create("_cb_test","1",1);var a=S.k("_cb_test");S.remove("_cb_test");return a==="1"}catch(b){return j}};S.k=function(a){a+="=";var b="";n(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
S.create=function(a,b,c){var d=m._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(o()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};S.remove=function(a){return S.k(a)?S.create(a,"",-86400):""};function Ma(a){this.ha=a||"";this.kb=I.q()!==i||S.ib();this.Ba=j;Na(this)}l=Ma.prototype;l.isSupported=function(){return this.kb};
function Na(a){if(!S.k("_cb_ls")){var b=I.q()!==i,c=S.k("_SUPERFLY_nosample");c&&n(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,h)});var d=S.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,h),S.remove("_chartbeat3"));b&&((b=S.k("_chartbeat2"))&&a.create("_chartbeat2",b,94608E3,h),(b=S.k("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,94608E3,h),(b=S.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));S.create("_cb_ls","1",2592E3)}}
l.create=function(a,b,c,d){a=d?a:this.ha+a;(I.q()?I:S).create(a,b,c);I.q()&&S.create(a,b,c)};l.update=function(a,b,c,d,e,g,s){a=d?a:this.ha+a;e=A(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(s&&d.length){var q=s(b),k=fa(d,function(a){return s(a)===q});k!==-1&&d.splice(k,1)}y(g)&&d.length>=g&&d.splice(0,d.length-g+1);d.push(b);this.create(a,d.join(e),c,h)};
l.k=function(a,b){var a=b?a:this.ha+a,c=(I.q()?I:S).k(a);if(!c&&I.q()&&(c=S.k(a))&&S.k("_cb_ls")){this.Ba=h;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=94608E3}I.create(a,c,d)}return c};l.remove=function(a,b){a=b?a:this.ha+a;(I.q()?I:S).remove(a);I.q()&&S.remove(a)};function Oa(a){var b=i;if(a&&(b=Pa()))return b;var c=m.location,b=T(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function Pa(){var a=i;n(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return b=C(b.href),a=T(b.pathname)+b.search+b.hash,j});return a}
for(var Qa={},Ra=0;Ra<81;Ra++)Qa["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Ra)]=h;function Sa(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Qa[c]?String.fromCharCode(c):"%"+b.toUpperCase()}function T(a){if(!A(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Sa);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};var U={bb:{IDLE:0,Kb:1,Jb:2,ab:3},G:0};U.B=function(){if(!U.ra)K(M,"a",U.ob,U),K(M,"i",U.rb,U),K(M,"f",U.qb,U),K(M,"b",U.pb,U),U.ra=h};U.nb=function(){return U.G};U.ob=function(){U.G===1?U.J(3):U.G===0&&U.J(2)};U.rb=function(){U.G===3?U.J(1):U.G===2&&U.J(0)};U.qb=function(){(U.G===0||U.G===2)&&U.J(3)};U.pb=function(){U.G===3?U.J(2):U.G===1&&U.J(0)};U.J=function(a){U.G=a;M.M("s",a)};function V(a,b){this.La=a||f;this.Ra=b||f;this.Y=this.Q=0;this.qa=p(this.qa,this)}V.prototype.B=function(){this.Y=this.Q=0;this.ba=i;this.Db=K(M,"s",this.Ma,this);this.Ma(U.nb())};V.prototype.Ma=function(a){ja(this.ba);this.ba=i;if(a===U.bb.ab)this.ba=ia(this.qa,1E3)};V.prototype.qa=function(){if(this.La===f||this.La())this.Q++,this.Y++,this.Ra&&this.Ra()};V.prototype.terminate=function(){ja(this.ba);this.ba=i;L(M,this.Db)};function X(){R.call(this);this.S=[];this.D=new Ma(this.Eb);this.H=new V;this.Ab=p(this.ga,this);w(m,"unload",this.Ab);La(p(this.B,this))}aa(X,R);l=X.prototype;l.ya=h;
l.B=function(){X.ka.B.call(this);this.da=this.O=0;this.P=o();this.Va=ca(Ta(this));var a=(this.D.k("_chartbeat2",h)||"").split("."),b=o(),c=b-+(a[1]||0);b-=+(a[2]||0);this.wb=a[0]&&c>18E5&&b<2592E6?0:1;this.xa=h;this.ea=72E5;if(this.ya&&(a=+this.a.sessionLength,!isNaN(a)))this.ea=a*6E4;a=(this.D.k("_chartbeat2",h)||"").split(".");a.length>4&&(a=[]);var c=o(),d="1",e=a&&+a[2],b=a&&a[3];if(a&&e&&b)if(d=Math.abs((B(c)-B(e))/864E5)){d=Math.min(d,16)-1;for(e="";d--;)e+=0;d=(b+e+"1").slice(-16)}else d=b;
b=d;a[0]||(a[0]=this.a.utoken||ca(Ta(this),3),a[1]=c);a[2]=c;a[3]=b;this.ma=a[0];this.Bb=a.join(".");this.D.create("_chartbeat2",this.Bb,94608E3,h);this.a.utoken=this.ma;var g;c=+a[1];b=+a[2];if((a=a[3])&&c&&b)g=(Math.min((Math.abs((B(b)-B(c))/864E5)||0)+1,16,a.length)-1).toString(16),g+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.Ka=g;this.H.B();U.B();N.B();Ba||(Ca=Ja(),O&&m.document.addEventListener&&m.document.addEventListener(O,Ka,j),Ia("focus","onfocusin",Ga),Ia("blur","onfocusout",Ha),
Ca&&Ga(),Ba=h);this.Z=0;this.eb=K(M,"a",this.xb,this)};function Ua(a){if(!a.D.k("_SUPERFLY_nosample")&&!Q)a.vb?a.ja():(a.vb=h,!m._sf_async_config&&!m._cbq?(a.va=p(a.ja,a),w(m,"load",a.va)):a.ja())}l.ja=function(){var a=m._sf_startpt,b=m._sf_endpt;if(y(a))this.wa=y(b)?b-a:o()-a;N.B();a=p(this.$,this);this.sa=ia(a,15E3);this.$()};
l.$=function(){var a=this.H.Y,a=this.a.reading&&+this.a.reading||a>0;if(this.da<this.O&&!a)this.da++;else{var b;if(ha===f)b=m.navigator.userAgent,ha=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=ha;b&&!a?this.da++:(a?this.O=0:Va(this),this.da=0,this.S.push(0),this.S.length>18&&this.S.shift(),this.ya&&o()-this.P>=this.ea?this.terminate():this.aa())}};
l.Sa=function(){this.S.push(1);var a=0;n(this.S,function(b){a+=b});a<3?(this.xa=h,Va(this)):(this.terminate(),this.D.create("_SUPERFLY_nosample","1",600))};l.ga=function(){};l.xb=function(){var a=Wa(this);this.Z=Math.max(this.Z,a)};function Wa(a){return va(!!a.a.scrollElement)}function Va(a){var b=a.O,b=b?Math.min(b*2,16):1;a.O=b}l.Za=function(a,b){if(!Q)this.ga(),this.terminate(),this.Ea=m.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=T(a),b&&(this.a.title=b),this.B(),Ua(this)};
function Xa(a){if(a.Ea)return h;a=(document.referrer||"").indexOf("://"+m.location.hostname+"/");return a!=-1&&a<9}function Ya(a){a=a.Ea;if(!a&&(a=document.referrer||"")){var b=C(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=T(b.pathname),a=D(b)}return encodeURIComponent(a)}function Za(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function Ta(a){a=[Ya(a),J("Width"),J("Height")];return ea(a)}
function $a(a){var b=[],c=a.D.k("_chartbeat4");c&&(n(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.D.remove("_chartbeat4"));return b}l.terminate=function(){this.H.terminate();L(M,this.eb);if(this.va!==f){var a=this.va,b=m;b.removeEventListener?b.removeEventListener("load",a,j):b.detachEvent&&b.detachEvent("onload",a)}ja(this.sa)};function ab(a){var b=a.offsetLeft,c=a.offsetTop,d=bb(a);b+=d.x;c+=d.y;for(var e=j,d=a.offsetParent;a&&a!==f&&a!==document.body;){if(a===d)d=bb(a),b+=a.offsetLeft+d.x,c+=a.offsetTop+d.y,d=a.offsetParent;if(cb(a,["position"]).position==="fixed"){e=h;break}a=a.parentElement}e&&(b+=0,c+=0);return{x:b,y:c}}
function cb(a,b){var c={},d,e;m.getComputedStyle?d=m.getComputedStyle(a,i):a.currentStyle?e="currentStyle":a.style&&(e="style");n(b,function(b){c[b]=d?d[b]||d.getPropertyValue(b):a[e][b]});return c}var db=/matrix(3d)?\((.*)\)/;function bb(a){var b={x:0,y:0},a=cb(a,["transform"]).transform;if(!A(a))return b;var c=a.match(db);if(!c)return b;var a=c[2].split(", "),d;r(c[1])?(c=12,d=13):(c=4,d=5);b.x=parseInt(a[c],10);b.y=parseInt(a[d],10);return b};function eb(a,b){for(var c=b||document.documentElement,d=[],e=i,g=a,s,q,k,x,u,F;g&&g!==c;){s=g.nodeName.toLowerCase();e=g;q=e.nodeName;if((g=g.parentNode)&&g!==document.documentElement){k=g.children;x=0;for(u=0,F=k.length;u<F;u++){if(e===k[u]){s+="["+(1+u-x)+"]";break}k[u].nodeName!==q&&x++}}d.unshift(s)}return d.join("/")};function Y(){"postMessage"in window&&w(m,"message",p(this.sb,this));X.call(this);for(var a=p(this.Ua,this),b=m._cbq||[];b.length;)a(b.shift());m._cbq={push:a}}aa(Y,X);
Y.prototype.B=function(){Y.ka.B.call(this);this.oa=i;ra(this.a);var a=m.location;E(this.a,"pingServer","ping.chartbeat.net");E(this.a,"title",document.title);E(this.a,"domain",a.hostname);this.a.path=this.a.path?T(this.a.path):Oa(!!this.a.useCanonical);this.U=v(a.hostname);this.a.domain=v(this.a.domain);this.gb=K(M,"c",this.yb,this);this.hb=K(M,"r",this.zb,this);this.N=i};Y.prototype.cb=function(a){this.oa=a};
Y.prototype.ga=function(){this.D.update("_chartbeat4",["t="+this.Va,"E="+this.H.Q,"x="+Wa(this),"c="+Math.round((o()-this.P)/600)/100,"y="+J("Height"),"w="+wa()].join("&"),3600,f,f,1)};var qa="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR".split(",");l=Y.prototype;
l.aa=function(a){this.Ta++;var b={};b.g=this.a.uid;b.g0=H(this.a,"sections");b.g1=H(this.a,"authors");b.g2=H(this.a,"zone");b.g3=H(this.a,"sponsorName");b.g4=H(this.a,"type");!this.a.noCookies&&this.D.isSupported()?b.n=this.wb:b.nc=1;b.c=Math.round((o()-this.P)/600)/100;b.E=this.H.Q;var c=Wa(this);this.Z=Math.max(this.Z,c);b.x=c;b.m=this.Z;b.y=J("Height");b.o=J("Width");b.w=wa();b.b=this.wa?this.wa:"";if(this.Ka)b.f=this.Ka;b[""]=sa(this.a);b.t=this.Va;b.V=57;b.tz=(new Date).getTimezoneOffset();b.sn=
this.Ta;c=this.H.Y;b.h=encodeURIComponent(this.a.domain);b.p=encodeURIComponent(this.a.path);b.u=this.ma;b.d=encodeURIComponent(this.U);b.j=Math.round((this.O+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;var d=b.c*6E4+this.P;b.eD=N.T("mousedown",d);b.eM=N.T("mousemove",d);b.eK=N.T("keydown",d);b.eR=N.T("resize",d);b.eS=N.T("scroll",d);N.Cb();N.fb()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Xa(this);if(this.xa)this.xa=j,c?this.N=fb(this):b.r=Ya(this),b.i=Za(this),d=this.a.hudTrackable,
d!==f&&(b.L=d?"1":"0"),this.a.alias&&(b.PA=encodeURIComponent(this.a.alias));if(c){if(this.N){if(b.v=encodeURIComponent(this.N.path),b.K=gb(this.N),this.N.ua>1)b.l1=this.N.ua}else b.v=Ya(this);this.Ea&&(b.vp=1)}b.A=this.oa?this.oa:"";b._c=na("utm_campaign",this.a.campaignTag);b._m=na("utm_medium",this.a.mediumTag);b.z=$a(this);b.C=this.a.mobileApp?1:"";b.KK=a?gb(a,h):"";a=this.D;c=a.Ba;a.Ba=j;b.l=c?1:"";this.H.Y=0;this.ia((m.location.protocol||"http:")+"//"+this.a.pingServer+"/ping?"+pa(b))};
l.sb=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.U)){var c=a.data;A(c)&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Ua(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b.path)+"&title="+Za(this)+"&referrer="+Ya(this)+"&internal="+(Xa(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.U)+"&utoken="+this.ma,a.source.postMessage(b,"*"))}};
l.Ua=function(a){a[0]==="_demo"&&this.a._demo?this.a._demo=this.a._demo+"%2C"+a[1]:this.a[a[0]]=a[1];this.O=0};function hb(a){a=a.replace(/-{2,}/g,"-");a=C(a);a.pathname=T(a.pathname);return a}l.yb=function(a){ib(this,a,"c")};l.zb=function(a){ib(this,a,"r")};
function ib(a,b,c){if(a.ya&&o()-a.P>=a.ea)a.terminate();else{var d=b.href||"",d=hb(d);if(!(d.hostname!==m.location.hostname||d.protocol.indexOf("http")!==0)){var d=D(d),e=xa(b,function(a){return a.id}),g=eb(b,e);e&&(g&&(g="/"+g),g="*[@id='"+e.id+"']"+g);e=ca(g);b=ab(b);c={left:b.x,top:b.y,path:a.a.path,href:d,Ga:e,Fa:g,Aa:c,ua:0};a.aa(c);a.D.update("_chartbeat5",jb(c),60,j,f,5,function(a){a=a.split(",");return a[2]+","+a[3]})}}}
function gb(a,b){var c=[a.left,a.top,a.Ga,encodeURIComponent(a.Fa),a.Aa];b&&c.push(encodeURIComponent(a.href));return c.join("::")}function jb(a){var b=encodeURIComponent(a.Fa),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.Ga,b,a.Aa].join(",")}
function fb(a){var b=a.D.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e;if(b===1)d=c[0].split(","),e=0;else{var g,s=hb(m.location.href),q=D(s);n(c,function(a,b){var c=a.split(","),s=ga(q,decodeURIComponent(c[3]));if(s===0)return d=c,e=b,j;if(g===f||s<g)g=s,d=c,e=b})}c.splice(e,1);a.D.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),Ga:d[4]||"",Fa:a,Aa:d.length>6?d[6]:"c",
ua:b}}l.terminate=function(){L(M,this.gb);L(M,this.hb);Y.ka.terminate.call(this)};if(!m.pSUPERFLY){var Z=new Y;m.pSUPERFLY={virtualPage:p(Z.Za,Z),activity:p(Z.cb,Z)};var $=m.pSUPERFLY_pub;if($)$.virtualPage&&(m.pSUPERFLY.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.willVirtualPage();Y.prototype.Za.apply(Z,a);$.virtualPage()}),$.addEngagedAdFilter&&(m.pSUPERFLY.addEngagedAdFilter=$.addEngagedAdFilter),$.refreshAd&&(m.pSUPERFLY.refreshAd=$.refreshAd),$.registerGptSlot&&(m.pSUPERFLY.registerGptSlot=$.registerGptSlot);Ua(Z);var kb=I.q(h);
if(kb){w(m,"message",ua);var lb;if(lb=kb.getItem("_cb_ip")){var mb=m.location;lb=!(!/^([^.]+[.])?chartbeat\.com$/.test(mb.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(mb.pathname))}lb&&ta()}};function nb(){r(m._cb_shared)||(m._cb_shared={});return m._cb_shared};function ob(){var a=m.location.href,a=a.replace(/-{2,}/g,"-"),a=C(a);a.pathname=T(a.pathname);return a}function pb(a){var b=S.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,g=ob(),s=D(g);n(b,function(a,b){var g=a.split(","),u=ga(s,decodeURIComponent(g[0]));if(u===0)return c=g,d=b,j;if(e===f||u<e)e=u,c=g,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+qb(a);document.cookie=a;return{Lb:c[0],mb:c[1],Ib:c[2],origin:c[3]}}
function qb(a){var b="",c;if(!(a&&a.constructor===Object))return b;a.Pa&&(c=new Date,c.setTime(c.getTime()+a.Pa),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function rb(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return j;if(c.pop()!==d.pop())return j}return h};function sb(){this.Eb="_t_";X.call(this)}aa(sb,X);l=sb.prototype;
l.B=function(){sb.ka.B.call(this);ra(this.a);var a=m.location;E(this.a,"mabServer","mabping.chartbeat.net");E(this.a,"title",document.title);E(this.a,"domain",a.hostname);E(this.a,"path",Oa(!!this.a.useCanonical));this.U=v(a.hostname);this.a.domain=v(this.a.domain);var b=this.a,a=b.topStorageDomain,b=b.domain,c=m.location.hostname;this.Gb=a?a:rb(c,b)?b:c.replace(/^www\./,"");this.Ya=this.Ia=this.Ja="";this.ca=this.ta=j;a=pb({domain:"."+this.Gb,Pa:6E4,path:"/"});if(a!==i)this.Ja=a.origin,this.Ia=a.mb,
this.Ya=a.Ib,this.ta=h;this.ea=6E4;this.Qa=0;a=p(this.tb,this);b=nb();for(b=(r(f)&&!r(b.m)?f:b.m)||[];b.length;)a(b.shift());a={push:a};nb().m=a};l.aa=function(){var a=this.H.Q,b=tb(this),c,d,e;if(this.ta)c=this.Ja,d=this.Ia,e=this.Ya,this.ia(b+"&x="+d+"&v="+e+"&xo="+c+"&e="+a);!this.ca&&r(this.Xa)&&ub(this,this.Xa);this.ca=h};l.ja=function(){var a=m._sf_startpt,b=m._sf_endpt;if(y(a))this.wa=y(b)?b-a:o()-a;N.B();if(this.ta)this.sa=m.setInterval(p(this.$,this),500);this.$()};
l.$=function(){var a,b;this.ca?(a=this.H.Q,b=this.Qa*15,a-b>=15&&(this.aa(),this.Qa+=1),a>=45&&m.clearInterval(this.sa)):this.aa()};function tb(a){var b=a.a;return(m.location.protocol||"http:")+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&d="+encodeURIComponent(a.U)+"&u="+a.ma+"&c="+Math.round((o()-a.P)/600)/100}l.ga=function(){};
l.Fb=function(a){var b=a.d,c=i;b!==i&&(c={za:b.s,ub:b.l,Oa:b.m});a={status:a.s,data:c,code:a.c,message:a.m};this.ca?ub(this,a):this.Xa=a};function ub(a,b){var c=tb(a),d=b.status,e=b.data;if(d=="s"&&e!==i){if(!e.ub){var g=p(a.ia,a);e.za&&e.za.constructor===Object&&n(e.za,function(a,b){g(c+"&x="+b+"&v="+a+"&e=-1")});Object.prototype.toString.call(e.Oa)==="[object Array]"&&n(e.Oa,function(a){g(c+"&mt=e&me=3&x="+a)})}}else d=="e"&&a.ia(c+"&mt=e&me="+b.code)}
l.tb=function(a,b){for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a.shift()==="t"&&this.Fb.apply(this,a)};if(!m.pSUPERFLY_mab)m.pSUPERFLY_mab={},Ua(new sb);})();