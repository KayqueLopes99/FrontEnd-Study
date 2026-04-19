## Console em JavaScript

> Definição

O `console` é um objeto do JavaScript usado para **exibir informações, depurar código e analisar dados** durante o desenvolvimento.
Ele é muito utilizado no navegador e também em ambientes como Node.js.

- Sintaxe básica

```javascript
console.metodo(valor);
```

* `console` → objeto de saída/debug
* `metodo` → ação (log, error, warn, etc.)
* `valor` → dado que será exibido

- Principais métodos

### 1. console.log()

Exibe mensagens comuns no console.

```javascript
console.log("Olá mundo");
```

---

### 2. console.error()

Exibe mensagens de erro.

```javascript
console.error("Ocorreu um erro!");
```

---

### 3. console.warn()

Exibe avisos.

```javascript
console.warn("Atenção!");
```

---

### 4. console.info()

Exibe informações.

```javascript
console.info("Informação importante");
```

---

### 5. console.table()

Mostra dados em formato de tabela.

```javascript
const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 30 }
];

console.table(usuarios);
```

---

### 6. console.time() e console.timeEnd()

Usado para medir o tempo de execução de um trecho de código.

```javascript
console.time("tempo");

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

console.timeEnd("tempo");
```

---

### 7. console.clear()

Limpa o console.

```javascript
console.clear();
```

> Variações do console.log()

### Múltiplos valores

```javascript
console.log("Nome:", "Kayque", "Idade:", 20);
```

### Variáveis

```javascript
let nome = "Kayque";
console.log(nome);
```

### Template string

```javascript
let nome = "Kayque";
console.log(`Nome: ${nome}`);
```

### Objetos

```javascript
let pessoa = { nome: "Kayque", idade: 20 };
console.log(pessoa);
```

- Resumo

* `console` é usado para **debug e saída de dados**
* Possui vários métodos além do `log`
* Essencial para desenvolvimento e testes de código

---