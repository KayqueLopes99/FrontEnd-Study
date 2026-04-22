## Variáveis, Entrada e Saída de dados em Javascript
- Variáveis são usadas para armazenar dados. Em JavaScript, você pode declarar uma variável usando as palavras-chave `var`, `let` ou `const`. A diferença entre elas está no escopo e na mutabilidade da variável.

- Nomenclarura de variáveis: camelCase, ou seja, a primeira letra da primeira palavra é minúscula e a primeira letra de cada palavra subsequente é maiúscula. Exemplo: num1, num2, soma.

- Para obter entrada do usuário, você pode usar a função `prompt()`, que exibe uma caixa de diálogo para o usuário inserir um valor. O valor inserido é retornado como uma string.

```javascript
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");
```

- Para exibir saída de dados, você pode usar a função `console.log()`, que imprime mensagens no console do navegador. Você também pode usar `alert()` para mostrar uma caixa de diálogo com uma mensagem.

```javascript
let idade = prompt("Digite sua idade:");
console.log("Sua idade é: " + idade);
alert("Bem-vindo ao curso de JavaScript!");
```
### Forma formal de imprimir variáveis
- Template literals: Usando crases (``) e `${}` para inserir variáveis dentro de uma string.

```javascript
let nome = "João";
let idade = 30;
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
```
- Concatenation: Usando o operador `+` para juntar strings e variáveis.

```javascript
let nome = "Maria";
let idade = 25;
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");
```

### Conersões de tipos
- Para converter uma string em um número, você pode usar a função `Number()` ou o operador unário `+`.
```javascript
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let soma = Number(num1) + Number(num2);
console.log("A soma é: " + soma);
```
- Para converter um número em uma string, você pode usar a função `String()` ou o método `toString()`.
```javascript
let num = 42;
let str = String(num);
console.log("O número como string é: " + str);
```
- Para converter uma string em um booleano, você pode usar a função `Boolean()`.
```javascript
let str = "true";
let bool = Boolean(str);
console.log("A string convertida para booleano é: " + bool);
```
- Em float, você pode usar a função `parseFloat()` para converter uma string em um número de ponto flutuante.
```javascript
let str = "3.14";
let num = parseFloat(str);
console.log("A string convertida para float é: " + num);
```
- Em inteiro, você pode usar a função `parseInt()` para converter uma string em um número inteiro.
```javascript
let str = "42";
let num = parseInt(str);
console.log("A string convertida para inteiro é: " + num);
```

### Bibliotecas para entrada de dados
- Em ambientes Node.js, você pode usar a biblioteca `prompt-sync` para ler dados do teclado. Para instalar a biblioteca, use o comando `npm i prompt-sync`. Depois de instalada, você pode usá-la da seguinte maneira:
```javascript
let prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");
```