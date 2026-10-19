const hoverBox = document.querySelector("#hover-box");
const liveInput = document.querySelector("#live-input");
const liveOutput = document.querySelector("#live-output");
const calculatorForm = document.querySelector("#calculator-form");
const firstInput = document.querySelector("#first-number");
const secondInput = document.querySelector("#second-number");
const operation = document.querySelector("#operation");
const resultMessage = document.querySelector("#calculation-result");


hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#bbf7d0";
});
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "";
});

liveInput.addEventListener("keyup", () => {
    liveOutput.textContent = liveInput.value;
});

calculatorForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstNumber = firstInput.valueAsNumber
    const secondNumber = secondInput.valueAsNumber

    if(!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)){
        resultMessage.textContent = "pls write two valid numbers"
        return
    }
    let result;
    if(operation.value == "add"){
        result = firstNumber + secondNumber
    }
    else if(operation.value == "subtract"){
        result = firstNumber - secondNumber
    }
    else if(operation.value == "multiply"){
        result = firstNumber * secondNumber
    }
    else if(operation.value == "divide"){
        if(secondNumber == 0){
            resultMessage.textContent = "cannot делить by zero"
            return
        }
        result = firstNumber / secondNumber
    }
    else{
        resultMessage.textContent = "pls select operation"
        return
    }
    if(!Number.isFinite(result)){
        resultMessage.textContent = "The result is outside the supported number range"
        return
    }
    resultMessage.textContent = `Result: ${Number(result.toPrecision(12))}`
});
calculatorForm.addEventListener("input",() => {
    resultMessage.textContent = "Result: —"
});