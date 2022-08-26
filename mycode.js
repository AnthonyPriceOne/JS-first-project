
const getComputerChoice = () => {
    const gameArray = ["Rock", "Paper", "Scissors"];
    return gameArray[Math.floor(Math.random() * gameArray.length)].toUpperCase();
};


const playRound = (playerSelection, computerSelection) => {
    console.log(computerSelection);
    return computerSelection.toLowerCase() === "paper" ? "You Lose! Paper beats Rock" : playerSelection;
  };
   
  const playerSelection = "rock";

  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));


