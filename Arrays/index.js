
// Arrays
'use strict';

const friend1 = 'Tolu';
const friend2 = 'Tolua';
const friend3 = 'Sope';

// Initialize
// First method: 
const friends = ['Tolu', 'Tolua', 'Sope'];
friends[0] = 'Tayo'
// const friends = [friend1, friend2 , friend3];
console.log(friends)
//Checking the length of your array
console.log(friends.length)
//  To replace/mutate an element in an array
friends[1] = 'Sheriff';
console.log(friends);
// The reason i was able to change the element of index [1] despite using const keyword to declare the variable is because only primitie values are in-mutatable while array and object are mutatable.

// I can replace an element in the array but i can't replace the whole array
// Eg 
// friends = ['Alice', 'Joseph'] //This will return an error to the console.

//All various activities thata we can do under array is called Array Method. They include;
// length, slice , map, remove etc...


// Second method:
const years = new Array(2020, 2021, 2022, 2023)
// Check or pick out a single element under an array
console.log(years[2]);

// To log the last element of any array
console.log(years[years.length - 1]);

// Note: An array as a data structure can also contain various type of data all at once.
const firstName = 'Zainab';
const teacher = [firstName, 1990, ['Mathematics', ' Literature', 'Physics', 'Chemistry'], 20000 ]
console.log(teacher);

// Assignment
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) 