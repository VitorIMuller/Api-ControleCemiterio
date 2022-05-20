import * as respositorie from "../Repositories/cadastroRepositories.js"


export async function createTumulo(formData) {

    const { idSepultura } = formData

    const findTumulo = await respositorie.findByTumuloName(idSepultura);
    if (findTumulo) throw {
        type: "Conflict",
        message: "Tumulo já cadastrado!"
    }


    await respositorie.create(formData)
}