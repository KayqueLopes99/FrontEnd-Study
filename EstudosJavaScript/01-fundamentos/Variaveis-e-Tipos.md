### O Conceito de Variáveis
- Em JavaScript podemos declarar variáveis de duas formas atualmente, com let ou var, sendo let a forma recomendada. let permite declarar variáveis que existem apenas no escopo no qual desejamos utilizá-las. Esse comportamento é diferente quando utilizamos var, que cria variáveis globais e que podem ser acessadas em qualquer local no arquivo ou função onde foram declaradas.

Uma variável é um **espaço na memória com um nome**, usado para guardar um valor.

> Sintaxe:
```javascript
let | var [ identificador ] [ = valor | expressão ]

// identificador: nome da variável

// valor: valor inicial da variável, que pode ser o resultado de uma expressão (opcional)
```


Pense assim:
* você **armazena um valor**
* e depois **acessa esse valor pelo nome da variável**

```javascript
let nome = "Kayque";
console.log(nome);
```

---

### Tipos de declaração

* **`const`** → valor **não muda**
- O valor de uma constante não pode ser modificado. No JavaScript declaramos constantes com a palavra reservada const. 

``` javascript
const [ identificador ] = [ valor | expressão ]
// identificador: nome da constante
// valor: valor inicial que pode ser o resultado de uma expressão (opcional)
```


* **`let`** → valor **pode mudar**
* **`var`** → antigo (evite)

```javascript
const nome = "Kayque"; // não muda
let idade = 20;        // pode mudar

idade = 21;
```

* Use **`const` por padrão**
* Use **`let` se precisar alterar**

---

### Tipos de Dados 
JavaScript divide os dados em dois grupos:

> Primitivos (simples)

Guardam **um único valor**

> Objetos (complexos)

Guardam **vários valores**
- 

---

### Tipos mais usados

| Tipo          | O que é             | Exemplo              |
| ------------- | ------------------- | -------------------- |
| **String**    | Texto               | `"Kayque"`           |
| **Number**    | Número              | `10`, `3.14`         |
| **Boolean**   | Verdadeiro ou falso | `true`, `false`      |
| **Undefined** | Sem valor definido  | `let x;`             |
| **Null**      | Vazio intencional   | `let y = null;`      |
| **Object**    | Estrutura de dados  | `{ nome: "Kayque" }` |
| **Array**     | Lista de valores    | `[1, 2, 3]`          |
| **BigInt** | Números inteiros muito grandes | `9007199254740991n` |
| **Symbol** | Identificador único | `Symbol('id')` |


> Exemplos rápidos

```javascript
let texto = "JavaScript";   // String
let numero = 100;           // Number
let ativo = true;           // Boolean
let vazio;                  // Undefined
let nada = null;            // Null

let pessoa = { nome: "Kayque" }; // Object
let lista = [1, 2, 3];           // Array
let grande = 9007199254740991n; // BigInt
let id = Symbol('id');           // Symbol

// exemplo de lista:
let frutas = "maçã, banana, laranja".split(", ");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

- Verificando tipo com `typeof`.

```javascript
console.log(typeof "texto"); // string
console.log(typeof 10);      // number
console.log(typeof true);    // boolean
```

- Diferença importante

* **undefined** → variável sem valor
* **null** → valor definido como vazio

---

### Dicas importantes

* Use **nomes claros** → `nomeUsuario`, `idadeAluno`
* Prefira **const**
* Evite `var`
* JS é **tipagem dinâmica** (o tipo pode mudar)

- Resumo direto

* Variável = guarda valor
* `const` e `let` são padrão
* Tipos principais: string, number, boolean, object, array
* JS não exige tipo fixo

---

### Na prática
#### Exemplo 1
Variáveis podem armazenar diferentes tipos de valores como textos ou números:

```javascript
let tipoNumber = 12
let tipoString1 = 'Texto entre aspas simples'
let tipoString2 = "Texto entre aspas duplas"
let tipoNull = null
let tipoUndefined = undefined
let tipoObject = { nome: 'José da Silva', idade: 18 }
let tipoBoolean = true || false
```

#### Exemplo 2
É possível atribuir a uma variável o resultado de uma expressão:

```javascript
let totalBruto = 5000
let desconto = 0.1

let totalLiquido = totalBruto - (totalBruto * desconto)
```

> As variáveis declaradas com let dentro de blocos if ou for não podem ser acessadas de fora destes blocos.

> Uma variável, constante ou função é undefined quando ela ainda não foi declarada. Quando uma variável é utilizada sem que tenha sido declarada o script é encerrado com um erro. 


### Observações 

```` java script
// tipagem double vs float
let num1 = 0.1
let num2 = 0.2

console.log(num1 + num2) // resultado esperado: 0.3, mas o resultado é 0.30000000000000004

// para resolver esse problema, podemos usar a função toFixed() para arredondar o resultado para um número específico de casas decimais
let resultado = (num1 + num2).toFixed(2)
console.log(resultado) // resultado: 0.30

// outra forma de resolver esse problema é multiplicar os números por 100, realizar a operação e depois dividir o resultado por 100
let resultado2 = ((num1 * 100) + (num2 * 100)) / 100
console.log(resultado2) // resultado: 0.3
````