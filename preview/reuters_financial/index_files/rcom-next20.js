Reuters.namespace("n20s");Reuters.n20s.channel=null;
Reuters.n20s.init=function(a){Reuters.n20s.channel=a;Reuters.n20s.targetUrl="/news/archive/";if(Reuters.n20s.channel.search(" ")!=-1)Reuters.n20s.channel=Reuters.n20s.channel.replace(/ /gi,"-").toLowerCase(),Reuters.n20s.targetUrl="/topics/archive/";document.write('<a href="'+Reuters.n20s.targetUrl+Reuters.n20s.channel+'?view=page&page=2&pageSize=10"><div id="moreHeadlinesButtonSmall"></div></a><a href="'+Reuters.n20s.targetUrl+Reuters.n20s.channel+'?date=today"><div id="browseByDateButton"></div></a>')};