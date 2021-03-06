const axios = require("axios");

const getGeocode = async(address) => {
    let token = process.env.MAPBOX_KEY;
    try {
        const res = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${token}`
        );

        if (res.data.features.length === 0) {
            throw new Error("City not found!");
        }
        return res.data.features[0];
    } catch (error) {
        throw error;
    }
};

module.exports = getGeocode;