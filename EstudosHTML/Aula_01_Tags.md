## 1. O que são Tags e Elementos?

A base do HTML é a **marcação**. Pense nela como as etiquetas que dizem ao navegador o que cada parte do seu texto deve ser (um botão, um título, um parágrafo).

### Resumo das Tags:
*   **Marcação $\rightarrow$ tags**: O código que usamos é composto por essas etiquetas.
*   **Tags HTML**:
    *   Sempre são delimitadas pelos sinais de menor que `<` e maior que `>`.
    *   Servem para descrever qual tipo de **elemento** será adicionado na página.
    *   **Exemplos:** `<button>` (para botões), `<p>` (para parágrafos), entre muitas outras.

### Anatomia de um Elemento HTML
Um elemento completo geralmente é formado por três partes:
1.  **Tag de abertura:** Indica onde o elemento começa (ex: `<p>`).
2.  **Conteúdo:** É o que realmente aparece na tela (ex: "Isso é um parágrafo").
3.  **Tag de fechamento:** Indica onde o elemento termina. Ela é igual à de abertura, mas com uma barra (ex: `</p>`).



> **Exemplo prático:**
> Para criar um botão na tela, você escreve o código:
> `<button>Clique Aqui</button>`
> O navegador interpreta isso e desenha o botão físico que o usuário pode clicar.

---

## 2. Comportamento dos Elementos

*   **Tipos de Elementos:** Cada um tem uma função (botão, parágrafo, imagem, lista, tabela).
*   **Aninhamento:** A maioria dos elementos permite que você coloque outros elementos dentro deles (como colocar um link dentro de um parágrafo).
*   **Tags Autocontidas (Self-closing):** Algumas tags não precisam de fechamento porque não envolvem um texto, como a tag de imagem ou de quebra de linha. Elas se fecham nelas mesmas.

---

## 3. Atributos: Adicionando Informação Extra

Os **atributos** são usados para configurar os elementos ou dar mais informações a eles.

*   **Formato:** São pares de **chave-valor**, escritos como `nome="valor"`.
*   **Atributos Globais:** Podem ser usados em quase qualquer tag.
    *   `style`: Para aplicar CSS e mudar a cor ou tamanho diretamente.
    *   `id`: Para dar um nome único àquele elemento.
*   **Atributos Específicos:** Só fazem sentido para certas tags.
    *   **Imagens (`<img>`):** Usam `src` (link da imagem), `width` (largura) e `height` (altura).
    *   **Campos de texto (`<input>`):** Podem usar `readonly` (apenas leitura) ou `required` (campo obrigatório).

---

## 4. Estrutura Básica de um Documento HTML

Um site não é apenas um monte de tags soltas; ele segue uma hierarquia de "árvore". Imagine que o documento é uma árvore onde cada tag é um galho ou folha:

*   **html:** O "pai" de todos, que envolve o documento inteiro.
    *   **head:** Contém informações "invisíveis" para o usuário, mas importantes para o navegador (como o `title` da aba).
    *   **body:** Onde fica tudo o que o usuário realmente vê (parágrafos, botões, quebras de linha).



### Tags:

| Tag | Descrição |
| :--- | :--- |
| `<html> ... </html>` | Conteúdo HTML (Raiz do documento) |
| `<head> ... </head>` | Cabeçalho do documento (Metadados) |
| `<title> ... </title>` | Título da página HTML (Aparece na aba do navegador) |
| `<body> ... </body>` | Corpo do documento (Conteúdo visível da página) |
| `<h1> ... </h1>` | Cabeçalho de nível 1 (Títulos principais, vai de h1 a h6) |
| `<p> ... </p>` | Parágrafo |
| `<div> ... </div>` | Conteúdo genérico (Bloco de divisão) |
| `<a> ... </a>` | Link (Âncora) |
| `<span> ... </span>` | Conteúdo genérico em linha (Inline) |
| `<table> ... </table>` | Tabela |
| `<ul> ... </ul>` | Lista não numerada (Com "bullets") |
| `<ol> ... </ol>` | Lista numerada (1, 2, 3...) |
| `<li> ... </li>` | Elemento da lista (Usado dentro de `<ul>` ou `<ol>`) |
| `<img/>` | Imagem (Tag autocontida) |

### Breve explicação das novas tags:

* **`<a>`**: É a tag que cria hiperlinks. Para funcionar, ela precisa do atributo `href="url"`.
* **`<span>`**: Diferente da `<div>` (que ocupa a linha toda), o `<span>` é usado para marcar pequenas partes de um texto sem quebrar a linha.
* **Listas (`<ul>`, `<ol>`, `<li>`)**: Para criar uma lista, você abre a "mãe" (`<ul>` ou `<ol>`) e coloca cada item dentro de uma `<li>` (List Item).
* **`<img/>`**: Como vimos nas imagens anteriores, ela não tem tag de fechamento separada e precisa do atributo `src` para indicar onde está a imagem.