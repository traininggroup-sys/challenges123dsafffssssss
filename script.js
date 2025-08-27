const questions = [
    {
        question: "ما هو عاصمة فرنسا؟",
        answers: [
            { text: "باريس", correct: true },
            { text: "لندن", correct: false },
            { text: "برلين", correct: false },
            { text: "مدريد", correct: false }
        ]
    },
    {
        question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
        answers: [
            { text: "الأرض", correct: false },
            { text: "المشتري", correct: true },
            { text: "المريخ", correct: false },
            { text: "زحل", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question').innerText = question.question;
    const buttons = document.querySelectorAll('.btn');
    
    // تأكد من أن عدد الأزرار يتطابق مع عدد الأجوبة
    buttons.forEach((button, index) => {
        if (index < question.answers.length) {
            button.innerText = question.answers[index].text;
            button.classList.remove('correct', 'wrong');
            button.style.display = 'block'; // إظهار الزر
        } else {
            button.style.display = 'none'; // إخفاء الزر إذا لم يكن هناك إجابة
        }
    });
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    const selectedAnswer = question.answers[index];
    if (selectedAnswer && selectedAnswer.correct) {
        score++;
    }
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button, i) => {
        if (question.answers[i] && question.answers[i].correct) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    document.getElementById('next-button').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.getElementById('next-button').classList.add('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('score').innerText = score;
    document.getElementById('score-container').classList.remove('hidden');
}

startGame();
