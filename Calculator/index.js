let display = document.getElementById("display");

 

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    display.value = eval(display.value)
    // try {
    //     display.value = eval(display.value);
    // } catch {
    //     display.value = "Error";
    // }
}
