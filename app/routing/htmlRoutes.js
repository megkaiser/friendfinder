//HW DIRECTIONS -- need 2 routes
//1st -- GET route /api/friends -- used to display a JSON of all possible friends
//2nd -- POST route /api/friends -- used to handle incoming survey results, and to handle compatibility logic

var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};