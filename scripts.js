// Func. for + operator
const add = (a, b) => {
    return a + b;
};

// Func. for - operator
const subtract = (a, b) => {
    return a - b
};

// Func. for * operator
const multiply = (a, b) => {
    return a * b;
};

// Func. for / operator
const divide = (a, b) => {
    return a / b;
};

// Func. to return the choose operator and numbers
function operate(operatorChoice, num1, num2){
    return operatorChoice(num1, num2);
}

console.log(operate(multiply, 10, 5))

let displayValue = document.querySelector(".display");
let keypad = document.querySelectorAll(".keypad");
keypad.forEach(pad => {
    pad.addEventListener("click", clickPad);
})

function clickPad(e) {
   displayValue.textContent = e.target.textContent; 
};