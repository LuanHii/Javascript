class Conta {
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositar(x){
        this.saldoCorrente +=x;
        return "Valor depositado: " + x;
    }

    saque(x){
        if (this.saldoCorrente >= x){
            this.saldoCorrente -=x;
            return "Valor sacado: " + x;
        } else {
            return "Saldo insuficiente";
        }
        
    }

    transferir(x)
    {
        if (this.saldoPoupanca >= x){
            this.saldoCorrente += x;
            this.saldoPoupanca -= x;
            return "Valor transferido."
        } else {
            return "Saldo insuficiente"
        }
    }

    juros(){
        let juros = this.saldoPoupanca * this.jurosPoupanca;
        console.log(juros);
        this.saldoPoupanca += juros;
    }

    
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        super(saldoCorrente,saldoPoupanca,jurosPoupanca*2);
       
    }
}

let conta = new Conta(100,50,0.1);
let contaEspecial = new ContaEspecial(100,50,0.1);


console.log(conta);
console.log(contaEspecial);
contaEspecial.juros();
console.log(contaEspecial);