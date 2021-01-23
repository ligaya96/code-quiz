var timerElement= document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn")
var quizquestions = document.getElementById("Quiz");
var quizcontent = document.getElementById( "question-content");
var resetButton = document.getElementById("resetbutton");
var nextButton = document.getElementById ("nextbutton" );
var questionButton = document.getElementById ("question-buttons");
var resultsScore = document.getElementById ("Results");
var correctAnswers = true;
var currentQuestion, shuffeledQuestion
var wrongAnswers = 0
var timerCount;
var timer;
// click to begin the quiz
startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", ()=> {
    currentQuestion++
    StartQuestion()
})
//start of the quiz
function startQuiz () {
    startButton.classList.add("hide")
    timerCount = 500;
    currentQuestion = 0
    shuffeledQuestion = questions.sort(() => Math.random() - .5)
    quizcontent.classList.remove("hide")
    StartQuestion();
    startTimer();
}
// Starting Questions
function StartQuestion() {
    resetQuestions()
    showQuestion(shuffeledQuestion[currentQuestion]);
}
// Showing the Questions
function showQuestion(question){
    quizquestions.innerText = question.question
    question.answer.forEach(answer => {
        var Button = document.createElement("button")
        Button.innerText = answer.text
        Button.classList.add("Btn")
        //console.log (answer.text)
        //storing correct answers
        if (answer.correctAnswers) {
          Button.dataset.correctAnswers = answer.correctAnswers
        }
        Button.addEventListener("click", RightAnwser);
        questionButton.appendChild(Button);
      console.log (questionButton)
    });
}
// resetting original question buttons to actual questions, 
function resetQuestions() {
nextButton.classList.add("hide")
resetButton.classList.add("hide")
while (questionButton.firstChild) {
    questionButton.removeChild(questionButton.firstChild)
    }
    
}
// selecting right answers
function RightAnwser(e){
    var clickedbutton = e.target
if (shuffeledQuestion.length > currentQuestion + 1){
nextButton.classList.remove("hide")
} else {
    startButton.innerHTML = "Submit"
    resetButton.classList.remove("hide")
}
}
//storing correctanswer points
function saveAnswers(){
localStorage.setItem(rightAnswer)
}

//selecting wrong answer will reduce timer 
function wrongAnswer(){
    wrongAnswers = document.querySelectorAll("correctAnswer:false");

}

// retreive highscores and display them
function retieveAnswers (){

}


//the questions
var questions = [
    {
        question: "What is a CDN?",
        answer: [
            {text: "Content Delivery network", correctAnswer:true},
            {text: "Contact Delivery network", correctAnswer:false},
            {text: "Content Drama network", correctAnswer: false},
            {text: "Content Delivery Netflix",coreectAnswer:false},

        ]
    },
    {
        question: "Console.log is useful for??",
        answer: [
            {text: "Detecting", correctAnswer: false},
            {text: "Debugging", correctAnswer: true},
            {text: "Delivery", correctAnswer:  false},
            {text: "Delonging", correctAnswer: false},

        ]
    },
    {
        question: "What are DOMS?",
        answer: [
            {text: "Dogs", correctAnswer: false},
            {text: "Dental", correctAnswer: false},
            {text: "Document Object Model", correctAnswer:  true},
            {text: "Delonging", correctAnswer: false},
        ]
    }
]

//timer
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {}
            //winQuiz
           if (timerCount ===0 ){
                clearInterval(timer);
        
            }
        
    },1000);
}
//adding the reset Quiz
function resetQuiz(){
   resultsScore.classList.remove("hide")
   questionButton.classList.add('hide')
    quizcontent.classList.add("hide")
}
resetButton.addEventListener("click", resetQuiz)
