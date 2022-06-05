const fileSystem = require('fs');
const http = require('http');
const path = require('path');

let c = 1;
const server = http.createServer( (req, res) => {

    if(req.url == '/favicon.ico'){
        let filePath = path.join(__dirname, "favicon.ico");
        let stat = fileSystem.statSync(filePath);

        res.writeHead(200, {
            'Content-Type' : 'image/x-icon',
            'Content-Length' : stat.size
        })

        let readStream = fileSystem.createReadStream(filePath);

        readStream.pipe(res);
        return;
    }
    res.write(''+ (c++));
    res.end();

});

server.listen(3000);
console.log('ho!');