function computerPlay () {
  let compDecision = Math.floor(Math.random() * 3 + 1);

  switch (compDecision) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock') {
    switch (computerSelection) {
      case 'Paper':
        console.log('You lose! Paper beats rock.');
        return 'compWin';
      case 'Scissors':
        console.log('You win! Rock beats scissors.');
        return 'playerWin';
      default:
        console.log('This round was a draw.');
    }
  }

  if (playerSelection.toLowerCase() === 'paper') {
    switch (computerSelection) {
      case 'Scissors':
        console.log('You lose! Scissors beats paper.');
        return 'compWin';
      case 'Rock':
        console.log('You win! Paper beats rock.');
        return 'playerWin';
      default:
        console.log('This round was a draw.');
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    switch (computerSelection) {
      case 'Rock':
        console.log('You lose! Rock beats scissors.');
        return 'compWin';
      case 'Paper':
        console.log('You win! Scissors beats rock.');
        return 'playerWin';
      default:
        console.log('This round was a draw.');
    }
  }

}

function game () {
  let playerScore = 0;
  let compScore = 0;

  for (i = 1; i <= 5; i++) {
    let playerSelection = prompt('Will you pick rock, paper, or scissors?');

    while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
      alert('Please pick a valid option.')
      playerSelection = prompt('Will you pick rock, paper, or scissors?');
    }

    let roundResult = playRound(playerSelection, computerPlay());

    switch (roundResult) {
      case 'playerWin':
        console.log('Player won this round!');
        playerScore += 1;
        break;
      case 'compWin':
        console.log('Computer won this round!');
        compScore += 1;
        break;
      default:
        console.log('Neither player won this round.');
    }

    (playerScore > compScore) ? console.log(`You won the game with a score of ${playerScore} to ${compScore}`) :
    (playerScore < compScore) ? console.log(`You lost the game with a score of ${playerScore} to ${compScore}`) :
    console.log(`The game was a draw with a score of ${playerScore} to ${compScore}`);
  }
}

game()