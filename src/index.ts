// src/index.ts

import express from "express";
import dotenv from "dotenv";
import consultaRoutes from "./routes/consultaRoutes";
import * as swaggerSetup from "./swagger"; 
import pacienteRoutes from './routes/pacienteRoutes'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

console.log(consultaRoutes);
app.use("/consultas", consultaRoutes);
app.use("/pacientes", pacienteRoutes);

// Chama a função através do objeto importado (swaggerSetup.setupSwagger)
swaggerSetup.setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});