/*搜索框*/
var w=0;
function findSize() {
    w=window.screen.width;
    // console.log(w)
}
window.addEventListener("resize",findSize);
findSize();
const search=document.querySelector(".search");
const searchBox=document.querySelector(".searchBox");
const close=document.querySelector(".close");
const close1=document.querySelector(".nav");
const navMenu=document.querySelector(".nav-menu");
const input=document.querySelector(".search-box");
const burger=document.querySelector(".burger");
const webTop=document.querySelector(".web_top");
const buy=document.querySelector(".buy");
const car=document.querySelector(".car");
const navLi=document.querySelector(".nav-menu");
const products=document.querySelector(".products");
const bottom=document.querySelector(".bottom");
/*if (w>460){*/
search.addEventListener("click",()=>{
    if (w>460){
        console.log(w+"pc");
        navMenu.style.transform="scale(0)";
        buy.style.transform="scale(0)";
        search.style.transform="scale(0)";
        searchBox.style.display="block";
        searchBox.style.right="40px";
        searchBox.style.transform="scale(1,1)";
        event.stopPropagation();
    }else{
        searchBox.style.transform="scale(1)";
        searchBox.style.right="0";
        document.body.style.overflow="hidden";
        console.log(w+"web");
        event.stopPropagation();
    }
});
input.children[0].addEventListener("click",()=>{
    event.stopPropagation();
});
searchBox.children[1].addEventListener("click",()=>{
    event.stopPropagation();
});
input.children[1].addEventListener("click",()=>{
    event.stopPropagation();
});
close.addEventListener("click",()=>{
    if (w>460){
        navMenu.style.display=`flex`;
        navMenu.style.justify=`space-between`;
        navMenu.style.transform="scale(1)";
        buy.style.transform="scale(1)";
        search.style.transform="scale(1)";
        searchBox.style.transform="scale(0)";
    }else{
        searchBox.style.right="-100%";
        // console.log(document.body.classList.value);
        if (!document.body.classList.value){
            document.body.style.overflow="scroll";
        }else{
            document.body.style.overflow="hidden";
        }
        event.stopPropagation();
    }
 });
close1.addEventListener("click",()=>{
    if (w>460){
        navMenu.style.display=`flex`;
        navMenu.style.justify=`space-between`;
        navMenu.style.transform="scale(1)";
        buy.style.transform="scale(1)";
        search.style.transform="scale(1)";
        searchBox.style.transform="scale(0)";
    }
});
/*搜索框*/
/*导航条*/
buy.addEventListener("mouseover",()=>{
    car.style.display=`block`;
    products.style.display=`none`;
    buy.classList.toggle("open");
});
buy.addEventListener("mouseout",()=>{
    car.style.display=`none`;
    buy.classList.toggle("open");
});
car.addEventListener("mouseover",()=>{
    car.style.display=`block`;
    buy.classList.toggle("open");
});
car.addEventListener("mouseout",()=>{
    car.style.display=`none`;
    buy.classList.toggle("open");
});
navLi.children[0].addEventListener("mouseover",()=>{
    products.style.display=`block`;
});
navLi.children[0].addEventListener("mouseout",()=>{
    products.style.display=`none`;
});
products.addEventListener("mouseover",()=>{
    products.style.display=`block`;
});
bottom.children[0].addEventListener("click",()=>{
    products.style.display=`none`;
});
close.onclick=function () {
    searchBox.style.right="-100%";
    // console.log(document.body.classList.value);
    if (!document.body.classList.value){
        document.body.style.overflow="scroll";
    }else{
        document.body.style.overflow="hidden";
    }
};
burger.onclick=function () {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    webTop.classList.toggle("active");
    if (document.body.style.overflow = "scroll" && !document.body.classList.value) {
        document.body.style.overflow = "hidden";
        document.body.classList.toggle("active")
    } else {
        document.body.style.overflow = "scroll";
        document.body.classList.remove("active")
    }
};
/*导航条*/
const nav=document.querySelector(".nav");
if (w>460) {
    var scrollFunc = function (e) {
        var e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) { //当鼠标滚轮向上滚动时
                nav.style.position="sticky";
                nav.style.top="0";
                nav.style.zIndex="1";
                nav.style.transition="all 0.5s";
            }
            if (e.wheelDelta < 0) { //当鼠标滚轮向下滚动时
                nav.style.position="sticky";
                nav.style.top="-100%";
                nav.style.zIndex="1";
                nav.style.transition="all 0.5s";
            }
        } else if (e.detail) {
            if (e.detail < 0) { //当鼠标滚轮向上滚动时
                nav.style.position="sticky";
                nav.style.top="0";
                nav.style.zIndex="1";
                nav.style.transition="all 0.5s";
            }
            if (e.detail > 0) { //当鼠标滚轮向下滚动时
                nav.style.position="sticky";
                nav.style.top="-100%";
                nav.style.zIndex="1";
                nav.style.transition="all 0.5s";
            }
        }
    };
    window.addEventListener("DOMMouseScroll", scrollFunc); // 给页面绑定鼠标滚轮事件，针对Google，mousewheel非标准事件已被弃用，请使用 wheel事件代替
    window.addEventListener("wheel", scrollFunc);  // ie不支持wheel事件，若一定要兼容，可使用mousewheel
    window.addEventListener("mousewheel", scrollFunc);
}else{
    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    }

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                // alert("未滑动！");
                break;
            case 1:
                nav.style.position="sticky";
                nav.style.top="-100%";
                nav.style.zIndex="6";
                nav.style.transition="all 0.5s";
                break;
            case 2:
                nav.style.position="sticky";
                nav.style.top="0";
                nav.style.zIndex="6";
                nav.style.transition="all 0.5s";
                break;
            case 3:
                // alert("向左！");
                break;
            case 4:
                // alert("向右！");
                break;
            default:
        }
    }, false);
}