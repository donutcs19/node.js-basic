const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end('<h1>สวัสดี World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
