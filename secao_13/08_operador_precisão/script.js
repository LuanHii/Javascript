const cep = /\d{5}-\d{3}/;

console.log(cep.test("12345-123"));

console.log(cep.test("123456-123"));
console.log(cep.test("abcd"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(21)1234-1234"));
console.log(tel.test("(21)12345-1234"));