!function(e,t){e.FQTag=function(o){var n,r=e.encodeURIComponent,a=["s","r","c"].join(""),i=["i","n","n","e","r","H","T","M","L"].join(""),l=["aux=1"],c=t.location.protocol+"//fqtag.com/pixel.";o.iif=e.top.location!=e.location,o.rf||(o.rf=t.referrer),o.rf.length>1e3&&(o.rf.indexOf("?")>-1?o.rf=o.rf.split("?")[0]:o.rf.indexOf("%3F")&&(o.rf=o.rf.split("%3F")[0])),o.loc||(o.loc=t.location),o.loc.length>1e3&&(o.loc.indexOf("?")>-1?o.loc=o.loc.split("?")[0]:o.loc.indexOf("%3F")&&(o.loc=o.loc.split("%3F")[0])),o.s=o.s||(new Date).getTime().toString(36)+"-"+Math.floor(4294967296*(1+Math.random())).toString(16).substring(1),o.tag=1;for(var d in o)o.hasOwnProperty(d)&&("rt"===d?n=r(o[d]):l.push(r(d)+"="+r(o[d])));n=n||"click",l=l.join("&");var s=function(e,t){var o=!1;e.onload=e.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,e.onload=e.onreadystatechange=null,t&&t())}},f=t.createElement("div");f.style.height="1px",f.style.width="1px";var h=t.createElement("script");h[a]=c+"js?rt=js&irt="+n+"&"+l,s(h);var p="__fq_iframe_"+Math.floor(1000000001*Math.random()),g=c+"cgi?rt="+n+"&"+l;f[i]='<iframe id="'+p+'" src="'+g+'" name="'+p+'" style="border:0;height:1px;margin:0;padding:0;width:1px"></iframe>';var m=function(){if(t.body){f.appendChild(h),t.body.appendChild(f);var o=t.getElementById(p),n=function(){e.__securePaths?(e.__securePaths(o,g),o.onload=o.onreadystatechange=null):setTimeout(n,10)};s(o,n)}else setTimeout(m,0)};m()}}(window,document);!function(){FQTag({"org":"statadrasp2kukeyec4a","p":"2594","a":"3102874","cmp":"371235","rd":"the-toast.net","rt":"display","sl":"1","fmt":"video","fq":"1"});}();