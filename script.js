let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      reset();
    } else if (board.every(cell => cell !== '')) {
      alert('It\'s a tie!');
      reset();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    if (
      board[combination[0]] === currentPlayer &&
      board[combination[1]] === currentPlayer &&
      board[combination[2]] === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  Array.from(document.getElementsByClassName('cell')).forEach(cell => {
    cell.innerText = '';
  });
}
