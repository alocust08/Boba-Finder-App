const axios = require("axios");
const config = require("config");

const yelpApi = axios.create({
    baseURL: "https://api.yelp.com/v3",
    headers: {
        "Authorization": `Bearer ${config.get("yelp_api_key")}`,
        "Accept": "application/json"
    },
});

module.exports = yelpApi;
