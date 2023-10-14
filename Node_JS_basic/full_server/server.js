import express from 'express';
import controllerRouting from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 1245;

controllerRouting(app);

app.use('/', routes);

export default app;
