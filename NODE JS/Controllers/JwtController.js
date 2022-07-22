const JWT = require("jsonwebtoken");
const { users } = require("../usersData");

exports.SignUp = (req, res) => {
  const { email, password } = req.body;

  let userData = users.find((data) => data.email === email);

  userData &&
    res.status(400).json({ status: "Failed", Message: "User Already Exists" });

  users.push({ email, password });

  const token = JWT.sign({ email }, "q1w2e3r4t5y6u7i8o9p0", {
    expiresIn: "1m",
  });

  res.status(201).json({
    status: "Success",
    data: token,
  });
};

exports.Login = (req, res) => {
  const { email } = req.body;
  let userData = users.find((data) => data.email === email);

  !userData &&
    res.status(401).json({
      status: "Failed",
      Message: "No Users Found",
    });

  const token = JWT.sign({ email }, "q1w2e3r4t5y6u7i8o9p0", {
    expiresIn: "1m",
  });

  const refreshToken = JWT.sign({ email }, "q1w2e3r4t5y6u7i8o9p0", {
    expiresIn: "10m",
  });

  res.status(200).json({ status: "Success", token, refreshToken });
};

exports.RefreshTokenHandler = (req, res) => {
  let refreshToken = req.headers["x-access-token"];

  let decode = JWT.decode(refreshToken);

  let currentUserMail = decode.email;

  if (currentUserMail) {
    const token = JWT.sign({ currentUserMail }, "q1w2e3r4t5y6u7i8o9p0", {
      expiresIn: "10m",
    });

    return res.status(200).json({
      status: "Success",
      data: { token, refreshToken },
    });
  }
};

exports.checkAuth = (req, res, next) => {
  console.log(req.headers);
  const { TokenExpiredError } = JWT;
  const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
      return res
        .status(401)
        .send({ message: "Unauthorized! Access Token was expired!" });
    }
    return res.sendStatus(401).send({ message: "Unauthorized!" });
  };
  console.log("hai inside");
  const token = req.headers["x-access-token"];
  console.log("tokens", token);
  if (!token) {
    res.status(400).json({
      errors: [{ msg: "No Token Found" }],
    });
  }
  JWT.verify(token, "q1w2e3r4t5y6u7i8o9p0", (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }
    next();
  });
};
