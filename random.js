score = 0;
 var questionseasy = [
     ['Whats is 2 + 2', '4'],
     ['What is 3 * 3', '9'],
     ['What is 5 * 5', '25']
 ];

 var questionshard = [
     ['Whats my name', 'Ian'],
     ['Where am i from', 'India'],
     ['My favorite Food', 'Idly']
 ];

 var levels = prompt("What level wud you like 1.easy 2.hard or 3.random", '');

 var questions = 0;
 shuffle(questionshard)
 shuffle(questionseasy)

 if (levels == 'hard') {
     questions = questionshard;
 } else if (levels == "easy") {
     questions = questionseasy;
 } else {
     questions = randomQuestions();
 }

 function randomQuestions() {
     return [rq(), rq(), rq()]
 }

 function rq() {
     var a = getRandomInt(0, 100),
         b = getRandomInt(0, 100),
         operator = "+-*" [getRandomInt(0, 3)],
         answer = operator === "+" ? a + b : operator === "-" ? a - b : operator === "*" ? a * b:0;



     return ["what is " + a + operator + b, answer]
 }

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }

 function askQ(ans) {


     var answer = prompt(ans[0], '');
     if (answer == ans[1]) {
         score++;
         alert('Yahooo , ur right');
     } else {
         alert('Brush up ur GK');
     }
 }



 // the loop that will ask all the questionseasy

 function startquiz() {
     for (var i = 0; i < questions.length; i++) {
         askQ(questions[i]);

     }
 }

 startquiz();
 alert(score);

 function shuffle(array) { // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     var currentIndex = array.length,
         temporaryValue, randomIndex;

     // While there remain elements to shuffle...
     while (0 !== currentIndex) {

         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }