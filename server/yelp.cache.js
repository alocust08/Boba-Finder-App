const NodeCache = require("node-cache");
const yelpCache = new NodeCache({ stdTTL: 600, deleteOnExpire: true }); // Cache for 10 minutes

module.exports = yelpCache;
// This module creates a cache for Yelp API responses using NodeCache.
// The cache is set to expire after 10 minutes (600 seconds).
// The cache is set to deleteon expiration, meaning that once the cache expires, the data will be removed from the cache.