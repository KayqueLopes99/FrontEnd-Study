## Repetições e Laços de Controle
- Os laços são usados em JavaScript para realizar tarefas repetidas com base em uma condição. As condições tipicamente retornam true ou false. Um laço continuará em execução até que a condição definida retorne false.

### Laços de Controle
#### 1. `for`
- O laço `for` é usado para repetir um bloco de código um número específico de vezes.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

> Sintaxe:
```javascript
for (inicialização; condição; incremento) {
    // código a ser executado
}
```
- inicialização: é onde você define e inicializa a variável de controle do laço.
- condição: é a expressão que é avaliada antes de cada iteração do laço. Se a condição for verdadeira, o bloco de código dentro do laço será executado. Se for falsa, o laço será encerrado.
- incremento: é a expressão que é executada após cada iteração do laço. Normalmente, é usada para atualizar a variável de controle, como incrementá-la ou decrementá-la.






#### 2. `while`
- O laço `while` é usado para repetir um bloco de código enquanto uma condição for verdadeira.
```javascript
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```
> Sintaxe:
```javascript
while (condição) {
    // código a ser executado
}
```

#### 3. `do...while`
- O laço `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa.
```javascript
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5);
```
> Sintaxe:
```javascript
do {
    // código a ser executado
} while (condição);
```

### Comandos Breack e Continue
- O comando `break` é usado para sair imediatamente de um laço, enquanto o comando `continue` é usado para pular a iteração atual e continuar com a próxima iteração do laço.
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sai do laço quando i é igual a 5
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula a iteração atual se i for par
    }
    console.log(i); // Imprime apenas os números ímpares
}
``` 


### Condições
#### 1. Operador Ternário
- O operador ternário é uma forma concisa de escrever uma expressão condicional. Ele é útil para atribuir valores a variáveis com base em uma condição, sem a necessidade de usar uma estrutura `if` completa.
```javascript
condição ? expressão_se_verdadeira : expressão_se_falsa;
```

#### Exemplos
1. Iterar por números inteiros de 0 a 8:
```javascript
for (let i = 0; i < 9; i++) {
    console.log(i);
}
```
2. Imprimir os números pares de 0 a 10:
```javascript
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```
3. Imprimir os números ímpares de 0 a 10:
```javascript
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
```

> Com while e do while:
```javascript
let i = 0;
while (i < 9) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 9);
```

### For...in e For...of
- O laço `for...in` é usado para iterar sobre as propriedades enumeráveis de um objeto, enquanto o laço `for...of` é usado para iterar sobre os elementos de um objeto iterável, como arrays ou strings.
```javascript
const pessoa = { nome: "Alice", idade: 30, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

const frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta);
}

// saidas:
// nome: Alice
// idade: 30
// cidade: São Paulo

// maçã
// banana
// laranja
```


### switch
- O comando `switch` é usado para executar diferentes blocos de código com base no valor
de uma expressão. Ele é uma alternativa mais legível para múltiplas declarações `if...else`.
```javascript
const dia = 3;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2: 
        console.log("Terça-feira");
        break;  
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:     
        console.log("Sexta-feira");
        break;  
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;      
    default:
        console.log("Dia inválido");
}
```