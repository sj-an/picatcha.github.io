jQuery(document).ready(function(i){"use strict";i(".tabber-contain").each(function(){i(this).find(".tabber-content").hide(),i(this).find("ul.tabs li:first").addClass("active").show(),i(this).find(".tabber-content:first").show()}),i("ul.tabs li").click(function(t){i(this).parents(".tabber-contain").find("ul.tabs li").removeClass("active"),i(this).addClass("active"),i(this).parents(".tabber-contain").find(".tabber-content").hide();var n=i(this).find("a").attr("href");i(this).parents(".tabber-contain").find(n).fadeIn(),t.preventDefault()}),i("ul.tabs li a").click(function(i){i.preventDefault()}),i(".fly-but-wrap").on("click",function(){i("#fly-wrap").toggleClass("fly-menu"),i("#wallpaper").toggleClass("fly-content"),i("#nav-wrap").toggleClass("main-nav-over"),i("#head-wrap").toggleClass("fly-content"),i("#content-wrapper").toggleClass("fly-content"),i(".fly-but-wrap").toggleClass("fly-open"),i(".fly-fade").toggleClass("fly-fade-trans")}),i(window).load(function(){var t=i("#head-wrap").outerHeight();i(window).scroll(function(){i(window).scrollTop()>t?(i("#sidebar-widget-in").niceScroll({cursorcolor:"#bbb",cursorwidth:7,cursorborder:0}),i("#sidebar-widget-in").getNiceScroll().resize(),i("#sidebar-contain").addClass("side-fixed")):i("#sidebar-contain").removeClass("side-fixed")}),i(window).scroll(function(){i(window).scrollTop()>t?i("#post-social-wrap").addClass("social-fixed"):i("#post-social-wrap").removeClass("social-fixed")})}),i("#mobile-nav select").change(function(){window.location=i(this).find("option:selected").val()}),i("#social-nav").click(function(){i("#social-dropdown").slideToggle()}),i("#search-button").click(function(){i("#search-bar").slideToggle()}),i(".comment-click").click(function(){i("#comments").show(),i("#comments-button").hide()}),i(".mobi-tab-but").click(function(){i("#sidebar-main-wrap").toggle(),i("#sidebar-main-wrap").niceScroll({cursorcolor:"#bbb",cursorwidth:7,cursorborder:0})}),i(window).scroll(function(){i(window).width()>1002&&i("#sidebar-main-wrap").css("display","block")})});
