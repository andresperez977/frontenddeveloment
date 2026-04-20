const btns = document.querySelectorAll(".theme-btn");
const bd = document.querySelector("body")
console.log(bd);
console.log(btns);
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    console.log(btn);
    btn.addEventListener("click",()=>{
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
bd.className = btn.getAttribute("data-theme");
    });
    
}
btns.array.forEach(element=>{

});