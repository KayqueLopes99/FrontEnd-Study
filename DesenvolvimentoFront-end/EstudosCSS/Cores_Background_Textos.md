## Cores, Background e Textos

> Ligação:

Para ligar o seu estilo CSS a uma classe HTML, você utiliza o atributo `class` na tag HTML e, no arquivo CSS, chama essa classe usando um ponto (`.`) antes do nome.

**Exemplo Prático:**
No HTML: `<h1 class="meu-titulo">Olá Mundo</h1>`
No CSS: `.meu-titulo { color: blue; }`


### Tabela

| Comando | Definição | Sintaxe | Exemplo |
| --- | --- | --- | --- |
| `color` | Define a cor do texto (RGB, Hexadecimal ou Nome). | `color: valor;` | `color: rgb(255, 0, 0);` |
| `background-image` | Define uma imagem de fundo para o elemento. | `background-image: url('caminho');` | `background-image: url('foto.jpg');` |
| `background-repeat` | Define se a imagem de fundo se repete (mosaico). | `background-repeat: valor;` | `background-repeat: no-repeat;` |
| `background-attachment` | Define se o fundo rola com a página ou fica fixo. | `background-attachment: valor;` | `background-attachment: fixed;` |
| `background-position` | Define a posição inicial da imagem de fundo. | `background-position: x y;` | `background-position: center center;` |
| `background-size` | Ajusta o tamanho da imagem (cobrir tudo ou caber). | `background-size: valor;` | `background-size: cover;` |
| `text-decoration` | Adiciona ou remove decorações como sublinhados. | `text-decoration: valor;` | `text-decoration: underline;` |
| `text-transform` | Controla capitalização (maiúsculas/minúsculas). | `text-transform: valor;` | `text-transform: uppercase;` |
| `text-indent` | Define o recuo da primeira linha de um texto. | `text-indent: valor;` | `text-indent: 50px;` |
| `text-align` | Alinha o texto horizontalmente. | `text-align: valor;` | `text-align: center;` |
| `font-family` | Define a fonte (família tipográfica) do texto. | `font-family: nome, generica;` | `font-family: Arial, sans-serif;` |
| `width` / `height` | Define a largura e altura de um elemento. | `width: valor;` | `width: 100px;` |
| `* { margin; padding; }` | Seletor universal usado para "resetar" o estilo padrão. | `* { margin: 0; padding: 0; }` | `* { margin: 0; padding: 0; }` |

#### Observações sobre Variações:

* **Cores:** Você pode usar o seletor visual do VS Code, o sistema **RGB** `rgb(r, g, b)`, **Hexadecimal** `#ffffff` ou sites como o **Adobe Color** ou **Color Hunt** (que são ótimas alternativas ao colorex).
* **Background Size:** * `cover`: A imagem preenche todo o espaço, podendo ser cortada.
* `contain`: A imagem fica inteira visível, mas pode sobrar espaço vazio.


* **Imagens:** O site **Unsplash** é excelente para buscar URLs de imagens de alta qualidade para seus testes.

