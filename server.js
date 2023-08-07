const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("./configs/db.config");

/**Intialize Express**/
const app = express();

app.use(express.json());

/**Database Connection**/
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("ERROR WHILE CONNECTING TO DB");
});

db.once("open", () => {
  console.log("Connected to Database");
});

require("./routes/notification.route")(app);

app.listen(7500, () => {
  console.log(`Server Started on PORT 7500`);
});
