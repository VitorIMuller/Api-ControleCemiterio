
import { prisma } from "../database.js";

export async function create(formData) {

    await prisma.tumulos.create({
        data: formData
    })
}

export async function findByTumuloName(idSepultura: string) {
    return await prisma.tumulos.findFirst({
        where: {
            idSepultura
        }
    })
}