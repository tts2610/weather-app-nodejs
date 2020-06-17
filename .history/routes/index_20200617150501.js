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
            if (res === undefined) {
                throw new Error("City not found");
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