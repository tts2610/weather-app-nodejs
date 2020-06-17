var express = require("express");
const getGeocode = require("../utils/getGeocode");
const getForecast = require("../utils/getForecast");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
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

    // console.log(process.env.MAPBOX_KEY);
    // console.log(req.query);
});

module.exports = router;