const pianoKeys = document.querySelectorAll('.KeyWhite, .KeyBlack'),
volumeSlider = document.querySelector('.Volume'),
ShowKeys = document.querySelector('.Special');


let allKeys = [],
audio = new Audio("tunes/a.wav");


const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout( () => {
        clickedKey.classList.remove("active")
    }, 120);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key))
        playTune(e.key);
}

const hideShowKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

ShowKeys.addEventListener("click",hideShowKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);