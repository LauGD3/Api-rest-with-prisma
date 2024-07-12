"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioI = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const tipoUsuarioI = (id) => {
    const bool = prisma.tipoUsuario.findUnique({
        where: {
            idTipoUsuario: id
        },
    });
    const promise = new Promise((reject, resolve) => {
        if (bool != null) {
            reject(false);
        }
        else {
            resolve(true);
        }
    });
    return promise;
};
exports.tipoUsuarioI = tipoUsuarioI;
