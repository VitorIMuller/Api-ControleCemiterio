import { Request, Response } from "express";
import * as services from "../services/cadastroService.js"



export async function novoCadastro(req: Request, res: Response) {


    await services.createTumulo(req.body)

    res.sendStatus(201)
}