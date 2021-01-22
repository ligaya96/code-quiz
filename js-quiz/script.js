var timerElement= document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
var quizquestion = document.getElementById("question-content");
var wrongAnswers= document.getElementById("wrongAnswer");
var resetButton = document.querySelector(".resetButton");
var rightAnswers = "";
var currentQuestion= "";
var wrongAnswers = "";
var timerCount;
var timer;
// click to begin the quiz
startButton.addEventListener("click", startQuiz)
//start of the quiz
function startQuiz () {
    startButton.classList.add("hide")
    timerCount = 500;
    //currentQuestion= 0
    quizquestion.classList.remove("hide")
    startTimer();
   startQuestions();
}
function showQuestion(question) {
   // questionOne.textContent = question
    //console.log(question)
    //if correctAnswer button was pushed 
    //then store correct answer 
    //if (question.correctAnswers) {
       // startButton.dataset.correctAnswers=quesion.correctAnswers

   // }
    //button.addEventListener("click", selectAnswer)
}

// selecting right answers
function selectAnwser(){


}

//storing correctanswer points
function saveAnswers(){

}
//selecting wrong answer will reduce timer 
function wrongAnswers(){

}

// retreive highscores and display them
function retieveAnswers (){
    
}

//the questions
var questions = [
    {
        question: "What is a CDN?",
        answer: [
            {text: "Content Delivery network", correctanswer:true},
            {text: "Contact Delivery network", correctanswer:false},
            {text: "Content Drama network", correctanswer: false},
            {text: "Content Delivery Netflix",coreectAnswers:false},

        ]
    },
    {
        question: "Console.log is useful for??",
        answer: [
            {text: "Detecting", correctanswer: false},
            {text: "Debugging", correctanswer: true},
            {text: "Delivery", correctanswer:  false},
            {text: "Delonging", correctAnswers: false},

        ]
    },
    {
        question: "What are DOMS",
        answer: [
            {text: "Dogs", correctanswer: false},
            {text: "Dental", correctanswer: false},
            {text: "Document Object Model", correctanswer:  true},
            {text: "Delonging", correctAnswers: false},
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
//resetButton.addEventListener("click", resetQuiz);