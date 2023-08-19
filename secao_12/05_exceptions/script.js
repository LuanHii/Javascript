function saudacao(nome){
    if(typeof nome !='string'){
        throw new Error("Nome tem que ser um texto.");
    } else {
        alert(`Olá  ${nome}`);
    }
}


saudacao("Luan");
saudacao(5);

console.log("teste");