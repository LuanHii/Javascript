const pontoRegex = /./;

console.log(".");
console.log(pontoRegex.test("abc"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123abc"));

const dRegex = /\d/;

console.log("\d");
console.log(dRegex.test("abc"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123abc"));

const dRegex2 = /\D/;

console.log("\D");
console.log(dRegex2.test("abc"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123abc"));

const sRegex = /\s/;

console.log("\s");
console.log(sRegex.test("abc"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123abc"));

const wRegex = /\w/;

console.log("\w");
console.log(wRegex.test("abc"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123abc"));

