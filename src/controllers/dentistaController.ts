import { Request, Response, Router } from "express";
import { dentistaService } from "../services/dentistaService";
import { dentistaCreateSchema, dentistaUpdateSchema } from "../validators/dentista.validator";
import { ZodError } from "zod";

export const dentistaController = {
  /**
   * @swagger
   * /dentistas:
   *   get:
   *     summary: Lista todos os dentistas
   *     tags: [Dentistas]
   *     responses:
   *       200:
   *         description: Lista de dentistas retornada com sucesso
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const dentistas = await dentistaService.getAll();
      res.json(dentistas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /dentistas/{id}:
   *   get:
   *     summary: Retorna um dentista por ID
   *     tags: [Dentistas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Dentista encontrado
   *       404:
   *         description: Dentista não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const dentista = await dentistaService.getById(id);
      res.json(dentista);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /dentistas:
   *   post:
   *     summary: Cria um novo dentista
   *     tags: [Dentistas]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/DentistaCreate'
   *     responses:
   *       201:
   *         description: Dentista criado com sucesso
   *       400:
   *         description: Dados inválidos
   *       409:
   *         description: CRO ou Email já cadastrado
   */
  create: async (req: Request, res: Response) => {
    try {
      const parsed = dentistaCreateSchema.parse(req.body);
      const dentista = await dentistaService.create(parsed);
      res.status(201).json(dentista);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else if (
        error.message.includes("CRO já cadastrado") ||
        error.message.includes("Email já cadastrado")
      ) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /dentistas/{id}:
   *   put:
   *     summary: Atualiza um dentista
   *     tags: [Dentistas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/DentistaUpdate'
   *     responses:
   *       200:
   *         description: Dentista atualizado com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Dentista não encontrado
   *       409:
   *         description: CRO ou Email já cadastrado por outro dentista
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = dentistaUpdateSchema.parse(req.body);
      const updated = await dentistaService.update(id, parsed);
      res.json(updated);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else if (
        error.message.includes("CRO já cadastrado") ||
        error.message.includes("Email já cadastrado")
      ) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(404).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /dentistas/{id}:
   *   delete:
   *     summary: Remove um dentista
   *     tags: [Dentistas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Dentista removido com sucesso
   *       404:
   *         description: Dentista não encontrado
   *       409:
   *         description: Não é possível excluir o dentista, pois há consultas associadas a ele.
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await dentistaService.remove(id);
      res.json(result);
    } catch (error: any) {
      if (error.message.includes("consultas associadas")) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(404).json({ error: error.message });
      }
    }
  },
};
