class Conta  {
    constructor(saldo){
        this.saldo = saldo;
    }
    
    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(20);

conta.deposito(20);
conta.saque(10);
console.log(conta.saldo);