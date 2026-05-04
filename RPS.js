console.log("hello world");

function getComputerChoice() {
  const randomChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * randomChoice.length);
  const guse = randomChoice[randomIndex];
  return guse;
}
function getHumanChoice() {
  let select = prompt("Choose from Rock,Paper,Scissors!");
  return select;
}
let humanScore = 0;
let computerScore = 0;

function humanChoiceChecker(getHumanChoice) {
  if (typeof getHumanChoice != "string") {
    console.log("Invalid input!!");
    return;
  }
  const changeTracker = getHumanChoice.toLowerCase();
  return changeTracker;
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice == humanChoice) {
    console.log("You choose the same thing there is no winner!");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissors");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  } else {
    computerScore++;
    console.log("You lose! Scissors beats Paper");
  }
}
function playGame() {
  let i = 1;
  while (i <= 5) {
    const humanSelection = humanChoiceChecker(getHumanChoice());
    const compuetrSelection = getComputerChoice();
    playRound(humanSelection, compuetrSelection);
    i++;
  }
  console.log("Final score :");
  console.log("Human " + humanScore + "-" + computerScore + "Computer");
  console.log("You win the game!");
}
playGame();
