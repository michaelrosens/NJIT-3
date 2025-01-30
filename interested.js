const questions = [
    {
        question: "Do you enjoy solving puzzles and logical problems?",
        answers: ["Yes", "Sometimes", "No"]
    },
    {
        question: "Are you interested in how computers and technology work?",
        answers: ["Very interested", "Somewhat interested", "Not interested"]
    },
    {
        question: "How comfortable are you with math?",
        answers: ["Very comfortable", "Somewhat comfortable", "Not comfortable"]
    },
    {
        question: "Do you like working on projects that require attention to detail?",
        answers: ["Yes, definitely", "Sometimes", "Not really"]
    },
    {
        question: "Are you persistent when facing challenging problems?",
        answers: ["Always", "Usually", "Rarely"]
    }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-btn');

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        const answersDiv = document.createElement('div');
        answersDiv.classList.add('answers');

        question.answers.forEach((answer, answerIndex) => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            answerDiv.innerHTML = `
                <label class="checkBox">
                    <input type="checkbox" name="question${index}" value="${answerIndex}">
                    <div class="transition"></div>
                </label>
                <label>${answer}</label>
            `;
            answersDiv.appendChild(answerDiv);
        });

        questionDiv.appendChild(answersDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    questions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const checkedInput = answerContainer.querySelector('input:checked');

        if (checkedInput) {
            score += 2 - parseInt(checkedInput.value);
        }
    });

    let result = '';
    if (score >= 8) {
        result = "Great! You seem to have a strong aptitude for Computer Science Principles. This course would be an excellent fit for you!";
    } else if (score >= 5) {
        result = "You show potential interest in Computer Science Principles. While you might face some challenges, you could still enjoy and benefit from the course.";
    } else {
        result = "Computer Science Principles might be challenging for you based on your current interests. However, if you're passionate about learning, don't let this discourage you!";
    }

    resultContainer.innerHTML = `<h3>Your Result:</h3><p>${result}</p>`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);