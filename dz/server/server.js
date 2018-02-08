const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    let extension;
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
        if (exist) {
            pathName =  pathName === './' ? 'dist/public/index.html' : pathName;
            console.log('here', pathName);
            extension = pathName.match(/\..+$/)[0];
            res.statusCode = 200;
            res.writeHead(200, {'Content-Type': mimeType[extension],'Content-Length':data.length});
            fs.readFile(pathName, (err, data) => {
                console.log('readfile');
                console.log(pathName);
                res.write(data);
                res.end();
            });
        } else {
            fs.readFile('server/404.html', (err, data) => {
                console.log('in 404');
                console.log(pathName);
                res.writeHead(404, {'Content-Type': 'text/html','Content-Length':data.length});
                res.write(data);
                res.end();
            });
        }
    });

}).listen(3000, '127.0.0.1');
console.log('listening on port 3000');