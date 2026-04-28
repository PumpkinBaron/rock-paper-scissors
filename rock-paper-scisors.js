/// Variables
let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore= 0;
let currentRound = 0;

/// Computer Choice Logic
function getRandomNumber(){
    let random = Math.random()
    if (random < .33) {
        return 0;
    } else if (random < .66) {
        return 1;
    } else {
        return 2;
    }
}

function getComputerChoice() {
    let randomNumber = getRandomNumber();

    if (randomNumber === 0) {
    computerChoice = "rock"; 
    return computerChoice;
    } else if (randomNumber === 1) {
    computerChoice = "paper";
    return computerChoice;
    } else if (randomNumber === 2) {
    computerChoice = "scissors";
    return computerChoice;   
}}

/// Human Choice Logic    
function getHumanChoice() { 
    humanChoice = prompt( `Please input "rock," "paper," or "scissors"` ).toLowerCase();
    if ( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
    return humanChoice;
    } else { getHumanChoice();
    } 
} 

/// Rounds logic

function determineWinner(computer, human) {

    if (computer === "rock" && human === "paper" ||
        computer === "paper" && human === "scissors" ||
        computer === "scissors" && human == "rock") {
        return "human"; 
    } else if (computer === human) {
        return "tie";
    } else{ 
        return "computer"; 
    }
}

function playRound(winner) {
    if (winner === "human") {
       ++humanScore;
       return "human"; 
    } else if (winner === "computer") {
        ++computerScore;
        return "computer"; 
    } else {
        return "tie";
    }
}

function roundOutput() {
    let winner = playRound(determineWinner(getComputerChoice(), getHumanChoice()));
    let humanChoiceCapitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    let computerChoiceCapitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (winner === "human") {
        return console.log("You won! " + humanChoiceCapitalized + " beats " + computerChoice + `. `
            + "Current score is Human " + humanScore + ", Computer " + computerScore + ".")
    } else if (winner === "computer") {
        return console.log("You lose! " + computerChoiceCapitalized + " beats " + humanChoice + `. `
            + "Current score is Human " + humanScore + ", Computer " + computerScore + ".")
    } else if (winner === "tie") {
        return console.log("Tie! It's " + humanChoice + " versus " + computerChoice + ". "
            + "Current score is Human " + humanScore + ", Computer " + computerScore + ".");    
    }
}

/// Game logic

function playGame() {
    while (currentRound < 5) {
    roundOutput();
    currentRound++; 
    }
}