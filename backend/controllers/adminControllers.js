const User = require("../model/userModel");

let admin = {
  email: "admin@gmail.com",
  password: "123",
};
const adminLogin = (req, res) => {
  const { email, password } = req.body;
  console.log("//////////");
  console.log(req.body);
  if (!email || !password) {
    res.status(400);
    throw new Error("input missing");
  }
  if (email !== admin.email || password !== admin.password) {
    res.status(400);
    throw new Error("invalid credentials");
  }

  res.json({ email, password });
};

const adminHome = async (req, res) => {
  const users = await User.find({});
  res.json({ users });
};

module.exports = { adminLogin, adminHome };
