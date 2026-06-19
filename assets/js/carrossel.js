let radio = document.querySelector('.manual-btn');
let cont = 1; // contador das imagens
const segundos = 5000;

document.getElementById('radio1').checked = true; 

// função para definir o tempo que cada imagem fica antes de passar para próxima (5 segundos)
setInterval(() => {
    cont++;
    proximaImagem();
}, segundos);

function proximaImagem() {

    if(cont > 3) {
        cont = 1;
    }; 

    document.getElementById('radio' + cont).checked = true;
}