let radio = document.querySelector('.manual-btn');
let cont = 1; // contador das imagens

document.getElementById('botao1').checked = true; 

// função para definir o tempo que cada imagem fica antes de passar para próxima (5 segundos)
setInterval(() => {
    proximaImagem()
}, 5000);

function proximaImagem() {
    cont++;

    if(cont > 3) {
        cont = 1;
    }; 

    document.getElementById('botao1' + cont).checked = true;
}