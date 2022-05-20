
import { prisma } from "../database.js";

export async function create(formData) {

    await prisma.tumulos.create({
        data: formData
    })
}