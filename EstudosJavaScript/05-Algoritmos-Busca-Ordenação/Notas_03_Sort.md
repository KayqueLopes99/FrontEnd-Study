## Sort():
- O método `sort()` é uma função embutida em JavaScript que ordena os elementos de um array in-place e retorna o array ordenado.
- Por padrão, o `sort()` converte os elementos em strings e os ordena em ordem lexicográfica (alfabética). Para ordenar números corretamente, é necessário fornecer uma função de comparação.

- Exemplo de ordenação de números:
```javascript
const numeros = [5, 2, 9, 1, 5];
numeros.sort((a, b) => a - b); // Ordena em ordem crescente
console.log(numeros); // Saída: [1, 2, 5, 5, 9]
numeros.sort((a, b) => b - a); // Ordena em ordem decrescente
console.log(numeros); // Saída: [9, 5, 5, 2, 1]
```

- Sintaxe:
```javascript
array.sort([compareFunction])
```
- `compareFunction` é uma função opcional que define a ordem de classificação. Se omitida, os elementos são convertidos em strings e ordenados de acordo com a ordem Unicode.