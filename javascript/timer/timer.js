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
const timeDisplay = document.getElementById("timerDisplay");
console.log(timeDisplay);
//Associate an element with a type of event and an action
//that we want to respond to the event 
start.addEventListener("click",()=>{
    console.debug("jajaaj")
});