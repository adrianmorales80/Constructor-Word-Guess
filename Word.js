var Letter = require('./Letter');

//constructor that depends on letter constructor and represents word that the user is attempting to guess
var Word = function (word) {
    //an array of new letter objects representing the underlying word
    this.wordLetters = [];
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === ' ' || word.charAt(i) === "'") {
            this.wordLetters.push(new Letter(word.charAt(i), true));
        } else {
            this.wordLetters.push(new Letter(word.charAt(i), false));
        }
    }
    console.log(this.wordLetters);
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

// var testWord = new Word("yo world");
// testWord.pushToWordLetters();
// console.log(testWord.wordLetters);