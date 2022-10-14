// const startScreen = document.getElementById('overlay');

// let newGame = null;

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();


// Array of phrases
// let ArrayOfPhrases = [
//     'Stand up and catch that ball',
//     'Somebody help me',
//     'No problem',
//     'Look at that pumpkin',
//     'Come on down',
//     'What a big eater he is',
//     'Shape up or ship out',
//     'What a big dog'
// ];



// document.addEventListener('click', (e) => {
//     const clickTarget = e.target;
//     if (clickTarget.id === 'btn__reset') {
//         newGame = new Game(ArrayOfPhrases);
//         newGame.startGame();
//     } else if (clickTarget.classList.contains('key')) {
//         newGame.handleInteraction();
//     }

// });



