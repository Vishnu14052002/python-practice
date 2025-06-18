const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('hello world')
    }

    if(url === '/message' && method == 'POST'){
        fs.writeFileSync('hellooo.txt','hello world')
        res.setHeader('Location', '/');
        res.statusCode = 302;
        return res.end()
    }
})

server.listen(3000)