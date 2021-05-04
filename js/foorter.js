const search1=document.querySelector(".search1");
const searchBox1=document.querySelector(".searchBox1");
const footer=document.querySelector(".footer");
const news=document.querySelector(".news");
const input1=document.querySelector(".search-box1");
const close2=document.querySelector(".close");
search1.addEventListener("click",()=>{
    search1.style.transform="scale(0)";
    searchBox1.style.transform="scale(1,1)";
    // console.log(12);
    event.stopPropagation();
});
input1.addEventListener("click",()=>{
    event.stopPropagation();
});
footer.addEventListener("click",()=>{
    search1.style.transform="scale(1)";
    searchBox1.style.transform="scale(0)";
});
close2.addEventListener("click",()=>{
    search1.style.transform="scale(1)";
    searchBox1.style.transform="scale(0)";
});
news.addEventListener("click",()=>{
    search1.style.transform="scale(1)";
    searchBox1.style.transform="scale(0)";
});