let elemento = document.querySelector("#titulo-principal");

console.log("largura: " + elemento.offsetWidth); // borda
console.log("altura: " + elemento.offsetHeight);

console.log("largura: " + elemento.clientWidth); // sem borda
console.log("altura: " + elemento.clientHeight);