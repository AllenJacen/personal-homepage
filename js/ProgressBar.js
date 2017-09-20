/* Created by Administrator on 2017/9/17. */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4',
        jquerySvg:'jquery.svg.min',
        Svgdom:'jquery.svgdom.min'
    },
    shim: {
        'jquerySvg': {
            deps: ['jquery'],
            exports: 'svg'
        },
        'Svgdom': {
            deps: ['jquery','jquerySvg'],
            exports: 'Sdom'
        }
    }
});
define(['jquery','jquerySvg','Svgdom'],function($,svg,Sdom){
    function ProgressBar(setting){
        this.defaultsetting={
            selecter: document.body,
            height:150,
            width:110,
            cx:55,
            cy:55,
            r:50,
            fill:'none',
            stroke1:'white',
            stroke2:'#2c3e50',
            strokeWidth:10,
            strokeLinecap:'round',
            strokedasharray:'0,10000',
            value:'20'
        };
        $.extend(this.defaultsetting,setting);
        $(this.defaultsetting.selecter).svg();
        this.svg= $(this.defaultsetting.selecter).svg('get');
    }
    ProgressBar.prototype.init=function(){
        var circleLength = Math.floor(2 * Math.PI * this.defaultsetting.r);
        var val = parseFloat(this.defaultsetting.value).toFixed(2);
        val = Math.max(0,val);
        val = Math.min(100,val);
        var v=circleLength * val / 100;
        var vuls=v+',10000';
        console.log(vuls);
        this.defaultsetting.strokedasharray=vuls;
        this.svg.circle(this.defaultsetting.cx,this.defaultsetting.cy,this.defaultsetting.r,{
            class:'demo1',
            fill:this.defaultsetting.fill,
            stroke:this.defaultsetting.stroke1,
            strokeWidth:this.defaultsetting.strokeWidth,
            strokeLinecap:this.defaultsetting.strokeLinecap
        });
        this.svg.circle(this.defaultsetting.cx,this.defaultsetting.cy,this.defaultsetting.r,{
            class:'demo2',
            fill:this.defaultsetting.fill,
            stroke:this.defaultsetting.stroke2,
            strokeWidth:this.defaultsetting.strokeWidth,
            strokeDashArray:this.defaultsetting.strokedasharray
        });
    };
    return ProgressBar;
});