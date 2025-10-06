import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clinica Odonto",
      version: "1.0.0",
      description: "Documentação da API de consultas, dentistas, pacientes e secretarios",
    },
    components: {
      schemas: {
        ConsultaCreate: {
          type: "object",
          required: ["dataHora", "pacienteId", "dentistaId"],
          properties: {
            dataHora: { type: "string", format: "date-time" },
            motivo: { type: "string" },
            pacienteId: { type: "integer" },
            dentistaId: { type: "integer" },
          },
        },
        ConsultaUpdate: {
          type: "object",
          properties: {
            dataHora: { type: "string", format: "date-time" },
            motivo: { type: "string" },
            pacienteId: { type: "integer" },
            dentistaId: { type: "integer" },
          },
          Paciente: {
            type: "object",
            properties: {
                id: { type: "integer" },
                nome: { type: "string" },
                email: { type: "string", format: "email" },
                cpf: { type: "string", description: "11 dígitos" },
                telefone: { type: "string" },
                dataNascimento: { type: "string", format: "date" },
            },
            required: ["nome", "email", "cpf", "dataNascimento"],
         },
        },
      },
    },
  },
  apis: ["./src/controllers/*.ts"],
};

export const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};