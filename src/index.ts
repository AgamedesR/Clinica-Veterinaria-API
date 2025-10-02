import express, { Express } from "express";
import dentistaRoutes from "./routes/dentistaRoutes";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(dentistaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});