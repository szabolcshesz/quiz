var quiz = [{
  question: "Kivel lakik pumukli?",
  choices: ["Eber mester", "Eder mester", "Ederer mester"],
  correct: "Eder mester"
}, {
  question: "Milyen szinu pumukli haja?",
  choices: ["Kek", "Zold", "Piros"],
  correct: "Piros"
}, {
  question: "Hogyan folytatodik? Pumukli elvesz ezt, pumukli elvesz azt..",
  choices: ["Nem bantjak a kis faszt", "Nem latjak a kis ravaszt", "Nem varjak,kis paraszt"],
  correct: "Nem latjak a kis ravaszt"
}, {
  question: "Ki Susu a sarkany legjobb baratja?",
  choices: ["Nos Kiralyfi", "Hos Kiralyfi", "Vasurro baba"],
  correct: "Hos Kiralyfi"
}, {
  question: "Melyik kutyafajtanak van kunkori farka?",
  choices: ["Mopsz", "Malamut", "Uszkar"],
  correct: "Mopsz"
}];

var sumSecondsLeft = 0,
    timeInSecs,
    ticker,
    secs = 10,
    secondsleft = 0,
    score = 0,
    questionNumber = 0;

function sumTime(){
   sumSecondsLeft = sumSecondsLeft + secondsleft;
}

function stopTimer(){
  clearInterval(ticker);
}

function startTimer(secs){
   timeInSecs = parseInt(secs);
   ticker = setInterval("tick()",1000); // vegrehajtja a tick() functiont masodpercenkent
}

function tick() {
   var secs = timeInSecs;
   if (secs>0) {
      timeInSecs = timeInSecs-1;
     }
     else {
      clearInterval(ticker); // stop counting at zero
      // startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
     }
   document.getElementById("countdown").innerHTML = secs;
}
// test function to see the time-left in pop-up
function getReminder(){
var secondsleft = timeInSecs+1;
alert(secondsleft);
}


function askQ (questionNumber) {
    var choices = quiz[questionNumber].choices,
        choicesHtml = "",
        i = 0;
        
    for (i = 0; i < choices.length; i = i + 1) {
        choicesHtml += "<input type='radio' name='quiz" + questionNumber + "'value='" + choices[i] + "'>" + "<label>" + choices[i] + "</label></br>";
    }

    document.getElementById("question").innerHTML = quiz[questionNumber].question;
    document.getElementById("choices").innerHTML = choicesHtml;
    document.getElementById("score").innerHTML = "Score:" + score + " " + "right answers out of " + quiz.length + " possible.";
    document.getElementById("gameContainer2").innerHTML = secondsleft;  //Why it is uddefined???
    sumTime(); 
    startTimer(secs);
}

function checkA () {
    var userSelection,
        correctIndex,
        radios = document.getElementsByName("quiz" + questionNumber),
        i = 0;

        for (i = 0; i < radios.length; i = i + 1) {
             if (radios[i].checked) {
                userSelection = radios[i].value;
              }
             if (radios[i].value == quiz[questionNumber].correct) {
                correctIndex = i;
              }
        }
        
        if (userSelection == quiz[questionNumber].correct) {
           score = score + 1;
        }

    stopTimer();
    
    
        if (questionNumber < quiz.length - 1) {
           questionNumber = questionNumber + 1;
           askQ(questionNumber);

          } else {
            showF();
        }
}

function showF(){
  document.getElementById("gameContainer2").innerHTML = "<h2>You've complited the quiz!</h2>" + "<h3>Below are your results:</h3>" + "<h3>" + score + " out of " + quiz.length + " questions " + "</br>" +
        Math.round(score / quiz.length * 100) + "%<h3>";
} 



askQ(questionNumber);


/* Local Storage (we use it instead of cookie) test solution-not ready yet
// Check browser support
if (typeof(Storage) != "undefined") {
    // Store
    localStorage.setItem("score", "firstname", "lastname", "Date");
    // Retrieve
    document.getElementById("MyBestResults").innerHTML = localStorage.getItem("score");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
// saved area:
document.getElementById("#gameContainer2").innerHTML = "<h2>You've complited the quiz!</h2>" + "<h3>Below are your results:</h3>" + "<h3>" + score + " out of " + quiz.length + " questions " + "</br>" +
        Math.round(score / quiz.length * 100) + "%<h3>";


*/