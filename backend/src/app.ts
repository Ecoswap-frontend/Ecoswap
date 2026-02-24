
import express, {  type Application,type Request, type Response } from 'express';
import router  from './routes/user.route';
import cors from 'cors';


export const app: Application = express();

app.use(cors());
app.use(express.json())

app.use(router)










