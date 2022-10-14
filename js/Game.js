
class Game {
    constructor() {
        this.missed = 0; // Tracks the number of missed characters
        this.phrases = [    
        {phrase: 'Stand up and catch that ball'},
        {phrase: 'Somebody help me'},
        {phrase: 'No problem'},
        {phrase: 'Look at that pumpkin'},
        {phrase: 'Come on down'} ]; // An array of five phrases
        this.activePhrase = null; // Stores the active phrase
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length); // Gets a random number. 
        // const randomPhrase = this.phrases.splice(randomNumber, 1); // Takes the random number and gets a phrase from the array.
        return this.phrases[randomNumber];
    }

    // handleInteraction() {
    //     // Disable the selected letter’s onscreen keyboard button.
    //         // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    //     // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    // }

    // removeLife() {  // Removes a life from the scoreboard

    // }

    // checkForWin() { // Checks to see if the player has revealed all of the letters in the active phrase.

    // }

    // gameOver() {
    //     // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
    // }

    // startGame() {
    //     startScreen.style.display = 'none'; // Removes the game overlay
    //     this.activePhrase = this.getRandomPhrase(); // Sets the activePhrase to one of the phrases in the phrases array
    //     console.log(this.activePhrase);
    //     this.phrase.addPhraseToDisplay()
    // }
}






 
// randomPhrase = randomPhrase.toLowerCase();
// const charactersInPhrase = randomPhrase.split(''); // Splits the phrase into an array of characters.


// const phraseArr = Array.from(newGame.activePhrase)