Perfeito. Com base nas suas anotações, organizei uma explicação introdutória de **CSS** de forma didática, com **definição**, **sintaxe** e **exemplo** para cada comando.

---

# Introdução ao CSS

CSS (**Cascading Style Sheets**) é a linguagem usada para **estilizar páginas web**, ou seja, definir cores, tamanhos, fontes, espaçamentos e aparência dos elementos em um documento HTML.

---

# 1. Tag `<style>` no HTML

## Definição

A tag `<style>` permite escrever código CSS **dentro do próprio arquivo HTML**.

## Sintaxe

```html
<style>
    seletor {
        propriedade: valor;
    }
</style>
```

## Exemplo

```html
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
```

Nesse exemplo, todos os títulos `<h1>` ficarão azuis.

---

# 2. Aplicação de estilos

## Definição

Aplicar estilos significa alterar a aparência de elementos HTML usando CSS.

## Sintaxe

```css
seletor {
    propriedade: valor;
}
```

## Exemplo

```css
p {
    color: red;
}
```

Todos os parágrafos `<p>` ficarão vermelhos.

---

# 3. Conectar CSS com HTML (arquivo externo)

## Definição

É a forma mais usada. O CSS fica em um arquivo separado (`style.css`) e é conectado ao HTML.

## Sintaxe

```html
<link rel="stylesheet" href="style.css">
```

## Exemplo

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

Isso conecta o arquivo `style.css` ao HTML.

---

# 4. Comando `<link>` (arquivo externo)

## Definição

A tag `<link>` faz a ligação entre o HTML e outro arquivo externo, geralmente CSS.

## Sintaxe

```html
<link rel="stylesheet" href="nome-do-arquivo.css">
```

## Exemplo

```html
<link rel="stylesheet" href="estilo.css">
```

---

# Principais propriedades CSS

---

## 5. `color`

## Definição

Define a **cor do texto**.

## Sintaxe

```css
color: valor;
```

## Exemplo

```css
h1 {
    color: green;
}
```

Resultado: texto verde.

---

## 6. `background-color`

## Definição

Define a **cor de fundo** de um elemento.

## Sintaxe

```css
background-color: valor;
```

## Exemplo

```css
body {
    background-color: lightgray;
}
```

Resultado: fundo cinza claro.

---

## 7. `font-size`

## Definição

Define o **tamanho da fonte**.

## Sintaxe

```css
font-size: valor;
```

## Exemplo

```css
p {
    font-size: 20px;
}
```

Resultado: texto com 20 pixels.

---

## 8. `font-weight`

## Definição

Define a **espessura** da fonte (normal, negrito).

## Sintaxe

```css
font-weight: valor;
```

## Exemplo

```css
h1 {
    font-weight: bold;
}
```

Resultado: texto em negrito.

Valores comuns:

* `normal`
* `bold`
* `100 até 900`

---

## 9. `text-align` 

## Definição

Alinha o texto.

## Sintaxe

```css
text-align: valor;
```

## Exemplo

```css
h1 {
    text-align: center;
}
```

Resultado: texto centralizado.

Valores:

* `left`
* `center`
* `right`
* `justify`

---

## 10. `font-family`

## Definição

Define a **fonte** do texto.

## Sintaxe

```css
font-family: nome-da-fonte;
```

## Exemplo

```css
body {
    font-family: Arial, sans-serif;
}
```

Resultado: usa Arial; se não existir, usa uma fonte sem serifa.

---

# Exemplo completo

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Meu Site</h1>
    <p>Aprendendo CSS</p>
</body>
</html>
```

Arquivo `style.css`:

```css
body {
    background-color: lightblue;
    font-family: Arial;
}

h1 {
    color: navy;
    text-align: center;
}

p {
    font-size: 18px;
    font-weight: bold;
}
```

Resultado:

* fundo azul claro
* título azul escuro centralizado
* texto em negrito tamanho 18px

Esse é o básico para começar bem em CSS.
