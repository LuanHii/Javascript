class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas,raca){
        super(patas);
        this.raca = raca;
    }

    latir(){
        console.log("auau");
    }
}

let pug = new Cachorro(4,"pug");

console.log(pug.patas);
pug.latir();
