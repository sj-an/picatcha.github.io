!function(x,d,s,ids,cs,co,cp){var getn="getElementsByTagName";var yjs=d[getn](s)[0],getId=function(k){var n=k+"=",q="cookie";var ca=d[q].split(";");for(var i=0;i<ca.length;i++){var ce=ca[i].trim();if(ce.indexOf(n)==0)
return ce.substring(n.length,ce.length);}
return"";},ua=function(a){var p=[],e="encodeURIComponent";for(var v in a)
p.push(x[e](a[v][0])+"="+x[e](a[v][1]));return p.join("&");},putScript=function(sct,cm,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src=sct+"?"+ua(cm.q);yjs&&yjs.parentNode.insertBefore(js,yjs);}},find_me=function(){var scripts=d[getn]("script");for(var i=0;i<scripts.length;i++){var script=scripts[i];if(/cdn\.ndg\.io\/\w*-\w*-\d*\.js/.test(script.src)){return script;}}
return false;},parseQuery=function(url){var query=url.replace(/^[^\?]+\??/,"");var Params=new Object();if(!query)return Params;var Pairs=query.split(/[;&]/);for(var i=0;i<Pairs.length;i++){var KeyVal=Pairs[i].split("=");if(!KeyVal||KeyVal.length!=2)continue;var key=unescape(KeyVal[0]);var val=unescape(KeyVal[1]);val=val.replace(/\+/g," ");Params[key]=val;}
return Params;},get_canonical=function(){var ec=d.querySelector("link[rel='canonical']"),c="",te=[];if(ec)c=ec.getAttribute("href");if(c){te.push(["is_canonical",1]);te.push(["canonical_url",c]);}
return te;},getOP=function(){var script=find_me();if(script===false)return[];var q=parseQuery(script.src);var te=[];if(typeof q.url!="undefined")te.push(["override_url",q.url]);if(typeof q.ndg_source!="undefined")te.push(["override_ndg_source",q.ndg_source]);if(typeof q.ndg_label!="undefined")te.push(["override_ndg_label",q.ndg_label]);if(te.length>0)te.push(["override",1]);return te;},getExtra=function(){var ext=getOP();var te=get_canonical();ext=ext.concat(te);return ext;};var c=cs;x["FallsmGlobalObj"]=c;x[c]=x[c]||function(){(c.q=c.q||[]).push(arguments)};c=x[c];c("url",x.location.href);c("_fp",getId(co));c("uid","5797706129");c("ctz","Pacific/Auckland");c("referrer",d.referrer);var ext=getExtra();for(var i=0;i<ext.length;i++){c(ext[i][0],ext[i][1]);}
putScript("//fallsm.ndg.io/asynctracker.js",c,ids+"m");}(window,document,"script","ys-falls-js","ysfm","__nfmp",[]);