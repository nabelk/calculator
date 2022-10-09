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

const display = document.querySelector(".display");
const keypad = document.querySelectorAll(".num");
const operatorPad = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".del")
const negative = document.querySelector(".negative"); 
const dot = document.querySelector("#dot");

const firstNumDisplay = document.querySelector(".firstnum");
const operatorDisplay = document.querySelector(".operators");
const secondNumDisplay = document.querySelector(".secondnum");
const span = document.querySelectorAll("span");

// Event listener function
function operate(){

    // Clear display div event
    clear.addEventListener("click", clearEvent);

    // DEL div event
    backspace.addEventListener("click", backspaceEvent);

    // '+/-' div event
    negative.addEventListener("click", negativeEvent);

    // '=' div event
    equal.addEventListener("click", result)

    // Number/dot div event
    keypad.forEach(pad => {
        pad.addEventListener("click", (e) => {
            audio(".defaultaudio", 1);
            
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

    // Operator div event
    operatorPad.forEach(pad => {
        pad.addEventListener("click", () => { 
            audio(".defaultaudio", 1);

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

    // Keyboard Support
    document.addEventListener("keydown", (e) => {
        /* console.log(e.key +":"+ e.keyCode)
        console.log(typeof e.keyCode)
        console.log(typeof e.key) */
        
        audio(".defaultaudio", 1);

        const numDotKeyCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 110]; 
        for(let x = 0; x < numDotKeyCode.length; x++){
            if(e.keyCode === numDotKeyCode[x]){
                if((firstNum && operator) !== "" && secondNum === ""){
                    dot.classList.add = "num" 
                    // Enable dot event for secondNum
                } 

                if ((secondNum === "" ) && e.keyCode === 110 && (firstNum && operator) !== ""){
                    secondNum += "0.";
                    secondNumDisplay.textContent += secondNum; 
                    // Statement for clicking dot pad when secondNum is ""
                } else if(secondNum.includes(".") && e.keyCode === 110){
                    dot.className = "keypad"; 
                    // Statement for dot to be key in one time only for secondNum
                } else if((firstNum.includes(".")) && e.keyCode === 110 && (operator && secondNum) === "") {
                    dot.className = "keypad"; 
                    // Statement for dot to be key in one time only for firstNum
                } else if ((secondNum === "-"  ) && e.keyCode === 110){
                    secondNum = "-0.";
                    secondNumDisplay.textContent = secondNum;
                    // Statement for clicking dot pad when secondNum is "-"
                } else if ((firstNum === "" || firstNum === "-") && e.keyCode === 110){
                    firstNumDisplay.textContent += "0.";
                    firstNum += "0.";
                    // Statement for clicking dot pad when firstNum is "" or "-"
                } else if (operator === ""){
                    firstNumDisplay.textContent += e.key;
                    firstNum += e.key;
                    // Statement for key in firstNum
                } else {
                    secondNumDisplay.textContent += e.key;
                    secondNum += e.key;
                    // Statement for key in secondNum
                } 
            }
        }

        let operatorKeyCode = [107, 109, 106, 111];
        for(let i = 0; i < operatorKeyCode.length; i++){
            switch(e.key){
                case "+":
                    operator = "add";
                    break;
                case "-":
                    operator = "subtract";
                    break; 
                case "*":
                    operator = "multiply";
                    break;
                case "/":
                    operator = "divide";
                    break;   
            }

            if(e.keyCode === operatorKeyCode[i]){
                if(firstNum === "") {
                    firstNumDisplay.textContent = "";
                    operator = "";
                } else if(firstNum !== "" && operator !== "" && secondNum === ""){
                    operatorDisplay.textContent = e.key;
                } else if((firstNum, secondNum, operator) !== ""){
                    result();
                    operatorDisplay.textContent = e.key;
                } else {
                    operatorDisplay.textContent = e.key;
                }
            }
        }

        switch(e.keyCode){
            case 46:
                clearEvent();
                break;
            case 8:
                backspaceEvent();
                break;
            case 13:
                result();
                break;
            case 78:
                negativeEvent();
                break;   
        }

        console.log("first = " + firstNum)
        console.log("second = " + secondNum)
        console.log("operator = " + operator);
    });

};

// Clear event handler function
function clearEvent(){
    audio(".deleteaudio", 0.3);
    span.forEach(element => element.textContent = "");
    firstNum = "";
    secondNum = "";
    operator = "";
    console.log("new 1st after clear = " + firstNum)
};

// Backspace event handler function
function backspaceEvent(){
    audio(".deleteaudio", 0.3);
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
};

// Negative event handler function
function negativeEvent(){
    audio(".defaultaudio", 1);
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
};

// Result event handler
function result() {
    audio(".defaultaudio", 1);
    if(((firstNum && operator && secondNum) === "" )|| ((firstNum && operator) !== "" && secondNum === "")) {
        firstNumDisplay.textContent = "";
        firstNum = "";
        operatorDisplay.textContent = "";
        operator = "";
    } else {
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
}    

// Audio function
function audio(classchoice, volume){
    const audio = document.querySelector(classchoice);
    if (!audio) return;
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();
};

operate();