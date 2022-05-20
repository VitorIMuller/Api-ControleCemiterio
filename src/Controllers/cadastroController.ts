import { Request, Response } from "express";

export default function novoCadastro(req: Request, res: Response) {
    console.log(req.body)

    res.sendStatus(200)
}