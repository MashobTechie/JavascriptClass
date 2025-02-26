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
