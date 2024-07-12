import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";

const prisma = new PrismaClient();

/**
 * This endponit will give you a json with all data of the table TipoDocumento in database.
 * @param req 
 * @param res 
 * @returns Code 404 if the table do not have any register
 *  or code 202 with the json of all TipoDocumento registers
 */
export const findAll = async (req: Request, res: Response) => {
  const tipeDocs = await prisma.tipoDocumento.findMany();
  
  if(tipeDocs.length <= 0) {
    return res.status(404).json({ message: 'Data not found' });
  }

  return res.status(202).json({ tipeDocs });
}
/**
 * This create one row of TipoDocumento table
 * @param req 
 * @param res 
 * @returns Code 201 when the register will done
 */
export const createOne = async (req: Request, res: Response) => {
  const tipoDoc = await prisma.tipoDocumento.create({
    data: req.body
  });

  return res.status(201).json({message: 'The data was crated successfully', tipoDoc});
}
/**
 * This, update one register if exist
 * @param req 
 * @param res 
 * @returns Code 202 if the data is updated or 404 if the register do not exist. 
 */
export const updateOne = async (req: Request, res: Response) => {  
  const { id } = req.params;

  const findData = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });

  if(findData != null) {
    const update = await prisma.tipoDocumento.update({
      where: {
        idTipoDocumento: parseInt(id)
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
  const findData = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });
  // Delete the data if exist
  if(findData != null) {
    const deleted = await prisma.tipoDocumento.delete({
      where: {
        idTipoDocumento: parseInt(id)
      }
    });
    return res.status(200).json({message: 'The data was deleted successfully' });   
  } else {
    return res.status(404).json({message: `Couldn't find data with id ${ id }` });   
  }
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });

  if(result != null) { 
    return res.status(202).json({ result });
  } else {
    return res.status(404).json({message: `Couldn't find data with id ${ id }` });   
  }
}
