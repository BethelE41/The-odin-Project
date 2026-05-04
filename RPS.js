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
