import express from "express";
import dotenv from "dotenv";
import consultaRoutes from "./routes/consultaRoutes";
import { setupSwagger } from "./swagger"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

console.log(consultaRoutes);
app.use("/consultas", consultaRoutes);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
