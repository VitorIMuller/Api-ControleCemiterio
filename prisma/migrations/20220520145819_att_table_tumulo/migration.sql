/*
  Warnings:

  - You are about to drop the column `nomeReponsavel` on the `tumulos` table. All the data in the column will be lost.
  - Added the required column `nomeResponsavel` to the `tumulos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tumulos" DROP COLUMN "nomeReponsavel",
ADD COLUMN     "nomeResponsavel" TEXT NOT NULL;
