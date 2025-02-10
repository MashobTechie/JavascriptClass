const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
}

// log an instance of the function to the console.
console.log(calcTip(100));



const billValues = [125, 555, 44]
const ourTips = [calcTip(billValues[0]), calcTip(billValues[1]), calcTip(billValues[2])]
console.log(ourTips);

// Create an expression
// Tip for billValue 125 is 18.75
const expression = `The tip for billValue ${billValues[0]} is ${ourTips[0]}`
console.log(expression)
const totalValues = [billValues[0] + ourTips[0], billValues[1] + ourTips[1], billValues[2] + ourTips[2]]
console.log(totalValues)
// Use it as an expression
console.log(`${totalValues[0]}  is the total value of ${billValues[0]} and ${ourTips[0]}, ${totalValues[1]}  is the total value of ${billValues[1]} and ${ourTips[1]} and lastly ${totalValues[2]}  is the total value of ${billValues[2]} and ${ourTips[2]}`);


// Assignments
// Join Array Elements
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

// Empty Array
// Write a JavaScript  script to empty an array while keeping the original.

//Check All Numbers Prime
// Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false