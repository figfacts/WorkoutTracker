const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 
    'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
  console.log("Error: can't connect to Mongoose");
});

require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});