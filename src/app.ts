
import express, { json } from "express"
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./Router/index.js";
import errorHandleMiddleware from "./Middlewares/errorHandlerMiddleware.js";




const app = express();

dotenv.config();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandleMiddleware);


export default app;