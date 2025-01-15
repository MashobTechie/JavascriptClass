// Writing  conventions
// 1. camelCase eg newAge
// 2. PascalCase eg NewAge
// 3. snake_case
//  a. small snake_case eg new_age
// b. big snake_case eg New_Age or NEW_AGE

// Variables and Values
// firstname is mariam
// lastname is Abdulkareem

// A variable is a container for storing data
// Ways of declaring variables
// a. const
// b. let
// c. var


// Const : used for declaring variables that cannot be changed.
// cannot be redeclared or reassign
// eg:
const nationality = 'Nigeria'
// console.log(nationality)

// let : used fo declaring variables. They cannot be redeclared but can be reassigned
// eg:
let name = 'Tayo'
console.log(name)
// Re-assigned a value to variable name
 name= 'Tolu';  
 console.log(name)

//  var: used for declaring variables. they can be redecalred and also, be reassigned
var age = 30;
console.log(age);
// reassigned age to be 50
age = 50;
console.log(age)
// redeclarig age to be 70
var age = 70;
console.log(age);



// When naming variables:
// 1. You cannot use number to start the name of your variable
// eg:
//  let 3girlsage =90;

// 2. You can use numbers, letters and underscore(_) at the middle but you can't use & to start a variable name .

// 3. You can't use these keywords to name a varibale : let,const , var, function



// Constructingt sentences with variables.
// Create a variable for firstname, lastname and age. 
// Construct a sentence with my name is (firstname) and your (lastname). I am (age) years old.

let firstname = 'Mariam';
let lastname = 'Abdulkareem';
let myAge = 40;

console.log('My name is ' +  firstname ,lastname);
// I am 40 years old
console.log('I am ' + myAge + 'years old')