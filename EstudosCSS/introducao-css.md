# Introdução ao CSS

## Definição

CSS (**Cascading Style Sheets**) é a linguagem usada para **estilizar páginas HTML**.
Com ele você controla cores, tamanhos, espaçamentos e layout.

---

## Sintaxe básica

```css
seletor {
  propriedade: valor;
}
```

---

## Exemplo

```css
body {
  background-color: #000;
  color: #fff;
}
```

---

## Formas de uso

### 1. Inline

```html
<p style="color: red;">Texto vermelho</p>
```

### 2. Interno

```html
<style>
  p {
    color: blue;
  }
</style>
```

### 3. Externo (mais recomendado)

```html
<link rel="stylesheet" href="style.css">
```

---

## Seletores comuns

### Tag

```css
p {
  color: green;
}
```

### Classe

```css
.texto {
  color: blue;
}
```

### ID

```css
#titulo {
  color: red;
}
```

---

## Conceitos importantes

* CSS define o **visual**
* Funciona junto com HTML
* Usa o conceito de **cascata** (prioridade de estilos)


## Resumo

* CSS = aparência da página
* Usa seletores e propriedades
* Deixa o site bonito e organizado

---
