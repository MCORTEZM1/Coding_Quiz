var timeScore = 74

var quizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#answers");
var viewHighScoresEl = document.querySelector("#high-scores");
var timerEl = document.querySelector("#timer");

var ranking = {
    name: "",
    score: "",
}

var startTimer = function (){
    var timeRemaining = setInterval(function(){
        if(timeScore <= 0){
          clearInterval(timeRemaining);
          document.getElementById("timer").innerHTML = "Out of time!";
        } else {
          document.getElementById("timer").innerHTML = "Time: " + timeScore;
        };
        timeScore--;
      }, 1000);
};
var timePenalty = function(){
    timeScore = timeScore - 10;
};
var opening = function () {
  questionsEl.textContent = "Coding Quiz Challenge";
  
  var openingStatement = document.createElement("p");
    openingStatement.className = "rules";
    openingStatement.textContent = 
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 sections!";
    quizEl.appendChild(openingStatement);
    quizEl.className = "center-opening";

  var startBtn = document.createElement("button");
    startBtn.textContent = "Start Quiz";
    startBtn.className = "btn"
    startBtn.addEventListener("click", function () {
        quizEl.removeChild(startBtn);
        quizEl.removeChild(openingStatement);
        quizEl.classList.remove("center-opening");
        startTimer();
        questionOne();
        
    });

    quizEl.appendChild(startBtn)

};
opening();

var questionOne = function () {
    questionsEl.textContent = "Commonly used data types DO NOT include:";

    var answer1 = document.createElement("li")
    answer1.className = "answer-choices"
    answer1.textContent = "1. strings"
    answerChoicesEl.appendChild(answer1);
    answer1.addEventListener("click", function(){
        timePenalty()
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionTwo();
    });
    var answer2 = document.createElement("li")
    answer2.className = "answer-choices"
    answer2.textContent = "2. booleans"
    answerChoicesEl.appendChild(answer2);
    answer2.addEventListener("click", function(){
        timePenalty()
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionTwo();
    });
    var answer3 = document.createElement("li")
    answer3.className = "answer-choices"
    answer3.textContent = "3. alerts"
    answerChoicesEl.appendChild(answer3);
    answer3.addEventListener("click", function(){
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Correct!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionTwo();
    })
    var answer4 = document.createElement("li")
    answer4.className = "answer-choices"
    answer4.textContent = "4. numbers"
    answerChoicesEl.appendChild(answer4);
    answer4.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionTwo();
    });
};

var questionTwo = function (){
    questionsEl.textContent = "Arrays in JavaScript can be used to store ____________.";
    answerChoicesEl.textContent= "";

    var answer1 = document.createElement("li")
    answer1.className = "answer-choices"
    answer1.textContent = "1. numbers and strings"
    answerChoicesEl.appendChild(answer1);
    answer1.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionThree();
    });
    var answer2 = document.createElement("li")
    answer2.className = "answer-choices"
    answer2.textContent = "2. other arrays"
    answerChoicesEl.appendChild(answer2);
    answer2.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionThree();
    });
    var answer3 = document.createElement("li")
    answer3.className = "answer-choices"
    answer3.textContent = "3. booleans"
    answerChoicesEl.appendChild(answer3);
    answer3.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionThree();
    });
    var answer4 = document.createElement("li")
    answer4.className = "answer-choices"
    answer4.textContent = "4. all of the above"
    answerChoicesEl.appendChild(answer4);
    answer4.addEventListener("click", function(){
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Correct!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionThree();
    })
};

var questionThree = function() {
    questionsEl.textContent = "String values must be enclosed within ____________ when being assigned to variables.";
    answerChoicesEl.textContent= "";

    var answer1 = document.createElement("li")
    answer1.className = "answer-choices"
    answer1.textContent = "1. commas"
    answerChoicesEl.appendChild(answer1);
    answer1.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionFour();
    });
    var answer2 = document.createElement("li")
    answer2.className = "answer-choices"
    answer2.textContent = "2. curly-brackets"
    answerChoicesEl.appendChild(answer2);
    answer2.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionFour();
    });
    var answer3 = document.createElement("li")
    answer3.className = "answer-choices"
    answer3.textContent = "3. quotes"
    answerChoicesEl.appendChild(answer3);
    answer3.addEventListener("click", function(){
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Correct!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionFour();
    });
    var answer4 = document.createElement("li")
    answer4.className = "answer-choices"
    answer4.textContent = "4. parenthesis"
    answerChoicesEl.appendChild(answer4);
    answer4.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionFour();
    });
};

var questionFour = function() {
    questionsEl.textContent = "A very useful too during development and debugging for printing content to the debugger is:";
    answerChoicesEl.textContent= "";

    var answer1 = document.createElement("li")
    answer1.className = "answer-choices"
    answer1.textContent = "1. JavaScript"
    answerChoicesEl.appendChild(answer1);
    answer1.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionFive();
    });
    var answer2 = document.createElement("li")
    answer2.className = "answer-choices"
    answer2.textContent = "2. terminal/bash"
    answerChoicesEl.appendChild(answer2);
    answer2.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
        questionFive();
    });
    var answer3 = document.createElement("li")
    answer3.className = "answer-choices"
    answer3.textContent = "3. for loops"
    answerChoicesEl.appendChild(answer3);
    answer3.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionFive();
    });
    var answer4 = document.createElement("li")
    answer4.className = "answer-choices"
    answer4.textContent = "4. console.log"
    answerChoicesEl.appendChild(answer4);
    answer4.addEventListener("click", function(){
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Correct!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
        questionFive();
    })
};

var questionFive = function() {
    questionsEl.textContent = "The condition in an if/else statement is enclosed with ____________.";
    answerChoicesEl.textContent= "";

    var answer1 = document.createElement("li")
    answer1.className = "answer-choices"
    answer1.textContent = "1. parenthesis"
    answerChoicesEl.appendChild(answer1);
    answer1.addEventListener("click", function(){
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Correct!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
    });
    var answer2 = document.createElement("li")
    answer2.className = "answer-choices"
    answer2.textContent = "2. quotes"
    answerChoicesEl.appendChild(answer2);
    answer2.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right"
        quizEl.appendChild(choice);
    });
    var answer3 = document.createElement("li")
    answer3.className = "answer-choices"
    answer3.textContent = "3. square brackets"
    answerChoicesEl.appendChild(answer3);
    answer3.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
    });
    var answer4 = document.createElement("li")
    answer4.className = "answer-choices"
    answer4.textContent = "4. curly brackets"
    answerChoicesEl.appendChild(answer4);
    answer4.addEventListener("click", function(){
        timePenalty();
        quizEl.className = "choice-made";
        var choice = document.createElement("h1");
        choice.textContent = "Wrong!";
        choice.className = "wrong-or-right";
        quizEl.appendChild(choice);
    });
};

var highScores = function(){
    questionsEl.textContent = "The condition in an if/else statement is enclosed with ____________.";
    answerChoicesEl.textContent= "";

};