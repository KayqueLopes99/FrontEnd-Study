## Convertendo strings para números
- Para converter uma string em um número, podemos usar a função `Number()`, o operador unário `+` ou as funções `parseInt()` e `parseFloat()`. 

```javascript
const str1 = "42";
const num1 = Number(str1); // Usando Number()
const num2 = +str1;        // Usando operador unário +
const num3 = parseInt(str1); // Usando parseInt()
const num4 = parseFloat(str1); // Usando parseFloat()   
console.log(num1, num2, num3, num4); // Resultado: 42 42 42 42
``` 
