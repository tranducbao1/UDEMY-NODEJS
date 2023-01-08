const express = require(`express`);
const bodayParser = require(`body-parser`);
const path = require(`path`);
const app = express();

app.set(`view engine`, `pug`);
app.set(`views`, `views`);

const adminData = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

app.use(bodayParser.urlencoded());
app.use(express.static(path.join(__dirname, `public`)));

app.use(`/admin`, adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, `views`, `404.html`));
});

app.listen(3000);
