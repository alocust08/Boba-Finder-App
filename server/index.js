const express = require("express");
const cors = require("cors");
const path = require('path');
const businessSearch = require("./yelp-business-search");

const PORT = 3001;

const app = express();

app.use(cors());

app.get("/boba-search", (req, res) => {
        const location = req.query.location || "Los Gatos";
        const term = req.query.term || "boba";
        const sort_by = req.query.sort_by || "rating";;
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 20;
        const radius = parseInt(req.query.radius) || 10000;

        businessSearch
        .getBusinessSearch(location, term, sort_by, page, radius, limit)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                if (error.status >= 400 && error.status < 500) {
                    res.status(error.status).json({ error: "Error! If the problem persists, please contact the site owner." });
                }
                else if (error.status >= 500) {
                    res.status(500).json({ error: error.message });
                } else {
                    res.status(500).json({ error: "Unknown Error" });
                }
            });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});