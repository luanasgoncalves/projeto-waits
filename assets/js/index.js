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

function criaMiniGraficoPh() {
    
    new Chart(miniGraficos, {
        type: 'line',
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], // eixo x do grafico
            datasets: [{
                label: "data",
                data: [7.5, 7.2, 7.1, 7.7, 7.3, 7.6, 7.0 ],
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    max: 8,
                    min: 6,
                    
                }
            },
            fill: false,
            plugins: {

            }
        }
    });
}

function criaMiniGraficoOxi() {
    const miniGraficoOxi = document.getElementById('graficos-card-oxigenio');
    new Chart(miniGraficos, {
        type: 'line',
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], 
            datasets: [{
                label: "data",
                data: [4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8 ],
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    max: 8,
                    min: 6,
                    
                }
            },
            fill: false,
            plugins: {

            }
        }
    });
}

const miniGraficoPh = document.getElementById('graficos-card-pH');
criaMiniGraficoPh();
criaMiniGraficoOxi()