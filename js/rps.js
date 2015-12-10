$(document).ready(function(){
//variables
  var round = 0;
  var computerScore = 0;
  var userScore = 0;
//ToggleButton Event Listner  
  $('#toggleBtn').on('click', toggle);
//Function Calls
  function eventListeners(){
    $('.btn-warning').on('click', gameLogic);
    $('.btn-info').on('click', function(){
      round = 0
      computerScore = 0
      userScore = 0
      $('#round').html('')
      $('#userScore').html('Player Score: 0')
      $('#computerScore').html('Computer Score: 0')
      $('#computerDisplay').html('')
      $('#userDisplay').html('')
    });
  }

  function toggle(){
    if($(this).data('state') === 'off'){
      $(this).toggleClass('btn-danger btn-success');
      $(this).data('state', 'on')
      eventListeners()
    }
    else{
      $(this).toggleClass('btn-danger btn-success');
      $(this).data('state', 'off')
      $('.btn-warning').off()
      $('.btn-info').off()
    }
  }

  function gameLogic(){
    var computerChoices = ['Rock', 'Paper', 'Sissors'];
    var ranNum = Math.floor(Math.random() * computerChoices.length);
    var ranCompChoice = computerChoices[ranNum];
    if($(this).data('state') === "Rock" && ranCompChoice === "Paper"){
      computerScore++
    }
    if($(this).data('state') === "Paper" && ranCompChoice === "Sissors"){
      computerScore++
    }
    if($(this).data('state') === "Sissors" && ranCompChoice === "Rock"){
      computerScore++
    }
    if($(this).data('state') === "Rock" && ranCompChoice === "Sissors"){
      userScore++
    }
    if($(this).data('state') === "Paper" && ranCompChoice === "Rock"){
      userScore++
    }
    if($(this).data('state') === "Sissors" && ranCompChoice === "Paper"){
      userScore++
    }
    if($(this).data('state') === ranCompChoice){
      alert('tie')
    }
    round++
    $('#computerDisplay').html(ranCompChoice)
    $('#userDisplay').html($(this).data('state'))
    $('#round').html(round)
    $('#userScore').html('Player Score: ' + userScore)
    $('#computerScore').html('Computer Score: ' + computerScore) 
  }
});