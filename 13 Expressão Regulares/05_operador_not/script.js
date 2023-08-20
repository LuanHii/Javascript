const notAb = /[^ab]/;

console.log("Não A B");
console.log(notAb.test("a"));
console.log(notAb.test("Aqui tem a"));

const notToAZ = /[^a-z]/;
console.log("não A a Z");
console.log(notToAZ.test("abc"));
console.log(notToAZ.test("123"));