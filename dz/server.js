const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    let pathName = `.${parseUrl.pathname}`;

    fs.exists(pathName, (exist) => {
        if (!exist) {
            pathName = './404.html';
            fs.readFile(pathName, (err, data) => {
                res.statusCode = 404;
                res.setHeader('Content-type', 'text/html' );
                res.end(data);
            });
        }
    });

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hello');
}).listen(3000, '127.0.0.1');
console.log('listening on port 3000');