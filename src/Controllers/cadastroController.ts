import { Request, Response } from "express";
import * as services from "../services/cadastroService.js"



export async function novoCadastro(req: Request, res: Response) {


    await services.createTumulo(req.body)

    res.sendStatus(201)
}

export async function consultaCadastro(req: Request, res: Response) {

    const tumulo = await services.getTumulo(req.body)

    res.send(tumulo).status(200)
}