'use strict';
// Objects

// Array
const nameArray = ['Joy', 'Kate', 'David'];

// Object is a container for storing key:value pairs
// Key also  means property or name

// To initialize an object:

// First method: Use of curly bracket 
// const boy = {
//     firstName: 'David',
//     lastName: 'Luiz',
//     age: 2025 - 2000,
//     friends: ['John', 'Katherine', 'David',],
//     occupation: 'Doctor',

// };
// console.log(boy);


// Alert is used to show an output
// alert(boy.firstName);









const user = {
    firstname: 'David',
    lastname: 'Kevin',
    email: 'john@example.com',

};
console.log(user);

user.lastname = 'Paul'
console.log(user);




// Second Method: Use of object keyword

const girl = new Object();



console.log(girl)

// Ways of adding properties to an object
// Dot Notation
girl.firstName = 'Joy';
girl.lastName = 'John';
girl.age = 30;
console.log(girl);


// Bracket Notation

girl['age'] = 37;
console.log(girl);



const boy = {
    firstName: 'David',
    lastName: 'Luiz',
    age: 2025 - 2000,
    friends: ['John', 'Katherine', 'David',],
    occupation: 'Doctor',

};
console.log(boy);

// Use of prompt: Prompts allows us to ask questions
const userQuestion = prompt('What do you want to know about boy? The detail must be between firstName, lastName , age, friends , occupation');
console.log(`User wants to know ${userQuestion} about the boy`);
const answer = boy[userQuestion]
// console.log(answer);

// console.log(userQuestion)

if (boy[userQuestion]) {
    console.log(answer)
} else {
    console.log('The request is invalid!. The detail must be between firstName, lastName , age, friends , occupation')
}



// Assignment
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 
 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,

    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}
// console.log(m);

console.log(mark.calcBMI(), mark);


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
console.log(john.calcBMI(), john);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} with a BMI of ${mark.bmi} has higher bmi than  ${john.fullName} BMI of ${john.bmi}`);

} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} with a BMI of ${john.bmi} has higher bmi than  ${mark.fullName} BMI of ${mark.bmi}`);
}

else {
    console.log(`It is a draw. No one nhas higher BMI than the other`)
}
