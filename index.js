class RockPaperScissors {
  constructor(maxRounds = 5) {
    this.choices = ["rock", "paper", "scissors"];
    this.playerScore = 0;
    this.computerScore = 0;
    this.ties = 0;
    this.roundsPlayed = 0;
    this.maxRounds = maxRounds;
  }

// get computer choice
getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * this.choices.length);
  return this.choices[randomIndex];
}

// play a single round
playRound(playerSelection) {
  if (this.roundsPlayed >= this.maxRounds) return;

  const computerSelection = this.getComputerChoice();
  let message = "";

  if (playerSelection === computerSelection) {
    this.ties++;
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
  document.getElementById(
    "score"
  ).textContent = `Score — You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties}`;

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

// reset the game

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  roundsPlayed = 0;

  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  resultEl.textContent = "Make your move!";
  scoreEl.textContent = `Score — You: ${playerScore} | Computer: ${computerScore} | Ties: ${ties}`;
  
}
