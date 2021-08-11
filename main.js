// QUERY SELECTORS
  // win columns
var winsIcons = document.querySelectorAll(".wins-icon");
var winsHeaders = document.querySelectorAll(".wins-header");
var winCounts = document.querySelectorAll(".win-count");
var buttonChangeGame = document.querySelector(".button-change-game");

  // center container - mode & fighters
var gameSelect = document.querySelector(".game-select");
var chooseGameText = document.querySelector(".choose-game");
var modes = document.querySelector(".modes");
var classicMode = document.querySelector(".classic-mode");
var altMode = document.querySelector(".alt-mode");
var chooseFighterText = document.querySelector(".choose-fighter");
var fighters = document.querySelector(".fighters");
var fightersClassic = document.querySelector(".fighters-classic");
var fightersAlt = document.querySelector(".fighters-alt");

  // center container - game board
var gameBoard = document.querySelector(".game-board");
var outcomeText = document.querySelector(".outcome");
var fighter1 = document.querySelector(".fighter-1");
var fighter2 = document.querySelector(".fighter-2");

// EVENT LISTENERS
window.addEventListener("load", renderPlayerInfo);

buttonChangeGame.addEventListener("click", showModeSelect);
classicMode.addEventListener("click", showClassicCharacters);
altMode.addEventListener("click", showAltCharacters);

fightersClassic.addEventListener("click", clickCharacter);
fightersAlt.addEventListener("click", clickCharacter);

// GLOBALS
var player1;
var player2;
var game;

// FUNCTIONS
  // rendering
function renderPlayerInfo() {
  player1 = new Player("Human", "assets/human.svg");
  player2 = new Player("Computer", "assets/robot.svg");
  player1.retrieveWinsFromStorage();
  player2.retrieveWinsFromStorage();
  winsIcons[0].src = player1.token;
  winsIcons[1].src = player2.token;
  winsIcons[0].alt = player1.name;
  winsIcons[1].alt = player2.name;
  winsHeaders[0].innerText = player1.name;
  winsHeaders[1].innerText = player2.name;
  winCounts[0].innerText = player1.wins;
  winCounts[1].innerText = player2.wins;
}

function renderFighterImages() {
  fighter1.src = characterImages[player1.fighter];
  fighter1.alt = player1.fighter;
  fighter2.src = characterImages[player2.fighter];
  fighter2.alt = player2.fighter;
}

  // character selection
function clickCharacter() {
  if (event.target.classList.contains("character")) {
    player1.fighter = event.target.classList[1];
    player2.takeTurn(game.gameType);
    renderFighterImages();
    toggleGameBoardView();
    game.runGame();
    if (game.winner) {
      outcomeText.innerText = `${game.winner} wins!`;
    } else {
      outcomeText.innerText = "Draw!";
    }
    winCounts[0].innerText = player1.wins;
    winCounts[1].innerText = player2.wins;
    player1.saveWinsToStorage();
    player2.saveWinsToStorage();
    setTimeout(resetGameBoard, 1500);
  }
}

  // view switching
function showModeSelect() {
  show(chooseGameText);
  show(modes);
  hide(chooseFighterText);
  hide(fighters);
  hide(buttonChangeGame);
}

function showClassicCharacters() {
  show(fightersClassic);
  if (!fightersAlt.classList.contains("hidden")) {
    hide(fightersAlt);
  }
  showCharacterSelect();
  game = new Game(player1, player2, "classicConditions");
}

function showAltCharacters() {
  show(fightersAlt);
  if (!fightersClassic.classList.contains("hidden")) {
    hide(fightersClassic);
  }
  showCharacterSelect();
  game = new Game(player1, player2, "altConditions");
}

function showCharacterSelect() {
  hide(chooseGameText);
  hide(modes);
  show(chooseFighterText);
  show(fighters);
  show(buttonChangeGame);
}

function resetGameBoard() {
  game.resetBoard();
  toggleGameBoardView();
  outcomeText.innerText = "";
}

function toggleGameBoardView() {
  toggle(gameSelect);
  toggle(gameBoard);
  toggle(buttonChangeGame);
}

// UTILITY FUNCTIONS
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function toggle(element) {
  element.classList.toggle("hidden");
}

function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
