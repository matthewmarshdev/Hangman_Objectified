
const inquirer = require("inquirer");
const Word = require("./word.js"); 


const Game = function(   ){
    this.guesses = "e r t"
    this.misses = "e g h"
    this.currentWord = new Word("cellular");
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
}


let newGame = new Game();
console.log(newGame);
newGame.promptGuess();
newGame.currentWord.logLetter()

//variable hoisting in mdn, lookup 