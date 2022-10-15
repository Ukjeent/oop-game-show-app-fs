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


    // checkLetter() { // checks to see if the letter selected by the player matches a letter in the phrase.
    //     console.log('sss');
    // }

    // showMatchedLetter() {
    //     console.log('sss'); 
    //     // Reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    // }



//turns the phrase into an array of lowercase letters

// const newPhrase = new Phrase(phraseArr);
// newPhrase.addPhraseToDisplay();
// console.log(newPhrase);


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


    

 
// randomPhrase = randomPhrase.toLowerCase();
// const charactersInPhrase = randomPhrase.split(''); // Splits the phrase into an array of characters.


// const phraseArr = Array.from(newGame.activePhrase)



        // let lettersFound = false; 
        // const letterLi = document.querySelectorAll('.letter');
        // letterLi.forEach( letter => {
        //     if (letter.innerHTML === letterClicked) {
        //         letter.classList.add('show');
        //         letter.classList.remove('hide');
        //         lettersFound = true;
        //     }
        // });
        // return lettersFound; // Returned as false if a matching letter is not found and changed to true if a letter matches the letterClicked. 