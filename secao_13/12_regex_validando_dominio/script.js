const validaDominio = /[?www.] \w+\.com.br|.com/;

console.log(validaDominio.test("www.luanvitor.com.br"));
console.log(validaDominio.test("luanvitor.com.br"));
console.log(validaDominio.test("aaaaa"));