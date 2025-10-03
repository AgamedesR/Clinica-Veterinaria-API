/*
  Warnings:

  - You are about to drop the column `dentistaId` on the `pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `secretarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `dentistas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `pacientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `secretarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dataHora` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `dentistas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `dentistas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `secretarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `secretarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `secretarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."pacientes" DROP CONSTRAINT "pacientes_dentistaId_fkey";

-- AlterTable
ALTER TABLE "consultas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "motivo" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "dentistas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" DROP COLUMN "dentistaId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataNascimento" DATE NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "telefone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "secretarios" DROP COLUMN "idade",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "dentistas_email_key" ON "dentistas"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_email_key" ON "pacientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "secretarios_email_key" ON "secretarios"("email");
