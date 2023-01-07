const http = require(`http`);
//test git
//test git 2
const express = require(`express`);
const app = express();
app.use((req, res, next) => {
  console.log(`MIDDLEWARE`);
  next();
});
app.use((req, res, next) => {
  console.log(`MIDDLEWARE 2`);
});
const server = http.createServer(app);
server.listen(3000);
