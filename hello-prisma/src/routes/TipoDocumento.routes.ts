import express from 'express';
import { createOne, deleteOne, findAll, findOne, updateOne } from '../controllers/TipoDocumento'

const router = express.Router();

router.get('/FindAll', findAll);
router.get('/FindOne/:id', findOne);
router.post('/CreateOne', createOne);
router.put('/UpdateOne/:id', updateOne);
router.delete('/DeleteOne/:id', deleteOne);

export default router;