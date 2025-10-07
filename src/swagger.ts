import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clínica Odonto",
      version: "1.0.0",
      description: "Documentação da API de consultas, dentistas, pacientes e secretários",
    },
    components: {
      schemas: {
        // =================== Consultas ===================
        ConsultaCreate: {
        // Schemas de dentista
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

        //Schemas de consulta
        
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

  // Schemas de secretario
  Secretario: {
    type: "object",
    properties: {
      id: { type: "integer" },
      nome: { type: "string" },
      email: { type: "string" },
      telefone: { type: "string" },
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" },
    },
  },
  SecretarioCreate: {
    type: "object",
    required: ["nome", "email", "telefone"],
    properties: {
      nome: { type: "string" },
      email: { type: "string" },
      telefone: { type: "string" },
    },
  },
  SecretarioUpdate: {
    type: "object",
    properties: {
      nome: { type: "string" },
      email: { type: "string" },
      telefone: { type: "string" },
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

        // =================== Dentistas ===================
        DentistaCreate: {
          type: "object",
          required: ["nome", "email", "cro", "especialidade"],
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            cro: { type: "string" },
            especialidade: { type: "string" },
          },
        },
        DentistaUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            cro: { type: "string" },
            especialidade: { type: "string" },
          },
        },

        // =================== Pacientes ===================
        PacienteCreate: {
          type: "object",
          required: ["nome", "email", "cpf", "dataNascimento"],
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            cpf: { type: "string" },
            telefone: { type: "string" },
            dataNascimento: { type: "string", format: "date" },
          },
        },
        PacienteUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            cpf: { type: "string" },
            telefone: { type: "string" },
            dataNascimento: { type: "string", format: "date" },
          },
        },

        // =================== Secretários ===================
        SecretarioCreate: {
          type: "object",
          required: ["nome", "email", "senha"],
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            senha: { type: "string" },
            telefone: { type: "string" },
          },
        },
        SecretarioUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string" },
            senha: { type: "string" },
            telefone: { type: "string" },
          },
        },

        //Schemas de erro
        
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