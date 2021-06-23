const express = require("express");
const mongoose = require("mongoose");
// const db = require('./models');
const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 
    'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
  console.log("Error: can't connect to Mongoose");
});

app.use(require("./routes/htmlroutes.js"));
app.use(require("./routes/apiroutes.js"));

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});