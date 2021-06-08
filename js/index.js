// Botones de numeros

const numbers = []; 
numbers.push(document.getElementById('one'));
numbers.push(document.getElementById('two'));
numbers.push(document.getElementById('three'));
numbers.push(document.getElementById('four'));
numbers.push(document.getElementById('five'));
numbers.push(document.getElementById('six'));
numbers.push(document.getElementById('seven'));
numbers.push(document.getElementById('eight'));
numbers.push(document.getElementById('nine'));
numbers.push(document.getElementById('dut'));
numbers.push(document.getElementById('zero'));

// Botones de operaciones

const operations = [];
operations.push(document.getElementById('plus'));
operations.push(document.getElementById('less'));
operations.push(document.getElementById('div'));
operations.push(document.getElementById('multy'));

// Botones Especiales

const specialOperation = [];
specialOperation.push(document.getElementById('reset'));
specialOperation.push(document.getElementById('delete'));
specialOperation.push(document.getElementById('show-result'));

// Input de la calculadora

let inputOperation = document.getElementById('operation');

// variables a operar

let a;
let b;
let operador;

// Listeners

numbers.forEach(number => {
    number.addEventListener('click', writeOnTheInput);
});

operations.forEach(operator => {
    operator.addEventListener('click', writeOnTheInputAndSave);
});

specialOperation[0].addEventListener('click', resetearInput);
specialOperation[1].addEventListener('click', borrarNumero);
specialOperation[2].addEventListener('click', showResult);

function writeOnTheInput(ev) {
    inputOperation.value += ev.target.innerHTML;
}

function writeOnTheInputAndSave(ev) {
    operador = ev.target.innerHTML;
    if(!a) {
        a = inputOperation.value;
    }
    inputOperation.value = "";
}

function resetearInput() {
    a = null;
    b = null;
}

function borrarNumero() {
    console.log(inputOperation.value);
}

function showResult() {
    b = inputOperation.value;

    switch(operador) {
        case '+':
            inputOperation.value = suma(a, b);
        break;
        case '-':
            inputOperation.value = resta(a, b);
        break;
        case 'x':
            inputOperation.value = multiplicacion(a, b);
        break;
        case '/':
            inputOperation.value = division(a, b);
        break;
        default:
            inputOperation.value = "Invalid option";
        break;
    }
}

// Funciones

function suma(a, b) {
    console.log(a, b)
    return Number(a) + Number(b); 
}

function resta(a, b) {
    console.log(a, b);
    return Number(a) - Number(b);
}

function multiplicacion(a, b) {
    console.log(a, b);
    return Number(a) * Number(b);
}

function division(a, b) {
    console.log(a, b);
    return Number(a) / Number(b);
}
