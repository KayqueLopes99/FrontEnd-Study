## Algoritmos de ordenação
- São usados para organizar uma coleção de dados em uma ordem específica (crescente ou decrescente).

### Ordenação por inserção: (Insertion Sort)

- Percorre a coleção de dados e insere cada item na posição correta em relação aos itens anteriores.
- Tem complexidade de tempo O(n^2) no pior caso, mas é eficiente para coleções pequenas ou quase ordenadas.

- Exemplo:
```javascript
function ordenacaoPorInsercao(arr) {
  for (let i = 1; i < arr.length; i++) {
    let chave = arr[i]; // chave = 2
    let j = i - 1; //arra[0] = 5

    while (j >= 0 && arr[j] > chave) { // 0 >= 0 && 5 > 2
      arr[j + 1] = arr[j]; // arr[1] = 5
      j--; // j = -1
    }
    arr[j + 1] = chave; // arr[0] = 2
  }
  return arr; // Retorna o array ordenado
}
const numeros = [5, 2, 9, 1, 5];
console.log(ordenacaoPorInsercao(numeros)); // Saída: [1, 2, 5, 5, 9]
```

### Ordenação por Fusão (Merge Sort):
- Divide a coleção de dados em partes menores, ordena cada parte e depois as combina para formar a coleção ordenada.

- Tem complexidade de tempo O(n log n) em todos os casos.   
- Exemplo:
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Retorna o array se tiver um ou nenhum elemento
  }

  const meio = Math.floor(arr.length / 2); // Encontra o meio do array [5, 2, 9, 1, 5] => meio = 2
  const esquerda = mergeSort(arr.slice(0, meio)); // Ordena a metade esquerda [5, 2]
  const direita = mergeSort(arr.slice(meio)); // Ordena a metade direita [9, 1, 5]

  return merge(esquerda, direita); // Combina as metades ordenadas [2, 5] e [1, 5, 9]
}



function merge(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]); // Adiciona o elemento da esquerda ao resultado
      i++;
    } else {
      resultado.push(direita[j]); // Adiciona o elemento da direita ao resultado
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j)); // Combina os elementos restantes
}

const numeros = [5, 2, 9, 1, 5];
console.log(mergeSort(numeros)); // Saída: [1, 2, 5, 5, 9]
``` 

### Bubble Sort

- Compara cada par de itens adjacentes e os troca se estiverem na ordem errada.

- Tem complexidade de tempo O(n^2) no pior caso, mas é eficiente para coleções pequenas ou quase ordenadas.

- Exemplo:
```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let trocado;

  do {
    trocado = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Troca os elementos
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        trocado = true; // Indica que houve uma troca
      }
    }
    n--; // Reduz o tamanho da comparação
  } while (trocado); // Continua enquanto houver trocas

  return arr; // Retorna o array ordenado
}
const numeros = [5, 2, 9, 1, 5];
console.log(bubbleSort(numeros)); // Saída: [1, 2, 5, 5, 9]
```

### Quick Sort

- Escolhe um elemento como pivô e particiona a coleção de dados em torno do pivô, colocando os elementos menores à esquerda e os maiores à direita. Depois, ordena recursivamente as partições.

- Tem complexidade de tempo O(n log n) no caso médio, mas pode ser O(n^2) no pior caso (quando o pivô é o menor ou maior elemento).

- Exemplo:
```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Retorna o array se tiver um ou nenhum elemento
  }

  const pivô = arr[Math.floor(arr.length / 2)]; // Escolhe o pivô
  const menores = arr.filter(x => x < pivô); // Elementos menores que o pivô
  const iguais = arr.filter(x => x === pivô); // Elementos iguais ao pivô
  const maiores = arr.filter(x => x > pivô); // Elementos maiores que o pivô

  return quickSort(menores).concat(iguais).concat(quickSort(maiores)); // Combina os resultados
}
const numeros = [5, 2, 9, 1, 5];
console.log(quickSort(numeros)); // Saída: [1, 2, 5, 5, 9]
```

### Selection Sort
- Encontra o menor elemento da coleção e o coloca na posição correta. Repete esse processo para os elementos restantes.
- Tem complexidade de tempo O(n^2) no pior caso, mas é eficiente para coleções pequenas ou quase ordenadas.
- Exemplo:
```javascript
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume que o menor elemento é o atual

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Atualiza o índice do menor elemento
      }
    }

    // Troca o menor elemento encontrado com o elemento atual
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr; // Retorna o array ordenado
}
const numeros = [5, 2, 9, 1, 5];
console.log(selectionSort(numeros)); // Saída: [1, 2, 5, 5, 9]
```