const list=document.querySelector(".list");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const wrap=document.querySelector(".wrap");
const count=document.querySelector(".count");
const button=document.querySelector(".button");
var index=0;
window.onload=function(){
    count.children[0].children[0].style.width="100px";
};
function move(i){
    if (i==1){
        index=1;
        count.children[1].children[0].style.width="100px";
        count.children[0].children[0].style.width="0";
        count.children[2].children[0].style.width="0";
        list.style.transition="all ease-in-out 1.5s";
    }else if (i==2){
        index=2;
        count.children[2].children[0].style.width="100px";
        count.children[0].children[0].style.width="0";
        count.children[1].children[0].style.width="0";
        list.style.transition="all ease-in-out 1.5s";
    }else if (i==3){
        index=0;
        count.children[0].children[0].style.width="100px";
        count.children[1].children[0].style.width="0";
        count.children[2].children[0].style.width="0";
        list.style.transition="none";
    }else if (i==-1){
        index=2;
        count.children[2].children[0].style.width="100px";
        count.children[1].children[0].style.width="0";
        count.children[0].children[0].style.width="0";
        list.style.transition="none";
    }else if (i==-2){
        index=1;
        count.children[1].children[0].style.width="100px";
        count.children[0].children[0].style.width="0";
        count.children[2].children[0].style.width="0";
        list.style.transition="all ease-in-out 1.5s";
    }else if (i==-3){
        index=0;
        count.children[0].children[0].style.width="100px";
        count.children[1].children[0].style.width="0";
        count.children[2].children[0].style.width="0";
        list.style.transition="all ease-in-out 1.5s";
    }else if (i==0){
        index=0;
        count.children[0].children[0].style.width="100px";
        count.children[1].children[0].style.width="0";
        count.children[2].children[0].style.width="0";
        list.style.transition="all ease-in-out 1.5s";
    }
    list.style.marginLeft = -index*1349+"px";
}
next.onclick=function(){
    move(++index);
};
count.children[0].onclick=function(){
    move(0);
};
count.children[1].onclick=function(){
    move(1);
};
count.children[2].onclick=function(){
    move(2);
};
prev.onclick=function(){
    move(--index);
};
function start(){
    timer=setInterval(function(){
        next.onclick()
    },4000);
}
start();
// 关闭定时器
function stop(){
    clearInterval(timer);
}
wrap.onmouseleave=start;
wrap.onmouseenter=stop;