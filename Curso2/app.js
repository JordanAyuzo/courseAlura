let titulo = document.querySelector('h1');
titulo.textContent = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.textContent = 'Adivina el número secreto entre 1 y 10';

function intentar(){
    let numero =document.querySelector('input').value;
    alert('Tu número es: ' + numero);
}