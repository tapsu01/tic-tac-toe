function computerPlay() {
  const selection = {
    0: 'scissors',
    1: 'paper',
    2: 'rock',
  };

  const max = 3;
  const rand = Math.floor(Math.random() * max);
  return selection[rand];
}

function playRound(playerSelection, computerSelection) {
  const result = {
    player: 0,
    computer: 0,
    message: '',
  };

  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    result.message = 'Oh, Draw. You and computer choose scissors';
    return result;
  }

  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result.message = 'Great, You win. Scissors cut paper';
    result.player = 1;
    return result;
  }

  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result.message = 'You lose. Rock beats scissors';
    result.computer = 1;
    return result;
  }

  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result.message = 'You lose. Scissors cut paper';
    result.computer = 0;
    return result;
  }

  if (playerSelection === 'paper' && computerSelection === 'paper') {
    result.message = 'Oh, Draw. You and computer choose paper';
    return result;
  }

  if (playerSelection === 'paper' && computerSelection === 'rock') {
    result.message = 'You win. Paper beats rock';
    result.player = 1;
    return result;
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result.message = 'You win. Rock beats scissors';
    result.player = 1;
    return result;
  }

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    result.message = 'You lose. Paper beats rock';
    result.computer = 1;
    return result;
  }

  if (playerSelection === 'rock' && computerSelection === 'rock') {
    result.message = 'Draw. You and computer choose rock';
    return result;
  }
}

const playerSelections = document.querySelectorAll('.player-item');
const resultOutput = document.querySelector('.result-output');
const manCounter = document.querySelector('.man-counter');
const computerCounter = document.querySelector('.computer-counter');
const reset = document.querySelector('.reset');
let counter = 0;

function game(playerSelection, computerSelection) {
  if (counter > 4) {
    if (+manCounter.textContent > +computerCounter.textContent) {
      resultOutput.textContent = 'End: You win.';
    } else if (+manCounter.textContent < +computerCounter.textContent) {
      resultOutput.textContent = 'End: You lose.';
    } else {
      resultOutput.textContent = 'End: You and Computer is Draw';
    }

    reset.style.display = 'flex';
    return false;
  }

  const { message, player, computer } = playRound(
    playerSelection,
    computerSelection
  );

  resultOutput.textContent = message;
  manCounter.textContent = +manCounter.textContent + player;
  computerCounter.textContent = +computerCounter.textContent + computer;

  counter++;
}

reset.addEventListener('click', function () {
  counter = 0;
  manCounter.textContent = 0;
  computerCounter.textContent = 0;
  this.style.display = 'none';
});

playerSelections.forEach(function (e) {
  e.addEventListener('click', function () {
    const playerSelection = this.getAttribute('data-selection');
    const computerSelection = computerPlay();

    game(playerSelection, computerSelection);
  });
});
