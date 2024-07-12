"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tipoUsuario_routes_1 = __importDefault(require("./routes/tipoUsuario.routes"));
const TipoDocumento_routes_1 = __importDefault(require("./routes/TipoDocumento.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`App running on port ${PORT}`); });
app.use(express_1.default.json());
app.use('/Api/TipoUsuario', tipoUsuario_routes_1.default);
app.use('/Api/TipoDocumento', TipoDocumento_routes_1.default);
