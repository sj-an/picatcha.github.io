/*! realtor-widget:0.0.1 2014-12-23 */
var widget_id='realtor-widget,0.0.1';"use strict";var articles=[{title:"Top 10 Hot Housing Markets to Watch in 2015",url:"http://www.realtor.com/news/top-10-hot-housing-markets-watch-2015/",img:move_code_root+"/images/articles/markets2.jpg"},{title:"Still Looking to Refinance? Better Act Fast",url:"http://www.realtor.com/news/still-looking-refinance-better-act-fast/",img:move_code_root+"/images/articles/refi4.jpg"},{title:"Should I Use a Lender or a Mortgage Broker?",url:"http://www.realtor.com/advice/difference-lender-mortgage-broker/",img:move_code_root+"/images/articles/should_i.jpg"}],numberWithCommas=function(a){return"$"+a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},widgetId="undefined"==typeof widgetId?"newscorpwidget,dev":widgetId;"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d});var geoData=move_dfp_geo.split("&").reduce(function(a,b){var c=b.split("=");return a[c[0]]=c[1],a},{});$(document).ready(function(){for(var a=0;a<articles.length;a++){var b=articles[a],c='<ul class="home">';c+='<a class="picture" href="'+move_click_url_root+b.url+"?scid="+scid+'" target="_blank"><img src="'+b.img+'" width="80" height="60"></a>',c+='<a href="'+move_click_url_root+b.url+"?scid="+scid+'" target="_blank"><span class="price">'+b.title+"</span></a>",c+="</ul>",$("ul#articles").append(c)}});