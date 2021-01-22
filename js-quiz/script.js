var timerElement= document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
var quizquestion = document.getElementById("question-content");
var coreectAnswers = document.getElementById("correctAnswer");
var wrongAnswers= document.getElementById("wrongAnswer");
var resetButton = document.querySelector(".resetButton");
var rightAnswers = "";
var wrongAnswers = "";
var timerCount;
var timer;

// click to begin the quiz
startButton.addEventListener("click", startQuiz)

//start of the quiz
function startQuiz () {
    startButton.disabled = true;
    timerCount = 500;
    quizquestion.classList.remove("hide");
    //console.log ( "startQuiz")
    startTimer()
//console.log("Started")
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