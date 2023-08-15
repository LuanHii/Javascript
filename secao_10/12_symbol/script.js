class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        
        this.cor = cor;
    }

    latir() {
        console.log("au");
    }
}
Cachorro.prototype.raca = "SRD";
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("Labrador", "Preto");

console.log(labrador.patas);
labrador.latir();

console.log(cachorro.prototype.raca);
console.log(labrador.raca);

console.log(cachorro.prototype[patas]);

console.log(labrador[patas]);