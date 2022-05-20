import { Router } from "express";
import { novoCadastro } from "../Controllers/cadastroController.js";
import validateSchemamiddleware from "../Middlewares/validateSchemaMiddleweare.js";
import { cadastroSchema } from "../schemas/cadastroSchema.js";




const cadastroRouter = Router();


cadastroRouter.post("/cadastro", validateSchemamiddleware(cadastroSchema), novoCadastro)





export default cadastroRouter;