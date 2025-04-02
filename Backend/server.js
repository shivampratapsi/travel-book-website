import express from "express";
import cors from "cors";
import connect from "./utils/dataBase.js";
import hotelRouter from "./Routes/HotelRouter.js";
import authRouter from "./Routes/AuthRouter.js";
import FilghtRouter from "./Routes/FlightsRouter.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/UserRouter.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:5175','http://localhost:5173','http://localhost:5174'],
  credentials: true,
}));


app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser());
app.use(userRouter);
app.use(authRouter);
app.use(hotelRouter);
app.use(FilghtRouter);

const PORT = 8000;
connect(() =>
  app.listen(PORT, () => {
    console.log("successfully connected");
    console.log(`server is running at http://localhost:${PORT}`);
  })
);
