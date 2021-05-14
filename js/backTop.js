const wrapHeight=document.querySelector(".wrap");
const backTop=document.querySelector(".back_top");
// scrollTop
function back(){
    // console.log(wrapHeight.getBoundingClientRect().top);
    if (wrapHeight.getBoundingClientRect().top<-395){
        backTop.style.opacity="0.5";
        backTop.style.transform="scale(1)";
        backTop.style.transition="all 0.5s";
    }else if (wrapHeight.getBoundingClientRect().top>-495){
        backTop.style.transform="scale(0)";
        backTop.style.transition="all 0.5s";
    }
}
var myTimer = -1;
backTop.onclick=function (){
    /*document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;*/
    var scrollTo = document.documentElement.scrollTop || document.body.scrollTop;
    if(myTimer = -1){
        myTimer = setInterval(() => {
            scrollTo -= 60;
            if(scrollTo<=0){
                scrollTo = 0;
                window.clearInterval(myTimer);
                myTimer = -1;
                backTop.style.transform="scale(0)";
                backTop.style.transition="all 0.5s";
            }
            window.scrollTo(0,scrollTo) //这是值  是指离开网页顶部的距离
        }, 5);

    }
};
window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
    back();
};
window.addEventListener("touchstart",()=>{
    back();
});