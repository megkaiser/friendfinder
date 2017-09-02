//DEPENDENCIES -- aka npm packages
var express = require("express");
var bodyParser = require("body-parser");

//EXPRESS CONFIGURATION -- aka set up basic properties for express server
var app = express();
var PORT = process.env.PORT || 8081;

//BODY PARSER -- aka allows server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//ROUTER -- aka point server to a series of "route" files
// -- gives server a "map" of how to respond when users visit or request data from URLs. --
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER -- aka code that "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});