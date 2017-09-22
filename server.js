const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const session = require("express-session");
var userCtrl = require("./controllers/userCtrl.js");
var profileCtrl = require("./controllers/profileCtrl.js");
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(
  session({
    secret: config.sessionSecret,
    saveUnitialized: true,
    resave: true
  })
);

app.post("/api/login", userCtrl.login);

app.use(express.static(__dirname + "/public"));

app.get("/api/profiles", profileCtrl.getFriendsProfile);
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
