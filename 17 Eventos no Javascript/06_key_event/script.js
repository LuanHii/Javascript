window.addEventListener("keydown", function(e) {
    if (e.key == 'q'){
        console.log("apertou a letra Q");
    } else if(e.key == "Enter") {
        console.log("Apertou enter");
    }
});

window.addEventListener("keyup", function(e) {
    if (e.key == 'q') {
        console.log("Soltou a letra Q");
    } else if (e.key == "Enter") {
        console.log("Soltou o Enter");
    }
})