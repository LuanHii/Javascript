let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8",function (error,texto) {
    if (error) {
        throw error;
    } else console.log(texto);
} );

writeFile("arquivo.txt","Olá, mundo.", function (error){
    if (error) {
        throw error;
    } else {
        console.log("Executado com sucesso!");
    }
} );


