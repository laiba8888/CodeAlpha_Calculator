let currentDisplay = '';
let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    currentDisplay += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        computeResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    currentDisplay += ' ' + op + ' ';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentDisplay || '0';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    currentDisplay = '';
    updateDisplay();
}

function computeResult() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation.toString();
    operation = '';
    previousNumber = '';
    currentDisplay = currentNumber;
    updateDisplay();
}
