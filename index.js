const server = require(`node:http`);
const url = require(`node:url`);
const fs = require(`node:fs`);

const page404 = fs.readFileSync(`./404.html`, `utf-8`, (err, data) => {
  if (err) throw err;
  return data;
});

server
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    const fileName =
      query.pathname === `/` ? `./index.html` : `.${query.pathname}.html`;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": `text/html` });
        res.write(page404);
        return res.end();
      }
      res.writeHead(200, { "content-type": `text/html` });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
