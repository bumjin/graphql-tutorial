import express from 'express';

const server = express();

console.log('changing the file');

server.get('/', (req, res) => {
    res.send('<html> <head> </head> <body> <h1> Hello World2 </h1> </body> </html>');
});

server.listen(4000, () => {
    console.log('listening on port 4000');
});
