# Introdução ao CSS
## Definição

CSS (**Cascading Style Sheets**) é a linguagem usada para **estilizar páginas HTML**.
Com ele você controla cores, tamanhos, espaçamentos e layout.
- Linguagem de estilos.

> O que pode ser criado usando css:
- Layouts e estilização das paginas web.
- Animações e transições.
- Criar formas geometricas e efeitos visuais.
- Filtros.

> Propriedade e Valores:
- Um propriedade é uma caracteristica de um elemento HTML, como cor, tamanho, espaçamento, etc.
- Um valor é o que você quer aplicar a essa propriedade, como "red" para cor, "16px" para tamanho, "10px" para espaçamento, etc.

---

## Sintaxe básica

```css
seletor {
  propriedade: valor;
}
```

- Exemplo

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

> Depurando o CSS
- Para depurar o CSS, você pode usar as ferramentas de desenvolvedor do navegador (geralmente acessadas com F12). Elas permitem inspecionar elementos, ver quais estilos estão sendo aplicados e modificar o CSS em tempo real.
- isso é feito com o Dev Tools (Ferramentas de Desenvolvedor) são essenciais para identificar problemas de estilo, verificar a cascata e entender como os estilos estão sendo aplicados aos elementos da página.












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
