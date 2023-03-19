import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import connectDB from './config/connectDB.js'
require('dotenv').config();

import initRouter from "./routes/routers.js"

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

// Routes
initRouter(app)
// app.use('/decks', deckRoute)
// app.use('/users', userRoute)

// Routes
app.get('/', (req, res, next) => {
  return res.status(200).json({
      message: 'Server is OK!'
  })
})

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  // response to client
  return res.status(status).json({
      error: {
          message: error.message
      }
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
