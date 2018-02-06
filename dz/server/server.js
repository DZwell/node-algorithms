const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    let pathName = `.${parseUrl.pathname}`;
    const mimeType = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
      };
    

    fs.exists(pathName, (exist) => {
        if (exist || parseUrl.pathname === '/') {
            pathName = 'dist/public/index.html';
            res.statusCode = 200;
        } else {
            pathName = '404.html';
            res.statusCode = 404;
        }
        fs.readFile('dist/public/index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
        });
    });

}).listen(3000, '127.0.0.1');
console.log('listening on port 3000');