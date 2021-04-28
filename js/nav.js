/*搜索框*/
const search=document.querySelector(".search");
const searchBox=document.querySelector(".searchBox");
const close=document.querySelector(".nav");
const navMenu=document.querySelector(".nav-menu");
const input=document.querySelector(".search-box");
search.addEventListener("click",()=>{
    navMenu.style.transform="scale(0)";
    buy.style.transform="scale(0)";
    search.style.transform="scale(0)";
    searchBox.style.display="block";
    searchBox.style.transform="scale(1,1)";
    event.stopPropagation();
});
input.addEventListener("click",()=>{
    event.stopPropagation();
});
close.addEventListener("click",()=>{
    navMenu.style.display=`flex`;
    navMenu.style.justify=`space-between`;
    navMenu.style.transform="scale(1)";
    buy.style.transform="scale(1)";
    search.style.transform="scale(1)";
    searchBox.style.transform="scale(0)";
});
/*搜索框*/

/*导航条*/
const buy=document.querySelector(".buy");
const car=document.querySelector(".car");
const navLi=document.querySelector(".nav-menu");
const products=document.querySelector(".products");
const bottom=document.querySelector(".bottom");

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


/*导航条*/