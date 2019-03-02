var inquirer = require('inquirer');
var Word = require('./Word');

var currentWord;
//array of words to guess
var wordsArr = [
    "The God Father",
    "The Shawshank Redemption",
    "Citizen Kane",
    "Star Wars",
    "The Lord of the Rings",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "The Good the Bad and the Ugly",
    "Pulp Fiction",
    "Fight Club",
    "Psycho",
    "Metropolis",
    "The Matrix",
    "Casablanca",
    "The Wizard of Oz",
    "Raiders of the Lost Ark",
    "Terminator",
    "Seven Samurai",
    "Vertigo",
    "Forrest Gump",
];

var guessCount = 2;

var askQuestion = function () {
    if (guessCount > 0) {
        //var rand = Math.floor(Math.random() * 22);
        currentWord = new Word(wordsArr[7]);
        console.log(currentWord.letterJoin());
        inquirer.prompt([
            {
                type: "input",
                name: 'question',
                message: 'Guess the movie title!'
            }
        ])
        .then(ans => {
            console.log(ans.question);
            console.log(currentWord);
            console.log(currentWord.wordLetters.length);
            //console.log(currentWord.wordLetters[15].char);
           // console.log(currentWord.callCheckResp(ans.question));
            //call reveal character on letter, save to var, and call it to next letter 
            //guessCount--;
            //console.log(guessCount);
            //askQuestion();

        });

    } else {
        console.log("Game Over!");
    }
};

askQuestion();

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