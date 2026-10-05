const primerNumero = document.querySelector('#input');
const segundoNumero = document.querySelector('#input2');
const botonVerificar = document.querySelector('#verificar');
const resultado = document.querySelector('#secret-result');

const primerNumeroSecreto = 2;
const segundoNumeroSecreto = 3;

botonVerificar.addEventListener('click', () => {
    const primerNumeroIngresado = Number(primerNumero.value);
    const segundoNumeroIngresado = Number(segundoNumero.value);

    if (
        primerNumero.value === '' ||
        segundoNumero.value === '' ||
        !Number.isInteger(primerNumeroIngresado) ||
        !Number.isInteger(segundoNumeroIngresado) ||
        primerNumeroIngresado < 1 || primerNumeroIngresado > 5 ||
        segundoNumeroIngresado < 1 || segundoNumeroIngresado > 5
    ) {
        resultado.textContent = 'Ingresa dos números enteros entre 1 y 5.';
        resultado.className = 'error';
        return;
    }

    if (primerNumeroIngresado !== primerNumeroSecreto || segundoNumeroIngresado !== segundoNumeroSecreto) {
        resultado.textContent = 'Número incorrecto. Acceso denegado.';
        resultado.className = 'error';
        return;
    }

    resultado.textContent = 'Acceso concedido. Bienvenido al sistema secreto.';
    resultado.className = 'exito';
});
