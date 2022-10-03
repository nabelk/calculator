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

let firstNum = "";
let secondNum = "";
let operator = "";

let display = document.querySelector(".display");
let keypad = document.querySelectorAll(".num");
let operatorPad = document.querySelectorAll(".operator")
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

// Func. to make calculation based on event
function operate(){
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
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        let result;
        switch(operator){
            case "add":
                result = add(firstNum, secondNum);
                break;
            case "subtract":
                result = subtract(firstNum, secondNum);
                break;
            case "multiply":
                result = multiply(firstNum, secondNum);
                break;   
            case "divide":
                result = divide(firstNum, secondNum);
                break;    
        }
        console.log(result)
        display.textContent = result;  
        firstNum = result;
        secondNum = "";
    })
}

operate();
