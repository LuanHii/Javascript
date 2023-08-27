window.addEventListener("load", function(){
    this.alert("aceite os termos");
})

window.addEventListener("beforeunload", function(e){
    event.returnValue = null;
})