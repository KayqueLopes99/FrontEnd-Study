### Conhecendo os Map e Set em JavaScript
Em JavaScript, `Map` e `Set` são estruturas de dados que fazem parte do ECMAScript 2015 (ES6) e oferecem maneiras eficientes de armazenar e manipular coleções de dados.

#### Map
Um `Map` é uma coleção de pares chave-valor, onde as chaves podem ser de qualquer tipo (objetos, funções, etc.). Ele mantém a ordem de inserção dos elementos e permite acessar os valores usando as chaves.

```javascript
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
console.log(myMap.get('name')); // Output: Alice
console.log(myMap.has('age')); // Output: true
myMap.delete('age');
console.log(myMap.has('age')); // Output: false
```
> Comandos principais do Map:
- `set(chave, valor)`: Adiciona ou atualiza um par chave-valor.
- `get(chave)`: Retorna o valor associado à chave.
- `has(chave)`: Verifica se a chave existe no Map.
- `delete(chave)`: Remove o par chave-valor do Map.
- `size`: Retorna o número de pares chave-valor no Map.
- `clear()`: Remove todos os pares chave-valor do Map.
- `keys()`, `values()`, `entries()`: Retornam iteradores para as chaves, valores ou pares chave-valor, respectivamente.
- `forEach(callback)`: Executa uma função para cada par chave-valor no Map.

- Construtor do Map:
```javascript
const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
```

> Comandos:
- `Map.prototype.set()`: Adiciona ou atualiza um par chave-valor.
- `Map.prototype.get()`: Retorna o valor associado à chave.
- `Map.prototype.has()`: Verifica se a chave existe no Map.
- `Map.prototype.delete()`: Remove o par chave-valor do Map.
- `Map.prototype.clear()`: Remove todos os pares chave-valor do Map.
- `Map.prototype.keys()`: Retorna um iterador para as chaves do Map.
- `Map.prototype.values()`: Retorna um iterador para os valores do Map.
- `Map.prototype.entries()`: Retorna um iterador para os pares chave-valor do Map.
- `Map.prototype.forEach()`: Executa uma função para cada par chave-valor no Map.
- `Map.prototype.size`: Retorna o número de pares chave-valor no Map.
- `Map.prototype[@@iterator]()`: Retorna um iterador para os pares chave-valor do Map.

> Obs: NaN no JavaScript significa "Not a Number" (Não é um Número) e é um valor especial retornado quando uma operação aritmética falha, como divisões por zero ou conversões de texto inválidas

- Mesclar dois Maps:
```javascript
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['b', 3], ['c', 4]]);
const mergedMap = new Map([...map1, ...map2]);
console.log(mergedMap); // Output: Map { 'a' => 1, ' b' => 3, 'c' => 4 }
```

#### Set
- Um `Set` é uma coleção de valores únicos, ou seja, não permite valores duplicados. Ele também mantém a ordem de inserção dos elementos.

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Não será adicionado, pois já existe
console.log(mySet.has(1)); // Output: true
mySet.delete(1);
console.log(mySet.has(1)); // Output: false
```

> Comandos principais do Set:
- `add(valor)`: Adiciona um valor ao Set.
- `has(valor)`: Verifica se o valor existe no Set.
- `delete(valor)`: Remove um valor do Set.
- `size`: Retorna o número de valores no Set.
- `clear()`: Remove todos os valores do Set.
- `values()`: Retorna um iterador para os valores do Set.
- `forEach(callback)`: Executa uma função para cada valor no Set.

- Construtor do Set:
```javascript
const mySet = new Set([1, 2, 3]);
```




















