document.addEventListener('DOMContentLoaded', function() {
    var stButton = document.getElementById('stbutton');
    var slButton = document.getElementById('slbutton');
    var A = document.getElementById('A');
    var B = document.getElementById('B');
    var upButton = document.querySelector('.up');
    var downButton = document.querySelector('.down');
    var leftButton = document.querySelector('.left');
    var rightButton = document.querySelector('.right');
    var screenElement = document.querySelector('.screen');
    var diodo = document.getElementById('diodo');
    var audio = new Audio('/audio/song.mp3');

    var powerOn = false;

    stButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'none';
            diodo.style.backgroundColor = 'transparent';
            audio.pause(); // Pausa la canción cuando se apaga
        } else {
            screenElement.style.backgroundImage = 'url(/img/img1.jpg)';
            screenElement.style.backgroundSize = 'cover';
            diodo.style.backgroundColor = 'yellow';
            audio.play(); // Reproduce la canción cuando se enciende
        }
        powerOn = !powerOn; // Cambiamos el estado del interruptor
    });

    slButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img1.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    A.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img2.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    B.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img3.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    upButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img4.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    downButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img5.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    leftButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img6.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });

    rightButton.addEventListener('click', function() {
        if (powerOn) {
            screenElement.style.backgroundImage = 'url(/img/img7.jpg)';
            screenElement.style.backgroundSize = 'cover';
        }
    });
});




