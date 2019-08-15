const handlers = require("./handlers");
const log = require("./loggedIn");

const router = (req, res) => {
  const logged_In = log(req,res);
  if (logged_In instanceof Error) return;
  if (logged_In) {
    //Protected Route
    if (req.url === "/") {
      req.url = "/public/indexProtected.html";
    }
    if (req.url.startsWith("/public")) {
      handlers.staticAssets(req, res, logged_In.username);
    } else if (req.url === "/postSVG") {
      handlers.postSVG(req, res, logged_In.id);
    } else if (req.url === "/getAllData") {
      handlers.getAllData(req, res);
    } else if (req.url === "/getSVGs") {
      handlers.getSVGs(req, res, logged_In.id);
    } else if (req.url === "/postSHAPE") {
      handlers.postSHAPE(req, res);
    } else if (req.url === "/getSHAPEs") {
      handlers.getSHAPEs(req, res);
    } else if (req.url === "/insertSVG_SHAPE") {
      handlers.insertSVG_SHAPE(req, res);
    } else if (req.url === "/logout") {
      handlers.logout(req, res);
    } else {
      handlers.notFound(req, res);
    }
  } else {
    //Unprotected Route
    if (req.url === "/") {
      req.url = "/public/indexUnprotected.html";
    }
    if (req.url.startsWith("/public")) {
      handlers.staticAssets(req, res);
    } else if (req.url === "/login") {
      handlers.login(req, res);
    } else if (req.url === "/getAllData") {
      handlers.getAllData(req, res);
    }
  }
};

module.exports = router;
