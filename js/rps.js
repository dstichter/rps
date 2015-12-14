$(document).ready(function(){
//variables

  var round = 1;
  var computerScore = 0;
  var userScore = 0;
  var totalRounds = 0
  $('#clear').hide()
  $('#finalRound').hide()
  $('#totalRoundsDisplay').hide()
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
      var roundCheck = parseInt($('#numRounds').val(), 10)
      if(Number.isInteger(roundCheck)){
        $(this).toggleClass('btn-danger btn-success');
        $(this).data('state', 'on')
        eventListeners()
        totalRounds = roundCheck;
        $('#numRounds').hide()
        $('#totalRoundDisplay').html(totalRounds + ' Rounds').show()
        $(this).html('Pause')

      }
      else{
        alert('NaN')
      }
    }
    else{
      $(this).toggleClass('btn-danger btn-success');
      $(this).data('state', 'off')
      $('.btn-warning').off()
      $('.btn-info').off()
      $(this).html('Start')
    }
  }

  function gameLogic(){
    if(round <= totalRounds){
      var computerChoices = ['Rock', 'Paper', 'Scissors'];
      var ranNum = Math.floor(Math.random() * computerChoices.length);
      var ranCompChoice = computerChoices[ranNum];
      if($(this).data('state') === "Rock" && ranCompChoice === "Paper"){
        computerScore++
      }
      if($(this).data('state') === "Paper" && ranCompChoice === "Scissors"){
        computerScore++
      }
      if($(this).data('state') === "Scissors" && ranCompChoice === "Rock"){
        computerScore++
      }
      if($(this).data('state') === "Rock" && ranCompChoice === "Scissors"){
        userScore++
      }
      if($(this).data('state') === "Paper" && ranCompChoice === "Rock"){
        userScore++
      }
      if($(this).data('state') === "Scissors" && ranCompChoice === "Paper"){
        userScore++
      }
      if($(this).data('state') === ranCompChoice){
        
      }
      $('#computerDisplay').empty()
      $('#userDisplay').empty()
      choiceAnimation(ranCompChoice, $(this).data('state'));
      $('#round').html(round)
      $('#userScore').html('Player Score: ' + userScore)
      $('#computerScore').html('Computer Score: ' + computerScore)
    } 
    console.log(round)
    console.log(totalRounds)
    if(userScore === computerScore && round === totalRounds){
      $('#tieDisplay').html('Tie, Next to Score Wins')
      totalRounds++
    }
    else if(round === totalRounds) {
      gameOverModal();
    }
    round++
  }

  function choiceAnimation(computer, user){
    var compLowerCase = computer.toLowerCase();
    var userLowerCase = user.toLowerCase();
    var faIcon = "fa fa-hand-" + compLowerCase + "-o fa-5x fadeIn"
    $('#computerDisplay').append($('<div>').addClass(faIcon));
    faIcon = "fa fa-hand-" + userLowerCase + "-o fa-5x fadeIn"
    $('#userDisplay').append($('<div>').addClass(faIcon));
  };

  function gameOverModal(){
    if(computerScore > userScore){
      $('#gameOver').empty()
      $('#gameOver').append($('<h2>').html('Computer Wins'))
    }
    if(userScore > computerScore){
      $('#gameOver').empty()
      $('#gameOver').append($('<h2>').html('You Win'))
    }
console.log('you here?')
    $('#gameOverModal').modal('show')
    //$('#tieModal').modal('show')
    $('.btn-primary').on('click',function(){
      round = 1
      computerScore = 0
      userScore = 0
      $('#computerDisplay').empty()
      $('#userDisplay').empty()
    });
  }
});