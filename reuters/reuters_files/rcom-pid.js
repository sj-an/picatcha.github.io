Reuters.namespace("pid");Reuters.pid.allowedPIDs=",100,101,200,300,400,500,600,666,700,800,801,900,";
Reuters.pid.initialize=function(){this.pidCodeQ=Reuters.utils.getQueryStringParameter(location.href,"pid");trace("pidCodeQ: "+this.pidCodeQ);if(Reuters.lang.isEmpty(this.pidCodeQ))this.pidCodeQ=Reuters.utils.getQueryStringParameter(location.href,"PID");trace("pidCodeQ: "+this.pidCodeQ);Reuters.lang.isNotEmpty(this.pidCodeQ)&&(Reuters.pid.allowedPIDs.indexOf(","+this.pidCodeQ+",")>-1?(trace("setting pid cookie to "+this.pidCodeQ),YAHOO.util.Cookie.set("pid",this.pidCodeQ,{path:"/"})):(trace("removing pid cookie"),
YAHOO.util.Cookie.remove("pid")));this.pidCode=YAHOO.util.Cookie.get("pid");trace("pidCode: "+this.pidCode);if(Reuters.lang.isNotEmpty(this.pidCode))Reuters.NO_TNS=true,this.pidCode!="801"&&this.pidCode!="901"&&document.write('<link href="/resources_v2/css/rcom-pid.css" rel="stylesheet" />'),this.pidCode!="901"?hideAllAds=true:(hideGoogleAds=true,hideAllAds=false)};Reuters.pid.initialize();