const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

console.log(secret);


module.exports = req => {
  const cookies = cookie.parse(req.headers.cookie || "");
  const ourCookie = cookies.token;
  if (ourCookie) {
    console.log('our cookie = ', ourCookie);
    const verifiedCookie = jwt.verify(ourCookie, secret);
    if (verifiedCookie.username) return verifiedCookie;
    else return false;
  } else return false;
};
