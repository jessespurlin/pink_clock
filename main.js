
// array of colors for background
var colors = ["#F8BBD0","#F48FB1", "#F06292", "#EC407A","#F06292","#F48FB1"];

var i = 0; // initialize index for colors array
var pageClock = document.getElementById("clock");

function colorChange() {
    document.body.style.backgroundColor = colors[i];
    
    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
    
    // wait 1 second then change the color
    setTimeout("colorChange()", 1000);
}    

function prependZeroToSingleDigitNumbers(num) {
    // Adds a zero to single digit numbers 
    // ex: "8" returns "08"
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

function setTime() {
    var date = new Date(); // initialize current time

    var hour = prependZeroToSingleDigitNumbers((date.getHours() % 12));
    var minute = prependZeroToSingleDigitNumbers(date.getMinutes());
    var second = prependZeroToSingleDigitNumbers(date.getSeconds());

    // change modulus at noon and midnight to read '12' instead of '0'
    if (hour === "00"){
        hour = "12";
    }

    pageClock.innerHTML = hour + ' : ' + minute + ' : ' + second;

    // wait 1 second then change time
    setTimeout(setTime, 1000);
}

function clock(){
    colorChange();
    setTime();
}

// wait until entire page loads, then run clock function
window.onload = clock;
