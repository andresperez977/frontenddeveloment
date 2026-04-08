//"document" is an object created the js execution enviroment 
//it represent the tree of the web page we are manipulationg
/**
 * "document" is an object created the js execution enviroment 
 * it represent the tree of the web page we are manipulationg
 * 'getElementById' this method is used to obtain an
 * element in the web page by its id
 */
const start = document.getElementById("start");
console.log(start);
console.debug(start);
const stop = document.getElementById("stop");
console.log(start);
const reset = document.getElementById("reset");
console.log(start);
const anyElement = document.getElementById("any thing");
console.log(anyElement);
const timerDisplay = document.getElementById("timerDisplay");
console.log(timeDisplay);

document.querySelectorAll(".control-button")
//Associate an element with a type of event and an action
//that we want to respond to the event 
let fontSize = 4;
let maxFontSize = 100;
let minFontSize = 2;
let isIncreasing = true;
let time = 0;
start.addEventListener("click", () => {
    let control = 10000;
    while (control > 0) {
        if (isIncreasing) {
            fontSize++;
            if (fontSize >= maxFontSize) {
                isIncreasing = false;
            }
        }
        else {
            fontSize--;
            if (fontSize >= minFontSize) {
                isIncreasing = true;
            }

        }
        control--;
        console.log("jajaaj");
        start.style.fontSize = fontSize + "px";
        //if(fontSize <= maxFontSize){
        //fontSize+=1;
        //start.style.fontSize = fontSize + "px";
    }

}
);
//annonymous fuction
console.log(stop);
stop.addEventListener("click", function () {
    console.log("hehehe");
});
function resetBtnHandler() {
    console.log("wowowo");
}
reset.addEventListener("click", resetBtnHandler);


const btns=document.querySelectorAll(".control-button")
console.log(btns);
btns.forEach(e=> {});
