// var inspired by the pseudocode from Professor Phil
console.log("boom");
var neighborhoodOptions = [
  "streeterville",
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

for (var i = 0; i < computerPickWord.length; i++) {
  boardGame[i] = "_";
}

var userInput = "";

function resetGame() {

  var neighborhoodOptions = [
    "streeterville",
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

  computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);
  console.log(computerRandIndex);

  computerPickWord = neighborhoodOptions[computerRandIndex];
  console.log(computerPickWord);

  numberofGuessCount = 9;

  wrongGuessLetter = "";

  rightGuessLetter = "";

  boardGame = [];
  for (var i = 0; i < computerPickWord; i++) {
    boardGame[i] = "_";
  }

  userInput = "";


}



document.onkeyup = function (event) {

  userInput = event.key.toLowerCase();


  var displayBoardDiv = document.getElementById("guesses");
  var guessCountDiv = document.getElementById("guessesLeft");
  var outputWrongDiv = document.getElementById("lettersGuessed");
  var winsText = document.getElementById("wins");
  var lossesText = document.getElementById("losses");

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

    winsText.textContent = "wins: " + wins;

    resetGame();
  }

  else {
    numberofGuessCount = numberofGuessCount - 1;
    guessCountDiv.textContent = numberofGuessCount;
    wrongGuessLetter = wrongGuessLetter + userInput + ",";
    outputWrongDiv.textContent = wrongGuessLetter;
    console.log(wrongGuessLetter);
  }

  if (numberofGuessCount === 0) {
    losses++;

    lossesText.textContent = "losses: " + losses;
    resetGame();
  }

}
