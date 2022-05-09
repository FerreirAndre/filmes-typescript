import express, { Express, Request, Response } from "express";
import db from './config/db';
import filmes from './models/Filmes';
import routes from './routes/index';

db.on('error', console.log.bind(console, "Erro ao conectar ao banco."));
db.once('open', () => { console.log("conexão ao banco feita com sucesso.") })

const app: Express = express();
app.use(express.json());

routes(app);

export default app;