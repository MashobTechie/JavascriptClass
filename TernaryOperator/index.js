// Ternary Operator
// It is used for writing cositions. 
// Tenary Operator follows this pattern
// condition ? response if true : resposne if false

let myAge = 20
// To check if i'm eligible to vote

// For If Else Statement
if (myAge >= 18) {
    console.log(`Eligible to vote`)
} else {
    console.log(`Not eligible to vote`)
}

// For Ternary Operator
myAge >= 18 ? console.log(`Eligible to vote`) : console.log(`Not eligible to vote`)


// Assignment.
// Using Ternary Operator
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
//  Data 1: Test for bill values 275, 40 and 430
// Hints:
//  To calculate 20% of a value, simply multiply it by 20/100 = 0.2
//  Value X is between 50 and 300, if it's >= 50 && <= 300 


// Solution
// Setting a value for bill
let bill = 330;

// Setting a value zero for the tip
let tip = null;

// Conditional Statement : If bill is greater than or equal to  50 and less than or equal to 300, tip is 0.15 else tip is 0.2
bill >= 50 && bill <= 300 ? tip = 0.15 : tip = 0.2;

// Conditional Statement: If bill is greater than or equal to 50 and less than or equal to 300, we have bill multiplied by 0.15 , else bill is multiplied by 0.2. 
bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Declare a variable totalValue which is bill + tip
const totalValue = bill + tip;

// Console.log the statement
// “The bill was 275, the tip was 41.25, and the total value 316.25”
console.log(`The bill was ${bill}, the tip was ${tip} and the totalValue was ${totalValue}`);