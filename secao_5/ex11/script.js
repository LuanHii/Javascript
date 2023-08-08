let idade = 13;
let cnh = false;

if (idade > 18 && !cnh){
    console.log("Você não tem CNH.");
} else if (idade > 18 && cnh){
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}