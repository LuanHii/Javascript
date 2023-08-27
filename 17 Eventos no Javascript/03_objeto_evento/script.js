
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

function msg (e){
    console.log(e)
}
btn.addEventListener("click",msg);

btn2.addEventListener("click", function(event){
    console.log(event);
    
})



