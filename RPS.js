console.log("hello world");

function getComputerChoice() {
  const randomChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * randomChoice.length);
  const randomSellector = randomChoice[randomIndex];
  return randomSellector;
}
