window.addEventListener('keydown', (e) => {
    const audio=document.querySelector(`audio[data-key="${e.key}"]`);
    const key=document.querySelector(`.key[data-key="${e.key}"]`);
    if(audio) {
        audio.currentTime=0;
        audio.play();
        key.classList.add('playing');
        setTimeout(()=>{

        });
    }
});