const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, `${process.env.JWT_SECRET}`);
    const { id } = data;

    req.userID = id;

    return next();
  } catch {
    return res.sendStatus(401);
  }
};
