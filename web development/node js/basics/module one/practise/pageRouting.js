const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)

    if(url == '/'){
        res.setHeader('content-type', 'text/html');
        res.write('<h1>this html tag from / page</h1>')
        return res.end();
    }

    if(url == '/welcome'){
        res.setHeader('content-type', 'text/html');
        res.write('<h1>this html tag from /welcome page</h1>')
        return res.end();
    }
});

server.listen(3000);