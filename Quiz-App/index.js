// Create the quiz data
const QuizData = [
    {
        question: "A second-year college student is usually called a what?",
        options: [
            "sophomore",
            "senior",
            "freshman ",
            "junior "
        ],
        answer: "sophomore"
    },
    {
        question: 'What is the capital of France?',
        options: [
            'Berlin',
            'Kenya',
            'Washington DC',
            'Paris'
        ],
        answer: 'Paris'
    },
    {
        "question": "From what language does the term 'R.S.V.P.' originate?",
        options: [
            "Russian",
            "Italian",
            "Portuguese",
            "French"
        ],
        answer: "French"
    },

];

// To get through the quiz data questions and options

console.log(QuizData[0].question);
console.log(QuizData[0].options[0]);

// if you check this, they give you the first question and the first option in the first question.DO the same for the rest of the questions and options.
// Then try using a loop to get through all the questions and options.