const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/index.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/style.css"));
  //__dirname : It will resolve to your project folder.
});
app.get("/images/back.jpg", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/back.jpg"));
  //__dirname : It will resolve to your project folder.
});
app.get("/images/Anuar.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/Anuar.png"));
  //__dirname : It will resolve to your project folder.
});
app.get("/images/field.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/field.png"));
  //__dirname : It will resolve to your project folder.
});
app.get("/images/logo.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/logo.png"));
  //__dirname : It will resolve to your project folder.
});
app.get("/images/ball.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/ball.png"));
  //__dirname : It will resolve to your project folder.
});
app.get("/script.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/script.js"));
  //__dirname : It will resolve to your project folder.
});
app.get("/about.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/about/team_photo", function (req, res) {
  res.sendFile(path.join(__dirname + "/images/Team.png"));
  //__dirname : It will resolve to your project folder.
});
app.get("/video", function (req, res) {
  res.redirect(
    "https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps"
  );
});
app.listen(port);

// NODE JS
// function serveStaticFile(res, path, contentType, responseCode) {
//   if (!responseCode) {
//     responseCode = 200;
//   }
//   fs.readFile(__dirname + path, function (err, data) {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/html" });
//       res.end("505 - Internal Error");
//     } else {
//       res.writeHead(responseCode, { "Content-Type": contentType });
//       res.end(data);
//     }
//   });
// }
// http
//   .createServer(function (req, res) {
//     var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
//     switch (path) {
//       case "":
//         serveStaticFile(res, "/index.html", "text/html");
//         break;
//       case "/about":
//         serveStaticFile(res, "/about.html", "text/html");
//         break;
//       case "/images/back.jpg":
//         serveStaticFile(res, "/images/back.jpg", "image/jpg");
//         break;
//       case "/images/field.png":
//         serveStaticFile(res, "/images/field.png", "image/jpg");
//         break;
//       case "/images/logo.png":
//         serveStaticFile(res, "/images/logo.png", "image/jpg");
//         break;
//       case "/images/ball.png":
//         serveStaticFile(res, "/images/ball.png", "image/jpg");
//         break;
//       case "/style.css":
//         serveStaticFile(res, "/style.css", "text/css");
//         break;
//       case "/script.js":
//         serveStaticFile(res, "/script.js", "text/js");
//         break;
//       default:
//         serveStaticFile(res, "/error.html", "text/html");
//         break;
//     }
//   })
//   .listen(3000);
