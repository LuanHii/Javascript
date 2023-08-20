const calculadora = {
    soma: function(x,y){
        return x + y;
    },
    subtrair: function(x,y){
        return x - y;
    },
    multiplicar: function(x,y){
        return x * y;
    },
    dividir: function(x,y){
        return x / y;
    },
}

console.log(calculadora.soma(1,2));
console.log(calculadora.subtrair(5,2));
console.log(calculadora.multiplicar(5,2));
console.log(calculadora.dividir(10,2));