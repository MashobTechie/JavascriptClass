// Array Methods: they are various activities we can perform on an array
const names = ['Dave', 'Kurt', 'Jane', 'Tasha', 'Bob', 'John'];
console.log(names);

// const age = [Element of the array:age] 

//Array Methods
// To check the number of elements in an array.
// arrayName.length
console.log(`The length or the total number of elements in this array is ${names.length}`);


//Push method: used to add an element to the back of an array
const ourPushedName = names.push('Maryam');
console.log(ourPushedName);  // return the new length of the array
console.log(names);

// Unshift Method : used to add element to the start of an array
const unshiftedName = names.unshift('Joy');
console.log(unshiftedName); // return the new length
console.log(names);

// Pop Method: used to remove element from the end of an array
const poppedName = names.pop();
console.log(poppedName)
console.log(names)

let myAge = '23';
console.log(myAge) // return string
const myNewAge = (Number(myAge))
console.log(myNewAge) // return number

const turnAgeToString = (String(myAge))
console.log(turnAgeToString) // return string

// const myName = Dave ;
// console.log(myName) // return string


// Reverse Method: Used to reverse the elements in an array
const reversedArray = names.reverse();
// console.log(reversedArray); // returns the elements that have been reversed
console.log(reversedArray);

// tostring, toconcat 
//toString Method: Used to turn an array to string
const age = [23, 24, 25, 26, 27, 28, 29];
console.log(age.toString())

const turnArrayToString = age.toString()
console.log(turnArrayToString)

// toConcat: Used to join 2 arrrays together
const ourConcatedArrays = age.concat(names)
console.log(ourConcatedArrays);

// Slice Method:used to bring out a portion out of the whole array
//  it collects the start point and the end point

console.log(names.slice(2, 6));

//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(names)
console.log(names.splice(6, 1))
console.log(names)
console.log(names.splice(4, 2))