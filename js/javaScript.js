// const bodyElement = document.querySelector('body');
// console.log(bodyElement);
// let btnRock = document.createElement('button');
// btnRock.textContent = 'Rock';
// bodyElement.appendChild(btnRock);

// let btnPaper = document.createElement('button');
// btnPaper.textContent = 'Paper';
// bodyElement.appendChild(btnPaper);

// let btnScissors = document.createElement('button');
// btnScissors.textContent = 'Scissors';
// bodyElement.appendChild(btnScissors);

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

let btnRock = document.querySelector('.rock');
    console.log(btnRock);
    btnRock.addEventListener("click", () => {
        playerSelection = "rock";
        letsPlay()
    });

    let btnPaper = document.querySelector('.paper');
    btnPaper.addEventListener("click", () => {
        playerSelection = "paper";
        letsPlay()
    });

    let btnScissors = document.querySelector('.scissors');
    btnScissors.addEventListener("click", () => {
        playerSelection = "scissors";
        letsPlay()
    });

function letsPlay(){ 

// playerSelection = prompt("Choose Rock / Paper / Scissors");
// playerSelection = playerSelection.toLowerCase();
computerSelection = getComputerChoice();

const selectionDiv = document.querySelector('.results');
let selectionText = document.createElement('p');
selectionText.textContent = ("Your selection: " + playerSelection + "  Computer selection: " + computerSelection);
selectionDiv.appendChild(selectionText);

let resultText = document.createElement('p');
selectionDiv.appendChild(resultText);

if (playerSelection === "rock" && computerSelection === "scissors") {
    resultText.textContent = ("You Win! Rock beats Scissors.");
    
    console.log("You Win! Rock beats Scissors.")

} else if (playerSelection === "rock" && computerSelection === "rock") {
    resultText.textContent = ("A draw! Rock and Rock.");
    
    console.log("A draw! Rock and Rock.")

} else if (playerSelection === "rock" && computerSelection === "paper") {
    resultText.textContent = ("You Lose! Paper beats Rock.");
    
    console.log("You Lose! Paper beats Rock.")
}

else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultText.textContent = ("You Lose! Scissors beats Paper.");
    
    console.log("You Lose! Scissors beats Paper.")

} else if (playerSelection === "paper" && computerSelection === "rock") {
    resultText.textContent = ("You Win! Paper beats Rock.");
    
    console.log("You Win! Paper beats Rock.")

} else if (playerSelection === "paper" && computerSelection === "paper") {
    resultText.textContent = ("A draw! Paper and Paper.");
    
    console.log("A draw! Paper and Paper.")
}


else if (playerSelection === "scissors" && computerSelection === "scissors") {
    resultText.textContent = ("A draw! Scissors and Scissors.");
    
    console.log("A draw! Scissors and Scissors.")

} else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultText.textContent = ("You Lose! Rock beats Scissors.");
    
    console.log("You Lose! Rock beats Scissors.")

} else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultText.textContent = ("You Win! Scissors beats Paper.");
    
    console.log("You Win! Scissors beats Paper.")
} 
}

function game(){
letsPlay()
let computerScore = 0;
let playerScore = 0;

const roundsDiv = document.querySelector('.rounds');
let roundsText = document.createElement('p');
roundsDiv.appendChild(roundsText);
let winStatus = document.createElement('p');
roundsDiv.appendChild(winStatus);

if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore ++ ;
}
roundsText.textContent = ("Round 1: \nComputer score: " + computerScore + "\nYour score: " + playerScore);

console.log("Round 1: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore ++;
}
roundsText.textContent = ("Round 2: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore ++;
}
roundsText.textContent = ("Round 3: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore ++;
}
roundsText.textContent = ("Round 4: \nComputer score: " + computerScore + "\nYour score: " + playerScore)


letsPlay()
if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors"){
    playerScore ++;
} else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore ++;
}
roundsText.textContent = ("Round 5: \nComputer score: " + computerScore + "\nYour score: " + playerScore)

if (computerScore < playerScore) {
    winStatus.textContent = ("You won the game!");
} else if (computerScore === playerScore){
    winStatus.textContent = ("No loosers, no winners.")
} else {
    winStatus.textContent = ("You loose :(")
}
}

// game()

