function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma1(7));