function recursao(n){
    if (n - 1 == 2){
        console.log("Recursão parou")
    } else if (n % 2 !== 0){
        console.log("Número impar " + n );
        recursão(n - 1)
    } else {
        console.log("Número par " + n);
        recursao(n - 2);
    }
}

recursao(10);
recursao(39);
recursao(55);