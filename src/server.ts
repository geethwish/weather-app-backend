import express from "express";
import connectDB from "./config/db";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import authRoutes from "./routes/authRoutes";
import weatherRoutes from "./routes/weatherRoutes";

// API documentation config file
import swaggerSetup from "./swagger";
dotenv.config();
const app = express();

// Use CORS middleware
const domainList = process.env.ALLOWED_DOMAINS ?? "";
const domainListArray = domainList.split(",");

app.use(
  cors({
    origin: [...domainListArray],
  })
);

// Establish Database connection
connectDB();

app.use(express.json());

// Handle routes
app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);
swaggerSetup(app);

console.log(process.env.PORT, "starting");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;
