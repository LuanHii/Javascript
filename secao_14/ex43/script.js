const reg = /\w+: (Nike|Adidas|Puma|Asics)/;

console.log(reg.test("Marca: Nike"));
console.log(reg.test("Marca: Adidas"));
console.log(reg.test("Marca: Luan"));