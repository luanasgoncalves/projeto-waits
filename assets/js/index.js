function calcularValor(idIndice) {
    let valorRandom;
    let mostrarValor;
    let stringFormatada;

    switch (idIndice) {
        case "card-pH":
            valorRandom = Math.random(-1, 1); // gera um valor aletorio
            mostrarValor = 7 + valorRandom; // mostra o valor aleatorio no intervalo de 6 e 8
            break;

        case "card-oxigenio":
            valorRandom = Math.random(-1, 1); // PERGUNTAR PRA KAREN E PRO JOAO COMO PRECEDE AS MATEMATICS
            mostrarValor = 7 + valorRandom; 
            break;

        case "card-turbidez":
            valorRandom = Math.random(-1, 1); 
            mostrarValor = 7 + valorRandom; 
            break;

        case "card-toxicidade":
            valorRandom = Math.random(-1, 1); 
            mostrarValor = 7 + valorRandom; 
            break;

        case "card-alcalinidade":
            valorRandom = Math.random(-1, 1); 
            mostrarValor = 7 + valorRandom; 
            break;

        case "card-condutividade":
            valorRandom = Math.random(-1, 1); 
            mostrarValor = 7 + valorRandom; 
            break;

        default:
            break;
    }

    stringFormatada = `${mostrarValor}`;
    return stringFormatada;
}

function cardValores() {
    let listaCards = document.querySelectorAll("#cards .card"); // querySelector varre um objeto html e retorna todas as ocorrencias do seletor indicado
    listaCards.forEach((card, i) => { // index é uma variavel auxiliar
        let cardValor = card.querySelector(".indices-card"); // querySelector varre um objeto html e retorna retorna a primeira ocorrencia do seletor indicado
        cardValor.innerHTML = calcularValor(card.id); // acesso ao conteudo html dentro de um objeto html
    });
}

cardValores();
