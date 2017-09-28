/**
 * Created by Administrator on 2017/9/17.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4.min'
    }
});
require(['jquery','ProgressBar'],function($,ProgressBar){
    var setting1={
        selecter:'section#SKILLS .skill #skill1',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'88'
    };
    var probar1=new ProgressBar(setting1);
    probar1.init();
    var setting2={
        selecter:'section#SKILLS .skill #skill2',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'70'
    };
    var probar2=new ProgressBar(setting2);
    probar2.init();
    var setting3={
        selecter:'section#SKILLS .skill #skill3',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'75'
    };
    var probar3=new ProgressBar(setting3);
    probar3.init();
    var setting4={
        selecter:'section#SKILLS .skill #skill4',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'65'
    };
    var probar4=new ProgressBar(setting4);
    probar4.init();
    var setting5={
        selecter:'section#SKILLS .skill #skill5',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'20'
    };
    var probar5=new ProgressBar(setting5);
    probar5.init();
    var setting6={
        selecter:'section#SKILLS .skill #skill6',
        height:150,
        width:110,
        cx:76,
        cy:76,
        r:66,
        fill:'none',
        strokeLinecap:'round',
        strokedasharray:'0,10000',
        value:'80'
    };
    var probar6=new ProgressBar(setting6);
    probar6.init();

});