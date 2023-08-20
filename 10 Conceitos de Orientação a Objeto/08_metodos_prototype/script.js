function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.pata = patas;
    this.cor = cor;
}

Cachorro.prototype.latir = function(){
    console.log("au");
}

let doberman = new Cachorro("Doberman", 4, "preto");

doberman.latir();