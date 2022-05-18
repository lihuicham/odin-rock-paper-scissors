/* Computer random guess*/
let myarray = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomNum = Math.floor(Math.random() * myarray.length);
    return myarray[randomNum];
}

/* main logic of the game*/ 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win !";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win !";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win !";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose ! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose ! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose ! Scissors beats Paper";
    } else {
        return "Draw"
    }
    
}

/* 
code for testing 
const playerSelection = "PAper";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));  */

/* looping */ 
function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 3; i++) {
        const playerSelection = prompt("What's Your Guess?").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            const computerSelection = computerPlay()
            let res = playRound(playerSelection, computerSelection);
            if (res === "You Win !") {
                playerScore += 1;
            } else if (res == "Draw") {
                playerScore = playerScore;
                compScore = compScore;
            } else {
                compScore += 1;
            }
            console.log("Your guess: " + playerSelection)
            console.log("Computer's guess: " + computerSelection)
            console.log("You : " + playerScore + "   Computer: " + compScore);
        } else {
            console.log("Please enter a valid guess.");
            continue;
        }

    }

    if (playerScore > compScore) {
        console.log("You beat the computer !");
    } else if (compScore > playerScore) {
        console.log("Arghh you are defeated, try again next time");
    } else {
        console.log("So... you are only as smart as the computer, not smarter?")
    } 
}



