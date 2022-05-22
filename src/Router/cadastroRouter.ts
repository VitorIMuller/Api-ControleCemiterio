import { Router } from "express";
import { consultaCadastro, novoCadastro } from "../Controllers/cadastroController.js";
import validateSchemamiddleware from "../Middlewares/validateSchemaMiddleweare.js";
import { cadastroSchema } from "../schemas/cadastroSchema.js";




const cadastroRouter = Router();


cadastroRouter.post("/cadastro", validateSchemamiddleware(cadastroSchema), novoCadastro)
cadastroRouter.get("/consultaCadastro", consultaCadastro)




export default cadastroRouter;