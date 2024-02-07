const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");

app.use(express.urlencoded({ extended: false }));

//connection
connectMongoDB("mongodb://127.0.0.1:27017/youtube-1-app");
 
app.use('/api/users' , userRouter);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
