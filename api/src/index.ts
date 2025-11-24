import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import consultaRoutes from "./routes/consultaRoutes";
import veterinarioRoutes from "./routes/veterinarioRoutes";
import animalRoutes from "./routes/animalRoutes";
import secretarioRoutes from "./routes/secretarioRoutes";
import { setupSwagger } from "./swagger";

dotenv.config();

const app = express();

const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

const corsOptions = {
  origin: CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"]
};

app.use(cors(corsOptions));
app.options("/{*splat}", cors(corsOptions)); // responde preflight para todas rotas

app.use(express.json());

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use("/consultas", consultaRoutes);
app.use("/veterinarios", veterinarioRoutes);
app.use("/animais", animalRoutes);
app.use("/secretarios", secretarioRoutes);

setupSwagger(app);

app.listen(port, "0.0.0.0", () => {
  console.log(`🐾 Servidor rodando em http://localhost:${port}`);
  console.log(`📘 Swagger disponível em http://localhost:${port}/api-docs`);
});
