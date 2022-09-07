let playerScore=0;
let computerScore=0;
let draws=0;
let gameActive=true;
let textResult=document.querySelector(`.textResult`)

function passToGame(player){
    if (gameActive){
    rockPaperScissors(getComputerChoice(),player);
    } else return;
}

function getComputerChoice() {
    let sign = Math.floor(Math.random() * 3)
    if (sign == 0) {
        return "rock"
    } else if (sign == 1) {
        return "paper"
    } else if (sign == 2) {
        return "scissors"
    }
}

function rockPaperScissors(computer, player) {
    if (computer == player) {
        textResult.textContent=`Draw, both players used ${computer}.`
        draws+=1;
    } else if (computer == "rock" & player == "paper") {
        textResult.textContent="You win, paper covers rock."
        playerScore+=1;
    } else if (computer == "rock" & player == "scissors") {
        textResult.textContent="You lose, rock smashes scissors."
        computerScore+=1;
    } else if (computer == "paper" & player == "rock") {
        textResult.textContent="You lose, paper covers rock."
        computerScore+=1;
    } else if (computer == "paper" & player == "scissors") {
        textResult.textContent="You win, scissors cuts paper."
        playerScore+=1;
    } else if (computer == "scissors" & player == "paper") {
        textResult.textContent="You lose, scissors cuts paper."
        computerScore+=1;
    } else if (computer == "scissors" & player == "rock") {
        textResult.textContent="You win, rock smashes scissors."
        playerScore+=1;
    }
    updateScore();
}

function updateScore(){
document.querySelector(`.playerScore`).textContent=playerScore;
document.querySelector(`.computerScore`).textContent=computerScore;
if (playerScore == 5){
    document.querySelector(`.textResult`).textContent="You won the best-of-5!";
    gameActive=false;
}else if (computerScore == 5){
    document.querySelector(`.textResult`).textContent="You lost the best-of-5.";
    gameActive=false;
}

}


function game() {
    let draws = 0
    let playerwins = 0
    let computerwins = 0

    for (let j = 0; j < 5; j++) {
        let result = rockPaperScissors(getComputerChoice(), getPlayerChoice())
        if (result == 0) {
            draws++
        } else if (result == 1) {
            playerwins++
        } else if (result == 2) {
            computerwins++
        }
    }

    console.log("In 5 rounds you got " + draws + " draws, " + playerwins + " wins, and " + computerwins + " losses.")
}



