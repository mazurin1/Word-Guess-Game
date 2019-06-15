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

//target words to guess element

var wordToGuessElem = document.getElementById ('guess');
wordToGuessElem.innerHTML = randomWord.word;

//detect key pressed
document.onkeypress = function(event) {
    var letterGuessed = event.key;

    var lettersGuessedElem = document.getElementById ('lettersGuessed');
    lettersGuessedElem.innerHTML = letterGuessed;
}