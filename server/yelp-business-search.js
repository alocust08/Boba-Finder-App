const yelpApi = require("./yelp-api-client");
const yelpCache = require("./yelp.cache");
const config = require("config");

const LOS_GATO_LOCATION = config.get("office_locations.los_gatos");
const NEW_YORK_LOCATION = config.get("office_locations.new_york");
const LOS_ANGELES_LOCATION = config.get("office_locations.los_angeles");

const getFullLocation = (location) => {
    const locationMap = {
        "Los Gatos": LOS_GATO_LOCATION,
        "New York": NEW_YORK_LOCATION,
        "Los Angeles": LOS_ANGELES_LOCATION
    };

    return locationMap[location] || LOS_GATO_LOCATION;
}


const getBusinessSearch = async (location, term, sort_by, page, radius, limit) => {
    const offset = page * limit;
    location = getFullLocation(location);

    const cacheKey = `business_search_${location}_${term}_${sort_by}_${offset}_${limit}`;
    const cachedData = yelpCache.get(cacheKey);

    if (cachedData) {
        console.log("Cache hit for business search")
        return cachedData;
    }

    try {
        const response = await yelpApi.get("/businesses/search", {
            params: {
                location,
                term,
                sort_by,
                limit,
                offset,
                radius
            }
        });

        yelpCache.set(cacheKey, response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching business search data:", error);
        throw error;
    }
};

module.exports = {getBusinessSearch};

// This module handles the business search functionality for the Yelp API.