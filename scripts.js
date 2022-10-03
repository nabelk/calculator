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

let display = document.querySelector(".display");
let keypad = document.querySelectorAll(".num");
let operatorPad = document.querySelectorAll(".operator")
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let firstNum = "";
let secondNum = "";
let operator = "";

function calculation() {
    clear.addEventListener("click", () => {
        display.textContent = ""
        firstNum = "";
        secondNum = "";
        operator = "";
        console.log(firstNum)
    });
    
    keypad.forEach(pad => {
        pad.addEventListener("click", (e) => {
            if(operator === ""){
                firstNum += e.target.textContent;
                display.textContent = firstNum;
                console.log(firstNum);
            } else {
                secondNum += e.target.textContent;
                display.textContent = secondNum;
                console.log(secondNum);
            }
        });
    });

    operatorPad.forEach(pad => {
        pad.addEventListener("click", () => { 
            operator = pad.getAttribute("data-value");
            display.textContent += pad.textContent;
            console.log(operator);
        });
    });

    equal.addEventListener("click", () => {
        if(operator === "add"){
            let result = Number(firstNum) + Number(secondNum);
            console.log(result);
            display.textContent = result;  
            firstNum = result;
            secondNum = "";
        }
    })

}

calculation();

/* display.textContent += e.target.textContent;  */