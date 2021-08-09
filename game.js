class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = null;
    this.gameType = gameType;
    this.classicConditions = {
      rock: ["scissors"],
      paper: ["rock"],
      scissors: ["paper"]
    }
    this.altConditions = {
      spongebob: ["squidward", "krabs"],
      patrick: ["spongebob", "krabs"],
      squidward: ["patrick", "sandy"],
      sandy: ["spongebob", "patrick"],
      krabs: ["squidward", "sandy"]
    }
  }
  runGame() {
    if (this.player1.fighter === this.player2.fighter) {
      this.winner = null;
      return "Draw!";
    } else if (this.gameType === "classic-mode") {
      if (this.classicConditions[this.player1.fighter].includes(this.player2.fighter)) {
        this.winner = this.player1.name;
        this.player1.win();
      } else if (this.classicConditions[this.player2.fighter].includes(this.player1.fighter)) {
        this.winner = this.player2.name;
        this.player2.win();
      }
      return `${this.winner} wins!`;
    } else if (this.gameType === "alt-mode") {
      if (this.altConditions[this.player1.fighter].includes(this.player2.fighter)) {
        this.winner = this.player1.name;
        this.player1.win();
      } else if (this.altConditions[this.player2.fighter].includes(this.player1.fighter)) {
        this.winner = this.player2.name;
        this.player2.win();
      }
      return `${this.winner} wins!`;
    }
  }
  resetBoard() {
    this.player1.fighter = "";
    this.player2.fighter = "";
  }
}


// Use in Game class?
// var classicModeKeys = Object.keys(this.classicConditions);
// var altModeKeys = Object.keys(this.altConditions);

// A Game should include:
  // Two Player instances
    // player 1 and player 2 passed in from main
  // A way to keep track of the data for the game board
    // fighters & type passed in every game?
    // fighters registered in player class and then
    // re-sensed in game class?
  // A way to keep track of the selected game type
    // instantiate Game when mode is clicked - pass in value from clicked
    // main/DOM will draw background from game type
  // A way to check the Game’s board data for win conditions
    // conditionals
  // A way to detect when a game is a draw (no one has won)
    // player's fighter properties match
  // A way to reset the Game’s board to begin a new game


// DRAW - all modes
// if (player1.fighter === player2.fighter) {
  // DRAW
// }

// CLASSIC MODE
// if (player1.fighter === "rock-character") {
  // if (player2.fighter === "paper-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "scissors-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "paper-character") {
  // if (player2.fighter === "scissors-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "rock-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "scissors-character") {
//   if (player2.fighter === "rock-character") {
//     player2.win();
//     player2.saveWinsToStorage();
//   } else if (player2.fighter === "paper-character") {
//     player1.win();
//     player1.saveWinsToStorage();
//   }
// }

// ALT MODE
// if (player1.fighter === "spongebob-character") {
  // if (player2.fighter === "patrick-character" || player2.fighter === "sandy-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "squidward-character" || player2.fighter === "krabs-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "patrick-character") {
  // if (player2.fighter === "squidward-character" || player2.fighter === "sandy-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "spongebob-character" || player2.fighter === "krabs-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "squidward-character") {
  // if (player2.fighter === "spongebob-character" || player2.fighter === "krabs-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "patrick-character" || player2.fighter === "sandy-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "sandy-character") {
  // if (player2.fighter === "squidward-character" || player2.fighter === "krabs-character") {
  //   player2.win();
  //   player2.saveWinsToStorage();
  // } else if (player2.fighter === "spongebob-character" || player2.fighter === "patrick-character") {
  //   player1.win();
  //   player1.saveWinsToStorage();
  // }
// } else if (player1.fighter === "krabs-character") {
//   if (player2.fighter === "spongebob-character" || player2.fighter === "patrick-character") {
//     player2.win();
//     player2.saveWinsToStorage();
//   } else if (player2.fighter === "squidward-character" || player2.fighter === "sandy-character") {
//     player1.win();
//     player1.saveWinsToStorage();
//   }
// }

// 2 & 4 > 1 > 3 & 5
// 3 & 4 > 2 > 1 & 5
// 1 & 5 > 3 > 2 & 4
// 3 & 5 > 4 > 1 & 2
// 1 & 2 > 5 > 3 & 4
