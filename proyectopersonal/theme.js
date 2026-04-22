//const btns = document.querySelectorAll(".theme-btn");
//const body = document.body;

//btns.forEach(btn => {
  //btn.addEventListener("click", () => {
    //const theme = btn.dataset.theme;
    //body.className = theme;
  //});
//});

const btns = document.querySelectorAll(".theme-btn");
const bd = document.querySelector("body")
console.log(bd);
console.log(btns);
/***for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    console.log(btn);
    btn.addEventListener("click", () => {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");
    });

}*/ 

//add a key-value pair data to the local storage
//localStorage.setItem("theme", "dark")
// access the data using its key 
//const theme = localStorage.getItem("theme");
//console.log("current theme = " + theme);

//step 1: read the theme value stored in the local storage
const theme = localStorage.getItem("theme");
if(theme){//if the theme value exists, not null 
    //set the current theme to the one selected by the user

    bd.className = theme;
}





console.log(btns);
btns.forEach(btn=> {
console.log(btn);
    btn.addEventListener("click", () => {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");
        localStorage.setItem("theme", btn.getAttribute("data-theme"));
    });

});