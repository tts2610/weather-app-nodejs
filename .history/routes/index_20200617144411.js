var express = require("express");
const getGeocode = require("../utils/getGeocode");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    try {
        const { city } = req.query;
        console.log(city);
        if (city) {
            let res = getGeocode(city);
            if (res instanceof Error) {
                console.log("bbbb");
                throw res;
            }
        }
        return res.render("index", { title: "Awsome Weather App" });
    } catch (error) {
        next(error);
    }

    // console.log(process.env.MAPBOX_KEY);
    // console.log(req.query);
});

module.exports = router;