const handlers = require("./handlers");

const router = (req, res) => {
  if (req.url === "/") {
    req.url = "/public/index.html";
  }
  if (req.url.startsWith("/public")) {
    handlers.staticAssets(req, res);
  } else if (req.url === "/postSVG") {
    handlers.postSVG(req, res);
  } else if (req.url === "/getAllData") {
    handlers.getAllData(req, res);
  } else if (req.url === "/getSVGs") {
    handlers.getSVGs(req, res);
  } else if (req.url === "/postSHAPE") {
    handlers.postSHAPE(req, res);
  } else if (req.url === "/getSHAPEs") {
    handlers.getSHAPEs(req, res);
  } else if (req.url === "/insertSVG_SHAPE") {
    handlers.insertSVG_SHAPE(req, res);
  } else if (req.url === "/login") {
    handlers.login(req, res);
  } else {
    handlers.notFound(req, res);
  }
};

module.exports = router;
