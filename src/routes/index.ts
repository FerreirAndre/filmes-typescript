import express, { Request, Response } from 'express';
import filmes from './filmesRoutes';

const routes = (app: express.Application) => {
    app.route('/').get((req: Request, res: Response) => {
        res.send({ titulo: "Estudo de Node" });
    })

    app.use(
        express.json(),
        filmes
    );
}

export default routes;