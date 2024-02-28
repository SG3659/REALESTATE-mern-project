import express, { json } from "express";
import mongo from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
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

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter); /*auth.rote signup*/

/*create a middleware and fuction to controol error*/
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode:statusCode,
    message:message,
  });
});
