let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            currentInput = 'Error';
        } else {
            currentInput = result.toString();
        }
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

// Add event listeners to all buttons

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('openParen').addEventListener('click', () => appendToDisplay('('));
document.getElementById('closeParen').addEventListener('click', () => appendToDisplay(')'));
document.getElementById('divide').addEventListener('click', () => appendToDisplay('/'));
document.getElementById('seven').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('eight').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('nine').addEventListener('click', () => appendToDisplay('9'));
document.getElementById('multiply').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('four').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('five').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('six').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('subtract').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('one').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('two').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('three').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('add').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('zero').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('decimal').addEventListener('click', () => appendToDisplay('.'));
document.getElementById('equal').addEventListener('click', calculate);
