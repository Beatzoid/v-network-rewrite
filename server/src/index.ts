import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI!;

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect(URI, (err: any) => {
    if (err) console.error(err);

    console.log("Successfully connected to MongoDB!");
});

app.get("/", (_, res) => {
    res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
