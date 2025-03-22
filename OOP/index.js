// OOP in Javascript

// In JS, we have two ways of writing code. 
// Function oriented programming
// Object Oriented Programming: Here, we use object classs and constructor

// Object: Is a collection of properties which comes in key and value pair

const car = {
    tyres: 4,
    steeringWheel: 1
}

// This is a car object instance.

// Object-Oriented Programming is a programming style based on classes and objects. 
// OOP was developed to make code more flexible and easier to maintain.
// JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.

// What are Classes and Objects in JavaScript?

// What is a Class?
// You can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like an template for an object.

// We can create classes using the class keyword which is reserved keyword in JavaScript. Classes can have their own properties and methods. 

// What is an Object?
// An object is an instance of a class. Now with the help of the house class we can construct a house. We can construct multiple houses with the help of same house class.

// Example of Classes and Objects in Action
// Let's take a simple example to understand how classes and objects work.

// Consider a Student class. Student can have properties like name, age, standard, and so on, and functions like study, play, and do home work.
class Student {
    // Data (Properties)
    Name
    Age
    Standard

    // Methods (Action)/ Functions
    study() {
        // Study
        let textbook = 'Mathematics'
        console.log(`Student is reading ${textbook}`)
    }

    Play() {
        // Play
        let toy = 'Ball'
        console.log(`Studet is playing ${toy}`)
    }

    doHomeWork() {
        // Do Home Work
        let subject = 'English';
        console.log(`Student is studying ${subject}`)
    }

}

// With the help of the above class, we can have multiple students or instances.
// Here's info for Student - 01


// There are 4 main principles in OOP, and they are:

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism