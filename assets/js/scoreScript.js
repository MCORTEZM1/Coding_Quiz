// displays highscores page
var highScores = function(){
   
    var savedScoreList = JSON.parse(localStorage.getItem('highscores')) ;
   var olEle = document.querySelector("#scorelist"); 

    for(var i=0; i < savedScoreList.length; i++){
       var playerInfo = savedScoreList[i]; 
       var scoreInfo = document.createElement('li'); 
       scoreInfo.setAttribute('id', 'score-data')
       //display text on the li element 
       scoreInfo.textContent = playerInfo.name + " - " + playerInfo.score;
       //appending to the html page 
       olEle.appendChild(scoreInfo); 

    }
};

highScores(); 