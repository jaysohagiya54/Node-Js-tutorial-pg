const express = require("express");
const path = require('path');
const urlRoute = require("./routes/url");
const userRoute  =require("./routes/user")
const staticRoute = require("./routes/staticRoute")
const {restrictToLoggedinUserOnly,checkAuth} = require("./middlewares/auth");
const { connectDBurl } = require("./connect");
const URL = require('./models/url');
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:false})); 
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user",userRoute)
app.use("/",checkAuth,staticRoute);

const PORT = 8001;

connectDBurl('mongodb://localhost:27017/short-url')
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));  




// app.use("/id/:shortId",async (req,res) => {
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate({shortId},{
//     $push :{
//       visitHistory : {
//         timestamp: Date.now(),
//       }
//     }
//   })
//   return res.redirect(entry.redirectURL)
// })


app.listen(PORT,() => {
  console.log(`Server is running at PORT:${PORT}`);
});
