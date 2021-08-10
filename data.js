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
// deal with alt tags on empty img elements

// ✅ replace setInterval w/ setTimeout & eliminate global variable
// ✅ remove placeholder from HTML current fighters
// ✅ convert fighter imgs to buttons
// ✅ which classes, query selectors am I not using?
