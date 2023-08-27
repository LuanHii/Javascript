let input = document.getElementById("in1");
let input2 = document.getElementById("in2");

input.addEventListener("focus", function(){
    console.log("entrou no input");
})

input.addEventListener("blur", function(){
    console.log("saiu do input");
})