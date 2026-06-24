const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

res.send("Production Inventory API Running");

});

app.listen(process.env.PORT, () => {

console.log("Server Running");

});