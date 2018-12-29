// 引入http模块
const http = require('http');

// 设置主机名
const hostname = '127.0.0.1';
// 设置端口
const port = 3000;

// 开启服务器实例
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


// 监听端口
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});