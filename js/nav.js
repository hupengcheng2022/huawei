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
    navMenu.style.display=`flex`;
    navMenu.style.justify=`space-between`;
    navMenu.style.transform="scale(1)";
    buy.style.transform="scale(1)";
    search.style.transform="scale(1)";
    searchBox.style.transform="scale(0)";
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