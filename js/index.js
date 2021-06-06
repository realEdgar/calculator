let buttons = document.querySelectorAll('button');
let inputOperation = document.getElementById('operation');

buttons = [...buttons];

buttons.forEach(button => {
    button.addEventListener('click', writeOnTheInput);
})

function writeOnTheInput(ev) {
    const numberOrNot = ev.target.innerHTML;
    inputOperation.value += ev.target.innerHTML;
}