let promessa = Promise.resolve(5 + 5);
console.log("Códigos");
console.log(promessa);


promessa.then((value) => {return value + 5})
.then((value) => {console.log(value)});