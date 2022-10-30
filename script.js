
function getComputerChoice() {
    let randomPick=["Rock", "Paper", "Scissors"];
    return randomPick[Math.floor(Math.random() * randomPick.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++; 
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

for (let i=0; i<5; i++) {
const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
console.log(playRound(playerSelection, computerSelection));
console.log("Your score = " + playerScore)
console.log("Computer's score = " + computerScore)
}