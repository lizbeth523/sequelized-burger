var db = require("../models");

var express = require("express");

var router = express.Router();

// Create our burger routes and set up logic within those routes where required.
router.post("/api/burgers", function(req, res) {

	db.burger.create({
		burger_name: req.body.burger_name
	}).then( function(dbBurger) {
		res.redirect("/");
	}).catch( function(error) {
		res.json(error);
	});

});

router.put("/api/update", function(req, res) {
	
	db.burger.update({
		devoured: true
	}, {
		where: {
			id: req.body.burger_id
		}
	}).then( function(dbBurger) {
		res.redirect("/");
	}).catch( function(error) {
		res.json(error);
	});

});

module.exports = router;