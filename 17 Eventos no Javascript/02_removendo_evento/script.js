
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

function msg (){
    console.log("Fui clicado.")
}
btn.addEventListener("click",msg);

btn2.addEventListener("click", function(){
    console.log("Botão desativado");
    btn.removeEventListener("click", msg);
})



