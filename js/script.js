const mario  = document.querySelector('.mario');
const pipe   = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
var score    = 0;

const jump = () => {
    mario.classList.add('jump'); 

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    // Game Over
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;


        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        $('.board').show();

        $('#action-score-final').text('Score: ' + score);

        clearInterval(loop);
    }

    // Score
    $('#action-score').text(score++);
}
, 10);
document.addEventListener('keypress', jump)
document.addEventListener('click', jump)
document.addEventListener('touchstart', jump)