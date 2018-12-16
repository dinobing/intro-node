
// // const log = require('./logger.js');

// // log("hello der");

// // const path = require('path');
// // const os = require('os');
// const fs = require('fs');

// // var pathObj = path.parse(__filename);

// // console.log('Total uptime: ' + os.uptime());

// const files = fs.readdirSync('./');
// // console.log(files);


// fs.readdir('$', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log("Listener called", arg);
// });

// logger.log('message');


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("hello world");
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on("connection", (socket) => {
//     console.log("new connection");
// })

server.listen(3000);

console.log("listening on port 3000...");