window.acxm=new function(){var a=[],b=document,c=window,d='//t.acxiom-online.com',e='256dd5d4e3d28eac0bbf1d1aaa04f278',f={},g=undefined,h=Math.round,i=Array.prototype,j=i.slice,k=i.join,l=String.prototype;if(!l.trim)l.trim=function(){return this.replace(/^\s+|\s+$/g,'');};function m(){for(var b=0,c;c=a[b];b++)try{c();}catch(d){n(d);}}function n(a){var f=arguments.callee.caller,g=f.name||f,h=encodeURIComponent,i=0,j=[],k=(c.navigator||'').plugins||[];while(k[i]){j.push(k[i].filename);i++;}r('img',d+'/err/'+e+'.gif?'+'l='+h(b.location)+'&f='+h(g)+'&p='+h(j.join(','))+'&e='+h(a)+'&z='+parseInt(Math.random(5)*1000)+'&s=at',!1,!0);}function o(a){try{var c=b.createElement(a);c.style.visibility='hidden';c.style.display='none';c.width=c.height=1;return c;}catch(a){}}function p(a){try{document.body.appendChild(a);}catch(c){try{b.documentElement.appendChild.call(b.body,a);}catch(c){}}}function q(a,b,c){var d=a.addEventListener,e=a.attachEvent;if(d)d.call(a,b,c,false);else if(e)e('on'+b,c);}function r(a,b,c,d){try{var e=o(a);if(e!==g){if(c&&a==='iframe'&&e.sandbox!==g)e.sandbox="allow-scripts allow-same-origin";if(a==='script'&&!e.async)e.async=1;e.src=b;p(e);}}catch(f){if(!d)n(f);}}function s(a){try{var c=o('div'),d=b.write,e=o('div'),f;p(e);b.write=function(a){e.innerHTML+=a;};c.innerHTML=a;f=c.getElementsByTagName('script');for(var g=0,h,i,j;(h=f[g]);g++){j=h.parentNode;i=o('script');if(h.src)i.src=h.src;else i.text=h.text||h.textContent||h.innerHTML||'';j.insertBefore(i,h);j.removeChild(h);}p(c);b.write=d;f=null;}catch(k){n(k);}}f.q=function(c){if(b.readyState==="complete")c();else a.push(c);};f.qo=function(a,b,c){var d=this;this.q(function(){r(a,b,c);});};f.qh=function(a){var b=this;this.q(function(){s(a);});};f.event=function(a,c){var f=encodeURIComponent;r('img',d+'/event/'+e+'.gif?'+'l='+f(b.location)+'&et='+f(c)+'&ei='+f(a||'')+'&z='+parseInt(Math.random(5)*1000));};(function(){q(c,"load",m);})();return{api:function(a){if({}.hasOwnProperty.call(f,a))f[a].apply(f,j.call(arguments,1));}};};acxm.api('qo','img','//rc.rlcdn.com/390576.gif');