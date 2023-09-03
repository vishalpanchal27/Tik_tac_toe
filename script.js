const boxs = document.querySelectorAll(".box")
const turn = document.querySelector("#turn")
const won = document.querySelector("#won")
const winnerDisplay = document.querySelector(".popUp")
const restartBtn = document.querySelector(".restartBtn")

let count = 0;
let chance = true;
let x = 0, O = 0;
let board = Array(9).fill('')
let winnerFound = false;

const boxStyle = (crossAndStyle) => {
    crossAndStyle.style.height = "100px"
    crossAndStyle.style.display = "flex"
    crossAndStyle.style.justifyContent = "center"
    crossAndStyle.style.alignItems = "center"
    crossAndStyle.style.fontSize = "2rem"
    crossAndStyle.style.color = "white"
}



const win = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]
let winnerIs = "";


restartBtn.addEventListener('click', () => {
    count = 0
    chance = true;
    turn.textContent = "Player : X"
    boxs.forEach(box => {
        box.textContent = ""
        box.addEventListener('click', toggleBox)
    });
    winnerDisplay.classList.remove('display')
    restartBtn.style.display = 'none'
    board = Array(9).fill('')
    turn.style.display = "flex"
    winnerFound = false
})


function checkWin(board) {
    console.log(board)
    win.forEach(arr => {
        const [a, b, c] = arr;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            winnerIs = board[a]
            winnerFound = true;
            won.textContent = `${winnerIs} Won 👋`
            winnerDisplay.classList.add('display')
            restartBtn.style.display = "flex"
            turn.style.display = "none"
            return true;
        }
    })
}


function toggleBox(event) {
    const box = event.currentTarget;
    if (winnerFound) {
        return
    }
    else if (chance == true) {
        const cross = document.createElement('h1')
        cross.textContent = 'X'
        box.appendChild(cross)
        boxStyle(cross)
        x = box.id;
        board[x] = 'X'
        chance = false;
        turn.textContent = "Player : O"
        count++
        console.log(count)
        box.removeEventListener('click', toggleBox)
    }
    else {
        const zero = document.createElement('h1')
        zero.textContent = 'O'
        box.appendChild(zero)
        boxStyle(zero)
        O = box.id;
        board[O] = 'O'
        chance = true;
        turn.textContent = "Player : X"
        count++
        box.removeEventListener('click', toggleBox)
    }
    if (checkWin(board)) {

    }
    if (count == 9) {
        console.log('a;dkjf')
        restartBtn.style.display = "flex"
        winnerDisplay.classList.add('display')
        won.textContent = "Match Draw"
        turn.style.display = "none"
    }
}




boxs.forEach(box => {
    box.addEventListener('click', toggleBox)
});



