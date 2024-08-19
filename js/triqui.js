const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return board.includes('') ? null : 'T'; // T for tie
};

const handleClick = (event) => {
    const cellIndex = event.target.dataset.index;
    if (board[cellIndex] || !gameActive) return;

    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        if (winner === 'T') {
            alert('¡Es un empate!');
        } else {
            alert(`¡El jugador ${winner} gana!`);
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const restartGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);
