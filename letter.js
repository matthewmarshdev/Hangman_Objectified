const guess = process.argv[2]

//I need to write an if statment that takes in the argv. if its 1 character, pass it to Letter. 

var Letter = function (letter) {
    this.isTrue = false;
    this.char = letter;
    //function switchToTrue, this function changed letter from invisible to visible (isTrue = false needs to become true to show letter in display)

}


module.exports = Letter;