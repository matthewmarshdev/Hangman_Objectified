var Letter = require("./letter.js"); 

var Word = function (currWord) {
    this.letters = currWord.split("").map(letter => new Letter(letter));

    this.logLetter = () => {
        console.log(this.letters[0]);
    }

}

module.exports = Word;