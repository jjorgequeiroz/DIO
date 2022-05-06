var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado'); 
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrado = document.getElementsByClassName('quadrado');

mudarJogador('X');//inicia o jogo selecionando "X" para o elemento "Jogador"

//Função para resposta ao click do quadrado
function selecionaQuadrado (id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;//altera o valor do conteúdo do quadrado para o valor da variável 'jogador'
    quadrado.style.color = '#000';//troca a cor do elemento para preto

    if (jogador === 'X') { //Função de checagem de jogador. Verifica se é 'X'. Caso seja 'O', muda para 'X'
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() { //verificar todas as combinações de vitória  no jogo da velha
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    //checa igualdade da primeira linha horizontal, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado1. 
    if (checaSequencia (quadrado1, quadrado2, quadrado3)) { 
        mudaCorQuadrado (quadrado1, quadrado2, quadrado3); 
        mudarVencedor(quadrado1);
        return;
    }

    //checa igualdade da segunda linha horizontal, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado4.
    if (checaSequencia (quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado (quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    
    //checa igualdade da terceira linha horizontal, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado7.
    if (checaSequencia (quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado (quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    //checa igualdade da primeira coluna, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado1.
    if (checaSequencia (quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado (quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    //checa igualdade da segunda coluna, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado2.
    if (checaSequencia (quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado (quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    //checa igualdade da terceira coluna, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado3.
    if (checaSequencia (quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado (quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    //checa igualdade da diagonal esquerda, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado1.
    if (checaSequencia (quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado (quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    //checa igualdade da diagonal direita, o conteúdo dos três quadrados sendo iguais, muda a cor dos três elementos e escreve no label 'Vencedor' o conteúdo do quadrado3.
    if (checaSequencia (quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado (quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}

function mudarVencedor (quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado (quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0'; 
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia (quadrado1, quadrado2, quadrado3) {
    var eIgual = false;
    
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }
    return eIgual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#e0cb0a';
        quadrado.innerHTML = '-';
        quadrado.style.color = '#e0cb0a';
    }

    mudarJogador('X');
}