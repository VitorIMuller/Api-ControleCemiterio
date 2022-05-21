import joi from "joi";

export const cadastroSepultado = joi.object({
    idSepultura: joi.string().required(),
    nomeSepultado: joi.string().required(),
    dataNascimento: joi.string().required(),
    dataFalescimento: joi.string().required()
})