## Estilização Básica com CSS
#### Cores
- As cores em CSS podem ser definidas de diferentes formas:

	- **Cores predefinidas:** utilizam nomes já reconhecidos pelo CSS, como `red`, `blue`, `green` e `rebeccapurple`.
		```css
		p { color: blue; }
		```

    - O currentColor é uma palavra-chave em CSS que representa o valor atual da propriedade color (a cor do texto) de um elemento

	- **RGB:** define a intensidade de vermelho, verde e azul, com valores de `0` a `255`.
		```css
		p { color: rgb(255, 0, 0); }
		```

	- **RGBA:** funciona como o RGB, mas inclui o canal alfa, que controla a opacidade, de `0` (transparente) a `1` (opaco).
		```css
		p { color: rgba(255, 0, 0, 0.5); }
		```

	- **Hexadecimal:** representa as cores com seis dígitos hexadecimais no formato `#RRGGBB`. Também é possível usar a forma abreviada, como `#f00`.
		```css
		p { color: #ff0000; }
		```

	- **HSL:** define a cor por matiz (`hue`), saturação (`saturation`) e luminosidade (`lightness`). A matiz é medida em graus; a saturação e a luminosidade são percentuais.
		```css
		p { color: hsl(0, 100%, 50%); }
		```

	- **HSLA:** funciona como o HSL, adicionando o canal alfa para controlar a opacidade.
		```css
		p { color: hsla(0, 100%, 50%, 0.5); }
		```- 

#### Imagens

#### Propriedade `object-fit`

Define como uma imagem ou vídeo deve se ajustar às dimensões do elemento que o contém. É especialmente útil quando a imagem precisa ocupar uma área fixa sem perder suas proporções.

- `fill`: redimensiona o conteúdo para preencher o elemento, podendo distorcer a imagem.
- `contain`: mantém a proporção e exibe todo o conteúdo, deixando espaços vazios quando necessário.
- `cover`: mantém a proporção e preenche todo o elemento, cortando as partes que excederem seus limites.
- `none`: mantém o tamanho original do conteúdo.
- `scale-down`: escolhe entre `none` e `contain`, usando a opção que resultar no menor tamanho.

```css
img {
	width: 300px;
	height: 200px;
	object-fit: cover;
}
```

#### Propriedade `object-position`

Define a posição do conteúdo dentro do elemento quando ele é ajustado com `object-fit`. Aceita palavras-chave, porcentagens ou valores de comprimento.

```css
img {
	width: 300px;
	height: 200px;
	object-fit: cover;
	object-position: center top;
}
```

#### Fundo dos Elementos

Alterando o Fundo dos Elementos

- Define a aparência do fundo de um elemento com propriedades como `background-color`, `background-image`, `background-position` e `background-size`.
- Esse conjunto permite criar fundos simples, com cores, imagens ou efeitos visuais.

Redimensionando as Imagens de Fundo dos Elementos

- A propriedade `background-size` controla o tamanho da imagem de fundo.
- Pode usar valores como `cover`, `contain`, porcentagens ou medidas fixas para ajustar a imagem ao elemento.

Repetição das Imagens de Fundo

- A propriedade `background-repeat` define se a imagem de fundo será repetida.
- Valores comuns: `repeat`, `no-repeat`, `repeat-x`, `repeat-y` e `space`.

Posicionamento das Imagens de Fundo

- `background-position` define onde a imagem começa dentro do elemento.
- Aceita palavras-chave como `center`, `top`, `left`, ou valores em pixels/porcentagens.

Propriedade Background Attachment

- Controla o comportamento do fundo em relação ao scroll da página.
- Valores principais: `scroll` (segue a página), `fixed` (fica parado) e `local` (move junto com o conteúdo).

Propriedade Background Origin

- Define a região de origem do fundo, ou seja, de onde as propriedades de posicionamento e recorte serão calculadas.
- Valores mais usados: `padding-box`, `border-box` e `content-box`.

Propriedade Background Clip

- Determina até onde o fundo pode ser desenhado dentro do elemento.
- Ajuda a controlar se o fundo aparece sob a borda, o padding ou apenas no conteúdo.

Mesclagem

- Refere-se ao uso de `background-blend-mode` para misturar camadas de fundo, como imagem e cor.
- Cria efeitos visuais mais sofisticados e combinações de cores.

Propriedade Background

- É a shorthand que reúne várias propriedades de fundo em uma única linha.
- Exemplo: `background: #fff url('img.jpg') center/cover no-repeat fixed;`.