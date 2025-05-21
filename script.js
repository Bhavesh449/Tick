function checkResult() {
  let roundWon = false;
  let winningCombo = [];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] === '' || board[b] === '' || board[c] === '') continue;
    if (board[a] === board[b] && board[b] === board[c]) {
      roundWon = true;
      winningCombo = condition;
      break;
    }
  }

  if (roundWon) {
    message.textContent = `Player ${currentPlayer} wins! 🎉`;
    isGameActive = false;
    highlightWinningCells(winningCombo);
    updateScore(currentPlayer);
    setTimeout(restartGame, 2000);  // Auto restart after 2 seconds
    return true;
  }

  if (!board.includes('')) {
    message.textContent = "It's a draw!";
    isGameActive = false;
    animateDraw();
    setTimeout(restartGame, 2000);  // Auto restart after 2 seconds
    return true;
  }

  return false;
}
