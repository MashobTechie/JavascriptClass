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









