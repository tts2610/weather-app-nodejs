var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    // console.log(process.env.MAPBOX_KEY);
    alert(req.query);
    res.render("index", { title: "Awsome Weather App" });
});

module.exports = router;