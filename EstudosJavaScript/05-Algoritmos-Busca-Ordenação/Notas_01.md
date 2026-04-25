## Algoritmos de busca
- São usados para encontrar um item específico em uma coleção de dados.

> Busca Linear:

- Percorre cada item da coleção até encontrar o item desejado ou chegar ao final da coleção.
- Tem complexidade de tempo O(n), onde n é o número de itens na coleção.

- Exemplo:
```javascript
function buscaLinear(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i; // Retorna o índice do item encontrado
    }
  }
  return -1; // Retorna -1 se o item não for encontrado
}

const numeros = [1, 2, 3, 4, 5];
console.log(buscaLinear(numeros, 3)); // Saída: 2
console.log(buscaLinear(numeros, 6)); // Saída: -1
```

> Busca Binária:

- Requer que a coleção de dados esteja ordenada.
- Divide a coleção em duas partes e compara o item do meio com o item desejado.
- Se o item do meio for igual ao item desejado, a busca é concluída.
- Se o item do meio for maior, a busca continua na metade inferior da coleção.
- Se o item do meio for menor, a busca continua na metade superior da coleção.
- Tem complexidade de tempo O(log n), onde n é o número de itens na coleção.

- Exemplo:
```javascript
function buscaBinaria(arr, item) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (arr[meio] === item) {
      return meio; // Retorna o índice do item encontrado
    } else if (arr[meio] < item) {
      esquerda = meio + 1; // Continua na metade superior
    } else {
      direita = meio - 1; // Continua na metade inferior
    }
  }
  return -1; // Retorna -1 se o item não for encontrado
}

const numerosOrdenados = [1, 2, 3, 4, 5];
console.log(buscaBinaria(numerosOrdenados, 3)); // Saída: 2
console.log(buscaBinaria(numerosOrdenados, 6)); // Saída: -1
```