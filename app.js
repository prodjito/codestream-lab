// app.js
const newrelic = require('newrelic');
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //generate ReferenceError
    try{
        obj.var
    }catch(error){
        console.log(error)
        newrelic.noticeError(error)
    }

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');