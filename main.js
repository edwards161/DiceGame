const score1 = document.getElementById("score1");
const diceImage = document.getElementById("diceImage");
const diceRollBtn = document.getElementById("diceRollBtn");
const restart = document.getElementById("restart");
let playerScore = 0;

diceRollBtn.addEventListener("click", () => {
    let diceRoll = Math.ceil(Math.random() * 6);
    diceImage.src = `images/dice${diceRoll}.png`;
    playerScore += diceRoll;
    score1.innerHTML = playerScore;
    if (playerScore >= 20){
        score1.innerHTML =   `YOU WIN!`
        playerScore = 0
    } else if (diceRoll === 1) {
        score1.innerHTML = "GAME OVER!"
        playerScore = 0
    }
})

restart.addEventListener('click', () => {
	window.location.reload()
});