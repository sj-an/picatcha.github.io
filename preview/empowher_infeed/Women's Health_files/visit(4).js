try{window.parent._dv_win['dvCallback_1465590210529803']($dv,window,'18c51cb43d6445ff850399c483b7eebb','tps10217.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 3393230, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 2482209, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 3393263, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 5773, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 3393229, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 1017969040411, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_FBITemp', function () {});try { var obj = {}; var my_win = window.parent; var tp_win = window;  if (my_win.addEventListener) { var my_scrl = function() { tp_win.$dv.registerEventCall(tp_win.$uid, {'dvp_scrl':'1'}); my_win.removeEventListener('scroll', my_scrl); }; my_win.addEventListener('scroll', my_scrl);  var my_time = function() { if (tp_win.$dv && tp_win.$dv.tags[tp_win.$uid] && tp_win.$dv.tags[tp_win.$uid].getTimeDiff) { var wint = tp_win.$dv.tags[tp_win.$uid].getTimeDiff(); tp_win.$dv.registerEventCall(tp_win.$uid, {'dvp_wint': wint}); }; my_win.removeEventListener('beforeunload', my_time); my_win.removeEventListener('unload', my_time); }; my_win.addEventListener('beforeunload', my_time); my_win.addEventListener('unload', my_time); }  obj.dvp_orie = my_win.orientation === undefined ? '0' : '1'; obj.dvp_touc = typeof document.ontouchstart === undefined ? '0' : '1';  obj.dvp_ossa = my_win.navigator.standalone === undefined ? '0' : '1'; obj.dvp_chro = my_win.chrome === undefined ? '0' : '1'; obj.dvp_istp = my_win.top === my_win ? '1' : '0'; obj.dvp_hist = my_win.history ? window.history.length : '';  obj.dvp_inh = my_win.innerHeight; obj.dvp_inw = my_win.innerWidth; obj.dvp_ouh = my_win.outerHeight; obj.dvp_ouw = my_win.outerWidth; if (my_win.screen) { obj.dvp_scah = my_win.screen.availHeight; obj.dvp_scaw = my_win.screen.availWidth; } if (my_win.document && my_win.document.body) { obj.dvp_dbch = my_win.document.body.clientHeight; obj.dvp_dbcw = my_win.document.body.clientWidth; } obj.dvp_pyo = my_win.pageYOffset; obj.dvp_pxo = my_win.pageXOffset;  obj.dvp_manfh = '0'; var html_elem = document.getElementsByTagName('html'); if (html_elem.length > 0) { var manf = html_elem[0].getAttribute('manifest'); obj.dvp_manfh = manf ? manf : '0'; }  obj.dvp_meta = '0'; var metas = ['application-name','mobile-web-app-capable', 'apple-mobile-web-app-capable']; var meta_arr = document.getElementsByTagName('meta'); for(var i = 0; i < meta_arr.length; i++) { for(var j = 0; j < metas.length; j++) { if (meta_arr[i].hasAttribute(metas[j])) { obj.dvp_meta += ('_' + j); } } }  var dvp_manif = '0'; var link_arr = document.head.getElementsByTagName('link'); for(var i = 0; i < link_arr.length; i++) { if (link_arr[i].hasAttribute('rel') && link_arr[i].getAttribute('rel') == 'manifest') { dvp_manif = link_arr[i].getAttribute('href'); break; } }  var domElements = my_win.document.getElementsByTagName('*'); obj.dvp_fde = 0;  for (var i = 0; i < domElements.length || i <= 50; i++) {  if (domElements[i] && domElements[i].tagName) { var domElement = domElements[i].tagName.toLowerCase(); if (domElement != 'script' && domElement != 'html' && domElement != 'title' && domElement != 'head' && domElement != 'body' && domElement != 'style') { obj.dvp_fde++; } } }  tp_win.$dv.registerEventCall(tp_win.$uid, obj); } catch(e) {};    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 3393230},{name : 'plmt', value : 3393263}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var impId = '18c51cb43d6445ff850399c483b7eebb';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].set({"gmmod":{ gmp: 1,gmpv: 0, gmpvr: 0.474311, gmperr: 0.020746}});$dv.tags[$uid].set({is_projected_viewability: 1, projected_view_rate: 0.539766, projected_error_rate: 0.019441});$dv.tags[$uid].set({"uprjct": { up: 1,upv: 1, upvr: 0.509565, uperr: 0.021684 }});$dv.CommonData.deviceType = 1;function IVCallback(ViewAssureBootstrapper) {if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function'){ViewAssureBootstrapper({"protocol":"https://","serverSettings":{"protocol":"https://","templateVersion":"10","TKH":"-4101806397199019129"},"prjct": { p: 1,pv: 0, pvr: 0.539766, perr: 0.019441, fb: 1 }});}else{new dv_InViewService({"protocol":"https://"}).inViewManager();}};document.write('<scr' + 'ipt src="https://cdn.doubleverify.com/avs598.js" type="text/javascript"></scr' + 'ipt>');try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}