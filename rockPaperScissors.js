//Rock Paper Scissors Game

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playAgainButton = document.querySelector("#playAgainBtn");
playAgainButton.style.display = "none";

const resultsDiv = document.querySelector("#results");
resultsDiv.style.border = "2px solid blue";

const resultsText = document.querySelector("#resultsText");
const winnerText = document.querySelector("#winnerText");


rockButton.addEventListener("click", () => {
    //replace humanMove with "rock"
    return playRound("Rock", getComputerChoice());
})

paperButton.addEventListener("click", () => {
    //replace humanMove with "paper"
    return playRound("Paper", getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
    //replace humanMove with "scissors"
    return playRound("Scissors", getComputerChoice());
})

let humanScore = 0;
let computerScore = 0;

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

if (winner === "Human") {
         humanScore++;
     } else if (winner === "The computer") {
         computerScore++
     }

    resultsText.textContent= `You played: ${humanOutcome} The computer played: ${computerOutcome} 
    The winner is: ${winner} The score is: You: ${humanScore} The computer: ${computerScore}.`;

    if (humanScore === 5) {
        winnerText.textContent= "Good game! You win!";
        humanScore = 0;
        computerScore = 0;
        playAgainButton.style.display = "block";
        rockButton.disabled= true;
        paperButton.disabled= true;
        scissorsButton.disabled= true;
     }
    if (computerScore === 5) {
        winnerText.textContent= "Nice try, but the computer wins!";
        humanScore = 0;
        computerScore = 0;
        playAgainButton.style.display = "block";
        rockButton.disabled= true;
        paperButton.disabled= true;
        scissorsButton.disabled= true;
     }
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

//Function no longer needed, moving score keeping to playRound

// function playGame() {
//     // plays 5 rounds of game
//     // keeps track of score, incrementing is outside of playRound
//     // after 1 round, calls playRound again
//     // declares winner at end using comparison 
    
// let humanScore = 0;
// let computerScore = 0;


//     //Calls and saves computerOutcome/humanOutcome in variable
//     // Needs to be executed 5 times total to play whole game
//     const computerMove = getComputerChoice();
//     const humanMove = getHumanChoice();

//     const winner = playRound(humanMove, computerMove);

//     if (winner === "Human") {
//         humanScore++;
//     } else if (winner === "The computer") {
//         computerScore++
//     }

//     console.log(`The score is: You: ${humanScore} The computer: ${computerScore}.`)

// }   

//Function no longer needed with the buttons 

// function getHumanChoice() {

//    let humanChoice = parseInt(window.prompt("Please enter your move choice. For Rock enter 1. For Paper enter 2. For Scissors enter 3."));


//     while(humanChoice !== 1 && humanChoice !== 2 && humanChoice !== 3) {
//         alert("Must enter either 1, 2, or 3.")
//         humanChoice = parseInt(window.prompt("Please enter your move choice. For Rock enter 1. For Paper enter 2. For Scissors enter 3."));
//     }
    
//     let humanOutcome = "";

//     if (humanChoice === 1) {
//         humanOutcome = "Rock";
//     } else if (humanChoice === 2) {
//         humanOutcome = "Paper";
//     } else if (humanChoice === 3){
//         humanOutcome = "Scissors"
//     }

//     console.log("Your move: ", humanOutcome);
//     return humanOutcome;
// }


