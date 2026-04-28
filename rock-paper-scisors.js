/// Computer Choice Logic
Create function getRandomNumber
    Get 0 or 1 two times with Math.random
    Return the sum of the two numbers


Create function getComputerChoice
    Create variable randomNumber
        Get a number using getRandomNumber

    If randomNumber is 0 then 
    return "rock"
    else if randomNumber is 1 then
    return "paper"
    else if randomNumber is 2 then
    return "scissors"   

/// Human Choice Logic    

Create function getHumanChoice
    Create variable humanChoice
        Input string using prompt: "Please input "rock," "paper," or "scissors"
    
    While humanChoice case insensitively is "rock", "paper", or "scissors" case then
    return humanChoice
    else getHumanChoice

/// Score Initialization

Create variable humanScore as 0

Create variable computerScore as 0
     
Create variable currentRound as 0

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
    Add one to currentRound