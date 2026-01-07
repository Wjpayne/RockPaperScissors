// ------------------------
// Game Class
// ------------------------
class Game {
  constructor(rounds = 5) {
    this.playerScore = 0;
    this.computerScore = 0;
    this.ties = 0;
    this.roundsPlayed = 0;
    this.maxRounds = rounds;
  }

  // Generate a random computer choice
  getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Play a single round
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
      this.playerScore++;
      this.roundsPlayed++;
      message = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      this.computerScore++;
      this.roundsPlayed++;
      message = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    this.updateUI(message);
    this.checkGameOver();
  }

  // Update the DOM with the latest results
  updateUI(message) {
    const resultEl = document.getElementById("result");
    const scoreEl = document.getElementById("score");

    resultEl.textContent = message;
    scoreEl.textContent = `Score — You: ${this.playerScore} | Computer: ${this.computerScore} | Ties: ${this.ties}`;
  }

  // Check if the game is over
  checkGameOver() {
    if (this.roundsPlayed === this.maxRounds) {
      const resultEl = document.getElementById("result");

      if (this.playerScore > this.computerScore) {
        resultEl.textContent += " 🎉 You won the game!";
      } else if (this.computerScore > this.playerScore) {
        resultEl.textContent += " 😢 You lost the game.";
      } else {
        resultEl.textContent += " 🤝 The game is a tie!";
      }
    }
  }

  // Reset the game state
  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.ties = 0;
    this.roundsPlayed = 0;

    const resultEl = document.getElementById("result");
    const scoreEl = document.getElementById("score");

    resultEl.textContent = "Make your move!";
    scoreEl.textContent = `Score — You: ${this.playerScore} | Computer: ${this.computerScore} | Ties: ${this.ties}`;
  }
}

// ------------------------
// Instantiate the game
// ------------------------
const game = new Game();

// ------------------------
// Connect buttons to game methods
// ------------------------
document.querySelector(".rock").addEventListener("click", () => game.playRound("rock"));
document.querySelector(".paper").addEventListener("click", () => game.playRound("paper"));
document.querySelector(".scissors").addEventListener("click", () => game.playRound("scissors"));
document.querySelector(".reset").addEventListener("click", () => game.resetGame());