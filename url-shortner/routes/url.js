const express = require("express");
const { handleGenrateUrlShort,handleAnalyticsUrl ,handleRedirectURL} = require("../controllers/url");

const router = express.Router();

router.route("/").post(handleGenrateUrlShort);
router.get("/:shortId", handleRedirectURL)
router.get("/analytics/:shortId",handleAnalyticsUrl);



module.exports = router;
