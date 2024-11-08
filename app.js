let listaDeNumerosSorteados = [];
let numeroLimit = 10;
let numeroSecreto = numeroAleatorio()
let = tentativas = 1


exibirMensagemInicial();
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10');

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 5');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? ' tentativas' : 'Tentativa'
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p','O numero e maior');
        } else {
            exibirTextoNaTela('p','O numero e menor');
        }
        tentativas ++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimit +1);
    let quantidadeDeElementosnaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosnaLista == numeroLimit){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
        return numeroAleatorio();
    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
        }

}  
 
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}
