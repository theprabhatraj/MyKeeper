var jwt = require("jsonwebtoken");

const JWT_SECRET = "PrabhatIsMyName";
const fetchuser = (req, res, next) => {
  //gate the user from the jwt token and add id to req object

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using vaalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using vaalid token" });
  }
};

module.exports = fetchuser;
