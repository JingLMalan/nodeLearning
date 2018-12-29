const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // 引入url解析
  let name = require('url').parse(req.url, true).query.name;
  if (name === undefined) name = 'world';
  // 根据查询字符串来路由
  if (name == 'burningbird') {
    const file = 'tiger.jpg';
    fs.stat(file, function (err, stat) {
      if (err) {
        console.error(err);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Sorry, Burningbird isn't around right now \n");
      } else {
        const img = fs.readFileSync(file);
        res.contentType = 'image/jpg';
        res.contentLength = stat.size;
        res.end(img, 'binary');
      }
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ' + name + '\n');
  }
});


// 监听端口
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});