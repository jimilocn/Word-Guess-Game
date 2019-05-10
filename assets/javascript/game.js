// var inspired by the pseudocode from Professor Phil
console.log("boom");
var neighborhoodOptions = [
  "Streeterville",
  "Wrigleyville",
  "Andersonville",
  "Edgewater",
  "Chinatown",
  "Englewood",
  "Pilson",
  "Bucktown",
  "Bronzeville",
  "Boystown",
  "Bucktown",
  "Greektown",
  "Ravenswood",
];

var computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);

var computerPickWord = neighborhoodOptions[computerRandIndex];

var numberofGuessCount = 9

var wins = 0;

var losses = 0;

var wrongGuessLetter = "";

var rightGuessLetter = "";

var boardGame = []; 
for (var i = 0; i < computerPickWord; i++) {
  boardGame[i] = "_";
}
var userInput = "";

function resetGame() {
  var neighborhoodOptions = [
    "Streeterville",
    "Wrigleyville",
    "Andersonville",
    "Edgewater",
    "Chinatown",
    "Englewood",
    "Pilson",
    "Bucktown",
    "Bronzeville",
    "Boystown",
    "Bucktown",
    "Greektown",
    "Ravenswood",
  ];

  var computerRandIndex = [Math.floor(Math.random() * neighborhoodOptions.length)];

  var computerPickWord = neighborhoodOptions[computerRandIndex];

  var numberofGuessCount = 9

  var wins = 0;

  var losses = 0;

  var wrongGuessLetter = "";

  var rightGuessLetter = "";

  var boardGame = [];

  for (var i = 0; i < neighborhoodOptions; i++) {
    boardGame[i] = "_";
  }

  var userInput = "";
}



document.onkeyup = function (event) {

  userInput = event.key.toLowerCase();


  var displayBoardDiv = document.getElementById("guesses");
  displayBoardDiv.textContent = boardGame.join("");



  if (computerPickWord.indexOf(userInput) > -1) {

    boardGame[computerPickWord.indexOf(userInput)] = userInput;
    displayBoard.textContent = boardGame.join("");

    rightGuessLetter = rightGuessLetter + userInput;
  }
  if (computerPickWord === rightGuessLetter) {

    wins++;
    resetGame();
  }
  else {
    numberofGuessCount = numberofGuessCount - 1;
    wrongGuessLetter = wrongGuessLetter + userInput + ",";
    var outputWrongDiv = document.getElementById("lettersGuessed");
    outputWrongDiv.textContext = wrongGuessLetter;
  }

    if (numberofGuessCount === 0) {
      loss++;
      resetGame();
    }

  }
