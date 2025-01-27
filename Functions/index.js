'use strict';

// Functions are block of code written together or designed to perform a partivular task
//  The format of writing function is as follows: function  nameOfFunction (parameter or argument) {}
// We used the above code to check if a driver is elgible to drive. To enance reusability, we put all these chunks of code together iside a function.
function checkDriverEligiblity() {
    // Write as many code as possible for your work

    let haveDriverLicense = true;
    if (haveDriverLicense == true) {
        console.log(`Eligible to drive`)
    } else {
        console.log(`Not eligible to drive`)
    }

};

// After naming your function, for you to be able to be able to use it, you invoke/call it.
checkDriverEligiblity()


// let haveDriverLicense = true;
// if (haveDriverLicense == true) {
//     console.log(`Eligible to drive`)
// } else {
//     console.log(`Not eligible to drive`)
// }


function addNumbers() {
    // Store the value of the input number1 from HTML into number1 variable.
    let number1 = document.getElementById('number1').value;
    // Convert the value to a number
    number1 = parseInt(number1)
    // Store the value of the input number2 from HTML into number2 variable.
    let number2 = document.getElementById('number2').value;
    // Convert the value to a number
    number2 = parseInt(number2)

    // Console.log the number1
    console.log(`This is number1 - ${number1}`)
    // Console.log the number2
    console.log(`This is number2 - ${number2}`)

    // Create a result variable which is number1 + number2
    const result = number1 + number2;

    // Consol.log the result
    console.log(`This is our result - ${result}`)
}
// addNumbers();
// console.log(number1)


// Assignment
//  Use this function knowledge to build a calculator.


function TipCalculator() {
    // Create a zero instance for the tip.
    let tip = null;

    // Create billValue variable
    let billValue = 280;

    // Create the ternary Operator statement
    // condition ? true statement : false statement

    billValue >= 50 && billValue <= 300 ? tip = 0.15 : tip = 0.2;

    let finalValue = billValue + tip;

    console.log(`The billValue is ${billValue} , the tip is ${tip} and the finalValue is ${finalValue}`)
}

TipCalculator()

// Normal Function
// function addNumber (){
//     let firstNumber = 2;
//     let secondNumber = 3;
//     let result = firstNumber + secondNumber;
//     console.log(result);
// };
// addNumber()

//  Parameter or argument
function addNumber(firstNumber, secondNumber) {
    const addBoth = firstNumber + secondNumber
    return (addBoth)
    // console.log(addBoth)
}
 const result = addNumber(3, 5)
console.log(`This is the result from argument function . ${result}`)



function juiceProcessor (apples , mangoes , oranges){
    let ourJuice = `We have ${apples} apples , ${mangoes} mangoes and ${oranges} oranges`
    return (ourJuice)
}
let juiceDescription = juiceProcessor (8, 10, 12)
console.log(juiceDescription)