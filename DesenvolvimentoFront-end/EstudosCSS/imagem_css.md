## Imagens no css

Diferente da tag `<img>` lá no HTML (que insere a imagem como parte do conteúdo da página), o CSS usa a imagem para decorar ou preencher um espaço (como o fundo de um botão, de um "card" ou da tela inteira).

### 1. `background-image`

Para "chamar" a imagem no CSS, você usa a propriedade `background-image` junto com a função `url()`. Dentro dos parênteses e aspas, você coloca o caminho da imagem.

**Tipos de Caminho (Link):**

* **Link Externo da Web:** Você cola a URL completa da imagem (ex: imagens do Unsplash, Google, etc).
```css
background-image: url('https://site.com/imagem.jpg');

```


* **Arquivo Local (no seu computador):** Você aponta para a pasta onde a imagem está salva no seu projeto.
```css
background-image: url('./imagens/minha-foto.png');

```



### 2. Configuração

Se você usar apenas o `background-image`, a imagem vai aparecer no tamanho original dela e vai se repetir infinitamente até preencher o elemento. Para controlar isso, usamos propriedades auxiliares:

* **`background-repeat: no-repeat;`**
* **O que faz:** Impede que a imagem crie um "mosaico" repetitivo se ela for menor que a caixa.


* **`background-size: cover;`** (ou `contain`)
* **O que faz:** O `cover` força a imagem a crescer ou encolher até cobrir 100% do espaço, cortando as bordas se necessário. O `contain` garante que a imagem inteira apareça, mesmo que sobrem espaços em branco.


* **`background-position: center;`**
* **O que faz:** Centraliza a imagem dentro da caixa, para que o corte (se houver) aconteça nas bordas e o meio da foto fique visível.



### Exemplo Prático Completo

Imagine que você tem uma `<div>` no HTML e quer colocar uma foto de fundo nela. O CSS completo ficaria assim:

```css
.meu-card-com-foto {
    /* Define o tamanho do espaço */
    width: 300px;
    height: 200px;

    /* Chama a imagem */
    background-image: url('foto-natureza.jpg');

    /* Configura o comportamento da imagem */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

```
