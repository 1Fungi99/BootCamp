var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening on localhost:" + PORT);
});

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
    case "/":
      return displayRoot(res);

    case "/food":
      return displayFood(res);

    case "/movies":
      return displayMovies(res);

    case "/framework":
      return displayFW(res);

    default:
      return display404(path, res);
  }
}

function displayFood(res) {
  var myHTML =
    "<html>" +
    "<body><h1>My Favorite Foods!</h1>" +
    '<a href="/">Home</a>' +
    '<a href="/food">Favorite Foods</a>' +
    '<a href="/movies"> Favorite Movies</a>' +
    '<a href="/framework"> Favorite Frameworks</a>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
}
function displayMovies(res) {
  var myHTML =
    "<html>" +
    "<body><h1>Favorite Movies</h1>" +
    '<a href="/"> Home</a>' +
    '<a href="/food"> Favorite Foods</a>' +
    '<a href="/movies"> Favorite Movies</a>' +
    '<a href="/framework"> Favorite Frameworks</a>';
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayFW(res) {
    var myHTML =
      "<html>" +
      "<body><h1>Favorite Frameworks</h1>" +
      '<a href="/"> Home</a>' +
      '<a href="/food"> Favorite Foods</a>' +
      '<a href="/movies"> Favorite Movies</a>' +
      '<a href="/framework"> Favorite Frameworks</a>';
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(myHTML);
  }
function display404(url, res) {
  var myHTML =
    "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " +
    url +
    " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(myHTML);
}
