function finalTask() {
    console.log("3. Inside finalTask");
}
function secondTask() {
    console.log("2. Inside secondTask")
    finalTask();// Pushes finalTask onto stack
}
function firstTask() {
secondTask();
console.log("1.Inside firstTask");
}
firstTask();

function add(num) {
console.log(num);
add(++num);
}
add(0);