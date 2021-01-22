window.addEventListener('keydown',playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}

