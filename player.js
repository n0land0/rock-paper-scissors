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
    localStorage.setItem(this.name, this.wins);
  }
  retrieveWinsFromStorage() {
    if (localStorage[this.name]) {
      this.wins = localStorage.getItem(this.name);
    }
  }
  takeTurn(gameType) {
    if (this.name === "Computer") {
      if (gameType === "classicConditions") {
        var randomIndex = getRandom(classicCharacters);
        this.fighter = classicCharacters[randomIndex];
      } else if (gameType === "altConditions") {
        var randomIndex = getRandom(altCharacters);
        this.fighter = altCharacters[randomIndex];
      }
    }
  }
}
