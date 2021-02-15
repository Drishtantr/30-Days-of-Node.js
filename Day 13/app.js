const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if(req.url === '/don') {
        res.write([1,2,3]);
        res.end();
    }
});

const PORT = 3000;


// server.on('connection', (socket) => {
//     console.log('New COnnection');
// });


server.listen(PORT);

console.log(`Listening on port ${PORT}`)