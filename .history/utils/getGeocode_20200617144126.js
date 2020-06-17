const axios = require("axios");

const getGeocode = (address, next) => {
    let token = process.env.MAPBOX_KEY;
    axios
        .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${token}`
        )
        .then((res) => {
            const data = res.data.features;
            if (data.length === 0) {
                return new Error("there is no results for your city name");
            }
            return res.data.features.geometry.coordinates;
        });
};

module.exports = getGeocode;