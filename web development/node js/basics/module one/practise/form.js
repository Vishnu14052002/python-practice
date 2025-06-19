const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url == '/'){
        res.setHeader('content-type', 'text/html');
        res.write('<form action = "/message" method = "POST"><input type="text" name = "message"></input><input type="submit" ></form>')
        return res.end();
    }

    if (url === '/message' && req.method == 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
        });

        req.on('end', () => {
            console.log('All data received');
            res.setHeader('location', '/');
            res.statusCode = 302;
            res.end();
        });

        return;
    }
});

server.listen('2000');