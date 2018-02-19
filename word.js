const Letter = require("./letter.js"); 



var Word = function (letters) {
    this.letters = letters.split("").map(letter => new Letter(letter));

    this.logLetter = () => {
        console.log(this.letters[0]);
    };
    this.renderWord = function(){
        for (i=0; i < letters.length; i++){
            if (letters[i].guessed === true){
                //return something
            }
        }
    };
    this.checkLetter = function(letters) {
        var guessed = false; 
        return guessed;
    };
}

console.log(Word.logLetter);


module.exports = Word;

