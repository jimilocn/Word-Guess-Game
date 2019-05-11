// var inspired by the pseudocode from Professor Phil
console.log("boom");
var neighborhoodOptions = [
  // "streeterville",
  // "wrigleyville",
  // "andersonville",
  // "edgewater",
  // "chinatown",
  // "englewood",
  "pilson",
  // "bucktown",
  // "bronzeville",
  // "boystown",
  // "bucktown",
  // "greektown",
  // "ravenswood",
];

var computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);
console.log(computerRandIndex);

var computerPickWord = neighborhoodOptions[computerRandIndex];
console.log(computerPickWord);

var numberofGuessCount = 9;

console.log(numberofGuessCount);


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

  console.log("boom");
  var neighborhoodOptions = [
    // "streeterville",
    // "wrigleyville",
    // "andersonville",
    // "edgewater",
    // "chinatown",
    // "englewood",
    "pilson",
    // "bucktown",
    // "bronzeville",
    // "boystown",
    // "bucktown",
    // "greektown",
    // "ravenswood",
  ];

  var computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);
  console.log(computerRandIndex);

  var computerPickWord = neighborhoodOptions[computerRandIndex];
  console.log(computerPickWord);

  var numberofGuessCount = 9;

  var wins = 0;

  var losses = 0;

  var wrongGuessLetter = "";

  var rightGuessLetter = "";

  var boardGame = [];
  for (var i = 0; i < computerPickWord; i++) {
    boardGame[i] = "_";
  }

  var userInput = "";


}



document.onkeyup = function (event) {

  userInput = event.key.toLowerCase();


  var displayBoardDiv = document.getElementById("guesses");

  displayBoardDiv.textContent = boardGame.join("");

  // guessCountText.textContent = numberofGuessCount;  


  if (computerPickWord.indexOf(userInput) > -1) {

    boardGame[computerPickWord.indexOf(userInput)] = userInput;
    displayBoardDiv.textContent = boardGame.join("");

    rightGuessLetter = rightGuessLetter + userInput;
    console.log("boom");
  }

  if (computerPickWord === rightGuessLetter) {

    wins++;
    var winsText = document.getElementById("wins");
    winsText.textContent = "wins: " + wins;

    resetGame();
  }
  else {
    numberofGuessCount = numberofGuessCount - 1;
    var guessCountDiv = document.getElementById("guessesLeft");
    guessCountDiv.textContent = numberofGuessCount;
    wrongGuessLetter = wrongGuessLetter + userInput + ",";
    var outputWrongDiv = document.getElementById("lettersGuessed");
    outputWrongDiv.textContext = wrongGuessLetter;
    console.log("BOOM");
  }

  if (numberofGuessCount === 0) {
    losses++;
    var lossesText = document.getElementById("losses");
    lossesText.textContent = "losses: " + losses;
    resetGame();
  }

}
