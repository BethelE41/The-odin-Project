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
