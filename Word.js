var Letter = require('./Letter');

//constructor that depends on letter constructor and represents word that the user is attempting to guess
var Word = function (currentWord) {
    this.currentWord = currentWord;
    //an array of new letter objects representing the underlying word
    this.wordLetters = [];
    this.addWord = function () {
        this.wordLetters.push(new Letter (char));
    };
    //function returning string of the underlying word and concatenate those together
    this.letterJoin = function () {
        for (var i = 0; i < this.wordLetters.length; i++) {
        return `${this.wordLetters[i]} ${this.wordLetters[i + 1]}`;
        }
    };
    //function that takes a character and calls the guess function on each letter object
    this.callCheckResp = function (userCharGuess) {
        for (var i = 0; i < this.wordLetters.length; i++) {
            this.wordLetters[i].checkResp(userCharGuess);
        }
    };
};

module.exports = Word;

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