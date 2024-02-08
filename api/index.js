import express from "express";
import mongo from "mongoose";
import userRouter from "./route/user.route.js";
import authRouter from "./route/auth.route.js"
mongo
  .connect(
    "mongodb+srv://sahil:gupta@real-estate.en9dyrm.mongodb.net/real-state?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error");
  });
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)/*auth.rote signup*/