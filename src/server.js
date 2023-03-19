const express = require("express");
const cors = require("cors");
import bodyParser from "body-parser";
const cookieSession = require("cookie-session");
import connectDB from './config/connectDB'
require('dotenv').config();

const app = express();

app.use(cors());

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(
//   cookieSession({
//     name: "bezkoder-session",
//     secret: "COOKIE_SECRET", // should use as secret environment variable
//     httpOnly: true,
//     sameSite: 'strict'
//   })
// );

// database
connectDB()

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
