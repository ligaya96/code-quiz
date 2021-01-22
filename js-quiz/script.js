var timerElement= document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
var quizquestion = document.getElementById("question-content");
var questionOne = document.querySelector("one");
var questionTwo = document.getElementById("two");
var questionThree = document.getElementById("three");
var questionFour = document.getElementById("four")
var correctAnswers = document.getElementById("correctAnswer");
var wrongAnswers= document.getElementById("wrongAnswer");
var resetButton = document.querySelector(".resetButton");
var rightAnswers = "";
var currentQuestion= "";
var wrongAnswers = "";
var timerCount;
var timer;
var questions = [ "one", "two", "three" , "four"]
// click to begin the quiz
startButton.addEventListener("click", startQuiz)
//start of the quiz
function startQuiz () {
    startButton.disabled = true;
    timerCount = 500;
    currentQuestion= 0
   quizquestion.classList.remove("hide")
 //console.log ( "startQuiz")
 //console.log (questionOne)
    startTimer();
   startQuestions();
}
// question#=1
function startQuestions() { 
    showQuestion([questionOne])
   
}
function showQuestion(question) {
    questionOne.textContent = question
    //console.log(question)
    //if correctAnswer button was pushed 
    //then store correct answer 
    if (question.correctAnswers) {
        startButton.dataset.correctAnswers=quesion.correctAnswers

    }
    button.addEventListener("click", selectAnswer)
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


//questions 
//Console.log is useful for?
// What is a CDN?
//What are DOMS?
//What does getElements by ID do?


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