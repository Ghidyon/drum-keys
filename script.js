window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`)

    if (!audio) return; // when there is no key matching audio, stop the function
    audio.currentTime = 0; // Rewind audio to the start
    audio.play(); // Play matched audio file
    key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => { key.addEventListener("transitionend", removeClass) })
keys.forEach(key => { key.addEventListener("transitionend", removeClass) })

function removeClass(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}