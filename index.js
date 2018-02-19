
const inquirer = require("inquirer");
const Word = require("./word.js"); 
var figlet = require("figlet");

figlet("Hangman Game", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

var currWord = [
  "rickroll",
  "nyancat",
  "orly",
  "feelsbadman",
  "joebiden",
  "ricksanchez",
  "trump"
];

var rand = currWord[Math.floor(Math.random() * currWord.length)];

const Game = function(){
        
    this.wrongGuess = [];
    this.rightGuess = [];
    this.startGame = function (){
        this.guesses = 8;
        this.pickWord();
    }
    this.pickWord = function(){
        //select a word randomly from array (uptop)
        this.currentWord = new Word();
        this.currentword.renderWord();
        console.log("in pickWord"); 
        this.makeGuess();   
    }
    this.makeGuess = function (){
        //inquirer goes here, to make the guess from terminal
        this.promptGuess = () => {
            inquirer.prompt([{
                type: "Input",
                name: "letterGuessed",
                message: "Please enter a letter"
            }]).then((answers) => {
                console.log(answers.letterGuessed);
                handleGuess();
            });
        }
        //calls a function that checks to see if letter is in current word
        Word.handleGuess();
        //IF correct, send to rightGuess, IF wrong send to wrongGuess
        if(guessTrue = true){
            letter.push(rightGuess);
            console.log(letter + "is in the word!")
        } else {
            letter.push(wrongGuess);
            console.log(letter + "is definitely not in the word!")
        }
    }
}


let newGame = new Game();
console.log(newGame);
Game();

