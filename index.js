// get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// keep track of score
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let roundsPlayed = 0;

// play a single round
function playRound(playerSelection) {
  if (roundsPlayed >= 5) return;

  const computerSelection = getComputerChoice();
  let message = "";

  if (playerSelection === computerSelection) {
    ties++;
    message = `It's a tie! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundsPlayed++;
    message = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    roundsPlayed++;
    message = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  document.getElementById("result").textContent = message;
  document.getElementById("score").textContent =
    `Score — You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties}`;

  // game over
  if (roundsPlayed === 5) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent += " 🎉 You won the game!";
    } else if (computerScore > playerScore) {
      document.getElementById("result").textContent += " 😢 You lost the game.";
    } else {
      document.getElementById("result").textContent += " 🤝 The game is a tie!";
    }
  }
}
