import express from 'express';
import dotenv from 'dotenv';
// Variaveis de .env
dotenv.config();
const app = express();
// Middleware p/ JSON
app.use(express.json());
// Porta env ou 3000 como fallback
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API rodando com sucesso!');
});
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
