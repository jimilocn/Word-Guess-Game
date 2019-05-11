// var inspired by the pseudocode from Professor Phil
// things to do:   4. non letter keys do not



var neighborhoodOptions = [
  // "streeterville",
  // "wrigleyville",
  // "andersonville",
  // "edgewater",
  "chinatown"
  // "englewood",
  // "pilson",
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
  neighborhoodOptions = [
    // "streeterville",
    // "wrigleyville",
    // "andersonville",
    // "edgewater",
    "chinatown",
    "englewood",
    "pilson"
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

 

  boardGame = [];
  for ( var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";
  }
 

  userInput = "";
  outputWrongDiv.textContent ="";


}

var displayBoardDiv = document.getElementById("guesses");
displayBoardDiv.textContent = boardGame.join("");

var guessCountDiv = document.getElementById("guessesLeft");
guessCountDiv.textContent = numberofGuessCount;

var outputWrongDiv = document.getElementById("lettersGuessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

document.onkeyup = function (event) {

  userInput = event.key.toLowerCase().toString();






  for (var i = 0; i < computerPickWord.length; i++) {
    if (computerPickWord[i] === userInput) {
      boardGame[i] = userInput;
    }
  }
console.log(boardGame);
  displayBoardDiv.textContent = boardGame.join(" ");





  if (boardGame.indexOf("_") === -1  ) {

    wins++;
    resetGame();
    winsText.textContent = "wins: " + wins;

  
  }



  else {

    if (computerPickWord.indexOf(userInput) === -1) {
      numberofGuessCount = numberofGuessCount - 1;
      guessCountDiv.textContent = numberofGuessCount;
      wrongGuessLetter = wrongGuessLetter + userInput + ",";
      outputWrongDiv.textContent = wrongGuessLetter;
      console.log(wrongGuessLetter);

      if (numberofGuessCount === 0) {
        losses++;
        resetGame();
        lossesText.textContent = "losses: " + losses;
        
      }
  
    }

  }



}
