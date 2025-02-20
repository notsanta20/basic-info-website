const express = require(`express`);
const app = express();
const authorRouter = require(`./routes/authorRoutes`);
const bookRouter = require(`./routes/bookRoutes`);

app.use(`/authors`, authorRouter);
app.use(`/books`, bookRouter);

app
  .get(`/`, (req, res) => {
    res.sendFile(
      `/Users/santhosh/Developer/code/basic-info-website/index.html`,
      (err) => {
        console.log(err);
      }
    );
  })
  .get(`/about`, (req, res) => {
    res.sendFile(
      `/Users/santhosh/Developer/code/basic-info-website/about.html`,
      (err) => {
        console.log(err);
      }
    );
  })
  .get(`/contact-me`, (req, res) => {
    res.sendFile(
      `/Users/santhosh/Developer/code/basic-info-website/contact-me.html`,
      (err) => {
        console.log(err);
      }
    );
  })
  .get(`*`, (req, res) => {
    res.sendFile(
      `/Users/santhosh/Developer/code/basic-info-website/404.html`,
      (err) => {
        console.log(err);
      }
    );
  })
  .listen(3030);
