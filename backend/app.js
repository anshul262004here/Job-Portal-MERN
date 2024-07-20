import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRouter from './router/userRoutes.js';
import applicationRouter from './router/applicationRoutes.js';
import jobRouter from './router/jobRoutes.js';
import { connectDB } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';


config({
    path: './config/config.env'
})

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);

connectDB();
app.use(errorMiddleware);




export default app;
