function Question(question, answer1, answer2, answer3, answer4, rightAnswerIndex) {

  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.rightAnswerindex = rightAnswerIndex;



}

function Quiz() {
  this.questions = [];
  this.questionsIndex = 0;
  this.score = 0;
  this.gameOver = false;
}



//   var images = {
//     "1"  : "https://via.placeholder.com/200x50?text=CSS",

//   }  
Quiz.prototype.add = function (question) {
  this.questions.push(question);
};

Quiz.prototype.answer = function (buttonIndex) {
  if (this.questionsIndex === this.questions.length - 1) {


    this.gameOver = true;
  }
 
  if(this.questionsIndex >=1 ){
  
    $(".checkbox").show();
  
  }


  if(this.questionsIndex >=1 ){
    
    $(".checkbox").show();
  
  }
  

  if(this.questionsIndex >=3 ){
  
    $(".checkbox").hide();
  
  }

//   var ckbox = $('#checkbox1');
//   $('input').on('click',function () {
//     if (ckbox.is(':checked')) {
       
      
//       $(".checkbox").hide();
     
//  } 


 
// })

$("input[type='checkbox'].abc").change(function(){
  var a = $("input[type='checkbox'].abc");
  if(a.length == a.filter(":checked").length){
    // alert('all checked');
   
    this.score++;
    $("#modalCart").modal()
  }
});

  
 

  if (buttonIndex === this.questions[this.questionsIndex].rightAnswerindex) {
    console.log('correct');
    $("#modalCart").modal()

    this.score++;
  }


  if (buttonIndex != this.questions[this.questionsIndex].rightAnswerindex) {
    console.log('wrong');

    $("#modalPush").modal()

  }

  this.questionsIndex++;

}


function unCheck(){
  document.getElementById("defaultInline1").checked = false;
}


var ckbox = $('#defaultInline1');
var box2 = $('#defaultInline2');
var box3 = $('#defaultInline3');
var box4 = $('#defaultUnchecked');
var selec1 =  $('.selectOne');



function wrongClick(){
 
 
  if (ckbox.is(':checked') &&  (box2.is(':checked'))) {
    $("#modalPush").modal()
    $(".checkbox").show();
console.log('SELECTED WRONG');
  }
  if (ckbox.is(':checked') &&  (box4.is(':checked'))) {
    $("#modalPush").modal()
    $(".checkbox").show();
console.log('SELECTED WRONG');
  }

  if (ckbox.is(':checked') &&  (box3.is(':checked'))) {
    $("#modalPush").modal()
    $(".checkbox").show();
    console.log('SELECTED WRONG TWO');
 }

 if (ckbox.is(':checked') &&  (box2.is(':checked')  && (box3.is(':checked')))) {
  $("#modalPush").modal()
  $(".checkbox").show();
  console.log('SELECTED WRONG TWO three');
}


if (ckbox.is(':checked') &&  (box2.is(':checked')  && (box4.is(':checked')))) {
  $("#modalPush").modal()
  $(".checkbox").show();
  console.log('SELECTED WRONG TWO three');
}
if (ckbox.is(':checked') &&  (box3.is(':checked')  && (box4.is(':checked')))) {
  $("#modalPush").modal()
  $(".checkbox").show();
  console.log('SELECTED WRONG TWO three');
}

// if (ckbox.is(':checked') &&  (box2.is(':checked')  && (box4.is(':checked')))) {
//   quiz.answer(2);
//   $(".checkbox").show();
//   console.log('SELECTED WRONG TWO three');
// }


}

var retryButton = '<div class="text-center mb-3 q-start" ><button class="btn bg-btn retry_btn btn-block btn-rounded z-depth-1a" value="Refresh Page" onClick="history.go(0)">Retry Quiz</button></div>';


Quiz.prototype.renderInElement = function (quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement) {
  questionElement.innerHTML = "";
  choice0Element.innerHTML = "";
  choice1Element.innerHTML = "";
  choice2Element.innerHTML = "";
  choice3Element.innerHTML = "";
  progressElement.innerHTML = "";
  if (this.gameOver === true) {
    quizElement.innerHTML = "";
    quizElement.innerHTML += '<h1>Quiz Over</h1>';
    quizElement.innerHTML += "<h2 id='question' class='headline-secondary--grouped'>Your score is: " + this.score + " out of " + this.questions.length;
    quizElement.innerHTML += retryButton;
  } else {
    questionElement.innerHTML += this.questions[this.questionsIndex].question;
    choice0Element.innerHTML += this.questions[this.questionsIndex].answer1;
    choice1Element.innerHTML += this.questions[this.questionsIndex].answer2;
    choice2Element.innerHTML += this.questions[this.questionsIndex].answer3;
    choice3Element.innerHTML += this.questions[this.questionsIndex].answer4;
    //   choice1Element.innerHTML += this.questions[this.questionsIndex].wrongAnswerindex;
    progressElement.innerHTML += " " + (this.questionsIndex + 1) + " of " + this.questions.length;


    
  }




};




var quiz = new Quiz();




var question1 = new Question(" <a class = 'chums_question'>What is a perfect example of a broadcast picture?</a>",
"<img src='img/chums/q1/a.png'  class = 'choice-img'  /> <button  class='btn btn-danger btn-rounded guess0 '>A</button> ", 
 "<img src='img/chums/q1/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess1 '>B</button>",
 "<img src='img/chums/q1/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
 "<img src='img/chums/q1/d.png'  class = 'choice-img' /> <button  class='btn btn-danger btn-rounded guess3'>D</button>", 0);

 
var question2 = new Question(" <a class = 'chums_question'>Where do we go to join a clan?</a>",
"<img src='img/chums/q2/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0'>A</button> ", 
 "<img src='img/chums/q2/b.png'   class = 'choice-img'/><button  class='btn btn-danger btn-rounded guess1'>B</button>",
 "<img src='img/chums/q2/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
 "<img src='img/chums/q2/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 3);

 var question3 = new Question(" <a class = 'chums_question'>Select 3ccccc possible ways to top up.",
 "<img src='img/chums/q3/a.png'  class = 'choice-img' /> ", 
  "<img src='img/chums/q3/b.png'   class = 'choice-img'/>",
  "<img src='img/chums/q3/c.png'   class = 'choice-img'/>",
  "<img src='img/chums/q3/d.png'  class = 'choice-img' />",3);

   var question4 = new Question(" <a class = 'chums_question'>Where do we go to check the hours and gems earned?</a>",
   "<img src='img/chums/q4/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0 '>A</button> ", 
    "<img src='img/chums/q4/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded  guess1'>B</button>",
    "<img src='img/chums/q4/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
    "<img src='img/chums/q4/d.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess3'>D</button>", 3);

    var question5 = new Question(" <a class = 'chums_question'>How to check the Ranking?</a>",
    "<img src='img/chums/q5/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0 '>A</button>", 
     "<img src='img/chums/q5/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded  guess1'>B</button>",
     "<img src='img/chums/q5/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
     "<img src='img/chums/q5/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 0);

     var question6 = new Question(" <a class = 'chums_question'>Which is a perfect example of a standard live broadcast?</a>",
     "<img src='img/chums/q6/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0 '>A</button>", 
      "<img src='img/chums/q6/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded  guess1'>B</button>",
      "<img src='img/chums/q6/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
      "<img src='img/chums/q6/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 0);
 
  
  
 



quiz.add(question1);
quiz.add(question2);
quiz.add(question3);
quiz.add(question4);
quiz.add(question5);

quiz.add(question6);




var quizElement = document.getElementById("quiz");
var headingElement = document.getElementById("heading");
var questionElement = document.getElementById("question");
var choice0Element = document.getElementById("choice0");
var choice1Element = document.getElementById("choice1");
var choice2Element = document.getElementById("choice2");
var choice3Element = document.getElementById("choice3");
var progressElement = document.getElementById("progress");
var resultElement = document.getElementById("pop");

quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);

//   var answer1Button = document.getElementById("guess0");
//   answer1Button.onclick = function () {
//     quiz.answer(0);
//     quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, progressElement);


// };

// var answer2Button = document.getElementByClassName("guess0");
// answer2Button.onclick = function () {
//   quiz.answer(1);
//   quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, progressElement);
// };



$("#choice0").click(function () {

  quiz.answer(0);
  quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element,choice2Element, choice3Element, progressElement);
  
  

});


$("#choice1").click(function () {
  quiz.answer(1);
  quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);
});


$("#choice2").click(function () {

  quiz.answer(2);
  quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);

});


$("#choice3").click(function () {
  quiz.answer(3);
  quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);

});



$(document).ready(function () {
  var ckbox = $('#defaultInline1');
  var box2 = $('#defaultInline2');
  var box3 = $('#defaultInline3');
  var box4 = $('#defaultUnchecked');
  var selec1 =  $('.selectOne');



  $("input[type='checkbox'].abc").change(function(){
    var a = $("input[type='checkbox'].abc");
    if(a.length == a.filter(":checked").length){
      quiz.answer(3);
      quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element,choice2Element, choice3Element, progressElement);
      $(".checkbox").hide()
    }
  });


  $("input[type='checkbox'].firstWrong").change(function(){
    var a = $("input[type='checkbox'].firstWrong");
    if(a.length == a.filter(":checked").length){
      
      $("#modalPush").modal()
      $(".checkbox").show()
      console.log('WRONG!!!!!!!!')
    }
  });
  


  $('input').on('click',function () {
  //     if (ckbox.is(':checked')) {
         
  //       console.log('ok');
  //       $(".checkbox").hide();
  //       quiz.answer(0);
  //       quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element,choice2Element, choice3Element, progressElement);
  
  //  } 



   
 
  // //     if (box2.is(':checked')) {
         
  // //       console.log('select two more');

  // //       // quiz.answer(1);
  // //       $(".checkbox").show();
  // //       $("#modalCart").modal()
  // //       $("#modalPush").modal('hide')
  // // } 


  // //     if (box3.is(':checked')) {
         
  // //       console.log('select one more');

  // //       // quiz.answer(2);
  // //       $(".checkbox").show();
  // //       $("#modalCart").modal()



  // //    } 


  // //     if (box4.is(':checked')) {
         
  // //       console.log('selected');

  // //       // quiz.answer(2);
  // //       $(".checkbox").show();
  // //       $("#modalCart").modal()
  // //    } 

  });
});






$(document).ready(function(){
  $(".quiz-card").hide();
$(".checkbox").hide();
 
  $(".show-quiz").click(function(){
    $(".quiz-card").show();
    $(".start-quiz").hide();
  });

 
 

});