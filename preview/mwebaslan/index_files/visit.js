try{window.parent._dv_win['dvCallback_1485553448289725']($dv,window,'0765f86318864ef0853e0bdb7d7b4caf','tps11019.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.ViewabilityScriptVersion = 646;$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].set({"bgm":1});$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});var newAvoValues = {};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;var impId = '0765f86318864ef0853e0bdb7d7b4caf';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'MobileHWData', function () { try {try {var hwData = {};var addField=function(name,value) { hwData[name]=value;};var addFieldDVP = function(name,value) { addField('dvp_' + name,value);};var sendHWData = function() { temp = hwData; hwData = { }; dvObj.registerEventCall(impId, temp, 2000, true); };var dataSender = function(dataMask,useDVP) {try {var addFieldFunc=(useDVP?addFieldDVP:addField);if(navigator) {if ((dataMask&1)==1 && navigator.connection && navigator.connection.type) addFieldFunc('JSConn',navigator.connection.type);if ((dataMask&2)==2 && navigator.hardwareConcurrency) addFieldFunc('hwConcu',navigator.hardwareConcurrency);try {if((dataMask&12)>0 && navigator.getBattery) navigator.getBattery().then(function(battery) {if((dataMask&4)==4) addFieldFunc('hwBattLvl',battery.level);if((dataMask&8)==8) addFieldFunc('hwBattChrg',battery.charging);sendHWData();});}catch(e) {}if((dataMask&16)==16 && navigator.platform) addFieldFunc('pltfrm',navigator.platform);}if ((dataMask&480)>0 && window.addEventListener) {wasTchCalled=false;function dvTouchRadius(event) {if(wasTchCalled) return;wasTchCalled=true;try {if((dataMask&32)==32) addFieldFunc('tchH',1);if(event && (dataMask&448)>0 && event.changedTouches && event.changedTouches[0]) {c = event.changedTouches[0];var ellipse = ((c.radiusX && c.radiusX.toFixed(4)) || -1) + ',' + ((c.radiusY && c.radiusY.toFixed(4)) || -1) + ',' + ((c.rotationAngle && c.rotationAngle.toFixed(4)) || 'none');var pos = ((c.pageX && c.pageX.toFixed(4)) || -1) + ',' + ((c.pageY && c.pageY.toFixed(4)) || -1);var morePos = ((c.screenX && c.screenX.toFixed(4)) || -1) + ',' + ((c.screenY && c.screenY.toFixed(4)) || -1);if((dataMask & 64) == 64) addFieldFunc('tEll',ellipse);if((dataMask & 128) == 128) addFieldFunc('tchPos',pos);if((dataMask & 256) == 256) addFieldFunc('tchMPos',morePos);}sendHWData();window.parent.removeEventListener('touchstart', dvTouchRadius,false);}catch(e) {}};window.parent.addEventListener('touchstart',dvTouchRadius);}sendHWData();}catch(e) {}};dataSender(1,false);}catch(e) {}} catch (e) {}; });$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 3177253, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 607671, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 3966307, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 1167, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 363359, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 95317598169, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
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
                    comparisonItems : [{name : 'cmp', value : 3177253},{name : 'plmt', value : 3966307}], verboseReporting : false  }
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
        });var impId = '0765f86318864ef0853e0bdb7d7b4caf';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });$dv.CommonData.deviceType = 2;$dv.CommonData.detectedDeliveryType = 2;function IVCallback(ViewAssureBootstrapper) {    if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function') {       ViewAssureBootstrapper({ 'serverSettings': { 'protocol': 'https://', 'templateVersion': '11', 'TKH': '-9029709152795811851' } });   } else {       new dv_InViewService({ 'protocol': 'https://' }).inViewManager();     }};$dv.pubSub.subscribe('ImpressionServed', $uid, 'createVersionSelector', function () {var version = $dv.ViewabilityScriptVersion;if(!version) return;if($dv.ViewabilityScriptVersion2 && Math.random()*100 < 50) {   var version = $dv.ViewabilityScriptVersion2; } var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://cdn.doubleverify.com/avs' + version + '.js'; document.body.appendChild(script);});var impId = '0765f86318864ef0853e0bdb7d7b4caf';var dvObj = $dv;var isLogToDvp = false;var isTpImp = dvObj == window.$dv;var rtnName = isTpImp ? 'ImpressionServed' : 'BeforeDecisionRender';var eventStr = isTpImp ? 'event' : 'bsevent'; var contextWin = isTpImp ? parent : window;dvObj.pubSub.subscribe(rtnName, impId, 'CLIP_RTN', function () {function h(a){function f(b){setTimeout(function(){for(var c=b.localDescription.sdp.split("\n"),a=0;a<c.length;++a)0===c[a].indexOf("a=candidate:")&&g(c[a])},1E3)}function g(b){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(b)[1],b=/(host)/.exec(b)[1];void 0===e[c]&&"host"===b&&(b={},b[!0===isLogToDvp?"dvp_lip":"lip"]=c,a(null,b));e[c]=!0}var e={};(function(){var b=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(b){var c={optional:[{RtpDataChannels:!0}]},e={iceServers:[]};try{var d=new b(e,c);d.b=function(a){a.a&&g(a.a.a)};d.createDataChannel("");d.createOffer(function(a){d.setLocalDescription(a,function(){},function(){});f(d)},function(b){a({dvp_liperr:("createOffer_failed: "+b.message).slice(0,100)},null)})}catch(i){a({dvp_liperr:("createOffer_failed: "+i.message).slice(0,100)},null)}}else a({dvp_lipdis:"1"},null)})()}try{h(function(a,f){dvObj.registerEventCall(impId,null===a?f:a)})}catch(j){};});var impId = '0765f86318864ef0853e0bdb7d7b4caf';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'SenseTag_RTN', function () { try {var maxTimesToSend=2;var avgX=0,avgY=0,avgZ=0,avgX2=0,avgY2=0,avgZ2=0,countAcc=0,accInterval=0;function dvDoMotion(){   try {       if (maxTimesToSend<=0) {           window.removeEventListener('devicemotion', dvDoMotion,false);           return;           }	    var motionData=event.accelerationIncludingGravity;	    if ((motionData.x) || (motionData.y) || (motionData.z)) {           var isError=0;           var x = 0;           if (motionData.x) x=motionData.x;           else isError+=1;           var y = 0;           if (motionData.y) y=motionData.y;           else isError+=1;           var z = 0;           if (motionData.z) z=motionData.z;           else isError+=1;	    	avgX = ((avgX * countAcc)+ x)/(countAcc+1);	    	avgX2 = ((avgX2 * countAcc)+(x * x))/(countAcc+1);	    	avgY = ((avgY * countAcc)+y)/(countAcc+1);	    	avgY2 = ((avgY2 * countAcc)+(y * y))/(countAcc+1);	    	avgZ = ((avgZ * countAcc)+z)/(countAcc+1);	    	avgZ2 = ((avgZ2 * countAcc)+(z * z))/(countAcc+1);	    	countAcc++;           accInterval = event.interval;	    	if(countAcc%400==1) {               maxTimesToSend--;               sensorObj={};	    		sensorObj['MED_AMtX']=Math.max(Math.min(avgX,10000),-10000).toFixed(7);	    		sensorObj['MED_AMtY']=Math.max(Math.min(avgY,10000),-10000).toFixed(7);	    		sensorObj['MED_AMtZ']=Math.max(Math.min(avgZ,10000),-10000).toFixed(7);	    		sensorObj['MED_AVrX']=Math.max(Math.min((avgX2-avgX*avgX),10000),-10000).toFixed(7);	    		sensorObj['MED_AVrY']=Math.max(Math.min((avgY2-avgY*avgY),10000),-10000).toFixed(7);	    		sensorObj['MED_AVrZ']=Math.max(Math.min((avgZ2-avgZ*avgZ),10000),-10000).toFixed(7);	    		sensorObj['MED_ANum']=countAcc;	    		sensorObj['MED_AInterval']=accInterval;	    		dvObj.registerEventCall(impId,sensorObj,2000,true);	    	}	    }   } catch(e) {}}setTimeout(function() {   try {      if(window.addEventListener==undefined) return;      window.addEventListener('devicemotion', dvDoMotion);    }   catch(e) {};}, 3000);} catch (e) {}; });try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}