var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Import routes and give the server access to them.
var burgerController = require("./controllers/burgers_controller.js");

// Import the models folder to use its database functions.
var db = require("./models");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    // burger.selectAll("burgers", function(data) {
    //   var hbsObject = {
    //     burgers: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    // });
    db.burger.findAll({}).then( function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

app.use("/", burgerController);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function(error) {
    if (error) {
      throw error;
    }

    console.log("Listening on port " + port);
  });
});


