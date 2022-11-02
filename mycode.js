let playerSelection;

class PlayerScoreGame {
    constructor() {
        this.scoresSum = 0;
    }
    upScore() {
        this.scoresSum += 1;
    }
}

const rockScores = new PlayerScoreGame();

const paperScores = new PlayerScoreGame();

const scissorsScores = new PlayerScoreGame();


function getComputerChoice () {
    const gameArray = ["Rock", "Paper", "Scissors"];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

const readyRock = document.getElementById('rockButton');

const readyPaper = document.getElementById('paperButton');

const readyScissors = document.getElementById('scissorsButton');

const rockChoice = readyRock.addEventListener('click', callRock);

const paperChoice = readyPaper.addEventListener('click', callPaper);

const scissorsChoice = readyScissors.addEventListener('click', callScissors);

function game() {

    let sumAll = 0;

    return function playRound (func) {
    const compLower = typeof func === "string" ? func.toLowerCase() : "It's not a string";
    const playerSel = typeof playerSelection === "string" ? playerSelection.toLowerCase() : "It's not a string";
    if (compLower === "paper" && playerSel === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (compLower === "scissors" && playerSel === "rock") {
        rockScores.upScore();
        sumAll = rockScores.scoresSum + paperScores.scoresSum + scissorsScores.scoresSum;
        console.log(sumAll);
        return "You win! Rock beats Scissors";
    } else if (compLower === "scissors" && playerSel === "paper") {
        return "You lose! Scissors beats Paper";
    } else if (compLower === "rock" && playerSel === "paper") {
        paperScores.upScore();
        sumAll = rockScores.scoresSum + paperScores.scoresSum + scissorsScores.scoresSum;
        console.log(sumAll);
        return "You win! Paper beats Rock";
    } else if (compLower === "paper" && playerSel === "scissors") {
        scissorsScores.upScore();
        sumAll = rockScores.scoresSum + paperScores.scoresSum + scissorsScores.scoresSum;
        console.log(sumAll);
        return "You win! Scissors beats Paper";
    } else if (compLower === "rock" && playerSel === "scissors") {
        return "You lose! Rock beats Scissors";
    }
    else {
        return "This is draw";
    }
  };
}

const startGame = game();

let leftAttempts = 5;

function callRock(e) {
    const counterRemain = leftAttempts > 0 ? leftAttempts -=1 : "There are no more attempts";
    console.log(counterRemain);
    const playerRock = e.target.innerHTML === "Rock" ? playerSelection = "Rock" : false;
    return playerRock ? console.log(startGame(getComputerChoice())) : "NothingROCK";
}

function callPaper(e) {
    const counterRemain = leftAttempts > 1 ? leftAttempts -=1 : "There are no more attempts";
    console.log(counterRemain);
    const playerPaper = e.target.innerHTML === "Paper" ? playerSelection = "Paper" : false;
    return playerPaper ? console.log(startGame(getComputerChoice())) : "NothingPAPER";
}

function callScissors(e) {
    const counterRemain = leftAttempts > 1 ? leftAttempts -=1 : "There are no more attempts";
    console.log(counterRemain);
    const playerScissors = e.target.innerHTML === "Scissors" ? playerSelection = "Scissors" : false;
    return playerScissors ? console.log(startGame(getComputerChoice())) : "NothingSCISSORS";
}






    




