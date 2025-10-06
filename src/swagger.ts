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
        // Schema dentista
        Dentista: {
          type: "object",
          properties: {
            id: { type: "integer" },
            nome: { type: "string" },
            cro: { type: "string" },
            email: { type: "string" },
            telefone: { type: "string" },
          },
        },
        DentistaCreate: {
          type: "object",
          required: ["nome", "cro", "email", "telefone"],
          properties: {
            nome: { type: "string" },
            cro: { type: "string" },
            email: { type: "string" },
            telefone: { type: "string" },
          },
        },
        DentistaUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            cro: { type: "string" },
            email: { type: "string" },
            telefone: { type: "string" },
          },
        },

        //Schema consulta
        
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
        },

        Error: {
          type: "object",
          properties: {
            error: { type: "string" },
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
