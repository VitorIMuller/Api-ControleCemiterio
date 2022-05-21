import * as respositorie from "../Repositories/cadastroSepultadoRepositorie.js"

export async function registerSepultado(formData) {

    const { idSepultura, dataFalescimento, dataNascimento, nomeSepultado } = formData

    const findTumulo = await respositorie.findByTumuloName(idSepultura)
    if (!findTumulo) throw {
        type: 'Unauthorized',
        message: 'Tumulo não cadastrado'
    };
    const idTumulo = findTumulo.id

    const data = { idTumulo, dataFalescimento, dataNascimento, nomeSepultado }
    await respositorie.add(data)
}