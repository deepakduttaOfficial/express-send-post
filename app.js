import express from "express";
import cors from "cors";

// import routes
import postRouter from "./routes/route.js";

const app = express();
app.use(cors());

app.use("/api", postRouter);

export default app;
