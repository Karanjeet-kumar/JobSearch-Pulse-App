import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running..");
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running at port ${PORT}`.yellow.bold));
