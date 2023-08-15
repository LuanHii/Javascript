const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("auuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("rrrrrrrrrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },

    getRaca: function(){
        return "A raça desse cachorro é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("pastor alemão");
console.log(cachorro.raca);

console.log(cachorro.getRaca());
