const studentName = "Satimov Damir"
const studentGroup = "SE-2525"
console.log("Name:", studentName);
console.log("Group:", studentGroup);
const greetingButton = document.querySelector("#greeting-button");
const showGreeting = ()=>{
    alert("Wsup my nigga");
}
greetingButton.addEventListener("click",showGreeting);
const runExamples = ()=>{
    const course = "Web Technologies"
    const firstNumber = 12
    const secondNumber = 4
    const isStudent = true
    console.log(`string: ${course}, Type: ${typeof course}`);
    console.log(`int: ${firstNumber}, Type: ${typeof firstNumber}`);
    console.log(`bool: ${isStudent}, Type: ${typeof isStudent}`);
    console.log("12 + 4 =", firstNumber + secondNumber);
    console.log("12 - 4 =", firstNumber - secondNumber);
    console.log("12 * 4 =", firstNumber * secondNumber);
    console.log("12 / 4 =", firstNumber / secondNumber);
    console.log("12 % 4 =", firstNumber % secondNumber);
    console.log("12 ** 4 =", firstNumber ** secondNumber);
    const introduction = `My name is ${studentName}, my group is ${studentGroup}`
    console.log(introduction);
}
document.querySelector("#examples-button").addEventListener("click", runExamples);
runExamples();
showGreeting();
