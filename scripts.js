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
let backspace = document.querySelector(".del")

let firstNumDisplay = document.querySelector(".firstnum");
let operatorDisplay = document.querySelector(".operator");
let secondNumDisplay = document.querySelector(".secondnum");
let span = document.querySelectorAll("span");

// Func. to make calculation based on event
function operate(){
    clear.addEventListener("click", () => {
        span.forEach(element => element.textContent = "");
        firstNum = "";
        secondNum = "";
        operator = "";
        console.log("new 1st after clear = " + firstNum)
    });

    keypad.forEach(pad => {
        pad.addEventListener("click", (e) => {
            if (firstNum === "" && e.target.textContent === "."){
                firstNumDisplay.textContent += "0.";
                firstNum += "0.";

            } else if (operator === ""){
                firstNumDisplay.textContent += e.target.textContent;
                firstNum += e.target.textContent;
            } else if (secondNum === "" && e.target.textContent === "."){
                secondNumDisplay.textContent += secondNum;
                secondNum += "0.";
            } else {
                secondNumDisplay.textContent += e.target.textContent;
                secondNum += e.target.textContent;
            }
            console.log("first = " + firstNum)
            console.log("second = " + secondNum)
        });
    });

    operatorPad.forEach(pad => {
        pad.addEventListener("click", () => { 
            operator = pad.getAttribute("data-value");
            operatorDisplay.textContent += pad.textContent;
            console.log("operator = " + operator);
        });
    });

    backspace.addEventListener("click", () => {

        if (firstNum !== "" && secondNum === ""){
            operatorDisplay.textContent = "";
        } 
        if(operator === ""){
            firstNum = firstNum.slice(0, -1); 
            firstNumDisplay.textContent = firstNum;
        } else if (firstNum !== ""){
            secondNum = secondNum.slice(0, -1);
            secondNumDisplay.textContent = secondNum;
        } 

        console.log("first = " + firstNum)
        console.log("second = " + secondNum)
    })

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
        secondNumDisplay.textContent = "";
        operatorDisplay.textContent = "";
        firstNumDisplay.textContent = result;  
        firstNum = result;
        secondNum = "";
    })
}

operate();