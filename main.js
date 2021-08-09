// QUERY SELECTORS
// page title
var titleMain = document.querySelector(".title-main");

// win column
var humanIcon = document.querySelector(".human-icon");
var computerIcon = document.querySelector(".computer-icon");

var winCountHuman = document.querySelector(".win-count-human");
var winCountComputer = document.querySelector(".win-count-computer");
var buttonChangeGame = document.querySelector(".button-change-game");

// page sections
var winsColumn = document.querySelector(".wins-column");
var gameSelect = document.querySelector(".game-select");
var gameBoard = document.querySelector(".game-board");
var winsIcons = document.querySelectorAll(".wins-icon");
var winsHeaders = document.querySelectorAll(".wins-header");
var winCounts = document.querySelectorAll(".win-count");

var chooseGame = document.querySelector(".choose-game");
var chooseFighter = document.querySelector(".choose-fighter");

var modes = document.querySelector(".modes");
var selectMode = document.querySelectorAll(".select-mode");
var classicMode = document.querySelector(".classic-mode");
var altMode = document.querySelector(".alt-mode");

var fighters = document.querySelector(".fighters");
var fightersClassic = document.querySelector(".fighters-classic");
var fightersAlt = document.querySelector(".fighters-alt");

// EVENT LISTENERS
window.addEventListener("load", renderPlayers);

buttonChangeGame.addEventListener("click", showModeSelect);
classicMode.addEventListener("click", showClassicCharacters);
altMode.addEventListener("click", showAltCharacters);

fightersClassic.addEventListener("click", clickCharacter);
fightersAlt.addEventListener("click", clickCharacter);
  // click fighter >
  // assign fighter to Player >
  // runGame on Game instance

// Global variables
var holdView;
var player1;
var player2;
var game;

// FUNCTIONS

  // new Game starts

  // new Players defaulted on load
    // window event listener?
function renderPlayers() {
  player1 = new Player("Human", "assets/human.svg");
  player2 = new Player("Computer", "assets/robot.svg");
  winsIcons[0].src = player1.token;
  winsIcons[1].src = player2.token;
  winsHeaders[0].innerText = player1.name;
  winsHeaders[1].innerText = player2.name;
  winCounts[0].innerText = player1.wins;
  winCounts[1].innerText = player2.wins;
}

game = new Game(player1, player2, "classic-mode");

  // character selection
function clickCharacter() {
  if (event.target.classList.contains("character")) {
    // console.log(event.target.classList[1]);
    toggleGameBoard();
    holdView = setInterval(toggleGameBoard, 1000);
  }
}

  // view switching
function showModeSelect() {
  show(chooseGame);
  show(modes);
  hide(chooseFighter);
  hide(fighters);
  hide(buttonChangeGame);
}

function showClassicCharacters() {
  show(fightersClassic);
  if (!fightersAlt.classList.contains("hidden")) {
    hide(fightersAlt);
  }
  showCharacterSelect();
  game = new Game(player1, player2, "classic-mode");
}

function showAltCharacters() {
  show(fightersAlt);
  if (!fightersClassic.classList.contains("hidden")) {
    hide(fightersClassic);
  }
  showCharacterSelect();
  game = new Game(player1, player2, "alt-mode");
}

function showCharacterSelect() {
  hide(chooseGame);
  hide(modes);
  show(chooseFighter);
  show(fighters);
  show(buttonChangeGame);
}

function toggleGameBoard() {
  toggle(gameSelect);
  toggle(gameBoard);
  toggle(buttonChangeGame);
  clearInterval(holdView);
}

// function hideGameBoard()

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

function logTarget() {
  console.log(event.target);
}

function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
