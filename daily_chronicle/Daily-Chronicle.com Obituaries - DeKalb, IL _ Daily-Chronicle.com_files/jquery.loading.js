(function($){$.fn.loading=function(maxWait,interval){var elemSelector=this.selector;var retry=0;var defaultInterval=100;interval=interval||defaultInterval;var maxRetries=1;if(maxWait>interval){maxRetries=Math.floor(maxWait/interval);}
var deferred=$.Deferred();function checkElemLoaded(){retry++;var elem=$(elemSelector);var elemHasLoaded=elem.length>0;if(elemHasLoaded){clearInterval(timer);var loadTime=Math.floor(retry*interval*10/1000)/10;var msg="Element at '"+elemSelector+"' loaded in "+loadTime+" seconds.";deferred.resolve(elem,msg);}
else if(retry>=maxRetries){clearInterval(timer);var maxWaitSeconds=Math.floor(maxWait*10/1000)/10;deferred.reject(elem,"timeout: '"+elemSelector+"' failed to loaded within "+maxWaitSeconds+" seconds.");}}
var timer=setInterval(checkElemLoaded,interval);checkElemLoaded();return deferred.promise();}}(jQuery));