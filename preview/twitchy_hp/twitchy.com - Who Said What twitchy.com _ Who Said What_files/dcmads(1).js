(function(){var b=(function(a){try{for(var h=null;h!=a;h=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(G){}return!0}(this)?"https":"http")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";var c={b:1,a:2};try{window.dcmads=window.dcmads||{};window.dcmads.startTime=(new Date).getTime();var d=window.dcmads,e=window.dcmads.version,f={loader:56};if(e)if(f.experiment=e.experiment,22==e.number||"p"==e.number)f.number=22;else if(22==e.number||"c"==e.number)f.number=22;if(!f.number){var g;a:{var k=[22,22];if(!(1E-4>Math.random())){var l=Math.random();if(0>l){var m=window;try{var n=new Uint32Array(1);m.crypto.getRandomValues(n);l=n[0]/65536/65536}catch(a){l=Math.random()}g=k[Math.floor(l*k.length)];break a}}g=
null}f.experiment=!!g;f.number=g||22}d.version=f;var p=window.dcmads,q;var r=window.dcmads.expts,t;b:{var u=typeof r;if("object"==u&&null!=r||"function"==u){for(var v in c){var w=r[c[v]];if("number"!=typeof w||0>w||1<w){t=!1;break b}}t=!0}else t=!1}q=t?r:r={1:.5,2:.1};p.expts=q;var x=window.dcmads.version,y=x.number,z="";x.experiment&&22==y&&(z="?rxp=22x22");document.write('<script src="'+(("file:"==document.location.protocol?"http:":"")+"//www.googletagservices.com/dcm/"+("impl_v"+y+".js"+z))+'">\x3c/script>')}catch(a){if(.1>
Math.random()){var A="&msg=";try{var B,C=a.toString();a.name&&-1==C.indexOf(a.name)&&(C+=": "+a.name);a.message&&-1==C.indexOf(a.message)&&(C+=": "+a.message);if(a.stack){var D=a.stack,E=C;try{-1==D.indexOf(E)&&(D=E+"\n"+D);for(var F;D!=F;)F=D,D=D.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");C=D.replace(/\n */g,"\n")}catch(h){C=E}}B=C;B=B.substring(0,1024);A+=encodeURIComponent(B)}catch(h){A+="extr"}document.write('<img style="display:none" src="'+(b+("dcmads-err&ver=56&context=dcm.load"+
A))+'"></img>')}};})();