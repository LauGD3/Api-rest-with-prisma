import express from 'express';
import { tipoUsuarioFindAll, tipoUsuarioCreateOne } from '../controllers/TipoUsuario'

const router = express.Router();

router.get('/TipoUsuario/FindAll', tipoUsuarioFindAll);
router.post('/TipoUsuario/CreateOne', tipoUsuarioCreateOne);

export default router;

