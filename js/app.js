$(document).ready(function () {

  $('button').on('click', nextQuestion);

  var i = 0;

  function nextQuestion () {

    $('.questions').append("<p>" + allQuestions[i]['question'] + "</p>").show();
    i++;
  }

  // $('button').on({
  //   'click': function () { $('.questions').append("<p>" + allQuestions[0]['question'] + "</p>").show(); },
  //   'mouseover': function () { console.log('hovered'); }
  // });

});

var allQuestions = [
{question: "Who is Prime Minister of the United Kingdom?"
  , choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"]
  , correctAnswer:0},

{question: "What is the largest continent on earth?"
  , choices: ["Asia", "North America", "Antarctica", "Africa"]
  , correctAnswer:0},

{question: "What is 3*4 + 12?"
  , choices: ["24", "12", "0", "48"]
  , correctAnswer:0}
];
