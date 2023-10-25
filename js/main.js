document.addEventListener('DOMContentLoaded', function() {
    var stButton = document.getElementById('stbutton');
    var slButton = document.getElementById('slbutton');
    var A = document.getElementById('A');
    var B = document.getElementById('B');
    var screenElement = document.querySelector('.screen');

    // Función que se ejecuta cuando se hace clic en el botón st
    stButton.addEventListener('click', function() {
        if (screenElement.style.backgroundImage !== 'none') {
            screenElement.style.backgroundImage = 'none';
        } else {
            screenElement.style.backgroundImage = 'url(/img/img1.jpg)'; 
            screenElement.style.backgroundSize = 'cover'; 
        }
    });

    slButton.addEventListener('click', function() {
        if(screenElement.style.backgroundImage !='none') {
            screenElement.style.backgroundImage = 'url(/img/img1.jpg)'; 
            screenElement.style.backgroundSize = 'cover';
        }
    });

    A.addEventListener('click', function() {
        if (screenElement.style.backgroundImage = 'url(/img/img1.jpg)') {
            screenElement.style.backgroundImage = 'url(/img/img2.jpg)';
            screenElement.style.backgroundSize = 'cover'; 
        }
    })

    
    B.addEventListener('click', function() {
        if (screenElement.style.backgroundImage !== 'none') {
            screenElement.style.backgroundImage = 'url(/img/img3.jpg)';
            screenElement.style.backgroundSize = 'cover'; 
        }
    })

});




