// var inspired by the pseudocode from Professor Phil

var neighborhoodOptions = [
  "streeterville",
  "wrigleyville",
  "andersonville",
  "edgewater",
  "chinatown",
  "englewood",
  "pilson",
  "bucktown",
  "bronzeville",
  "boystown",
  "bucktown",
  "greektown",
  "ravenswood"
];

var computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);
console.log(computerRandIndex);
var computerPickWord = neighborhoodOptions[computerRandIndex];
console.log(computerPickWord);
var numberofGuessCount = 10;
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
    "streeterville",
    "wrigleyville",
    "andersonville",
    "edgewater",
    "chinatown",
    "englewood",
    "pilson",
    "bucktown",
    "bronzeville",
    "boystown",
    "bucktown",
    "greektown",
    "ravenswood"
  ];

  computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);
  console.log(computerRandIndex);

  computerPickWord = neighborhoodOptions[computerRandIndex];
  console.log(computerPickWord);

  numberofGuessCount = 10;
  guessCountDiv.textContent = numberofGuessCount;

  wrongGuessLetter = "";



  boardGame = [];
  for (var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";
  }


  userInput = "";
  outputWrongDiv.textContent = "";
  // guessCountDiv.textContent = numberofGuessCount;



}

var displayBoardDiv = document.getElementById("guesses");
var guessCountDiv = document.getElementById("guessesLeft");
var outputWrongDiv = document.getElementById("lettersGuessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

displayBoardDiv.textContent = boardGame.join("");
guessCountDiv.textContent = numberofGuessCount;


function playGame() {

  for (var i = 0; i < computerPickWord.length; i++) {
    if (computerPickWord[i] === userInput) {
      boardGame[i] = userInput;
    }

  }

  displayBoardDiv.textContent = boardGame.join(" ");





  if (boardGame.indexOf("_") === -1) {

    wins++;

    winsText.textContent = "wins: " + wins;
    resetGame();

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

        lossesText.textContent = "losses: " + losses;
        resetGame();
      }

    }

  }

}

document.onkeyup = function (event) {

  userInput = event.key.toLowerCase().toString();

  userKeycode = event.keyCode;

  if ((userKeycode >= 65 && userKeycode <= 90) || (userKeycode >= 97 && userKeycode <= 122)) {
    if (wrongGuessLetter.indexOf(userInput) === -1)
      playGame();
    else
      alert("You picked that letter already!")
  } else {
    alert("Hey! Letters only!");
  }


} 
