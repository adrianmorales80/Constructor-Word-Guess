//constructor that displays underlying character or blank place holder depending on user guess
var Letter = function (char) {
    //string to store underlying character
    this.char = char;
    //boolean storing whether the character has been guessed yet
    this.correctResp = false;
    //function returning an underlying character if guessed, or underscore if not
    this.revealChar.prototype.toString = function () {
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

//letter object
    //constructor that displays underlying character or blank place holder depending on user guess
        //string to store underlying character
        //boolean storing whether the character has been guessed yet
        //function returning an underlying character if guessed, or underscore if not
        //function that compares character passed to underlyng charater, and updates boolean if guessed correctly

//word object
    //constructor that depends on letter constructor and represents word that the user is attempting to guess
    //an array of new letter objects representing the underlying word 
    //function returning string of the underlying word and concatenate those together
    //function that takes character and calls the guess function on the letter object

//index.js contains the logic for the course game and depends on Word.js
    //randomly select word and use the word constructor to store it
    //prompts the user for each guess and keeps track of remaining guesses