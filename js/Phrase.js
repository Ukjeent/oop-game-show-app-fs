class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const div = document.createElement('div');
        div.id = 'phrase';
        div.classList.add('section');

        const ul = document.createElement('ul');
        div.appendChild(ul);
        
        this.phrase.forEach( element => {
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
}

// Array of phrases
const phrases = [
    'test phrase sSSsl',
];
turns the phrase into an array of lowercase letters
const phraseArr = Array.from(phrases[0].toLowerCase())

const newPhrase = new Phrase(phraseArr);
newPhrase.addPhraseToDisplay();
console.log(newPhrase);
