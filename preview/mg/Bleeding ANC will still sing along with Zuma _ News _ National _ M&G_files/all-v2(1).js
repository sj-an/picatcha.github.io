!function(a,b,c){var d="cdn.teads.tv/media",e={V1:"//"+d+"/format/v1/all-v1.js",V2:"//"+d+"/format/v2/all-v2.js"},f=/^(inpicture|advideum-inpicture|footer|inboard|simple|outstream|inflow|maxbrand)$/,g=/^17572|19374|19502|19503|19593|19741|19742|20993|21076|21077|22313|26581|26582|19500|19501|28587|20405|20406|22268|22560|25074|26631|26632|26547|27593|28454|23364|23625|30768|24889|24890|29515|29516|27017|27019|31153|31154|31045|31052$/;try{if(!b||!b.length)throw"window._ttf must be an array";for(var h,i=0,j=b.length;j>i;i++)if(b[i]&&b[i].format&&b[i].pid)if(b[i].launched)a.console&&console.log("This format was already launched! "+b[i].format+":"+b[i].pid);else{h=b[i].format,pid=b[i].pid,b[i].mobile=!0,b[i].desktop=!0,b[i].fromVersion="cdn.teads.tv/js/all-v2.js",a._ttf=b;var k=f.test(h)||g.test(pid)?e.V1:e.V2;a.console&&console.log("Routing detected for "+pid+": "+h+" => "+k+" (mobile:"+b[i].mobile+")");var l="https:"==c.location.protocol?"https:":"http:";(a.teads=window.teads=a.teads||{}).CONST_PLAYER_PATH=l+"//"+d+"/player",function(){var a,b=c.getElementsByTagName("script")[0];a=c.createElement("script"),a.async=!0,a.src=l+k,b.parentNode.insertBefore(a,b)}()}else a.console&&console.log("window._ttf objects must have a 'format' and a 'pid' attribute")}catch(m){a.console&&console.error("Routing cannot be detect: "+m)}}(window.top,window._ttf||window.top._ttf,document);