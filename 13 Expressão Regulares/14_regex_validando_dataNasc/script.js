const validarData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarData.test("23/12/2002"));
console.log(validarData.test("abcd"));
console.log(validarData.test(23232323));