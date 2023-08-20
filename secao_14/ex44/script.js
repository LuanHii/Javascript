const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(reg.test("192.168.1.1"));
console.log(reg.test("aaaa"));