## Metodos de String
Em JavaScript, métodos de string são funções embutidas que nos permitem manipular textos facilmente. **Um detalhe crucial:** métodos de string não modificam a string original (strings são imutáveis em JS); eles sempre retornam uma *nova* string.

> Template strings:
```javascript
const nome = "Kayque";
const saudacao = `Olá, ${nome}! Bem-vindo ao mundo do JavaScript!`;
console.log(saudacao); // Resultado: "Olá, Kayque! Bem-vindo ao mundo do JavaScript!"
```



---
### 1. `toUpperCase()`
* **Definição:** Converte todos os caracteres da string para letras maiúsculas.
* **Sintaxe:** `string.toUpperCase()`
* **Exemplo:**
```javascript
const texto = "olá mundo";
console.log(texto.toUpperCase()); // Resultado: "OLÁ MUNDO"
```

### 2. `toLowerCase()`
* **Definição:** Converte todos os caracteres da string para letras minúsculas. Excelente para padronizar dados (como e-mails de usuários) antes de salvá-los.
* **Sintaxe:** `string.toLowerCase()`
* **Exemplo:**
```javascript
const email = "Kayque@Exemplo.com";
console.log(email.toLowerCase()); // Resultado: "kayque@exemplo.com"
```

### 3. `trim()`
* **Definição:** Remove os espaços em branco do início e do final da string. Muito usado ao capturar dados de formulários onde o usuário pode ter digitado espaços sem querer.
* **Sintaxe:** `string.trim()`
* **Exemplo:**
```javascript
const usuario = "   kayque_dinamic   ";
console.log(usuario.trim()); // Resultado: "kayque_dinamic"
```

### 4. `includes()`
* **Definição:** Verifica se a string contém um determinado texto. Retorna um valor Booleano (`true` ou `false`). É *case-sensitive* (diferencia maiúsculas de minúsculas).
* **Sintaxe:** `string.includes(termoDeBusca)`
* **Exemplo:**
```javascript
const frase = "Estudando JavaScript e React";
console.log(frase.includes("JavaScript")); // Resultado: true
console.log(frase.includes("Python"));     // Resultado: false
```

### 5. `indexOf()`
* **Definição:** Retorna a posição (índice) da *primeira* ocorrência de um texto específico. Se o texto não for encontrado, retorna `-1`. Lembre-se: em JS, a contagem começa no zero.
* **Sintaxe:** `string.indexOf(termoDeBusca)`
* **Exemplo:**
```javascript
const palavra = "desenvolvedor";
console.log(palavra.indexOf("v")); // Resultado: 5
console.log(palavra.indexOf("z")); // Resultado: -1
```

### 6. `startsWith()`
* **Definição:** Verifica se a string começa com os caracteres especificados. Retorna `true` ou `false`.
* **Sintaxe:** `string.startsWith(termo)`
* **Exemplo:**
```javascript
const url = "https://meusite.com";
console.log(url.startsWith("https")); // Resultado: true
```

### 7. `endsWith()`
* **Definição:** Verifica se a string termina com os caracteres especificados. Retorna `true` ou `false`.
* **Sintaxe:** `string.endsWith(termo)`
* **Exemplo:**
```javascript
const arquivo = "documento.pdf";
console.log(arquivo.endsWith(".pdf")); // Resultado: true
```

### 8. `slice()`
* **Definição:** Extrai uma parte da string com base em índices de início e fim, retornando essa parte como uma nova string. O índice final não é incluído na extração. Aceita valores negativos para contar de trás para frente.
* **Sintaxe:** `string.slice(indiceInicio, indiceFim)`
* **Exemplo:**
```javascript
const texto = "Aprender JavaScript é legal";
console.log(texto.slice(9, 19)); // Resultado: "JavaScript"
console.log(texto.slice(-5));    // Resultado: "legal"
```

### 9. `substring()`
* **Definição:** Muito semelhante ao `slice()`, pois também extrai partes da string. A principal diferença é que o `substring()` não aceita índices negativos (trata-os como `0`).
* **Sintaxe:** `string.substring(indiceInicio, indiceFim)`
* **Exemplo:**
```javascript
const linguagem = "JavaScript";
console.log(linguagem.substring(0, 4)); // Resultado: "Java"
```

### 10. `replace()`
* **Definição:** Substitui a *primeira* ocorrência de um texto especificado por outro texto.
* **Sintaxe:** `string.replace(termoAntigo, termoNovo)`
* **Exemplo:**
```javascript
const frase = "Eu gosto de Java";
console.log(frase.replace("Java", "JavaScript")); // Resultado: "Eu gosto de JavaScript"
```

### 11. `replaceAll()`
* **Definição:** Substitui *todas* as ocorrências de um texto especificado por outro texto. (Adicionado nas versões mais recentes do JS).
* **Sintaxe:** `string.replaceAll(termoAntigo, termoNovo)`
* **Exemplo:**
```javascript
const clima = "chove chuva chove sem parar";
console.log(clima.replaceAll("chove", "cai")); // Resultado: "cai chuva cai sem parar"
```

### 12. `split()`
* **Definição:** Divide a string em um Array de strings, separando o texto a partir de um padrão ou caractere especificado (como espaços, vírgulas, etc). É a ponte perfeita entre Strings e Arrays.
* **Sintaxe:** `string.split(separador)`
* **Exemplo:**
```javascript
const listaCompras = "maçã,banana,uva";
const arrayFrutas = listaCompras.split(",");
console.log(arrayFrutas); // Resultado: ["maçã", "banana", "uva"]

const nomeCompleto = "Kayque Dinamic";
console.log(nomeCompleto.split(" ")); // Resultado: ["Kayque", "Dinamic"]
```

### 13. `concat()`
* **Definição:** Junta duas ou mais strings, retornando uma nova string. Embora seja possível usar o operador `+` para concatenar strings, o método `concat()` é uma alternativa clara e eficiente.
* **Sintaxe:** `string1.concat(string2, string3, ...)`
* **Exemplo:**
```javascript
const saudacao = "Olá, ";   
const nome = "Kayque!";
console.log(saudacao.concat(nome)); // Resultado: "Olá, Kayque!"
```

### 14. `length`
* **Definição:** Retorna o número de caracteres em uma string, incluindo espaços e caracteres especiais. É uma propriedade, não um método, então não leva parênteses.
* **Sintaxe:** `string.length`
* **Exemplo:**
```javascript
const frase = "JavaScript é incrível!";
console.log(frase.length); // Resultado: 24
``` 