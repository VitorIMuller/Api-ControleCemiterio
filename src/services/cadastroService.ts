import * as respositorie from "../Repositories/cadastroRepositories.js"


export async function createTumulo(formData) {

    await respositorie.create(formData)
}