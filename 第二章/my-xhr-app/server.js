const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/main.js') {
    fs.readFile('main.js', 'utf8', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(data);
    });
  }
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
