class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); // this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
    }

    addPhraseToDisplay() { // adds letter placeholders to the display when the game starts
        const ul = document.getElementById('phrase').firstElementChild;
        const arrayOfLetters = Array.from(this.phrase);
        arrayOfLetters.forEach( element => {
            const whiteSpace = /\s/;
            const li = document.createElement('li');
            li.classList.add('hide');
            if (!whiteSpace.test(element)) {
                li.classList.add('letter');
            } else {
                li.classList.add('space');
            }
            li.textContent = element;
            ul.appendChild(li);
        });
    }

    // checkLetter() { // checks to see if the letter selected by the player matches a letter in the phrase.
    //     console.log('sss');
    // }

    // showMatchedLetter() {
    //     console.log('sss'); 
    //     // Reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    // }
}


//turns the phrase into an array of lowercase letters

// const newPhrase = new Phrase(phraseArr);
// newPhrase.addPhraseToDisplay();
// console.log(newPhrase);
