import express from "express";
import dotenv from "dotenv";
import consultaRoutes from "./routes/consultaRoutes";
import { setupSwagger } from "./swagger"; 
import pacienteRoutes from './routes/pacienteRoutes'; 
import dentistaRoutes from './routes/dentistaRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

console.log(consultaRoutes);
app.use("/consultas", consultaRoutes);
app.use("/pacientes", pacienteRoutes);
app.use("/dentistas", dentistaRoutes); 

setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
