import { PrismaClient } from "../generated/prisma";
import { z } from "zod";
import { dentistaCreateSchema, dentistaUpdateSchema } from "./dentista.validator";

const prisma = new PrismaClient();

export const dentistaService = {
  async getAll() {
    return prisma.dentista.findMany({
      orderBy: { nome: "asc" },
    });
  },

  async getById(id: number) {
    const dentista = await prisma.dentista.findUnique({
      where: { id },
    });
    if (!dentista) throw new Error("Dentista não encontrado");
    return dentista;
  },

  async create(data: z.infer<typeof dentistaCreateSchema>) {
    const existingDentista = await prisma.dentista.findFirst({
      where: {
        OR: [
          { cro: data.cro },
          { email: data.email }
        ]
      }
    });

    if (existingDentista) {
      if (existingDentista.cro === data.cro) {
        throw new Error("CRO já cadastrado");
      }
      if (existingDentista.email === data.email) {
        throw new Error("Email já cadastrado");
      }
    }

    return prisma.dentista.create({ data });
  },

  async update(id: number, data: z.infer<typeof dentistaUpdateSchema>) {
    const dentista = await prisma.dentista.findUnique({ where: { id } });
    if (!dentista) throw new Error("Dentista não encontrado");

    if (data.cro && data.cro !== dentista.cro) {
      const existingCro = await prisma.dentista.findUnique({ where: { cro: data.cro } });
      if (existingCro && existingCro.id !== id) {
        throw new Error("CRO já cadastrado por outro dentista");
      }
    }
    if (data.email && data.email !== dentista.email) {
      const existingEmail = await prisma.dentista.findUnique({ where: { email: data.email } });
      if (existingEmail && existingEmail.id !== id) {
        throw new Error("Email já cadastrado por outro dentista");
      }
    }

    return prisma.dentista.update({
      where: { id },
      data,
    });
  },

  async remove(id: number) {
    const dentista = await prisma.dentista.findUnique({ where: { id } });
    if (!dentista) throw new Error("Dentista não encontrado");

    const consultasAssociadas = await prisma.consulta.count({
      where: { dentistaId: id }
    });

    if (consultasAssociadas > 0) {
      throw new Error("Não é possível excluir o dentista, pois há consultas associadas a ele.");
    }

    await prisma.dentista.delete({ where: { id } });
    return { message: "Dentista excluído com sucesso" };
  },
};
