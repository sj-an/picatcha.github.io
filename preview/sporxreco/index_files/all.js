﻿/**
 * Cropy - Crop Share Store
 * @version v1.11.8
 * @link http://www.cropyapp.com/
 * @contact info@cropyapp.com
 * @license Cropy 2015
 * @date - Thu Jan 26 2017 23:01:59 GMT+0300 (Turkey Standard Time)
 */
 /*!
   html2canvas 0.5.0-alpha1 <http://html2canvas.hertzen.com>
   Copyright (c) 2015 Niklas von Hertzen
   Released under MIT License
 */
 /*! modernizr 3.2.0 (Custom Build) | MIT */
 /*!
  * JavaScript Canvas to Blob
  * https://github.com/blueimp/JavaScript-Canvas-to-Blob
  *
  * Copyright 2012, Sebastian Tschan
  * https://blueimp.net
  *
  * Licensed under the MIT license:
  * http://www.opensource.org/licenses/MIT
  *
  * Based on stackoverflow user Stoive's code snippet:
  * http://stackoverflow.com/q/4998908
  */
 /*!
  * Cropper v0.11.1
  * https://github.com/fengyuanchen/cropperjs
  *
  * Copyright (c) 2015 Fengyuan Chen
  * Released under the MIT license
  *
  * Date: 2015-12-15T06:11:25.593Z
  */
function Language(lang){var __construct=function(){"undefined"==eval("typeof "+lang)&&(lang="tr")}();this.getStr=function(str,defaultStr){var retStr=eval("eval(lang)."+str);return"undefined"!=typeof retStr?retStr:"undefined"!=typeof defaultStr?defaultStr:eval("en."+str)}}function detectIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var a=e.indexOf("Trident/");if(a>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var i=e.indexOf("Edge/");return i>0&&parseInt(e.substring(i+5,e.indexOf(".",i)),10)}function loadScriptToBody(e,t){var a=!1,r=document.createElement("script");r.src=e,document.body.appendChild(r),r.onload=r.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,t(),r.onload=r.onreadystatechange=null)}}function isOperaMiniDataSavingModeEnable(){return/Opera Mini/i.test(window.navigator.userAgent)&&/Presto/i.test(window.navigator.userAgent)}function showOperaMiniDataSavingModeError(){isIos?alert(translator.getStr("operaMiniIOSDataSavingModeMessage")):alert(translator.getStr("operaMiniAndroidDataSavingModeMessage"))}function detectCropyApp(){console.log("detectCropyApp called..");var e=window.navigator.userAgent,t=e.indexOf("cropyapp");return console.log("User Agent : "+e),t>0}function showLoadingGif(){location.href.indexOf("ustmanset.com")>-1&&isMobile&&$(".codexkom").css("word-wrap","break-word"),location.href.indexOf("sporx.com")>-1&&isMobile&&$("#main").css("overflow-y","hidden");var e=document.createElement("div");e.setAttribute("class","crop-share-loading"),e.setAttribute("data-html2canvas-ignore",!0),e.appendChild(preloaderImgGif);var t=document.createElement("span");t.setAttribute("class","crop-share-loading-text"),t.innerHTML=translator.getStr("loadingTextNew"),isMobile&&e.appendChild(t),document.body.appendChild(e)}function closeLoadingGif(){document.querySelector(".crop-share-loading").style.display="none"}function openImageEditor(){if(isOperaMiniDataSavingModeEnable())return showOperaMiniDataSavingModeError(),!1;if(detectCropyApp()){var e=window.location.href+"#cropyapp";return console.log("Route URL: "+e),window.location.assign(e),!1}showLoadingGif();try{"function"==typeof startCropy?(console.info("whole.js already loaded..."),startCropy()):loadScriptToBody("https://img-trkcllcropy.mncdn.com/assets/scripts/whole.js?v1.11.8",function(){console.log("whole.js loaded..."),startCropy()})}catch(t){console.log(t),closeLoadingGif()}}var language=window.navigator.userLanguage||window.navigator.language;language.indexOf("tr")>-1&&(language="tr");var en={walkthrough1:"Click CROPY button to activate cropping.",walkthrough2:"Select the area you want to crop by adjusting corners and share it with your friends on the next page.",cropAreaOverlay:"Select the area you want to share.",crop:"Crop",save:"Save",email:"E-Mail",cloud:"lifebox",memory:"Save to Disk",memoryMobile:"Save to Phone",shared:"SHARED!",goOriginalPage:"Original page",saveCloud:"Save - lifebox",shareFriends:"Share with your friends",share:"Share",bip:"BiP",whatsup:"Whatsapp",cloudToolTip:"lifebox is a cloud service for storing photographs, music, videos and other types of files safely. Users can load their personal content from Android and iOS devices or from the web portal with manual or automatic synchronization.",loadingText:"Preparing Capture...",cropyFeedback:"Cropy%20Feedback",message:"Message",reachUs:"Contact Us",ietext:"Cropy supports Chrome, Safari, Firefox, Opera and Yandex browsers.",reshareCropyHeader:"Cropy%20Feedback",reshareCropyInfo:"For us to continously improve the experience on behalf of you, please message your feedback:",reshareCropyDefinition:"Cropy is the only tool that enables you to capture a porsion of your desktop, mobile or tablet screens and share with your friends via social media easily without downloading any application.",reshareCropyMoreInfo:"For more information on Cropy: http://cropy.com",sharePagePreSubjectText:"Easy share with Cropy: ",sharePagePreBodyText:'Your friend has shared the news headlined "',sharePagePostBodyText:'" with you via Cropy! ',unsupportedBrowserErrorMessage:"Please open this link in a different browser.",operaMiniAndroidDataSavingModeMessage:"In order to use Cropy, please disable Extreme Mode in your browser settings.",operaMiniIOSDataSavingModeMessage:"In order to use Cropy, please set your Data Savings as Opera Turbo in your browser settings.",cropyTitle:"Cropy - The newest and easiest way of sharing",loadingTextNew:"Your page will be ready, please wait.",image:"Image",editTimeoutMessage:"Edit Operation timeout. Please recrop again!",editErrorMessage:"An Error occured. Please try again later!",editSizeTextDrawThin:"Thin",editSizeTextDrawMedium:"Medium",editSizeTextDrawLarge:"Thick",editSizeTextTextThin:"Small",editSizeTextTextMedium:"Medium",editSizeTextTextLarge:"Large",editHeaderText:"Edit",editCapsPlaceholder:"Caps",editTextPlaceholder:"Text"},tr={walkthrough1:"Cropy butonuna basarak kesme işlemini etkinleştirin.",walkthrough2:"Sayfada kesmek istediğiniz alanı seçtikten sonra paylaş butonuna basarak yönlendireleceğiniz ekranda istediğiniz mecrada paylaşabilirsiniz.",cropAreaOverlay:"Paylaşmak istediğiniz alanı seçin.",crop:"KES",save:"KAYDET",email:"E-Posta",cloud:"lifebox",memory:"Bilgisayarıma Kaydet",memoryMobile:"Telefonuma Kaydet",shared:"PAYLAŞILDI!",goOriginalPage:"Orjinal sayfaya git",saveCloud:"lifebox'a kaydet",shareFriends:"Arkadaşlarınla paylaş",share:"Paylaş",bip:"BiP",whatsup:"Whatsapp",cloudToolTip:"Tüm doküman ve fotoğraflarınızı güvenle saklayabileceğiniz cep telefonu, tablet veya bilgisayar üzerinden erişilebilen depolama uygulamasıdır.",loadingText:"Ekran görüntüsü hazırlanıyor...",cropyFeedback:"Cropy%20Geri%20Bildirim",message:"Mesaj",reachUs:"Bize Ulaşın",ietext:"Cropy'i Chrome, Safari, Firefox, Opera ve Yandex tarayıcıları ile kullanabilirsiniz.",reshareCropyHeader:"Cropy%20Geri%20Bildirim",reshareCropyInfo:"Cropy ile ilgili talep, öneri ve şikayetlerinizi buraya yazabilirsiniz:",reshareCropyDefinition:"Cropy, ister bilgisayarınızdan ister cep telefonunuzdan veya tabletinizden , hiçbir uygulama yüklemeye gerek kalmadan, ekranınızdaki görüntü ve metnin dilediğiniz bölümünün görüntüsünü alıp mecralarda paylaşmanızı sağlayan tek araçtır.",reshareCropyMoreInfo:"Daha fazla bilgi için: http://cropy.com",sharePagePreSubjectText:"Cropy ile kolay paylaşım: ",sharePagePreBodyText:'Arkadaşınız size Cropy ile hazırladığı "',sharePagePostBodyText:'" başlıklı haberi gönderdi! ',unsupportedBrowserErrorMessage:"Lütfen bu bağlantıyı farklı bir tarayıcıda açınız.",operaMiniAndroidDataSavingModeMessage:"Cropy’yi kullanmak için tarayıcı ayarlarınızdan Aşırı Mod ayarınızı kapatınız.",operaMiniIOSDataSavingModeMessage:"Cropy’yi kullanmak için tarayıcı ayarlarınızın Veri Tasarrufu bölümünden Opera Turbo seçiniz.",cropyTitle:"Cropy - Paylaşımın en yeni ve kolay yolu",loadingTextNew:"Sayfanız hazırlanıyor, lütfen bekleyiniz.",image:"Resim",editTimeoutMessage:"Düzenleme yapmak için gereken süre aşılmıştır.\nLütfen yeniden crop işlemi yapınız.",editErrorMessage:"Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",editSizeTextDrawThin:"İnce",editSizeTextDrawMedium:"Orta",editSizeTextDrawLarge:"Kalın",editSizeTextTextThin:"Küçük",editSizeTextTextMedium:"Orta",editSizeTextTextLarge:"Büyük",editHeaderText:"Düzenle",editCapsPlaceholder:"Caps",editTextPlaceholder:"Yazınız"};if(language.indexOf("tr")>-1)var translator=new Language("tr");else var translator=new Language("en");var isMobile=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),window.isAndroid=/(android)/i.test(navigator.userAgent),window.isChrome=!(/(samsung)/i.test(navigator.userAgent)||/(version)/i.test(navigator.userAgent)||/(firefox)/i.test(navigator.userAgent)||/(opera)/i.test(navigator.userAgent)||/(opr)/i.test(navigator.userAgent)||/(YaBrowser)/i.test(navigator.userAgent)||/(Discovery)/i.test(navigator.userAgent)),window.isTurkcellT40=/(TURKCELL)/i.test(navigator.userAgent)&&/(T40)/i.test(navigator.userAgent);var isAndroidTablet=isAndroid&&navigator.userAgent.toLowerCase().search("mobile")==-1,isIos=/iphone|ipad/i.test(navigator.userAgent),isIphone=/iphone/i.test(navigator.userAgent),isIpad=/ipad/i.test(navigator.userAgent),preloaderImgGif=new Image;preloaderImgGif.setAttribute("data-html2canvas-ignore",!0),preloaderImgGif.onload=function(){console.log(preloaderImgGif)},preloaderImgGif.src="https://img-trkcllcropy.mncdn.com/assets/images/pre_loader.gif?v1.11.8",isMobile?$("html").addClass("cropy-mobile"):$("html").addClass("no-mobile");for(var cropyButton=document.querySelectorAll(".cropy-crop-share-button"),i=0,length1=cropyButton.length;i<length1;i++){var walkthroughOverlay=document.createElement("div");walkthroughOverlay.setAttribute("class","walkthrough-overlay"),cropyButton[i].parentNode.appendChild(walkthroughOverlay)}if(detectIE())for(var createInfoElement=function(){var e=document.createElement("DIV");e.style.width=.3*parseInt(document.documentElement.clientWidth)+"px",e.style.height=.3*parseInt(document.documentElement.clientHeight)+"px",e.style.border="1px solid rgb(0, 0, 0)",e.style.backgroundImage="url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACtCAYAAADCr/9DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY5MkNBNjlDREFBMTFFNUFBMjFCOTk3MEZGRjgzM0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY5MkNBNkFDREFBMTFFNUFBMjFCOTk3MEZGRjgzM0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjkyQ0E2N0NEQUExMUU1QUEyMUI5OTcwRkZGODMzQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjkyQ0E2OENEQUExMUU1QUEyMUI5OTcwRkZGODMzQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoV5newAAAKgSURBVHja7NyxbsIwGIXRuGSpSt//RanoQHGDgKFLoSoGrn0+KWJL4OckmCEp0zS9T7qmzbLVW++01uMuSymvy8tszJd7MQJBK0ErQStoJWglaAWtBK0EraCVoJWgFbQStBK0glaCVoJWglbQStBK0KqX7nGf/aaTWdXG+/98ks95eP7CanS0ddLlIZ2f2vFLpZSWb6EkgLU8UBxYaBUHFlrFgYUW2Diw0AK7Snzz0AILrYCFVsBCCyy0AhZaAQstsJ0FLbDQClhoBSy0wEIrYH+2hVZpYHfQClhogU0GCy2wcWChBTYOLLTAxoGFNknr8aEHw4OFFtg4sNACGwcWWmDjwEILbBxYaIGNAwstsHFgoQU2Diy0wMaBhRbYOLDQAhsHFtonMAsstMB2DhZaYOPAQgtsHFhogd0lDhFaYKEVsNACCyy0wEIrYKEFFlhoge0saIGNa162PWvA3rh960EL2IhqrZYHwFrTAgsstMACC22fDQUW2n/+LziB+QIWWnCBhbZDuMOChTYT7tBgoc2DOzxYaLPgAgttFNxtrRVYaGPgAgttFFxgoY2CCyy0UXCBhTYKLrDQRsEFFtoouMBCGwUXWGij4AL7x9zY+Gi9p5v1rvqySjErV1pZHkh36PCwjrfGx/gw5uFqYuq8PJpdbZX2Cw6snBEStBK0glaCVoJW0ErQStAKWglaCVpBK0ErQStoJWglaCVoBa0ErQStoJWglaAVtBK0ErSCVoJWglbQStBK0ErQCloJWglaQStBK0EraCVoJWgFrQStBK1Ga77DMUons6rNBlRKT3PqAu26gzntlm3b+MRe42h5IGglaCVoBa0ErQStoJWglaCVoBW0ErQStIJWglaCVtBK0ErQCloJWglaDda3AAMAvQvTtxIlgvcAAAAASUVORK5CYII=')",e.style.backgroundColor="rgb(255,255,255)",e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="173px 173px",e.style.backgroundPosition="center",e.style.boxSizing="border-box",e.style.overflow="hidden",e.style.display="table",e.style.textAlign="center",e.style.position="absolute",e.style.left="50%",e.style.top="50%",e.style.marginTop=-1*(.15*parseInt(document.documentElement.clientHeight))+"px",e.style.marginLeft=-1*(.15*parseInt(document.documentElement.clientWidth))+"px",e.setAttribute("class","cropy-ie-info");var t=document.createElement("p");return t.innerHTML=translator.getStr("ietext"),t.style.width=.3*parseInt(document.documentElement.clientWidth)-40+"px",t.style.textAlign="center",t.style.height="auto",t.style.display="table-cell",t.style.fontSize="18px",t.style.lineHeight="22px",t.style.fontWeight="bold",t.style.verticalAlign="middle",e.appendChild(t),e},walkthroughOverlays=document.querySelectorAll(".walkthrough-overlay"),i=0,length1=walkthroughOverlays.length;i<length1;i++){var thisInfoElement=createInfoElement();walkthroughOverlays[i].appendChild(thisInfoElement)}else for(var cropyButtonWrapper=null!=document.querySelector(".cropy-crop-share-button-wrapper")?document.querySelector(".cropy-crop-share-button-wrapper"):document.querySelector(".turkcell-crop-share-button-wrapper"),createWalkthroughImage=function(){var e=document.createElement("img");return e.src=language.indexOf("tr")>-1?"https://img-trkcllcropy.mncdn.com/assets/images/walkthrough.png?v1.11.8":"https://img-trkcllcropy.mncdn.com/assets/images/walkthrough-en.png?v1.11.8",e.setAttribute("class","walkthrough-image"),e},i=0;i<document.querySelectorAll(".walkthrough-overlay").length;i++){var wi=createWalkthroughImage();$(document.querySelectorAll(".walkthrough-overlay")[i]).append(wi)}isMobile||($("body").on("mouseover",".cropy-crop-share-button",function(){for(var e=$(this).parents(),t=0;t<e.length;t++)0!==t&&"HTML"!==e[t].nodeName&&"BODY"!==e[t].nodeName&&"auto"!==$(e[t]).css("zIndex")&&parseInt($(e[t]).css("zIndex"))<=99999991&&($(e[t]).css("zIndex",99999992),$(e[t]).attr("data-cropy-over",!0));$(this).css("zIndex",2147483646);var a=$(this).parent().find(".walkthrough-overlay");a.css("zIndex",2147483645),a.show();var r=a.find(".walkthrough-image");if(r.css({display:"block"}),detectIE()){var i={width:.3*parseInt(document.documentElement.clientWidth),height:.3*parseInt(document.documentElement.clientHeight)},o=$(this).get(0).getBoundingClientRect();document.documentElement.clientHeight/2>=o.top+o.height?($(".cropy-ie-info").css({top:o.top+o.height+10,marginTop:0}),document.documentElement.clientHeight/2-i.height/2>o.top+o.height&&$(".cropy-ie-info").css({top:.5*parseInt(document.documentElement.clientHeight),marginTop:-1*(.15*parseInt(document.documentElement.clientHeight))+"px"})):document.documentElement.clientHeight/2<o.top+o.height?$(".cropy-ie-info").css({top:o.top-i.height-10,marginTop:0}):document.documentElement.clientHeight/2-i.height/2>o.top+o.height&&$(".cropy-ie-info").css({top:.5*parseInt(document.documentElement.clientHeight),marginTop:-1*(.15*parseInt(document.documentElement.clientHeight))+"px"})}else{var n=r[0].getBoundingClientRect(),o=$(this)[0].getBoundingClientRect();document.documentElement.clientHeight/2>=o.top+o.height?(r.css({top:o.top+o.height+10,marginTop:0}),document.documentElement.clientHeight/2-n.height/2>o.top+o.height&&r.css({top:"50%",marginTop:"-87px"})):document.documentElement.clientHeight/2<o.top+o.height?r.css({top:o.top-n.height-10,marginTop:0}):document.documentElement.clientHeight/2-n.height/2>o.top+o.height&&r.css({top:"50%",marginTop:"-87px"})}}),$("body").on("mouseout",".cropy-crop-share-button",function(){for(var e=$(this).parents(),t=0;t<e.length;t++)0!==t&&"HTML"!==e[t].nodeName&&"BODY"!==e[t].nodeName&&"undefined"!=typeof $(e[t]).attr("data-cropy-over")&&($(e[t]).css("zIndex",""),$(e[t]).removeAttr("data-cropy-over"));$(this).css("zIndex","");var a=$(this).parent().find(".walkthrough-overlay");a.css("zIndex",""),a.hide(),a.find(".walkthrough-image").css({display:"none"})}));