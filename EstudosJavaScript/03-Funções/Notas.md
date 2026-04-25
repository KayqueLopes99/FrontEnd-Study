## Funções
- Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas permitem organizar o código, evitar repetição e facilitar a manutenção.

- Pode ser invocada.
- Pode receber parâmetros, que são valores passados para a função quando ela é chamada. Esses parâmetros podem ser usados dentro da função para realizar operações ou cálculos.
- Pode retornar um valor, que é o resultado da execução da função. O valor retornado pode ser usado em outras partes do código ou armazenado em uma variável.

> Sintaxe da Functions declaration: 
```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // código a ser executado
    return resultado; // opcional
}
```

### Exemplos de Funções
```javascript
// Função sem parâmetros e sem retorno
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}   

// Função com parâmetros e sem retorno
function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
}

// Função com parâmetros e com retorno
function soma(a, b) {
    return a + b;
}

// Chamando as funções
saudacao(); // Output: Olá, seja bem-vindo!
saudacaoPersonalizada("Maria"); // Output: Olá, Maria! Seja bem-vindo!
const resultadoSoma = soma(5, 3);
console.log(resultadoSoma); // Output: 8
``` 

> Parametros primitivos são passados por valor, ou seja, uma cópia do valor é passada para a função. Já os objetos são passados por referência, o que significa que a função pode modificar o objeto original.

### Funções Anônimas e Arrow Functions
- Funções anônimas são funções sem nome, geralmente atribuídas a variáveis ou usadas como argumentos para outras funções.
- Arrow functions são uma forma mais concisa de escrever funções anônimas, introduzidas no ES6. Elas têm uma sintaxe mais curta e não possuem seu próprio `this`, o que pode ser útil em certos contextos.

```javascript
// Função anônima
const saudacaoAnonima = function(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
};

// Arrow function
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
};
```

### Funções Recursivas
- Funções recursivas são aquelas que chamam a si mesmas para resolver um problema. Elas geralmente possuem uma condição de parada para evitar chamadas infinitas.

```javascript
function fatorial(n) {
    if (n === 0) {
        return 1; // Condição de parada
    }
    return n * fatorial(n - 1); // Chamada recursiva
}
```

#### Closures
- Closures são funções que têm acesso às variáveis de seu escopo externo, mesmo após a função externa ter sido executada. Isso permite criar funções com estado e encapsulamento.

```javascript
function criarContador() {
    let contador = 0; // Variável do escopo externo
    return function() { // Função interna (closure)
        contador++;
        return contador;
    };
}

const contador1 = criarContador();
console.log(contador1()); // Output: 1
console.log(contador1()); // Output: 2  
```

### Functions expression
- Functions expression são funções definidas como parte de uma expressão, geralmente atribuídas a uma variável. Elas podem ser anônimas ou nomeadas.

```javascript
const saudacaoExpressao = function(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
};
```

### Functions constructor
- Functions constructor é uma forma de criar funções usando o construtor `Function`. No entanto, essa abordagem é geralmente desencorajada devido a questões de segurança e desempenho.

```javascript
const saudacaoConstructor = new Function('nome', 'console.log(`Olá, ${nome}! Seja bem-vindo!`);');
```

### Generator functions
- Generator functions são funções que podem ser pausadas e retomadas, permitindo a geração de uma sequência de valores ao longo do tempo. Elas são definidas usando a sintaxe `function*` e utilizam a palavra-chave `yield` para produzir valores.

```javascript
function* contadorGenerator() {
    let contador = 0;
    while (true) {
        yield contador; // Pausa a execução e retorna o valor atual
        contador++;
    }
}

const contador = contadorGenerator();
console.log(contador.next().value); // Output: 0
console.log(contador.next().value); // Output: 1
console.log(contador.next().value); // Output: 2
```