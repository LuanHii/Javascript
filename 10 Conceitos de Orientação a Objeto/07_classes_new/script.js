function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.pata = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("auau");
    }
}

let doberman = new Cachorro("Doberman", 4, "preto");

doberman.latir();