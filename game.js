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
    } else {
      if (this[this.gameType][this.player1.fighter].includes(this.player2.fighter)) {
        this.winner = this.player1.name;
        this.player1.win();
      } else if (this[this.gameType][this.player2.fighter].includes(this.player1.fighter)) {
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
