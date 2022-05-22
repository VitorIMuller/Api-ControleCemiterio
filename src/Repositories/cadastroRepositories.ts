
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

export async function findByTumuloNameFormData(id) {
    const data = await prisma.tumulos.findFirst({
        where: {
            idSepultura: id
        }
    })

    return data
}

export async function atualiza(id, formData) {

    await prisma.tumulos.update({
        where: {
            id: id
        },

        data: formData
    })
}