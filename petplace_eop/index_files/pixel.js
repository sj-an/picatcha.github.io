!function(d,w,n){w.__sP=w.__sP||function(){};var E=w.encodeURIComponent,D=w.decodeURIComponent,S=["s","r","c"].join(""),H=["i","n","n","e","r","H","T","M","L"].join(""),tmp=d.documentMode;try{d.documentMode=""}catch(e){}var IE="number"==typeof d.documentMode?!0:eval("/*@cc_on!@*/!1");try{d.documentMode=tmp}catch(e){}var fc="scrpth",R=function(){this.t=(new Date).getTime()};R.prototype.E=function(){return(new Date).getTime()-this.t};var P=function(parameters,settings,iframe,iframeUrl){var T=this;T.p=parameters,T.s=settings,T.c=[],T.m=new R,T.y=null,T.i=iframe,T.u=iframeUrl,P.U={DF:function(){return"undefined"!=typeof d.hidden?!d.hidden:"undefined"!=typeof d.mozHidden?!d.mozHidden:"undefined"!=typeof d.msHidden?!d.msHidden:"undefined"!=typeof d.webkitHidden?!d.webkitHidden:!0},D:function(){var t=d.getElementsByTagName("body")[0],e=d.documentElement;return{w:Math.max(t.clientWidth,e.clientWidth,t.scrollWidth,e.scrollWidth,t.offsetWidth,e.offsetWidth,0),h:Math.max(t.clientHeight,e.clientHeight,t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,0)}},V:function(){if("undefined"!=typeof window.innerWidth)return{w:Math.max(window.innerWidth||0),h:Math.max(window.innerHeight||0)};if("undefined"!=typeof d.documentElement&&"CSS1Compat"==d.compatMode)return{w:Math.max(d.documentElement.clientWidth||0),h:Math.max(d.documentElement.clientHeight||0)};var t=d.getElementsByTagName("body")[0];return{w:Math.max(t.clientWidth||0),h:Math.max(t.clientHeight||0)}},I:function(){return Math.floor(1000000001*Math.random())},A:function(t){var e;return"undefined"!=typeof d.hidden?e="visibilitychange":"undefined"!=typeof d.mozHidden?e="mozvisibilitychange":"undefined"!=typeof d.msHidden?e="msvisibilitychange":"undefined"!=typeof d.webkitHidden&&(e="webkitvisibilitychange"),e?d.addEventListener?d.addEventListener(e,t,!1):d.attachEvent?d.attachEvent("on"+e,t):void 0:!1},X:function(t){var e;return"undefined"!=typeof d.hidden?e="visibilitychange":"undefined"!=typeof d.mozHidden?e="mozvisibilitychange":"undefined"!=typeof d.msHidden?e="msvisibilitychange":"undefined"!=typeof d.webkitHidden&&(e="webkitvisibilitychange"),e?d.removeEventListener?d.removeEventListener(e,t):d.detachEvent("on"+e,t):!1},IF:function(){return w.top.location!=w.location},O:function(t){var e=0,n=0;if(t.offsetParent)do e+=t.offsetLeft,n+=t.offsetTop;while(t=t.offsetParent);return{x:e,y:n}}};var F=function(t){this.v=null,this.r=null,this.u=t||T.s.u.v};F.RE=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,F.prototype.isSupported=function(t){var e=this.V(1);return e?e[0]>t[0]||e[0]==t[0]&&e[1]>=t[1]:!1},F.prototype.V=function(t){if(null===this.v){var e,r;try{r=n.plugins["Shockwave Flash"].description.slice(16)}catch(i){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),r=e&&e.GetVariable("$version")}catch(i){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),r=e&&e.GetVariable("$version")}catch(i){}}}this.r=r,r=P.U.F.RE.exec(r),this.v=r}return t?this.v?[this.v[1],this.v[3]]:[0,0]:this.v},F.prototype.R=function(){return null===this.r&&this.V(),this.r},F.prototype.H=function(t,e){e=e||P.U.I();var r="<object ";if(n.userAgent.toLowerCase().indexOf("firefox")>-1&&(r+='style="z-index: 99999" '),r+='id="'+e+'" name="'+e+'"',r+=IE&&!n.userAgent.match(/Trident.*rv.11\./)?' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="'+this.u+"?"+P.U.I()+'" />':' data="'+this.u+'" type="application/x-shockwave-flash">',r+='<param name="allowscriptaccess" value="always" /><param name="quality" value="high" />',t){var i=[];for(var o in t)t.hasOwnProperty(o)&&t[o]&&i.push(o+"="+t[o]);r+='<param name="flashvars" value=\''+i.join("&")+"' />"}return r+="</object>"},P.U.F=F,P.U.JSON=w.JSON||{parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)},n={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},r=function(t){return n[t]||"\\u"+(t.charCodeAt(0)+65536).toString(16).substr(1)},i=/[\\"\u0000-\u001F\u2028\u2029]/g;return function o(n){if(null==n)return"null";if("number"==typeof n)return isFinite(n)?n.toString():"null";if("boolean"==typeof n)return n.toString();if("object"==typeof n){if("function"==typeof n.toJSON)return o(n.toJSON());if(e(n)){for(var a="[",s=0;s<n.length;s++)a+=(s?", ":"")+o(n[s]);return a+"]"}if("[object Object]"===t.call(n)){var u=[];for(var h in n)n.hasOwnProperty(h)&&u.push(o(h)+": "+o(n[h]));return"{"+u.join(", ")+"}"}}return'"'+n.toString().replace(i,r)+'"'}}()},P.U.OB=function(t){return"object"!=typeof t?"":P.U.JSON.stringify(t).replace(/([a-z]{3})/g,function(t){return"|"+parseInt(t,36)+"|"}).split('"').reverse().join("*")},P.prototype.P=function(t){if(null===this.y){this.y=[];for(var e in this.p)this.p.hasOwnProperty(e)&&"rt"!==e&&this.y.push(E(e)+"="+E(this.p[e]))}return t.concat(T.y)},P.prototype.J=function(t){var e="__sp_iframe_"+Math.floor(1000000001*Math.random()),n=d.createElement("div");n.style.display="none",n.style.height=n.style.width="0px",n.style.overflow="hidden",n[H]='<iframe id="'+e+'" name="'+e+'" style="height:1px;width:1px;"></iframe>',d.body.appendChild(n);var r=d.getElementById(e);r.name=e,t.push("rspt=i");var i=d.createElement("form");i.method="post",i.style.display="none",t.push("fid="+e);for(var o=0,a=t.length;a>o;++o){var s=d.createElement("input"),u=t[o].split("=");s.name=u.shift(),s.value=u.join("="),s.type="hidden",i.appendChild(s)}if(i.action=this.s.u.a,i.target=e,n.appendChild(i),i.submit(),!w.postMessage){var h,f=function(){try{if(r&&r.name!==h&&(h=r.name,r.name==="#!__fqfr="+e)){try{d.body.removeChild(n)}catch(t){}return}}catch(t){}setTimeout(f,10)};f()}},!function(){var t,e=!1,r=[];if(t=w.postMessage?function(t){T.i.contentWindow.postMessage(t.join("&"),"*")}:function(t){T.i.contentWindow.location=T.u+"#!"+t.join("&")},P.prototype.S=function(i){if(e){if(!w.postMessage){for(var o=[],a=0;a<n.plugins.length;a++)o.push(n.plugins[a].name);return i.push("wnua="+E(w.navigator.userAgent)),i.push("bddm="+E(d.documentMode)),i.push("pm47="+E(o.length?o.join(" ; "):"")),i.push("pm87="+E("function"==typeof d.replaceNode?1:0)),void T.J(i)}return void r.push([i])}e=!0,t(i)},w.postMessage){var i=function(t){if("string"==typeof t.data){if("__fqok=1"===t.data)return e=!1,void(r.length&&T.i.contentWindow.postMessage(r.unshift().join("&"),"*"));for(var n=t.data.split("&"),i={},o=0,a=n.length;a>o;++o){var s=n[o].split("=");2===s.length&&(i[s[0]]=s[1])}if(i.__fqfr){var u=d.getElementById(i.__fqfr);if(u)try{d.body.removeChild(u.parentNode)}catch(t){}}}};w.addEventListener?w.addEventListener("message",i,!1):w.attachEvent("onmessage",i)}}(),T.C().R()};P.laop=[[19632,339,19223],[291074,897,795],[24856,18039]],P.lsp=[".","O",""],P.lbs=11110,P.prototype.C=function(){var t=this;return t.c.push(function(){var t=d.body,e=d.documentElement,n=P.U.V();return{pm64:Math.max(t.clientWidth,e.clientWidth,t.scrollWidth,e.scrollWidth,t.offsetWidth,e.offsetWidth,0),pm65:Math.max(t.clientHeight,e.clientHeight,t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,0),pm66:"undefined"!=typeof w.devicePixelRatio?w.devicePixelRatio:"",pm89:n.w,pm90:n.h,pm91:P.U.DF()?"1":"",pm92:d.hasFocus&&d.hasFocus()?"1":"",pm68:P.U.IF()?"1":""}}),!function(){function e(){var t,e;try{t=w,e={w:t.innerWidth,h:t.innerHeight,sd:Math.min(t.innerWidth,t.innerHeight)}}catch(n){return!1}for(;t.parent!==t.top;){t=t.parent;try{var r=t.innerWidth,i=t.innerHeight,o=Math.min(r,i)}catch(n){return!1}if(5>=o)return{w:t.innerWidth,h:t.innerHeight};o<e.sd&&(e.w=r,e.h=i,e.sd=o)}return e}function n(){var t;try{t=w.top.innerWidth}catch(e){t=-1}return t}function r(){var t;try{t=w.top.innerHeight}catch(e){t=-1}return t}function i(t,e){if("string"!=typeof t||"string"!=typeof e||e.length>t.length)return-1;for(var n=e.length,r=t.length,i=r-n,o=0;i>=o;o++){var a=t.substring(o,o+n);if(e===a)return o}return-1}var o={},a=[function(){return!!/PhantomJS/.test(w.navigator.userAgent)},function(){return"undefined"==typeof PluginArray?!1:!(w.navigator.plugins instanceof PluginArray&&0!=w.navigator.plugins.length)},function(){return!("undefined"==typeof w.callphantom&&"undefined"==typeof w._phantom&&"undefined"==typeof w.__phantomas)},function(){return Function.prototype.bind?Function.prototype.bind.toString().replace(/bind/g,"Error")!=Error.toString()?!0:Function.prototype.toString.toString().replace(/toString/g,"Error")!=Error.toString()?!0:!1:!0},function(){var t;try{null[0]()}catch(e){t=e}return!!(i(t.stack,"phantomjs")>-1)},function(){return!("undefined"==typeof w.buffer)},function(){return!("undefined"==typeof w.emit)},function(){return!("undefined"==typeof w.spawn)},function(){return!("undefined"==typeof w.webdriver)},function(){return!("undefined"==typeof w.domautomation&&"undefined"==typeof w.domautomationcontroller)},function(){return!(0!==w.outerWidth||0!==w.outerHeight)}],s=e();if(s&&(o.pm111=s.w,o.pm112=s.h),"undefined"!=typeof w.chrome&&"undefined"!=typeof w.chrome.csi){var u=w.chrome.csi();o.pm113=u.pageT,o.pm114=u.onloadT-u.startE,o.pm115=u.tran}o.pm116=w.outerWidth,o.pm117=w.outerHeight;var h=r(),f=n();-1!==h&&-1!==f&&(o.pm118=f,o.pm119=h);for(var d=[],l=0;l<a.length;l++){var c=a[l];c()&&d.push(l)}d.length>0&&(o.hb01=P.U.JSON.stringify(d)),t.c.push(function(){return o})}(),t.c.push(function(){for(var e=!1,n=function(n){if(!e){e=!0,n=n||w.event;var r,i,o,a=n.type.substring(0,5);if(IE){{var s=d.body;n.srcElement}r=n.clientX+s.scrollLeft,i=n.clientY+s.scrollTop,o="e14=1"}else"touch"===a?(r=n.touches[0].pageX,i=n.touches[0].pageY,o="e15=1"):(r=n.pageX,i=n.pageY,o="e14=1");var h=t.m.E();t.J(t.P(["rt=extra","et=mo","e10="+r,"e11="+i,"e12="+h,o])),u()}},r=["mousemove","touchstart"],i=0,o=r.length;o>i;++i){var a=r[i];if(d.addEventListener)d.addEventListener(a,n,!1);else{var s="on"+a;d[s]=n,d.attachEvent&&d.attachEvent(s,n)}var u=function(t){return function(){if(d.removeEventListener)d.removeEventListener(t,n,!1);else{var e="on"+t;d[e]=null,d.detachEvent&&d.detachEvent(e,n)}}}(a)}return{}}),t.c.push(function(){function e(t){this.obj=t}function n(t){this.obj=t,this.apiString="Flow Player"}function r(t){this.obj=t,this.apiString="JW Player"}var i=P.U.I(),o=!1;try{o=w.frameElement&&"about:blank"===w.location.href.toString()}catch(a){}w.attachEvent&&w.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){}});var a=!1;t.s.e.c&&(a=o?parent.document.getElementById(t.s.e.c):d.getElementById(t.s.e.c)),a||(a=o?parent.document:d);var s=function(){t.J(t.P(["rt=extra","pm68="+(P.U.IF()?"1":""),"et=flvd","e54=1"]))};o?parent["_securepaths_flash_loaded_"+i]=s:w["_securepaths_flash_loaded_"+i]=s,e.prototype.FLASHPARAMS={level1:{names:["flashvars","allowfullscreen","allowscriptaccess","movie"],matchLevel:1},level2:{names:["wmode","swfversion","scale","quality"],matchLevel:2}},e.prototype.FLASHVARS={vpaid:{targets:["vast_2_0_vpaid_failover"]},ova:{targets:["ova.ads","ova.pluginmode","ova.debug","ova.useV2APICalls","ova.allowPlaylistControl","shortenLinearAdDurationPercentage","pauseOnClickThrough"]},brightcove:{targets:["brightcove","Brightcove","BrightCove"]}},e.prototype.check=function(){var t;for(var e in this.FLASHPARAMS)if(this.FLASHPARAMS.hasOwnProperty(e)){t=0;for(var n=0;n<this.FLASHPARAMS[e].names.length;n++)for(var r=0;r<this.obj.children.length;r++)if(this.obj.children[r].name.toLowerCase()==this.FLASHPARAMS[e].names[n]&&(t++,t==this.FLASHPARAMS[e].matchLevel))return!0}return!1},e.prototype.checkFlashvars=function(){for(var t,e=[],n=0;n<this.obj.children.length;n++)if("flashvars"==this.obj.children[n].name.toLowerCase()){t=this.obj.children[n].value;break}for(var r in this.FLASHVARS)if(this.FLASHVARS.hasOwnProperty(r))for(var n=0;n<this.FLASHVARS[r].targets.length;n++)if(-1!=t.indexOf(this.FLASHVARS[r].targets[n])){e.push(r);break}return e},e.prototype.getFlashvarsValue=function(){for(var t=0;t<this.obj.children.length;t++)if("flashvars"==this.obj.children[t].name.toLowerCase())return this.obj.children[t].value;return null},e.prototype.getInfo=function(){var t,e,n;if(this.obj.GetVariable){try{n=this.obj.GetVariable("/:mute")}catch(r){}n&&("string"==typeof n?(n=n.toLowerCase(),e="true"==n||"yes"==n||"1"==n):e="number"==typeof n?n>0:null);try{t=parseInt(this.obj.GetVariable("/:volume"))}catch(r){}return{vol:t,mute:e}}var i=this.getFlashvarsValue();if(i){var o="volume=".length,a="mute=".length,s=i.indexOf("volume="),u=i.indexOf("mute=");return t=-1!=s?parseInt(i.substring(s+o,s+o+2)):-1,e="true"==i.substring(u+a,u+a+"true".length).toLowerCase(),{vol:t,mute:e}}return null};var u,f,l="none",c=[],p=0,v=a.getElementsByTagName("object"),g=a.getElementsByTagName("embed"),m=[];for(u=0,f=v.length;f>u;++u)m.push(v[u]);for(u=0,f=g.length;f>u;++u)m.push(g[u]);var y=Object.create||function(t){function e(){}return e.prototype=t,new e};n.prototype=y(e.prototype),n.prototype.check=function(){return"function"==typeof this.obj.sp_getState},n.prototype.getInfo=function(){return{vsn:this.obj.sp_getVersion(),state:this.obj.sp_isPlaying(),vol:this.obj.sp_getVolume(),width:this.obj.clientWidth,height:this.obj.clientHeight,mute:this.obj.sp_getStatus().muted}},c.push(n),r.prototype=y(e.prototype),r.prototype.check=function(){return"function"==typeof this.obj.jwGetState},r.prototype.getInfo=function(){return{state:"PLAYING"===this.obj.jwGetState(),mute:this.obj.jwGetMute(),vol:this.obj.jwGetVolume(),height:this.obj.jwGetHeight(),width:this.obj.jwGetWidth()}},c.push(r);var b=t.s.e.a?d.getElementById(t.s.e.a):!1;return function(){function n(t){if(setTimeout(s,2e3),P.U.DF())u(t);else{var e=function(){P.U.DF()&&(u(t),P.U.X(e))};P.U.A(e)}}function r(t){var n=function(){for(var t,n,r=0;r<m.length;r++){n=!1;for(var i=0;i<c.length;i++)if(t=new c[i](m[r]),t.check()){n=!0,p++;break}n||(t=new e(m[r]),t&&t.getInfo&&t.getInfo()&&t.getInfo().vol&&p++)}};setTimeout(function(){n()},1e3),function r(n,i){for(var o=null,a=null,s=0,u=0;u<m.length;u++)for(var h=0;h<c.length;h++){var f=new c[h](m[u]);f.check()&&(o=m[u],a=c[h],s++)}if(i>10&&s>0)return l=new a(o).apiString,t(1==s?{player:o,playerObj:a}:null);if(i>10&&0==s)for(var u=0;u<m.length;u++){var f=new e(m[u]);if(f&&f.getInfo&&f.getInfo()&&f.getInfo().vol)return o=m[u],t({player:o,playerObj:e})}setTimeout(function(){r(s,n==s?i+1:0)},100)}(0,0)}function s(){var e,n,r=a.getElementsByTagName("object"),i=a.getElementsByTagName("embed"),o=[];for(e=0,n=r.length;n>e;++e)o.push(r[e]);for(e=0,n=i.length;n>e;++e)o.push(i[e]);var s=0,u=0,h=["rt=extra","et=flvd","pm68="+(P.U.IF()?"1":"")];for(e=0,n=o.length;n>e;++e)o[e].width>=100&&o[e].height>=100&&(10>s&&(h.push("e6"+s+"="+o[e].width+"x"+o[e].height),s++),u++);h.push("e70="+u),t.J(t.P(h))}function u(e){function n(e,n,r){var i=["rt=extra","et=flvd","pm68="+(P.U.IF()?"1":""),"e53="+n,"e55="+e];r&&r.getInfo&&r.getInfo().vol&&"none"!=l&&(i=i.concat(["e73="+(r.getInfo().vol?r.getInfo().vol:-1),"e74="+(r.getInfo().mute?1:0)])),t.J(t.P(i))}var r=null,a=new P.U.F;if(a.isSupported([11,2])){var s=d.createElement("div");s.id="sp_vw"+i,s.width=s.height="1px",s.overflow="hidden";var u=d.body,c={x:0,y:0};if(o&&(u=w.frameElement.parentNode,c=P.U.O(w.frameElement)),s[H]=a.H(f,"sp_vw"+i+"f"),r=s.getElementsByTagName("object")[0],r.style.position="absolute",b){var p=P.U.O(b);r.style.left=c.y+(p.x+b.offsetWidth/2)+"px",r.style.top=c.y+(p.y+b.offsetHeight/2)+"px"}else{var v=P.U.IF()?P.U.D():P.U.V();r.style.left=c.x+v.w/2+"px",r.style.top=c.y+v.h/2+"px"}r.style.opacity=0,r.style.width="1px",r.style.height="1px",r.style.zIndex=999999;var g=[2,5,10],m=1,y=null,E=function(t){null==y&&(0==g.length?(P.U.X(h),setTimeout(function(){var t=d.getElementById("sp_vw"+i);if(!IE&&t)try{t.parentNode.removeChild(t)}catch(e){}},100)):y=g.shift()),m==y&&(n(m,t.t,e),y=null),m++};o?parent["_securepaths_flash_viewability_"+i]=E:w["_securepaths_flash_viewability_"+i]=E,setTimeout(function(){u.appendChild(s),IE&&(o?parent["sp_vw"+i+"f"]=parent.document.getElementById("sp_vw"+i+"f"):w["sp_vw"+i+"f"]=d.getElementById("sp_vw"+i+"f"));var t=function(){var t=P.U.DF()?"up":"p";r&&r[t]&&r[t]()};P.U.A(t)},0)}}var f={securehost:t.s.s.h,secureport:t.s.s.p,cId:i,gip:t.s.gip,Q2:t.p.org,Q3:t.p.s,Q4:t.p.cmp,Q5:t.p.p,Q7:i,Q8:1},v=function(){var t,n;for(t=0;t<m.length;t++)for(var r=0;r<c.length;r++)if(n=new c[r](m[t]),n.check())return!0;for(t=0;t<m.length;t++)if(n=new e(m[t]),n&&n.getInfo&&n.getInfo()&&n.getInfo().vol)return!0;return!1};P.U.IF()&&!v()?n({}):r(function(e){var r=null;e&&(r=new e.playerObj(e.player),r&&r.getInfo&&r.getInfo()&&r.getInfo().vol&&-1!=r.getInfo().vol?t.J(t.P(["rt=extra","et=flvd","pm68="+(P.U.IF()?"1":""),"e57=1","e71="+(r.getInfo().vol?r.getInfo().vol:-1),"e72="+(r.getInfo().mute?1:0),"e75="+l,"e76="+p])):p&&t.J(t.P(["rt=extra","et=flvd","pm68="+(P.U.IF()?"1":""),"e57=1","e76="+p])),b=e.player),n(r)})}(),{}}),t},P.prototype.R=function(){var t=this,e=function(){for(var e=[],n=t.c.length,r=0;n>r;++r){var i=t.c[r]();for(var o in i)i.hasOwnProperty(o)&&(t.p[o]=i[o],"pm59"!==o&&e.push(o+"="+i[o]))}var a=t.m.E();e.push("pm59="+a),t.S(e)};if(4===t.c.length)e(t.c);else{var n=function(){4===t.c.length?e(t.c):setTimeout(n,0)};n()}},w.__sP.s_s499218725=function(t,e){return new P({"irt":"display","org":"statadrasp2kukeyec4a","s":"iis2zhzm-f49ff09c","ad":"","b":"","ra":"0","n":"","a":"37581938","p":"3597","dmn":"petplace.com","rd":"petplace.com","erf":"http://www.petplace.com/article/cats/behavior-training/normal-behavior/why-do-cats-carry-food-from-their-bowls","irf":"petplace.com","cmp":"357445","sl":"1"},{"gip":true,"s":{"h":"50.97.234.131","p":8080},"w":true,"v":{"r":[0,5],"s":55,"t":2,"w":false},"e":{"a":"","b":"","c":""},"u":{"a":"http://fqtag.com/pixel?s=iis2zhzm-f49ff09c","s":"http://fqtag.com/securepaths.swf","v":"http://fqtag.com/sp.swf"},"msmvTime":5,"msmvMovements":10,"msmvRefreshRate":20,"msmvMinMovements":3},t,e)}}(document,window,navigator);