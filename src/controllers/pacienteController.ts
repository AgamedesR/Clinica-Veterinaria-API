import { Request, Response } from 'express';
import { prisma } from '../utils/prisma'; 
import { pacienteCreateSchema, pacienteUpdateSchema } from '../validators/paciente.validator'; 
import { ZodError } from 'zod';

export const pacienteController = {

  /**
   * @swagger
   * /pacientes:
   *   get:
   *     summary: Lista todos os pacientes
   *     tags: [Pacientes]
   *     responses:
   *       200:
   *         description: Lista de pacientes retornada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Paciente'
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const pacientes = await prisma.paciente.findMany();
      res.status(200).json(pacientes);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Erro ao buscar pacientes.' });
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   get:
   *     summary: Retorna um paciente por ID
   *     tags: [Pacientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Paciente encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Paciente'
   *       404:
   *         description: Paciente não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const paciente = await prisma.paciente.findUnique({ where: { id } });
      if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado.' });
      res.status(200).json(paciente);
    } catch (error: any) {
      res.status(500).json({ error: 'Erro ao buscar paciente.' });
    }
  },

  /**
   * @swagger
   * /pacientes:
   *   post:
   *     summary: Cria um novo paciente
   *     tags: [Pacientes]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Paciente'
   *     responses:
   *       201:
   *         description: Paciente criado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Paciente'
   *       400:
   *         description: Dados inválidos (Zod Error)
   *       409:
   *         description: CPF ou Email já cadastrado
   */
  create: async (req: Request, res: Response) => {
    try {
      const validatedData = pacienteCreateSchema.parse(req.body); 
      const paciente = await prisma.paciente.create({ data: validatedData });
      res.status(201).json(paciente);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else if (error.code === 'P2002') {
        res.status(409).json({ error: 'CPF ou Email já cadastrado.' });
      } else {
        res.status(500).json({ error: 'Erro ao criar paciente.' });
      }
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   put:
   *     summary: Atualiza um paciente
   *     tags: [Pacientes]
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
   *             $ref: '#/components/schemas/PacienteUpdate'
   *     responses:
   *       200:
   *         description: Paciente atualizado com sucesso
   *       400:
   *         description: Dados inválidos (Zod Error)
   *       404:
   *         description: Paciente não encontrado
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = pacienteUpdateSchema.parse(req.body);
      const paciente = await prisma.paciente.update({ where: { id }, data: validatedData });
      res.status(200).json(paciente);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else if (error.code === 'P2025') {
        res.status(404).json({ error: 'Paciente não encontrado.' });
      } else {
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
      }
    }
  },

  /**
   * @swagger
   * /pacientes/{id}:
   *   delete:
   *     summary: Remove um paciente
   *     tags: [Pacientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       204:
   *         description: Paciente removido com sucesso
   *       404:
   *         description: Paciente não encontrado
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await prisma.paciente.delete({ where: { id } });
      res.status(204).send();
    } catch (error: any) {
      if (error.code === 'P2025') {
        res.status(404).json({ error: 'Paciente não encontrado.' });
      } else {
        res.status(500).json({ error: 'Erro ao deletar paciente.' });
      }
    }
  },
};
