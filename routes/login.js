/**
 * Imports
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

/**
 * Constants
 */
const USER_FILE = "./users.json";

/**
 * Routes
 */

const validateuser = (username, password) => {
  let users;

  try {
    users = fs.readFileSync(path.join(__dirname, USER_FILE));
    users = JSON.parse(users);
    if (!users[username]) return 0;
    if (users[username].password !== password) return 0;
    return 1;
  } catch (e) {
    console.error(
      `An error has occurred while trying to validate the user, with error ${e.message}`
    );
    return -1;
  }
};

/**
 * Authenticate user each time that reloads or change page
 */
router.post("/authentication", (req, res) => {
  if (req.session.auth) {
    const temp = validateuser(
      req.session.auth.username,
      req.session.auth.password
    );
    if (temp === -1) {
      res.status(500).send({ message: `Unable to authenticate the user` });
      return;
    }
    if (temp === 0) {
      res.status(401).send({});
      return;
    }

    let adminAccess = req.session.auth.role === "admin";
    res.status(200).send({
      adminAccess,
      username: req.session.auth.username,
      role: req.session.auth.role,
    });
  } else {
    res.status(401).send({});
  }
});

/**
 * Destroy session for current user
 */
router.get("/logout", (req, res) => {
  req.session.destroy(null);
  res.status(200).send();
});

/**
 * Log in mechanism that takes username and password from request (Front End) and validates them against the user file
 * And also create session for the current user
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  /**
   * Trying to read the user file and if it fails notify the user
   */
  let users;
  try {
    users = fs.readFileSync(path.join(__dirname, USER_FILE));
  } catch (e) {
    console.error(`Unable to open ${USER_FILE} file. Error: ${e.message}`);
    res.status(500);
    res.send({ message: "Unable to perform this operation." });
    return;
  }
  /**
   * Trying to transform the json file from string to json , in order to proccess it
   * if it fails notify the user
   */
  try {
    users = JSON.parse(users);
  } catch (e) {
    console.error(`Unable to read the info as JSON. Error: ${e.message}`);
    res.status(500);
    res.send({ message: "Unable to perform this operation." });
    return;
  }
  const userObj = users[username];
  let status = 200;
  if (!userObj) {
    message = "Username and/or password are invalid.";
    status = 401;

    res.status(status).send({ message });
    return;
  }

  if (userObj.password !== password) {
    message = "Username and/or password are invalid.";
    status = 401;

    res.status(status).send({ message });
    return;
  }

  const role = userObj.role;
  req.session.auth = {
    username,
    password,
    role,
  };

  message = "You have logged in successfully";

  // message = "Username and/or password are invalid.";
  // status = 401;

  res
    .status(status)
    .send({ message, adminAccess: role === "admin", username, role });
  return;
});

module.exports = router;
