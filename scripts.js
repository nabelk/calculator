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
const negative = document.querySelector(".negative"); 
let dot = document.querySelector("#dot");

let firstNumDisplay = document.querySelector(".firstnum");
let operatorDisplay = document.querySelector(".operators");
let secondNumDisplay = document.querySelector(".secondnum");
let span = document.querySelectorAll("span");

// Func. to make calculation based on event
function operate(){

    // Clear display event
    clear.addEventListener("click", () => {
        span.forEach(element => element.textContent = "");
        firstNum = "";
        secondNum = "";
        operator = "";
        console.log("new 1st after clear = " + firstNum)
    });

    // Number/dot event
    keypad.forEach(pad => {
        pad.addEventListener("click", (e) => {
            
            if((firstNum && operator) !== "" && secondNum === ""){
                dot.classList.add = "num" 
                // Enable dot event for secondNum
            } 

            if ((secondNum === "" ) && e.target.textContent === "." && (firstNum && operator) !== ""){
                secondNum += "0.";
                secondNumDisplay.textContent += secondNum; 
                 // Statement for clicking dot pad when secondNum is ""
            } else if(secondNum.includes(".") && e.target.textContent === "."){
                dot.className = "keypad"; 
                // Statement for dot to be key in one time only for secondNum
            } else if((firstNum.includes(".")) && e.target.textContent === "." && (operator && secondNum) === "") {
                dot.className = "keypad"; 
                // Statement for dot to be key in one time only for firstNum
            } else if ((secondNum === "-"  ) && e.target.textContent === "."){
                secondNum = "-0.";
                secondNumDisplay.textContent = secondNum;
                // Statement for clicking dot pad when secondNum is "-"
            } else if ((firstNum === "" || firstNum === "-") && e.target.textContent === "."){
                firstNumDisplay.textContent += "0.";
                firstNum += "0.";
                // Statement for clicking dot pad when firstNum is "" or "-"
            } else if (operator === ""){
                firstNumDisplay.textContent += e.target.textContent;
                firstNum += e.target.textContent;
                // Statement for key in firstNum
            } else {
                secondNumDisplay.textContent += e.target.textContent;
                secondNum += e.target.textContent; 
                // Statement for key in secondNum
            }            
            console.log("first = " + firstNum)
            console.log("second = " + secondNum)
            console.log("operator = " + operator);
        });
    });

    // '+/-' event
    negative.addEventListener("click", () =>{
        if(firstNum === "" && (operator && secondNum) === ""){
            firstNumDisplay.textContent += "-";
            firstNum += "-";
        } else if ((firstNum && operator) !== "" && secondNum === "" ){
            secondNum += "-";
            secondNumDisplay.textContent += `-`;
        } else if(firstNum === "-"){
            firstNumDisplay.textContent = "";
            firstNum = "";
        }  else if ((operator && firstNum) !== "" && secondNum === "-"){
            secondNumDisplay.textContent = "";
            secondNum = "";
        } 
    })

    // Operator event
    operatorPad.forEach(pad => {
        pad.addEventListener("click", () => { 

            if(firstNum === "") {
                firstNumDisplay.textContent = "";
                operator = "";
            } else if(firstNum !== "" && operator !== "" && secondNum === ""){
                operator = pad.getAttribute("data-value");
                operatorDisplay.textContent = pad.textContent;
            } else if((firstNum, secondNum, operator) !== ""){
                result();
                operator = pad.getAttribute("data-value");
                operatorDisplay.textContent = pad.textContent;
            } else {
                operator = pad.getAttribute("data-value");
                operatorDisplay.textContent = pad.textContent;
            }
            
            console.log("first = " + firstNum)
            console.log("second = " + secondNum)
            console.log("operator = " + operator);
        });
    });

    // DEL event
    backspace.addEventListener("click", () => {
        if(operator === "" && secondNum === "" && firstNum !=="" ){
            firstNum = firstNum.slice(0, -1); 
            firstNumDisplay.textContent = firstNum;
        } else if (firstNum !== "" && operator !== "" && secondNum !== ""){
            secondNum = secondNum.slice(0, -1);
            secondNumDisplay.textContent = secondNum;
        } else if (firstNum !== "" && secondNum === "" && operator !== ""){
            operatorDisplay.textContent = "";
            operator = ""
        } 

        console.log("first = " + firstNum)
        console.log("second = " + secondNum)
        console.log("operator = " + operator);
    })

    // '=' event
    equal.addEventListener("click", () => {
        if(((firstNum && operator && secondNum) === "" )|| ((firstNum && operator) !== "" && secondNum === "")) {
            firstNumDisplay.textContent = "";
        } else {
            result();
        }
    })
}

function result() {
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
    result = String(result);
    if(result.includes(".")){
        result = Number(result);
        result = result.toFixed(1);
        result = String(result);
    };
    secondNumDisplay.textContent = "";
    operatorDisplay.textContent = "";
    firstNumDisplay.textContent = result;  
    firstNum = result;
    operator ="";
    secondNum = "";
    console.log("result = " + result);
}    

operate();