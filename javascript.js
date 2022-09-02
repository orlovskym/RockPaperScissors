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
        console.log("Draw, both players used " + computer + ".")
        return 0
    } else if (computer == "rock" & player == "paper") {
        console.log("You win, paper covers rock.")
        return 1
    } else if (computer == "rock" & player == "scissors") {
        console.log("You lose, rock smashes scissors.")
        return 2
    } else if (computer == "paper" & player == "rock") {
        console.log("You lose, paper covers rock.")
        return 2
    } else if (computer == "paper" & player == "scissors") {
        console.log("You win, scissors cuts paper.")
        return 1
    } else if (computer == "scissors" & player == "paper") {
        console.log("You lose, scissors cuts paper.")
        return 2
    } else if (computer == "scissors" & player == "rock") {
        console.log("You win, rock smashes scissors.")
        return 1
    }
}

function game() {
    let draws = 0
    let playerwins = 0
    let computerwins = 0

    for (let i = 0; i < 5; i++) {
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

game()