const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    id: 1,
    msg: "test",
  });
});

app.listen(5000, () => {
  console.log(`App is running in port ${process.env.PORT}`);
});
