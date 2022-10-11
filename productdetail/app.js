const btn = document.querySelector(".togglebtn");
let value=0;
btn.addEventListener("click",()=>{
    const colorContainer = document.querySelector(".color-container");
    if (value===0){
        colorContainer.style.height="auto";
        value=1;
    }
    else{
        colorContainer.style.height="56px";
        value=0;
    }
})