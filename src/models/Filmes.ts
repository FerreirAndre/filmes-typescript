import mongoose from 'mongoose';

const filmesSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        diretor: { type: String, required: true },
        imdb: { type: Number, required: true }
    }
)

const filmes = mongoose.model('filmes', filmesSchema);

export default filmes;