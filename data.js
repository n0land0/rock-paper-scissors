var characters = {
  rock: "assets/Rock.svg",
  paper: "assets/Paper.svg",
  scissors: "assets/Scissors.svg",
  spongebob: "assets/SpongeBob_SquarePants_character.svg.png",
  patrick: "assets/Patrick.png",
  squidward: "assets/Squidward_Tentacles.svg.png",
  sandy: "assets/Sandy_Cheeks.svg.png",
  krabs: "assets/Mr._Krabs.svg.png"
};

var classicCharacters = [
  "rock", "paper", "scissors"
];

var altCharacters = [
  "spongebob", "patrick", "squidward", "sandy", "krabs"
];


// REFACTOR GOALS
// write game.runGame to be one conditional
  // requires gameType values to match names of condition properties

// ✅ replace setInterval w/ setTimeout & eliminate global variable
// ✅ remove placeholder from HTML current fighters
// ✅ convert fighter imgs to buttons
// ✅ which classes, query selectors am I not using?
// ✅ deal with alt tags on empty img elements



// runGame() {
//   if (this.player1.fighter === this.player2.fighter) {
//     this.winner = null;
//     return "Draw!";
//   } else {
//     if (this[this.gameType][this.player1.fighter].includes(this.player2.fighter)) {
//       this.winner = this.player1.name;
//       this.player1.win();
//     } else if (this[this.gameType][this.player2.fighter].includes(this.player1.fighter)) {
//       this.winner = this.player2.name;
//       this.player2.win();
//     }
//     return `${this.winner} wins!`;
//   }
// }
