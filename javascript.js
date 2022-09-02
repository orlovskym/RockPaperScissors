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

function getPlayerChoice() {
    do {
        let sign = prompt("Choose rock, paper, or scissors")
        sign = sign.toLowerCase()
        if (sign == "rock" || sign == "paper" || sign == "scissors") {
            return sign

        }
    } while (true)
}

function rockPaperScissors(computer, player) {
    if (computer == player) {
        return ("Draw, both players used "+computer+".")
    } else if (computer == "rock" & player == "paper") {
        return "You win, paper covers rock."
    } else if (computer == "rock" & player == "scissors") {
        return "You lose, rock smashes scissors."
    } else if (computer == "paper" & player == "rock") {
        return "You lose, paper covers rock."
    } else if (computer == "paper" & player == "scissors") {
        return "You win, scissors cuts paper."
    } else if (computer == "scissors" & player == "paper") {
        return "You lose, scissors cuts paper."
    } else if (computer == "scissors" & player == "rock") {
        return "You win, rock smashes scissors."
    }
}

console.log(rockPaperScissors(getComputerChoice(), getPlayerChoice()))
//console.log(getPlayerChoice())
