var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log(hbsObject);
      //res.end(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burgers.insert("burger_name,devour", "'"+req.body.name+"',false", function(result) {
      // Send back the ID of the new burger
      res.redirect('/');
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var id = req.params.id;
    var devoured = true;
  
    //console.log("id: " + id + " | devoured: " + devoured);
  
    burgers.update(id,devoured,
      function(result) {
          res.redirect("/");  
      }
    );
  });

// Export routes for server.js to use.
module.exports = router;