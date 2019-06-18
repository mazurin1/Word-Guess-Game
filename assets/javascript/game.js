// created array of word objects
var words = [
    {
        word: 'fruitlet',
        definition: 'a small fruit, especially one of those forming an aggregate fruit, as the raspberry.'
    },
    {
        word: 'lulu',
        definition: 'any remarkable or outstanding person or thing.'
    },
    {
        word: 'nebulated',
        definition: 'having dim or indistinct markings, as a bird or other animal.'
    },
    {
        word: 'stymie',
        definition: 'to hinder, block, or thwart.'
    },
    {
        word: 'virtuoso',
        definition: 'a person who excels in musical technique or execution.'
    }
]

//pick random word from the array

var randomWord = words[Math.floor(Math.random() * words.length)];
var wordCharacters = Array.from(randomWord.word);
var str = "_";
var hiddenWord = str.repeat(randomWord.word.length);
var arrayHiddenWord = Array.from(hiddenWord);

//target words to guess element

var wordToGuessElem = document.getElementById('guess');
wordToGuessElem.innerHTML = hiddenWord;

var numberOfAttempts = 12;
// When you press a key, the number of attempts remaining will decrease
var numberOfAttemptsElem = document.getElementById('attempts');
numberOfAttemptsElem.innerHTML = numberOfAttempts;

var numberOfLosses = 0;
// set number of losses to 0
var numberOfLossesElem = document.getElementById('losses');
numberOfLossesElem.innerHTML = numberOfLosses;

var numberOfWins = 0;
// set number of wins to 0
var numberOfWinsElem = document.getElementById('wins');
numberOfWinsElem.innerHTML = numberOfWins;

var lettersGuessedArray = [];
var lettersGuessedElem = document.getElementById('lettersGuessed');

//detect key pressed
document.onkeypress = function (event) {
    var letterGuessed = event.key;
    if (lettersGuessedArray.indexOf(letterGuessed) === -1) {

        
        var letterGuessedCorrectly = false;

        //If key pressed is correct
        for (var i = 0; i < wordCharacters.length; i++) {
            if (letterGuessed === wordCharacters[i]) {
                arrayHiddenWord[i] = letterGuessed;
                letterGuessedCorrectly = true;
            }
        }
        //If letters guessed correctly, the letters will show up
        if (letterGuessedCorrectly) {
            wordToGuessElem.innerHTML = arrayHiddenWord.join('');

            //If all letter show up, you win and a point is added to wins
            if (arrayHiddenWord.indexOf('_') == -1) {
                numberOfWins++;
                numberOfWinsElem.innerHTML = numberOfWins;

                var wordDefinitionElem = document.getElementById('wordDefinition');
                wordDefinitionElem.innerHTML = randomWord.word + " - " + randomWord.definition;

                //reset game
                randomWord = words[Math.floor(Math.random() * words.length)];
                wordCharacters = Array.from(randomWord.word);
                str = "_";
                hiddenWord = str.repeat(randomWord.word.length);
                arrayHiddenWord = Array.from(hiddenWord);
                wordToGuessElem.innerHTML = hiddenWord;
                lettersGuessedArray = [];
            }
        }
        //If key pressed is incorrect
        else {

            // letter guessed show
            lettersGuessedArray.push(letterGuessed);
            lettersGuessedElem = document.getElementById('lettersGuessed');
            lettersGuessedElem.innerHTML = lettersGuessedArray.join(' ');


            
            // When key is pressed, the attempts remaining will decrease
            if (numberOfAttempts > 1) {
                numberOfAttempts--;
                numberOfAttemptsElem.innerHTML = numberOfAttempts;
            }

            // If all attempt are gone, then you lose
            // If you lose it will restart the game 
            else if (numberOfAttempts === 1) {
                numberOfLosses++;
                numberOfLossesElem.innerHTML = numberOfLosses;
                numberOfAttempts = 12;
                numberOfAttemptsElem.innerHTML = numberOfAttempts;

                //reset game
                randomWord = words[Math.floor(Math.random() * words.length)];
                wordCharacters = Array.from(randomWord.word);
                str = "_";
                hiddenWord = str.repeat(randomWord.word.length);
                arrayHiddenWord = Array.from(hiddenWord);
                wordToGuessElem.innerHTML = hiddenWord;
                lettersGuessedArray = []
            }
        }
    }
}