let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("auau");
    },
}


let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor alemão";

console.log(pastor.raca);
