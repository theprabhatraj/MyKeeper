const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "PrabhatIsMyName";

// Route 1: //create user using: POST "/api/auth/createuser"
router.post("/createuser", [body("name", "Enter a valid name").isLength({ min: 3 }), body("email", "Enter a valid email").isEmail(), body("password", "Must be 6 letter long").isLength({ min: 6 })], async (req, res) => {
  let success = false;
  //If there are errror, return Bad request and the erroes

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    //check wheater the user already exist with the same email
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "A user with same email already exists." });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const userPass = await bcrypt.hashSync(req.body.password, salt);
    //creating the user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: userPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);

    // res.json(user);
    success = true;
    res.json({ success, authtoken });

    //catching the error after trying
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some Internal server error occured");
  }
});

// Route 2: //Login user using: POST "/api/auth/login"
router.post("/login", [body("email", "Enter a valid email").isEmail(), body("password", "Password cannot be empty").exists()], async (req, res) => {
  let success = false;
  //If there are errror, return Bad request and the erroes

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ error: "Incorrect email or password" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: "Incorrect email or password" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.send({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some Internal server error occured");
  }
});

// Route 3: //Get user details using: POST "/api/auth/getuser" :Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some Internal server error occured");
  }
});
module.exports = router;
