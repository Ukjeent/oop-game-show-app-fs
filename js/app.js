const gameOverlay = document.getElementById('overlay');
let game = null;
let phrase = null;

document.addEventListener('click', (e) => {
    const clickTarget = e.target;
    
    if (clickTarget.id === 'btn__reset') {
        game = new Game();
        game.startGame();
    } else if (clickTarget.classList.contains('key')) {
        game.handleInteraction(clickTarget);
    }

});    






