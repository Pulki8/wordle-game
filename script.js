const letters = document.querySelectorAll('.letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;

async function init () {
    const currentGuess = '';

    function addLetter (letter) {
        if (currentGuess.length < ANSWER_LENGTH) {

        }
    }

    document.addEventListener('keydown', function handleKeyPress (event) {
        const action = event.key;

        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase())
        } else {
            // do nothing
        }
    });
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

init();
