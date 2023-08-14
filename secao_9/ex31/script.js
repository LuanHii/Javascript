let nomes = ["Luan", "Pedro", "José", "Matheus","Sabrina"];
let num = [1,2,3,4];

function verificaNumero(array) {
    if (array.length < 5){
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificaNumero(nomes);
verificaNumero(num);