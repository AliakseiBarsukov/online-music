const audio = new Audio();
const tracksCard = document.getElementsByClassName('track')
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller-pause');
const playBtn = document.querySelector('.player__controller-play');
const stopBtn = document.querySelector('.player__controller-stop');


const playMusic = ({currentTarget}) => {
    const trackActive = currentTarget;
    audio.src = trackActive.dataset.track;
    audio.play();
    pauseBtn.classList.remove('player__icon-play');
    player.classList.add('player_active');

    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    };

    trackActive.classList.add('track_active');
}


for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].addEventListener('click', playMusic);
};

pauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        pauseBtn.classList.remove('player__icon-play')
    } else {
        audio.pause();
        pauseBtn.classList.add('player__icon-play')
    }
})


stopBtn.addEventListener('click', () => {
    player.classList.remove('player_active');
    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    };
    if(audio.played) {
        audio.pause();
        pauseBtn.classList.remove('player__icon-play')
    }
})