var Letter = require("./letter.js"); 

var Word = function (currWord) {
    this.letters = currWord.split("").map(letter => new Letter(letter));

    this.logLetter = () => {
        console.log(this.letters[0]);
    }

    this.renderWord = function(){
        //going to take this.letters and do something with it
        for (i=0; i < letters.length; i++){
            if (letters[i].isTrue === true){
                //print letters with a join function (add all letters to a string)
            }
        }
    }
    this.checkLetter = function(character) {
        //create a var guessTrue (bool) this tells us if a letter in our word changed (default to false, assume they didnt guess a letter)
        //check to see if letter is in word with FOR loop (just like line 12) every letter in array
        //then IF the character matches the letter guessed. IF character matches, we are also going to set Bool value to true
            //go into letter object and change letter to true.
        return guessTrue;
    }

}

module.exports = Word;

