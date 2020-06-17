const axios = require("axios");

const getGeocode = (address) => {
    let token = process.env.MAPBOX_KEY;
    let res;
    axios
        .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${token}`
        )
        .then((res) => {
            const data = res.data.features;
            if (data.length === 0) {
                console.log("AAAAA");
                res = new Error("there is no results for your city name");
            }
            res = res.data.features[0].geometry.coordinates;
        })
        .then(() => {
            return res;
        });

    return res;
};

module.exports = getGeocode;