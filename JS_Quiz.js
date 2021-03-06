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

var d = new Date();
document.getElementById("ctime").innerHTML = ("Date:" + " " + d.toDateString());

var seconds = 31;
var display = function () {
           if (seconds >= 1){
            seconds = seconds-1
            }
            //else {alert("You run out of time!");}
            document.getElementById("counter").innerHTML = seconds;
            setTimeout("display()", 1000)
        }
display()

var score = 0,
    questionNumber = 0;
var askQ = function (questionNumber) {
    var choices = quiz[questionNumber].choices,
        choicesHtml = "",
        i = 0;
        
    for (i = 0; i < choices.length; i = i + 1) {
        choicesHtml += "<input type='radio' name='quiz" + questionNumber + "'value='" + choices[i] + "'>" + "<label>" + choices[i] + "</label></br>";
    }

    document.getElementById("question").innerHTML = quiz[questionNumber].question;
    document.getElementById("choices").innerHTML = choicesHtml;
    document.getElementById("submit").innerHTML = "Next";
    document.getElementById("score").innerHTML = "Score:" + score + " " + "right answers out of " + quiz.length + " possible.";
}

var checkA = function () {
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

    document.getElementById("score").innerHTML = "Score:" + score + " " + "right answers out of " + quiz.length + " possible.";
    document.getElementById("submit").innerHTML = "Next";

      if (questionNumber < quiz.length - 1) {
        questionNumber = questionNumber + 1;
        askQ(questionNumber);
      } else {
        showF();
     }
  }

var showF = function () {

    document.getElementById("#gameContainer2").innerHTML = "<h2>You've complited the quiz!</h2>" +
        "<h3>Below are your results:</h3>" +
        "<h3>" + score + " out of " + quiz.length + " questions " + "</br>" +
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
*/