var http = require("http");
var fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) {
    responseCode = 200;
  }
  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("505 - Internal Error");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}
http
  .createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
      case "":
        serveStaticFile(res, "/index.html", "text/html");
        break;
      case "/about":
        serveStaticFile(res, "/about.html", "text/html");
        break;
      case "/images/back.jpg":
        serveStaticFile(res, "/images/back.jpg", "image/jpg");
        break;
      case "/images/field.png":
        serveStaticFile(res, "/images/field.png", "image/jpg");
        break;
      case "/images/logo.png":
        serveStaticFile(res, "/images/logo.png", "image/jpg");
        break;
      case "/images/ball.png":
        serveStaticFile(res, "/images/ball.png", "image/jpg");
        break;
      case "/style.css":
        serveStaticFile(res, "/style.css", "text/css");
        break;
      case "/script.js":
        serveStaticFile(res, "/script.js", "text/js");
        break;
      default:
        serveStaticFile(res, "/error.html", "text/html");
        break;
    }
  })
  .listen(3000);
