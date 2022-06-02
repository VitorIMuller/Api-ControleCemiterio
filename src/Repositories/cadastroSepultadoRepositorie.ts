
import { prisma } from "../database.js";

export async function add(data) {

    await prisma.sepultado.create({
        data: data
    })
}


export async function findByTumuloName(idSepultura: string) {
    return await prisma.tumulos.findFirst({
        where: {
            idSepultura: idSepultura
        }
    })
}

export async function findSepultado(name: string) {
    return await prisma.sepultado.findFirst({
        where: {
            nomeSepultado: name
        }
    })
}

export async function deleteSepultado(id) {
    await prisma.sepultado.delete({
        where: {
            id: id
        }
    })
}