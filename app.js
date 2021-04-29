const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerS = document.querySelector('.player-score');
const computerS = document.querySelector('.computer-score');
const game = document.querySelector('#total-game');
const remark = document.querySelector('.game-remark');
let computerSelection = Math.floor(Math.random() * 9);



let playerScore = 0;
let computerScore = 0;
let finalScore = playerScore + computerScore;
function playRound() {

    rock.addEventListener("click", () => {
        if (computerSelection <= 3) {
            computerScore++;
            computerS.innerText = computerScore;
            remark.innerText = 'Game Point Computer'
        } else if (computerSelection > 3 && computerSelection <= 6) {
            playerScore++;
            playerS.innerText = playerScore;
            remark.innerText = 'Game Point Player'
        } else if (computerSelection > 6 && computerSelection <= 10) {
            playerScore;
            computerScore;
            remark.innerText = 'Tie'
        } finalSel();
    })
    paper.addEventListener("click", () => {
        if (computerSelection > 6 && computerSelection <= 10) {
            playerScore++;
            playerS.innerText = playerScore
            remark.innerText = 'Game Point Player'
        } else if (computerSelection > 3 && computerSelection <= 6) {
            computerScore++;
            computerS.innerText = computerScore;
            remark.innerText = 'Game Point Computer'
        } else if (computerSelection <= 3) {
            playerScore;
            computerScore;
            remark.innerText = 'Tie'
        } finalSel();
    })
    scissors.addEventListener("click", () => {
        if (computerSelection <= 3) {
            playerScore++;
            playerS.innerText = playerScore
            remark.innerText = 'Game Point Player'
        } else if (computerSelection > 6 && computerSelection <= 10) {
            computerScore++;
            computerS.innerText = computerScore;
            remark.innerText = 'Game Point Computer'
        } else if (computerSelection > 3 && computerScore <= 6) {
            playerScore;
            computerScore;
            remark.innerText = 'Tie'
        } finalSel();
    })

}
playRound();


function finalSel() {
    finalScore = playerScore + computerScore;
    if (playerScore > 2 && finalScore == 5) {
        game.innerHTML = `<h2>You won!!!! Congratulations</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
    else if (finalScore == 5 && computerScore > 2) {
        game.innerHTML = `<h2>You lost Try Again</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
}

