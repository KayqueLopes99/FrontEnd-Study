As tabelas no HTML são ferramentas poderosas para organizar dados estruturados em linhas e colunas. Pense nelas como a versão visual das grades de dados que você encontraria em um banco de dados SQL ou em um dashboard de Power BI.

### 1. As Tags Essenciais

De acordo com o que vimos anteriormente, a tag principal é a `<table>`. No entanto, para que ela tenha conteúdo, precisamos de outras tags internas:

*   **`<table>`**: Define o início e o fim da tabela.
*   **`<tr>` (Table Row)**: Cria uma linha horizontal.
*   **`<th>` (Table Header)**: Define uma célula de cabeçalho (geralmente o texto fica em negrito e centralizado).
*   **`<td>` (Table Data)**: Define uma célula de dado comum (o conteúdo da tabela).



---

### 2. Estrutura Semântica (Obrigatória para bons projetos)

Assim como o documento HTML tem `head` e `body`, as tabelas mais complexas devem ser divididas para que navegadores e leitores de tela entendam a organização dos dados:

*   **`<thead>`**: Agrupa os cabeçalhos da tabela.
*   **`<tbody>`**: Agrupa o corpo com os dados principais.
*   **`<tfoot>`**: Agrupa o rodapé (útil para totais ou observações).

#### Exemplo de Comando Completo:

```html
<table>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Quantidade</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Teclado Mecânico</td>
      <td>2</td>
      <td>R$ 250,00</td>
    </tr>
    <tr>
      <td>Monitor 24"</td>
      <td>1</td>
      <td>R$ 900,00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>R$ 1.150,00</td>
    </tr>
  </tfoot>
</table>
```

---

### 3. Atributos de Mesclagem (Colspan e Rowspan)

Às vezes, você precisa que uma célula ocupe o espaço de duas ou mais. Para isso, usamos atributos específicos:

*   **`colspan`**: Expande a célula horizontalmente (une colunas). Como visto no exemplo acima, no rodapé para a palavra "Total".
*   **`rowspan`**: Expande a célula verticalmente (une linhas).

---

### 4. Dicas de Estilização

Diferente de outros elementos, a tabela HTML pura não vem com bordas visíveis por padrão. Para torná-la legível, você precisará aplicar um pouco de CSS:

*   **`border-collapse: collapse;`**: Faz com que as bordas das células se unam em uma única linha fina (evita aquela aparência de "tabela de 1995").
*   **`padding`**: Essencial para que o texto não fique "espremido" nas bordas da célula.

Como você já está familiarizado com estruturas de dados, lembre-se: a tag `<table>` deve ser usada apenas para **dados tabulares** (planilhas, cronogramas, resultados). Para criar o layout da página, use os Elementos Semânticos que estudamos antes, como `section` e `div`.

