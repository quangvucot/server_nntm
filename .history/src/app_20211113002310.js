const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 8080;
const db = require("../src/config/db");
const Router = require("./routers/index");
const cors = require("cors");
const path = require("path");
// Morgan
app.use(morgan("combined"));
//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// Redirect requests
Router(app);

// Listen on pc port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/nntm`);
});
