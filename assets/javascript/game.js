// all var inspired by the pseudocode from Professor Phil

// an array with the list of words (chicago neighborhoods) that will be used within the game
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




// var definition set to an index number for the computer generated function using the math.floor (which rounds the number to the lowers whole number) and math random (which generates a random number between 0 and 1) and multiply to the length of the neighborhood array. this will generate a number between 0 and the highest index# within the array, causing a random selection of a neighborhood within the array.
var computerRandIndex = Math.floor(Math.random() * neighborhoodOptions.length);


// this var will define that the word that the computer picks for the game will be using the randomly generataed index, and with that index number, it will pull a word from the neighborhood array
var computerPickWord = neighborhoodOptions[computerRandIndex];


// setes the number of guesses for the beginning of the game to 10
var numberofGuessCount = 10;

// this var definition sets the number of wins at the beginning of the game to 0
var wins = 0;


// this var definition sets the number of losses at the beginning of the game to 0
var losses = 0;

// memory storage for the wrong letters guessed within the game
var wrongGuessLetter = "";

// memory storage for the correct letters guessed within the game
var rightGuessLetter = "";

// an array for the game board for storage
var boardGame = [];

// this loop will put an underscore into the array for the space of a letter within the randomly selected word in the neighborhood array  
for (var i = 0; i < computerPickWord.length; i++) {
  boardGame[i] = "_";
}

// this is memory for the upcoming onkeyup function
var userInput = "";


// all functions used to reset the game after a win or loss. this will keep the number of wins and losses displayed at the bottom of the screen however.
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

  computerPickWord = neighborhoodOptions[computerRandIndex];

  numberofGuessCount = 10;

  guessCountDiv.textContent = numberofGuessCount;

  wrongGuessLetter = "";

  boardGame = [];
  for (var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";
  }

  userInput = "";

  outputWrongDiv.textContent = "";
}

// creating the connection between the JS and the empty div within the HTML named "guesses" to play the correct letters guessed that matches the computer generated word
var displayBoardDiv = document.getElementById("guesses");

// connection to the HTML that will allow the display of numbers of guesses left before the game is over
var guessCountDiv = document.getElementById("guessesLeft");

// will connect to the HTML to allow the display of wrong letters guessed within the game
var outputWrongDiv = document.getElementById("lettersGuessed");

// will allow the display of the number of wins
var winsText = document.getElementById("wins");

// will connect to empty div in HTML to post the number of losses
var lossesText = document.getElementById("losses");

// will put the underscores that match the number of letters with the computerPickWOrd in the HTML
displayBoardDiv.textContent = boardGame.join("");

// will display the initial number of guesses as soon as the game is started
guessCountDiv.textContent = numberofGuessCount;


// functions of the game
function playGame() {
// loop that allows the check of all letters within the computer generated word
  for (var i = 0; i < computerPickWord.length; i++) {

    if (computerPickWord[i] === userInput) {
      boardGame[i] = userInput;
    }

  }

  // will post the letter within the HTML
  displayBoardDiv.textContent = boardGame.join(" ");


  // if there are no longer any underscores within the boardgame array, then we win!
  if (boardGame.indexOf("_") === -1) {
    displayBoardDiv.textContent = boardGame.join(" ");
// adds 1 to the number of wins storage from above
    wins++;
// post the number of wins within the HTML
    winsText.textContent = "wins: " + wins;

  
        // reset the whole game
    resetGame();
    alert("WINNER WINNER CHICKEN DINNER");
  }


  // if we do not win or if there is no match of the key strike from the used (the top condition is false then this happens)
  else {

    // using the indexof function, we are checking to see within the array of the word picked that no report back is -1, which means it was not found
    if (computerPickWord.indexOf(userInput) === -1) {
     

      // this will subtract the number of guesses left for the user to use
      numberofGuessCount = numberofGuessCount - 1;

      // this will display the new number of guesses left for the player
      guessCountDiv.textContent = numberofGuessCount;

      // this will add the wrong letters of guesses together with a comma in between
      wrongGuessLetter = wrongGuessLetter + userInput + ",";
      
      // this will display the wrong letters on the HTML
      outputWrongDiv.textContent = wrongGuessLetter;
     
// if there number count goes down to 0 number of guesses left, the user will lose and the losses count increases by 1
      if (numberofGuessCount === 0) {
        displayBoardDiv.textContent = boardGame.join(" ");
        losses++;
// this will push the text to HTML
        lossesText.textContent = "losses: " + losses;

        alert("at least youre pretty... maybe next time you can win!")
        // reset game
        resetGame();
      }

    }

  }

}


// an event for when the user picks a key
document.onkeyup = function (event) {

  // will define that the userInput will be whatever info is collected from the onkeyup function
  userInput = event.key.toLowerCase().toString();

  // will pull on the keyCodes from the key strike function
  userKeycode = event.keyCode;

  // these parameters will set that the key strick needs to be a uppercase letter or lower case letter. nothing else will fall within these rules, so that every other key (like tab) will work
  if ((userKeycode >= 65 && userKeycode <= 90) || (userKeycode >= 97 && userKeycode <= 122)) {

    // any letter within the array initially that comes up with a match will trigger game
    if (wrongGuessLetter.indexOf(userInput) === -1)
      playGame();

      // focus on can only use letters you haven't pressed before
    else
      alert("You picked that letter already!")


      // or else this alert will display saying that you need to pick only letters
  } else {
    alert("Hey! Letters only!");
  }


} 
