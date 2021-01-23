const startButton = document.getElementById('start-btn');
const welcomePage = document.getElementById('quiz-fp');
const finalScore = document.getElementById('quiz-lp');
const quizQuestions = document.getElementById('qst-cont');
let q1 = document.getElementById('qsts');
let btn1 = document.getElementById('i');
let btn2 = document.getElementById('y');
let btn3 = document.getElementById('e');
let btn4 = document.getElementById('g');
const nextButton = document.getElementById('nxt-btn');
const allOption = document.getElementById('opt-cont').children;
let scoreRec = document.getElementsByClassName('result');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

// Tracks the index of the 'question' property in the 'questions' array of objects
let questionIndex = 0;
let score = 0;


// For start button to start quiz
function startQuiz() {
    console.log("start Quiz!");
    welcomePage.classList.add('hide');
    quizQuestions.classList.remove('hide');
    nextQuestion();
}

// For next button to go to next quiz
function nextQuestion() {
    // shows the result page after the fifth question
    if (questionIndex == 9) {
        quizQuestions.classList.add('hide');
        finalScore.classList.remove('hide');
    }
    showQuestions();
    reset();
    questionIndex++;
}

// Shows the questions
function showQuestions() {
    let q = questions[questionIndex];
    q1.innerHTML = q.question;
    btn1.innerHTML = q.options[0];
    btn2.innerHTML = q.options[1];
    btn3.innerHTML = q.options[2];
    btn4.innerHTML = q.options[3];

}

// To verify the chosen option
function checkAnswer(option) {
    // To make the questionIndex start from 0 again
    let q = questions[questionIndex - 1];
    if (option.id == q.answer) {
        option.classList.add('correct');
        score++;
        scoreKeeper();
    } else {
        option.classList.add('wrong');
    }
    optionInvalid()
}

//To mmake other options unclickable
function optionInvalid() {
    let q = questions[questionIndex - 1];
    for (let i = 0; i < allOption.length; i++) {
        allOption[i].classList.add('invalid');
        if (allOption[i].id == q.answer) {
            allOption[i].classList.add('correct');
        }
    }
}

// resets the class of the buttons
function reset() {
    for (let i = 0; i < allOption.length; i++) {
        allOption[i].classList.remove('correct', 'wrong', 'invalid');
    }
}

// Keeps record of the questions gotten correctly
function scoreKeeper() {
    // iterates the modification of scores on question page and 
    // final result page
    for (let i = 0; i < scoreRec.length; i++) {
        scoreRec[i].innerHTML = `Your Score: ${score}/9`;
    }
}

// Questions, options and answer
const questions = [
    {
        question: "Where  does Saitama and Genos live ?",
        options: [
            "I. In the Z city in an apartment", "Y. In the A-city in an apartment", "E. In the Z city in a house", "G. In the C city"
        ],
        answer: 'i'
    },
    {
        question: "Who is Genos?",
        options: [
            "I. He is Saitama's student", "Y. He is Saitama's student and a cyborg", "E. He is Saitama's teacher", "G. He is Saitama's friend"
        ],
        answer: 'y'
    },
    {
        question: "What is the name of the ninja who wants to finish Saitama?",
        options: [
            "I. sonic", "Y. Meliodas", "E. naruto", "G. deku"
        ],
        answer: 'i'
    },
    {
        question: "Which Hokage sealed the nine-tailed fox inside Naruto?",
        options: [
            "I. second Hokage", "Y. fourth Hokage", "E. third Hokage", "G. first Hokage"
        ],
        answer: 'y'
    },
    {
        question: "Which of the following ninjas is a kunoichi?",
        options: [
            "I. Gaara", "Y. Naruto", "E. Madara", "G. Sakura Haruno"
        ],
        answer: 'g'
    },
    {
        question: " Purity is a virtue for which sin?",
        options: [
            "I. Sloth", "Y. Lust", "E. Pride", "G. Envy"
        ],
        answer: 'y'
    },
    {
        question: "Every member of Akatsuki is a what?",
        options: [
            "I. swordsman", "Y. kage", "E. S-rank criminal", "G. kunoichi"
        ],
        answer: 'e'
    },
    {
        question: "Who gave Aizawa his hero name?",
        options: [
            "I. Himself", "Y. All-Might", "E. Present Mic",  "G. Midnight"
        ],
        answer: 'e'
    },
    {
        question: "The Seven Deadly sins are as follows: Greed, Sloth, Anger, Envy, Pride, Lust and Gluttony.",
        options: [
            "I. False", "Y. No idea", "E. Beerus", "G. True"
        ],
        answer: 'g'
    },

]