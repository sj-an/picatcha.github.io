//tealium universal tag - utag.12 ut4.0.201503122059, Copyright 2015 Tealium.com Inc. All Rights Reserved.
function udm_(a){var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}
function ns_order(a,b,c){var d=this,e="ns_undefined",f="length";d.toV=function(a){return(new String(a)).replace(/(%3C|%3E|<|>)/gi,"_")},d.toF=function(a){var b=parseFloat(a);return isNaN(b)?e:b},d.counterURL=a,d.clientID=d.toV(b),d.orderID=d.toV(c),d.l=[],d.addLine=function(a,b,c,g,h,i){d.l[d.l[f]]={ns_prod_id:a?a:e,ns_brand:b?b:e,ns_prod_grp:c?c:e,ns_shop:g?g:e,ns_qty:d.toF(h),ns_prod_price:i?i:0}},d.sendOrder=function(){var a="ns_order_id_"+d.orderID+"=true";if(!!d.orderID&&!ns_.order_sent[d.orderID]&&document.cookie.indexOf(a)==-1){ns_.order_sent[d.orderID]=!0,document.cookie=a;var b=d.counterURL+"&ns_commerce=true&ns_ec_sv=6.1202.02&ns_type=hidden"+"&ns_client_id="+d.clientID+"&ns_order_id="+d.orderID+"&ns_orderlines="+d.l[f];for(var c=0,a=d.l[f];c<a;c++){var e=d.l[c],g=b+"&ns_orderline_id="+(c+1);for(var h in e)g+="&"+h+"="+escape(d.toV(e[h]));ns_.batch(g)}}}}
ns_=window.ns_||{},ns_.batch=function(a){var b,c,d=document,e=d.location;a=a+"&ns__t="+(new Date).getTime(),a=a+"&ns_c="+(d.characterSet?d.characterSet:d.defaultCharset?d.defaultCharset:"")+"&ns_ti="+escape(d.title)+"&ns_jspageurl="+escape(e&&e.href?e.href:d.URL)+"&ns_referrer="+escape(d.referrer);var f=2040,g=a.lastIndexOf("&");if(a.length>f&&g!=-1){while(g>f)a=a.substring(0,g),g=a.lastIndexOf("&");a=a.substring(0,g+1)+"ns_cut="+a.substr(g+1,f-g-1)}var h='img height="1" width="1"  style="position:absolute;top:0;left:0;"';if(d.layers)d.images?(new Image).src=a:d.write("<"+h+' src="'+a+'">');else{var i=function(a){var b=document.all(a);b&&b.length&&(b=b[0]);return b},j=function(a){c.onload=c.onerror=null;if(ns_.pipe.length>0){var e=ns_.pipe.join(""),f=e.indexOf("src"),g=e.indexOf('"',f),h=e.indexOf('"',g+1),k=e.substring(g+1,h),e=e.substring(0,f)+'id="ns_1"'+e.substring(h+1);ns_.pipe=[],b.innerHTML=e,c=d.getElementById?d.getElementById("ns_1"):i("ns_1"),c.onload=j,c.src=k}};rs=d.readyState,ns_=typeof ns_!="undefined"?ns_:{},ns_.pipe=typeof ns_.pipe!="undefined"?ns_.pipe:[],b=d.getElementById?d.getElementById("ns_"):i("ns_");if(!b){var k=["<",'div id="ns_" style="position:absolute;top:0;left:0;z-index:32766;background-color:transparent !important"><',h,' id="ns_1"></',"div>"].join("");rs=="complete"?d.body.innerHTML+=k:d.write(k)}c=d.getElementById?d.getElementById("ns_1"):i("ns_1");if(c&&c.onload)ns_.pipe[ns_.pipe.length]="<"+h+' src="'+a+'">';else if(b||c)b&&(b.innerHTML="<"+h+' id="ns_1">'),b=d.getElementById?d.getElementById("ns_"):i("ns_"),c=d.getElementById?d.getElementById("ns_1"):i("ns_1"),c.onload=c.onerror=j,c.src=a}},ns_.order_sent=ns_.order_sent||{}
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1,'link':1};u.kvp_delim="=";u.account="3000085";if(utag_data.siteSection=="home")u.child_account="3000085";else if(utag_data.siteSection=="reviews")u.child_account="3000087";else if(utag_data.siteSection=="news")u.child_account="3000078";else if(utag_data.siteSection=="videos")u.child_account="3000088";else u.child_account="3000085";u.base_url='http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+".scorecardresearch.com/c2/3000085/cs.js";u.map={"_topicPrimaryName":"comscorekw"};u.extend=[function(a,b){if(a=="link")return false;}];u.send=function(a,b,c,d,e,f,g){if(u.ev[a]||typeof u.ev.all!="undefined"){u.a=a;for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};g=[];g.push("c1=2");g.push("c2="+u.account);g.push("c4="+u.child_account);if(u.a=="link"){g.push("nstype=hidden")};for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){g.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]));}}}
udm_('http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?'+g.join('&'));if(typeof b._corder!="undefined"&&b._corder){var counterURL='http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?';u.order=new ns_order(counterURL,((b._ccustid)?b._ccustid:b._corder),b._corder);for(f=0;f<b._cprod.length;f++){u.order.addLine(b._cprod[f],b._cbrand[f],b._ccat[f],b._ccat2[f],parseInt(b._cquan[f]),parseFloat(b._cprice[f]));}
if(b._cship){u.order.addLine('shipping','none','shipping_handling','none',1,parseFloat(b._cship));}
u.order.sendOrder();}
(function(){var id='tealium-tag-3005';if(a=="link"&&document.getElementById(id)){return;}
var t=document.createElement('script');t.type='text/javascript';t.async=true;t.id=id;t.src=u.base_url;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s);})();}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('12','cbsi.cnetglobalsite');}catch(e){}
