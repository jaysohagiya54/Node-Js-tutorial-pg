const shortid = require('shortid');
const URL = require("../models/url");

async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  try {
    const entry = await URL.findOneAndUpdate({shortId},{
      $push :{
        visitHistory : {
          timestamp: Date.now(),
        }
      }
    })
    
      if (!entry) {
          return res.status(404).send("URL not found");
      }
      return res.redirect(entry.redirectURL)
  } catch (error) {
      console.error("Error:", error);
      return res.status(500).send("Internal Server Error");
  }
}

async function handleGenrateUrlShort(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is missing" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy:req.user._id,
  });
  return res.render("home",{
    id:shortID
  })
}

async function handleAnalyticsUrl (req,res){
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics:result.visitHistory,
  })
}

module.exports = {
  handleGenrateUrlShort,
  handleAnalyticsUrl,
  handleRedirectURL,
};
