window.addEventListener("keydown", (event) => {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (audio) {
        audio.play();
        audio.currentTime = 0;
        key.classList.add("playing");
    }
    return;
});
