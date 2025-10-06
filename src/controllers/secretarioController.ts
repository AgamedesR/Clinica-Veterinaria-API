import { Request, Response } from 'express';
import * as secretarioService from '../services/secretarioService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Secretario:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do secretário
 *         nome:
 *           type: string
 *           description: Nome completo do secretário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do secretário
 *         telefone:
 *           type: string
 *           description: Telefone do secretário
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *       example:
 *         id: 1
 *         nome: "João Silva"
 *         email: "joao.silva@email.com"
 *         telefone: "(11) 99999-9999"
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-01T00:00:00.000Z"
 * 
 *     SecretarioInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome completo do secretário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do secretário
 *         telefone:
 *           type: string
 *           description: Telefone do secretário
 *       example:
 *         nome: "João Silva"
 *         email: "joao.silva@email.com"
 *         telefone: "(11) 99999-9999"
 * 
 *   responses:
 *     NotFound:
 *       description: Secretário não encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Secretário(a) não encontrado(a)."
 * 
 *     Conflict:
 *       description: E-mail já está em uso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Email já está em uso."
 * 
 *     InternalError:
 *       description: Erro interno do servidor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Erro interno do servidor"
 */

/**
 * @swagger
 * /secretarios:
 *   post:
 *     summary: Cria um novo secretário
 *     tags: [Secretários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SecretarioInput'
 *     responses:
 *       201:
 *         description: Secretário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Secretario'
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
export const createSecretario = async (req: Request, res: Response) => {
  try {
    const secretario = await secretarioService.create(req.body);
    return res.status(201).json(secretario);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'Email já está em uso.' });
    }
    return res.status(500).json({ message: error.message });
  }
};

/**
 * @swagger
 * /secretarios:
 *   get:
 *     summary: Retorna todos os secretários
 *     tags: [Secretários]
 *     responses:
 *       200:
 *         description: Lista de todos os secretários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Secretario'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
export const getAllSecretarios = async (req: Request, res: Response) => {
  try {
    const secretarios = await secretarioService.getAll();
    return res.json(secretarios);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * @swagger
 * /secretarios/{id}:
 *   get:
 *     summary: Retorna um secretário pelo ID
 *     tags: [Secretários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do secretário
 *     responses:
 *       200:
 *         description: Secretário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Secretario'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
export const getSecretarioById = async (req: Request, res: Response) => {
  try {
    const secretario = await secretarioService.getById(Number(req.params.id));
    if (!secretario) return res.status(404).json({ message: 'Secretário(a) não encontrado(a).' });
    return res.json(secretario);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * @swagger
 * /secretarios/{id}:
 *   put:
 *     summary: Atualiza um secretário existente
 *     tags: [Secretários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do secretário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SecretarioInput'
 *     responses:
 *       200:
 *         description: Secretário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Secretario'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
export const updateSecretario = async (req: Request, res: Response) => {
  try {
    const secretario = await secretarioService.update(Number(req.params.id), req.body);
    return res.json(secretario);
  } catch (error: any) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Secretário(a) não encontrado(a).' });
    if (error.code === 'P2002') return res.status(409).json({ message: 'Email já está em uso.' });
    return res.status(500).json({ message: error.message });
  }
};

/**
 * @swagger
 * /secretarios/{id}:
 *   delete:
 *     summary: Remove um secretário
 *     tags: [Secretários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do secretário
 *     responses:
 *       204:
 *         description: Secretário removido com sucesso
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
export const deleteSecretario = async (req: Request, res: Response) => {
  try {
    await secretarioService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Secretário(a) não encontrado(a).' });
    return res.status(500).json({ message: error.message });
  }
};