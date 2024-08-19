const calculator = {
    screen: document.getElementById('screen'),
    currentOperand: '',
    previousOperand: '',
    operator: null,
};

function updateScreen() {
    calculator.screen.value = calculator.currentOperand;
}

function clear() {
    calculator.currentOperand = '';
    calculator.previousOperand = '';
    calculator.operator = null;
    updateScreen();
}

function appendNumber(number) {
    if (number === '.' && calculator.currentOperand.includes('.')) return;
    calculator.currentOperand += number;
    updateScreen();
}

function chooseOperator(operator) {
    if (calculator.currentOperand === '') return;
    if (calculator.previousOperand !== '') {
        calculate();
    }
    calculator.operator = operator;
    calculator.previousOperand = calculator.currentOperand;
    calculator.currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(calculator.previousOperand);
    const current = parseFloat(calculator.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (calculator.operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    calculator.currentOperand = result;
    calculator.operator = null;
    calculator.previousOperand = '';
    updateScreen();
}

function handleButtonClick(e) {
    const { value } = e.target;
    if (!isNaN(value) || value === '.') {
        appendNumber(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
        chooseOperator(value);
    } else if (value === '=') {
        calculate();
    } else if (value === 'all-clear') {
        clear();
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
