const express = require("express");
//node js doesnt support ES 2015, like import xx from 'xx'
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
