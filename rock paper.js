function reset(){
  score.wins = 0;
  score.losses =0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
}



const score = JSON.parse(localStorage.getItem('score'))||{
wins: 0,
losses: 0,
ties: 0,
}
updateScore();

function updateScore(){
  document.querySelector('#score').innerHTML= `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties }`;
}


if(reset()){
  document.querySelector('#result').innerHTML= ' '

  document.querySelector('#moves').
  innerHTML = ' '  
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }


    if(result === 'You win.'){
        score.wins+=1;
    }else if(result === 'You lose.'){
        score.losses+=1;
    }else{
        score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score))

    updateScore();

    document.querySelector('#result').innerHTML = result;

    document.querySelector('#moves').
    innerHTML = `your move --> ${playerMove}  ,  computer move --> ${computerMove}` 
   

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }
}


  