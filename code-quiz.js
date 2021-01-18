var timer = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button")
var coreectAnswers = document.querySelector("correctAnswerspan")
var resetButton = document.querySelector(".resetButton")
var correctAnswerspan = ""
var rightAnswers = "";
var wrongAnswers = "";
var timerCount = "";
//start of the quiz
function startQuiz (){
startButton.addEventListener("click", startQuiz)
}
// selecting right answers
function click (){

}
//storing correctanswer points
function saveAnswers(){

}
//wrong answer will reduce timer 
function wrongAnswers(){

}

// retreive highscores and display them
function retieveAnswers (){
    
}
// Reset the quiz
function resetQuiz(){
    rightAnswers= 0;
    wrongAnswers=0;
} 
resetButton.addEventListener("click", resetQuiz);