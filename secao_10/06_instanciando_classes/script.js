function criaCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.pata = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("auau");
    }
    return cachorro;
}

let doberman = criaCachorro("Doberman", 4, "preto");

console.log(doberman);
doberman.latir();