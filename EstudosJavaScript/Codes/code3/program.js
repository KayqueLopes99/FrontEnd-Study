// Importando a biblioteca prompt-sync para ler a entrada do usuário no terminal.
let prompt = require('prompt-sync')();

// Programa para escrever olá mundo js.
// Saida de dados.
console.log("Olá mundo js.");
console.log("Aula 01");

// Impressão de arvore formato
console.log("    *");
console.log("   ***");
console.log("  *****");
console.log(" *******");
console.log("*********");
console.log("   []   ");

// Entrada de dados.
// Prompt é uma função que exibe uma caixa de diálogo para o usuário inserir um valor.
let nome = prompt("Digite seu nome: ");
console.log("Olá " + nome + ", seja bem-vindo ao curso de JavaScript!");

// let prompt = require('prompt-sync')();
// ler dois números e mostrar a soma.
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let soma = num1 + num2;

console.log(`A soma de ${num1} e ${num2} é: ${soma}`); // Usando template literals para exibir a soma.
