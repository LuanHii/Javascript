let btn1 = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("Apertou com o mouse");
})


btn1.addEventListener("mouseup", function(){
    console.log("Soltou o mouse");
})

btn2.addEventListener("dblclick", function(){
    console.log("Clique duplo.");
})

btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("Botão direito");
})