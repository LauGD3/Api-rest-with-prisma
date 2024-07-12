"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TipoDocumento_1 = require("../controllers/TipoDocumento");
const router = express_1.default.Router();
router.get('/FindAll', TipoDocumento_1.findAll);
router.get('/FindOne/:id', TipoDocumento_1.findOne);
router.post('/CreateOne', TipoDocumento_1.createOne);
router.put('/UpdateOne/:id', TipoDocumento_1.updateOne);
router.delete('/DeleteOne/:id', TipoDocumento_1.deleteOne);
exports.default = router;
