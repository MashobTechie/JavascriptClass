// // Writing  conventions
// // 1. camelCase eg newAge
// // 2. PascalCase eg NewAge
// // 3. snake_case
// //  a. small snake_case eg new_age
// // b. big snake_case eg New_Age or NEW_AGE

// // Variables and Values
// // firstname is mariam
// // lastname is Abdulkareem

// // A variable is a container for storing data
// // Ways of declaring variables
// // a. const
// // b. let
// // c. var


// // Const : used for declaring variables that cannot be changed.
// // cannot be redeclared or reassign
// // eg:
// const nationality = 'Nigeria'
// // console.log(nationality)

// // let : used fo declaring variables. They cannot be redeclared but can be reassigned
// // eg:
// let name = 'Tayo'
// console.log(name);

// // Re-assigned a value to variable name
// name = 'Tolu';
// console.log(name)

// //  var: used for declaring variables. they can be redecalred and also, be reassigned
// var age = 30;
// console.log(age);
// // reassigned age to be 50
// age = 50;
// console.log(age)
// // redeclaring variable age to be 70
// var age = 70;
// console.log(age);



// // When naming variables:
// // 1. You cannot use number to start the name of your variable
// // eg:
// //  let 3girlsage =90;

// // 2. You can use numbers, letters and underscore(_) at the middle but you can't use & to start a variable name .

// // 3. You can't use these keywords to name a varibale : let,const , var, function



// // Constructingt sentences with variables.
// // Create a variable for firstname, lastname and age. 
// // Construct a sentence with my name is (firstname) and your (lastname). I am (age) years old.

// let firstname = 'Mariam';
// let lastname = 'Abdulkareem';
// let myAge = 40;

// console.log('My name is ' + firstname, lastname);
// // I am 40 years old
// console.log('I am ' + myAge + 'years old')


// // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// // Your tasks:
// // 1. Store Mark's and John's mass and height in variables
// // 2. Calculate both their BMIs using the formula (you can even implement both versions)
// // 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

// // Solution
// let markHeight = 6;
// let markMass = 70;
// let johnHeight = 5;
// let johnMass = 60;

// let markBMI = markMass / (markHeight ** 2);
// console.log('markBMI is ' + markBMI);
// let johnBMI = johnMass / (johnHeight ** 2);
// console.log('johnBMI is ' + johnBMI);

// if (markBMI > johnBMI) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // console.log('MarkBMI is ' + markBMI); 
// // first way if writing statement in the console.log

// // second way of writing statement in the console.log
// // Using back-tick(``) and dollar-sign($) and {}. This is called string literals

// console.log(`MarkBMI is ${markBMI}`);




// // Assignment: Build a Simple To-Do List Using JavaScript
// Objective:
// Create an interactive to-do list using JavaScript and the DOM.



const quizData = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" }
];

let currentQuestionIndex = 0;
let selectedAnswers = {}; // Store selected answers

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    questionEl.textContent = quizData[currentQuestionIndex].question;
    optionsEl.innerHTML = "";

    quizData[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");

        if (selectedAnswers[currentQuestionIndex] === option) {
            button.classList.add(option === quizData[currentQuestionIndex].answer ? "correct" : "wrong");
        }

        button.addEventListener("click", () => checkAnswer(button, option));
        optionsEl.appendChild(button);
    });

    document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;

    // Change button text to "Submit" on the last question
    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? "Submit" : "Next";
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    selectedAnswers[currentQuestionIndex] = selectedAnswer;

    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
    button.classList.add(selectedAnswer === correctAnswer ? "correct" : "wrong");
}

function calculateScore() {
    let score = 0;
    quizData.forEach((question, index) => {
        if (selectedAnswers[index] === question.answer) {
            score++;
        }
    });
    return score;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        const score = calculateScore();
        alert(`Quiz Completed! Your score: ${score}/${quizData.length}`);

        currentQuestionIndex = 0; // Reset quiz to first question
        selectedAnswers = {}; // Clear previous selections
        loadQuestion();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

loadQuestion();









