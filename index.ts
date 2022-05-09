import app from './src/app';

const port = 3000;

app.listen(port, () => {
    console.log(`aplicação rodando em http://localhost:${port}`);
})
