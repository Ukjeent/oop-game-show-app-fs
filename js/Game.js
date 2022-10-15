
class Game {
    constructor() {
        this.missed = 0; // Tracks the number of missed characters
        this.phrases = [ // An array of phrases
        {phrase: 'Stand up and catch that ball'},
        {phrase: 'Somebody help me'},
        {phrase: 'No problem'},
        {phrase: 'Look at that pumpkin'},
        {phrase: 'Come on down'} ]; 
        this.activePhrase = null; // Stores the active phrase
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length); // Gets a random number. 
        return this.phrases[randomNumber];
    }

    startGame() {
        gameOverlay.style.display = 'none'; // Removes the game overlay
        this.activePhrase = this.getRandomPhrase();
        phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }

    handleInteraction(clickTarget) {
        const letterClicked = clickTarget.innerHTML; // Stores the letter that the user clicked.
        clickTarget.disabled = true;

        if (!phrase.checkLetter(letterClicked)) { // Checks if any letters in the phrase matches the clicked letter before adding the correct class and displaying the letter on the site. 
            clickTarget.classList.add('wrong');
            this.removeLife();
        } else {
            clickTarget.classList.add('chosen');
            phrase.showMatchedLetter(letterClicked); // Displays the matching letters on the page
        }



    }

    removeLife() {
        const lifes = document.querySelectorAll('.tries');
        lifes[this.missed].firstElementChild.src = 'images/lostHeart.png'; // Removes one lige by changing the heart image to a "lost heart"
        if (this.missed === 4) {
            this.gameOver()
        } else {
            this.missed++; // Adds 1 to the missed counter.
        }

        
    }

    gameOver() {
        gameOverlay.style.display = '';
    }


}

