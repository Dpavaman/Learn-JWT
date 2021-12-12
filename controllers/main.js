const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }

  const token = await jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({ message: "User created", token });
};

const dashboard = async (req, res) => {
  //This dashboard just provides a number between 0-99 id the user is authorized;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello ${req.user}, Your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
