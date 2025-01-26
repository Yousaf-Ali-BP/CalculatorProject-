let pre_num = 0;
let current_num = 0;
let operation = "";
let result = 0;
let isNewNum = true;  // State to check if the next input should start a new number
let sign = "";
const display = document.getElementById("display");
const opp = document.getElementById("opp");

function btnClick(val) {
    if ("0123456789.".includes(val)) {
        handleNumber(val);
    } else if (["+", "-", "*", "/"].includes(val)) {
        handleOperation(val);
    } else if (val === "=") {
        handleEquals();
    } else if (val === "AC") {
        handleClearAll();
    } else if (val === "C") {
        handleClear();
    }

    updateOperationSign(val);  // Update the operation sign display
}

function handleNumber(val) {
    if (isNewNum) {
        display.value = val;  // Start a new number
        isNewNum = false;
    } else {
        display.value += val;  // Append to the current number
    }
    current_num = parseFloat(display.value);  // Update the current number
}

function handleOperation(val) {
    if (!isNewNum) {
        if (operation === "") {
            pre_num = current_num;  // Store the previous number
            isNewNum = true;
        } else {
            calculateAndDisplayResult();
        }
        operation = val;  // Set the new operation
    }
}

function handleEquals() {
    if (!isNewNum) {
        calculateAndDisplayResult();
        operation = "";  // Reset the operation after calculation
    }
}

function handleClearAll() {
    pre_num = 0;
    current_num = 0;
    operation = "";
    result = 0;
    isNewNum = true;
    display.value = "0";
}

function handleClear() {
    display.value = "0";
    isNewNum = true;  // Start fresh for the next number input
}

function calculateAndDisplayResult() {
    result = calculate(pre_num, current_num, operation);
    display.value = result;
    pre_num = result;  // Set the result as the previous number for the next operation
    isNewNum = true;
}

function calculate(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : 0;  // Avoid division by zero
        default:
            return 0;
    }
}

function updateOperationSign(val) {
    switch (val) {
        case "+":
            sign = "+"; break;
        case "-":
            sign = "-"; break;
        case "*":
            sign = "×"; break;
        case "/":
            sign = "÷"; break;
        case "=":
            sign = "="; break;
        default:
            sign = "";
    }
    opp.value = sign;
}