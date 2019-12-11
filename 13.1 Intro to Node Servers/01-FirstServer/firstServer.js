//from scratch file 'server.js
var http = require("http");
var PORT = 8080; // standard port for http is 8

function handleRequest(request, response) {
  response.end("it worked!! muahahahahahahaha. \nPath hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("server is listening on port " + PORT);
});
