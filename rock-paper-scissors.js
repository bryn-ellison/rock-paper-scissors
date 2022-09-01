let playerScore = 0;
let computerScore = 0;

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
const container = document.querySelector("body");
const matchResult = document.createElement("div");
const results = document.createElement("div");
results.textContent = `Current scores: Player: ${playerScore} | Computer: ${computerScore}`;
container.appendChild(results);

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  let result = playRound("rock", getComputerChoice());
  matchResult.textContent = result;
  container.appendChild(matchResult);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  let result = playRound("paper", getComputerChoice());
  matchResult.textContent = result;
  container.appendChild(matchResult);
  // if (result.match(/win/)) {
  //   playerScore++;
  // } else if (result.match(/lose/)) {
  //   computerScore++;
  // }
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  let result = playRound("scissors", getComputerChoice());
  matchResult.textContent = result;
  container.appendChild(matchResult);
});

function game() {
  let choice = prompt("Choose your weapon: type 'rock', 'paper' or 'scissors'");
  let computerChoice = getComputerChoice();

  console.log(result);

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
