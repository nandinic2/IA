const express = require('express');
const path = require('path');

const app = express;

//set static folder
app.use(express.static(path.join("app", "static")));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("server started on port ${PORT}"));




// const http = require('http');
// const hostname = '127.0.0.1';
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const port = 3000;
//
// app.use(express.static('public'))
//
// fs.readFile('index.html', (err, html) => {
//   if(err){
//     throw err;
//   }
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write(html);
//     res.end();
//   });
//
//   server.listen(port, hostname, () => {
//     console.log('Server started on port' + port);
//   });
// });
