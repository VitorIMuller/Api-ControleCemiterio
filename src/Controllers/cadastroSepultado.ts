import { Request, Response } from "express";
import * as services from "../services/cadastroSepultado.js"



export async function novoSepultado(req: Request, res: Response) {


    await services.registerSepultado(req.body)

    res.sendStatus(201)
}