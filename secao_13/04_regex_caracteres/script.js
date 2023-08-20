const dia = /\d\d/;

console.log(dia.test("2023") && "2023".length == 2);
console.log(dia.test("abc"));
console.log(dia.test("23") && "23".length == 2);

const palavraTresLetras = /\w\w\w/; // maior que três letras

console.log("3 letras");
console.log(palavraTresLetras.test("abc"));
console.log(palavraTresLetras.test("abcd"));
console.log(palavraTresLetras.test("ab"));