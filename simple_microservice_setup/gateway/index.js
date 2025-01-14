const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/colors", proxy("http://localhost:3000"));
app.use("/cities", proxy("http://localhost:3001"));

app.listen(8000, () => {
    console.log("Gateway is running on Port 8000");
});