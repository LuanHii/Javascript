let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send("Primeira rota com Express");
});

app.get('/teste', function(req, res) {
    res.send("testando essa rota no postman");
})

app.listen(3000, function() {
    console.log("A aplicação está funcionado");
})