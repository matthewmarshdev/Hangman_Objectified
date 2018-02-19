
const inquirer = require("inquirer");
const Word = require("./word.js"); 


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
        console.log("in pickWord")
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
        //IF guessed letter of character is true, call the guessTrue, then use else for false statement. 
    }

   

}


let newGame = new Game();
console.log(newGame);
//newGame.promptGuess();
//newGame.currentWord.logLetter();
startGame(newGame);

//start a game (create game {}) new Game = Game()
    //this.play() might be a separate function
//will pick a work from a list 
//word will call Letter, it will generate objects (along with True and False)
//render the word in the terminal 