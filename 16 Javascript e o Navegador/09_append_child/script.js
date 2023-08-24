let novoElemento = document.createElement("p");
let texto = document.createTextNode("Testando");
novoElemento.appendChild(texto);


let p = document.querySelector("#paragrafo");
let pai = p.parentNode;

pai.appendChild(novoElemento);


