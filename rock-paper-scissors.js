function getComputerChoice() {
  const list = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(list[randomNumber]);
  return list[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;
  const list = ["rock", "paper", "scissors"];
  if (list.includes(player) === false || list.includes(computer) === false) {
    return "Please input 'rock', 'paper' or 'scissors'";
  }

  if (player == "rock" && computer == "paper") {
    return console.log("You lose! Paper beats rock");
  } else if (player == "rock" && computer == "scissors") {
    return console.log("You win! Rock beats scissors");
  } else if (player == "scissors" && computer == "rock") {
    return console.log("You lose! Rock beats scissors");
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

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function game() {
  let playerScore = 0;
  let computerScore = 0;

  let choice = prompt("Choose your weapon: type 'rock', 'paper' or 'scissors'");
  let computerChoice = getComputerChoice();
  let result = playRound(choice, computerChoice);
  console.log(result);
  if (result.match(/win/)) {
    playerScore++;
  } else if (result.match(/lose/)) {
    computerScore++;
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

// game();
