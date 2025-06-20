const { createServer } = require('node:http');


const hostname = '127.0.0.1';
const port = 1111;

const server = createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})