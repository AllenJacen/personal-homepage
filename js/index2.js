/**
 * Created by Administrator on 2017/8/30.
 */
//Ò³ÄÚ¶¨Î»
var oNav=document.getElementsByClassName('nav')[0];
var oUl=oNav.getElementsByTagName('ul')[0];
var aLi=oUl.getElementsByTagName("li");
var oNav2=document.getElementsByClassName('min-nav-main')[0];
var oUl2=oNav2.getElementsByTagName('ul')[0];
var aLi2=oUl2.getElementsByTagName("li");
for(var i=0;i<aLi.length;i++){
    aLi[i].onclick=function(){
        document.getElementById(this.innerHTML).scrollIntoView();
    };
}
for(var i=0;i<aLi2.length;i++){
    aLi2[i].onclick=function(){
        document.getElementById(this.innerHTML).scrollIntoView();
    };
}
/*var demo2 =  document.querySelector("#J_demo2");

var circleLength = Math.floor(2 * Math.PI * demo2.getAttribute("r"));
window.onload = rotateCircle(20);
function rotateCircle (value) {
    var val = parseFloat(value).toFixed(2);
    val = Math.max(0,val);
    val = Math.min(100,val);
    demo2.setAttribute("stroke-dasharray","" + circleLength * val / 100 + ",10000");
}*/
