(function(){
  var current = {hash:'c4cadaa3dac058e59301a3e52e1bcca0c48df847',functions:dimml.functions('c4cadaa3dac058e59301a3e52e1bcca0c48df847'),base:'//baltar.dimml.io'};
  var fGetGemiusCount = current.functions.fGetGemiusCount = function(){
	try {
		var res = "0";	// Fail unless below criteria hold:
		if ( typeof( window.pp_gemius_cnt ) !== "undefined" ) {
			res = window.pp_gemius_cnt;
		} else if ( typeof window.gemius_hcconn !== "undefined" ) {
			res = "1"; // Succeed if gemius_hcconn exists
		}
		return res;
	} catch(e) {
		return "error";
	}
};
  (function(){dimml.safe(function(){if(typeof current.dataCallback==='undefined'){current.dataCallback=[];}if(typeof current.data==='undefined'){current.data={};}if(typeof current.scriptName==='undefined'){current.scriptName='flow';}dimml.ready(function(){try{current.data['clientId']=String('2');}catch(e){current.data['clientId']='';}try{current.data['dom']=String(window.location.hostname.toLowerCase());}catch(e){current.data['dom']='';}try{current.data['url']=String(window.location.href.toString().substring(0,712));}catch(e){current.data['url']='';}try{current.data['gemius_sent_once']=String(fGetGemiusCount());}catch(e){current.data['gemius_sent_once']='';}setTimeout(function(){var extra=dimml.extraData[current.hash];if(extra)dimml._.extend(current.data,extra.pop());dimml._.each(current.dataCallback,function(callback){callback();});if(current.scriptName)dimml.send(current.data,current.scriptName+'/'+dimml.rnd4(),null,current.hash,current.base);},0);});});})();
})();