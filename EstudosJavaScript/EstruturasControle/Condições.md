### Estruturas Condicionais
- As estruturas condicionais permitem que o programa tome decisões com base em condições específicas. Em JavaScript, as principais estruturas condicionais são `if`, `else if`, `else` e o operador ternário.

- Ternario é uma forma concisa de escrever uma expressão condicional. Ele é útil para atribuir valores a variáveis com base em uma condição, sem a necessidade de usar uma estrutura `if` completa.
> Sintaxe do operador ternário:
```javascript
condição ? expressão_se_verdadeira : expressão_se_falsa;
```



#### 1. `if`
- A estrutura `if` é usada para executar um bloco de código se uma condição for verdadeira
```javascript
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

#### 2. `else if`
- A estrutura `else if` é usada para verificar múltiplas condições. Se a primeira condição for falsa, o programa verifica a próxima condição.
```javascript
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
```

#### 3. `else`
- A estrutura `else` é usada para executar um bloco de código se todas as condições anteriores forem falsas.
```javascript
let temperatura = 30;
if (temperatura < 20) {
    console.log("Está frio.");
} else {
    console.log("Está quente.");
}


// Valor atribuído à variável mensagem: “Pode passar”
semaforo = "verde";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}

// Valor atribuído à variável mensagem: “Pare”
semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}

// Valor atribuído à variável mensagem: “Atenção”
semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem = "Pare";
} else {
    mensagem = "Atenção";
}

// Valor impresso no console: “Usuário autenticado”
username = "usuario123";
password = "123456";

if (username == "usuario123" && password == "123456") {
    console.log("Usuário autenticado");
} else {
    console.log("Login e/ou senha incorrretos");
}

// Valor impresso no console: “CPF válido”
cpf = "123.456.678.01";

if (cpf.length == 14) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}

// Usuário direcionado para a página: “homejovem.html”
idade = "16";

if (idade >= 18) {
    window.location.href = "homeprincipal.html";
} else if (idade < 18 && idade >= 15) {
    window.location.href = "homejovem.html";
} else {
    window.location.href = "homeinfantil.html";
}

```

> Sintaxe geral:
```javascript
if (condição) {
    // código a ser executado se a condição for verdadeira
} else if (outra_condição) {
    // código a ser executado se a outra condição for verdadeira
} else {
    // código a ser executado se todas as condições anteriores forem falsas
}
```