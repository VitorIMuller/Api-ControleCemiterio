/*
  Warnings:

  - You are about to drop the column `idSepultura` on the `sepultado` table. All the data in the column will be lost.
  - You are about to drop the `sepultadoTumulo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idTumulo` to the `sepultado` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sepultadoTumulo" DROP CONSTRAINT "sepultadoTumulo_idSepultado_fkey";

-- DropForeignKey
ALTER TABLE "sepultadoTumulo" DROP CONSTRAINT "sepultadoTumulo_idTumulo_fkey";

-- AlterTable
ALTER TABLE "sepultado" DROP COLUMN "idSepultura",
ADD COLUMN     "idTumulo" INTEGER NOT NULL;

-- DropTable
DROP TABLE "sepultadoTumulo";

-- AddForeignKey
ALTER TABLE "sepultado" ADD CONSTRAINT "sepultado_idTumulo_fkey" FOREIGN KEY ("idTumulo") REFERENCES "tumulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
