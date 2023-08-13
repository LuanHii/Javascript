let num = 1;
let num1 = 5;
let num2 = 2;
let num3 = 4;

function imprimirNumeros(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num2);
imprimirNumeros(num2,num3);