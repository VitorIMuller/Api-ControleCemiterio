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

export async function getTumulo(formData) {
    const { nomeResponsavel } = formData

    const tumulo = await respositorie.findByTumuloName(nomeResponsavel)

    return tumulo
}

export async function atualizaTumulo(formData) {

    const { idSepultura } = formData

    const findTumulo = await respositorie.findByTumuloNameFormData(idSepultura);
    const { id } = findTumulo
    console.log(findTumulo)

    await respositorie.atualiza(id, formData)
}