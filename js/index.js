/**
 * Created by Administrator on 2017/8/27.
 */
$(function(){

     //µ¼º½À¸µÄ¶¯»­
    $(window).scroll(function(){
            if($(document).scrollTop()>=60){
                $("nav").addClass("fixednav");
                $('nav .name').css({
                    lineHeight: '50px'
                });
                $('nav .nav li').css({
                    lineHeight: '50px'
                });
                $('nav .nav li a').css({
                    color: '#5b5b5b'
                });
                $('nav .min-nav span').css({
                    lineHeight: '50px',
                    height:'50px',
                    color:'black'
                });
                $('nav .min-nav-main').css({
                   top:'50px'
                    }
                );
            }else{
                $("nav").removeClass("fixednav");
                $('nav .name').css({
                    lineHeight: '80px'
                });
                $('nav .nav li').css({
                    lineHeight: '80px'
                });
                $('nav .nav li a').css({
                    color: '#e8eaec'
                });
                $('nav .min-nav span').css({
                    lineHeight: '80px',
                    height:'80px',
                    color:'white'
                });
                $('nav .min-nav-main').css({
                        top:'80px'
                    }
                );
            }
        });
    $('.min-nav span').on('click',function(){
        if($('.min-nav-main').css("display")=="none"){
            $('.min-nav-main').stop().slideDown("slow");
        }else{
            $('.min-nav-main').stop().slideUp("slow");
        }
    })

    $(window).load(function(){
        var $container = $('.grid');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.controls-portfolio li').click(function(){
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });





















});