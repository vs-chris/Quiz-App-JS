// const questions = [
//     {
//         question: "whats the legal age to watch porn?",
//         answers: [
//             {text: 18, correct: true},
//             {text: 17, correct: false},
//             {text: 16, correct: false},
//             {text: 15, correct: false}
//         ]        
//     },
//     {
//         question: `what will happen if you watch porn while you're still not of legal age?`,
//         answers: [
//             {text: "you go to jail", correct: false},
//             {text: "you get rewarded for your curiousity *porn music plays*", correct: false},
//             {text: "NO COMPUTER OR ANY GADGETS FOR YOU", correct: true},
//             {text: "You'll die. *boss music plays*", correct: false}
//         ]        
//     },
//     {
//         question: `What happens if you're of legal age and they catch you watching porn?`,
//         answers: [
//             {text: "you go to jail", correct: false},
//             {text: "you get rewarded for your curiousity *porn music plays*", correct: false},
//             {text: "NO COMPUTER OR ANY GADGETS FOR YOU", correct: true},
//             {text: "You'll die. *boss music plays*", correct: false}
//         ]        
//     },
//     {
//         question: `Is it better for you to read books instead of wasting time watching pornography?`,
//         answers: [
//             {text: "Yes, especially if the book is about porn *porn music plays*", correct: false},
//             {text: "Yes, because girls prefer boys who reads books. Therefore, reading books will help me get laid. *porn music plays*", correct: false},
//             {text: "Nooo. Porn gud, buk bad. *weird orangutan noises*", correct: false},
//             {text: "Yes. Books will help you be a better person.", correct: true}
//         ]        
//     }
// ];

// const questionElement = document.querySelector("#question");
// const answerButtons = document.querySelector("#answer-buttons");
// const nextButton = document.querySelector("#next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach((answer) => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);

//         if(answer.correct) {
//             button.dataset.correct = answer.correct;
//         } 

//         button.addEventListener("click", selectAnswer)
//     });
// }


// function resetState() {
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const isCorrect = selectedButton.dataset.correct === "true";
//     if (isCorrect) {
//         selectedButton.classList.add("correct")
//         score++;
//     } else {
//         selectedButton.classList.add("incorrect")
//     }

//     Array.from(answerButtons.children).forEach((button) => { 
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
    
//     nextButton.style.display = "block";
// }

// function showScore() {
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
//     nextButton.innerHTML = "Play Again!";
//     nextButton.style.display = "block";
// }

// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     } else {
//         startQuiz();
//     }
// })

// startQuiz();

const questions = [
    {
        question: "What is 10 x 5 = ?",
        answers: 
        [
            {answer: 50, comment: true},
            {answer: 40, comment: false},
            {answer: 30, comment: false},
            {answer: 20, comment: false}
        ] 
    },
    {
        question: "What is 5 x 5 = ?",
        answers: 
        [
            {answer: 50, comment: false},
            {answer: 25, comment: true},
            {answer: 22, comment: false},
            {answer: 20, comment: false}
        ]
    },
    {
        question: "What is 5 x 8 = ?",
        answers:
         [
            {answer: 50, comment: false},
            {answer: 40, comment: true},
            {answer: 22, comment: false},
            {answer: 20, comment: false}
        ]
    },
    {
        question: "What is 5 x 2 = ?",
        answers:
         [
            {answer: 50, comment: false},
            {answer: 25, comment: false},
            {answer: 22, comment: false},
            {answer: 10, comment: true}
        ]
    }
]

const thisQuestion = document.querySelector("#question");
const thisAnswers = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn ")
nextButton.addEventListener("click", nextQuest)
let indexQ = 0;
let score = 0;

function showQuestion() {
    if (indexQ < questions.length) {
        clearAnswers();
        nextButton.style.display = "none";
        thisQuestion.innerHTML = questions[indexQ].question; 
        questions[indexQ].answers.forEach((answerObj) => {
        list = document.createElement("button");
        list.classList.add("btn");
        list.innerHTML = answerObj.answer;

        if (answerObj.comment === true) {
                list.dataset.correct = answerObj.comment;
        }
        list.addEventListener("click", pickAnswer)
        thisAnswers.appendChild(list);
        })
    } else {
        clearAnswers()
        thisQuestion.innerHTML = `You scored ${score} out of ${questions.length}!`
    }
}

function clearAnswers() {

    while(thisAnswers.firstChild) {
        thisAnswers.firstChild.remove();
    }
}

function pickAnswer(e) {
    if (e.target.dataset.correct === "true") {
        e.target.classList.add("correct");
        score++;
    } else {
        e.target.classList.add("incorrect");
    }

    thisAnswers.childNodes.forEach((child) => {
        if (child.dataset.correct == "true") {
            child.classList.add("correct");
        } 
        child.disabled = true;
    })
    nextButton.style.display = "block";
}

function nextQuest() {
    if (indexQ < questions.length) {
        indexQ++;
        showQuestion();
    } else {
        score = 0;
        indexQ = 0;
        showQuestion();
    }
}

showQuestion();