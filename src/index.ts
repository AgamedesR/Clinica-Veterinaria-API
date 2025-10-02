import express from "express";
import dotenv from "dotenv";

dotenv.config(); // carrega as variáveis do .env

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
