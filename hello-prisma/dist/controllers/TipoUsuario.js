"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioCreateOne = exports.tipoUsuarioFindAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const tipoUsuarioFindAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allTipeUsers = yield prisma.tipoUsuario.findMany();
    if (allTipeUsers.length = 0) {
        return res.status(404).json({ mssage: 'The system cannot find any result' });
    }
    else {
        return res.status(201).json(allTipeUsers);
    }
});
exports.tipoUsuarioFindAll = tipoUsuarioFindAll;
const tipoUsuarioCreateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoUs = yield prisma.tipoUsuario.create({
        data: req.body
    });
    res.status(201).json({ message: 'The data was crated successfully', tipoUs });
});
exports.tipoUsuarioCreateOne = tipoUsuarioCreateOne;
