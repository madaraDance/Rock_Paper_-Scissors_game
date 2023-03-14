var roundCounter = 0,
  playerWins = 0,
  computerWins = 0;
var array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  return array[number];
}

function displayRock() {
  document.getElementById(
    'playersChoice'
  ).innerHTML = `<img src="rock.png" alt="" class="picture"></img>`;
  playRound('Rock');
}

function displayPaper() {
  document.getElementById(
    'playersChoice'
  ).innerHTML = `<img src="paper.png" alt="" class="picture"></img>`;
  playRound('Paper');
}

function displayScissors() {
  document.getElementById(
    'playersChoice'
  ).innerHTML = `<img src="scissors.png" alt="" class="picture"></img>`;
  playRound('Scissors');
}

function playRound(a) {
  let computerChoice = getComputerChoice();
  let winArray = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
  ];
  let result = winArray[array.indexOf(a)][array.indexOf(computerChoice)];
  if (result === 0) {
    roundCounter++;
    document.getElementById(
      'computersChoice'
    ).innerHTML = `<img src="${computerChoice.toLocaleLowerCase()}.png" alt="" class="picture"></img>`;
    document.getElementById(
      'roundsPlayed'
    ).innerHTML = `Number of Rounds Played is: ${roundCounter}`;
    document.getElementById(
      'pOutput'
    ).innerHTML = `<br> Its a tie!</br> You chose ${a}</br> and</br> Computer chose ${computerChoice}.`;
  } else if (result === 1) {
    roundCounter++;
    playerWins++;
    document.getElementById(
      'computersChoice'
    ).innerHTML = `<img src="${computerChoice.toLocaleLowerCase()}.png" alt="" class="picture"></img>`;
    document.getElementById(
      'roundsPlayed'
    ).innerHTML = `Number of Rounds Played is: ${roundCounter}`;
    document.getElementById(
      'pOutput'
    ).innerHTML = `<br> It's a win! </br> You chose ${a} </br> and </br> Computer chose ${computerChoice}.`;
    document.getElementById(
      'playerWon'
    ).innerHTML = `Player won ${playerWins} rounds.`;
  } else if (result === 2) {
    roundCounter++;
    computerWins++;
    document.getElementById(
      'computersChoice'
    ).innerHTML = `<img src="${computerChoice.toLocaleLowerCase()}.png" alt="" class="picture"></img>`;
    document.getElementById(
      'roundsPlayed'
    ).innerHTML = `Number of Rounds Played is: ${roundCounter}`;
    document.getElementById(
      'pOutput'
    ).innerHTML = `<br> It's a loss!</br> You chose ${a}</br> and</br> Computer chose ${computerChoice}.`;
    document.getElementById(
      'computerWon'
    ).innerHTML = `Computer won ${computerWins} rounds.`;
  }

  setTimeout(() => {
    gameWinner();
  }, 1);
}

function gameWinner() {
  if (playerWins === 3) {
    if (confirm(`You won the game! Do you want to play again?`)) {
      window.location.reload();
    } else {
      alert('Thank you for playing! You can close this window.');
    }
  } else if (computerWins === 3) {
    if (confirm(`Computer won the game! Do you want to play again?`)) {
      window.location.reload();
    } else {
      alert('Thank you for playing! You can close this window.');
    }
  }
}
