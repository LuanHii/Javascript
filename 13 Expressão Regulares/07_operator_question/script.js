const padrao = /Banana?/;

console.log(padrao.test("Banana"));
console.log(padrao.test("Banan"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));