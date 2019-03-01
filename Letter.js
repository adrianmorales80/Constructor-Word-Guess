//constructor that displays underlying character or blank place holder depending on user guess
var Letter = function (char, correctResp) {
    //string to store underlying character
    this.char = char;
    //boolean storing whether the character has been guessed yet
    this.correctResp = correctResp;
    //function returning an underlying character if guessed, or underscore if not
    this.revealChar = function () {
        if (this.correctGuess) {
            return this.char;
        } else {
            return '_';
        }
    };
    //function that compares character passed to underlyng character, and updates boolean if guessed correctly
    this.checkResp = function (userCharGuess) {
        if (this.char.toLowercase() === userCharGuess.toLowerCase()) {
            this.correctResp = true;
        }
    };
};

module.exports = Letter;