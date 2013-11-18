$(document).ready(function () {

  $('button').click(function () {
    $('.questions').append("<p>hello</p>").show();
  });

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
