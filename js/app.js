const gameOverlay = document.getElementById('overlay');
const gameOverHeader = document.getElementById('game-over-message');
const resetBtn = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');
const lifes = document.querySelectorAll('.tries');
let game = null;
let phrase = null;

// Disables the button and adds the correct class after the key is tested.
function changeKeyState(state, letterClicked) {
    keys.forEach( key => { 
        if( key.innerHTML === letterClicked) {
            key.classList.add(state);
            key.disabled = true;
        }
    });
}

// Listens for a click
document.addEventListener('click', (e) => {
    const clickTarget = e.target;
    
    if (clickTarget.id === 'btn__reset') { // startGame / RestartGame
        game = new Game();
        game.startGame(); // Starts a new game
        keys.forEach( key => { // Loops though the keys and removes the 'wrong' and 'chosen' class on reset.
            key.className = 'key';
            key.disabled = false;
        });
        lifes.forEach( heart => heart.firstElementChild.src = 'images/liveHeart.png'); // Loops though the hearst and changes to the live hearts on reset.
    } else if (clickTarget.classList.contains('key')) { // Screenkeyboard
        game.handleInteraction(clickTarget.innerHTML);
    }
});

// Listens for a keyup
document.addEventListener('keyup', (e) => {
    if (gameOverlay.style.display === 'none') { // Checks that the overlay is removed before calling the game.handleInteraction() function.
        keys.forEach( key =>  {
            if (key.innerHTML === e.key && key.disabled == false) { // Check that keypress is a letter and the letter is not tested clicked before calling the game.handleInteraction() function.
                game.handleInteraction(e.key);
            }
        })    
    }
});







