/// Variables
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

    if (randomNumber === 0) { f
    return "rock";
    } else if (randomNumber === 1) {
    return "paper";
    } else if (randomNumber === 2) {
    return "scissors"   
}}

/// Human Choice Logic    
function getHumanChoice() { 
    let humanChoice = prompt( `Please input "rock," "paper," or "scissors"` ).toLowerCase();
    if ( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
    return humanChoice;
    } else { getHumanChoice();
    } 
} 

/*
/// Rounds

Create function determineWinner with inputs computer and human
    If computer and human are identical
    Return "tie"
    Else if computer is "rock" and human is "paper" or
            computer is "paper" and human is "scissors" or
            computer is "scissors" and human is "rock"
    Return "human"
    Else if computer is "rock" and human is "scissors" or
            computer is "paper" and human is "rock" or
            computer is "scissors" and human is "rock"
    Return "computer"

Create function playRound with input winner
    If winner is "tie" then
    Break
    Else if winner is "computer" then
    Add one to humanScore
    Else if winner is "human" then
    Add one to humanScore

/// Game logic

Create function playGame
    While currentRound < 5
    Run playRound 
    Add one to currentRound     */

