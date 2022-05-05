var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado'); 

mudarJogador('X');//inicia o jogo selecionando "X" para o elemento "Jogador"

//Função para resposta ao click do quadrado
function selecionaQuadrado (id) {
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
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;


}