import express, { json } from "express";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";


const app = express();

// Database connect
mongoose.connect(
  process.env.CONN_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("connected to db")
);
app.use(json());
//  import routes
app.use('/user', userRouter)
app.listen(4000, () => {
  console.log("server app running in port 4000");
});




