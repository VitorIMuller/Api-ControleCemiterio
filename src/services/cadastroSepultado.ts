import * as respositorie from "../Repositories/cadastroSepultadoRepositorie.js"

export async function registerSepultado(formData) {

    const { idSepultura, dataFalescimento, dataNascimento, nomeSepultado } = formData

    const findTumulo = await respositorie.findByTumuloName(idSepultura)
    if (!findTumulo) throw {
        type: 'Unauthorized',
        message: 'Tumulo não cadastrado'
    };
    const findSepultado = await respositorie.findSepultado(nomeSepultado)
    if (findSepultado) throw {
        type: 'Conflict',
        message: 'Sepultado Já Cadastrado'
    };
    const idTumulo = findTumulo.id
    const data = { idTumulo, dataFalescimento, dataNascimento, nomeSepultado }
    await respositorie.add(data)
}

export async function deletarSepultado(params) {


    const { id } = params



    await respositorie.deleteSepultado(parseInt(id))
}