'use strict';

// Functions are block of code written together or designed to perform apartivular task
//  The format of writing function is as follows: function  nameOfFunction (parame or argument) {}
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