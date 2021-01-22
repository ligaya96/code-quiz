var timerElement= document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn")
var quizquestions = document.getElementById("Quiz");
var quizcontent = document.getElementById( "question-content")
var resetButton = document.querySelector(".resetButton");
var questionButton = document.getElementById ("question-button")
var correctAnswers = true;
var currentQuestion, shuffeledQuestion
var wrongAnswers = "";
var timerCount;
var timer;
// click to begin the quiz
startButton.addEventListener("click", startQuiz)
//start of the quiz
function startQuiz () {
    startButton.classList.add("hide")
    timerCount = 500;
    currentQuestion = 0
    shuffeledQuestion = questions.sort(() => Math.random() - .5)
    quizcontent.classList.remove("hide")
    setNextQuestion();
    startTimer();
}
function setNextQuestion() {
    showQuestion(shuffeledQuestion[currentQuestion]);
}
function showQuestion(question){
    quizquestions.innerHTML = question.question
}

// selecting right answers
//function selectAnwser(){


//}

//storing correctanswer points
//function saveAnswers(){

//}
//selecting wrong answer will reduce timer 
//function wrongAnswers(){

//}

// retreive highscores and display them
//function retieveAnswers (){
    
//}

//the questions
var questions = [
    {
        question: "What is a CDN?",
        answer: [
            {a: "Content Delivery network", correctAnswer:true},
            {b: "Contact Delivery network", correctAnswer:false},
            {c: "Content Drama network", correctAnswer: false},
            {d: "Content Delivery Netflix",coreectAnswer:false},

        ]
    },
    {
        question: "Console.log is useful for??",
        answer: [
            {a: "Detecting", correctAnswer: false},
            {b: "Debugging", correctAnswer: true},
            {c: "Delivery", correctAnswer:  false},
            {d: "Delonging", correctAnswer: false},

        ]
    },
    {
        question: "What are DOMS",
        answer: [
            {a: "Dogs", correctAnswer: false},
            {b: "Dental", correctAnswer: false},
            {c: "Document Object Model", correctAnswer:  true},
            {d: "Delonging", correctAnswer
            : false},
        ]
    }
]

//timer
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            //if (coreectAnswers && timercount > 0) {}
            //clearInterval(timer);
            //winQuiz();
        }
            if (timerCount ===0 ){
                clearInterval(timer);
                loseQuiz();
            }
        
    },1000);
}
// Reset the quiz
function resetQuiz(){
    rightAnswers= 0;
    wrongAnswers=0;
} 
//resetButton.addEventListener("click", resetQuiz)