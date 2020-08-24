var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var timer = document.getElementById("timer")
var highscore = document.getElementById("highscore");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var outcome = document.getElementById("outcome");
var restart = document.getElementById("re-start");
var timeLeft = 60;

let questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correct: "B"
    },
    {
        question: "The condition in an if/else statement is enclosed with: ",
        choiceA: "1. quotes",
        choiceB: "2. curly brackets",
        choiceC: "3. parenthesis",
        choiceD: "4. square brackets",
        correct: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        choiceA: "1. numbers and strings",
        choiceB:"2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        correct: "D"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables: ",
        choiceA: "1. commas",
        choiceB: "2. curly brackets",
        choiceC: "3. quotes",
        choiceD: "4. parenthesis",
        correct: "B"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is: ",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console log",
        correct: "D."
    }
];

var lastQuestion = questions.length - 1;
var nextQuestion = 0;

// show our question
function showQuestion() {
    var q = questions[nextQuestion];
    question.innerHTML = "<h1>" + q.question + "</h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);
//start the quiz
function startQuiz() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "grid";
    
}

function checkAnswer(answer) {
    if(answer == questions[nextQuestion].correct) {
        //answer is correct
        console.log("correct");
        correctAnswer();
    } else {
        console.log("wrong");
        timeLeft = timeLeft - 10;
        wrongAnswer();
    }
    if(nextQuestion < lastQuestion) {
        nextQuestion++;
        showQuestion();
    } else {
        // the quiz is over
        //show the high score
        showHighScore();

    }
}

function correctAnswer() {
    outcome.innerHTML = "That is the correct answer!";
}

function wrongAnswer() {
    outcome.innerHTML = "Sorry, that is the wrong answer.";
    
}
restart.addEventListener("click", startQuiz);
function showHighScore () {
    quiz.style.display = "none";
    highscore.style.display = "grid";
    timeLeft.innerHTML = "You finished with " + timeLeft + "seconds left." 
}
//show the timer
function showTimer() {
    timer.innerHTML = "Time left: " + timeLeft;
}
showTimer();