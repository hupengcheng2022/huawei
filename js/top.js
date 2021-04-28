const group=document.querySelector(".group");
const groupBox=document.getElementById("groupBox");
const language=document.querySelector(".language");
const languageBox=document.getElementById("language-box");
let open=true;
let open1=true;
group.addEventListener("click",()=>{
    group.classList.toggle("open");
    language.classList.remove("open");
    if (open){
        groupBox.style.height="180px";
        languageBox.style.height="0";
        open=false;
        open1=true;
    }else if (!open && open1){
        languageBox.style.height="0";
        groupBox.style.height="0";
        open=true;
        open1=true;
    }else if (!open&&!open1){
        languageBox.style.height="0";
        groupBox.style.height="0";
        open=true;
        open1=true;
    }
});
language.addEventListener("click",()=>{
    language.classList.toggle("open");
    group.classList.remove("open");
    if (open1){
        groupBox.style.height="0";
        languageBox.style.height="460px";
        open1=false;
        open=true;
    }else if (!open1 && open){
        // language.classList.remove("open");
        languageBox.style.height="0";
        groupBox.style.height="0";
        open1=true;
        open=true;
    }else if (!open1 && !open){
        languageBox.style.height="0";
        groupBox.style.height="0";
        open1=true;
        open=true;
    }
});