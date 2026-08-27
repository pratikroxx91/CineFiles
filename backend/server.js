import express from "express";
import cors from "cors";
import connectDB from "./src/dbase/connectDB.js";
import authRoutes from "./src/routes/authRoutes.js";
import movieRoutes from "./src/routes/movieRoutes.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});