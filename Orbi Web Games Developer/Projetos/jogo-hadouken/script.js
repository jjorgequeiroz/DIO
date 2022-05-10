const seuLutador = document.querySelector('.ryu');
const playArea = document.querySelector('#main-play-area');
const objetosMadeiraImg = ['img/barril.png', 'img/cadeira.png', 'img/caixote.png'];
const instructionsText = document.querySelector('.instrucoes');
const startButton = document.querySelector('.start-button');
let objetoMadeiraInterval;

//movimento de Ryu e hadouken
function player(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault();
        jogarHadouken();
    }
}

//Movimentar Ryu para cima
function moveUp() {
    let topPosition = getComputedStyle(seuLutador).getPropertyValue('top');
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        seuLutador.style.top = `${position}px`;
    }
}

//Movimentar Ryu para baixo
function moveDown() {
    let topPosition = getComputedStyle(seuLutador).getPropertyValue('top');
    if(topPosition === "450px"){
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        seuLutador.style.top = `${position}px`;
    }
}

//funcionalidade do hadouken
function jogarHadouken() {
    let hadouken = createHadoukenElement();
    playArea.appendChild(hadouken);
    moveHadouken(hadouken);
}

//Função que cria o raio Hadouken
function createHadoukenElement() {
    let xPosition = parseInt(window.getComputedStyle(seuLutador).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(seuLutador).getPropertyValue('top'));
    let newHadouken = document.createElement('img');
    newHadouken.src = 'img/hadouken.png';
    newHadouken.classList.add('hadouken');
    newHadouken.style.left = `${xPosition}px`;
    newHadouken.style.top = `${yPosition - 50}px`;
    return newHadouken;
}

function moveHadouken(hadouken) {
    let hadoukenInterval = setInterval(() => {
        let xPosition = parseInt(hadouken.style.left);
        let objetosMadeira = document.querySelectorAll('.objeto-madeira');

        objetosMadeira.forEach((objetoMadeira) => { 
            if(colisaoHadouken(hadouken, objetoMadeira)) {
                objetoMadeira.src = 'img/explosion.png';
                objetoMadeira.classList.remove('objeto-madeira');
                objetoMadeira.classList.add('objeto-quebrado');
            }
        })

        if(xPosition === 340) {
            hadouken.remove();
        } else {
            hadouken.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}

//Função que cria os objetos de madeira aleatórios
function createObjetosMadeira() {
    let newObjetoMadeira = document.createElement('img');
    let objetoMadeiraSprite = objetosMadeiraImg[Math.floor(Math.random() * objetosMadeiraImg.length)]; 
    newObjetoMadeira.src = objetoMadeiraSprite;
    newObjetoMadeira.classList.add('objeto-madeira');
    newObjetoMadeira.classList.add('objeto-transition');
    newObjetoMadeira.style.left = '370px';
    newObjetoMadeira.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
    playArea.appendChild(newObjetoMadeira);
    moveObjetoMadeira(newObjetoMadeira);
}

//Função que cria o movimento dos objetos de madeira ao longo da tela
function moveObjetoMadeira(objetoMadeira) {
    let moveObjetoMadeiraInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(objetoMadeira).getPropertyValue('left'));
        if(xPosition <= 50) {
            if(Array.from(objetoMadeira.classList).includes('objeto-quebrado')) {
                objetoMadeira.remove();
            } else {
                gameOver();
            }
        } else {
            objetoMadeira.style.left = `${xPosition - 4}px`;
        }
    }, 30);
}

function colisaoHadouken(hadouken, objetoMadeira) {
    let hadoukenTop = parseInt(hadouken.style.top);
    let hadoukenLeft = parseInt(hadouken.style.left);
    let hadoukenBottom = hadoukenTop - 15;
    let objetoMadeiraTop = parseInt(objetoMadeira.style.top);
    let objetoMadeiraLeft = parseInt(objetoMadeira.style.left);
    let objetoMadeiraBottom = objetoMadeiraTop - 30;
    if(hadoukenLeft != 340 && hadoukenLeft + 40 >= objetoMadeiraLeft) {
        if(hadoukenTop <= objetoMadeiraTop && hadoukenTop >= objetoMadeiraBottom) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


startButton.addEventListener('click', (event) => {
    playGame();
})

function playGame() {
    startButton.style.display = 'none';
    instructionsText.style.display = 'none';
    window.addEventListener('keydown', player);
    objetoMadeiraInterval = setInterval(() => {
        createObjetosMadeira();
    }, 2000);
}

function gameOver() {
    window.removeEventListener('keydown', player);
    clearInterval(objetoMadeiraInterval);
    let objetosMadeira = document.querySelectorAll('.objeto-madeira');
    objetosMadeira.forEach((objetoMadeira) => objetoMadeira.remove());
    let hadoukens = document.querySelectorAll('.hadouken');
    hadoukens.forEach((hadouken) => hadouken.remove());
    setTimeout(() => {
        alert('Fim de Jogo!');
        seuLutador.style.top = "250px";
        startButton.style.display = "block";
        instructionsText.style.display = "block";
    });
}