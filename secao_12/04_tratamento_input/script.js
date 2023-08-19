function checarNumero(num){
    let number = Number(num);
    if (Number.isNaN(number)){
        alert("Por favor, utilize numeros.");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero("teste");

let number = prompt("Digite um numero.");

checarNumero(number);