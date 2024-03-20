import express from 'express';
import { createConfigHandler } from './config.js';

const app = express();

app.use(...createConfigHandler());
app.use(express.static('dist'));

app.listen(8080);
