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

const operations = [];
operations.push(document.getElementById('plus'));
operations.push(document.getElementById('less'));
operations.push(document.getElementById('div'));
operations.push(document.getElementById('multy'));

const specialOperation = [];
specialOperation.push(document.getElementById('reset'));
specialOperation.push(document.getElementById('delete'));
specialOperation.push(document.getElementById('show-result'));


let inputOperation = document.getElementById('operation');


numbers.forEach(number => {
    number.addEventListener('click', writeOnTheInput);
})

function writeOnTheInput(ev) {
    inputOperation.value += ev.target.innerHTML;
}
