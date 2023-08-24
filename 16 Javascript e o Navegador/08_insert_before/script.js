let novoElemento = document.createElement("p");
let texto = document.createTextNode("Testando");
novoElemento.appendChild(texto);
let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);


