// Timer functionality
let timerInterval = null;
function timer(startTime) {
    if (startTime === null) {
        document.getElementById("timer").innerHTML = "00:00:00";
        return;
    }

    const now = Date.now();
    const elapsed = now - startTime;

    const totalSeconds = Math.floor(elapsed / 1000);
    const currentSeconds = totalSeconds % 60;
    const currentMinutes = Math.floor(totalSeconds / 60) % 60;
    const currentHours = Math.floor(totalSeconds / 3600);

    const formattedTime = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;

    document.getElementById("timer").innerHTML = formattedTime;
}

// Winning patterns for tic-tac-toe
const pattern = [
    ["box_1", "box_2", "box_3"], // Top row
    ["box_4", "box_5", "box_6"], // Middle row
    ["box_7", "box_8", "box_9"], // Bottom row
    ["box_1", "box_5", "box_9"], // Diagonal \
    ["box_3", "box_5", "box_7"], // Diagonal /
    ["box_3", "box_6", "box_9"], // Right column
    ["box_2", "box_5", "box_8"], // Middle column
    ["box_1", "box_4", "box_7"]  // Left column
]

// Game state variables
const fillBox = []
let gameActive = true
let count = 0
document.getElementById("game").style.display = "none"
document.getElementById("winning_screen").style.display = "none"
let currentGameMode = ""

// Initialize game with selected mode
function startGame(mode) {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    let startTime = Date.now();
    timer(startTime);
    timerInterval = setInterval(() => timer(startTime), 1000);
    currentGameMode = mode;
    document.getElementById("start_screen").style.display = "none";
    document.getElementById("game").style.display = "block";

    const modeDisplay = document.getElementById("mode");
    if (mode === "computer") {
        modeDisplay.textContent = "Computer VS Human";
    } else {
        modeDisplay.textContent = "Two Player Mode";
    }
}

// Handle box clicks based on game mode
function handleBoxClick(box) {

    if (currentGameMode === "multiplayer") {
        gamePlay(box);
    } else {
        computerPlay(box);
    }
}

// Two player game logic
function gamePlay(box) {

    const boxId = box.id

    if (!fillBox.includes(boxId)) {
        if (count % 2 == 0) {
            count += 1
            fillBox.push(boxId)

            const boxSelection = document.getElementById(box.id)
            boxSelection.innerHTML = `<i class="fa-regular fa-circle" id="custom_icon"></i>`
            boxSelection.setAttribute("data-value", "circle")
            if (count > 2) {

                if (checkWinning()) {
                    gameActive = false
                    showWinner("Player O")
                }

            }


        }
        else {
            count += 1
            fillBox.push(boxId)

            const boxSelection = document.getElementById(box.id)
            boxSelection.innerHTML = `<i class="fa-solid fa-x" id="custom_icon"></i>`
            boxSelection.setAttribute("data-value", "cross")
            if (count > 2) {
                if (checkWinning()) {
                    gameActive = false
                    showWinner("Player X")
                }
            }
        }
    }

    if (fillBox.length == 9 && gameActive) {
        showTie();
    } else {
        updateStatusMessage();
    }
}


// Computer vs Human game logic
function computerPlay(box) {

    const boxId = box.id

    if (!fillBox.includes(boxId) && gameActive) {

        document.getElementById("game_box").style.cursor = "default"
        count += 1
        fillBox.push(boxId)

        const boxSelection = document.getElementById(box.id)
        boxSelection.innerHTML = `<i class="fa-regular fa-circle" id="custom_icon"></i>`
        boxSelection.setAttribute("data-value", "circle")
        if (count > 2) {
            if (checkWinning()) {
                gameActive = false

                showWinner("Player O")
                return
            }
        }


        if (fillBox.length == 9) {
            showTie()
            return
        }

        updateStatusMessage()
        document.getElementById("game_box").style.cursor = "not-allowed"
        setTimeout(() => {
            if (gameActive && fillBox.length < 9) {
                const computerBoxId = computerNumber()

                if (computerBoxId) {
                    count += 1
                    fillBox.push(computerBoxId)

                    const computerBox = document.getElementById(computerBoxId)
                    computerBox.innerHTML = `<i class="fa-solid fa-x" id="custom_icon"></i>`
                    computerBox.setAttribute("data-value", "cross")
                    if (count > 2) {
                        if (checkWinning()) {
                            gameActive = false
                            showWinner("Computer")
                            return
                        }
                    }


                    if (fillBox.length == 9 && gameActive) {
                        showTie()
                    } else {
                        updateStatusMessage()
                    }
                } document.getElementById("game_box").style.cursor = "default"
            }
        }, 1000)
    }
}

// Generate random move for computer
function computerNumber() {
    let computerNum = Math.floor(Math.random() * 9) + 1
    const choosenNum = `box_${computerNum}`
    if (!fillBox.includes(choosenNum)) {
        return choosenNum
    }
    else {
        return computerNumber()
    }
}

// Update status message based on current player
function updateStatusMessage() {
    const statusMsg = document.getElementById("status_message");
    if (currentGameMode === "computer") {
        if (count % 2 == 0) {
            statusMsg.textContent = "Your Turn";
        } else {
            statusMsg.textContent = "Computer's Turn";
        }
    } else {
        if (count % 2 == 0) {
            statusMsg.textContent = "Player O's Turn";
        } else {
            statusMsg.textContent = "Player X's Turn";
        }
    }
}

// Check for winning combination
function checkWinning() {
    for (let i = 0; i < pattern.length; i++) {
        const winningPattern = pattern[i]
        let matchCount = 0
        const matchedId = []

        // Collect ALL matches first
        for (let j = 0; j < winningPattern.length; j++) {
            if (fillBox.includes(winningPattern[j])) {
                matchCount += 1
                matchedId.push(winningPattern[j])
            }
        }

        if (matchCount == 3) {
            const id1 = document.getElementById(matchedId[0]).getAttribute("data-value")
            const id2 = document.getElementById(matchedId[1]).getAttribute("data-value")
            const id3 = document.getElementById(matchedId[2]).getAttribute("data-value")

            if (id1 == id2 && id2 == id3) {

                return true
            }
        }
    }
    return false
}

// Display winner screen
function showWinner(winner) {
    gameActive = false;
    document.getElementById("winner_announcement").textContent = `${winner} Wins!`;
    document.getElementById("winning_screen").style.display = "block";
    document.getElementById("game").style.display = "none";
}

// Display tie screen
function showTie() {
    gameActive = false;
    document.getElementById("winner_announcement").textContent = "It's a Tie!";
    document.getElementById("winner_message").textContent = "Great game! Try again.";
    document.getElementById("winning_screen").style.display = "block";
    document.getElementById("game").style.display = "none";
}

// Reset game
function newGame() {
    window.location.reload()
}
