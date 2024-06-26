let numeroSecreto = generarNumeroSecreto(10);
let intentos = 1;
let limiteIntentos = 3;

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
}
function intentar(){
    let valorUsuario =parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto == valorUsuario){
        asignarTexto('p', `¡Felicidades! Has adivinado el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        //desabilitar boton
        document.getElementById('intentar').disabled = true;
        limpiarInput();
    }else{
        if (valorUsuario < numeroSecreto){
            asignarTexto('p', `El número secreto es mayor. Te quedan ${limiteIntentos - intentos} ${(limiteIntentos -intentos) == 1 ? 'intento' : 'intentos'}`);
        }else{
            asignarTexto('p', `El número secreto es menor. Te quedan ${limiteIntentos - intentos} ${(limiteIntentos -intentos) == 1 ? 'intento' : 'intentos'}`);
        }
        if (intentos == limiteIntentos){
            asignarTexto('p', `Se acabaron los intentos, el número secreto era ${numeroSecreto}`);
            document.getElementById('intentar').disabled = true;
        }
        limpiarInput();
        intentos++;
    }
}
function generarNumeroSecreto(numero){
    return Math.floor(Math.random() * numero) + 1;
}
function limpiarInput(){
    document.getElementById('valorUsuario').value = '';
}
function reiniciar(){
    numeroSecreto = generarNumeroSecreto(10);
    intentos = 0;
    asignarTexto('p', 'Introduce un número del 1 al 10');
    limpiarInput();
    document.getElementById('intentar').disabled = false;
}

asignarTexto('h1', 'Juego del número secreto');
asignarTexto('p', 'Introduce un número del 1 al 10');

