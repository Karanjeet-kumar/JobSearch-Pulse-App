import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running..");
});

// api's
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running at port ${PORT}`.yellow.bold));
