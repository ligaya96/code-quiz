var timer = document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn")
var coreectAnswers = document.getElementById("correctAnswer")
var resetButton = document.querySelector(".resetButton")
var rightAnswers = "";
var wrongAnswers = "";
var timerCount = "";
// click to begin the quiz
startButton.addEventListener("click", startQuiz)
//start of the quiz
function startQuiz (){
console.log("Started")

}
// selecting right answers
function selectAnwser(){

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
//resetButton.addEventListener("click", resetQuiz);