function* criadorID(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criarId = criadorID();

console.log(criarId.next().value);

console.log(criarId.next().value);