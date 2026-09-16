## Combinadores
- Combinadores são usados para selecionar elementos com base em sua relação com outros elementos no DOM (Document Object Model). Eles permitem que você aplique estilos a elementos específicos dependendo de sua posição ou relação com outros elementos.

> Agrupamento de seletores: É possível combinar diferentes seletores para aplicar estilos a múltiplos elementos ao mesmo tempo. Por exemplo, `h1, h2, h3` aplica o mesmo estilo a todos os elementos `<h1>`, `<h2>` e `<h3>`.

### Qual é a relação entre dois seletores?

A sintaxe geral é:

```css
[SELETOR] [COMBINADOR] [SELETOR]
```

O combinador define a relação entre o primeiro e o segundo seletor.

1. **Combinador descendente (espaço)**: seleciona elementos que estão em qualquer nível dentro do primeiro elemento.

	```css
	div p { color: blue; }
	```

	Seleciona todos os `<p>` dentro de um `<div>`, mesmo que estejam dentro de outros elementos.

2. **Combinador filho (`>`)**: seleciona apenas os filhos diretos do primeiro elemento.

	```css
	ul > li { list-style: square; }
	```

	Seleciona somente os `<li>` que são filhos diretos de `<ul>`.

3. **Combinador irmão adjacente (`+`)**: seleciona o elemento imediatamente seguinte, desde que tenha o mesmo elemento pai.

	```css
	h2 + p { margin-top: 0; }
	```

	Seleciona o primeiro `<p>` que aparece imediatamente depois de um `<h2>`.

4. **Combinador irmão em geral (`~`)**: seleciona todos os irmãos seguintes que correspondem ao segundo seletor.

	```css
	h2 ~ p { color: gray; }
	```

	Seleciona todos os `<p>` que aparecem depois de um `<h2>` e têm o mesmo elemento pai.