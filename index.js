/**
 * Imports
 */
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const compression = require("compression");

/**
 * Routes
 */
const homeRouter = require("./routes/home");
const backofficeRouter = require("./routes/backoffice");
const loginRouter = require("./routes/login.js");
const { getUniquePolices } = require("./getUniquePolices");

/**
 * Constants
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * Middlewares
 */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "default",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  compression({
    level: 6,
    threshold: 0,
  })
);

/**
 * Routes
 */
app.use("/", homeRouter);
app.use("/api/backoffice", backofficeRouter);
app.use("/api/login", loginRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

/**
 * Starting Server and listen to the port (if env variable "PORT" is set or 3000)
 */
app.listen(port, () => {
  getUniquePolices();
  console.log(`Server listening at port = ${port}`);
});
