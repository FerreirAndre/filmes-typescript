import filmes from '../models/Filmes';
import { Request, Response } from 'express';

class FilmeController {
    static listarFilmes = (req: Request, res: Response) => {
        filmes.find((err, filmes) => {
            res.status(200).json(filmes);
        });
    }

    static inserirFilme = (req: Request, res: Response) => {
        const filme = new filmes(req.body)

        filme.save((err: Error) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao inserir filme.` });
                return;
            }
            res.status(201).send(filme.toJSON());
        })
    }

    static atualizarFilme = (req: Request, res: Response) => {
        const id = req.params.id;
        filmes.findByIdAndUpdate(id, { $set: req.body }, (err: Error) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return
            }
            res.status(200).send({ message: 'informações do filme atualizadas com sucesso' });
        });
    }

    static mostrarUmFilme = (req: Request, res: Response) => {
        const id = req.params.id;
        filmes.findById(id, (err: Error, filmes: any) => {
            if (err) {
                res.status(400).send({ message: err.message });
                return;
            }
            res.status(200).send(filmes);
        })
    }

    static deletarFilme = (req: Request, res: Response) => {
        const id = req.params.id;
        filmes.findByIdAndDelete(id, (err: Error) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return
            }
            res.status(200).send({ message: `filme deletado com sucesso` })
        })
    }
}

export default FilmeController;