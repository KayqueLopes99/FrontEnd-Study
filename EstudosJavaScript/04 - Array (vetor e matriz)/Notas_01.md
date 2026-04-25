## Array (vetor e matriz)
- O array é uma estrutura de dados que armazena uma coleção de elementos, onde cada elemento é identificado por um índice. Em JavaScript, os arrays são dinâmicos, o que significa que podem crescer ou diminuir de tamanho conforme necessário.

> Sintaxe para criar um array:
```javascript
let meuArray = [elemento1, elemento2, elemento3, ...];
```
- Os elementos de um array podem ser de qualquer tipo, incluindo números, strings, objetos e até outros arrays (matrizes).

> Exemplo de criação de um array:
```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas); // Output: ["maçã", "banana", "laranja
```

- Para acessar um elemento específico de um array, utilizamos o índice do elemento, que começa em 0.
```javascript
console.log(frutas[0]); // Output: "maçã"
console.log(frutas[1]); // Output: "banana"
console.log(frutas[2]); // Output: "laranja"
```

### Metodos de Array
> 0.1: `push()`: Adiciona um ou mais elementos ao final do array.
```javascript
frutas.push("uva");
console.log(frutas); // Output: ["maçã", "banana", "laranja", "uva"]
```
> 0.2: `pop()`: Remove o último elemento do array e o retorna.
```javascript
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Output: "uva"
console.log(frutas); // Output: ["maçã", "banana", "laranja"]
```
> 0.3: `shift()`: Remove o primeiro elemento do array e o retorna.
```javascript
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Output: "maçã"
console.log(frutas); // Output: ["banana", "laranja"]
```

> 0.4: `unshift()`: Adiciona um ou mais elementos ao início do array.
```javascript
frutas.unshift("morango");
console.log(frutas); // Output: ["morango", "banana", "laranja"]
```
> 0.5: `indexOf()`: Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se o elemento não for encontrado.
```javascript
let indiceBanana = frutas.indexOf("banana");
console.log(indiceBanana); // Output: 1
```
> 0.6: `length`: Retorna o número de elementos em um array.
```javascript
console.log(frutas.length); // Output: 3
```
> 0.7: `slice()`: Retorna uma cópia de uma parte do array em um novo array. `array.slice(início, fim)`
```javascript
let frutasCopia = frutas.slice(0, 2);
console.log(frutasCopia); // Output: ["morango", "banana"]
```
> 0.8: `splice()`: Altera o conteúdo de um array, removendo ou substituindo elementos existentes e/ou adicionando novos elementos.
```javascript
frutas.splice(1, 1, "abacaxi");
console.log(frutas); // Output: ["morango", "abacaxi", "laranja"]
```

> 0.9: `forEach()`: Executa uma função para cada elemento do array.
```javascript
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Output:
// "morango"
// "abacaxi"
// "laranja"
```

> 0.10: `map()`: Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
```javascript
let frutasEmMaiusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log(frutasEmMaiusculas); // Output: ["MORANGO", "ABACAXI", "LARANJA"]
```

### Array multidimensional (matriz)
- Um array multidimensional é um array que contém outros arrays como elementos. Em JavaScript, isso é comumente usado para criar matrizes.
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
- Para acessar um elemento específico em uma matriz, utilizamos dois índices: o primeiro para a linha e o segundo para a coluna.
```javascriptconsole.log(matriz[0][0]); // Output: 1
console.log(matriz[1][1]); // Output: 5
console.log(matriz[2][2]); // Output: 9
```
- Podemos também usar loops para percorrer uma matriz.
```javascript
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
```

#### Tres ou mais dimensões
- Em JavaScript, é possível criar arrays com mais de duas dimensões, embora seja menos comum. Por exemplo, um array tridimensional pode ser representado como um array de arrays de arrays
```javascript
let array3D = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
console.log(array3D); // Output: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
```
- Para acessar um elemento específico em um array tridimensional, utilizamos três índices: o primeiro para a primeira dimensão, o segundo para a segunda dimensão e o terceiro para a terceira dimensão.
```javascript
console.log(array3D[0][0][0]); // Output: 1
console.log(array3D[0][1][1]); // Output: 4
console.log(array3D[1][0][1]); // Output: 6
```

### Convertendo entre strings e arrays
- Para converter uma string em um array, podemos usar o método `split()`, que divide a string em partes com base em um separador especificado.
```javascript
let minhaString = "Olá, mundo!";
let arrayDePalavras = minhaString.split(" ");
console.log(arrayDePalavras); // Output: ["Olá,", "mundo!"]
```
- Para converter um array em uma string, podemos usar o método `join()`, que une os elementos do array em uma string, usando um separador especificado.
```javascript
let arrayDeFrutas = ["maçã", "banana", "laranja"];
let stringDeFrutas = arrayDeFrutas.join(", ");
console.log(stringDeFrutas); // Output: "maçã, banana, laranja
```

> Obs: unshift() e shift() funciona exatamente do mesmo modo que push() e pop(), respectivamente, exceto que eles funcionam no começo da array, não no final.


> Obs:
``` javascript
var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana

```

> concat() é um método que pode ser usado para combinar dois ou mais arrays em um novo array.
```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // Output: [1, 2, 3, 4, 5, 6]
```
> Join() é um método que pode ser usado para unir os elementos de um array em uma string, usando um separador especificado.
```javascript
let arrayDeFrutas = ["maçã", "banana", "laranja"];
let stringDeFrutas = arrayDeFrutas.join(", ");
console.log(stringDeFrutas); // Output: "maçã, banana, laranja"
```

> includes() é um método que pode ser usado para verificar se um array contém um determinado elemento, retornando true ou false.
```javascript
let arrayDeFrutas = ["maçã", "banana", "laranja"];
console.log(arrayDeFrutas.includes("banana")); // Output: true
console.log(arrayDeFrutas.includes("uva")); // Output: false
```


