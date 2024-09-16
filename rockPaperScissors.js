//Rock Paper Scissors Game

function playGame() {
    // plays 5 rounds of game
    // keeps track of score, incrementing is outside of playRound
    // after 1 round, calls playRound again
    // declares winner at end using comparison 
    
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i<5; i++) {

    //Calls and saves computerOutcome/humanOutcome in variable
    // Needs to be executed 5 times total to play whole game
    const computerMove = getComputerChoice();
    const humanMove = getHumanChoice();

    const winner = playRound(humanMove, computerMove);

    if (winner === "Human") {
        humanScore++;
    } else if (winner === "The computer") {
        computerScore++
    }

    console.log(`The score is: You: ${humanScore} The computer: ${computerScore}.`)
}   

 if (humanScore > computerScore) {
    console.log("You win!");
 }else if (computerScore > humanScore) {
    console.log("The computer wins!")
 } else {
    console.log("It's a tie!");
 }

}

function playRound(humanOutcome, computerOutcome) {

    //takes outcomes of getComputerChoice and getHumanChoice
    //if statements that assign winner
    //increment scores bases on outcome
    let winner = "";

    if ((humanOutcome === "Rock" && computerOutcome === "Scissors") ||
         (humanOutcome === "Paper" && computerOutcome === "Rock") ||
         (humanOutcome === "Scissors" && computerOutcome === "Paper")) {

            winner = "Human";

    } else if ((computerOutcome === "Rock" && humanOutcome === "Scissors") ||
    (computerOutcome === "Paper" && humanOutcome === "Rock") ||
    (computerOutcome === "Scissors" && humanOutcome === "Paper")) {

        winner = "The computer";

    } else {
        winner = "It's a tie!";
    }

    console.log(`The winner is: ${winner}.`);

    return winner;
}

function getComputerChoice() {
    //returns rock, paper, or scissors
    //use Math.random by using comparisons 
    //assign variable to each outcome based on number returned form Math.random

    let computerOutcome = ""

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerOutcome = "Rock";
    } else if (computerChoice === 1) {
        computerOutcome = "Paper";
    } else {
        computerOutcome = "Scissors"
    }

    console.log("Computer's move: ", computerOutcome);

    return computerOutcome;
}

function getHumanChoice() {

   let humanChoice = parseInt(window.prompt("Please enter your move choice. For Rock enter 1. For Paper enter 2. For Scissors enter 3."));


    while(humanChoice !== 1 && humanChoice !== 2 && humanChoice !== 3) {
        alert("Must enter either 1, 2, or 3.")
        humanChoice = parseInt(window.prompt("Please enter your move choice. For Rock enter 1. For Paper enter 2. For Scissors enter 3."));
    }
    
    let humanOutcome = "";

    if (humanChoice === 1) {
        humanOutcome = "Rock";
    } else if (humanChoice === 2) {
        humanOutcome = "Paper";
    } else if (humanChoice === 3){
        humanOutcome = "Scissors"
    }

    console.log("Your move: ", humanOutcome);
    return humanOutcome;
}


playGame();