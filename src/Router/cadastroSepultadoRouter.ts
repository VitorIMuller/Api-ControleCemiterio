import { Router } from "express";
import { deletarSepultado, novoSepultado } from "../Controllers/cadastroSepultado.js";
import validateSchemamiddleware from "../Middlewares/validateSchemaMiddleweare.js";
import { cadastroSepultado } from "../schemas/cadastroSepultado.js";




const cadastroSepultadoRouter = Router();


cadastroSepultadoRouter.post("/cadastroSepultado", validateSchemamiddleware(cadastroSepultado), novoSepultado)
cadastroSepultadoRouter.delete("/deletarSepultado/:id", deletarSepultado)




export default cadastroSepultadoRouter;