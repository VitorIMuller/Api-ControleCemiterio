/*
  Warnings:

  - You are about to drop the column `Cpf` on the `tumulos` table. All the data in the column will be lost.
  - You are about to drop the column `tagTumulo` on the `tumulos` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `tumulos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `tumulos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSepultura` to the `tumulos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tumulos" DROP COLUMN "Cpf",
DROP COLUMN "tagTumulo",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "idSepultura" TEXT NOT NULL;
