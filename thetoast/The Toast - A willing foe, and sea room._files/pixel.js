!function(d,w,n){function R(){this.t=(new Date).getTime()}function P(e){_=e||{debug:!0},m=new R,this.randomId=Math.floor(1000000001*Math.random()),this.run()}var E=w.encodeURIComponent,S=["s","r","c"].join(""),H=["i","n","n","e","r","H","T","M","L"].join(""),tmp=d.documentMode;try{d.documentMode=""}catch(e){}var IE="number"==typeof d.documentMode?!0:eval("/*@cc_on!@*/!1");try{d.documentMode=tmp}catch(e){}var iframe,iframeUrl,_,m,fc="scrpth";R.prototype.E=function(){return(new Date).getTime()-this.t},P.p=null,P.P=function(e){if(null===P.p){P.p=[];for(var t in _)_.hasOwnProperty(t)&&"rt"!==t&&P.p.push(t+"="+_[t])}return e.concat(P.p)},P.S=function(e,t){w.postMessage?iframe.contentWindow.postMessage(t.join("&"),iframeUrl):iframe.location=iframeUrl+"#!"+t.join("&")},P.J=function(e,t){var n="__securepaths_iframe_"+Math.floor(1000000001*Math.random()),i=d.createElement("div");i.style.display="none",i.style.height="0px",i.style.width="0px",i.style.overflow="hidden",i[H]='<iframe id="'+n+'" name="'+n+'" style="height:1px;width:1px;"></iframe>',d.body.appendChild(i);var o=d.getElementById(n);o.name=n,t.push("rspt=i");var r=d.createElement("form");r.method="post",r.style.display="none";for(var a=0,l=t.length;l>a;++a){var s=d.createElement("input"),h=t[a].split("=");s.name=h.shift(),s.value=h.join("="),s.type="hidden",r.appendChild(s)}r.action=e,r.target=n,i.appendChild(r),r.submit()},P.laop=[[19632,339,19223],[291074,897,795],[24856,18039]],P.lsp=[".","O",""],P.lbs=11110,P.prototype.R=function(e){for(var t=[],n=e.length,i=0;n>i;++i){var o=e[i]();for(var r in o)o.hasOwnProperty(r)&&t.push(r+"="+o[r])}var a=m.E();t.push("pm59="+a),P.S("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",t)},P.F=function(){this.v=null,this.r=null},P.F.RE=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,P.F.prototype.isSupported=function(e){var t=this.V(1);return t?t[0]>e[0]||t[0]==e[0]&&t[1]>=e[1]:!1},P.F.prototype.V=function(e){if(null===this.v){var t,i;try{i=n.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),i=t&&t.GetVariable("$version")}catch(o){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),i=t&&t.GetVariable("$version")}catch(o){}}}this.r=i,i=P.F.RE.exec(i),this.v=i}return e?this.v?[this.v[1],this.v[3]]:[0,0]:this.v},P.F.prototype.R=function(){return null===this.r&&this.V(),this.r},P.F.prototype.H=function(e,t){t=t||P.randomId();var i="http://fqtag.com/sp.swf",o="<object ";if(n.userAgent.toLowerCase().indexOf("firefox")>-1&&(o+='style="z-index: 99999" '),o+='id="'+t+'" name="securepaths_swf"',o+=IE&&!n.userAgent.match(/Trident.*rv.11\./)?' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="'+i+"?"+P.randomId()+'" />':' data="'+i+'" type="application/x-shockwave-flash">',o+='<param name="allowscriptaccess" value="always" /><param name="quality" value="high" />',e){var r=[];for(var a in e)e.hasOwnProperty(a)&&e[a]&&r.push(a+"="+e[a]);o+='<param name="flashvars" value=\''+r.join("&")+"' />"}return o+="</object>"},P.DF=function(){return"undefined"!=typeof d.hidden?!d.hidden:"undefined"!=typeof d.mozHidden?!d.mozHidden:"undefined"!=typeof d.msHidden?!d.msHidden:"undefined"!=typeof d.webkitHidden?!d.webkitHidden:!0},P.A=function(e){var t;return"undefined"!=typeof d.hidden?t="visibilitychange":"undefined"!=typeof d.mozHidden?t="mozvisibilitychange":"undefined"!=typeof d.msHidden?t="msvisibilitychange":"undefined"!=typeof d.webkitHidden&&(t="webkitvisibilitychange"),t?d.addEventListener?d.addEventListener(t,e,!1):d.attachEvent?d.attachEvent("on"+t,e):void 0:!1},P.X=function(e){var t;return"undefined"!=typeof d.hidden?t="visibilitychange":"undefined"!=typeof d.mozHidden?t="mozvisibilitychange":"undefined"!=typeof d.msHidden?t="msvisibilitychange":"undefined"!=typeof d.webkitHidden&&(t="webkitvisibilitychange"),t?d.removeEventListener?d.removeEventListener(t,e):d.detachEvent("on"+t,e):!1},P.D=function(){var e=d.getElementsByTagName("body")[0],t=d.documentElement;return{w:Math.max(e.clientWidth,t.clientWidth,e.scrollWidth,t.scrollWidth,e.offsetWidth,t.offsetWidth,0),h:Math.max(e.clientHeight,t.clientHeight,e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,0)}},P.ED=function(e){return{w:Math.max(e.clientWidth,e.clientWidth,e.scrollWidth,e.scrollWidth,e.offsetWidth,e.offsetWidth,0),h:Math.max(e.clientHeight,e.clientHeight,e.scrollHeight,e.scrollHeight,e.offsetHeight,e.offsetHeight,0)}},P.viewportDims=function(){if("undefined"!=typeof window.innerWidth)return{w:Math.max(window.innerWidth||0),h:Math.max(window.innerHeight||0)};if("undefined"!=typeof d.documentElement&&"CSS1Compat"==d.compatMode)return{w:Math.max(d.documentElement.clientWidth||0),h:Math.max(d.documentElement.clientHeight||0)};var e=d.getElementsByTagName("body")[0];return{w:Math.max(e.clientWidth||0),h:Math.max(e.clientHeight||0)}},P.IF=function(){return window.top.location!=window.location},P.O=function(e){var t=0,n=0;if(e.offsetParent)do t+=e.offsetLeft,n+=e.offsetTop;while(e=e.offsetParent);return{x:t,y:n}},P.first=function(e){return e[0]},P.rest=function(e){return Array.prototype.slice.call(e,1)},P.partial=function(e){var t=P.rest(arguments);return function(){return e.apply(null,t)}},P.GO=function(e){var t=e.getBoundingClientRect(),n=window.pageYOffset||d.documentElement.scrollTop||d.body.scrollTop,i=window.pageXOffset||d.documentElement.scrollLeft||d.body.scrollLeft,o=d.documentElement.clientTop||d.body.clientTop||0,r=d.documentElement.clientLeft||d.body.clientLeft||0,a=t.top+n-o,l=t.left+i-r,s=t.bottom+n-o,h=t.right+i-r;return{top:a,left:l,bottom:s,right:h}},P.randomId=function(){return Math.floor(1000000001*Math.random())};var components=[];components.push(function(){var e=d.body,t=d.documentElement,n=P.viewportDims();return{pm64:Math.max(e.clientWidth,t.clientWidth,e.scrollWidth,t.scrollWidth,e.offsetWidth,t.offsetWidth,0),pm65:Math.max(e.clientHeight,t.clientHeight,e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,0),pm66:"undefined"!=typeof w.devicePixelRatio?w.devicePixelRatio:"",pm89:n.w,pm90:n.h,pm91:P.DF()?"1":"",pm92:d.hasFocus&&d.hasFocus()?"1":"",pm68:P.IF()?"1":""}}),components.push(function(){return{bd39:!!window.callPhantom}}),components.push(function(){for(var e=!1,t=function(t){if(!e){e=!0,t=t||w.event;var n,i,o,r=t.type.substring(0,5);if(IE){{var a=d.body;t.srcElement}n=t.clientX+a.scrollLeft,i=t.clientY+a.scrollTop,o="e14=1"}else"touch"===r?(n=t.touches[0].pageX,i=t.touches[0].pageY,o="e15=1"):(n=t.pageX,i=t.pageY,o="e14=1");var s=m.E();P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(["rt=extra","et=mo","e10="+n,"e11="+i,"e12="+s,o])),l()}},n=["mousemove","touchstart"],i=0,o=n.length;o>i;++i){var r=n[i];if(d.addEventListener)d.addEventListener(r,t,!1);else{var a="on"+r;d[a]=t,d.attachEvent&&d.attachEvent(a,t)}var l=function(){if(d.removeEventListener)d.removeEventListener(r,t,!1);else{var e="on"+r;d[e]=null,d.detachEvent&&d.detachEvent(e,t)}}}return{}}),components.push(function(){function e(e){this.obj=e}function t(e){this.obj=e,this.apiString="Flow Player"}function n(e){this.obj=e,this.apiString="JW Player"}var i=P.randomId();w.attachEvent&&w.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){}}),w._securepaths_flash_loaded_var||(w._securepaths_flash_loaded=!1,w._securepaths_flash_loaded_var=function(){P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(["rt=extra","pm68="+(P.IF()?"1":""),"et=flvd","e54=1"])),w._securepaths_flash_loaded=!0});var o="".length>=1?d.getElementById(""):d;e.prototype.FLASHPARAMS={level1:{names:["flashvars","allowfullscreen","allowscriptaccess","movie"],matchLevel:1},level2:{names:["wmode","swfversion","scale","quality"],matchLevel:2}},e.prototype.FLASHVARS={vpaid:{targets:["vast_2_0_vpaid_failover"]},ova:{targets:["ova.ads","ova.pluginmode","ova.debug","ova.useV2APICalls","ova.allowPlaylistControl","shortenLinearAdDurationPercentage","pauseOnClickThrough"]},brightcove:{targets:["brightcove","Brightcove","BrightCove"]}},e.prototype.check=function(){var e;for(var t in this.FLASHPARAMS)if(this.FLASHPARAMS.hasOwnProperty(t)){e=0;for(var n=0;n<this.FLASHPARAMS[t].names.length;n++)for(var i=0;i<this.obj.children.length;i++)if(this.obj.children[i].name.toLowerCase()==this.FLASHPARAMS[t].names[n]&&(e++,e==this.FLASHPARAMS[t].matchLevel))return!0}return!1},e.prototype.checkFlashvars=function(){for(var e,t=[],n=0;n<this.obj.children.length;n++)if("flashvars"==this.obj.children[n].name.toLowerCase()){e=this.obj.children[n].value;break}for(var i in this.FLASHVARS)if(this.FLASHVARS.hasOwnProperty(i))for(var n=0;n<this.FLASHVARS[i].targets.length;n++)if(-1!=e.indexOf(this.FLASHVARS[i].targets[n])){t.push(i);break}return t},e.prototype.getFlashvarsValue=function(){for(var e=0;e<this.obj.children.length;e++)if("flashvars"==this.obj.children[e].name.toLowerCase())return this.obj.children[e].value;return null},e.prototype.getInfo=function(){var e,t,n;if(this.obj.GetVariable){try{n=this.obj.GetVariable("/:mute")}catch(i){}n&&("string"==typeof n?(n=n.toLowerCase(),t="true"==n||"yes"==n||"1"==n):t="number"==typeof n?n>0:null);try{e=parseInt(this.obj.GetVariable("/:volume"))}catch(i){}return{vol:e,mute:t}}var o=this.getFlashvarsValue();if(o){var r="volume=".length,a="mute=".length,l=o.indexOf("volume="),s=o.indexOf("mute=");return e=-1!=l?parseInt(o.substring(l+r,l+r+2)):-1,t="true"==o.substring(s+a,s+a+"true".length).toLowerCase(),{vol:e,mute:t}}return null};for(var r="none",a=[],l=0,s=o.getElementsByTagName("object"),h=o.getElementsByTagName("embed"),c=[],f=0;f<s.length;f++)c.push(s[f]);for(var f=0;f<h.length;f++)c.push(h[f]);t.prototype=Object.create(e.prototype),t.prototype.check=function(){return"function"==typeof this.obj.sp_getState},t.prototype.getInfo=function(){return{vsn:this.obj.sp_getVersion(),state:this.obj.sp_isPlaying(),vol:this.obj.sp_getVolume(),width:this.obj.clientWidth,height:this.obj.clientHeight,mute:this.obj.sp_getStatus().muted}},a.push(t),n.prototype=Object.create(e.prototype),n.prototype.check=function(){return"function"==typeof this.obj.jwGetState},n.prototype.getInfo=function(){return{state:"PLAYING"===this.obj.jwGetState(),mute:this.obj.jwGetMute(),vol:this.obj.jwGetVolume(),height:this.obj.jwGetHeight(),width:this.obj.jwGetWidth()}},a.push(n);var u="".length>=1?d.getElementById(""):!1;return function(){function t(e){if(setTimeout(s,2e3),P.DF())h(e);else{var t=function(){P.DF()&&(h(e),P.X(t))};P.A(t)}}function n(t){var n=function(){for(var t,n,i=0;i<c.length;i++){n=!1;for(var o=0;o<a.length;o++)if(t=new a[o](c[i]),t.check()){n=!0,l++;break}n||(t=new e(c[i]),t.getInfo().vol&&l++)}};setTimeout(function(){n()},1e3),function i(n,o){for(var l=null,s=null,d=0,h=0;h<c.length;h++)for(var f=0;f<a.length;f++){var u=new a[f](c[h]);u.check()&&(l=c[h],s=a[f],d++)}if(o>10&&d>0)return r=new s(l).apiString,t(1==d?{player:l,playerObj:s}:null);if(o>10&&0==d)for(var h=0;h<c.length;h++){var u=new e(c[h]);if(u.getInfo().vol)return l=c[h],t({player:l,playerObj:e})}setTimeout(function(){i(d,n==d?o+1:0)},100)}(0,0)}function s(){for(var e=o.getElementsByTagName("object"),t=o.getElementsByTagName("embed"),n=[],i=0;i<e.length;i++)n.push(e[i]);for(var i=0;i<t.length;i++)n.push(t[i]);for(var r=0,a=0,l=["rt=extra","et=flvd","pm68="+(P.IF()?"1":"")],i=0;i<n.length;i++)n[i].width>=100&&n[i].height>=100&&(10>r&&(l.push("e6"+r+"="+n[i].width+"x"+n[i].height),r++),a++);l.push("e70="+a),P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(l))}function h(e){function t(e,t,n){var i=["rt=extra","et=flvd","pm68="+(P.IF()?"1":""),"e53="+t,"e55="+e];n&&n.getInfo&&n.getInfo().vol&&"none"!=r&&(i=i.concat(["e73="+(n.getInfo().vol?n.getInfo().vol:-1),"e74="+(n.getInfo().mute?1:0)])),P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(i))}var n=null,o=new P.F;if(o.isSupported([11,2])){var a=d.createElement("div");a.id="sp_vw"+i,a.width=a.height="1px",a.overflow="hidden";var l=d.getElementsByTagName("body")[0];if(a[H]=o.H(f,"sp_vw"+i+"f"),n=a.getElementsByTagName("object")[0],n.style.position="absolute",u){var s=P.O(u);n.style.left=s.x+u.clientWidth/2+"px",n.style.top=s.y+u.clientHeight/2+"px"}else{var h=P.IF()?P.D():P.viewportDims();n.style.left=h.w/2+"px",n.style.top=h.h/2+"px"}n.style.opacity=0,n.style.width="1px",n.style.height="1px",n.style.zIndex=999999,l.appendChild(a);var c=function(){P.DF()?n.up():n.p()};P.A(c);var p=[2,5,10],v=1,m=null;w._securepaths_flash_viewability_var=function(n){if(null==m)if(0==p.length){P.X(c);var o=d.getElementById("sp_vw"+i);o.parentNode.removeChild(o)}else m=p.shift();v==m&&(t(v,n.t,e),m=null),v++}}}var f={securehost:"50.23.66.3",gip:parseInt("1"),Q2:"statadrasp2kukeyec4a",Q3:"i5zx7r7x-b89fbb42",Q4:"371235",Q5:"2594",Q7:i,Q8:1},p=function(){for(var t=0;t<c.length;t++)for(var n=0;n<a.length;n++){var i=new a[n](c[t]);if(i.check())return!0}for(var t=0;t<c.length;t++){var i=new e(c[t]);if(i.getInfo().vol)return!0}return!1};P.IF()&&!p()?t({}):n(function(e){var n=null;e&&(n=new e.playerObj(e.player),n&&n.getInfo&&n.getInfo().vol&&-1!=n.getInfo().vol?P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(["rt=extra","et=flvd","pm68="+(P.IF()?"1":""),"e57=1","e71="+(n.getInfo().vol?n.getInfo().vol:-1),"e72="+(n.getInfo().mute?1:0),"e75="+r,"e76="+l])):l&&P.J("http://fqtag.com/pixel.cgi?s=i5zx7r7x-b89fbb42",P.P(["rt=extra","et=flvd","pm68="+(P.IF()?"1":""),"e57=1","e76="+l])),u=e.player),t(n)})}(),{}}),P.prototype.run=function(){if(4===components.length)this.R(components);else{var e=this,t=function(){4===components.length?e.R(components):setTimeout(t,0)};t()}},w.__securePaths=function(e,t){return iframe=e,iframeUrl=t,new P({"irt":"display","org":"statadrasp2kukeyec4a","s":"i5zx7r7x-b89fbb42","ad":"","b":"","ra":"0","n":"","a":"3102874","p":"2594","dmn":"the-toast.net","rd":"the-toast.net","erf":"http://the-toast.net/","irf":"the-toast.net","cmp":"371235","sl":"1"})}}(document,window,navigator);