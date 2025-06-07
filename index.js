const display = document.getElementById("display");

function ShowDisplay(input) {
    display.value += input;
}

function ClearDisplay() {
    display.value = "";
}

function DeleteDisplay() {
    display.value = display.value.slice(0, -1);
}

function CalculateDisplay() {
   display.value = "I love You So Much!";s
}