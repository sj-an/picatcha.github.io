function adViz(e,n){function t(e){return e.replace(/\b(enc|ai|cookie|ra|pa|ct|ep|correlator|publisher_blob|xuid|page_slots|id|ms)=[^&$]+/g,"$1=ns_cut")}var r,a,c,s,_,i,o="comScore=",f=document,u=f.cookie,m="",l="indexOf",v="substring",d="length",p=700,g=1200,b=4096,e=e.replace("?&","?"),x="&ns_",h=0,y="&",w=e[l]("?")+1,S=(e[l]("c2=")-1,window),C=S.encodeURIComponent||escape,D="";if(e[e[d]-1]==y&&(e=e[v](0,e[d]-1)),u[l](o)+1)for(_=0,s=u.split(";"),i=s[d];i>_;_++)c=s[_][l](o),c+1&&(m=y+unescape(s[_][v](c+o[d])));return"undefined"==typeof S.ns_brt||S.ns_brtSent||(D=x+"ad_brt="+ns_brt,ns_brtSent=!0),h=+new Date,h.toString().search(/^9+$/)||(h=(new Date).getTime()),e=e[v](0,w)+"ns__t="+h+x+"_c="+(f.characterSet||f.defaultCharset||"")+(D.length>0?D:"")+"&ns_ad_conn="+(navigator||{}).onLine+"/"+((navigator||{}).connection||{}).type+"&"+e[v](w)+(e[l]("&c8=")<0?"&c8="+C(f.title):"")+m+(e[l]("&c7=")<0?"&c7="+C(r=t(f.URL)[v](0,p)):"")+(e[l]("&c9=")<0?"&c9="+C(t(f.referrer)[v](0,g-(r?r[d]:0))):""),e[d]>b&&e[l](y)>0&&(a=e[v](0,b-8).lastIndexOf(y),e=(e[v](0,a)+x+"cut="+C(e[v](a+1)))[v](0,b)),f.images?(c=n?new Object:new Image,c.onload=function(){ns_brt=C(+new Date-h)},c.src=e,c):void(n||f.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">"))}!function(){ns_=self.ns_||{},ns_.mvce=ns_.mvce||{};var e=document,n=e.location,t="length",r=function(){if(a)var e=a.slice(0);else{var e=[];for(var n in e)delete e[n];a=e.slice(0)}for(var r=0,c=arguments.length;c>r;r++)e[e[t]]=arguments[r];return e},a=r(),c=self.encodeURIComponent?encodeURIComponent:escape,s=c(n&&n.href?n.href:e.URL),_="http"+("s"==s.charAt(4)?"s://s":"://"),i=_+"b",o=_+"a",f=".scorecardresearch.com",u=i+f+"/p?",m=o+f+"/rpc.flow?",l=i+f+"/rs/",v=i+f+"/rsx/",d=window,p=!1,g=!0,b="script",x="c2",h="src",y="indexOf",w="substring",S=ns_.mvce_m||(ns_.mvce_m=r()),C={b:"Campaign ID",l:"BSL_LF_SETTINGS",x:"6035555",i:"/.+/",g:"",v:"",it:"",m:"vce_st,bsl,bsl_lf",c:"6035555",w:"",n:"",s:0,d:0,y:1,cvt:"",cvq:"",cvc:""},D=ns_._mD||(ns_._mD={}),I=C.m,A=r(),O=ns_._rS||(ns_._rS={}),E=ns_.tP||(ns_.tP=[]),G=/^\/(.*)\/([gim]*)$/,L=navigator.userAgent.toLowerCase(),N=navigator.platform.toLowerCase(),R=/ applewebkit\//.test(L)&&/ip(?:ad|od|hone)/.test(L+N),B=/android/.test(L)||/linux armv7/.test(N);"undefined"==typeof ns_.mvce.K&&(ns_.mvce.K=function(e,n,t){O[e]=r(0,n,t,+new Date)}),"undefined"==typeof ns_.mvce.A&&(ns_.mvce.A=function(e){O[e]=r(1,+new Date)}),"undefined"==typeof ns_.mvce.G&&(ns_.mvce.G=function(e){ns_.mym.rsurl=e}),ns_.mym=function(){var n=function(n,t){var r,t=t&&document.getElementById?document.getElementById(t):e;return t.getElementsByTagName?r=t.getElementsByTagName(n):n.toLowerCase()==b&&document.scripts?r=document.scripts:t.all&&t.all.tags&&(r=t.all.tags(n)),r||[]},a=function(n,t,r,a){var c=e.createElement(b);c.type="text/javascript",c[h]=n,C.y&&(c.async=!0),a&&(c.id=a),t.parentNode.insertBefore(c,t)},c=function(e){if(-1!=e[y]("#")){for(var n={},r=e[w](e[y]("#")+1).replace(/&amp;/gi,"&").replace(/amp;/gi,"").split("&"),a=0,c=r[t];c>a;a++){var s=r[a].split("=");2==s[t]?n[s[0]]=s[1]:1==s[t]&&(n[s[0]]="")}return n.c1||(n.c1="3"),n}return p},s=function(e){var n=e[w](0,e[y]("#")),t=n[y]("/c2/");return-1!=t?(t=n[w](t+4),t[w](0,t[y]("/"))):p},_=function(e,n){for(var t in e)if(t!=x&&n[t]!=e[t])return p;return g},o=function(e){if(e.ax_iframe=0,d!=d.top)try{d.top.location.href?e.ax_iframe=1:e.ax_iframe=2}catch(n){e.ax_iframe=2}var c=u;for(var s in e)-1=="__nax_iax_gax_itax_a"[y](s)&&(c+="&"+s+"="+e[s]);if(ns_.mym_G&&(c+="&ns__m="+ns_.mym_G),c+="&ns_ce_sv=5.1609.15",I){var _=I.split(",").sort(function(e,n){return e.substr("-"==e.charAt(0)?1:0).localeCompare(n.substr("-"==n.charAt(0)?1:0))});I="";for(var o={bsl:function(e,n){return n&&(-1!=n.b.indexOf(e.c3)||e.bsl_sf)},bsl_lf:function(e,n){return 3==Number(e.c1)&&(e.c12||e.ax_pid)||n&&n.l&&new RegExp("\\b"+e.c3+"(,|$)").test(n.l)},vce_st:function(e,n){var r=e.ax_cid||n.x;if(!r)return!1;for(var a,c=n.i.split(","),s=0,_=c[t];_>s;s++)if(a=c[s],G.test(a)){var i=a.match(G),o=new RegExp(i[1],i[2]);if(o.test(e.c3))return!0}else if(e.c3==a)return!0;return!1}},f=0,p=_[t];p>f;f++){var g=_[f],b="-"==g.charAt(0);o[g]&&o[g](e,C)&&(I+=(""==I?"":",")+g,A[A[t]]=r(g,b))}c+="&ns_ce_mod="+(e.ns_ce_mod=I)}I[y]("vce_st")>=0&&(c+="&ns_ad_event=load"),e.__p=adViz(c);var x=e.__p[h],O=x[y]("ns__t"),E=/ns__t=([^&]+)/;E.test(x)&&(e.ns__p=x.match(E)[1]);var L=e.ax_it||C.it;if(L){var N=unescape(L).indexOf("[CS_ID]");N>1&&(L=encodeURIComponent(unescape(L).replace("[CS_ID]",+(e.c2||"")+"|"+(e.c3||"")+"|"+(e.c4||"")+"|"+(e.c5||"")+"|"+(e.ns__p||"")))),adViz(unescape(L))}ns_.mym_G||-1!=O&&(O=x[w](O+6),ns_.mym_G=O[w](0,O[y]("&"))),I[y]("vce_st")>=0&&a(m+"uid="+(e.__n.__uid="uid"+ +new Date)+"&ns_mod_ns=mvce&ns__p="+e.ns__p+"&"+x[w](x[y]("?")+1),e.__n);for(var f=0,p=A[t];p>f;f++){var T=A[f][0],P="_"+T;if("bsl"!=T||I[y]("vce_st")<0){var U="bsl_lf"==T&&e.ax_pid;U&&(S._bsl_lf=function(e,n){if(3==Number(e.c1)){var t="";for(var r in e)-1=="__p__nax_iax_gax_a".indexOf(r)&&(t=t+r+"="+e[r]+"&");setTimeout(function(e,n,t){return function(){n&&t(i+".voicefive.com/rs/ar/bsl_broker.js#"+e,n)}}(t,e.__n,(ns_.mym||ns_.ad).a),1e3)}}),S[P]?S[P](e,C):(D[P]||(D[P]=[]),D[P].push([e,C,+new Date]),(R||B)&&"vce_st"==T&&(T="mobile/"+T),a((A[f][1]?v:l)+T+".js",e.__n))}}},f=function(e){if(!e)return p;for(var n=p,r=0,a=E[t];a>r;r++)_(E[r],e)&&(n=g);return n?p:(E[E[t]]=e,o(e),g)},L=function(e){if(!e||!e[h]||-1==e[h][y]("#"))return p;var n=e.src.indexOf("#"),t=e.src.indexOf("?");if(!e||!e.src||-1==n||t>=0&&n>t)return p;var r=c(e[h]);return(r.c2=s(e[h]))?(r.__n=e,r):void 0},N=function(e,n){for(var r=0,a=0,c=n[t],s=n[0];c>a;++a&&(s=n[a]))_(e,s)&&r++;return r},T=function(){for(var e=n(b),r=[],a=0,c=e[t];c>a;a++){var s=L(e[a]);s&&(r[r[t]]=s)}for(var a=0,c=r[t],s=r[0];c>a;++a&&(s=r[a])){var _=N(s,E),i=N(s,r);if(s.c2==C.c&&i>_&&f(s))return g}},P=function(e){for(var n=0,r=D[e][t];r>n;n++)S[e].apply(self,D[e][n])};return{ml:P,tag:f,fire:T,a:a,rs:O}}(),ns_.mym.fire()||setTimeout(ns_.mym.fire,0)}();