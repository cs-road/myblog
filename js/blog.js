function sreenSizeControl(){$(".contentsizeicon").bind("click",function(){$(this).hasClass("fullscreen")?($(".sidebar").removeClass("hidesidebar"),$(".fullnavafterclick").addClass("fullnav"),$(".fullnav").removeClass("fullnavafterclick"),$(this).removeClass("fullscreen")):($("body").hasClass("mobile")&&($("#"+targetli).removeClass("active"),$("#article-category .post-list").hide(),targetli=null),$(".sidebar").addClass("hidesidebar"),$(".fullnav").addClass("fullnavafterclick"),$(".fullnav").removeClass("fullnav"),$(".fullnavafterclick").addClass("fullscreen"))})}var targetli=null;window.onload=function(){var l=function e(){return $(window).width()<=768?($("body").addClass("mobile"),$("body").removeClass("pc"),$(".mobile li").removeClass("active"),$(".post-list").css("display","none"),$(".mobile .post-list").bind("click",function(l){$("#"+targetli).removeClass("active"),$("#article-category .post-list").hide(),targetli=null})):($("body").addClass("pc"),$("body").removeClass("mobile"),$(".post-list").css("display","block"),$(".post-list").unbind("click")),e}();$("body").css("display","block"),sreenSizeControl(),$("#article-category ul").bind("click",function(l){$("body").hasClass("mobile")&&"li"==l.target.tagName.toLowerCase()&&(null===targetli||l.target.id!=targetli?($("#"+targetli).removeClass("active"),$("#"+$(l.target).attr("id")).addClass("active"),$("#article-category .post-list").hide(),$("#"+$(l.target).attr("id")+" .post-list").delay(50).show(),targetli=$(l.target).attr("id")):($("#"+targetli).removeClass("active"),$("#article-category .post-list").hide(),targetli=null))}),$(window).resize(l)};
//# sourceMappingURL=blog.js.map