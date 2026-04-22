# **Variáveis, Tipos de Dados e Operadores**
As variáveis são peças-chave em qualquer linguagem de programação, permitindo que armazenemos e manipulemos dados de forma dinâmica. Ou seja, aprenderemos a declarar variáveis, atribuir valores e entender os diferentes tipos de dados que podemos utilizar, como números, strings, booleanos, arrays e objetos.

Além disso, vamos explorar os operadores, que são símbolos especiais que nos possibilitam realizar cálculos matemáticos, efetuar comparações e avaliar expressões lógicas. Em outras palavras, os operadores são cruciais para a tomada de decisões e para a criação de programas mais dinâmicos e interativos.

Com esse conhecimento, por exemplo, você estará preparado para mergulhar no mundo do desenvolvimento web e dar seus primeiros passos na criação de páginas e aplicações interativas com JavaScript.

### **Declaração e Atribuição de Variáveis em JavaScript**

Nesta aula, vamos aprender sobre declaração e atribuição de variáveis em JavaScript. Enfim, as variáveis são fundamentais para armazenar e manipular dados em nossos programas. Ou seja, vamos explorar como declarar e atribuir valores a variáveis, entender os tipos de dados que podemos armazenar e como nomear as variáveis de forma adequada.

### **Declaração de Variáveis**

Para declarar uma variável em JavaScript, por exemplo, utilizamos as palavras-chave `var`, `let` ou `const`, seguidas pelo nome da variável. Enfim, cada uma delas tem características específicas de escopo e comportamento.

### **Exemplos:**

```jsx
var nome; // Declaração de uma variável usando var
let idade; // Declaração de uma variável usando let
const PI = 3.14; // Declaração de uma variável constante usando const
```

Atribuição de Valores

O tipo de dado `String` é usado para representar sequências de caracteres, como textos. As aspas simples ou duplas delimitam as strings.

### **Exemplos:**

```jsx
var nome = "Maria"; // String com aspas duplas
var mensagem = 'Olá, mundo!'; // String com aspas simples
```

### **Booleanos (Boolean)**

O tipo de dado `Boolean` representa valores verdadeiros (`true`) ou falsos (`false`). As pessoas comumente utilizam isso para expressar condições lógicas.

### **Exemplos:**

```jsx
var estaChovendo = true; // Valor verdadeiro
var temSol = false; // Valor falso
```

### **Arrays**

Os `Arrays` são coleções ordenadas de elementos, que podem ser de qualquer tipo de dado, incluindo outros arrays. Em JavaScript, um array tem seus índices baseados em zero.

### **Exemplos:**

```jsx
var numeros = [1, 2, 3, 4, 5]; // Array de números
var frutas = ['maçã', 'banana', 'laranja']; // Array de strings
var misturado = [1, 'Olá', true]; // Array misto
```

### **Objetos (Object)**

Os `Objetos` são estruturas de dados complexas que armazenam propriedades e seus valores associados. As propriedades de um objeto podem conter qualquer tipo de dado.

### **Exemplo:**

```jsx
var pessoa = {
  nome: 'João',
  idade: 30,
  estaTrabalhando: true
};
```

Em JavaScript, temos diversos tipos de dados à nossa disposição, permitindo-nos armazenar informações de diferentes formas. Enfim, os números (`Number`) representam valores numéricos, as strings (`String`) são usadas para textos, os booleanos (`Boolean`) expressam valores verdadeiros ou falsos. Com os arrays, podemos criar coleções ordenadas de elementos, e com os objetos, podemos organizar dados complexos em propriedades e valores associados. A compreensão desses tipos de dados é essencial para construir programas eficientes e funcionais em JavaScript. Ou seja, na medida em que progredimos no desenvolvimento, saber manipular esses tipos de dados nos tornará desenvolvedores mais habilidosos e capazes de criar aplicações web completas e dinâmicas.

### **Utilização de Operadores Aritméticos, de Atribuição, de Comparação e Lógicos em JavaScript**

Vamos explorar os principais operadores em JavaScript, que são fundamentais para realizar cálculos matemáticos, atribuir valores a variáveis, realizar comparações e avaliar expressões lógicas. Enfim, vamos entender como utilizar os operadores aritméticos, de atribuição, de comparação e lógicos para manipular dados e controlar o fluxo do programa.

### **Operadores Aritméticos**

Em JavaScript, os operadores aritméticos são usados para realizar operações matemáticas.

- `+`: Adição
- `-`: Subtração
- `*`: Multiplicação
- `/`: Divisão
- `%`: Módulo (resto da divisão)
- `**`: Exponenciação (potenciação)

### **Exemplos:**

```jsx
var soma = 10 + 5; // Resultado: 15
var subtracao = 20 - 8; // Resultado: 12
var multiplicacao = 3 * 6; // Resultado: 18
var divisao = 15 / 3; // Resultado: 5
var resto = 10 % 3; // Resultado: 1
```

### **Operadores de Atribuição**

Os operadores de atribuição atribuem valores a variáveis.

- `=`: Atribuição simples
- `+=`: Atribuição com adição
- `=`: Atribuição com subtração
- `=`: Atribuição com multiplicação
- `/=`: Atribuição com divisão
- `%=`: Atribuição com módulo

### **Exemplos:**

```jsx
var x = 5; // Atribuição simples
x += 3; // x = x + 3 (x é atualizado para 8)
x -= 2; // x = x - 2 (x é atualizado para 6)
x *= 4; // x = x * 4 (x é atualizado para 24)
x /= 6; // x = x / 6 (x é atualizado para 4)
x %= 3; // x = x % 3 (x é atualizado para 1)
```

### **Operadores de Comparação**

Os operadores de comparação são usados para comparar valores e retornar um valor booleano (`true` ou `false`).

- `==`: Igual a
- `!=`: Diferente de
- `>`: Maior que
- `<`: Menor que
- `>=`: Maior ou igual a
- `<=`: Menor ou igual a

> `===`: Estritamente igual a (compara valor e tipo), ou seja, retorna `true` apenas se os valores e os tipos forem iguais.

> `!==`: Estritamente diferente de (compara valor e tipo), ou seja, retorna `true` apenas se os valores ou os tipos forem diferentes.

### **Exemplos:**

```jsx
var a = 10;
var b = 5;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
```

### **Operadores Lógicos**

Os operadores lógicos combinam ou invertem expressões lógicas.

- `&&`: E lógico
- `||`: OU lógico
- `!`: NÃO lógico (inverte o valor booleano)

### **Exemplos:**

```jsx
var idade = 25;
var possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
  console.log("Pode dirigir!");
}

var nota = 7;
var frequencia = 80;

if (nota >= 7 || frequencia >= 75) {
  console.log("Aprovado!");
}

var x = true;
var y = !x; // y é false
```

Os operadores em JavaScript são ferramentas poderosas que nos permitem realizar cálculos matemáticos, atribuir valores a variáveis, fazer comparações e avaliar expressões lógicas. Enfim, através dos operadores aritméticos, de atribuição, de comparação e lógicos, podemos manipular dados de forma eficiente e tomar decisões em nossos programas. Ou seja, com a compreensão desses operadores, você estará mais capacitado para criar códigos mais sofisticados e funcionais em JavaScript, tornando-se um desenvolvedor mais versátil e habilidoso. Enfim, continue praticando e explorando as possibilidades dos operadores para aprimorar suas habilidades de programação em JavaScript.

### Diferença entre `undefined` e `null`
- `undefined`: Indica que uma variável foi declarada, mas ainda não recebeu um valor. Por exemplo:

```javascriptlet x;
console.log(x); // Output: undefined
``` 

- `null`: Representa a ausência intencional de um valor. É usado para indicar que uma variável não tem valor ou que um objeto está vazio. Por exemplo:

```javascript
let y = null;
console.log(y); // Output: null
```

> NaN: Significa "Not a Number" (Não é um número) e é o resultado de operações matemáticas inválidas, como dividir zero por zero ou tentar converter uma string que não representa um número em um valor numérico. Por exemplo:

```javascript
let resultado = 0 / 0;
console.log(resultado); // Output: NaN
```