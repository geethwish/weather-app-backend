import express from "express";
import connectDB from "./config/db";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
