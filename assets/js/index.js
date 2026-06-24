function calcularValor(idIndice) {
    let valorRandom = Math.random() * 2 - 1;
    let mostrarValor;
    let unidadeMedida = "";
    let stringFormatada;

    switch (idIndice) {
        case "card-pH":
            mostrarValor = 7 + valorRandom; // entre 6.00 e 8.00
            break;
        case "card-oxigenio":
            mostrarValor = 5 + (valorRandom * 2);
            unidadeMedida = 'mg/L';
            break;
        case "card-turbidez":
            mostrarValor = 10 + (valorRandom * 5);
            unidadeMedida = 'NTU';
            break;
        case "card-toxicidade":
            mostrarValor = 0.5 + (valorRandom * 0.2);
            unidadeMedida = 'idx';
            break;
        case "card-alcalinidade":
            mostrarValor = 120 + (valorRandom * 20);
            unidadeMedida = 'mg/L';
            break;
        case "card-condutividade":
            mostrarValor = 150 + (valorRandom * 50);
            unidadeMedida = 'µS/cm'; 
            break;
        default:
            mostrarValor = 0;
            unidadeMedida = '';
            break;
    }

    stringFormatada = `${mostrarValor.toFixed(2)} ${unidadeMedida}`;
    return stringFormatada;
}

function criarGrafico(idIndice, cardGr) {

    let dataset; 
    
    switch (idIndice) {
        case "card-pH":
            dataset = [{
                label: 'ph',
                data: [8, 6.5, 7, 8, 8.5, 6.9]
            }];
            break;
        case "card-oxigenio":
            dataset = [{
                label: 'Oxigênio',  
                data: [2, 5, 8, 10, 31, 45],
            }];
            break;
        case "card-turbidez":
            dataset = [{
                label: 'Turbidez',  
                data: [2, 5, 8, 10, 31, 45],
            }];
            break;
        case "card-toxicidade":
            dataset = [{
                label: 'Toxicidade',  
                data: [2, 5, 8, 10, 31, 45],
            }];
            break;
        case "card-alcalinidade":
            dataset = [{
                label: 'Alcalinidade',  
                data: [2, 5, 8, 10, 31, 45],
            }];
            break;
        case "card-condutividade":
            dataset = [{
                label: 'Condutividade',  
                data: [2, 5, 8, 10, 31, 45],
            }];
            break;
    }

    new Chart(cardGr, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''], // eixo x do grafico
        datasets: dataset
    },
    options: {
        responsive: true,
        scales: {
            y: { }
        },
        
        fill: true,
        plugins: { 
            
            labels: {
                display: false
            },
            legend: {
                display: false
            }
        }
    }
});
}

function cardValores() {
    let listaCards = document.querySelectorAll("#cards .card"); // querySelector varre um objeto html e retorna todas as ocorrencias do seletor indicado
    listaCards.forEach((card, i) => { // index é uma variavel auxiliar
        let cardValor = card.querySelector(".indices-card"); // querySelector varre um objeto html e retorna retorna a primeira ocorrencia do seletor indicado
        let cardGr = card.querySelector(".indices-gr");
        cardValor.innerHTML = calcularValor(card.id); // acesso ao conteudo html dentro de um objeto html
        criarGrafico(card.id, cardGr); // acesso ao conteudo canvas dentro de um objeto html
    });
}   

cardValores();  

const ctx = document.getElementById('gr-principal');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['dia 1', 'dia 2', 'dia 3', 'dia 4', 'dia 5', 'dia 6'], // eixo x do grafico
        datasets: [ {    
            label: 'pH',
            data: [8, 6.5, 7, 8, 8.5, 6.9],
            }]
            },
            options: {
                responsive: true,
                scales: {
            y: { } },
        fill: true,
        plugins: { 
            title: {
                display: true,
                text: 'pH',
                font: { size: 20 }
            },
            legend: {
                display: false
                }
        }
    }
    });
    