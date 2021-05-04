const list=document.querySelector(".list");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const wrap=document.querySelector(".wrap");
const count=document.querySelector(".count");
const button=document.querySelector(".button");
var w=0;
function findSize() {
    w=window.screen.width;
    if (w<460){
        list.children[1].children[1].children[0].setAttribute('src','images/hdc2021-m.png');
        list.children[2].children[1].children[0].setAttribute('src','images/mate40-series-m.jpg');
        list.children[3].children[1].children[0].setAttribute('src','images/hwcloud-promotion-m.jpg');
        list.children[4].children[1].children[0].setAttribute('src','images/hdc2021-m.png');
        list.children[0].children[1].children[0].setAttribute('src','images/hwcloud-promotion-m.jpg');
        list.children[1].children[1].children[0].style.width=w+"px";
        list.children[2].children[1].children[0].style.width=w+"px";
        list.children[3].children[1].children[0].style.width=w+"px";
        list.children[4].children[1].children[0].style.width=w+"px";
        list.children[0].children[1].children[0].style.width=w+"px";
        list.style.marginLeft=-w+"px";
        count.style.width=w+"px";
        wrap.style.height=(850*w)/768+"px";
    }
}
window.addEventListener("resize",findSize);
findSize();
if (w>460){
    window.onload=function(){
        count.children[0].children[0].style.width="100px";
    };
}
var index=1;
function move(i){
    // console.log(i);
    if (w>460){
        if (i==2){
            index=2;
            count.children[1].children[0].style.width="100px";
            count.children[0].children[0].style.width="0";
            count.children[2].children[0].style.width="0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -2*1349+"px";
            list.style.left="0";
        }else if (i==1){
            index=1;
            list.style.marginLeft = -1*1349+"px";
            count.children[0].children[0].style.width="100px";
            count.children[1].children[0].style.width="0";
            count.children[2].children[0].style.width="0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.left="0";
        }else if (i==3){
            index=3;
            count.children[2].children[0].style.width="100px";
            count.children[0].children[0].style.width="0";
            count.children[1].children[0].style.width="0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -3*1349+"px";
            list.style.left="0";
        }else if (i==4){
            index=1;
            count.children[0].children[0].style.width="100px";
            count.children[1].children[0].style.width="0";
            count.children[2].children[0].style.width="0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -4*1349+"px";
            list.style.left="0";
            function bianhua(){
                list.style.marginLeft=-1349+"px";
                list.style.transition="none";
            }
            setTimeout(bianhua, 1500);
        }else if (i==0){
            index=3;
            count.children[2].children[0].style.width="100px";
            count.children[1].children[0].style.width="0";
            count.children[0].children[0].style.width="0";
            list.style.marginLeft = "0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.left="0";
            function bianhua1(){
                list.style.marginLeft=-1349*3+"px";
                list.style.transition="none";
            }
            setTimeout(bianhua1, 1500);
        }
    }else{
        if (i==2){
            index=2;
            count.children[0].classList.remove("active");
            count.children[1].classList.toggle("active");
            count.children[2].classList.remove("active");
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -2*w+"px";
            list.style.left="0";
        }else if (i==1){
            index=1;
            count.children[2].classList.remove("active");
            count.children[0].classList.toggle("active");
            count.children[1].classList.remove("active");
            list.style.marginLeft = -1*w+"px";
            list.style.transition="all ease-in-out 1.5s";
            list.style.left="0";
        }else if (i==3){
            index=3;
            count.children[0].classList.remove("active");
            count.children[2].classList.toggle("active");
            count.children[1].classList.remove("active");
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -3*w+"px";
            list.style.left="0";
        }else if (i==4){
            index=1;
            count.children[1].classList.remove("active");
            count.children[0].classList.toggle("active");
            count.children[2].classList.remove("active");
            list.style.transition="all ease-in-out 1.5s";
            list.style.marginLeft = -4*w+"px";
            list.style.left="0";
            function bianhua2(){
                list.style.marginLeft=-w+"px";
                list.style.transition="none";
            }
            setTimeout(bianhua2, 1500);
        }else if (i==0){
            index=3;
            count.children[0].classList.remove("active");
            count.children[2].classList.toggle("active");
            count.children[1].classList.remove("active");
            list.style.marginLeft = "0";
            list.style.transition="all ease-in-out 1.5s";
            list.style.left="0";
            function bianhua3(){
                list.style.marginLeft=-w*3+"px";
                list.style.transition="none";
            }
            setTimeout(bianhua3, 1500);
        }
    }

}
next.onclick=function(){
    move(++index);
};
count.children[0].onclick=function(){
    move(1);
};
count.children[1].onclick=function(){
    move(2);
};
count.children[2].onclick=function(){
    move(3);
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
next.onmouseleave=start;
next.onmouseenter=stop;
prev.onmouseleave=start;
prev.onmouseenter=stop;
button.onmouseleave=start;
button.onmouseenter=stop;
/*list.onmousedown = function (ev) {
    stop();
    var ev = ev || window.event;
    // 获取鼠标相对于盒子的坐标
    var x2 = ev.offsetX;
    // 鼠标移动
    document.onmousemove = function (ev) {
        var ev = ev || window.event;
        var x3 = ev.pageX;
        list.style.left = x3 - x2 + "px";
    }
};
// 4.鼠标松开事件
document.onmouseup = function (ev) {
    start();
    console.log(list.style.left);
    if (list.style.left>0){
        move(--index);
    }else {
        move(++index);
    }
};*/
