(function(){var g=void 0,h=true,i=null,j=false,n,o=this;function aa(a){var b=ba;function c(){}c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ca(a,b){var c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}function da(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function p(a,b){var c="",d=ea(encodeURIComponent(a));d.splice(b||5,d.length);q(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function ea(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,l=3285377520,k=[],m,w,x,D,H,A=Math.ceil((a.length/4+2)/16),I=[A],z=0,v;z<A;z++){I[z]=[];for(m=0;m<16;m++)I[z][m]=a.charCodeAt(z*64+m*4)<<24|a.charCodeAt(z*64+m*4+1)<<16|a.charCodeAt(z*64+m*4+2)<<8|a.charCodeAt(z*64+m*4+3)}z=(a.length-1)*8;a=A-1;I[a][14]=Math.floor(z/Math.pow(2,32));I[a][15]=z&4294967295;for(z=0;z<A;z++){for(v=0;v<16;v++)k[v]=I[z][v];
for(v=16;v<80;v++)k[v]=(k[v-3]^k[v-8]^k[v-14]^k[v-16])<<1|(k[v-3]^k[v-8]^k[v-14]^k[v-16])>>>31;a=c;m=d;w=e;x=f;D=l;for(v=0;v<80;v++)H=Math.floor(v/20),H=(a<<5|a>>>27)+(H==0?m&w^~m&x:H==1?m^w^x:H==2?m&w^m&x^w&x:m^w^x)+D+b[H]+k[v]&4294967295,D=x,x=w,w=m<<30|m>>>2,m=a,a=H;c=c+a&4294967295;d=d+m&4294967295;e=e+w&4294967295;f=f+x&4294967295;l=l+D&4294967295}return[c,d,e,f,l]}function r(a,b){return function(){a.apply(b,arguments)}}function fa(a){return a.replace(/^www\./,"")}
function s(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function ga(a,b){var c=o;c.removeEventListener?c.removeEventListener(a,b,j):c.detachEvent&&c.detachEvent("on"+a,b)}function t(a){return typeof a==="number"}function u(a){return typeof a==="string"}function ha(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function y(){return(new Date).getTime()}function ia(a){return encodeURIComponent(a)}
function ja(a,b){if(!(a&&a.constructor===Object)||!(b&&b.constructor===Object))return a===b;var c=0,d=h;q(a,function(a,e){c++;return d=a===b[e]});if(!d)return j;var e=0;q(b,function(){e++});return c===e}function q(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function ka(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function la(a,b){var c=[];q(a,function(a){b(a)&&c.push(a)});return c}function ma(a){(!!a&&a.constructor===Object)===h&&(a="");var b={};q(a.split("&"),function(a){a=a.split("::");a.length===2&&(b[decodeURIComponent(a[0])]=decodeURIComponent(a[1]))});return b}
function na(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,l=a.length;f<=l;f++)c[0][f]=f;for(var k,m,w,d=1;d<=e;d++)for(f=1;f<=l;f++)k=d-1,m=f-1,w=c[k][m],b.charAt(k)==a.charAt(m)?c[d][f]=w:(m=c[d][m]+1,k=c[k][f]+1,w+=2,c[d][f]=Math.min(m,k,w));return c[b.length][a.length]};function oa(a,b,c){b=b||"*";c=c||document;if("querySelectorAll"in c)return c.querySelectorAll(b+"["+a+"]");for(var d=[],b=c.getElementsByTagName(b),c=b.length;c--;)b[c].getAttribute(a)&&d.push(b[c]);return d}function B(a,b){var c=i;b&&(c=b.getAttribute(a));if(c===i){var d=oa(a,"*",b);d.length!==0&&(c=d[0].getAttribute(a))}return c}function pa(a,b,c){return a===g?j:c===g&&a.getAttribute(b)||a.getAttribute(b)===c?a:a===document.body?j:pa(a.parentNode,b,c)}
function C(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c&&(c=oa("data-cb-scroll-element"))&&c.length)return c[0][b];if(t(o[a]))return o[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}function qa(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}function E(){return qa("Height")}
function ra(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function F(){return ra("Height")}function sa(a,b,c){var d=a.ownerDocument.documentElement,e=0,f=typeof c!=="undefined"?c+1:-1;u(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return i}
function ta(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function ua(a){a=a||window.event;return!a?i:sa(a.target||a.srcElement,ta,10)};var G={},va=1,wa="a";function J(a,b,c){va++;G[a]=G[a]||{};G[a][va]=[b,c];return va}function K(a){if(u(a))G[a]=g,delete G[a];else if(t(a)){var b=h;q(G,function(c){q(c,function(d,e){if(parseInt(e,10)===a)return c[e]=g,delete c[e],b=j});return b})}}function L(a,b){if(G[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];q(G[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};var M={};
M.d=function(){M.I?M.U("pageload"):(M.Va=[{target:o,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:o,event:"resize"},{target:document.body,event:"mousedown"}],M.$=i,M.wa=j,M.H=i,M.Oa={},q(M.Va,function(a){var b=a.event;s(a.target,b,function(a){M.U.call(M,b,a)})}),J("f",function(){M.U("focus")}),M.U("pageload"),s(document.body,"click",function(a){(a=ua(a))&&L("c",a)},h),s(document.body,"contextmenu",function(a){(a=ua(a))&&L("r",a)}),M.I=h)};
M.Ya=function(){var a,b=M.Oa.keydown;if(b===g)return j;b=y()-b;return b<=(a||15E3)&&b>=0};M.Da=100;M.U=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}M.Bb(a);M.$===i?M.Ta():M.wa=h};M.Bb=function(a){M.Oa[a]=y()};M.Ta=function(){M.$=o.setTimeout(M.bb,M.Da);L(wa);M.H!==i&&o.clearTimeout(M.H);M.H=o.setTimeout(function(){L("i");o.clearTimeout(M.H);M.H=i},5E3+M.Da)};M.bb=function(){o.clearTimeout(M.$);M.$=i;if(M.wa)M.wa=j,M.Ta()};function xa(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),q(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function ya(a,b,c){var d="",e=o.location.href.split("?");e.length&&(e=xa(e[1]),b=c||b,e[b]&&(d="&"+a+"="+e[b]));return d}function za(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function Aa(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=o.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=za(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?"/"+a:e.substr(0,f)+"/"+
a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(za(b.protocol,b.port)||b.port==="0")b.port="";return b}
function Ba(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function N(a,b,c){a[b]=a[b]||c}function Ca(a){q(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=xa(b.src.split("?")[1]),N(a,"uid",b.uid),N(a,"domain",b.domain),j})}function O(a,b,c){return a[c]?"&g"+b+"="+encodeURIComponent(a[c]):""}function Da(a){var b=[];q(a,function(a,d){d.charAt(0)=="_"&&b.push(d+"="+a)});return b.length?"&"+b.join("&"):""};var Ea=/[?&]__cb_debug=/i;function P(a){var b=a.offsetHeight,c=a.offsetWidth;if(b<=1||c<=1){var d=Q(a,"overflow"),e=Q(a,"overflow-x"),f=Q(a,"overflow-y");d==="hidden"||e==="hidden"||f==="hidden"||q(a.getElementsByTagName("iframe"),function(a){var d=a.offsetHeight,a=a.offsetWidth;if(d>1&&a>1)return b=d,c=a,j})}return{height:b,width:c}}function Fa(a){a=P(a);return a.height*a.width}
function Ga(a){var b;"contains"in document.documentElement&&!document.documentElement.contains(a)?b=j:(b=P(a),b=b.height>1&&b.width>1);if(!b)return j;if(Q(a,"visibility")==="hidden")return j;if(Q(a,"overflow")==="hidden"&&(a.offsetHeight===0||a.offsetWidth===0))return j;b=h;for(var c=a.parentElement;c&&b;){var d;var e=c;if(e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth)d=j;else{d=Q(e,"overflow");var f=Q(e,"overflow-x"),e=Q(e,"overflow-y");d=d==="auto"||d==="scroll"||f==="auto"||f===
"scroll"||e==="auto"||e==="scroll"}d&&(b=Ha(a,c));c=c.parentElement}return b&&Ha(a,i)}function Ha(a,b){var c,d;if(b){var e=P(b);c=e.width;d=e.height}else c=qa("Width"),d=E();var f=P(a),e=f.height,f=f.width,l=R(a,b),k=l.y,l=l.x;c=Math.min(l+f,f,c,c-l);d=Math.min(k+e,e,d,d-k);if(c<0||d<0)return j;e*=f;return c*d>=(e>=242500?0.3:0.5)*e}
function R(a,b,c){for(var d=a.offsetLeft,e=a.offsetTop,f=j,l=c?0:C("X","Left",g),k=c?0:C("Y","Top",g),m=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===m)d+=a.offsetLeft,e+=a.offsetTop,m=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(Q(a,"position")==="fixed"){f=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:l,e-=b?b.scrollTop:k);f&&(d+=l,e+=k);return{x:d,y:e}}
function Q(a,b){var c;c=o.getComputedStyle?(c=o.getComputedStyle(a,i))&&(c[b]||c.getPropertyValue(b)):a.currentStyle?a.currentStyle[b]:a.style&&a.style[b];return c||""};var S={Fa:{IDLE:0,Fb:1,Eb:2,Ea:3},j:0};S.d=function(){if(!S.I)J(wa,S.jb,S),J("i",S.mb,S),J("f",S.lb,S),J("b",S.kb,S),S.I=h};S.Ja=function(){return S.j};S.jb=function(){S.j===1?S.p(3):S.j===0&&S.p(2)};S.mb=function(){S.j===3?S.p(1):S.j===2&&S.p(0)};S.lb=function(){(S.j===0||S.j===2)&&S.p(3)};S.kb=function(){S.j===3?S.p(2):S.j===1&&S.p(0)};S.p=function(a){S.j=a;L("s",a)};function Ia(a,b){this.ia=a||g;this.J=b||g;this.v=this.xa=0}n=Ia.prototype;n.d=function(){this.v=this.xa=0;this.N=i;this.zb=J("s",this.G,this);this.G(S.Ja())};n.total=function(){this.xa+=this.v;this.v=0;return this.xa};n.G=function(a){o.clearInterval(this.N);this.N=i;if(a===S.Fa.Ea)this.N=o.setInterval(r(this.qb,this),1E3)};n.qb=function(){if(this.ia===g||this.ia())this.v++,this.J&&this.J()};n.terminate=function(){o.clearInterval(this.N);this.N=i;K(this.zb)};
n.F=function(){this.terminate();this.J=this.ia=g};function T(a,b){this.h=a;this.S=b;this.q=a.getAttribute("data-cb-ad-id")||a.id||"";this.r=i;this.Ga=0;var c=this;this.C=new Ia(function(){Ja(c);return Ga(c.g)},r(this.J,this));Ka(this);if(this.S)this.eb=J(wa,this.ya,this)}function Ka(a){a.Ga++;a.b={};a.b.campaignId="";a.b.creativeId="";a.b.placementId="";a.b.siteId="";a.b.server_height="";a.b.server_width="";a.g=a.h;a.D={La:j,frame:j};a.ha=j;a.ka=j;Ja(a);a.C.d();a.Ua=j;a.O=0;a.B=i;a.Db=J("s",a.G,a);a.G(S.Ja())}
T.prototype.G=function(a){if(this.B!==i)clearInterval(this.B),this.B=i;this.O=0;if(a===S.Fa.Ea)this.B=o.setInterval(r(this.Cb,this),100);this.S&&this.ya()};T.prototype.Cb=function(){if(Ga(this.g)){if(this.O++,this.O>=10)this.Ua=h,La(this),L("p")}else this.O=0};function La(a){K(a.Db);o.clearInterval(a.B);a.B=i}T.prototype.J=function(){L("e",this.u(h),this.h);this.S&&this.ya()};
var Ma={300:{250:1,600:1,1050:1},180:{150:1},160:{600:1},728:{90:1},970:{90:1,66:1,250:1,415:1,550:1},120:{60:1},88:{31:1},62:{88:1},196:{31:1}};
function Ja(a){var b=o._sf_async_config;if(b&&(b=b.creativeDetection,b===j||u(b)&&b!=="iab"))return;var c=Fa(a.h);if(a.g!==a.h)if(Fa(a.g)>c)a.g=a.h;else return;q(["iframe","embed","object","img","div"],function(b){q(a.h.getElementsByTagName(b),function(b){var d=P(b);if(!(d.height*d.width>c)&&Ma[d.width]&&Ma[d.width][d.height])return a.g=b,a.D.La=h,j});return a.g===a.h})}
function Na(a,b,c){a.b=b;a.ka=!!c;if(a.ka){var b=h,d=o._sf_async_config;if(d&&(d=d.creativeDetection,d===j||u(d)&&d!=="iframe"))b=j;if(b&&Fa(c)>0)a.g=c,a.D.frame=h}L("p")}n=T.prototype;
n.u=function(a){var b={id:this.q,engagedSeconds:this.C.total()};b.campaignId=this.b?this.b.campaignId:"";b.creativeId=this.b?this.b.creativeId:"";if(a)return b;var a=P(this.g),c=R(this.g,g,h);b.positionLeft=c.x;b.positionTop=c.y;b.width=a.width;b.height=a.height;b.viewable=this.Ua;b.order=this.Ga;b.placementId=this.b?this.b.placementId:"";b.siteId=this.b?this.b.siteId:"";b.server_height=this.b?this.b.server_height:"";b.server_width=this.b?this.b.server_width:"";b.lineId=this.b?this.b.lineId:"";b.exclude=
this.ha;return b};n.aa=function(){if(!this.ka){var a=this.h,b={};b.campaignId=B("data-cb-campaign-id",a)||"";b.creativeId=B("data-cb-creative-id",a)||"";b.placementId=B("data-cb-placement-id",a)||"";b.siteId=B("data-cb-site-id",a)||"";b.server_height=B("data-cb-creative-height",a)||"";b.server_width=B("data-cb-creative-width",a)||"";b.lineId=B("data-cb-line-id",a)||"";if(B("data-cb-exclude",a))this.ha=h;ja(b,this.b)||Na(this,b)}};
n.ya=function(){function a(a,b,c){var d=document.createElement("div"),e=document.createElement("span");e.setAttribute("style","font-weight: bold;");e.textContent=a;d.textContent=b;d.insertBefore(e,d.firstChild);c.appendChild(d)}var b=this.h;if(b){var c,d=this;if(this.r)c=document.getElementById(this.r);else{this.r="engagementLog-"+this.q+"-"+p(da());c=document.createElement("div");c.setAttribute("id",this.r);document.body.appendChild(c);var e=b.getAttribute("style")||"",f=Q(b,"position"),f=f==="fixed"||
f==="absolute"||f==="relative"?"":"position: relative;";e+="box-shadow: 0px 0px 0px 3px #49A2DC; z-index: 2000;"+f;b.setAttribute("style",e);var l="box-shadow: 0px 0px 0px 3px #5BC3BD, 10px 5px 5px #C8DAE8; z-index: 2000;"+f;c.onmouseover=function(){b.setAttribute("style",l)};c.onmouseout=function(){e?b.setAttribute("style",e):b.removeAttribute("style")};s(c,"click",function(){d.pb=h})}c.innerHTML="";if(this.pb)c.setAttribute("style","display: none;");else{var k=R(b),f=k.y,k=k.x;f+=C("Y","Top",g);
k+=C("X","Left",g);c.setAttribute("style","background-color: #F1F7FB; z-index: 9000000; position: absolute; padding: 10px; border-radius: 5px; font-size: 12px; color: #658BA1; border: 1px solid #C8DAE8; margin: 3px; font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif; top: "+f+"px; left: "+k+"px;");f=this.u();a("Ad Name: ",f.id+" ["+f.width+"x"+f.height+"]",c);(k=f.campaignId)&&a("Campaign: ",k,c);(k=f.creativeId)&&a("Creative: ",k,c);a("Viewable: ",f.viewable+"",c);c.appendChild(document.createElement("br"));
k=Ga(this.g);a((k?"In ":"Out Of ")+" View","",c);k&&a("in view intervals: ",this.O+"",c);a("Engaged Time: ",f.engagedSeconds+" seconds",c);if(this.g!==b)this.fa?b.removeChild(document.getElementById(this.fa)):this.fa="creativeContainer-"+this.q+"-"+p(da()),c=document.createElement("div"),c.setAttribute("id",this.fa),f=R(this.g,b),k=P(this.g),c.setAttribute("style","position: absolute; border-radius: 5px; border: 2px solid #00FFAD; background: transparent; top: "+f.y+"px; left: "+f.x+"px; height: "+
k.height+"px; width: "+k.width+"px; margin: 0px; padding: 0px; z-index: 1000000;"),f=document.createElement("div"),f.setAttribute("style","position: absolute; right: 0px; bottom: 0px; font-size: 20px; background-color: white; padding: 10px;"),f.textContent=""+(this.D.La?"IAB ":"")+(this.D.frame?"iframe ":""),c.appendChild(f),b.appendChild(c)}}};n.reset=function(){La(this);this.C.terminate();Ka(this)};
n.F=function(){La(this);this.C.F();this.D=this.b=this.g=this.h=this.C=i;if(this.r){var a=document.getElementById(this.r);(a.parentElement?a.parentElement:a.parentNode).removeChild(a)}this.S&&K(this.eb)};var U={};U.ab=function(){try{U.create("_cb_test","1",1);var a=U.c("_cb_test");U.remove("_cb_test");return a==="1"}catch(b){return j}};U.c=function(a){a+="=";var b="";q(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
U.create=function(a,b,c){var d=o._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(y()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};U.remove=function(a){return U.c(a)?U.create(a,"",-86400):""};var V={};V.f=function(a){var b=o._sf_async_config;if(!a&&b&&b.noCookies)return i;if(V.f.ea!==g)return V.f.ea;var a=y()+"",c,d;try{if((d=o.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return V.f.ea=d}catch(e){}return V.f.ea=i};V.c=function(a){var b=V.f();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&y()>c)?(V.remove(a),""):b.getItem(a)||""};
V.create=function(a,b,c){var d=V.f();if(d){var e=new Date;e.setTime(y()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};V.remove=function(a){var b=V.f();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function Oa(a){this.Y=a||"";this.cb=V.f()!==i||U.ab();this.va=j;Pa(this)}n=Oa.prototype;n.isSupported=function(){return this.cb};
function Pa(a){if(!U.c("_cb_ls")){var b=V.f()!==i,c=U.c("_SUPERFLY_nosample");c&&q(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,h)});var d=U.c("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,h),U.remove("_chartbeat3"));b&&((b=U.c("_chartbeat2"))&&a.create("_chartbeat2",b,94608E3,h),(b=U.c("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,94608E3,h),(b=U.c("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));U.create("_cb_ls","1",2592E3)}}
function Qa(a){var b=a.va;a.va=j;return b}n.create=function(a,b,c,d){a=d?a:this.Y+a;(V.f()?V:U).create(a,b,c);V.f()&&U.create(a,b,c)};n.update=function(a,b,c,d,e,f,l){a=d?a:this.Y+a;e=u(e)?e:"::";d=(d=this.c(a,h))?d.split(e):[];if(l&&d.length){var k=l(b),m=ka(d,function(a){return l(a)===k});m!==-1&&d.splice(m,1)}t(f)&&d.length>=f&&d.splice(0,d.length-f+1);d.push(b);this.create(a,d.join(e),c,h)};
n.c=function(a,b){var a=b?a:this.Y+a,c=(V.f()?V:U).c(a);if(!c&&V.f()&&(c=U.c(a))&&U.c("_cb_ls")){this.va=h;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=94608E3}V.create(a,c,d)}return c};n.remove=function(a,b){a=b?a:this.Y+a;(V.f()?V:U).remove(a);V.f()&&U.remove(a)};var W=function(){var a,b;q(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof o.document[a]==="boolean")return b=c,j});var c={};if(b!==g)c.Ka=a,c.Aa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),c.ca=b+"visibilitychange";return c}();
W.d=function(){if(!W.I)W.T=W.Ra(),W.ca&&o.document.addEventListener&&o.document.addEventListener(W.ca,W.xb,j),W.Ha("focus","onfocusin",W.qa),W.Ha("blur","onfocusout",W.Qa),W.T&&W.qa(),W.I=h};W.Gb=function(){return W.T};W.qa=function(){W.T=h;L("f")};W.Qa=function(){W.T=j;L("b")};W.Ha=function(a,b,c){o.addEventListener?o.addEventListener(a,c,j):o.document.attachEvent&&o.document.attachEvent(b,c)};
W.Ra=function(){var a=h;o.document.hasFocus&&(a=o.document.hasFocus());var b=j;W.Ka&&(b=o.document[W.Ka]);return a&&!b};W.xb=function(){W.Ra()?W.qa():W.Qa()};function Ra(a){var b=i;if(a&&(b=Sa()))return b;var c=o.location,b=X(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function Sa(){var a=i;q(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return b=Aa(b.href),a=X(b.pathname)+b.search+b.hash,j});return a}
for(var Ta={},Ua=0;Ua<81;Ua++)Ta["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Ua)]=h;function Va(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Ta[c]?String.fromCharCode(c):"%"+b.toUpperCase()}function X(a){if(!u(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Va);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function ba(){this.a=o._sf_async_config||{};this.ga=r(this.wb,this);this.s=[];this.e=new Oa(this.Ab);this.o=j;this.i=new Ia;this.ra=r(this.K,this);s(o,"unload",this.ra);Wa(this)||this.d()}n=ba.prototype;n.Z=h;function Wa(a){if(W.Aa&&document[W.Aa]==="prerender"){a.o=h;var b=r(function(){if(this.o&&document[W.Aa]!=="prerender")this.o=j,this.d(),Xa(this),window.setTimeout(function(){document.removeEventListener(W.ca,b,j)},100)},a);document.addEventListener(W.ca,b,j);return h}return j}
n.d=function(){this.la=this.n=0;this.A=y();this.L=p(Ya(this));this.z=h;this.ma=72E5;this.X=0;if(this.Z){var a=+this.a.sessionLength;if(!isNaN(a))this.ma=a*6E4}this.i.d();S.d();M.d();W.d();this.m=0;this.Xa=J(wa,this.pa,this)};function Xa(a){if(!a.e.c("_SUPERFLY_nosample")&&!a.o)a.sb?a.ua():(a.sb=h,!o._sf_async_config&&!o._cbq?(a.V=r(a.ua,a),s(o,"load",a.V)):a.ua())}n.ua=function(){var a=o._sf_startpt,b=o._sf_endpt;if(t(a))this.W=t(b)?b-a:y()-a;M.d();this.rb=setInterval(r(this.Pa,this),15E3);this.Pa()};
n.Pa=function(){var a=this.i.v,a=this.a.reading&&+this.a.reading||a>0;this.la<this.n&&!a?this.la++:(a?this.n=0:Za(this),this.la=0,this.s.push(0),this.s.length>18&&this.s.shift(),this.Z&&y()-this.A>=this.ma?this.terminate():this.w())};n.wb=function(){this.s.push(1);var a=0;q(this.s,function(b){a+=b});a<3?(this.z=h,Za(this)):(this.terminate(),this.e.create("_SUPERFLY_nosample","1",600))};n.K=function(){};n.pa=function(){var a=$a(this);this.m=Math.max(this.m,a)};
function $a(a){return C("Y","Top",!!a.a.scrollElement)}function Za(a){var b=a.n,b=b?Math.min(b*2,16):1;a.n=b}n.ba=function(a,b){if(!this.o)this.K(),this.terminate(),this.P=o.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=X(a),b&&(this.a.title=b),this.d(),Xa(this)};function ab(a){if(a.P)return h;a=(document.referrer||"").indexOf("://"+o.location.host+"/");return a!=-1&&a<9}
function bb(a){a=a.P;if(!a&&(a=document.referrer||"")){var b=Aa(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=X(b.pathname),a=Ba(b)}return encodeURIComponent(a)}function cb(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}
function Ya(a){var b=o.navigator,c=o.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];q(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=o.performance;d=d.concat([b&&b.now?b.now():"",bb(a),document.title,o.location.href,y(),ra("Width"),F(),da()]);return d.join()}function db(a){var b="",c=a.e.c("_chartbeat4");c&&(q(c.split("::"),function(a){b+="&z="+encodeURIComponent(a)}),a.e.remove("_chartbeat4"));return b}
function eb(a){var a=(a.e.c("_chartbeat2",h)||"").split("."),b=y(),c=b-+(a[1]||0);b-=+(a[2]||0);return a[0]&&c>18E5&&b<2592E6?0:1}n.terminate=function(){this.i.terminate();K(this.Xa);this.V!==g&&ga("load",this.V);clearInterval(this.rb)};n.F=function(){this.terminate();ga("unload",this.ra);this.ra=this.V=this.e=this.s=this.ga=this.a=i;this.i.F();this.i=i};function Y(){this.l=[];this.sa=[];"postMessage"in window&&s(window,"message",r(this.ob,this));this.Ab="_p_";this.Z=j;this.Hb=i;s(o,"beforeunload",r(this.vb,this));ba.call(this)}aa(Y);var fb=0;n=Y.prototype;
n.d=function(){Y.M.d.call(this);var a=o.location;N(this.a,"pingServer","ping.chartbeat.net");N(this.a,"endServer","edge01.chartbeat.net");N(this.a,"title",document.title);N(this.a,"domain",a.host);N(this.a,"path",Ra(!!this.a.useCanonical));N(this.a,"engaged",j);a=o.location.search||"";if(a.match(Ea))a=xa(a).__cb_debug,fb=parseInt(a,10);this.R=this.a.adIdentifier||"data-cb-ad-id";this.a.domain=fa(this.a.domain);this.na=eb(this);this.k=this.e.c("_chartbeat2",h);this.t=this.Ma=0;this.ib=function(){var a=
y()-this.Ma;a<500?(this.t&&o.clearTimeout(this.t),this.t=o.setTimeout(r(this.w,this),500-a)):this.z||this.w()};this.hb=J("p",this.ib,this);if(!this.k)this.a.utoken?this.k=this.a.utoken:(this.k=p(Ya(this),3),this.a.utoken=this.k);this.k=this.k.split(".")[0];gb(this);hb(this);if((a=this.a.engagedAdFilters)&&a.length){this.a.engagedAdFilters=[];var b=this;q(a,function(a){b.Q(a)})}this.gb=J("e",this.fb,this);this.sa=[]};n.vb=function(){this.w(h)};
n.K=function(){this.e.update("_chartbeat4",["t="+this.L,"E="+this.i.total(),"ad="+ia(ib(this)),"x="+$a(this),"c="+Math.round((y()-this.A)/600)/100,"y="+F(),"w="+E()].join("&"),3600,g,g,1)};
function ib(a){var b=[];q(a.l.concat(a.sa),function(a){var a=a.u?a.u():a,d=encodeURIComponent(a.id),e=a.engagedSeconds,f=a.positionLeft,l=a.positionTop,k=a.width,m=a.height,w=encodeURIComponent(a.creativeId||""),x=encodeURIComponent(a.campaignId||""),D=encodeURIComponent(a.placementId||""),H=encodeURIComponent(a.siteId||""),A=encodeURIComponent(a.server_height||""),I=encodeURIComponent(a.server_width||""),z=encodeURIComponent(a.lineId||""),v=a.order,sb=a.refreshed||"0",tb=a.viewable?"1":"0";a.exclude&&
(x="");b.push(d+"="+[e,f,l,k,m,x,w,v+"."+sb,tb,D,H,A,I,z].join("::"))});return b.join("&")}
n.w=function(a){this.X++;this.Ma=y();var b=this.a,c=$a(this);this.m=Math.max(this.m,c);this.t&&o.clearTimeout(this.t);var d="",e="";if(this.z)this.z=j,d=(ab(this)?"&v=":"&r=")+bb(this),this.P&&(d+="&vp=1"),e="&i="+cb(this);var f=this.W?"&b="+this.W:"";Ra(!!b.useCanonical);var l=!b.noCookies&&this.e.isSupported(),a="https://"+(a?b.endServer:b.pingServer)+"/ping/ad?h="+encodeURIComponent("ads."+b.domain)+"&p="+encodeURIComponent(b.path)+"&u="+this.k+"&d="+ia(fa(o.location.host))+"&g="+b.uid+O(b,0,"sections")+
O(b,1,"authors")+O(b,2,"zone")+O(b,3,"sponsorName")+O(b,4,"type")+(l?"&n="+this.na:"&nc=1")+"&c="+Math.round((y()-this.A)/600)/100+"&x="+c+"&m="+this.m+"&y="+F()+"&o="+ra("Width")+"&w="+E()+"&j="+(a?0:Math.round((this.n+2)*15E3/1E3))+"&E="+this.i.total()+d+f+"&t="+this.L+"&V=44"+e+"&tz="+(new Date).getTimezoneOffset()+(Qa(this.e)?"&l=1":"")+Da(b)+"&ad="+ia(ib(this))+(a?"":db(this))+(a?"&zz=1":"")+"&sn="+this.X+"&_";this.o||ca(a,this.ga)};
function jb(a){a=oa(a.R,"div");return la(a,function(a){a=P(a);return a.height>1&&a.width>1})}function gb(a){var b=jb(a);q(b,function(b){if(!kb(a,b)){var d=new T(b,fb);a.l.push(d);d.aa();if(b=B("data-cb-engaged-seconds",b))d=d.u(h),d.engagedSeconds=parseInt(b,10),a.Q(d)}})}function kb(a,b){var c=j;q(a.l,function(a){if(a.h===b)return c=h,j});return c}n.aa=function(){q(this.l,function(a){a.aa()})};n.pa=function(){Y.M.pa.call(this);gb(this)};n.ob=function(a){this.Na(ma(a.data),a.source)};
n.Na=function(a,b){if(a.cbType!=="campaignMessage")return j;var c=b;if(c.parent!=window){for(var d=0;c.parent!=window&&d<10;)c=c.parent,d++;if(d>=10)return j}gb(this);var d=document.getElementsByTagName("iframe"),e=g;q(d,function(a){if(a.contentWindow===c)return e=a,j});if(!e)return j;var f=e.getAttribute(this.R);if(f===i){d=pa(e,this.R);if(d===j)return j;f=d.getAttribute(this.R)}var l=g;q(this.l,function(a){if(f===a.q)return l=a,j});if(l===g)return j;Na(l,a,e);if(a.exclude)l.ha=h;if(a.engagedSeconds)d=
{id:l.q},d.campaignId=a.campaignId,d.creativeId=a.creativeId,d.engagedSeconds=parseInt(a.engagedSeconds,10),this.Q(d);d="cbdata::ack::"+this.L;"postMessage"in b&&b.postMessage(d,"*");return d};n.ba=function(){this.K();this.terminate();this.P=o.location.protocol+"//"+this.a.domain+this.a.path};
n.Q=function(a){if(a&&t(a.engagedSeconds)&&!isNaN(a.engagedSeconds)){var b=this.a.engagedAdFilters;if(!b||b.length===g)this.a.engagedAdFilters=[],b=this.a.engagedAdFilters;var c={};c.engagedSeconds=a.engagedSeconds;q(["id","campaignId","creativeId"],function(b){u(a[b])&&(c[b]=a[b])});var d=j;q(b,function(a){d=ja(a,c);return!d});d||b.push(c)}};
n.fb=function(a,b){var c=this.a.engagedAdCallback;if(c){var d=this.a.engagedAdFilters;if(d&&d.length&&a){var e=a.engagedSeconds;q(d,function(d){if(d.engagedSeconds===e){var l=h;q(d,function(b,c){return l=b===a[c]});if(l)return a.element=b,c(a,e),j}})}}};n.yb=function(a){if(a){var b;q(this.l,function(c){if(c.q===a||c.h===a)return b=c,j});if(b){var c=b.u();c.refreshed="1";this.sa.push(c);b.reset()}}};
function hb(a){if(fb===1){var b=document.createElement("div");b.setAttribute("style","position:fixed; left:0; right:0 ;top:0 ;bottom:0; background-color: rgba(0, 0, 0, 0.3); z-index:1000;");document.body.appendChild(b);var c=document.createElement("div");document.body.appendChild(c);var d=a.a;q(["sections","zone","sponsorName","type"],function(a){if(d[a]!==g){var b=document.createElement("div");b.textContent=a+": "+d[a];c.appendChild(b)}});c.children.length&&(a="background-color: #F1F7FB; z-index: 9000000; position: fixed;padding: 10px; border-radius: 5px; font-size: 12px;color: #658BA1; border: 1px solid #C8DAE8;font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif;top: "+
Math.round(E()*0.9)+"px;left: "+Math.round(qa("Width")*0.45)+"px;",c.setAttribute("style",a))}}n.terminate=function(){K(this.hb);K(this.gb);q(this.l,function(a){a.F()});this.l=[];o.clearTimeout(this.t);Y.M.terminate.call(this)};if(!o.pSUPERFLY_pub){var lb=new Y;o.pSUPERFLY_pub=lb;Y.prototype.virtualPage=Y.prototype.ba;Y.prototype.addEngagedAdFilter=Y.prototype.Q;Y.prototype.refreshAd=Y.prototype.yb;Y.prototype.updateCampaignData=Y.prototype.aa;if("postMessage"in window!==h)Y.prototype.loadCampaign=Y.prototype.Na;Xa(lb)};function mb(){var a=document.createElement("script");a.async=h;a.src=(o.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function nb(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=V.f(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),mb())}};function ob(a,b){for(var c=b||document.documentElement,d=[],e=i,f=a,l,k,m,w,x,D;f&&f!==c;){l=f.nodeName.toLowerCase();e=f;k=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){m=f.children;w=0;for(x=0,D=m.length;x<D;x++){if(e===m[x]){l+="["+(1+x-w)+"]";break}m[x].nodeName!==k&&w++}}d.unshift(l)}return d.join("/")};function Z(){ba.call(this);for(var a=r(this.Sa,this),b=o._cbq||[];b.length;)a(b.shift());o._cbq={push:a};"postMessage"in window&&s(o,"message",r(this.nb,this))}aa(Z);n=Z.prototype;
n.d=function(){Z.M.d.call(this);this.da=i;Ca(this.a);var a=o.location;N(this.a,"pingServer","ping.chartbeat.net");N(this.a,"title",document.title);N(this.a,"domain",a.host);this.a.path=this.a.path?X(this.a.path):Ra(!!this.a.useCanonical);this.ja=fa(a.host);this.a.domain=fa(this.a.domain);a=(this.e.c("_chartbeat2",h)||"").split(".");a.length>4&&(a=[]);var b=y(),c,d="1",e=a&&+a[2];c=a&&a[3];if(a&&e&&c)if(d=Math.abs((ha(b)-ha(e))/864E5)){d=Math.min(d,16)-1;for(e="";d--;)e+=0;d=(c+e+"1").slice(-16)}else d=
c;c=d;this.na=eb(this);a[0]||(a[0]=this.a.utoken||p(Ya(this),3),a[1]=b);a[2]=b;a[3]=c;this.za=a[0];this.k=a.join(".");this.e.create("_chartbeat2",this.k,94608E3,h);this.a.utoken=this.za;var f;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)f=(Math.min((Math.abs((ha(c)-ha(b))/864E5)||0)+1,16,a.length)-1).toString(16),f+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.Ia=f;this.Za=J("c",this.tb,this);this.$a=J("r",this.ub,this)};n.Wa=function(a){this.da=a};
n.K=function(){this.e.update("_chartbeat4",["t="+this.L,"E="+this.i.total(),"x="+$a(this),"c="+Math.round((y()-this.A)/600)/100,"y="+F(),"w="+E()].join("&"),3600,g,g,1)};
n.w=function(a){this.X++;var b=this.a,c=$a(this);this.m=Math.max(this.m,c);var d=Math.round((y()-this.A)/600)/100,e=0,f=0,l=0,k=this.i.v;M.Ya()?f=1:this.a.reading&&+this.a.reading||k>0||d<0.09?e=1:l=1;var m="",w="",x="",D="",H="",A=ab(this);if(this.z){this.z=j;var m=(A?"&v=":"&r=")+bb(this),w="&i="+cb(this),I=this.a.hudTrackable;I!==g&&(x="&L="+(I?"1":"0"));if(A&&(A=pb(this)))m="&v="+encodeURIComponent(A.path),D="&K="+qb(A),A.oa>1&&(D+="&l1="+A.oa);b.alias&&(H="&PA="+encodeURIComponent(b.alias));
this.P&&(m+="&vp=1")}a=a?"&KK="+qb(a,h):"";A=this.W?"&b="+this.W:"";I=this.da?"&A="+this.da:"";b=(o.location.protocol||"http:")+"//"+b.pingServer+"/ping?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&u="+this.za+"&d="+encodeURIComponent(this.ja)+"&g="+b.uid+O(b,0,"sections")+O(b,1,"authors")+O(b,3,"sponsorName")+O(b,4,"type")+(!b.noCookies&&this.e.isSupported()?"&n="+this.na:"&nc=1")+(this.Ia?"&f="+this.Ia:"")+"&c="+d+"&x="+c+"&m="+this.m+"&y="+F()+"&o="+ra("Width")+"&w="+E()+
"&j="+Math.round((this.n+2)*15E3/1E3)+"&R="+e+"&W="+f+"&I="+l+"&E="+this.i.total()+"&e="+k+m+D+a+H+A+I+ya("C","utm_campaign",b.campaignTag)+ya("M","utm_medium",b.mediumTag)+"&t="+this.L+"&V=44"+db(this)+w+x+"&tz="+(new Date).getTimezoneOffset()+(Qa(this.e)?"&l=1":"")+Da(b)+"&sn="+this.X+"&_";this.o||ca(b,this.ga)};
n.nb=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.ja)){var c=a.data;u(c)&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Sa(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title="+cb(this)+"&referrer="+bb(this)+"&internal="+(ab(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ja)+"&utoken="+this.za,a.source.postMessage(b,"*"))}};
n.Sa=function(a){this.a[a[0]]=a[1];this.n=0};function rb(a){a=a.replace(/-{2,}/g,"-");a=Aa(a);a.pathname=X(a.pathname);return a}n.tb=function(a){ub(this,a,"c")};n.ub=function(a){ub(this,a,"r")};
function ub(a,b,c){if(a.Z&&y()-a.A>=a.ma)a.terminate();else{var d=b.href||"",d=rb(d);if(!(d.hostname!==o.location.hostname||d.protocol.indexOf("http")!==0)){var d=Ba(d),e=sa(b,function(a){return a.id}),f=ob(b,e);e&&(f&&(f="/"+f),f="*[@id='"+e.id+"']"+f);e=p(f);b=R(b,g,h);c={left:b.x,top:b.y,path:a.a.path,href:d,Ca:e,Ba:f,ta:c,oa:0};a.w(c);a.e.update("_chartbeat5",vb(c),60,j,g,5,function(a){a=a.split(",");return a[2]+","+a[3]})}}}
function qb(a,b){var c=[a.left,a.top,a.Ca,encodeURIComponent(a.Ba),a.ta];b&&c.push(encodeURIComponent(a.href));return c.join("::")}function vb(a){var b=encodeURIComponent(a.Ba),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.Ca,b,a.ta].join(",")}
function pb(a){var b=a.e.c("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e;if(b===1)d=c[0].split(","),e=0;else{var f,l=rb(o.location.href),k=Ba(l);q(c,function(a,b){var c=a.split(","),l=na(k,decodeURIComponent(c[3]));if(l===0)return d=c,e=b,j;if(f===g||l<f)f=l,d=c,e=b})}c.splice(e,1);a.e.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),Ca:d[4]||"",Ba:a,ta:d.length>6?d[6]:"c",
oa:b}}n.terminate=function(){K(this.Za);K(this.$a);Z.M.terminate.call(this)};if(!o.pSUPERFLY){var wb=new Z;o.pSUPERFLY=wb;Z.prototype.virtualPage=Z.prototype.ba;Z.prototype.activity=Z.prototype.Wa;var $=o.pSUPERFLY_pub;$&&$.virtualPage&&(Z.prototype.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.virtualPage();Z.prototype.ba.apply(wb,a);$.d();Xa($)});$&&$.addEngagedAdFilter&&(Z.prototype.addEngagedAdFilter=r($.addEngagedAdFilter,$));$&&$.refreshAd&&(Z.prototype.refreshAd=r($.refreshAd,$));Xa(wb);var xb=V.f(h);if(xb){s(o,"message",
nb);var yb;if(yb=xb.getItem("_cb_ip")){var zb=o.location;yb=!(!/^([^.]+[.])?chartbeat\.com$/.test(zb.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(zb.pathname))}yb&&mb()}};})();