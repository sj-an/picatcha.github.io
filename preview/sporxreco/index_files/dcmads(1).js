(function(){var b=this;var d=function(a,c){if(!(1E-4>Math.random())){var h=Math.random();if(h<c){c=window;try{var x=new Uint32Array(1);c.crypto.getRandomValues(x);h=x[0]/65536/65536}catch(O){h=Math.random()}return a[Math.floor(h*a.length)]}}return null};(function(){var a=!1;try{var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,c)}catch(h){}return a})();var e=function(a){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(h){}return!0}(b)?"https:":"http:";var f={f:1,c:4},g={b:"40004006",a:"40004007"};var k=b.document,l=function(){var a=b.dcmads;return void 0!==a.eids?a.eids:b==b.top&&k.currentScript&&"srcdoc"in k.createElement("iframe")?(a=d([g.b,g.a],a.expts[4]))?"4|"+a:"":""};try{b.dcmads=b.dcmads||{};b.dcmads.startTime=(new Date).getTime();var m=b.dcmads,n=b.dcmads.version,p={loader:97};if(n)if(p.experiment=n.experiment,37==n.number||"p"==n.number)p.number=37;else if(37==n.number||"c"==n.number)p.number=37;if(!p.number){var q=d([37,37],0);p.experiment=!!q;p.number=q||37}m.version=p;var r=b.dcmads,t;var u=b.dcmads.expts,v;b:{var w=typeof u;if("object"==w&&null!=u||"function"==w){for(var y in f){var z=u[f[y]];if("number"!=typeof z||0>z||1<z){v=!1;break b}}v=!0}else v=!1}t=
v?u:u={1:.5,4:.005};r.expts=t;b.dcmads.eids=l();var A,B=b.dcmads.version,C=B.number,D="";B.experiment&&37==C&&(D="?rxp=37x37");var E;if(!(E=k.currentScript)){var F=k.getElementsByTagName("script");E=F[F.length-1]}var G=E;A=(0==(G&&G.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+("impl_v"+C+".js"+D);if(b.dcmads.eids=="4|"+g.a){var H=k.createElement("script");H.src=A;k.currentScript.parentNode.appendChild(H)}else k.write('<script src="'+A+'">\x3c/script>')}catch(a){if(.01>
Math.random()){var I="&msg=";try{var J,K=a.toString();a.name&&-1==K.indexOf(a.name)&&(K+=": "+a.name);a.message&&-1==K.indexOf(a.message)&&(K+=": "+a.message);if(a.stack){var L=a.stack,M=K;try{-1==L.indexOf(M)&&(L=M+"\n"+L);for(var N;L!=N;)N=L,L=L.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");K=L.replace(/\n */g,"\n")}catch(c){K=M}}J=K;J=J.substring(0,1024);I+=encodeURIComponent(J)}catch(c){I+="extr"}k.write('<img style="display:none" src="'+(e+"//pagead2.googlesyndication.com/pagead/gen_204?id="+
("dcmads-err&ver=97&context=dcm.load"+I))+'"></img>')}};}).call(this);
