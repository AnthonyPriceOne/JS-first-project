//New update from 2024
//Another update, testing pull
let playerSelection;

let sumPlayerall = 0;

let sumComputerall = 0;

class PlayerScoreGame {
    constructor() {
        this.scoresSum = 0;
    }
    upScore() {
        this.scoresSum += 1;
    }
}

const rockPlayerscores = new PlayerScoreGame();

const paperPlayerscores = new PlayerScoreGame();

const scissorsPlayerscores = new PlayerScoreGame();

function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

const readyRock = document.getElementById('rockButton');

const readyPaper = document.getElementById('paperButton');

const readyScissors = document.getElementById('scissorsButton');

readyRock.addEventListener('click', callRock);

readyPaper.addEventListener('click', callPaper);

readyScissors.addEventListener('click', callScissors);

function game() {
    return function playRound(func) {
        const compLower =
            typeof func === 'string' ? func.toLowerCase() : "It's not a string";
        const playerSel =
            typeof playerSelection === 'string'
                ? playerSelection.toLowerCase()
                : "It's not a string";
        if (compLower === 'paper' && playerSel === 'rock') {
            console.log(sumPlayerall);
            sumComputerall += 1;
            console.log(sumComputerall);
            return 'You Lose! Paper beats Rock';
        } else if (compLower === 'scissors' && playerSel === 'rock') {
            rockPlayerscores.upScore();
            sumPlayerall =
                rockPlayerscores.scoresSum +
                paperPlayerscores.scoresSum +
                scissorsPlayerscores.scoresSum;
            console.log(sumPlayerall);
            console.log(sumComputerall);
            return 'You win! Rock beats Scissors';
        } else if (compLower === 'scissors' && playerSel === 'paper') {
            console.log(sumPlayerall);
            sumComputerall += 1;
            console.log(sumComputerall);
            return 'You lose! Scissors beats Paper';
        } else if (compLower === 'rock' && playerSel === 'paper') {
            paperPlayerscores.upScore();
            sumPlayerall =
                rockPlayerscores.scoresSum +
                paperPlayerscores.scoresSum +
                scissorsPlayerscores.scoresSum;
            console.log(sumPlayerall);
            console.log(sumComputerall);
            return 'You win! Paper beats Rock';
        } else if (compLower === 'paper' && playerSel === 'scissors') {
            scissorsPlayerscores.upScore();
            sumPlayerall =
                rockPlayerscores.scoresSum +
                paperPlayerscores.scoresSum +
                scissorsPlayerscores.scoresSum;
            console.log(sumPlayerall);
            console.log(sumComputerall);
            return 'You win! Scissors beats Paper';
        } else if (compLower === 'rock' && playerSel === 'scissors') {
            console.log(sumPlayerall);
            sumComputerall += 1;
            console.log(sumComputerall);
            return 'You lose! Rock beats Scissors';
        } else {
            console.log(sumPlayerall);
            console.log(sumComputerall);
            return 'This is draw';
        }
    };
}

const startGame = game();

let leftAttempts = 10;

function callRock(e) {
    const counterRemain =
        leftAttempts > 0 ? (leftAttempts -= 1) : 'There are no more attempts';
    console.log(counterRemain);
    const playerRock =
        e.target.innerHTML === 'Rock' ? (playerSelection = 'Rock') : false;
    return playerRock
        ? console.log(startGame(getComputerChoice()))
        : 'NothingROCK';
}

function callPaper(e) {
    const counterRemain =
        leftAttempts > 1 ? (leftAttempts -= 1) : 'There are no more attempts';
    console.log(counterRemain);
    const playerPaper =
        e.target.innerHTML === 'Paper' ? (playerSelection = 'Paper') : false;
    return playerPaper
        ? console.log(startGame(getComputerChoice()))
        : 'NothingPAPER';
}

function callScissors(e) {
    const counterRemain =
        leftAttempts > 1 ? (leftAttempts -= 1) : 'There are no more attempts';
    console.log(counterRemain);
    const playerScissors =
        e.target.innerHTML === 'Scissors'
            ? (playerSelection = 'Scissors')
            : false;
    return playerScissors
        ? console.log(startGame(getComputerChoice()))
        : 'NothingSCISSORS';
}
