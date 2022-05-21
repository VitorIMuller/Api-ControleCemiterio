import { Router } from "express";
import cadastroRouter from "./cadastroRouter.js";
import cadastroSepultadoRouter from "./cadastroSepultadoRouter.js";


const router = Router();


router.use(cadastroRouter)
router.use(cadastroSepultadoRouter)



export default router;