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
var selectMode = document.querySelectorAll(".select-mode");
var classicMode = document.querySelector(".classic-mode");
var altMode = document.querySelector(".alt-mode");
var modes = document.querySelector(".modes");
var fighters = document.querySelector(".fighters");

// EVENT LISTENERS
buttonChangeGame.addEventListener("click", showModeSelect);
classicMode.addEventListener("click", showCharacterSelect);

// FUNCTIONS
function showModeSelect() {
  show(modes);
  hide(fighters);
  hide(buttonChangeGame);
}

function showCharacterSelect() {
  hide(modes);
  show(fighters);
  show(buttonChangeGame);
}

// UTILITY FUNCTIONS
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function logTarget() {
  console.log(event.target);
}
