let numeroSecreto = generarNumeroSecreto(10);

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
}
function intentar(){
    let valorUsuario =parseInt(document.getElementById('valorUsuario').value);
    if (valorUsuario != numeroSecreto){
        alert('El valor es incorrexto, intenta de nuevo');
        return;
    }
    alert('Felicidades, adivinaste el número secreto');
}

function generarNumeroSecreto(numero){
    return Math.floor(Math.random() * numero) + 1;
}

asignarTexto('h1', 'Juego del número secreto');
asignarTexto('p', 'Introduce un número del 1 al 10');

