var timeScore = 74;

var quizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#answers");
var viewHighScoresEl = document.querySelector("#high-scores");
var timerEl = document.querySelector("#timer");
var score = [{
    highscore: score
}];


// question objects 
var question1 = {
    question: "Commonly used data types DO NOT include:",
    choices: [
        {text: "1. strings", correct: false}, 
        {text: "2. booleans", correct: false}, 
        {text: "3. alerts",  correct: true},
        {text: "4. numbers", correct: false}],
};
var question2 = {
    question: "Arrays in JavaScript can be used to store ____________.",
    choices: [
        {text: "1. numbers and strings", correct: false}, 
        {text: "2. other arrays", correct: false}, 
        {text: "3. booleans", correct: false}, 
        {text: "4. all of the above", correct: true}],
};
var question3 = {
    question: "String values must be enclosed within ____________ when being assigned to variables.",
    choices: [
        {text: "1. commas", correct: false},  
        {text: "2. curly-brackets", correct: false},
        {text: "3. quotes", correct: true},
        {text: "4. parenthesis", correct: false}]
};
var question4 = {
    question: "A very useful too during development and debugging for printing content to the debugger is:",
    choices: [
        {text: "1. JavaScript", correct: false},
        {text: "2. terminal/bash", correct: false}, 
        {text: "3. for loops", correct: false}, 
        {text: "4. console.log", correct: true}]
};
var question5 = {
    question: "The condition in an if/else statement is enclosed with ____________.",
    choices: [ 
    {text: "1. parenthesis", correct: false}, 
    {text: "2. quotes", correct: false},  
    {text: "3. square brackets", correct: false},
    {text: "4. curly brackets", correct: true}]
};

// Array of question objects
const questionsArr = [question1, question2, question3, question4, question5];

// to make global and call into randomizer function 
let shuffledQuestions, currentQuestionIndex

// starts quiz after start button clicked
var startQuiz = function () {
    questionsEl.textContent = "Coding Quiz Challenge";
    
    var openingStatement = document.createElement("p");
      openingStatement.className = "rules";
      openingStatement.textContent = 
      "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 sections!";
      quizEl.appendChild(openingStatement);
      quizEl.className = "center-opening";
  
    var startBtn = document.createElement("button");
      startBtn.textContent = "Start Quiz";
      startBtn.className = "start-btn"
      startBtn.addEventListener("click", function () {
          quizEl.removeChild(startBtn);
          quizEl.removeChild(openingStatement);
          quizEl.classList.remove("center-opening");
          questionsEl.textContent = "";
          shuffledQuestions = questionsArr.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
          startTimer();
          setNextQuestion();
          
      });
  
      quizEl.appendChild(startBtn)
  
  };
// initialize quiz on load. 
startQuiz();

// shuffles questions and resets HMTL state  
function setNextQuestion (){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// display question on window 
function showQuestion(question) {
    questionsEl.innerHTML = question.question;
    question.choices.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        // checks if question is answer correctly and applies penalty if false 
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', function(){
          if(answer.correct) {
            currentQuestionIndex++;
            setNextQuestion();
        } else 
            timePenalty();
            currentQuestionIndex++;
            setNextQuestion();
        })
        
        answerChoicesEl.appendChild(button)
    });
};

// clears questions and prompt user input data for highscore 
var endGame = function() {
    questionsEl.textContent = "All done!";

    var score = document.createElement("h1")
    score.classList.add('score');
    score.textContent = "Your score is " + timeScore;
    answerChoicesEl.appendChild(score);

    var record = document.createElement('span');

    var name = document.createElement("p");
    name.classList.add('score');
    name.textContent = "Add your name ";
    record.appendChild(name)
    
    var addName = document.createElement('input');
    addName.setAttribute('id', 'user-data')
    addName.setAttribute("type", "text");
    addName.setAttribute("size", "45")
    name.appendChild(addName);

    var submitBtn = document.createElement('button')
    submitBtn.classList.add('start-btn')
    submitBtn.textContent = "Submit"

    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        quizEl.removeChild(record);
        answerChoicesEl.removeChild(score);
        console.log("Submit button clicked", addName.value); 
        save(addName.value, timeScore);
    })
    name.appendChild(submitBtn);
    
    quizEl.appendChild(record);
};

// save user data and highscore
function save(playerName, playerScore){
    // get data from input
    var newData = { 
        name: playerName, 
        score: playerScore
    }
    
    // get old data and add it to the new data || if there is nothing saved at the start, then create an empty array
    var oldData = JSON.parse(localStorage.getItem('highscores')) || [];
    oldData.push(newData);

    // save the old + new data to local storage. 
    localStorage.setItem('highscores', JSON.stringify(oldData));
    //redirect ot new page 
    window.location = "scores.html"; 
};



// replaces questions HMTL text and ends game once questions array has cycled 
function resetState(){
    while(answerChoicesEl.firstChild) {
        answerChoicesEl.removeChild(answerChoicesEl.firstChild)
    }
    if((shuffledQuestions.length < currentQuestionIndex + 1)){
        endGame();
    }
};

// starts the timer once the start game button is clicked 
function startTimer (){
     var timeRemaining = setInterval(function(){
        if(timeScore <= 0 || shuffledQuestions.length < currentQuestionIndex + 1 ){
          clearInterval(timeRemaining);
          document.getElementById("timer").innerHTML = "Time: " + timeScore;
        } else {
          document.getElementById("timer").innerHTML = "Time: " + timeScore;
        };
        timeScore--;
      }, 1000);
};

// applies the time penalty when called  
var timePenalty = function(){
    timeScore = timeScore - 10;
};
