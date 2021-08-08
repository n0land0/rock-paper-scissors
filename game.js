class Game {
  constructor(player1, player2, type) {

  }
}

// A Game should include:
  // Two Player instances
    // player 1 and player 2 passed in from main
  // A way to keep track of the data for the game board
    // fighters & type passed in every game?
  // A way to keep track of the selected game type
    // main/DOM will draw background from game type
  // A way to check the Game’s board data for win conditions
    // conditionals
  // A way to detect when a game is a draw (no one has won)
    // player's fighter properties match
  // A way to reset the Game’s board to begin a new game


// DRAW - all modes
if (player1.fighter === player2.fighter) {
  // DRAW
}

// CLASSIC MODE
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

// ALT MODE
if (player1.fighter === "spongebob-character") {
  if (player2.fighter === "patrick-character" || player2.fighter === "sandy-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "squidward-character" || player2.fighter === "krabs-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "patrick-character") {
  if (player2.fighter === "squidward-character" || player2.fighter === "sandy-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "spongebob-character" || player2.fighter === "krabs-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "squidward-character") {
  if (player2.fighter === "spongebob-character" || player2.fighter === "krabs-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "patrick-character" || player2.fighter === "sandy-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "sandy-character") {
  if (player2.fighter === "squidward-character" || player2.fighter === "krabs-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "spongebob-character" || player2.fighter === "patrick-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
} else if (player1.fighter === "krabs-character") {
  if (player2.fighter === "spongebob-character" || player2.fighter === "patrick-character") {
    player2.win();
    player2.saveWinsToStorage();
  } else if (player2.fighter === "squidward-character" || player2.fighter === "sandy-character") {
    player1.win();
    player1.saveWinsToStorage();
  }
}

// 2 & 4 > 1 > 3 & 5
// 3 & 4 > 2 > 1 & 5
// 1 & 5 > 3 > 2 & 4
// 3 & 5 > 4 > 1 & 2
// 1 & 2 > 5 > 3 & 4
