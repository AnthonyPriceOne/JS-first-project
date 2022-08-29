function getComputerChoice () {
    const gameArray = ["Rock", "Paper", "Scissors"];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

function game() {

    const playerSelection = "rOck";

    return function playRound (func) {
    const compLower = typeof func === "string" ? func.toLowerCase() : "It's not a string";
    const playerSel = typeof playerSelection === "string" ? playerSelection.toLowerCase() : "It's not a string";
    if (compLower === "paper" && playerSel === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (compLower === "scissors" && playerSel === "rock") {
        return "You win! Rock beats Scissors";
    } else {
        return "This is draw";
    }
  };
}

const startGame = game();

for (let i = 0; i < 5; i++) {
    console.log(startGame(getComputerChoice()));
}








    




