const massage = "Olá, seja bem-vindo ao estudo de JavaScript!";
console.log(massage);

console.log(massage.length)

const firstName = "Kayque";
const LastName = "Silva";

const fullName = firstName + " " + LastName;
console.log(fullName);

console.log('Meu nome é ' + fullName + ' e estou aprendendo JavaScript!');

console.log(`Meu nome é ${fullName} e estou aprendendo JavaScript!`);

// lower e upper case
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

const lista = "maçã, banana, laranja";
const frutas = lista.split(", ");
console.log(frutas); // ["maçã", "banana", "laranja"]