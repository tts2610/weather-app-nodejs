var express = require("express");
const getGeocode = require("../utils/getGeocode");
const getForecast = require("../utils/getForecast");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    let currentCoors = [];

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    function showPosition(position) {}
    try {
        const { city } = req.query;
        let forecast;
        if (city) {
            let result = await getGeocode(city);
            forecast = await getForecast(result);
            return res.render("index", {
                title: "Awsome Weather App",
                forecast: forecast.current,
            });
        }

        return res.render("index", {
            title: "Awsome Weather App",
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;