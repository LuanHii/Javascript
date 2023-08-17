class carro {
    constructor(marca,cor,gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km){

        let consumido = km / this.consumo
        this.gasolinaRestante -= consumido;
    }

    abastecer(x){
        this.gasolinaRestante += x;
    }
}