## Medidas Relativas e Links no CSS

## 1. Tipografia Básica (`font-family` e `font-size`)

O controle tipográfico no CSS é fundamental para a legibilidade e estética da interface.

* **`font-family`**: Define a família tipográfica (a fonte em si) que será aplicada ao texto. É uma boa prática declarar uma "pilha" de fontes (font stack), incluindo uma fonte genérica no final, para garantir que o navegador tenha uma opção de fallback (reserva) caso a fonte principal não esteja instalada no dispositivo do usuário.
* *Sintaxe:* `font-family: 'Nome da Fonte', Arial, sans-serif;`


* **`font-size`**: Define o tamanho da fonte. Pode ser especificado em unidades absolutas (como `px` - pixels) ou relativas (como `%`, `em`, `rem`).

## 2. A Estratégia do `:root` e os `62.5%`

O trecho de código utilizando a pseudo-classe `:root` é uma das técnicas mais populares no desenvolvimento front-end para facilitar o uso de unidades relativas (`rem` e `em`).

```css
:root {
    font-size: 62.5%;
}

```

**Como funciona:**

1. **O seletor `:root**`: Ele seleciona o elemento raiz do documento (no caso do HTML, a própria tag `<html>`). É o nível mais alto de escopo no CSS.
2. **O padrão dos navegadores**: Por padrão, a maioria dos navegadores define o tamanho da fonte raiz como **16px**.
3. **A Matemática (O Truque)**: Trabalhar mentalmente com múltiplos de 16px para definir tamanhos relativos é complexo (ex: para ter 24px, você precisaria usar `1.5rem`). Ao aplicar `font-size: 62.5%` no `:root`, você está dizendo ao navegador para calcular 62.5% do tamanho padrão de 16px.
* *Cálculo:* `16px * 0,625 = 10px`.


4. **O Resultado**: A partir desse momento, a medida base do seu documento passa a ser **10px**. Isso torna o uso de unidades como `em` ou `rem` extremamente intuitivo, pois basta dividir o valor desejado em pixels por 10.
* Se você quer um texto de `24px`, basta usar `2.4em` ou `2.4rem`.
* Se você quer um texto de `18px`, usa `1.8em`.



## 3. Links e Pseudo-classes

As pseudo-classes (indicadas pelo uso de dois-pontos `:`) não selecionam um elemento por si só, mas sim um **estado específico** desse elemento. Isso é amplamente utilizado em tags de âncora (`<a>`), que representam os links.

```css
/* Estado Padrão */
a {
    font-size: 2.4em; /* Corresponde a 24px devido ao truque do 62.5% */
    text-align: center;
    color: rgb(255, 0, 0); /* Vermelho */
}

/* Estado: Visitado */
a:visited {
    color: rgb(22, 14, 175); /* Azul escuro - Indica que o usuário já acessou este link no passado */
}

/* Estado: Interação (Mouse por cima) */
a:hover {
    color: coral; /* Laranja claro - Fornece feedback visual quando o cursor passa sobre o link */
}

```

* **`a`**: Aplica o estilo ao link em seu estado natural.
* **`:visited`**: Aplica o estilo apenas se o navegador registrar que a URL de destino já consta no histórico de navegação do usuário.
* **`:hover`**: Aplica o estilo momentaneamente enquanto o cursor do mouse (ou outro dispositivo de apontamento) estiver posicionado sobre o elemento.

## 4. Ligação entre HTMLs

O código CSS estiliza o elemento, mas é no HTML que a ligação (hyperlink) de fato ocorre. Para conectar uma página HTML a outra, utilizamos a tag `<a>` associada ao atributo obrigatório `href` (Hypertext Reference).

**Sintaxe HTML:**

```html
<!-- Ligando a um arquivo na mesma pasta do projeto -->
<a href="sobre.html">Ir para a página Sobre</a>

<!-- Ligando a um site externo -->
<a href="https://www.google.com">Acessar o Google</a>

```

O valor inserido dentro do `href` é o caminho que o navegador deve seguir quando o usuário clicar no texto definido entre a abertura `<a>` e o fechamento `</a>` da tag.

---