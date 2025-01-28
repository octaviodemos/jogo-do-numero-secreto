let numeroLimite = 10
let listaNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibeMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

exibeMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa;'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroAleatorio) {
            exibirTextoTela('p', 'O número é menor');
        } else{
            exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
   let gerarNumeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

   if (listaNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
   } else{
    listaNumerosSorteados.push(numeroAleatorio);
    console.log(listaNumerosSorteados)
    return numeroAleatorio;
   }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}