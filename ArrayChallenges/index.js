// Assignments
// Join Array Elements
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

// Solution
//Initiate the array myColor
const myColor = ['Red', 'Blue', 'White', 'Black'];

// To join all the elements in an array, we use join method
// The join method is an in-built method that join array elements into a single string.
// It comes with a separator()
// The separator defines how the elements should be separated (comma, space, etc.).
// If no separator is given, the default is a comma.


console.log(myColor);
let result = myColor.join();
console.log(result);

console.log(myColor.join());        // "Red,Green,White,Black" (default comma)
console.log(myColor.join(" "));     // "Red Green White Black" (space-separated)
console.log(myColor.join(" - "));   // "Red - Green - White - Black" (dash-separated)


// Empty Array
// Write a JavaScript  script to empty an array while keeping the original.

// Method 1: Setting Length to 0 (Best Method) javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr);  // Output: []

// Method 2: Using .splice() 
let arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length);
console.log(arr);  // Output: []

