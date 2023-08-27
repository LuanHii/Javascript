
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");



function msg (e){
    console.log("Clicou no botão.");
    e.stopPropagation();
}
btn.addEventListener("click",msg);

btn2.addEventListener("click", function(event){
    console.log(event);
    
})


p.addEventListener("click", function(){
    console.log("Clicou no evento.");
})

a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Página não irá mudar.");
} )

