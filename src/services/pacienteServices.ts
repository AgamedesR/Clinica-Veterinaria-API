import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
interface PacienteCreateData {
  nome: string;
  email: string;
  cpf: string;
  telefone?: string;
  dataNascimento: Date;
}

interface PacienteUpdateData {
  nome?: string;
  email?: string;
  cpf?: string;
  telefone?: string;
  dataNascimento?: Date;
}

export const pacienteService = {
    async getAll() {
    return prisma.paciente.findMany({
      orderBy: { nome: "asc" },
    });
  },

  async getById(id: number) {
    const paciente = await prisma.paciente.findUnique({
      where: { id },
    });

    if (!paciente) throw new Error("Paciente não encontrado");
    return paciente;
  },

  async create(data: PacienteCreateData) {

    const paciente = await prisma.paciente.create({
      data: {
        ...data,
      },
    });

    return paciente;
  },

  async update(id: number, data: PacienteUpdateData) {
    
    const paciente = await prisma.paciente.findUnique({ where: { id } });
    if (!paciente) throw new Error("Paciente não encontrado para atualização");

    const updatedData: PacienteUpdateData = {};
    if (data.nome) updatedData.nome = data.nome;
    if (data.email) updatedData.email = data.email;
    if (data.cpf) updatedData.cpf = data.cpf;
    if (data.telefone) updatedData.telefone = data.telefone;
    if (data.dataNascimento) updatedData.dataNascimento = data.dataNascimento;


    const updated = await prisma.paciente.update({
      where: { id },
      data: updatedData,
    });

    return updated;
  },
  async remove(id: number) {
        const paciente = await prisma.paciente.findUnique({ where: { id } });
    if (!paciente) throw new Error("Paciente não encontrado para exclusão");
    await prisma.paciente.delete({ where: { id } });
    
    return { message: "Paciente excluído com sucesso" };
  },
};