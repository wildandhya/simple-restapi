const response = require("../helper/response");
const jwt = require("jsonwebtoken");

module.exports = {
  Authentication(req, res, next) {
    if (!req.headers.authorization) {
        console.log("masuk")
      return response.error(res, 402, "not authenticated", []);
    }
    let token = req.headers.authorization?.split(" ")[1];
    const secretKey = "secret";
    try {
      if (token) {
         const credential = jwt.verify(token, "Secret");
         if (credential) {
          req.app.locals.credential = credential;
          return next();
        }
        return response.error(res, 402, "token invalid", []);
      }
    } catch (err) {
      res.send(err);
    }
  },
};
