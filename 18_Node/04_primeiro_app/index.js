const {createServer} = require('http');

let server = createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
        `
        <h1>Hello world!</h1>
        <p>Primeira página usando node.js</p>
        `

    );

    response.end();
})

server.listen(8000);

console.log("Ouvindo porta 8000");


