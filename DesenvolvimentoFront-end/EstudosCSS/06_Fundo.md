# Fundo dos Elementos — CSS
As propriedades de fundo (`background`) do CSS permitem definir cores, imagens, posicionamento, repetição, tamanho e outras características visuais do fundo de um elemento HTML.

---

## 1. Propriedade `background`
A propriedade `background` é uma forma abreviada de configurar várias propriedades de fundo de um elemento.
### Exemplo
```css
div {
    background: blue;
}
```
Também podemos utilizar uma imagem:

```css
div {
    background: url("imagem.jpg");
}
```

A propriedade pode combinar várias configurações:
```css
div {
    background: #222 url("imagem.jpg") center / cover no-repeat;
}
```

Nesse exemplo:

* `#222` → cor de fundo;
* `url("imagem.jpg")` → imagem de fundo;
* `center` → posicionamento;
* `cover` → tamanho da imagem;
* `no-repeat` → não repetir a imagem.

---

# 2. Alterando o Fundo dos Elementos
A propriedade mais básica para alterar o fundo é:

```css
background-color
```
Ela define uma cor para o fundo do elemento.

### Exemplo
```css
div {
    background-color: blue;
}
```

Também podemos utilizar diferentes formatos de cores:

```css
div {
    background-color: red;
}
```

```css
div {
    background-color: #ff0000;
}
```

```css
div {
    background-color: rgb(255, 0, 0);
}
```

```css
div {
    background-color: rgba(255, 0, 0, 0.5);
}
```

No `rgba()`, o último valor representa a opacidade.

* `1` → totalmente opaco
* `0` → totalmente transparente
* `0.5` → 50% de opacidade

---

# 3. Imagem de Fundo
Para colocar uma imagem como fundo, utilizamos:

```css
background-image
```
### Exemplo

```css
div {
    background-image: url("imagem.jpg");
}
```

A imagem será utilizada como plano de fundo do elemento.
Também podemos utilizar uma URL:
```css
div {
    background-image: url("https://exemplo.com/imagem.jpg");
}
```

É importante diferenciar:
```css
background-image
```

de:
```html
<img src="imagem.jpg">
```

O `<img>` representa uma imagem no conteúdo da página.
Já `background-image` utiliza uma imagem como parte da aparência do elemento.

---

# 4. Redimensionando as Imagens de Fundo
A propriedade:
```css
background-size
```

define o tamanho da imagem de fundo.
## `cover`
```css
div {
    background-image: url("imagem.jpg");
    background-size: cover;
}
```

`cover` faz com que a imagem cubra todo o elemento.
A imagem pode ser cortada para preencher completamente o espaço.
É muito utilizada em:

* banners;
* cabeçalhos;
* seções de páginas;
* telas de apresentação.

---

## `contain`
```css
div {
    background-size: contain;
}
```

`contain` redimensiona a imagem para que ela fique completamente visível dentro do elemento.
Pode sobrar espaço vazio.

### Diferença
```css
background-size: cover;
```
→ Preenche todo o elemento, podendo cortar a imagem.
```css
background-size: contain;
```
→ Mantém toda a imagem visível, podendo deixar espaços vazios.

---

## Tamanho específico
Também podemos definir valores:

```css
div {
    background-size: 300px 200px;
}
```

Nesse caso:
* `300px` → largura;
* `200px` → altura.

Também podemos utilizar porcentagens:

```css
div {
    background-size: 100% 100%;
}
```

---

# 5. Repetição das Imagens de Fundo
A propriedade:
```css
background-repeat
```
define se a imagem de fundo será repetida.
Por padrão, imagens de fundo podem se repetir.

### `repeat`
```css
div {
    background-repeat: repeat;
}
```
Repete a imagem horizontalmente e verticalmente.

---

## `no-repeat`
```css
div {
    background-repeat: no-repeat;
}
```
A imagem aparece apenas uma vez.

---

## `repeat-x`
```css
div {
    background-repeat: repeat-x;
}
```
Repete a imagem apenas na horizontal.

---

## `repeat-y`
```css
div {
    background-repeat: repeat-y;
}
```
Repete a imagem apenas na vertical.

---

# 6. Posicionamento das Imagens de Fundo
A propriedade:
```css
background-position
```
define a posição da imagem dentro do elemento.

### Exemplo
```css
div {
    background-position: center;
}
```

A imagem ficará centralizada.
Podemos utilizar:

```css
background-position: left;
```

```css
background-position: right;
```

```css
background-position: top;
```

```css
background-position: bottom;
```

Também podemos combinar posições:

```css
background-position: center top;
```

Nesse caso:

* `center` → horizontalmente centralizada;
* `top` → posicionada na parte superior.

---

## Valores em pixels

Também podemos definir uma posição específica:

```css
div {
    background-position: 20px 30px;
}
```

O primeiro valor representa a posição horizontal.

O segundo representa a posição vertical.

```text
20px → eixo X
30px → eixo Y
```

---

# 7. Propriedade `background-attachment`
A propriedade:
```css
background-attachment
```
define como a imagem de fundo se comporta durante a rolagem da página.

## `scroll`
```css
div {
    background-attachment: scroll;
}
```
É o comportamento padrão.
O fundo acompanha o elemento durante a rolagem.

---

## `fixed`
```css
div {
    background-attachment: fixed;
}
```
O fundo fica fixo em relação à área de visualização da página.
Um exemplo comum é criar um efeito de fundo fixo:
```css
body {
    background-image: url("fundo.jpg");
    background-attachment: fixed;
}
```
Isso pode produzir um efeito semelhante ao chamado "parallax", dependendo da configuração utilizada.

---

## `local`
```css
div {
    background-attachment: local;
}
```
O fundo acompanha o conteúdo do próprio elemento durante sua rolagem.
É especialmente relevante quando o elemento possui `overflow` e uma área de rolagem própria.

---

# 8. Propriedade `background-origin`

A propriedade:

```css
background-origin
```

define a área do elemento que será utilizada como referência para posicionar a imagem de fundo.

Ela trabalha principalmente com:

* `border-box`
* `padding-box`
* `content-box`

### `border-box`

```css
div {
    background-origin: border-box;
}
```

A imagem considera a área que inclui a borda.

---

### `padding-box`

```css
div {
    background-origin: padding-box;
}
```

A imagem considera a área do `padding`.

É o valor padrão.

---

### `content-box`

```css
div {
    background-origin: content-box;
}
```

A imagem considera apenas a área do conteúdo.

---

# 9. Propriedade `background-clip`

A propriedade:

```css
background-clip
```

define até onde o fundo pode ser desenhado dentro do elemento.

Também utiliza:

* `border-box`
* `padding-box`
* `content-box`

### `border-box`

```css
div {
    background-clip: border-box;
}
```

O fundo pode aparecer também atrás da borda.

É o comportamento padrão.

---

### `padding-box`

```css
div {
    background-clip: padding-box;
}
```

O fundo é limitado à região do `padding`, não sendo desenhado na área da borda.

---

### `content-box`

```css
div {
    background-clip: content-box;
}
```

O fundo fica limitado à área do conteúdo.

---

## `background-clip: text`

Também existe:

```css
h1 {
    background-image: linear-gradient(
        90deg,
        red,
        blue
    );

    background-clip: text;
    color: transparent;
}
```

Nesse caso, o fundo é recortado seguindo o formato do texto.

É bastante utilizado para criar textos com:

* gradientes;
* imagens;
* efeitos visuais.

---

# 10. Mesclagem

A propriedade:

```css
background-blend-mode
```

define como a imagem de fundo será mesclada com a cor ou com outras imagens de fundo.

### Exemplo

```css
div {
    background-color: blue;
    background-image: url("imagem.jpg");
    background-blend-mode: multiply;
}
```

O modo de mesclagem altera visualmente a maneira como os fundos se combinam.

Alguns valores comuns:

```css
background-blend-mode: normal;
```

```css
background-blend-mode: multiply;
```

```css
background-blend-mode: screen;
```

```css
background-blend-mode: overlay;
```

```css
background-blend-mode: darken;
```

```css
background-blend-mode: lighten;
```

Um uso comum é aplicar uma cor sobre uma imagem:

```css
.banner {
    background-image: url("banner.jpg");
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
}
```

Isso pode deixar a imagem mais escura e facilitar a leitura de um texto colocado sobre ela.

---

# 11. Várias Imagens de Fundo

O CSS permite utilizar várias imagens no mesmo elemento.

```css
div {
    background-image:
        url("imagem1.png"),
        url("imagem2.png");
}
```

Cada imagem pode receber configurações diferentes.

```css
div {
    background-image:
        url("frente.png"),
        url("fundo.jpg");

    background-position:
        center,
        center;

    background-size:
        contain,
        cover;

    background-repeat:
        no-repeat,
        no-repeat;
}
```

A primeira imagem fica sobre a segunda.

---

# 12. Conceito para memorizar

Uma forma simples de lembrar as propriedades é:

```text
background
│
├── color       → qual é a cor?
├── image       → qual é a imagem?
├── size        → qual é o tamanho?
├── repeat      → repete?
├── position    → onde fica?
├── attachment  → como se comporta ao rolar?
├── origin      → qual área serve de referência?
├── clip        → até onde o fundo aparece?
└── blend-mode  → como os fundos se misturam?
```
