var express = require("express");
const getGeocode = require("../utils/getGeocode");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    const { city } = req.query;
    console.log(city);
    if (city) {
        getGeocode(city);
    }
    return res.render("index", { title: "Awsome Weather App" });

    // console.log(process.env.MAPBOX_KEY);
    // console.log(req.query);
});

module.exports = router;