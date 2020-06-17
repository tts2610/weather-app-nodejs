var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    // console.log(process.env.MAPBOX_KEY);
    // console.log(req.query);
    const { city } = req.query;
    console.log(city);
    res.render("index", { title: "Awsome Weather App" });
});

module.exports = router;