## 1 - O que é JSON?
JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de analisar e gerar para máquinas. Ele é amplamente utilizado para transmitir dados entre um servidor e um cliente em aplicações web.

- Transmissão de dados. 

### 2 - Estrutura do JSON
O JSON é composto por dois tipos de estruturas principais:
- **Objetos:** Representados por chaves `{}` e contêm pares de chave-valor. Exemplo:
```json
{
  "nome": "Kayque",
  "idade": 21,
  "profissao": "Desenvolvedor"
}
```

> Manifest.json:

- Conceito: O `manifest.json` é um arquivo de configuração usado em projetos web, especialmente em extensões de navegador e aplicativos web progressivos (PWAs). Ele define as propriedades e configurações do aplicativo, como nome, ícone, permissões e comportamento.

> Package.json: 

- Conceito: O `package.json` é um arquivo de configuração usado em projetos Node.js para gerenciar dependências, scripts e metadados do projeto. Ele é essencial para o gerenciamento de pacotes e facilita a instalação e atualização de bibliotecas.

> Um arquivo JSON deve conter apenas informações que possam ser representadas em texto. Veja algumas regras básicas:" 

Não pode ter funções; 
Não pode ter comentários; 
Todo texto sempre tem aspas duplas; 
As propriedades sempre tem aspas duplas. 

```` json
{ 
   "cliente": { 
    "id": 2020, 
    "nome": "Maria Aparecida" 
   }, 
   "pagamentos": [ 
    { 
        "id": 123, 
        "descricacao": "Compra do livro Cangaceiro JavaScript", 
        "valor": 50.5 
    }, 
    { 
        "id": 124, 
        "descricacao": "Mensalidade escolar", 
        "valor": 1500 
    } 
   ] 
}

````

> Como representar datas em arquivos JSON? 
- O formato ISO 8601 é uma convenção internacional para representar datas e horas. Ele é amplamente utilizado em arquivos JSON para garantir a consistência e a interoperabilidade entre sistemas. O formato ISO 8601 para datas é `YYYY-MM-DD` (ano-mês-dia) e para datas e horas é `YYYY-MM-DDTHH:mm:ssZ` (ano-mês-diaThora:minuto:segundoZ).


> Metodos de ler e escrever JSON:
- `JSON.stringify()`: Converte um objeto JavaScript em uma string JSON. Útil para enviar dados para um servidor ou salvar em um arquivo.
- `JSON.parse()`: Converte uma string JSON em um objeto JavaScript. Útil para receber dados de um servidor ou ler de um arquivo.
- Exemplo:
```javascript
const pessoa = {
  nome: "Kayque",
  idade: 21,
  profissao: "Desenvolvedor"    
};
const jsonString = JSON.stringify(pessoa);
console.log(jsonString); // Resultado: '{"nome":"Kayque","idade":21,"profissao":"Desenvolvedor"}'

```

> O JSON é puramente um formato de dados — contém apenas propriedades, sem métodos.

> Aspas simples não são válidas.