function geoRedirector(a,c,b,d,e){this.id=a;this.intDays=c;this.intHours=b;this.intMinutes=d;this.duration=e;this.intMStoExpire=c*864E5+b*36E5+d*6E4;this.cookieName="geoRedirector";this.cookieNameTmpDisable="geoRedirectorIgnore";a=new Date;a.setTime(a.getTime()+2592E6);this.cookieExpires=a;this.cookieExpiresTmpDisable=0;this.cookieValCountDelim="~";this.intCurrentTime=(new Date).getTime();this.timer=this.messagingHandler=null;(this.enabled=this.isEnabled())&&this.attachDisablerToMenu();a=this.readState();
this.lastRun=a.lastRun;this.runCount=a.runCount}
geoRedirector.prototype.ensureDomain=function(a,c){if(YAHOO.util.Cookie.get(this.cookieNameTmpDisable)==null){var b=window.location,d=b.hostname.indexOf(a)<0;if(this.isValidDomain(b.hostname)&&this.enabled&&d){var d=a.split("."),e=b.hostname.split(".");d.length!=e.length&&(a=e[0]+"."+a);d=b.protocol+"//"+a;d+=b.port!=null&&b.port!=80?":"+b.port:"";d+=b.pathname+b.search;d+=b.hash!=null?b.hash:"";c!=null&&c==true?(YAHOO.util.Cookie.setSub(this.cookieName,"origurl",b.href,{domain:".reuters.com",expires:this.cookieExpires,
path:"/"}),YAHOO.util.Cookie.setSub(this.cookieName,"enabled","tracked",{domain:".reuters.com",expires:this.cookieExpires,path:"/"})):(YAHOO.util.Cookie.setSub(this.cookieName,"origurl",b.href,{domain:".reuters.com",expires:this.cookieExpires,path:"/"}),YAHOO.util.Cookie.setSub(this.cookieName,"enabled","true",{domain:".reuters.com",expires:this.cookieExpires,path:"/"}),window.location.href=d)}}};function wrapDelegate(a,c){return function(){a&&a();c&&c()}}
geoRedirector.prototype.attachDisablerToMenu=function(){window.onload=wrapDelegate(window.onload,function(){var a=YAHOO.util.Dom.getElementsByClassName("editionListContainer");for(i=0;i<a.length;i++)a[i].onclick=function(){typeof GEO_REDIRECTOR=="undefined"&&(GEO_REDIRECTOR=new geoRedirector("geo"));GEO_REDIRECTOR.disableRedirect();return true}})};geoRedirector.prototype.isValidDomain=function(a){return a.indexOf(".com")>-1};
geoRedirector.prototype.disableRedirect=function(){this.enabled=false;YAHOO.util.Cookie.setSub(this.cookieName,"enabled","false",{domain:".reuters.com",expires:this.cookieExpires,path:"/"})};geoRedirector.prototype.temporarilyDisableRedirect=function(){YAHOO.util.Cookie.set(this.cookieNameTmpDisable,"enabled",{domain:".reuters.com",expires:this.cookieExpiresTmpDisable,path:"/"})};
geoRedirector.prototype.isEnabled=function(){var a=YAHOO.util.Cookie.getSub(this.cookieName,"enabled");return a!=null&&a=="false"?false:true};geoRedirector.prototype.getOriginalUrl=function(){return YAHOO.util.Cookie.getSub(this.cookieName,"origurl")};geoRedirector.prototype.saveState=function(a,c){YAHOO.util.Cookie.setSub(this.cookieName,"lastrun",a+this.cookieValCountDelim+c,{domain:".reuters.com",expires:this.cookieExpires,path:"/"})};
geoRedirector.prototype.readState=function(){var a=null,c=0,b=YAHOO.util.Cookie.getSub(this.cookieName,"lastrun");b!=null&&(b=b.split(this.cookieValCountDelim),b!=null&&b.length>0&&(a=b[0],b.length>1&&(c=parseInt(b[1],10))));return{lastRun:a,runCount:c}};
geoRedirector.prototype.isMessageNeeded=function(){if(this.enabled&&this.getOriginalUrl()!=null)if(null!=this.lastRun){if(this.intCurrentTime-this.lastRun>this.intMStoExpire)return true;if(this.runCount<this.maxReruns)return true}else return true;return false};
geoRedirector.prototype.drawPushdown=function(){var a="UK";Reuters&&Reuters.info&&Reuters.info.edition&&(a=Reuters.info.edition.replace("BETA",""));var c=document.createElement("div");c.setAttribute("id","geoDiv");var b=document.createElement("div");YAHOO.util.Dom.addClass(b,"columnLeft");var d=document.createElement("p");YAHOO.util.Dom.addClass(d,"message");d.innerHTML="You're now viewing the "+a+" edition. ";a=document.createElement("a");a.innerHTML="No thanks.";var e=this;YAHOO.util.Event.addListener(a,
"click",function(){clearTimeout(e.timer);e.hidePushdown();e.disableRedirect();window.location.href=e.getOriginalUrl()});var f=document.createElement("div");YAHOO.util.Dom.addClass(f,"columnRight");var g=document.createElement("p");YAHOO.util.Dom.addClass(g,"close");var h=document.createElement("a");h.innerHTML="Close";YAHOO.util.Event.addListener(h,"click",this.hidePushdown);g.appendChild(h);d.appendChild(a);b.appendChild(d);f.appendChild(g);c.appendChild(b);c.appendChild(f);document.body.insertBefore(c,
document.getElementById("header"));this.showPushdown()};geoRedirector.prototype.showPushdown=function(){(new YAHOO.util.Anim("geoDiv",{"margin-top":{to:0,unit:"px"}},1,YAHOO.util.Easing.easeOut)).animate();this.timer=window.setTimeout(this.hidePushdown,this.duration)};geoRedirector.prototype.hidePushdown=function(){(new YAHOO.util.Anim("geoDiv",{"margin-top":{to:-50,unit:"px"}},1,YAHOO.util.Easing.easeOut)).animate()};
geoRedirector.prototype.checkGeoIP=function(){if(this.isMessageNeeded()){var a=this.runCount+1;this.maxReruns>1&&a>this.maxReruns&&(a=0);this.saveState(this.intCurrentTime,a);this.drawPushdown()}};
geoRedirector.prototype.disableEdition=function(a){this.ignoreEdition=a;var c=document.getElementById("submenu_editions"),c=YAHOO.util.Dom.getElementsByClassName("editionListContainer","div",c);for(i=0;i<c.length;i++)YAHOO.util.Dom.getElementsByClassName("editionAbbr","div",c[i])[0].innerHTML==a&&YAHOO.util.Event.addListener(c[i],"mousedown",this.temporarilyDisableRedirect,this,true);document.getElementById("editionChangeForm")&&YAHOO.util.Event.addListener("editionChangeForm","change",this.disableEditionFooter,
this)};geoRedirector.prototype.disableEditionFooter=function(a,c){this.options[this.selectedIndex].id==c.ignoreEdition&&c.temporarilyDisableRedirect()};