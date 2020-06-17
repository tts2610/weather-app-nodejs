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
            const persons = res.data;
            this.setState({ persons });
        });
};