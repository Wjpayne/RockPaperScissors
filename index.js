//get computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//get player choice

function getPlayerChoice() {
  const choice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();
  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice. Please try again.");
    console.log("Invalid choice. Please try again.");
    return getPlayerChoice();
  }
}

//keep track of score

let playerScore = 0;
let computerScore = 0;

//logic to play single round

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    alert(`It's a tie! Both chose ${playerSelection}.`);
    console.log(`It's a tie! Both chose ${playerSelection}.`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
  } else {
    computerScore++;
    alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }

  console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
}

//play a game of 5 rounds

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    playRound();
  }

  if (playerScore > computerScore) {
    alert("Congratulations! You won the game!");
    console.log("Congratulations! You won the game!");
  } else if (computerScore > playerScore) {
    alert("Sorry, you lost the game.");
    console.log("Sorry, you lost the game.");
  } else {
    alert("The game is a tie!");
    console.log("The game is a tie!");
  }
}

//run game

playGame();
