/**
 * Created by Administrator on 2017/9/24.
 */
$(document).ready(function() {
    $(".nav>ul>li").click(function() {
        $("html, body").animate({
            scrollTop: $('#'+this.innerHTML).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });
    $(".min-nav-main>ul>li").click(function() {
        /* console.log(this.innerHTML);
         console.log($('#'+this.innerHTML));*/
        $("html, body").animate({
            scrollTop: $('#'+this.innerHTML).offset().top + "px"
        }, {
            duration: 800,
            easing: "swing"
        });
        $(".min-nav-main").css('display','none');
    });
});
