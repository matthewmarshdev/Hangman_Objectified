var Letter = function (letter) {
    this.guessed = false;
    this.letter = letter;
}


Letter.prototype.display = function () {
    if (this.guessed){
        return " " + this.letter.toUpperCase
    } else {
        return "_"
    }

}

module.exports = Letter;