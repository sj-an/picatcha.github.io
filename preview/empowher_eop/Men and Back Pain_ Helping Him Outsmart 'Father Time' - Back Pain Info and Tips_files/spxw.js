!function(a){"use strict";function b(){var f=a.document,g=f.body,h=null,i=null,j=null;null==g&&--e&&setTimeout(b,100),h=f.createElement("div"),i=f.createElement("div"),j=f.createElement("iframe"),h.style.display="none",h.appendChild(i),g.insertBefore(h,g.firstChild),j.frameBorder="0",j.id="SPX_IFRAME_"+(new Date).getTime(),j.allowTransparency="true",i.appendChild(j);try{j.contentWindow.document.open()}catch(a){j.src=d}j.contentWindow.isBookmarklet=document.currentScript&&/bookmarklet=/.test(document.currentScript.src)?"1":"0",j.contentWindow.document.write(c),j.contentWindow.document.close()}var c=["<!DOCTYPE html>","<html>",'<head><meta charset="UTF-8"></head>',"<body>",'<script type="text/javascript" charset="UTF-8">','!function(a,b,c){function d(){d.history=d.history||[],d.history.push(arguments)}function e(){if(d(arguments),console&&console.log)try{console.log(arguments)}catch(a){}}function f(a){throw a="SPX "+a,e(a,arguments),a}function g(a,b){var c,d,e=y.getElementsByTagName(a);for(c=e.length;--c>=0;)if(d=b(e[c]))return d}function h(a){var b=a.getAttribute("data-rocketsrc")||a.src;return a.hasAttribute("data-domain")&&("1"===z?s:r).exec(b)}function i(){(p=g(t,function(a){return h(a)?(q=a.parentNode,a):void 0}))||f("no script")}function j(a,b){return a&&a.getAttribute(b)}function k(a){return j(p,a)}function l(a){return k("data-"+a)}function m(){function b(a,b){return a.exec(c)&&parseFloat(RegExp.$1)<b}var c=a.navigator.userAgent;a.JSON&&"function"==typeof JSON.stringify||f("JSON"),(b(/MSIE (\\d+)/i,9)||b(/Firefox[\\/\\s](\\d+)/i,4))&&f("UA:"+c),/DartIFrame.html/i.test(x.href)&&f("Dart")}function n(b){var c=a.document.createElement(t);c.type="text/javascript",c.charset="UTF-8",c.src=b,a.document.body.appendChild(c)}function o(){function c(){var a=l("override-serverBase")||u;return a||f("no serverbase"),a}function g(a,b){var c="";for(var d in b)b[d]&&(c+=(c?"&":"?")+d+"="+encodeURIComponent(b[d]));return c+="&"+(new Date).valueOf(),a+c}function h(a,b){for(var c=w.exec(a),d=[];c;)d.push(c),c=w.exec(a);if(d.length){b.urlSettings=b.urlSettings||{};var e=b.urlSettings;d.forEach(function(b){var c=b[0],d=b[1],f=b[2];void 0!==e[d]?(e[d]=[e[d]],e[d].push(f)):e[d]=f,"?"===c[0]&&(c=c.substr(1)),a=a.replace(c,"")}),"?"===a[a.length-1]&&(a=a.substr(0,a.length-2)),b.user=b.user||"test"}return a}var i={};b.SPX&&"1"!==z&&f("multi"),a.SPX=b.SPX={epoch:(new Date).getTime(),isReady:!1,oldSPX:b.SPX,_settings:i,trace:d,log:e,throw:f,xs:function(a){if(a)for(var b in a)i[b]=a[b];return i},go:function(a){a&&(e("SPX go"),n(a))},error:function(b){a.SPX.errorReason=b,d("SPX.error",b),e("SPX stop")}},i.serverBase=c();for(var j in{user:1,domain:1,swtags:1})i[j]=l(j);null==i.user&&v.test(x.host)&&(i.user="test"),n(g(i.serverBase+"/s/js/spxboot.js",{d:i.domain,h:h(x.href,i),u:i.user,swtags:i.swtags}))}var p,q,r=/\\/\\w+\\/spxw\\.js/,s=/\\/\\w+\\/spxw\\.js.bookmarklet=/,t="script",u="https://services.swoop.com",v=/\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b/,w=/[?&]spx_([^=]+)=([^&#]+)/gi,x=b.location,y=c.document,z=a.isBookmarklet;d.dump=function(){return JSON.stringify(d.history,null,2)};try{i(),m(),o()}catch(a){e("SPX exception",a)}}(this,this.top,this.parent);',"</script>","</body>","</html>"].join(""),d=["javas","cript:","var d = document.open();",'d.domain="',a.document.domain,'";',"void(0);"].join(""),e=100;b()}(this);