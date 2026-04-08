 const timeDisplay =document.getElementById("timePanel");
 console.log(timeDisplay);
 function updateTime(){
    //step1
    const date = new Date();
    console.log(date);
 }
 setInterval(updateTime,1000);