function calcularValor(idIndice) {
    let valorRandom = Math.random() * 2 - 1;
    let mostrarValor;
    let stringFormatada;

    switch (idIndice) {
        case "card-pH":
            mostrarValor = 7 + valorRandom; // entre 6.00 e 8.00
            break;
        case "card-oxigenio":
            mostrarValor = 5 + (valorRandom * 2);
            break;
        case "card-turbidez":
            mostrarValor = 10 + (valorRandom * 5);
            break;
        case "card-toxicidade":
            mostrarValor = 0.5 + (valorRandom * 0.2);
            break;
        case "card-alcalinidade":
            mostrarValor = 120 + (valorRandom * 20);
            break;
        case "card-condutividade":
            mostrarValor = 150 + (valorRandom * 50);
            break;
        default:
            mostrarValor = 0;
            break;
    }

    return mostrarValor.toFixed(2);
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

const miniGraficos = document.getElementById('graficos-card');
new Chart(miniGraficos, {
    type: 'line',
    data: {
        labels: ['pH', 'Oxigênio', 'Turbidez', 'Toxicidade', 'Alcanlinidade', 'Condutividade'], // eixo x do grafico
        datasets: [{
            label: 'Quantidade',
            data: [2, 5, 8, 10, 31, 45]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        fill: true,
        plugins: {

        }
    }
});
