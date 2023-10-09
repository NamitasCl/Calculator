let borrarPantalla = false;
let operador = null;
let numeroUno = '';
let numeroDos = '';

const numeros = document.querySelectorAll('#numero');
const operadores = document.querySelectorAll('.operador')
const pantalla = document.querySelector('.pantalla');
const btnBorrar = document.querySelector('.borrar');
const btnIgual = document.querySelector('.igual');
const btnPunto = document.querySelector('.punto');
const btnAc = document.querySelector('.cero');
const btnDel = document.querySelector('.borrar');

btnIgual.addEventListener('click', evaluar);
btnPunto.addEventListener('click', agregaPunto);
btnAc.addEventListener('click', borrarTodo);
btnDel.addEventListener('click', borrarNumero);



numeros.forEach(numero => {
    numero.addEventListener('click', () => {setNumero(numero.textContent)});
});

operadores.forEach(operador => {
    operador.addEventListener('click', (e) => {setOperador(e.target.id)});
});

function setNumero(numero) {
    //sirve para no añadir ceros al inicio.
    if(pantalla.textContent == '0' || borrarPantalla) delScrn();
    pantalla.textContent += numero;
}

function setOperador(op) {
    if(operador !== null) evaluar();
    numeroUno = pantalla.textContent;
    operador = op;
    borrarPantalla = true;
}

function delScrn() {
    pantalla.textContent = '';
    borrarPantalla = false;
}

function evaluar() {
    if(operador === null || borrarPantalla) return;
    numeroDos = pantalla.textContent;
    pantalla.textContent = operar(operador, numeroUno, numeroDos);
    operador = null;
}

function agregaPunto() {
    if(pantalla.textContent.includes('.')) return;
    setNumero('.');
}

function borrarTodo() {
    pantalla.textContent = '';
    numeroUno = '';
    numeroDos = '';
    operador = null;
}

function borrarNumero() {
    let aux = pantalla.textContent.split('');
    aux.pop();
    pantalla.textContent = aux.join('');
}


function operar(op, x, y) {
    let a = Number(x);
    let b = Number(y);

    switch(op) {
        case 'suma':
            return a + b;
            break;
        case 'resta':
            return a - b;
            break;
        case 'multiplicacion':
            return a * b;
            break;
        case 'division':
            return a / b;
            break;
    }   
}

