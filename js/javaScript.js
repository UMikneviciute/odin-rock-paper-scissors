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

    let selectionText = document.querySelector('.results p');
    selectionText.textContent = "Your selection: " + playerSelection + " VS " + "Computer selection: " + computerSelection;

    let resultText = document.querySelector('.results h5');
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        resultText.textContent = ("You win this round! Rock beats Scissors.");
        playerScore++;

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        resultText.textContent = ("A draw! Rock and Rock.");
        

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultText.textContent = ("You lose this round! Paper beats Rock.");
        computerScore++;
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultText.textContent = ("You lose this round! Scissors beats Paper.");
        computerScore++;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultText.textContent = ("You win this round! Paper beats Rock.");
        playerScore++;

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        resultText.textContent = ("A draw! Paper and Paper.");
    }


    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultText.textContent = ("A draw! Scissors and Scissors.");
        
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultText.textContent = ("You lose this round! Rock beats Scissors.");
        computerScore++;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultText.textContent = ("You win this round! Scissors beats Paper.");
        playerScore++;
    }

    let yourPoints = document.querySelector('.your-points p');
    yourPoints.textContent = "Your score: " + playerScore;

    let computerPoints = document.querySelector('.computer-points p');
    computerPoints.textContent = "Computer score: " + computerScore;
}

function game(){
    let roundsText = document.querySelector('.rounds p');
    roundsText.textContent = ("Round " + roundCounter);
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

    const buttonDiv = document.querySelector('.container');
    buttonDiv.parentNode.removeChild(buttonDiv);

    const pictureDiv = document.querySelector('.pictures');
    pictureDiv.parentNode.removeChild(pictureDiv);
}