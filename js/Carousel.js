const list=document.querySelector(".list");
const listMob=document.querySelector(".list_mob");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const wrap=document.querySelector(".wrap");
const wrapMob=document.querySelector(".wrap_mob");
const imgMob=document.querySelector(".recommend_img_mob");
const count=document.querySelector(".count");
const button=document.querySelector(".button");
const countMob=document.querySelector(".count_mob");
const videoMob=document.querySelector(".video_mob");
const news=document.querySelector(".news");
const footer=document.querySelector(".footer");
const searchBox1=document.querySelector(".searchBox1");
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
        listMob.children[1].children[1].children[0].style.width=w*0.94+"px";
        listMob.children[2].children[1].children[0].style.width=w*0.94+"px";
        listMob.children[3].children[1].children[0].style.width=w*0.94+"px";
        listMob.children[4].children[1].children[0].style.width=w*0.94+"px";
        listMob.children[0].children[1].children[0].style.width=w*0.94+"px";
        list.style.marginLeft=-w+"px";
        listMob.style.marginLeft=-w*0.94+"px";
        listMob.style.width=w*5*0.94+"px";
        count.style.width=w+"px";/*768 542*/
        news.style.width=w+"px";/*768 542*/
        footer.style.width=w+"px";/*768 542*/
        searchBox1.style.width=w+"px";/*768 542*/
        videoMob.children[0].style.width=w+"px";/*768 542*/
        wrap.style.height=(850*w)/768+"px";
        wrapMob.style.height=(542*w*0.94)/768+"px";
        countMob.style.top=((542*w*0.94)/768)-30+"px";
        imgMob.style.width=w*0.98+"px";
        imgMob.children[0].children[0].style.width=w*0.92/2-10+"px";
        imgMob.children[1].children[0].style.width=w*0.92/2-10+"px";
        imgMob.children[2].children[0].style.width=w*0.92/2-10+"px";
        imgMob.children[3].children[0].style.width=w*0.92/2-10+"px";
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
var index1=1;
function moveMob(i){
    if (i==2){
        index1=2;
        countMob.children[0].classList.remove("active");
        countMob.children[1].classList.toggle("active");
        countMob.children[2].classList.remove("active");
        listMob.style.transition="all ease-in-out 1.5s";
        listMob.style.marginLeft = -2*w*0.94+"px";
        listMob.style.left="0";
    }else if (i==1){
        index1=1;
        countMob.children[2].classList.remove("active");
        countMob.children[0].classList.toggle("active");
        countMob.children[1].classList.remove("active");
        listMob.style.marginLeft = -1*w*0.94+"px";
        listMob.style.transition="all ease-in-out 1.5s";
        listMob.style.left="0";
    }else if (i==3){
        index1=3;
        countMob.children[0].classList.remove("active");
        countMob.children[2].classList.toggle("active");
        countMob.children[1].classList.remove("active");
        listMob.style.transition="all ease-in-out 1.5s";
        listMob.style.marginLeft = -3*w*0.94+"px";
        listMob.style.left="0";
    }else if (i==4){
        index1=1;
        countMob.children[1].classList.remove("active");
        countMob.children[0].classList.toggle("active");
        countMob.children[2].classList.remove("active");
        listMob.style.transition="all ease-in-out 1.5s";
        listMob.style.marginLeft = -4*w*0.94+"px";
        listMob.style.left="0";
        function bianhua4(){
            listMob.style.marginLeft=-w*0.94+"px";
            listMob.style.transition="none";
        }
        setTimeout(bianhua4, 1500);
    }else if (i==0){
        index1=3;
        countMob.children[0].classList.remove("active");
        countMob.children[2].classList.toggle("active");
        countMob.children[1].classList.remove("active");
        listMob.style.marginLeft = "0";
        listMob.style.transition="all ease-in-out 1.5s";
        listMob.style.left="0";
        function bianhua5(){
            listMob.style.marginLeft=-w*3*0.94+"px";
            listMob.style.transition="none";
        }
        setTimeout(bianhua5, 1500);
    }
}
next.onclick=function(){
    move(++index);
    moveMob(++index1);
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
countMob.children[0].onclick=function(){
    moveMob(1);
};
countMob.children[1].onclick=function(){
    moveMob(2);
};
countMob.children[2].onclick=function(){
    moveMob(3);
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
