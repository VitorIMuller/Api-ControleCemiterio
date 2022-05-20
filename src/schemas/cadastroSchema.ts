import joi from "joi";

export const cadastroSchema = joi.object({
    idSepultura: joi.string().required(),
    nomeResponsavel: joi.string().required(),
    endereco: joi.string().required(),
    numero: joi.string().allow(''),
    bairro: joi.string().required(),
    cidade: joi.string().required(),
    telefone: joi.string().allow(''),
    celular: joi.string().allow(''),
    email: joi.string().allow(''),
    cpf: joi.string().allow('')
})