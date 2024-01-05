const display = document.getElementById("screen");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function percentage(){
    display.value = (display.value / 100);
}

function negative(){
    display.value = -(display.value);
}