-- CreateTable
CREATE TABLE "sepultado" (
    "id" SERIAL NOT NULL,
    "idSepultura" TEXT NOT NULL,
    "nomeSepultado" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "dataFalescimento" TEXT NOT NULL,

    CONSTRAINT "sepultado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sepultadoTumulo" (
    "id" SERIAL NOT NULL,
    "idTumulo" INTEGER NOT NULL,
    "idSepultado" INTEGER NOT NULL,

    CONSTRAINT "sepultadoTumulo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sepultadoTumulo" ADD CONSTRAINT "sepultadoTumulo_idTumulo_fkey" FOREIGN KEY ("idTumulo") REFERENCES "tumulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sepultadoTumulo" ADD CONSTRAINT "sepultadoTumulo_idSepultado_fkey" FOREIGN KEY ("idSepultado") REFERENCES "sepultado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
