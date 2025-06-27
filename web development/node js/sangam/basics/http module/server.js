const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method, req.url); // cleaner log
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello world');
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});