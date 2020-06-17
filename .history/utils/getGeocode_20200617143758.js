const axios = require("axios");

const getGeocode = (address) => {
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
            console.log(res.data.features.geometry.coordinate);
            return res;
        });
};

module.exports = getGeocode;