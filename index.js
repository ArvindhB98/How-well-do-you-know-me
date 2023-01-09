var readlineSync = require("readline-sync");
var score = 0;
function welocme() {
  var userName = readlineSync.question("May I have your name? ");
  console.log(" Welcome " + userName + ", to How well do you know Arvindh? ");
  var userReply = readlineSync.question("Are you ready to play the game? ");
  if (userReply === "yes") {
    console.log("Let's go!")
  } else {
    console.log("Sorry,try again");
  }
}
var questions = [{
  question: "Where do I live? ",
  answer: "Chennai"
}, {
  question: "What is my favourite food? ",
  answer: "Dosa with Sambar"
}, {
  question: "My favourite US television show? ",
  answer: "Friends"
}, {
  question: "What is my favourite sport ? ",
  answer: "Cricket"
}, {
  question: "My favourite marvel character? ",
  answer: "Captain America"
}];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are wrong");
    score = score - 1;
  }
  console.log("Your current score: ", score);
  console.log("-------------")
}
function game() {
  for (var i = 0; i < questions.length; i = i + 1) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}
function finalScore() {
  console.log("YAY you scored: ", score);
}
welocme();
game();
finalScore();