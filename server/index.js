import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

const mongoURI =
  "mongodb+srv://shubhsingh1515:shubham@cluster0.qfaic.mongodb.net/mern-authentication?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
app.get("/", (req, res) => {
  res.send("server created");
});

app.use("/auth", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
