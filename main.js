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
var classicMode = document.querySelector(".classic-mode");
var altMode = document.querySelector(".alt-mode");
var fighters = document.querySelector(".fighters");

// EVENT LISTENERS

// UTILITY FUNCTIONS
function show(element) {
  element.classList.add(hidden);
}

function hide(element) {
  element.classList.remove(hidden);
}
