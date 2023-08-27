
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg (e){
    console.log("Clicou no botão.");
    e.stopPropagation();
}
btn.addEventListener("click",msg);

btn2.addEventListener("click", function(event){
    console.log(event);
    
})


p.addEventListener("click", function(){
    console.log("Clicou no evento.")
})


