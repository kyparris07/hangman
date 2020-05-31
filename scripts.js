//console.log("boop");
//console.log("hi smartie pants");
var word;
var blanks = "";

var animal = ["goldfish", "tiger", "whale", "alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"];

var color = ["magenta", "turquoise", "scarlet", "black", "blue", "brown", "gray", "green", "orange", "pink", "purple", "red"];

var fruit = ["apple", "banana", "cherry", "grapefruit", "grapes", "lemon", "lime", "melon", "orange", "peach", "pear", "persimmon", "pineapple", "plum", "strawberry", "tangerine", "watermelon"];

var topic;

var wrongLetters;

var guessesRemaining;
var won;

document.getElementById("hint").style.display = "none";

function chooseWord() {
  resetGame();
  var list = Math.floor(Math.random()*3);
  if (list==0) {
    var itemC = Math.floor(Math.random()*color.length);
    word=color[itemC];
    topic = "color";
  } else if (list==1) {
    var itemA = Math.floor(Math.random()*animal.length);
    word=animal[itemA];
    topic = "animal";
  } else {
    var itemF = Math.floor(Math.random()*fruit.length);
    word=fruit[itemF];
    topic="fruit";
  }
  console.log(word);
  var i;
  var len = word.length;
  for (i=0; i<len; i++) {
    blanks += "*";
  }
  //console.log(blanks);
  document.getElementById("secretWord").innerHTML = blanks;
  document.getElementById("topic").innerHTML = topic;
  document.getElementById("hint").style.display = "block";
  document.getElementById("start").style.display = "none";
  document.getElementById("directions").style.display = "block";
}

function resetGame() {
  won = false;
  guessesRemaining = 6;
  document.getElementById("guessesLeft").innerHTML = "guesses remaining: " + guessesRemaining;
  
  wrongLetters = "";
  blanks="";
  document.getElementById("game").style.display = "block";
  document.getElementById("keyboard").style.display = "block";
  document.getElementById("lose").style.display = "none";
  document.getElementById("win").style.display = "none";
  document.getElementById("wrongGuess").innerHTML = wrongLetters;

  document.getElementById("head").style.opacity = "0";
  document.getElementById("leftArm").style.opacity = "0";
  document.getElementById("torso").style.opacity = "0";
  document.getElementById("rightArm").style.opacity = "0";
  document.getElementById("leftLeg").style.opacity = "0";
  document.getElementById("rightLeg").style.opacity = "0";
}

function guessLetter(letterId) {
    var letter = document.getElementById(letterId).innerHTML
    //console.log(letter);
    var correctLetter = checkLetter(letter);
    if (correctLetter){
      won = checkWin();
    } else {
      guessesRemaining--;
      document.getElementById("guessesLeft").innerHTML = "guesses remaining: " + guessesRemaining;
      wrongLetters += letter + " ";
      document.getElementById("wrongGuess").innerHTML = wrongLetters;
    }
    //}
    if (won) {
      wonGame();
    } else if (guessesRemaining==5) {
      document.getElementById("head").style.opacity = "1";
    } else if (guessesRemaining==4) {
      document.getElementById("leftArm").style.opacity = "1";
    } else if (guessesRemaining==3) {
      document.getElementById("torso").style.opacity = "1";
    } else if (guessesRemaining==2) {
      document.getElementById("rightArm").style.opacity = "1";
    } else if (guessesRemaining==1) {
      document.getElementById("leftLeg").style.opacity = "1";
    } else if (guessesRemaining==0) {
      gameOver();

    }
  //}
}

function checkLetter(letter) {
  //console.log("running");
  var i;
  var correct = false;
  for (i=0; i<word.length; i++) {
    if (letter == word[i]) {
      //console.log(i);
      blanks = blanks.substring(0,i) + word[i] + blanks.substring(i+1, word.length);
      document.getElementById("secretWord").innerHTML = blanks;
      //console.log(blanks);
      correct = true;
    }
  }
  return correct;
}

function checkWin() {
  for (i=0; i<blanks.length; i++) {
    if (blanks[i] == "*") {
      //console.log("false");
      return false;
    }
  }
  //console.log("true");
  return true;
}

function gameOver() {
  document.getElementById("game").style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("lose").style.display = "block";
  document.getElementById("secretWordLose").innerHTML = word;
}

function wonGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("win").style.display = "block";
  document.getElementById("secretWordWin").innerHTML = word;
}
