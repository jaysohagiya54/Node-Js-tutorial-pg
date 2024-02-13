const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express()
app.use(express.json())

app.use("/api/contacts", require("./routes/contactsRoute"))

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})