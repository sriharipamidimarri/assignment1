mkdir sheets-backend
cd sheets-backend
npm init -y
npm install express cors body-parser
##Backend Code
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let sheetsData = [];

app.post("/save", (req, res) => {
  sheetsData = req.body;
  res.json({ status: "Saved!" });
});

app.get("/load", (req, res) => {
  res.json(sheetsData);
});

app.listen(4000, () => console.log("Server running on port 4000"));
