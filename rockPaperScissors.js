function getComputerChoice() {
    //returns rock, paper, or scissors
    //use Math.random by using comparisons 
    //assign variable to each outcome based on number returned form Math.random

    let outcome = ""

    let chance = Math.floor(Math.random() * 100);

    if (chance <= 33) {
        outcome = "Rock";
    } else if (chance > 33 && chance <= 66) {
        outcome = "Paper";
    } else {
        outcome = "Scissors"
    }

    return outcome;
}