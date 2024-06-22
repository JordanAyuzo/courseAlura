// Declaraciion de variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

// Imprimir en consola
console.log(numeroUsuario);

// Condicional para saber si el numero es igual al numero secreto
if (numeroUsuario == numeroSecreto) {
    // la condicion se cumple
    alert(`Acertaste el numero ${numeroSecreto}`);
}else{
    // la condicion no se cumple
    if (numeroUsuario > numeroSecreto){
        // el numero es mayor al numero secreto
        alert(`El numero secreto es menor a ${numeroUsuario}`);
        
    }else{
        // el numero es menor al numero secreto
        alert(`El numero secreto es mayor a ${numeroUsuario}`);
    }
}   
