import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
const app = express();
dotenv.config(); //loads environment variables from .env in root

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) =>
{
    res.send("Welcome!");
});

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