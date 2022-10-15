class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); // The active phrase from Game.activePhrase converted to lower case.
    }

    addPhraseToDisplay() { // adds letter placeholders to the display when the game starts
        const ul = document.getElementById('phrase').firstElementChild;
        const arrayOfLetters = Array.from(this.phrase); // Takes the phrase thats stored in this.phrase and turns it into an array of letters
        arrayOfLetters.forEach( element => { // Lopps through the array of letter and ads the space class to spaces and letter class to letters
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

    checkLetter(letterClicked) {
        if (this.phrase.includes(letterClicked)) {
            return true;
        } else {
            return false
        }
    }

    showMatchedLetter(letterClicked) {
        const letterLi = document.querySelectorAll('.letter');
        letterLi.forEach( letter => {
            if (letter.innerHTML === letterClicked) {
                letter.classList.add('show');
                letter.classList.remove('hide');
            }
        });
    }

}