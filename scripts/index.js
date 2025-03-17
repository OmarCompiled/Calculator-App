let rightOperand;
let operator;
let leftOperand;

function operate(rightOperand, operator, leftOperand) {
    if(operator === 'x') {
        multiply(rightOperand, leftOperand);
    } else if(operator === '+'){
        add(rightOperand, leftOperand);
    } else if(operator === '-') {
        subtract(rightOperand, leftOperand);
    } else if(operator === '/') {
        divide(rightOperand, leftOperand);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b !== 0) {
        return a/b;
    }
    throw new Error('Cannot divide by 0!');
}
