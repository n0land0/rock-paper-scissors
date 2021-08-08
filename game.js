class Game {
  constructor(player1, player2) {

  }
}

// A Game should include:
  // Two Player instances
  // A way to keep track of the data for the game board
  // A way to keep track of the selected game type
  // A way to check the Game’s board data for win conditions
  // A way to detect when a game is a draw (no one has won)
  // A way to reset the Game’s board to begin a new game

// CLASSIC MODE

if (player1.fighter === player2.fighter) {
  // DRAW
}

// Rock beats Paper
if (player1.fighter === "rock-character") {
  if (player2.fighter === "paper-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "scissors-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "paper-character") {
  if (player2.fighter === "scissors-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "rock-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "scissors-character") {
  if (player2.fighter === "rock-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "paper-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
}
// Paper beats Scissors
// Scissors beat Rock

// ALT MODE
