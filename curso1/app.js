// Declaraciion de variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos= 0;

// Imprimir en consola

while (numeroUsuario != numeroSecreto && intentos > 0) {
    numeroUsuario = parseInt(prompt("Adivina el numero secreto"));
    console.log(numeroUsuario);

    // Condicional para saber si el numero es igual al numero secreto
    if (numeroUsuario == numeroSecreto) {
        // la condicion se cumple
        alert(`Acertaste el numero ${numeroSecreto} en ${3-intentos} intentos`);
    }else{
        // la condicion no se cumple
        if (numeroUsuario > numeroSecreto){
            // el numero es mayor al numero secreto
            alert(`El numero secreto es menor a ${numeroUsuario}`);

        }else{
            // el numero es menor al numero secreto
            alert(`El numero secreto es mayor a ${numeroUsuario}`);
        }
        intentos--;
    }   
}
if (intentos == 0){
    alert(`Se te acabaron los intentos, el numero secreto era ${numeroSecreto}`);
}
