import express, { Router } from 'express';
import FilmeController from '../controllers/filmesController';

const router: Router = express.Router();

router
    .get('/filmes', FilmeController.listarFilmes)
    .get('/filmes/:id', FilmeController.mostrarUmFilme)
    .post('/filmes', FilmeController.inserirFilme)
    .put('/filmes/:id', FilmeController.atualizarFilme)
    .delete('/filmes/:id', FilmeController.deletarFilme)

export default router;