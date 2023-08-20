const reg = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(reg.test("usuario_123"));
console.log(reg.test("lu"));
console.log(reg.test("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"));