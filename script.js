document.addEventListener('DOMContentLoaded', function () {
    const userNameElement = document.getElementById('user-name');
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');
    const roundsLeftElement = document.getElementById('rounds-left');
    const generateButton = document.getElementById('generate-button');

    let userName = prompt('Please enter your name:', 'User');

    if (!userName || userName.trim() === '') {
        userName = 'User';
    }

    userNameElement.textContent = userName;

    let userWins = 0;
    let computerWins = 0;
    let roundsLeft = 3;

    generateButton.addEventListener('click', function () {
        if (roundsLeft === 0) {
            return;
        }

        const userNumber = getRandomNumber();
        const computerNumber = getRandomNumber();

        userScoreElement.textContent = userNumber;
        computerScoreElement.textContent = computerNumber;

        if (userNumber > computerNumber) {
            userWins++;
        } else if (computerNumber > userNumber) {
            computerWins++;
        }

        roundsLeft--;
        roundsLeftElement.textContent = roundsLeft;

        checkWinner();
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function checkWinner() {
        if (roundsLeft !== 0) {
            return;
        }

        let message;

        if (userWins > computerWins) {
            message = userName + ' wins!';
        } else if (computerWins > userWins) {
            message = 'Computer wins!';
        } else {
            message = 'Draw!';
        }

        setTimeout(function () {
            alert(message);
            resetGame();
        }, 1000);
    }

    function resetGame() {
        userWins = 0;
        computerWins = 0;
        roundsLeft = 3;

        userScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        roundsLeftElement.textContent = roundsLeft;
    }
});
