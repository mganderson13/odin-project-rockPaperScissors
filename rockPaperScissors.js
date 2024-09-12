//Rock Paper Scissors Game

let humanScore = 0;
let computerScore = 0;

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

getComputerChoice();

function getHumanChoice() {

   let humanChoice = parseInt(window.prompt("Please enter your move choice. For Rock enter 0. For Paper enter 1. For Scissors enter 2."));

    let humanOutcome = "";

    if (humanChoice === 0) {
        humanOutcome = "Rock";
    } else if (humanChoice === 1) {
        humanOutcome = "Paper";
    } else if (humanChoice === 2){
        humanOutcome = "Scissors"
    } else {
        alert("Must enter either 0, 1, or 2.")
    }

    console.log("Your move: ", humanOutcome);

    return humanOutcome;
}

getHumanChoice();

function playRound() {



}