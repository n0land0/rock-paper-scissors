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
  }
}
