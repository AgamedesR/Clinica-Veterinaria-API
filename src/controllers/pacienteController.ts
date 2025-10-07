import { Request, Response } from "express";
import { pacienteService } from "../services/pacienteServices"; 
import { pacienteCreateSchema, pacienteUpdateSchema } from "../validators/paciente.validator";
import { ZodError } from "zod";

export const pacienteController = {
  
  /**
   * @swagger
   * /pacientes:
   *   get:
   *     summary: Lista todos os pacientes
   *     tags: [Pacientes]
   *     responses:
   *       200:
   *         description: Lista de pacientes retornada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Paciente'
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const pacientes = await pacienteService.getAll();
      res.json(pacientes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   get:
   *     summary: Retorna um paciente por ID
   *     tags: [Pacientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Paciente encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Paciente'
   *       404:
   *         description: Paciente não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const paciente = await pacienteService.getById(id);
      res.json(paciente);
    } catch (error: any) {
      // Simplifica para 404, assumindo que o Service lança erro de "não encontrado"
      res.status(404).json({ error: error.message }); 
    }
  },

  /**
   * @swagger
   * /pacientes:
   *   post:
   *     summary: Cria um novo paciente
   *     tags: [Pacientes]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Paciente'
   *     responses:
   *       201:
   *         description: Paciente criado com sucesso
   *       400:
   *         description: Dados inválidos (Zod Error)
   *       409:
   *         description: CPF ou Email já cadastrado
   */
  create: async (req: Request, res: Response) => {
    try {
      const parsed = pacienteCreateSchema.parse(req.body);
      
      // Converte dataNascimento de string (vindo do Zod) para objeto Date
      const createData = {
        ...parsed,
        dataNascimento: new Date(parsed.dataNascimento),
      };

      const paciente = await pacienteService.create(createData as any); // 'as any' para evitar erro TS2345
      res.status(201).json(paciente);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else if (error.code === "P2002") {
        res.status(409).json({ error: "CPF ou Email já cadastrado." });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   put:
   *     summary: Atualiza um paciente
   *     tags: [Pacientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/PacienteUpdate'
   *     responses:
   *       200:
   *         description: Paciente atualizado com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Paciente não encontrado
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = pacienteUpdateSchema.parse(req.body);

      // Converte dataHora para Date, se estiver presente
      const updateData = {
        ...parsed,
        dataNascimento: parsed.dataNascimento ? new Date(parsed.dataNascimento) : undefined,
      };

      const updated = await pacienteService.update(id, updateData as any); // 'as any' para evitar erro TS2345
      res.json(updated);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else {
        // Simplifica para 404, assumindo que o Service lança erro de "não encontrado"
        res.status(404).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   delete:
   *     summary: Remove um paciente
   *     tags: [Pacientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       204:
   *         description: Paciente removido com sucesso
   *       404:
   *         description: Paciente não encontrado
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await pacienteService.remove(id);
      res.status(204).send(); // Muda para 204 como no seu código original
    } catch (error: any) {
      // Simplifica para 404, assumindo que o Service lança erro de "não encontrado"
      res.status(404).json({ error: error.message });
    }
  },
};