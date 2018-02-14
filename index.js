
const inquirer = require("inquirer");
const Word = require("./word.js"); 


const Game = function(){
        
    this.wrongGuess = [];
    this.rightGuess = [];
    var self = this
    this.startGame = function (){
        this.guesses = 8;
        this.pickWord();
    }
    this.pickWord = function(){
        //select a word randomly from array (uptop)
        this.currentWord = new Word(//random word from array)
        this.currentword.renderWord();
        this.makeGuess();   
    }
    this.makeGuess = function (){
        //inquirer goes here, to make the guess from terminal
        //calls a function that checks to see if letter is in current word
        //IF correct, send to rightGuess, IF wrong send to wrongGuess
        //IF guessed letter of character is true, call the guessTrue, then use else for false statement. 
    }

   
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
newGame.currentWord.logLetter();

//start a game (create game {}) new Game = Game()
    //this.play() might be a separate function
//will pick a work from a list 
//word will call Letter, it will generate objects (along with True and False)
//render the word in the terminal 