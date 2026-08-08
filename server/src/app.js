import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use('/api/v1/auth', authRoute);

app.get('/', (_req, res) => {
    res.status(200).json({
        status: "OK",
        message: "API is working properly",
        uptime: Math.floor(process.uptime()) + " seconds"
    });
});

app.use(errorHandler);

export default app;