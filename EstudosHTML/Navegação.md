## 1. A Estrutura Semântica (HTML)

Para uma barra de navegação profissional, seguimos uma hierarquia de "boneca russa" (um elemento dentro do outro):

1.  **`<nav>`**: O container principal que avisa ao navegador e ao Google: "Isso aqui é o menu".
2.  **`<ul>`**: Uma lista não ordenada para agrupar os itens do menu.
3.  **`<li>`**: Cada "ponto" da lista.
4.  **`<a>`**: O link clicável que leva o usuário para outra página.

### O Comando (Código HTML)

```html
<nav>
    <ul>
        <li><a href="index.html">Início</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="projetos.html">Projetos</a></li>
        <li><a href="contato.html">Contato</a></li>
    </ul>
</nav>
```



---

## 2. Transformando a Lista em Barra (CSS)

Por padrão, o HTML exibirá esses itens um embaixo do outro, com "bolinhas" (bullets). Para que fiquem lado a lado, usamos alguns comandos básicos de CSS.

### Comandos Essenciais:

*   **`display: flex;`**: O comando "mágico" que coloca os itens lado a lado.
*   **`list-style: none;`**: Remove as bolinhas da lista.
*   **`text-decoration: none;`**: Remove aquele sublinhado padrão azul dos links.
*   **`gap: 20px;`**: Cria um espaçamento uniforme entre os botões.

### Exemplo de Estilização:

```css
/* Remove as bolinhas e alinha horizontalmente */
nav ul {
    display: flex;
    list-style: none;
    background-color: #333;
    padding: 15px;
}

/* Espaçamento entre os itens */
nav li {
    margin-right: 20px;
}

/* Estilo dos links */
nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Efeito ao passar o mouse */
nav a:hover {
    color: #00bcd4;
}
```

---
