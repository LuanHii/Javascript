const reg1 = /[12345]/;

console.log(reg1.test("Testando3"));
console.log(reg1.test("Temos o numero 6"));

const reg2 = /[0-9]/;
console.log(reg2.test("Temos o número 2314"));