let numeroMaximo = 10;
let numeroMinimo = 0;
let numeroAdivinar = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
let intentos = 1;
let maximosIntentos = 3;
let numeroEscrito = 0;

alert("¡Bienvenido al juego de adivinar el número!");

while (numeroEscrito != numeroAdivinar) {

    numeroEscrito = parseInt(prompt(`Escribe un número entre ${numeroMinimo} y ${numeroMaximo} por favor:`));

    if (numeroEscrito == numeroAdivinar) {

        alert(`¡Felicidades! Acertaste el número ${numeroAdivinar} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

        break;

    } else {

        alert("Incorrecto, inténtalo otra vez.");

        intentos++;

        if (intentos > maximosIntentos) {
            
            alert(`Perdiste. El número era ${numeroAdivinar} y los intentos fueron: ${intentos}`);

            break;

        }

    }

}