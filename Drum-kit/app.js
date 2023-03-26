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
let kk= document.querySelectorAll(".key");
kk.forEach((e) => {
    e.addEventListener("transitionend", remove);
});

function remove(k) {
    if ((k.propertyName = "transform")) {
        this.classList.remove("playing");
    }
    return;
}