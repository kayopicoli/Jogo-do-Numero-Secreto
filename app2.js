let numeroSecreto = numeroAleatorio();
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 100');

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function numeroAleatorio() {
   return parseInt(Math.random() *100 +1);
}


