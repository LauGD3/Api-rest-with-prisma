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
exports.findOne = exports.deleteOne = exports.updateOne = exports.createOne = exports.findAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * This endponit will give you a json with all data of the table TipoUsuario in database.
 * @param req
 * @param res
 * @returns Code 404 if the table do not have any register
 *  or code 202 with the json of all TipoUsuario registers
 */
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipeUsers = yield prisma.tipoUsuario.findMany();
    if (tipeUsers.length <= 0) {
        return res.status(404).json({ message: 'Data not found' });
    }
    return res.status(202).json({ tipeUsers });
});
exports.findAll = findAll;
/**
 * This create one row of TipoUsuario table
 * @param req
 * @param res
 * @returns Code 201 when the register will done
 */
const createOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoUs = yield prisma.tipoUsuario.create({
        data: req.body
    });
    return res.status(201).json({ message: 'The data was crated successfully', tipoUs });
});
exports.createOne = createOne;
/**
 * This, update one register if exist
 * @param req
 * @param res
 * @returns Code 202 if the data is updated or 404 if the register do not exist.
 */
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findData = yield prisma.tipoUsuario.findUnique({
        where: {
            idTipoUsuario: parseInt(id)
        }
    });
    if (findData != null) {
        const update = yield prisma.tipoUsuario.update({
            where: {
                idTipoUsuario: parseInt(id)
            },
            data: req.body
        });
        return res.status(202).json({ message: 'The data was updated', update });
    }
    else {
        return res.status(404).json({ message: `Couldn't find data with id ${id}` });
    }
});
exports.updateOne = updateOne;
/**
 *
 * @param req
 * @param res
 * @returns Code 200 if the data is deleted or 404 if the register do not exist.
 */
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Verify if the data exist
    const findData = yield prisma.tipoUsuario.findUnique({
        where: {
            idTipoUsuario: parseInt(id)
        }
    });
    // Delete the data if exist
    if (findData != null) {
        const deleted = yield prisma.tipoUsuario.delete({
            where: {
                idTipoUsuario: parseInt(id)
            }
        });
        return res.status(200).json({ message: 'The data was deleted successfully' });
    }
    else {
        return res.status(404).json({ message: `Couldn't find data with id ${id}` });
    }
});
exports.deleteOne = deleteOne;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prisma.tipoUsuario.findUnique({
        where: {
            idTipoUsuario: parseInt(id)
        }
    });
    if (result != null) {
        return res.status(202).json({ result });
    }
    else {
        return res.status(404).json({ message: `Couldn't find data with id ${id}` });
    }
});
exports.findOne = findOne;
