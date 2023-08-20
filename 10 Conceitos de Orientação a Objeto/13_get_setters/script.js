class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;


    }

    latir() {
        console.log("au");
    }

    get getCor(){
        return this.cor
    }

    set setCor(cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro("Pastor alemão", "Sem cor");

console.log(pastor);

pastor.setCor = "Marrom";
console.log(pastor.getCor);
