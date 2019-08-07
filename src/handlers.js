const fs = require("fs");
const path = require("path");

module.exports = {
  staticAssets(req, res) {
    const extension = path.extname(req.url).substring(1);
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    const filePath = path.join(__dirname, "..", req.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(error.message);
      } else {
        res.writeHead(200, { "content-type": extensionType[extension] });
        res.end(file);
      }
    });
  },

  postSVG(req, res) {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(data);
      let dataObject = JSON.parse(data);
      postSVGquery(dataObject.name, dataObject.props, (error, result) => {
        if (error) console.log(error);
        console.log(result);
        res.writeHead(200, { "content-type": "text/html" });
        res.end();
      });
    });
  },

  notFound(req, res) {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: File not found");
  }
};
