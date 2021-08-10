class Player {
  constructor(name, token, wins = 0) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.fighter = "";
  }
  win() {
    this.wins ++;
  }
  saveWinsToStorage() {
    // var stringy = JSON.stringify(this);
    // localStorage.setItem(this.name, stringy);
    localStorage.setItem(this.name, this.wins);
  }
  retrieveWinsFromStorage() {
    // var fromStorage = localStorage.getItem(this.name);
    // var parsed = JSON.parse(fromStorage);
    // return parsed;

    if (localStorage[this.name]) {
      this.wins = localStorage.getItem(this.name);
    }
  }
  takeTurn() {
    if (this.name === "Computer") {
      if (game.gameType === "classic-mode") {
        var randomIndex = getRandom(classicCharacters);
        this.fighter = classicCharacters[randomIndex];
      } else if (game.gameType === "alt-mode") {
        var randomIndex = getRandom(altCharacters);
        this.fighter = altCharacters[randomIndex];
      }
    }
    // assign clicked character to this.fighter
  }
}

// PSEUDOCODE
// Player 1 is Player instance named "Human"
// Player 2 is Player instance named "Computer"
  // this is defaulted to on page load
// Game consists of each player choosing a character - player 1, then player 2
  // choices must be registered in data
// Winner is determined by conditionals which compare characters
  // "rock beats scissors, etc.
  // if p1 > rock and p2 > scissors,
  // then p1 adds a win;
  // if p1 > rock & p2 > rock,
  // neither player adds a win -
  // register a draw"
// win is immediately saved to storage;
// wins in storage need to be overwritten;
// wins retrieved from storage for DOM wins column
