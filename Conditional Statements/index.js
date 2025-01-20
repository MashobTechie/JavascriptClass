// Conditional Statements
//  They are used to perform different actions based on different conditions.   

// To check if a person is elegible to vote;
let tayoAge = 17;
let toluAge = 18;

// DOM manipulation
let voterInput = document.getElementById('UserAge')


// To check if tayo is eleigible to vote:
if(tayoAge >= 18){
    console.log('Tayo is eligible to vote');
}
else{
    console.log('Tayo is not eligible to vote');
};

if(toluAge >= 18){
    console.log('Tolu is eligible to vote');
}
else{
    console.log('Tolu is not eligible to vote');
};

// && means and
//  ||  means or

// To check if tayo or tolu are eligible:
if (tayoAge || toluAge >= 18) {
    console.log('Gift will be given to them')
} else {
    console.log('No gift for them')
}

// To check if both tayo and tolu are elihible
if (toluAge && tayoAge >= 18) {
    console.log('Gift will be given to them')
} else {
    console.log('No gift for them')
}

// How to change the data type
// Changing a number to string
let ourNumber = 10;
console.log(ourNumber + 1);

let ourString = ourNumber.toString()
console.log(ourString + 1)

// concatenate = 101

// Changing a string to a number
let ourStringNumber = '10';
console.log(ourStringNumber + 1);   
// Tocahnge from string to number , we'll use the parseInt() method

let myNumber = '10';
console.log(parseInt(myNumber));

// ASSIGNMENT
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
//  Data 1: Test for bill values 275, 40 and 430
// Hints:
//  To calculate 20% of a value, simply multiply it by 20/100 = 0.2
//  Value X is between 50 and 300, if it's >= 50 && <= 300 