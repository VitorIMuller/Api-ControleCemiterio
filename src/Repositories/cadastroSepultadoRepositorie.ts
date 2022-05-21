
import { prisma } from "../database.js";

export async function add(data) {

    await prisma.sepultado.create({
        data: data
    })
}


export async function findByTumuloName(idSepultura: string) {
    return await prisma.tumulos.findFirst({
        where: {
            idSepultura
        }
    })
}