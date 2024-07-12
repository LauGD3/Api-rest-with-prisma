import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";

const prisma = new PrismaClient();

/**
 * This endponit will give you a json with all data of the table TipoUsuario in database.
 * @param req 
 * @param res 
 * @returns Code 404 if the table do not have any register
 *  or code 202 with the json of all TipoUsuario registers
 */
export const findAll = async (req: Request, res: Response) => {
  const tipeUsers = await prisma.tipoUsuario.findMany();
  
  if(tipeUsers.length <= 0) {
    return res.status(404).json({ message: 'Data not found' });
  }

  return res.status(202).json({ tipeUsers });
}
/**
 * This create one row of TipoUsuario table
 * @param req 
 * @param res 
 * @returns Code 201 when the register will done
 */
export const createOne = async (req: Request, res: Response) => {
  const tipoUs = await prisma.tipoUsuario.create({
    data: req.body
  });

  return res.status(201).json({message: 'The data was crated successfully', tipoUs});
}
/**
 * This, update one register if exist
 * @param req 
 * @param res 
 * @returns Code 202 if the data is updated or 404 if the register do not exist. 
 */
export const updateOne = async (req: Request, res: Response) => {  
  const { id } = req.params;

  const findData = await prisma.tipoUsuario.findUnique({
    where: {
      idTipoUsuario: parseInt(id)
    }
  });

  if(findData != null) {
    const update = await prisma.tipoUsuario.update({
      where: {
        idTipoUsuario: parseInt(id)
      },
      data: req.body
    });    

    return res.status(202).json({message: 'The data was updated', update});  
  } else {
    return res.status(404).json({message: `Couldn't find data with id ${ id }` });    
  }  
}
/**
 * 
 * @param req 
 * @param res 
 * @returns Code 200 if the data is deleted or 404 if the register do not exist. 
 */
export const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  // Verify if the data exist
  const findData = await prisma.tipoUsuario.findUnique({
    where: {
      idTipoUsuario: parseInt(id)
    }
  });
  // Delete the data if exist
  if(findData != null) {
    const deleted = await prisma.tipoUsuario.delete({
      where: {
        idTipoUsuario: parseInt(id)
      }
    });
    return res.status(200).json({message: 'The data was deleted successfully' });   
  } else {
    return res.status(404).json({message: `Couldn't find data with id ${ id }` });   
  }
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await prisma.tipoUsuario.findUnique({
    where: {
      idTipoUsuario: parseInt(id)
    }
  });

  if(result != null) { 
    return res.status(202).json({ result });
  } else {
    return res.status(404).json({message: `Couldn't find data with id ${ id }` });   
  }
}
