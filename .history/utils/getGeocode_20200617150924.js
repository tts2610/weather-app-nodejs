const axios = require("axios");

const getGeocode = async(address) => {
    let token = process.env.MAPBOX_KEY;
    let result;
    try {
        const res = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${token}`
        );

        return res.data.features[0].geometry.coordinates;
    } catch (error) {
        throw error;
    }
};

module.exports = getGeocode;