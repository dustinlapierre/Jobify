import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config(); //loads environment variables from .env in root
import "express-async-errors"; //allows you to avoid try/catch in controllers

//db and auth
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

//parse incoming json
app.use(express.json());

app.get("/", (req, res) =>
{
    res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () =>
{
    try
    {
        //attempt connect and start server if successful
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>
        {
            console.log(`Server is listening on port ${port}`);
        });
    }
    catch(error)
    {
        console.log(error);
    }
};
start();