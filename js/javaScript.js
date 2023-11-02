let playerSelection = 0;
let computerSelection = 0;

let computerScore = 0;
let playerScore = 0;

 let roundCounter = 1;

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

let btnRock = document.querySelector('.rock');
    btnRock.addEventListener("click", selectRock);

let btnPaper = document.querySelector('.paper');
    btnPaper.addEventListener("click", selectPaper);

let btnScissors = document.querySelector('.scissors');
    btnScissors.addEventListener("click", selectScissors);

function selectRock(){
    playerSelection = "rock";
    letsPlay();
    game();
}

function selectPaper(){
    playerSelection = "paper";
    letsPlay();
    game();
}

function selectScissors(){
    playerSelection = "scissors";
    letsPlay();
    game();
}

function letsPlay(){ 

    computerSelection = getComputerChoice();

    const selectionDiv = document.querySelector('.results');
    let selectionText = document.createElement('p');
    selectionText.textContent = ("Your selection: " + playerSelection + "  Computer selection: " + computerSelection);
    selectionDiv.appendChild(selectionText);

    let resultText = document.createElement('p');
    selectionDiv.appendChild(resultText);

    if (playerSelection === "rock" && computerSelection === "scissors") {
        resultText.textContent = ("You Win! Rock beats Scissors.");
        playerScore++;
        console.log("You Win! Rock beats Scissors.")

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        resultText.textContent = ("A draw! Rock and Rock.");
        
        console.log("A draw! Rock and Rock.")

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultText.textContent = ("You Lose! Paper beats Rock.");
        computerScore++;
        console.log("You Lose! Paper beats Rock.")
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultText.textContent = ("You Lose! Scissors beats Paper.");
        computerScore++;
        console.log("You Lose! Scissors beats Paper.")

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultText.textContent = ("You Win! Paper beats Rock.");
        playerScore++;
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
        computerScore++;
        console.log("You Lose! Rock beats Scissors.")

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultText.textContent = ("You Win! Scissors beats Paper.");
        playerScore++;
        console.log("You Win! Scissors beats Paper.")
    }
}

function game(){
    const roundsDiv = document.querySelector('.rounds');
    let roundsText = document.createElement('p');
    roundsDiv.appendChild(roundsText);

    roundsText.textContent = ("Round " + roundCounter + ": Computer score: " + computerScore + "Your score: " + playerScore);
    roundCounter++

    if (playerScore === 5 || computerScore === 5) {
        gameResult();
        gameOver();
    }
}

function gameResult(){
    const winnerDiv = document.querySelector('.winner');
    let winStatus = document.createElement('p');
    winnerDiv.appendChild(winStatus);

    if (playerScore > computerScore) {
        winStatus.textContent = "You won the game!";
    } else if (computerScore === playerScore){
        winStatus.textContent = "No loosers, no winners."
    } else {
        winStatus.textContent = "You loose :("
    }
}
    
function gameOver(){
    btnRock.removeEventListener("click", selectRock);
    btnPaper.removeEventListener("click", selectPaper);
    btnScissors.removeEventListener("click", selectScissors);
}