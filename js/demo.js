var bg1 = document.querySelector("#J_bg2_1");
var bg2 = document.querySelector("#J_bg2_2");
var btn1 = document.querySelector("#J_btn_1");
var btn2 = document.querySelector("#J_btn_2");
window.onload = rotateCircle;

btn2.onclick = rotateCircle;
function rotateCircle () {
    var val = parseFloat(btn1.value).toFixed(2);
    val = Math.max(0,val);
    val = Math.min(100,val);
    if (val <= 50){
        bg2.style.transform = "rotate(" + 180 * val * 2 / 100 + "deg)";
        bg2.style.borderColor = "grey grey grey transparent";
        bg1.style.transform = "rotate(0deg)";
    }else{
        bg2.style.transform = "rotate(0deg)";
        bg2.style.borderColor = "red red red transparent";
        bg1.style.transform = "rotate(" + 180 * (val - 50) * 2 / 100 + "deg)";
    }
}/**
 * Created by Administrator on 2017/9/16.
 */
