function sliderMain(){$(".box_slider").slick({dots:!1,infinite:!0,speed:500,fade:!0,arrows:!1,cssEase:"linear",pauseOnHover:!1,autoplay:!0,autoplaySpeed:4e3})}function showScrollTop(){var o=$(window).scrollTop();o>=400&&$(".img_gotop").addClass("show"),o<400&&$(".img_gotop").removeClass("show")}function scrollToTop(){$(".img_gotop a").click(function(){$("html, body").animate({scrollTop:0},"medium")})}function addFixedMenu(){var o=$(window).scrollTop();o>=200&&$(".con_menu").addClass("fixed"),o<200&&$(".con_menu").removeClass("fixed")}function closePopupSuccess(){$(".btn_ok a").click(function(){$(".con_popup_success").fadeOut()})}function addClassMenuHaveSub(){$(".box_small_menu_sp .sp-menu .menu-item-has-children .sub-menu").before('<span class="js_toggle"><i class="ion-ios-plus-empty"></i></span>'),$(".box_small_menu_sp .sp-menu .js_toggle").click(function(){var o=$(this).next();o.is(":animated")||o.slideToggle(300).prev().toggleClass("active"),$(this).hasClass("active")?$(this).html('<i class="ion-ios-minus-empty"></i>'):$(this).html('<i class="ion-ios-plus-empty"></i>')})}function fixedSidebar(){if(0<$(".con_product_single").length&&0<$(".box_sidebar").length){var o=$(".con_product_single").offset().top,s=$(".con_product_single").offset().top+$(".con_product_single").height()-$(".box_sidebar").height();$(this).scrollTop()>=s?$(".box_sidebar").css({position:"absolute",top:$(".con_product_single").height()-$(".box_sidebar").height()}):$(this).scrollTop()>=o?$(".box_sidebar").css({position:"fixed",top:"55px","max-width":"288px",width:"100%"}):$(".box_sidebar").removeAttr("style"),$(this).width()<=768&&$(".box_sidebar").removeAttr("style")}}$(function(){sliderMain(),scrollToTop(),closePopupSuccess(),addClassMenuHaveSub(),$w.on({scroll:function(){showScrollTop(),addFixedMenu(),fixedSidebar()}}).superResize({loadAction:!1,resizeAfter:function(){}}).firstLoad({pc:function(){},tab_sp:function(){$(".box_menu_sp > ul > li > a").click(function(){return $(this).next().slideToggle(),!1}),$(".box_open_menusp").click(function(){$(".box_menu_sp").toggleClass("show")}),$(".box_close_menusp").click(function(){$(".box_menu_sp").removeClass("show")})}})}),$w.on({load:function(){}});