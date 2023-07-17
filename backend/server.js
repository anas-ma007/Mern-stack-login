
const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());  // Parse JSON request body
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded request body

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port number ${port}`);
});
