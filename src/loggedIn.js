const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

console.log(secret);

module.exports = (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || "");
  const ourCookie = cookies.token;
  if (ourCookie) {
    try {
      const verifiedCookie = jwt.verify(ourCookie, process.env.SECRET);
      if (verifiedCookie.username) return verifiedCookie;
    } catch (e) {
      console.log("Invalid token!!! Clear Cookie");
      res.writeHead(301, {
        location: "/",
        "Set-Cookie": "token=false; Max-Age=0"
      });
      res.end();
      return e;
    }
  } else return false;
};
