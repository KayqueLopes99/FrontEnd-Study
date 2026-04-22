// Exercício: extremamente simples
// Soma de Números
let prompt = require('prompt-sync')();
let x = parseFloat(prompt("Digite o primeiro número: "));
let y = parseFloat(prompt("Digite o segundo número: "));

// calculadora + - * /
let operation = prompt("Digite a operação (+, -, *, /): ");
let result;

switch (operation) {
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '*':
        result = x * y;
        break;
    case '/':
        if (y !== 0) {
            result = x / y;
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
            return;
        }
        break;
    default:
        console.log("Operação inválida.");
        return;
}

console.log(`-> ${x} ${operation} ${y} = ${result}`);