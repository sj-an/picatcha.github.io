(function(){var g=this;var h=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent&&a.attachEvent("on"+b,d)};var m=function(a){return{visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0},n=function(a){var b;a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState?b="webkitvisibilitychange":a.visibilityState&&(b="visibilitychange");return b},p=function(a,b){if(3==m(b))return!1;a();return!0},aa=function(a,b){if(!p(a,b)){var d=!1,c=n(b),e=function(){if(!d&&p(a,b)){d=!0;var f=e;b.removeEventListener?b.removeEventListener(c,f,!1):b.detachEvent&&
b.detachEvent("on"+c,f)}};c&&h(b,c,e)}};var q=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var ba=q("0.04"),ca=q("0.001"),da=q("0.001");var ea=/^true$/.test("false")?!0:!1;var v=function(a){v[" "](a);return a};v[" "]=function(){};var w=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(void 0,a[d],d,a)};var x=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},y=function(a,b){return a<b?-1:a>b?1:0};var z;a:{var A=g.navigator;if(A){var B=A.userAgent;if(B){z=B;break a}}z=""};var fa=-1!=z.indexOf("Opera")||-1!=z.indexOf("OPR"),C=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"),ga=-1!=z.indexOf("Edge"),D=-1!=z.indexOf("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&-1==z.indexOf("Edge"))&&!(-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"))&&-1==z.indexOf("Edge"),ha=-1!=z.toLowerCase().indexOf("webkit")&&-1==z.indexOf("Edge"),ia=function(){var a=z;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ga)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(ha)return/WebKit\/(\S+)/.exec(a)},E=function(){var a=g.document;return a?a.documentMode:void 0},F=function(){if(fa&&g.opera){var a;var b=g.opera.version;try{a=b()}catch(d){a=b}return a}a="";(b=ia())&&(a=b?b[1]:"");return C&&(b=E(),b>parseFloat(a))?String(b):a}(),G={},H=function(a){if(!G[a]){for(var b=0,d=x(String(F)).split("."),c=x(String(a)).split("."),e=Math.max(d.length,c.length),f=0;0==b&&f<e;f++){var k=d[f]||"",l=c[f]||"",r=RegExp("(\\d*)(\\D*)","g"),ja=RegExp("(\\d*)(\\D*)","g");do{var t=
r.exec(k)||["","",""],u=ja.exec(l)||["","",""];if(0==t[0].length&&0==u[0].length)break;b=y(0==t[1].length?0:parseInt(t[1],10),0==u[1].length?0:parseInt(u[1],10))||y(0==t[2].length,0==u[2].length)||y(t[2],u[2])}while(0==b)}G[a]=0<=b}},I=g.document,ka=I&&C?E()||("CSS1Compat"==I.compatMode?parseInt(F,10):5):void 0;var J;if(!(J=!D&&!C)){var K;if(K=C)K=9<=ka;J=K}J||D&&H("1.9.1");C&&H("9");var la=function(a){this.b={};this.a={};for(var b=0,d=arguments.length;b<d;++b)this.a[arguments[b]]=""},M=function(a,b,d){var c=L;if(d?c.a.hasOwnProperty(d)&&""==c.a[d]:1){var e;a:{try{var f=window.top.location.hash;if(f){var k=f.match(/\bdeid=([\d,]+)/);e=k&&k[1]||"";break a}}catch(r){}e=""}if(e=(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))&&e[0]||null)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){b=window;try{var l=new Uint32Array(1);b.crypto.getRandomValues(l);e=l[0]/65536/65536}catch(r){e=
Math.random()}a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(d?c.a.hasOwnProperty(d)&&(c.a[d]=a):c.b[a]=!0)}},N=function(a){var b=L;return b.a.hasOwnProperty(a)?b.a[a]:""},ma=function(){var a=L,b=[];w(a.b,function(a,c){b.push(c)});w(a.a,function(a){""!=a&&b.push(a)});return b};var L,O="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url google_conversion_referrer_url".split(" "),
P=["google_conversion_first_time","google_conversion_snippets"];function Q(a){return null!=a?"3455583315"==(L?N(3):"")?encodeURIComponent(a.toString()):escape(a.toString()):""}function R(a){return null!=a?a.toString().substring(0,512):""}function S(a,b){var d=Q(b);if(""!=d){var c=Q(a);if(""!=c)return"&".concat(c,"=",d)}return""}function T(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function na(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var d=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var e=[],f=0;f<c.length;++f){var k=T(c[f]);null!=k&&e.push(k)}c=0==e.length?null:e.join(",")}else c=T(c);(e=T(b))&&null!=c&&d.push(e+"="+c)}b=d.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function U(a){return"number"!=typeof a&&"string"!=typeof a?"":Q(a.toString())}function oa(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],f=[];e&&(f.push(U(e.value)),f.push(U(e.quantity)),f.push(U(e.item_id)),f.push(U(e.adwords_grouping)),f.push(U(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function pa(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(S("u_h",e.height)),c.push(S("u_w",e.width)),c.push(S("u_ah",e.availHeight)),c.push(S("u_aw",e.availWidth)),c.push(S("u_cd",e.colorDepth)));a.history&&c.push(S("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(S("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(S("u_java",b.javaEnabled())),b.plugins&&c.push(S("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(S("u_nmime",b.mimeTypes.length)));
return c.join("")}function qa(a){if("3455315"!=(L?N(2):""))return"";a=a?a.title:"";if(void 0==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(b){return!1}};a=encodeURIComponent(a);for(var d=128;!b(a.substr(0,d));)d--;return"&tiba="+a.substr(0,d)}
function V(a,b,d,c){var e="";if(b){var f;if(a.top==a)f=0;else{var k=a.location.ancestorOrigins;if(k)f=k[k.length-1]==a.location.origin?1:2;else{k=a.top;try{var l;if(l=!!k&&null!=k.location.href)c:{try{v(k.foo);l=!0;break c}catch(r){}l=!1}f=l}catch(r){f=!1}f=f?1:2}}l="";l=d?d:1==f?a.top.location.href:a.location.href;e+=S("frm",f);e+=S("url",R(l));e+=S("ref",R(c||b.referrer))}return e}
function W(a){return!ea&&!ra.test(navigator.userAgent)||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}function X(a,b,d){d=d.google_remarketing_only?"googleads.g.doubleclick.net":d.google_conversion_domain||"www.googleadservices.com";return W(a)+"//"+d+"/pagead/"+b}
function sa(a,b,d,c){var e="/?";"landing"==c.google_conversion_type&&(e="/extclk?");e=X(a,[c.google_remarketing_only?"viewthroughconversion/":"conversion/",Q(c.google_conversion_id),e,"random=",Q(c.google_conversion_time)].join(""),c);L&&M(["3455314","3455315"],ca,2);var f;a:{f=c.google_conversion_language;if(null!=f){f=f.toString();if(2==f.length){f=S("hl",f);break a}if(5==f.length){f=S("hl",f.substring(0,2))+S("gl",f.substring(3,5));break a}}f=""}a=[S("cv",c.google_conversion_js_version),S("fst",
c.google_conversion_first_time),S("num",c.google_conversion_snippets),S("fmt",c.google_conversion_format),S("value",c.google_conversion_value),S("currency_code",c.google_conversion_currency),S("label",c.google_conversion_label),S("oid",c.google_conversion_order_id),S("bg",c.google_conversion_color),f,S("guid","ON"),S("disvt",c.google_disable_viewthrough),S("is_call",c.google_is_call),S("eid",ma().join()),oa(c),pa(a,b,c.google_conversion_date),na(c),V(a,d,c.google_conversion_page_url,c.google_conversion_referrer_url),
c.google_remarketing_for_search&&!c.google_conversion_domain?"&srr=n":"",qa(d)].join("");return e+a}function ta(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"}var ra=/Android ([01]\.|2\.[01])/i;
function Y(a,b,d,c){3!=c.google_conversion_format||c.google_remarketing_only||c.google_conversion_domain||L&&M(["317150500","317150501","317150504","317150505"],ba,1);L&&M(["3455583314","3455583315"],da,3);var e=L?N(1):"";b=sa(a,b,d,c);d=function(a,b,c){return'<img height="'+c+'" width="'+b+'" border="0" alt="" src="'+a+'" />'};return 0==c.google_conversion_format&&null==c.google_conversion_domain?'<a href="'+(W(a)+"//services.google.com/sitestats/"+ta(c.google_conversion_language)+"?cid="+Q(c.google_conversion_id))+
'" target="_blank">'+d(b,135,27)+"</a>":1<c.google_conversion_snippets||3==c.google_conversion_format?"317150501"==e||"317150504"==e||"317150505"==e?d(b,1,1)+('<script src="'+b.replace(/(&|\?)fmt=3(&|$)/,"$1fmt=4&adtest=on$2")+'">\x3c/script>'):d(b,1,1):'<iframe name="google_conversion_frame" title="Google conversion frame" width="'+(2==c.google_conversion_format?200:300)+'" height="'+(2==c.google_conversion_format?26:13)+'" src="'+b+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+
d(b.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function ua(){return new Image}function va(a,b){var d=ua;"function"===typeof a.opt_image_generator&&(d=a.opt_image_generator);d=d();b+=S("async","1");d.src=b;d.onload=function(){}}
function Z(a,b,d){var c;c=[Q(d.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");c=W(a)+"//www.google.com/ads/user-lists/"+c;c+=[S("label",d.google_conversion_label),S("fmt","3"),V(a,b,d.google_conversion_page_url,d.google_conversion_referrer_url)].join("");va(d,c)}
function wa(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version=
"8";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1);L=new la(1,2,3);return!0}function xa(a){for(var b=0;b<O.length;b++)a[O[b]]=null}function ya(a){for(var b={},d=0;d<O.length;d++)b[O[d]]=a[O[d]];for(d=0;d<P.length;d++)b[P[d]]=a[P[d]];return b}
function za(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));var d=document.createElement("script");d.src=X(window,"conversion_debug_overlay.js",a);b.appendChild(d)};(function(a,b,d){if(a)if(null!=/[\?&;]google_debug/.exec(document.URL))za(a);else{try{if(wa(a))if(3==m(d)){var c=ya(a),e="google_conversion_"+Math.floor(1E9*Math.random());d.write('<span id="'+e+'"></span>');aa(function(){try{var f=d.getElementById(e);f&&(f.innerHTML=Y(a,b,d,c),c.google_remarketing_for_search&&!c.google_conversion_domain&&Z(a,d,c))}catch(k){}},d)}else d.write(Y(a,b,d,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&Z(a,d,a)}catch(f){}xa(a)}})(window,navigator,document);}).call(this);
