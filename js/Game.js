
class Game {
    constructor() {
        this.missed = 0;                // Tracks the number of missed characters
        this.phrases = [                // An array of phrases
        {phrase: 'Stand up and catch that ball'},
        {phrase: 'Somebody help me'},
        {phrase: 'No problem'},
        {phrase: 'Look at that pumpkin'},
        {phrase: 'Come on down'} ]; 
        this.activePhrase = null;       // Stores the active phrase
    }
    
    // Gets a random number from this.phases and return the phrase.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length); // Gets a random number. 
        return this.phrases[randomNumber];
    }

    // Starts the game
    // Calls the getRandomPhrase function and the addPhraseToDisplay function
    startGame() {
        gameOverlay.style.display = 'none'; // Removes the game overlay
        this.activePhrase = this.getRandomPhrase();
        phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }
    
    // Handles keypresses and clicks on the screenkeyboard
    handleInteraction(key) {
        if (!phrase.checkLetter(key)) {         // Checks if any letters in the phrase matches the clicked letter before adding the correct class and displaying the letter on the site. 
            changeKeyState('wrong', key);
            this.removeLife();
        } else {
            changeKeyState('chosen', key);
            phrase.showMatchedLetter(key);      // Displays the matching letters on the page
            this.checkForWin();
        }
    }

    // Checks for a win and displays the overlay
    checkForWin() { 
        const letters = document.querySelectorAll('.letter');
        const lettersArray = Array.from(letters);                                   // Turns the letter variable into an array.
        if (lettersArray.every( letter => letter.classList.contains('show'))) {     // Returns true if all letters contains the 'show' class
            this.gameOver('win', 'Congratulations!', 'Start over');
        }
    }

    // Removes a life and adds one to the missed counter
    removeLife() {
        const lifes = document.querySelectorAll('.tries');
        lifes[this.missed].firstElementChild.src = 'images/lostHeart.png';      // Removes one life by changing the heart image to a "lost heart"
        if (this.missed === 4) {                                                // Calls the gameover function if the player misses more 5 times. 
            this.gameOver('lose', 'Game Over!', 'Try again');
        } else {
            this.missed++;                                                      // Adds 1 to the missed counter.
        }
    }

    // Opens the overlay and changes the information when the player win or lose"
    gameOver(result, headerText, btnText) { 
        gameOverlay.style.display = '';
        gameOverlay.className = result;
        gameOverHeader.innerHTML = headerText;
        resetBtn.innerHTML = btnText;
    }
}

