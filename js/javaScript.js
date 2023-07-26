function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// funkcija, kuri suzaistu viena karta, su dviem parametrais: playerSelection ir computerSelection. Po to turi atspausdinti kas laimejo. Reikia kintamojo zaidejo pasirinkimui ir kito - kompiuteriui. Tada juos palyginti. Jei zaidejas pasirenka kazka pries kazka, jis laimi ir t.t.

let playerSelection = 0;
let computerSelection = 0;


function letsPlay(){
playerSelection = prompt("Choose Rock / Paper / Scissors");
playerSelection = playerSelection.toLowerCase();
computerSelection = getComputerChoice();

console.log("Computer selection: " + computerSelection + "\nYour selection: " + playerSelection);

if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors.")

} else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("A draw! Rock and Rock.")

} else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock.")
}

else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats Paper.")

} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock.")

} else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("A draw! Paper and Paper.")
}


else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("A draw! Scissors and Scissors.")

} else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors.")

} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper.")
} else (prompt("Please input Rock / Paper/ Scissors")) 

}

function game(){
letsPlay()
let computerScore = 0;
let playerScore = 0;
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore++ ;
    // KOPIJUOTI KITIEMS
}
console.log("Round 1: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore = + 1;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore = + 1;
}
console.log("Round 2: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore = + 1;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore = + 1;
}
console.log("Round 3: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore = + 1;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore = + 1;
}
console.log("Round 4: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore = + 1;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore = + 1;
}
console.log("Round 5: \nComputer score: " + computerScore + "\nYour score: " + playerScore)
}

game()