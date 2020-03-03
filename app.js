// soundtrack

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "sound/back-sound.mp3");

// BACK GRADIENTE DINÁMICO

var granimInstance = new Granim({
    element: '#back-dinamic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: '../img/back.jpg',
        blendingMode: 'multiply'
    },
    states: {
        "default-state": {
            gradients: [
                ['#0be1f4', '#295b81'],
                ['#414ded', '#0be1f4'],
                ['#0be1f4', '#414ded']
            ],
            transitionSpeed: 1000
        }
    }
});

// CONFETTI ENTREGA PREMIO

var confettiSettings = {
    "target": "confetti-holder",
    "max": "120",
    "size": "3",
    "animate": true,
    "props": ["circle", "square", "triangle", "line"],
    "colors": [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]
    ],
    "clock": "25",
    "rotate": true,
    "width": "1920",
    "height": "1080",
    "start_from_edge": false,
    "respawn": true
};

var confetti = new ConfettiGenerator(confettiSettings);

//VARIABLES DOM

var title = document.getElementById('title'),
    floor = document.getElementById('floor'),
    dragon = document.getElementById('dragon'),
    amul1 = document.getElementById('boxnube1'),
    amul2 = document.getElementById('boxnube2'),
    amul3 = document.getElementById('boxnube3'),
    amul4 = document.getElementById('boxnube4'),
    globoD = document.getElementById('globoDragon'),
    points1 = document.getElementById('rec1'),
    points2 = document.getElementById('rec2'),
    points3 = document.getElementById('rec3'),
    points4 = document.getElementById('rec4'),
    premio = document.getElementById('premio');


//VARIABLES DE PRUEBA, DEFINIR COMO SE RECOGERÁ EL PARÁMETRO DE PREMIO TANGIBLE

var PuntosRecompensa = "100",
    premioText = "PANTALLA 32 pulg";

//RANDOM PREMIOS NO ELEGIDOS

function randomPuntosRecompensa(puntos) {
    return (Math.floor(Math.random() * 4) * parseInt(PuntosRecompensa)) + " pts";
}

//JS AMULETOS

amul1.onclick = function() {
    globoD.classList.add('anim');
    dragon.classList.add('skip');
    title.classList.add('skip');
    floor.classList.add('skip');
    amul2.classList.add('gray');
    amul3.classList.add('gray');
    amul4.classList.add('gray');
    this.classList.add('move');
    setTimeout(function() { confetti.render(); }, 2500)
    if (Math.random() > 0.5) {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
    } else {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);

    }
    premio.innerHTML = premioText;
    audioElement.play();

}

amul2.onclick = function() {
    globoD.classList.add('anim');
    dragon.classList.add('skip');
    title.classList.add('skip');
    floor.classList.add('skip');
    amul1.classList.add('gray');
    amul3.classList.add('gray');
    amul4.classList.add('gray');
    this.classList.add('move');
    setTimeout(function() { confetti.render(); }, 2500)
    if (Math.random() > 0.5) {
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
    } else {
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);

    }
    premio.innerHTML = premioText;
    audioElement.play();
}

amul3.onclick = function() {
    globoD.classList.add('anim');
    dragon.classList.add('skip');
    title.classList.add('skip');
    floor.classList.add('skip');
    amul1.classList.add('gray');
    amul2.classList.add('gray');
    amul4.classList.add('gray');
    this.classList.add('move');
    setTimeout(function() { confetti.render(); }, 2500)
    if (Math.random() > 0.5) {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
    } else {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points4.innerHTML = randomPuntosRecompensa(PuntosRecompensa);

    }
    premio.innerHTML = premioText;
    audioElement.play();
}

amul4.onclick = function() {
    globoD.classList.add('anim');
    dragon.classList.add('skip');
    title.classList.add('skip');
    floor.classList.add('skip');
    amul1.classList.add('gray');
    amul2.classList.add('gray');
    amul3.classList.add('gray');
    this.classList.add('move');
    setTimeout(function() { confetti.render(); }, 2500)
    if (Math.random() > 0.5) {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
    } else {
        points2.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points3.innerHTML = randomPuntosRecompensa(PuntosRecompensa);
        points1.innerHTML = randomPuntosRecompensa(PuntosRecompensa);

    }
    premio.innerHTML = premioText;
    audioElement.play();
}