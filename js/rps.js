$(document).ready(function(){
var round = 0;
var computerScore = 0;
var userScore = 0;
  $('.btn').on('click', function(){
    var computerChoices = ['Rock', 'Paper', 'Sissors'];
    var ranNum = Math.floor(Math.random() * computerChoices.length);
    var ranCompChoice = computerChoices[ranNum];
    console.log(ranCompChoice)
    console.log($(this).html())
    if($(this).html() === "Rock" && ranCompChoice === "Paper"){
      computerScore++
    }
    if($(this).html() === "Paper" && ranCompChoice === "Sissors"){
      computerScore++
    }
    if($(this).html() === "Sissors" && ranCompChoice === "Rock"){
      computerScore++
    }
    if($(this).html() === "Rock" && ranCompChoice === "Sissors"){
      userScore++
    }
    if($(this).html() === "Paper" && ranCompChoice === "Rock"){
      userScore++
    }
    if($(this).html() === "Sissors" && ranCompChoice === "Paper"){
      userScore++
    }
    round++
    console.log(round)
    console.log(userScore)
    console.log(computerScore)
    $('#round').html('Round: ' + round)
    $('#userScore').html('Player Score: ' + userScore)
    $('#computerScore').html('Computer Score: ' + computerScore)
  });

});