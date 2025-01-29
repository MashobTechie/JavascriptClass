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


let haveDriverLicense = true;
if (haveDriverLicense == true) {
    console.log(`Eligible to drive`)
} else {
    console.log(`Not eligible to drive`)
}


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



// function juiceProcessor (apples , mangoes , oranges){
//     let ourJuice = `We have ${apples} apples , ${mangoes} mangoes and ${oranges} oranges`
//     return (ourJuice);
// }
// let juiceDescription = juiceProcessor (8, 10, 12)
// console.log(juiceDescription);


// // Anonymous Function
// const juiceProcessor = function () {

// }
// juiceProcessor()

// Arrow Function
const newFunction = () => {

};


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �



// Check If Number
// Write a JavaScript program to check if a given argument is a number.







// Check If Even Number
// Write a JavaScript program that returns true if the given number is even, false otherwise.




// Functions calling other functions. 

const cutPieces = (fruit) => {

    let fruitPieces = fruit * 4
    return fruitPieces;
}




function juiceProcessor(apples, mangoes, oranges) {
    const applePiece = cutPieces(apples)
    console.log(`Apple pieces is ${applePiece}`)

    const mangoPiece = cutPieces(mangoes)
    const orangePiece = cutPieces(oranges)

    let ourJuice = `We have ${applePiece} pieces of apples , ${mangoPiece} pieces of  mangoes and ${orangePiece} pieces of  oranges`
    return (ourJuice);
}
let juiceDescription = juiceProcessor(8, 10, 12)
console.log(juiceDescription);