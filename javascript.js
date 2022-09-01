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

console.log(getComputerChoice())