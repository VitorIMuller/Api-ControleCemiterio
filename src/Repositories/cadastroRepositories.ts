
import { prisma } from "../database.js";

export async function create(formData) {

    await prisma.tumulos.create({
        data: formData
    })
}

export async function findByTumuloName(nomeResponsavel: string) {
    const data = await prisma.tumulos.findMany({
        where: {
            nomeResponsavel: {
                contains: nomeResponsavel
            }
        },
        include: {
            sepultado: true
        }
    })

    return data
}