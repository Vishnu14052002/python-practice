const { createServer } = require("http");

const http = require('http');

const server = createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write('<h1>hello world from practice folder</h1>')
    return res.end();
});

server.listen(3000);