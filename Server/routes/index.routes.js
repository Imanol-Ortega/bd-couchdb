import {Router} from "express"
import { actualizar, borrar, insertar, listar, listarvarios } from "../controllers/index.controllers.js";

const router = Router();


router.get('/personas',listarvarios);
router.get('/personas/:key',listar);
router.post('/personas',insertar);
router.post('/personas/:id',actualizar);
router.delete('/personas/:id',borrar);

export default router;