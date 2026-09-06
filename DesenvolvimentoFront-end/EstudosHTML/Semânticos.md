Os elementos semânticos no HTML5 são tags que descrevem claramente o seu significado tanto para o navegador quanto para o desenvolvedor. Enquanto tags genéricas como `<div>` e `<span>` apenas agrupam conteúdo sem dizer o que ele é, as tags semânticas definem a estrutura lógica da página.

Isso é fundamental para o **SEO** (ajuda o Google a indexar o site) e para a **Acessibilidade** (ajuda leitores de tela para pessoas com deficiência visual).

---

### Principais Elementos Semânticos



| Tag | Função Semântica |
| :--- | :--- |
| `<header>` | Define o cabeçalho de uma página ou de uma seção (geralmente contém logo e busca). |
| `<nav>` | Define um conjunto de links de navegação (menus). |
| `<main>` | Define o conteúdo principal e único do documento. Deve haver apenas um por página. |
| `<section>` | Define uma seção temática no conteúdo (ex: "Sobre", "Serviços"). |
| `<article>` | Define um conteúdo independente e auto-contido (ex: um post de blog ou uma notícia). |
| `<aside>` | Define um conteúdo relacionado ao que está em volta, mas que é secundário (ex: barra lateral). |
| `<footer>` | Define o rodapé da página ou de uma seção (links de contato, copyright). |
| `<time>` | Define uma data ou horário específico. |

---

### Comparação: Estrutura Genérica vs. Semântica

Antigamente, usava-se apenas `<div>` para tudo. Veja a evolução:

**Estrutura Antiga (Não Semântica):**
```html
<div id="topo">
    <div id="menu"></div>
</div>
<div id="principal">
    <div class="post"></div>
</div>
<div id="rodape"></div>
```

**Estrutura Moderna (Semântica):**
```html
<header>
    <nav>
        <!-- Links de navegação -->
    </nav>
</header>

<main>
    <article>
        <h1>Título da Postagem</h1>
        <p>Conteúdo do texto...</p>
    </article>
</main>

<aside>
    <!-- Conteúdo lateral -->
</aside>

<footer>
    <!-- Informações de rodapé -->
</footer>
```

