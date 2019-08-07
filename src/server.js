const http = require("http");
const router = require("./router");
const port = process.env.PORT || 3000;

http.createServer(router).listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
