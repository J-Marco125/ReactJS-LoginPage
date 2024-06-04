const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const mainApps = require("../backend/routes/apps");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", mainApps);

//mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on("error", (error) =>
  console.error("MongoDB connection error:", error)
);

connection.once("open", () => {
  console.log("MongoDB is Successfully Established!!");
});

app.listen(port, () => {
  console.log(`Server is ruuning in ${port}`);
});
