var http = require("http");
var PORTone = 7000;
var PORTtwo = 7500;

function handleRequest(request, response) {
  response.end("It worked! Path hit: " + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


if (process.argv[2] == 1) {
  server1.listen(PORTone, function() {
    console.log(
      "Port: " +
        PORTone +
        " You have to remember something: Everybody pities the weak; jealousy you have to earn."
    );
  });
}

if (process.argv[2] == 2) {
  server2.listen(PORTtwo, function() {
    console.log(
      "Port: " +
        PORTtwo +
        " What is the point of being on this Earth if you are going to be like everyone else?"
    );
  });
}
