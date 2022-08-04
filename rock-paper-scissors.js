function getComputerChoice() {
  const list = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return list[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  const list = ["rock", "paper", "scissors"];
  if (list.includes(player) === false || list.includes(computer) === false) {
    return "Please input 'rock', 'paper' or 'scissors'";
  }

  if (player == "rock" && computer == "paper") {
    return "You lose! Paper beats rock";
  } else if (player == "rock" && computer == "scissors") {
    return "You win! Rock beats scissors";
  } else if (player == "scissors" && computer == "rock") {
    return "You lose! Rock beats scissors";
  } else if (player == "scissors" && computer == "paper") {
    return "You win! Scissors beats paper";
  } else if (player == "paper" && computer == "rock") {
    return "You win! Paper beats rock";
  } else if (player == "paper" && computer == "scissors") {
    return "You lose! Scissors beats paper";
  } else {
    return "It's a draw, try again!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let choice = prompt(
      "Choose your weapon: type 'rock', 'paper' or 'scissors'"
    );
    let computerChoice = getComputerChoice();
    let result = playRound(choice, computerChoice);
    console.log(result);
    if (result.match(/win/)) {
      playerScore++;
    } else if (result.match(/lose/)) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return console.log(
      "Congratulations! You beat the computer " +
        playerScore +
        " to " +
        computerScore
    );
  } else if (playerScore < computerScore) {
    return console.log(
      "Loser! The computer beat you " + computerScore + " to " + playerScore
    );
  }
}

game();
