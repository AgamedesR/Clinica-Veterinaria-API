import { Request, Response } from 'express';
import { prisma } from '../utils/prisma'; 

export class PacienteController {
    async create(req: Request, res: Response) {
        try {
            const { nome, email, cpf, telefone, dataNascimento } = req.body;
            const dataNascimentoDate = new Date(dataNascimento);
            const paciente = await prisma.paciente.create({
                data: { nome, email, cpf, telefone, dataNascimento: dataNascimentoDate },
            });
            return res.status(201).json(paciente);
        } catch (error) {
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'CPF ou Email já cadastrado.' });
            }
            return res.status(500).json({ error: 'Erro ao criar paciente.' });
        }
    }

    async findAll(req: Request, res: Response) {
        const pacientes = await prisma.paciente.findMany();
        return res.status(200).json(pacientes);
    }
    
    async findById(req: Request, res: Response) {
        const id = parseInt(req.params.id); 
        const paciente = await prisma.paciente.findUnique({ where: { id } });
        if (!paciente) { return res.status(404).json({ error: 'Paciente não encontrado.' }); }
        return res.status(200).json(paciente);
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;
            if (data.dataNascimento) { data.dataNascimento = new Date(data.dataNascimento); }
            const paciente = await prisma.paciente.update({ where: { id }, data: data });
            return res.status(200).json(paciente);
        } catch (error) {
            if (error.code === 'P2025') { return res.status(404).json({ error: 'Paciente não encontrado para atualização.' }); }
            return res.status(500).json({ error: 'Erro ao atualizar paciente.' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await prisma.paciente.delete({ where: { id } });
            return res.status(204).send();
        } catch (error) {
            if (error.code === 'P2025') { return res.status(404).json({ error: 'Paciente não encontrado para exclusão.' }); }
            return res.status(500).json({ error: 'Erro ao deletar paciente.' });
        }
    }
}