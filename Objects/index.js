//Objects
'use strict';

const teacher = [
    'Tolu',
    15
]

//Object is a container used for storing a name: value pair.

// First Method:
const car = {
    // Properties of car object
    tyres: 4,
    steering: 1,
    windscreen: 2,
    doors: 4,


};

console.log(car)



// Second Method
const newCar = new Object();

// Dot And Bracket Notation: They're used to retrieve data from object. 

//Using dot notation
console.log('' + (car.tyres));
//Using bracket notation
console.log('This car has ' + car['tyres']);
const carDescription = 'This car has ' + car['tyres'] + ' tyres ' + car['steering'] + ' steering ' + car['doors'] + ' doors';
console.log(carDescription)

// console.log(car['steering'])
// console.log(car['doors'])
// console.log(car['windscreen'])
