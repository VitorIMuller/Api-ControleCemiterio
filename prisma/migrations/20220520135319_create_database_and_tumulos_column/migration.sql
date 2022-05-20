-- CreateTable
CREATE TABLE "tumulos" (
    "id" SERIAL NOT NULL,
    "nomeReponsavel" TEXT NOT NULL,
    "Cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "tagTumulo" TEXT NOT NULL,

    CONSTRAINT "tumulos_pkey" PRIMARY KEY ("id")
);
