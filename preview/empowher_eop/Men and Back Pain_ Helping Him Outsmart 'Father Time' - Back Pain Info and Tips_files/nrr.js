var mUtil=function(){function e(e){return"[object Array]"===Object.prototype.toString.call(e)}function t(e){return"function"==typeof e}function n(e){return"string"==typeof e&&""!==e}function r(e){return String.prototype.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function i(){var e,t="1000000001";return ke?ke.hvsid||(t="1000000003"):t="1000000002",e=ke&&ke.hvsid?ke.hvsid:t}function o(){var e,t,r="?",i="undefined"!=typeof _mNVsid&&_mNVsid.length>0?_mNVsid:"",o=ke&&ke.hvsid?ke.hvsid:"";if(Rt.providerInfo)for(e=Rt.providerInfo.length,t=0;e>t;t++)r+=ut("prvi[]",Rt.providerInfo[t]);r+=ut("lp","1"),r+=ut("k",Rt.keyword),r+=ut("ssu",Rt.ssu),r+=ut("vstid",i),r+=ut("vstrid",o),r+=ut("cid",Rt.cid),r+=ut("lid",Rt.lid),r+=ut("bid",Rt.bid),r+=ut("ihost",Rt.ihost),r+=ut("crid",Rt.crid),r+=ut("fid",Rt.fid),r+=ut("fpid",Rt.fpid),r+=ut("dml",Rt.dml),r+=ut("tml",Rt.tml),r+=ut("consl",Rt.conslreq),r+=ut("cc",Rt.cc),r+=ut("pdn",Rt.pdn),r+=ut("isb",Rt.isb),r+=ut("cmbpi",Rt.cmbpi),r+=ut("ssbpi",Rt.ssbpi),r+=ut("cmd",Rt.cmd),r+=ut("sl",Rt.sl),r+=ut("mc",Rt.mc),r+=ut("ssfl",Rt.ssfl),r+=ut("abf",Rt.abf),r+=ut("ads",Rt.skt),r+=ut("https",Rt.https),r+=ut("prt",Rt.prt),r+=ut("hle",Rt.hle),r+=ut("fve",Rt.fve),r+=ut("ct",Rt.ct),r+=ut("fdd",Rt.fdd),r+=ut("vi",Se),r+=ut("pid",Rt.pid),r+=ut("chnm",Rt.chnm),r+=ut("gas",Rt.gas),r+=ut("sr",Rt.sr),r+=ut("raex",Rt.raex),r+=ut("mkt",Rt.mkt),r+=ut("mxtype",Rt.mxType),r+=ut("mxsize",Rt.mxSize),r+=ut("ygimgorder",Rt.ygimgorder),r+=ut("ygdm",Rt.ygdm),r+=ut("paex",Rt.paex),r+=ut("eimg",Rt.eimg),r+=ut("progrpid",Rt.progrpid),r+=ut("pt",Rt.pt);var a=S();n(a)&&(r+=ut("xid",a));var d=et("val");return r+=ut("abp",d),1==d&&(r+=N()),r}function a(){for(var e=document.getElementsByTagName("a"),t=e.length,n=0,r=0;t>n;){var i=e[n++];i.id&&-1!=i.id.indexOf("dk")&&r++}return r}function d(){var e,t=window.locHash||window.location.hash||"",n={requrl:"1"},r="";ke=s("?"+t.replace(/#/g,"&"));for(e in ke)void 0===n[e]?r+=["&",e,"=",ke[e]].join(""):(_e[e]=ke[e],delete ke[e]);return r}function s(e){var t,n,r,i,o={};if(t=e.indexOf("?"),0>t)return o;for(n=e.substring(t+1).split("&"),r=n.length;r--;)i=n[r].split("="),o[i[0]]=i[1];return o}function c(e,t){n(t)&&!ie(e,t)&&(e.className+=" "+t+" ")}function m(e){return Rt.ra_dp_tracking&&e.misc&&e.misc.ra_id}function u(e,t,n){(De||Oe)&&(!t||"RA"!==t.prv&&"FK"!==t.prv?c(e,"mnetad"):(m(n)&&tt.addEvent(e,"click",function(e,t){return function(){f(e,t)}}(n.misc.ra_id,i())),c(e,"mnetra"),0==Rt.trg?e.setAttribute("target","_top"):1==Rt.trg&&e.setAttribute("target","_blank"),l(e,n)))}function f(e,t){var n="ra_depth_tracking",r="||aid="+e+"||hvsid="+t,i=T();if(i){if(/chrome/.test(navigator.userAgent.toLowerCase()))return void i._mN._util.mnsc(n,r,1,"/","","",15);i._mN._util.mnsc(n,r)}}function l(e,t){t.misc&&"2"==t.misc.ra_ut?c(e,"iconslideshow"):t.misc&&"3"==t.misc.ra_ut&&c(e,"iconvideo")}function p(e){var t;if("1"===Rt.conslreq){try{t="object"==typeof window.parent.winScope?window.parent.winScope._mN:window.parent._mN}catch(n){}t&&t.util&&t.util.passLoadTimeToConsole&&e.RA&&e.RA.consoledata&&(t.util.passLoadTimeToConsole(Rt.crid,"Related Articles Load Time",e.RA.consoledata.ra_time+" ms"),t.util.passUrlToConsole(Rt.crid,"Related Articles Api Url",e.RA.consoledata.ra_url))}}function v(e){var t,n,r,i,o,a,d,s,c="|@|";e&&e.prv&&(t=e.prv,n=P(e.prv)||Rt[t].ss||"",r=Rt[t].tt||"",i=Rt[t].id||"",a=Rt[t].pref||"",d=e.count||0,""!=n&&""!=r&&0!=d&&(Rt.ismo=1),Se||(Se=e.vwid),o=t+c+i+c+n+c+r+c+d+c+a,Rt.prvdata||(Rt.prvdata=[]),Rt.prvdata.push(o),("SM"==t||"SS"==t)&&(Rt.adcls||(Rt.adcls=[]),s={},s.prv=t,s.nCall=-1,s.nRet=-1,e.nCall&&(s.nCall=e.nCall),e.nRet&&(s.nRet=e.nRet),Rt.adcls.push(s)))}function h(e,t){return e&&e[t]&&e[t].data}function g(e){var t;e.misc&&"GM"==e.misc.prv&&e.misc.clnm&&(t=document.getElementById("wrapper"),t&&(t.className=e.misc.clnm))}function y(e){var t,n,r,i;for(Rt.prvorder&&Rt.prvorder.length>0||(Rt.prvorder=["SS","CM"]),t=Rt.prvorder.length,n=Rt.prvorder.join("|"),-1!==n.indexOf("RA")&&(De=!0,p(e)),i=0;t>i;i++)h(e,Rt.prvorder[i])&&(r=e[Rt.prvorder[i]],g(r),r.data.length>0?k(r,"ad"):v(r.misc));Be=we,pe>we&&"1"!==Rt.fdd?k(Rt.fads,"ad"):pe>we&&(je=!1,clearTimeout(Ie),$t())}function b(e,n,r){if(t(document.getElementsByClassName))return e.getElementsByClassName(n);r=r||"*";var i,o,a=e||document,d="*"===r&&a.all?a.all:a.getElementsByTagName(r),s=[],c=d.length;for(o=0;c>o;o++)i=d[o],ie(i,n)&&s.push(i);return s}function _(e,t,r,i){if(e.misc&&e.misc.display)for(var o,a,d,s,m,f,l,p,w,v,h=e.misc.display,g=document,y=0,_=h.length;_>y;y++)if(h[y].key&&(o=h[y].key+""+t,a=b(g,o),v=h[y].value,v=v.replace("##__HostForRefactoredNodeCall__##",window.hostRefactoredAds),a))for(var k=0,N=a.length;N>k;k++){if(d=a[k],s=Xt(d,"a"),f=d.getAttribute("data-type"),l=d.getAttribute("data-parentclass"),w=d.getAttribute("data-class"),m=d.parentNode,n(v)){if(p=l,"image"==f){var P=document.createElement("img");P.setAttribute("src",v),c(P,w),d.appendChild(P)}else"parentbackground-image"==f?(m.style.backgroundImage="url('"+v+"')",m.style.backgroundRepeat="no-repeat"):"append-parentclass"==f?p=l+v:"boolean"==f||(d.innerHTML=v);c(m,p),s&&(s.removeAttribute("onclick"),s.removeAttribute("onmouseout"),s.removeAttribute("onmouseover"),s.setAttribute("href",r),u(s,i,e))}Gt(m,d)}}function k(t,r){if(null!==Ie&&(clearTimeout(Ie),Ie=null),!Pe){if(je=!1,Ae=(new Date).getTime()-Ce,/webkit/.test(navigator.userAgent.toLowerCase()))try{window.history&&window.history.replaceState?window.history.replaceState({},"mnet",window.location.href+"#fref"):window.location.replace(window.location.href+"#fref")}catch(i){}for(var o,a,d,s,c,m,f,p,w,h,g,y,b,k,N,P,I,C,A,R,E,x=0,L="",B=!0,U=t.misc,T=t.data,H={feedcount:T.length};T[x]&&(o=we+1,g=r+"_title_"+o,y=r+"_desc_"+o,b=r+"_url_"+o,k="ad_image_"+o,N="site_link_"+o,a=document.getElementById(g),d=document.getElementById(y),s=document.getElementById("ad_description_"+o),c=document.getElementById(b),m=document.getElementById(N),f=document.getElementById(k),E=a||d||c||m||f,w=null,h=null,p=null,I=null,E);){if(a&&(P=a.parentNode,p=Xt(a,"a"),p&&(H.pageindex=o,L=ot(T[x],o,U),p.removeAttribute("onclick"),p.removeAttribute("onmouseout"),p.removeAttribute("onmouseover"),p.setAttribute("href",L),u(p,U,T[x])),a.innerHTML=T[x].title,Gt(P,a)),d?(I=d.parentNode,d.innerHTML=T[x].description,Gt(I,d)):s&&(I=s.parentNode,s.innerHTML=T[x].description,Gt(I,s)),I&&"a"==I.tagName.toLowerCase()?w=I:I&&B&&(w=Xt(I,"a")),w?(w.removeAttribute("onclick"),w.removeAttribute("onmouseout"),w.removeAttribute("onmouseover"),w.setAttribute("href",L),u(w,U,T[x])):B=!1,c&&(C=c.parentNode,h=Xt(c,"a"),h&&(h.removeAttribute("onclick"),h.removeAttribute("onmouseout"),h.removeAttribute("onmouseover"),h.setAttribute("href",L),u(h,U,T[x])),c.innerHTML=T[x].siteHost,Gt(C,c),1===Rt.fve&&dn(C,T[x].fvurl),T[x].clickBeacon&&tt.addEvent(h,"click",function(e){return function(){G(e)}}(T[x].clickBeacon))),f&&f.getAttribute("src")){if(T[x].imagePath){var M;M=e(T[x].imagePath)&&T[x].imagePath[0]?T[x].imagePath[0]:T[x].imagePath,n(M)&&(M=M.replace("##__HostForRefactoredNodeCall__##",window.hostRefactoredAds),f.setAttribute("src",M),("EB"==U.prv||"FK"===U.prv)&&tt.addEvent(f,"error",ae)),l(f,T[x])}else"sratimg"!==f.getAttribute("class")&&(f.style.display="none");R=Xt(f,"a"),R&&(R.removeAttribute("onclick"),R.removeAttribute("onmouseout"),R.removeAttribute("onmouseover"),R.setAttribute("href",L))}m&&(T[x].siteLink?(A=m.parentNode,m.innerHTML=fn(x,T[x].siteLink,L),Gt(A,m)):Ee.push(x+1+":0")),_(T[x],o,L,U),qt(T[x].title,T[x].description,T[x].siteHost,T[x].clickUrl),we++,x++}"GM"==U.prv&&U.imprBeacons&&j(function(e){return function(){setTimeout(function(){G(e)},1e3)}}(U.imprBeacons)),U.beacon&&We.push(U.beacon),U&&(U.count=x,v(U)),V(T.length),$t()}}function N(){var e="";try{metaParams&&metaParams.abss&&(e="&"+metaParams.abss)}catch(t){}return e}function P(e){var t=e||!1;try{if(t){var n="s"+t.toLowerCase(),r=metaParams.abss,i=s("?"+r),o=et("val");return 1==o&&i&&i[n]||!1}if(window.stu&&""!==window.stu)return window.stu}catch(a){}return!1}function I(){if(!n(window._mNoRef))return metaParams&&metaParams.misc&&metaParams.misc.referer?decodeURIComponent(metaParams.misc.referer):null;var e=window._mNoRef,t=metaParams&&metaParams.misc?metaParams.misc.domain:"",r=new RegExp(t+":([^|]+)").exec(decodeURIComponent(e));return null!==r?r[1]:null}function C(){var e=I();return n(e)&&(!Rt||"1"!==Rt.isyg&&"1"!==Rt.iseb)?"&oref="+encodeURIComponent(e):""}function A(e){Ke||1===e&&"function"==typeof window.appendCustomHeader&&(window.appendCustomHeader(),Ke=!0)}function R(e){if(e&&e.href&&n(e.href)){var t,r=e.href;t=r.replace(/&abpl=[^&]*/,""),e.href=[t,"&abpl=",et("val",!0)].join("")}}function E(){var e=window._mNL3&&window._mNL3.mnetOptout?window._mNL3.mnetOptout:"";return 1==metaParams.misc.isSerpRedirectionForCookieRequired&&"undefined"==typeof _mNVsid&&""==e}function x(){if(window._mNL3&&1==window._mNL3._pushNoti){var e={};layer1WinObj=T(),layer1WinObj&&layer1WinObj._mNDetails&&layer1WinObj._mNDetails._mNPushNtf&&"function"==typeof layer1WinObj._mNDetails._mNPushNtf.initPushNotification&&("object"==typeof window._mNL3._pushNotiParams&&(e=window._mNL3._pushNotiParams),layer1WinObj._mNDetails._mNPushNtf.initPushNotification(e))}}function L(e,t,n,r,i){if(E()){var o=metaParams.misc.cookieSetRedirectionHostName,a=mt(t,n,r,i),d=encodeURIComponent(e+a+le);return[o,"d=",d].join("")}return[e,mt(t,n,r,i),le,"&"].join("")}function B(e){if(E()){var t=metaParams.misc.cookieSetRedirectionHostName,n=[e,Ne,C(),"&",le].join(""),r=encodeURIComponent(n);return[t,"d=",r].join("")}return[e,U(!0),"&",Ne,C(),"&",le].join("")}function U(e){var t="";return"undefined"!=typeof _mNVsid&&n(_mNVsid)&&(t=_mNVsid,e&&(t="&vsid="+t)),t}function T(){var e;try{window.parent&&"object"==typeof window.parent._mN?e=window.parent:window.parent&&window.parent.parent&&"object"==typeof window.parent.parent._mN&&(e=window.parent.parent)}catch(t){}return e}function H(){try{var e=T();if(!e)return;1!==me&&e._mN.util.addToEventQueue("adBlockPlusDetected","gbl",function(){et()}),e._mN&&e._mN._custom&&"function"==typeof e._mN._custom.postRendering&&e._mN._custom.postRendering(window)}catch(t){}}function j(e){try{var t=T();if(!t)return;var n;n=t==window.parent?window.frameElement&&window.frameElement.id||null:window.parent.frameElement&&window.parent.frameElement.id||null,n&&t._mNDetails&&t._mNDetails._mNVI&&"function"==typeof t._mNDetails._mNVI.triggerCB&&t._mNDetails._mNVI.triggerCB(n,e)}catch(r){}}function M(e){var t=e.split("?");if(t.length>1){var n=t[0]+"?";n+="&c="+kt.c;for(var r=1;r<t.length;r++)n+=t[r];return n}return e}function V(e){try{"function"==typeof window.formatview&&window.formatview(e)}catch(t){}}function D(){try{"function"==typeof window.formatViewAfterLoad&&window.formatViewAfterLoad()}catch(e){}}function O(){if(!Ye){"number"==typeof ue&&(clearTimeout(ue),ue=null),Ye=!0,je=!0;var e=window.hostRefactoredAds+o();Ce=(new Date).getTime(),Qe(e,"")}}function S(){if("1"===Rt.isyg){if(window._mNL3&&n(window._mNL3._ygxid))return window._mNL3._ygxid;var e=T();if(e&&e._mNDetails&&e._mNDetails._ygxid&&""!=e._mNDetails._ygxid&&"optout"!=e._mNDetails._ygxid)return e._mNDetails._ygxid}return""}function q(){var e=S();return n(e)?!0:!1}function K(){return"1"===Rt.isyg?q()?!1:!0:!1}function F(){setTimeout(O,1e3);var e=T();e&&e._mN&&e._mN.util&&e._mN.util.addToEventQueue("ygloaded","gbl",O)}function W(e,t){var r=hostNm+"/ygtrack.php";n(e)&&(r+="#"+encodeURIComponent(e)),fe=z(r,t)}function z(e,t){var n;return n=(new $).set("marginWidth",0).set("marginHeight",0).set("scrolling","no").set("frameBorder",0).set("height",0).set("width",0).set("src",e).overrideStyle("display:none !important;").done(),"function"==typeof t&&(window.logYGIframeBeacon=t,n.onload=window.logYGIframeBeacon),document.body.appendChild(n),n}function $(){this.frame=document.createElement("iframe")}function Y(e){if(!fe)return void W("",function(){Y(e)});if(fe)for(var t=0,n=e.length;n>t;t++)fe.contentWindow.postMessage("url#|#"+e[t],"*")}function G(e){"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),"postMessage"in window?Y(e):W(e.join("#|#"))}function X(){function e(e){var t=e.frameElement;t&&(t.style.display="none")}try{e(window),e(window.parent)}catch(t){}}function Q(e){function t(e){var e=e||"NULL",t=hostLog+"/log?logid=kfk&evtid=adpl&tp="+e+"&fp="+metaParams.meta.fp+"&cme="+metaParams.meta.cme,n=new Image;n.src=t+"&r="+(new Date).getTime()}try{var n=metaParams&&metaParams.misc&&metaParams.misc.hab?metaParams.misc.hab:!1;1==n&&0==Xe&&(t(e),X(),Xe=!0)}catch(r){}}function J(e,t){function n(e,t){var e=e||"NULL",n=[];for(var r in t)if(t.hasOwnProperty(r)){var i=encodeURIComponent(r),o=encodeURIComponent(t[r]);o&&n.push("k_"+i+"="+o)}logUrl=hostLog+"/log?logid=kfk&evtid=kier&tp="+e+"&fp="+metaParams.meta.fp+"&cme="+metaParams.meta.cme+"&"+n.join("&");var a=new Image;a.src=logUrl+"&r="+(new Date).getTime()}try{var r=metaParams&&metaParams.misc&&metaParams.misc.hoke?metaParams.misc.hoke:!1;1==r&&(n(e,t),X())}catch(i){}}function Z(e,t,n){var r,i=Rt.transferUrlHost+"?",o=Rt.keyword,a=e.misc;i+=ut("prodad","1"),i+=ut("r",e.clickUrl),i+=ut("o",Rt.EB.adp),i+=ut("ra_lid",Rt.lid),"undefined"!=typeof _mNVsid&&(i+=ut("vsid",_mNVsid));for(r in a)i+=ut(r,a[r]);return i+=ut("ra_pd",n.apd),i+=ut("vi",Se),Rt.rapd=n.apd,a&&($e+="&rap[]="+t,$e+="&raid[]="+a.ra_id,$e+="&rab[]="+encodeURIComponent(a.ra_b||""),$e+="&rab2[]="+encodeURIComponent(a.ra_b2||""),$e+="&ra_td[]="+encodeURIComponent(a.ra_td||""),$e+="&pr_ctid[]="+(a.ra_catid||""),$e+="&pr_nbid[]="+(a.nbd||"")),i=[i,"&q=",o,ft(),"&cme=",kt.cme,"&fdkt=",be,"&page_index=",t,ut("tl",e.title),ut("burl",e.siteHost),C(),Ne].join("")}function ee(){var e="";e+=ne(window,"rend"),e+=ne(window.top,"win"),window&&window.screen&&window.screen.height&&window.screen.width&&(e+=";scr_h:"+window.screen.height+";scr_w:"+window.screen.width);var t=te(window,{top:0,left:0});return t&&t.top&&t.left&&(e+=";x_pos:"+Math.round(t.left)+";y_pos:"+Math.round(t.top)),Ge&&(e+=";kwd_scnt:"+Ge),e}function te(e,t){try{if(e!=top&&e.frameElement&&e.frameElement.getBoundingClientRect()){var n=e.frameElement.getBoundingClientRect();t.left+=n.left,t.top+=n.top,t=te(e.parent,t)}}catch(r){return t}return t}function ne(e,t){try{var n=e.document,r=e.innerWidth||n.documentElement&&n.documentElement.clientWidth||n.body&&n.body.clientWidth,i=e.innerHeight||n.documentElement&&n.documentElement.clientHeight||n.body&&n.body.clientHeight;if(r&&i)return";"+t+"_w:"+r+";"+t+"_h:"+i}catch(o){return""}return""}function re(e){if(ke&&ke.kurl&&n(ke.kurl)){var t=ke.kurl;e&&e.href&&n(e.href)&&(e.href=decodeURIComponent(t)+encodeURIComponent(e.href))}}function ie(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)}function oe(e,t){for(var n=e.parentNode;n;){if(ie(n,t))return n;n=n.parentNode}return null}function ae(e){e=e||window.event;var t="prd-wrapper",n="prd-wrapper-hide",r=e.target||e.srcElement,i=oe(r,t);i&&c(i,n)}var de,se,ce,me,ue,fe,le="",pe=0,we=0,ve="",he=!0,ge=function(e,t){return e.replace(new RegExp(t[0],"g"),t[1])},ye=(new Date).getTime(),be=null,_e={},ke={},Ne=d(),Pe=!1,Ie=null,Ce=null,Ae=null,Re=null,Ee=[],xe="no",Le=!1,Be=0,Ue=null,Te=!1,He=!1,je=!1,Me="",Ve=(new Date).getTime(),De=!1,Oe=!1,Se=window._mNL3&&window._mNL3.vi?window._mNL3.vi:"",qe=window._mNL3&&window._mNL3.geoloc?window._mNL3.geoloc:"",Ke=!1,Fe=!1,We=[],ze="",$e="",Ye=!1,Ge=0,Xe=!1,Qe=function(e,t){var n=document.createElement("script"),r=document.getElementsByTagName("script")[0];n.type="text/javascript",e&&""!=e&&(n.src=e),t&&""!=t&&(n.text=t),r.parentNode.insertBefore(n,r)},Je="% %22 %2c %3a %20",Ze=function(e){if("undefined"!=typeof me&&1===me)return me;var t,n=!1;try{t="object"==typeof window.parent.winScope?window.parent.winScope._mNDetails:window.parent._mNDetails}catch(r){}var i=t&&t._mNABP||!1,o=0;return i&&metaParams.abpl&&(0==i.checksRemain?(n=!i.error1&&i.error2?1:2,o=3):i.adBlockStatus?(n=i.adBlockStatus,o=1):(n=2,o=0),e||(Ne=Ne+"&tdAdd[]="+encodeURIComponent("|@|abp:"+o+":"+n))),me=n,n},et=function(e,t){var n=Ze(t);return metaParams.abpl&&n?(A(n),1==n&&Q(n),1==n&&metaParams.abpl&&(n=metaParams.abpl),"val"===e?n:"&abpl="+n):""},tt={addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n),e=null},removeEvent:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent&&e.detachEvent("on"+t,n),e=null}},nt=function(e){if(e&&e.href&&n(e.href)){var t,r=e.href;t=r.replace(/&kct=[^&]*/,""),e.href=[t,"&kct=",(new Date).getTime()-Ve].join("")}},rt=function(e,t,n,r,i,o,a,d){var s=Pt.adp0||"",c="";1==n?s=Pt.adp:2==n?s=Pt.adp2:3==n&&(s=Pt.adp3),c+=window.mrtu&&""!=window.mrtu?"&mrtak="+encodeURIComponent(window.mrtu):"",("8CU2T3HV4"==kt.cid||de)&&(c=Ne);var m=["","/trf?q=",e,c];return"undefined"!=typeof o&&"undefined"!=typeof a&&"undefined"!=typeof d?m.push("&r1=",encodeURIComponent(o),"&r2=",encodeURIComponent(a),"&r3=",encodeURIComponent(d)):m.push("&r=",encodeURIComponent(t)),m.push(et()),m.push(ft(),"&o=",s,"&cme=",kt.cme,"&fdkt=",be,"&page_index=",i,"&burl=",r,Ne),m.join("")},it=function(e,t,n){var r={prv:"IS"},i={clickUrl:e,siteHost:n};return ot(i,t,r)},ot=function(e,t,n){var r="";return r=n&&"RA"==n.prv?at(e,t,n):n&&"EB"==n.prv?Z(e,t,n):dt(e.clickUrl,t,e.siteHost,n),r.length>1900&&(Fe=!0,kt.c&&(r=M(r))),r},at=function(e,t,n){var r,i=Rt.transferUrlHost+"?",o=Rt.keyword,a=e.misc;i+=ut("ra","1"),i+=ut("r",e.clickUrl),i+=ut("o",Rt.RA.adp),i+=ut("ra_lid",Rt.lid),i+=ut("cedn",e.cedn),"undefined"!=typeof _mNVsid&&(i+=ut("vsid",_mNVsid));for(r in a)i+=ut(r,a[r]);return i+=ut("ra_pd",n.apd),i+=ut("vi",Se),Rt.rapd=n.apd,a&&(ze+="&rap[]="+t+"&raid[]="+a.ra_id+"&rab[]="+encodeURIComponent(a.ra_b)+"&rab2[]="+encodeURIComponent(a.ra_b2)+"&ra_td[]="+encodeURIComponent(a.ra_td)),i=[i,"&q=",o,ft(),"&cme=",kt.cme,"&fdkt=",be,"&page_index=",t,ut("tl",e.title),ut("burl",e.siteHost),C(),Ne].join("")},dt=function(e,t,n,r){var i,o=Rt.transferUrlHost+"?",a=Rt&&"1"===Rt.isyg?"":Rt.keyword;return o+=ut("r",e),r&&r.prv&&(i=r.prv,o+=ut("o",Rt[i].adp)),"undefined"!=typeof _mNVsid&&(o+=ut("vsid",_mNVsid)),o+=ut("lpt",window.mnCts||""),o+=ut("vi",Se),o+=et(),o+=ut("ugd",kt.ugd),o=metaParams&&metaParams.misc&&metaParams.misc.isLocHashBeforeCME?[o,"&q=",a,ft(),Ne,"&cme=",kt.cme,"&fdkt=",be,"&page_index=",t,ut("burl",n),C()].join(""):[o,"&q=",a,ft(),"&cme=",kt.cme,"&fdkt=",be,"&page_index=",t,ut("burl",n),C(),Ne].join("")},st=function(e){var t=vt.split(" "),n=Je.split(" ");for(var r in t)e=ge(e,[t[r],n[r]]);return e},ct=function(e,t){var r="",i=n(e.encMacro)?ut("em",e.encMacro):"";return n(e.et)?(r=["/display.cfm?",ut("cq",e.et),i].join(""),n(metaParams.misc.spkwd)&&"1"===metaParams.misc.spkwd&&(r+=ut("pq",t)),r):["/",encodeURIComponent(encodeURIComponent(t.replace(/ /g,"_"))),".cfm?"].join("")},mt=function(e,t,n,r){var i=ct(n,r),o="";return"undefined"!=typeof _mNVsid&&(o+="&vsid="+_mNVsid),[i,o,"&vi=",Se,Ne,"&kp=",e,"&kbc=",n.b,ft(),"&kt=",n.ty,"&ki=",n.i,"&ktd=",n.td,"&kbc2=",n.b2,"&fdkt=",be,C()].join("")},ut=function(e,t){return n(t)||"number"==typeof t?"&"+encodeURIComponent(e)+"="+encodeURIComponent(t):""},ft=function(){if(n(metaParams.misc.bdrId)){var e=ke.sbdrId?"&subBdr="+ke.sbdrId:"";return"&bdrid="+metaParams.misc.bdrId+e}var t=Yt("winProv")||"",r=Yt("subBdr")||"",i=metaParams.misc.ybncaBidderId||"";if(""!==t&&i&&-1!==i.indexOf("|"+t+"|")){var e=r?"&subBdr="+r:"";return"&bdrid="+t+e}return ke.winProv?(r=ke.subBdr?"&subBdr="+ke.subBdr:"","&bdrid="+ke.winProv+r):""},lt=function(e,t,n,r){var i="";return"1"===Nt.rd?pt(e,t,n,r):(i=Nt.serpUrl,i+="?srp="+Nt.srp,i+="#matm="+Math.round((new Date).getTime()/1e3),"undefined"!=typeof _mNVsid&&(i+="&vsid="+_mNVsid),i+=ut("kwd",r),i=[i,"klp="+Nt.klp,"cme="+kt.cme,"adp="+Nt.adp,"rpt="+Nt.refpgtype,"cifr="+Nt.cifr].join("&"),i+=ut("kp",e),i+=ut("kbc",n.b),i+=ut("kt",n.ty),i+=ut("ki",n.i),i+=ut("ktd",n.td),i+=ut("kbc2",n.b2),i+=ut("fk",Nt.fk),i+=ut("ks",Nt.ks),i+=ut("fdkt",be),i+=ut("ktgdt",Nt.ktgdt),i+=ft(),i+=C(),i+=Ne)},pt=function(e,t,n,r){var i=Nt.serpUrl;return i+="?srp="+Nt.srp,"undefined"!=typeof _mNVsid&&(i+="&vsid="+_mNVsid),i=[i,"klp="+Nt.klp,"cme="+Nt.cme].join("&"),i+=ut("rd",1),i+=ut("clkki",n.i),i+=ut("clkkt",n.ty),i+=ut("clkkp",e),i+=ut("clkkbc",n.b),i+=ut("clkkbc2",n.b2),i+=ut("clkktd",n.td),i+=ut("q",r),i+=ut("rpt",Nt.refpgtype),i+=ut("fdkt",be),i+=ut("cifr",Nt.cifr),i+="&ts="+Math.round((new Date).getTime()/1e3),i+=Ne},wt=function(e){var t,n,r;return t=e.indexOf("kp="),0>t?"":(r=e.substring(t+3),n=r.indexOf("&"),0>n?r:r.substring(0,n))},vt="t w x y z",ht=function(e,t){var n;if(e=e?e.toLowerCase():"",-1!=e.indexOf("dk")){if(n=parseInt(e.replace("dk","")),n||0==n)return{t:1,p:n}}else if(-1!=e.indexOf("mk")){if(n=parseInt(e.replace("mk","")),n||0==n)return{t:2,p:n}}else-1!=t.indexOf("ad_title_")&&pe++;return void 0},gt=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},yt=function(){return new Function("return"+unescape(st(w)))()},bt=function(e){var t,r;try{t=e.getAttribute("resizeheight"),r=e.getAttribute("resizewidth")}catch(i){}n(t)&&(e.height=t),n(r)&&(e.width=r)},_t=function(){var e=0,t=[{m:"[[visitor-location]]",s:window.repLoc||"",e:window.el||""},{m:"[[visitor-city]]",s:window.repCty||"",e:window.ec||""},{m:"[[visitor-state]]",s:window.repState||"",e:window.es||""}],i=function(e,t){for(var n,r=0,i=e.length;i>r;)n=r+i>>1,e[n].p<t?r=n+1:i=n;return r},o=function(){for(var e=document.getElementsByTagName("a"),t=e.length,r=0,o=[],a=0;t>r;){var d=e[r++],s=ht(d.id,d.innerHTML);s&&1==s.t?!a||s.p>o[a-1].p?o[a++]={t:d,p:s.p}:(o.splice(i(o,s.p),0,{t:d,p:s.p}),a++):s&&2==s.t&&(d.href="1"===Nt.isSerp?lt(s.p,d,{},d.title):B(d.href)),!s||1!=s.t&&2!=s.t||(tt.addEvent(d,"mouseover",function(e){return function(){nt(e)}}(d)),tt.addEvent(d,"click",function(e){return function(){nt(e)}}(d)),tt.addEvent(d,"click",function(e){return function(){R(e)}}(d)),metaParams&&metaParams.misc&&metaParams.misc.iskwdClkTrck&&ke&&ke.kurl&&n(ke.kurl)&&tt.addEvent(d,"click",function(e){return function(){re(e)}}(d)))}return o}(),a=function(e,t){try{return{width:e.getAttribute("width")||e.width||parseInt(t.match(/width=(["'0-9]+)/)[1].replace(/^[\s'"]+/,"").replace(/[\s'"]+$/,""),10),height:e.getAttribute("height")||e.height||parseInt(t.match(/height=(["'0-9]+)/)[1].replace(/^[\s'"]+/,"").replace(/[\s'"]+$/,""),10)}}catch(n){return{width:e.width,height:e.height}}},d=function(e){try{return{width:e.getAttribute("data-width"),height:e.getAttribute("data-height")}}catch(t){return{width:e["data-width"],height:e["data-height"]}}},s=function(e,t){112==t.ty&&J(e+"pc",t)},c=function(e,t,n){if(!e.ipath)return-1==t.src.indexOf("404_1X1")&&(n.style.visibility="visible"),J("nl",e),void bt(t);var r=new Image,i=a(t,n.innerHTML),o=i.width+"x"+i.height;src=e.ipath.replace("[[kbb-img-size]]",o),r.onload=function(t,n,r){return function(){var i=this;return 1==i.height&&1==i.width?(-1==n.src.indexOf("404_1X1")&&(t.style.visibility="visible"),void J("sl",e)):(bt(n),n.src=r,void(t.style.visibility="visible"))}}(n,t,src),r.src=src,t=null,e=null},m=function(e,t){e.style.backgroundImage="url('"+t+"')",e.style.backgroundRepeat="no-repeat"},u=function(e,t){if(!e.ipath){var n=t.getAttribute("data-src");return-1===n.indexOf("404_1X1")&&m(t,n),void J("bgnl",e)}var r=new Image,i=d(t),o=i.width+"x"+i.height;src=e.ipath.replace("[[kbb-img-size]]",o),r.onload=function(e,t,n){return function(){var r=this;if(1==r.height&&1==r.width){var i=t.getAttribute("data-src");return-1===i.indexOf("404_1X1")&&m(t,i),void J("bgsl",e)}m(t,n)}}(e,t,src),r.src=src,e=null},f=function(e,t,i,o){s("kw",o);var a=document.getElementById("kbb_href_"+e),d=document.getElementById("kbb_img_"+e),m=document.getElementById("kbb_bgimg_"+e);if(n(r(t.innerHTML))||(t.innerHTML=i),t.offsetHeight&&Ge++,t.href="1"===Nt.isSerp?lt(e,t,o,i):L(hostName,e,t,o,i),t.href+=et(),a&&d&&(a.href=t.href,c(o,d,a)),m){var f=m.nodeName||"";"A"==f.toUpperCase()&&(m.href=t.href),u(o,m)}he&&(ve+=["&kwd[]=",encodeURIComponent(i),"&kwt[]=",o.ty,"&kbc[]=",encodeURIComponent(o.b),"&kwp[]=",wt(t.href),"&kid[]=",o.i,"&kbc2[]=",encodeURIComponent(o.b2),"&ktd[]=",o.td].join(""))},l=function(e){if(-1===e.indexOf("[["))return{text:e};for(var n=0,r=t.length;r>n;n++)if(-1!=e.indexOf(t[n].m))return""!==t[n].s?{text:e.replace(t[n].m,t[n].s),encryptedMacro:t[n].e}:-1;return-1!=e.indexOf("[[")?-1:void 0},p=function(){var t=o.length,n=0;return{getP:function(){return o[n]||!1},moveP:function(){n++},hasP:function(){return t-n==0?!1:!0},rsetP:function(){n=0,e=0}}}(),w=function(t){var r,i=l(t.t);return-1===i?0:(r=p.getP(),++e!=r.p?1:(void 0==be&&(be=t.ty),n(i.encryptedMacro)&&(t.encMacro=i.encryptedMacro),f(r.p,r.t,i.text,t),p.moveP(),1))};return{eP:function(){return p.hasP()},rsetP:function(){p.rsetP()},fKwd:function(e,t){for(var n,r,i=0;t>i;){if(!e.length||!p.hasP())return 0;n=gt(0,e.length-1),r=i+1,metaParams.misc.exKwds&&metaParams.misc.exKwds["kwd"+r]?(i+=w(metaParams.misc.exKwds["kwd"+r]),delete metaParams.misc.exKwds["kwd"+r]):i+=w(e[n]),e.splice(n,1)}return e.length}}};window.metaParams=yt();var kt=metaParams.meta,Nt=metaParams.serp||{},Pt=metaParams.ads,It=metaParams.abf,Ct=metaParams.log,At=metaParams.lper||100,Rt=metaParams.ndadp,Et=(function(){var e={oRurl:"1"};1===metaParams.misc.rEnD&&(e.cid="1",e.crid="1",e.size="1");for(var t in kt)void 0===e[t]&&(le=[le,"&",t,"=",kt[t]].join(""));window.mnCts&&""!==window.mnCts&&(le=[le,"&rms=",window.mnCts].join(""))}(),function(e){e.r&&(metaParams.keywords=e.r),e.kpd&&(Me+=["&lkpgd=",encodeURIComponent(e.kpd)].join(""),le=["&lkpgd=",encodeURIComponent(e.kpd),"&",le].join("")),xt(),He=!1,$t()}),xt=function(){var e,t,n=metaParams.keywords,r=_t(),i=function(){if(!n[++e])return 0;for(var r=gt(1,100),i=n[e],o=0,a=i.length,d=0;a>o;){var s=i[o++];if(s.p+=d,r<=s.p)return(t=--o)||1;d=s.p}};return function(){var o=0;if(n=metaParams.keywords,e=-1,t=0,0!==n.length){try{"function"==typeof window.formatKeywordView&&window.formatKeywordView()}catch(a){}for(r.rsetP();r.eP();){if(0===o){if(0===i())return}else o=0;for(var d,s=n[e][t]&&n[e][t].bg||[],c=s.length,m=0;c>m;){if(!r.eP())return;d=s[m++],d.k.length>0&&(d.c=d.s?d.k.length:d.c,d.s=!0,o+=r.fKwd(d.k,d.c))}}}}}(),Lt=function(){for(var e=1;10>=e;e++)if(document.getElementById("ad_image_"+e))return!0;return!1},Bt=function(){s("?"+Ne.replace(/#/,""));de=ke.ak||"",se=ke.ar||"",de&&(Pt.ak=de,Pt.ar=se)},Ut=function(){if(window.parent&&window.parent._mNYMKwds){var e=window.parent._mNYMKwds;if(metaParams.keywords=e.r,metaParams.misc.kpd=e.kpd||"",Te=!0,e.ktd&&(Me+=["&lktgd=",encodeURIComponent(e.ktd)].join(""),le=["&lktgd=",encodeURIComponent(e.ktd),"&",le].join("")),Tt())return;e.kpd&&(Me+=["&lkpgd=",encodeURIComponent(e.kpd)].join(""),le=["&lkpgd=",encodeURIComponent(e.kpd),"&",le].join("")),xt(),He=!1,$t()}else{if(Te===!0)return;var t=50,n=parseInt(kt.kwdsMaxTm,10)||400,r=ke.sttm||0,i=ke.dytm||0,o=+(n-(parseInt(i,10)-parseInt(r,10)+((new Date).getTime()-parseInt(i,10))));isFinite(o)&&o>50&&(t=o),Ue=setTimeout(function(){if(window.parent&&window.parent._mNYMKwds)Ut();else{if(Te=!0,Tt())return;xt(),He=!1,Pt.provider&&pe>0||ln(),$t()}},t)}},Tt=function(){if("undefined"==typeof bKwdMode||!window._mNBh||"function"!=typeof _mNBh.getBHK||"function"!=typeof window._mNBh.setBHK)return!1;var e=a();return"1"==bKwdMode?(window._mNBh.setBHK({kwds:metaParams.keywords,kpd:metaParams.misc.kpd||"",purl:metaParams.misc.purl||"",c:e}),!1):(He=!0,window._mNBh.getBHK({kwds:metaParams.keywords,cb:Et,kpd:metaParams.misc.kpd||"",purl:metaParams.misc.purl||"",c:e}),!0)},Ht=function(){try{!window.console||"function"!=typeof console.log||-1===decodeURIComponent(Ne).indexOf("ea=1")&&-1===decodeURIComponent(Ne).indexOf("ea%3D1")||console.log("EADone")}catch(e){}},jt=function(){return"1"===kt.extKwds?(He=!0,Ut()):void(Tt()||xt())},Mt=function(){Oe=!0,je=!1,"1"!==Rt.fdd?k(Rt.fads,"ad"):$t(),Pe=!0},Vt=function(){try{for(var e,t=document.getElementsByTagName("a"),r=0;r<t.length;){var i=t[r++],o=i.className||"";-1!=o.indexOf("mana")&&(e=parseInt(o.replace("mana",""),10),n(window.manAdsAppending)&&(i.href=i.href+"&"+window.manAdsAppending),i.href=it(i.href,e,""))}}catch(a){}},Dt=function(){var e=T(),t=metaParams.meta.crid;jt(),e&&e.waitForEInsl&&e.waitForEInsl[t]||e&&e.showAdsManually&&e.showAdsManually[t]&&e.showAdsManually[t].mNWait||Ot()},Ot=function(){var e=gt(1,100);if(he=At>=e?!0:!1,Vt(),Pt.provider&&pe>0&&(je=!0),Re=(new Date).getTime(),Rt&&"1"===Rt.isEnabled&&pe>0){if(!Rt.providerInfo||0===Rt.providerInfo.length)return Ce=(new Date).getTime(),void Mt();if(Ie=setTimeout(function(){Mt()},6e3),K())return void F();O()}else if(Pt.provider&&pe>0){Bt();var t=[(void 0!==Pt.keyword1||"")&&"&k2="+Pt.keyword1,(void 0!==Pt.keyword2||"")&&"&k3="+Pt.keyword2].join(""),n=Pt.ps3||"",r=(Pt.type3||"",Pt.hloc||""),i=Pt.cc||"",o=Pt.fve||0,a=Pt.url2||"",d=Pt.hle||0,s=Pt.of||0,c=Pt.ct||"",m=Pt.sl||"",u=Pt.slc||"",f=Pt.pt||"",l=Pt.av||"",p=Pt.fdd||0,w=Pt.provider||"",v=Pt.provider2||"",h=(Pt.provider3||"",Pt.provider0||""),g=Pt.ma||"",y=Pt.mp||"",b="undefined"!=typeof _mNVsid&&_mNVsid.length>0?_mNVsid:"",_=ke&&ke.hvsid?ke.hvsid:"",k=void 0!==Pt.ak&&""!==Pt.ak?"&ak="+Pt.ak+"&ar="+Pt.ar:"",P=hostAds+"/?u="+Pt.url+"&k="+Pt.keyword+t+"&s="+Pt.ps+"&s2="+Pt.ps2+"&s3="+n+"&t="+Pt.type+"&t2="+Pt.type2+"&t3="+Pt.type3+"&m="+pe+"&cti="+Pt.ctxid+"&ctc="+Pt.ctxcat+k+"&f="+Pt.f+"&r="+ye+"&abf="+It+"&pdn="+Pt.pdn+"&adc="+Pt.adc+"&rb="+Pt.rb+"&bt="+Pt.bt+"&cc="+i+"&hloc="+r+"&fve="+o+"&hle="+d+"&u2="+a+"&of="+s+"&ct="+c+"&pt="+f+"&av="+l+"&p1="+w+"&p2="+v+"&p0="+h+"&vst="+_+"&vstr="+b+"&sl="+m+"&slc="+u+"&fdd="+p+"&ma="+g+"&mp="+y;Lt()&&(P+="&adi="+Pt.adi+"&ads="+Pt.ads),P+="&abp="+et("val"),P+=N(),P+=Pt.mrt&&""!=Pt.mrt?"&mrt="+Pt.mrt:"",P+=Pt.prt&&""!=Pt.prt?"&prt="+Pt.prt:"",P+=ke&&ke.ymsub?"&ymsub="+ke.ymsub:"",P+=kt&&kt.https&&1==kt.https?"&https=1":"",Ce=(new Date).getTime(),Qe(P,""),Pt.fTO=Pt.fTO||3e3,Ie=setTimeout(function(){Pt.fAds=Pt.fAds||[],pn(Pt.fAds)},Pt.fTO)}else V(0),$t()},St=function(e,t){var n=document.getElementById("postForm"),r=document.createElement("input");r.type="hidden",r.name=e,r.value=t,n.appendChild(r)},qt=function(e,t,n,r){St("adt[]",e),St("add[]",t),St("addu[]",n),St("adu[]",r)},Kt=function(){return"complete"==document.readyState?!0:(tt.addEvent(window,"load",Wt),!1)},Ft=function(e,t,n){var r=new RegExp("(&"+t+"=)([^&]+)");return e.replace(r,"$1"+n)},Wt=function(){var e,t;if(He!==!0&&je!==!0||Le!==!1){if(D(),he){tt.removeEvent(window,"load",Wt);var r=0;if("undefined"!=typeof window.adResult?(r=adResult.length,"undefined"!=typeof window.adCnt&&!isNaN(window.adCnt)&&window.adCnt<=r&&(r=window.adCnt)):Be>0&&(r=Be),void 0==be&&(be=""),void 0!==ce&&""!==ce){var o="",a="";2==ce?(o=P()||Pt.ps2||"",a=Pt.type2||"",(""!=o||""!=a)&&(Ct=Ft(Ct,"ps",o),Ct=Ft(Ct,"type",a))):3==ce?(o=P()||Pt.ps3||"",a=Pt.type3||"",(""!=o||""!=a)&&(Ct=Ft(Ct,"ps",o),Ct=Ft(Ct,"type",a))):0==ce?(Ct=Ft(Ct,"ps",""),Ct=Ft(Ct,"type","")):1==ce&&(o=P(),o&&(Ct=Ft(Ct,"ps",o)))}var d=hostLog;if(1==Le?(d+="/adbql.php?",Le=!1):d+="/bql.php?",d+="v=1&",d+="&hvsid="+i(),kt.c&&Fe&&(d+="&c="+kt.c),d+="&geo="+qe,d+="&lper="+metaParams.lper+ft()+"&"+Ct+"&rc="+r,""!=C()&&(d+=C()),d+="&fdkt="+be+ve+"&rand="+ye+"&cid="+kt.cid,Rt){if(0==Rt.ismo&&(d+="&ismo="+Rt.ismo),Rt.prvdata)for(t=Rt.prvdata.length,e=0;t>e;e++)d+="&prvdata[]="+Rt.prvdata[e];if(Rt.prvorder&&-1!==Rt.prvorder.join("|").indexOf("RA")&&Rt.lid){d+="&ra_lid="+Rt.lid;var s,c=T();c&&c._mN&&c._mN._util&&(s=c._mN._util.mngc("ra_depth_tracking"),s&&(d+="&radata="+encodeURIComponent(s)))}if(void 0!=Rt.rapd&&(d+="&ra_pd="+encodeURIComponent(Rt.rapd)),Rt.adcls){var m=Rt.adcls.length;for(e=0;m>e;e++){var u=Rt.adcls[e];if(u&&u.prv&&u.nCall&&u.nRet){var f=u.prv+"acl",l=u.prv+"aret";d+="&tdAdd[]="+encodeURIComponent(f+"="+u.nCall),d+="&tdAdd[]="+encodeURIComponent(l+"="+u.nRet)}}}d+=ut("pr_gid",Rt.progrpid),ze&&(d+=ze),$e&&(d+=$e)}Se&&(d+="&vwid="+Se,d+="&vi="+Se),xe&&(d+="&slnkp="+xe),Ee&&Ee.length>0&&(d+="&slnkc="+encodeURIComponent(Ee.join(",")));

var p=Yt("bid");p&&(d+="&bdrct="+p);var w=Yt("rtbsTime");""!=w&&(d+="&rt="+w);var v=Yt("winReason");""!=v&&(d+="&bto="+v),ke.rtbsd&&(d+="&tdAdd[]="+encodeURIComponent("rtbsd="+ke.rtbsd)),void 0!=Ae&&(d+="&adiff="+Ae),_e&&_e.requrl&&""!==_e.requrl&&(d+="&requrl="+_e.requrl),d+=window.mrtu&&""!=window.mrtu?"&mrtak="+encodeURIComponent(window.mrtu):"",d+=Ne.replace(/#/g,"&"),d+="&matm="+Re,"undefined"!=typeof _mNVsid&&_mNVsid.length>0&&(d+="&vsid="+_mNVsid),d+=Me,d+=et();try{window.parent&&window.parent._mNYMDiff&&(d+="&ymkbdiff="+window.parent._mNYMDiff)}catch(h){}if(Ne&&-1!=Ne.indexOf("ornt=v"))return;if(void 0!=kt.oRurl&&(d+="&oRurl="+kt.oRurl),d+="&tdAdd[]="+encodeURIComponent("uiparams="+ee()),Qe(d,""),metaParams&&metaParams.misc&&"undefined"!=typeof metaParams.misc.orgLogHost&&n(metaParams.misc.orgLogHost)&&-1!=d.indexOf("/bql.php")){var g=d.replace(hostLog+"/bql.php",metaParams.misc.orgLogHost+"/oql.php");Qe(g,"")}metaParams.misc&&metaParams.misc.resHostPixelUrl&&n(metaParams.misc.resHostPixelUrl)&&(We.push(hostName+"/px.gif"),We.push(metaParams.misc.resHostPixelUrl)),Ht(),H(),x()}zt()}},zt=function(){for(var e=We.length,t=0;e>t;t++)try{(new Image).src=We[t]}catch(n){}},$t=function(){(Kt()||"1"===metaParams.misc.bobql)&&Wt()},Yt=function(e){var t,n,r="";try{n="object"==typeof window.parent.winScope?window.parent.winScope._mNDetails:window.parent._mNDetails}catch(i){}try{var o=window.frameId||null;o?t=o.replace("main","dy").replace(/_n$/g,"").replace(/_[0-9]*$/g,""):n&&metaParams.meta.crid&&(t="_mN_dy_"+metaParams.meta.crid),n&&n[t]&&n[t][e]&&(r=n[t][e])}catch(i){}return r},Gt=function(e,t){if(t.hasChildNodes())for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)},Xt=function(e,t){t=t.toLowerCase();for(var n=e.parentNode;n;){if(n.tagName&&n.tagName.toLowerCase()==t)return n;n=n.parentNode}return null},Qt=function(e){var t=kt;t.kt=5;for(var n=document.getElementById(e),r=n.getElementsByTagName("input"),i=r.length;i--;)if(r[i]&&"text"==r[i].type&&""==r[i].value)return!1;for(var o in t)if("undefined"==typeof n[o]){var a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name",o),a.setAttribute("value",decodeURIComponent(t[o])),n.appendChild(a)}return n.submit(),!1},Jt=function(){var e,t,n=document.getElementsByName("customsitesearch"),r=n.length;if(r>0)for(t=0;r>t;t++)if("form"==n[t].nodeName.toLowerCase()){an(n[t],"vsid","undefined"!=typeof _mNVsid&&_mNVsid.length>0?_mNVsid:"");for(e in ke)an(n[t],e,ke[e]);tt.addEvent(n[t],"submit",Zt(n[t])),tn(n[t])}},Zt=function(e){return function(t){en(t,e)}},en=function(e,t){var n=t.getElementsByTagName("input"),r=n.length,i="";if(r>0)for(var o=0;r>o;o++)n[o]&&n[o].type&&"text"==n[o].type.toLowerCase()&&(i+=n[o].value);return""==i?(on(e),!1):(an(t,"s",i),t.submit(),!0)},tn=function(e){var t=e.getElementsByTagName("input");if(lenInp=t.length,lenInp>0)for(var n=0;n<lenInp;n++)t[n]&&t[n].type&&("text"==t[n].type.toLowerCase()&&tt.addEvent(t[n],"keyup",function(t){nn(t,e)}),"button"==t[n].type.toLowerCase()&&tt.addEvent(t[n],"click",function(t){en(t,e)}))},nn=function(e,t){e=rn(e),13==e.keyCode&&en(e,t)},rn=function(e){return e||window.event},on=function(e){return e&&e.preventDefault?void e.preventDefault():(window.event.returnValue=!1,!1)},an=function(e,t,n){if("undefined"==typeof e[t]){var r=document.createElement("input");r.type="hidden",r.name=t,r.value=n,e.appendChild(r)}else e[t].value=n},dn=function(e,t){var n=document.createElement("img");n.src=t,n.width="16",n.height="16",n.onerror=function(){this.style.visibility="hidden",this.style.display="none"},e.parentNode.insertBefore(n,e)},sn=function(){Le=!0,$t()},cn=function(e){var t=e.href||"",n=-1!=t.indexOf("?id=")?!1:!0,r=metaParams&&metaParams.misc&&metaParams.misc.pk?metaParams.misc.pk:!1;n&&r&&(e.href+="?id="+r)},mn=function(){for(var e=document.getElementsByTagName("a"),t=e.length;t--;){var n=e[t];n&&n.href&&-1!=n.href.indexOf("media.net/adchoices")&&(cn(n),tt.addEvent(n,"click",sn))}},un=function(e,t,n,r){var i="",o="";return o=["","&slt=",t,"&slp=",n].join(""),i=e.replace(/(&r=)([^&]+)/,"$1"+encodeURIComponent(r)+o)},fn=function(e,t,n){var r,i=t,o="",a=0,d=i.length;for(r=0;d>r;r++){var s,c=i[r].length,m=1==d?"slr-s":"slr-"+(r+1);for(o+='<ul class="'+m+" slc-"+c+'">',s=0;c>s;s++){var u=un(n,i[r][s].title,i[r][s].position,i[r][s].rurl),f=s+1==c?' class="nosep"':"";o+="<li "+f+'><a href="'+u+'" target="_blank"> '+i[r][s].title+" </a></li>",++a}o+="</ul>"}return 0!=a&&(xe="yes"),Ee.push(parseInt(e)+1+":"+a),o},ln=function(){var e=document.getElementById("mN_main_creative"),t=document.getElementById("mN_failover_creative");e&&t&&(e.style.display="none",t.style.display="block",t.style.visibility="visible",document.body.style.visibility="visible",Me+="&flcr=1",window.formatview=function(){},window.formatKeywordView=function(){},window.formatViewAfterLoad=function(){})},pn=function(e){if(Ae=(new Date).getTime()-Ce,je=!1,!Pe){if(/webkit/.test(navigator.userAgent.toLowerCase()))try{window.history&&window.history.replaceState?window.history.replaceState({},"mnet",window.location.href+"#fref"):window.location.replace(window.location.href+"#fref")}catch(t){}Pe=!0,"number"==typeof Ie&&(clearTimeout(Ie),Ie=null);var n,r,i,o,a,d,s,c,m,u,f,l,p,w,v,h,g,y=!0,b=window.adResult||[],_=window.clkHostName||hostName;for("undefined"!=typeof e&&(b=e,ln()),n=0;10>n;n++)if(r=n+1,i=document.getElementById("ad_title_"+r),o=document.getElementById("ad_desc_"+r),a=document.getElementById("ad_description_"+r),d=document.getElementById("ad_url_"+r),s=document.getElementById("ad_image_"+r),c=document.getElementById("site_link_"+r),u=i||o||a||d,g=h=f=l=p=w=m=v=void 0,u&&b[n])ce="undefined"==typeof ce?b[0][5]:ce,v="undefined"!=typeof b[n][8]&&"undefined"!=typeof b[n][9]&&"undefined"!=typeof b[n][10]?_+""+rt(Pt.keyword,b[n][3],b[n][5],encodeURIComponent(b[n][2]),n+1,b[n][8],b[n][9],b[n][10]):_+""+rt(Pt.keyword,b[n][3],b[n][5],encodeURIComponent(b[n][2]),n+1),"undefined"!=typeof _mNVsid&&(v+="&vsid="+_mNVsid),i&&(h=i.parentNode,g=Xt(i,"a"),g&&(g.removeAttribute("onclick"),g.removeAttribute("onmouseout"),g.removeAttribute("onmouseover"),g.setAttribute("href",v)),i.innerHTML=b[n][0],Gt(h,i)),o?(f=o.parentNode,o.innerHTML=b[n][1],Gt(f,o)):a&&(f=a.parentNode,a.innerHTML=b[n][1],Gt(f,a)),f&&"a"==f.tagName.toLowerCase()?l=f:f&&y&&(l=Xt(f,"a")),l?(l.removeAttribute("onclick"),l.removeAttribute("onmouseout"),l.removeAttribute("onmouseover"),l.setAttribute("href",v)):y=!1,d&&(p=d.parentNode,w=Xt(d,"a"),w&&(w.removeAttribute("onclick"),w.removeAttribute("onmouseout"),w.removeAttribute("onmouseover"),w.setAttribute("href",v)),d.innerHTML=b[n][2],Gt(p,d),Pt.fve&&1==Pt.fve&&dn(p,b[n][6])),s&&s.getAttribute("src")&&(""==b[n][4]?"sratimg"!==s.getAttribute("class")&&(s.style.display="none"):s.setAttribute("src",b[n][4])),c&&(b[n][7]&&b[n][7].length>0?(m=c.parentNode,c.innerHTML=fn(n,b[n][7],c,v),Gt(m,c)):Ee.push(n+1+":0")),qt(b[n][0],b[n][1],b[n][2],b[n][3]);else{if(!u)break;void 0!=i&&(i.parentNode.innerHTML=""),void 0!=o&&(o.parentNode.innerHTML=""),void 0!=a&&(a.parentNode.innerHTML=""),void 0!=d&&(d.parentNode.innerHTML=""),void 0!=s&&(s.style.display="none"),void 0!=c&&(c.parentNode.innerHTML="")}V(b.length),$t()}};return $.prototype.set=function(e,t){return this.frame[e]=t,this},$.prototype.overrideStyle=function(e){return this.frame.style.cssText=e,this},$.prototype.done=function(){return this.frame},Dt(),Jt(),mn(),{LoadAds:pn,showKwd:xt,kwdSearch:Qt,showAds:y,renderAdUnit:Ot,getLayer1WindowObject:T,getABPFlag:et}}();