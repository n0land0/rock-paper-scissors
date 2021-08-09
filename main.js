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

var modes = document.querySelector(".modes");
var selectMode = document.querySelectorAll(".select-mode");
var classicMode = document.querySelector(".classic-mode");
var altMode = document.querySelector(".alt-mode");

var fighters = document.querySelector(".fighters");
var fightersClassic = document.querySelector(".fighters-classic");
var fightersAlt = document.querySelector(".fighters-alt");

// EVENT LISTENERS
buttonChangeGame.addEventListener("click", showModeSelect);
classicMode.addEventListener("click", showClassicCharacters);
altMode.addEventListener("click", showAltCharacters);

fightersClassic.addEventListener("click", logCharacter);
fightersAlt.addEventListener("click", logCharacter);
  // click fighter >
  // assign fighter to Player >
  // runGame on Game instance

// Global variables
var holdView;

// FUNCTIONS

  // new Game starts

  // new Players defaulted on load

  // character selection
function logCharacter() {
  if (event.target.classList.contains("character")) {
    console.log(event.target.classList[1]);
    toggleGameBoard();
    holdView = setInterval(toggleGameBoard, 1000);
  }
}

  // view switching
function showModeSelect() {
  show(modes);
  hide(fighters);
  hide(buttonChangeGame);
}

function showClassicCharacters() {
  show(fightersClassic);
  if (!fightersAlt.classList.contains("hidden")) {
    hide(fightersAlt);
  }
  showCharacterSelect();
}

function showAltCharacters() {
  show(fightersAlt);
  if (!fightersClassic.classList.contains("hidden")) {
    hide(fightersClassic);
  }
  showCharacterSelect();
}

function showCharacterSelect() {
  hide(modes);
  show(fighters);
  show(buttonChangeGame);
}

function toggleGameBoard() {
  toggle(gameSelect);
  toggle(gameBoard);
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
