let pessoa = {
    "nome": "Luan",
    "idade": 20,
    "profissão": "programador"
}

let pessoaTexto = JSON.stringify(pessoa);

consolee.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON.profissão);