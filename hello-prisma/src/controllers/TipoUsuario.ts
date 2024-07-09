import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const tipoUsuarioFindAll = async (req: Request, res: Response) => {
  const allTipeUsers = await prisma.tipoUsuario.findMany();

  if(allTipeUsers.length = 0) {
    return res.status(404).json({ mssage: 'The system cannot find any result' });
  } else {
    return res.status(201).json(allTipeUsers);
  }

}

export const tipoUsuarioCreateOne = async (req: Request, res: Response) => {
  const tipoUs = await prisma.tipoUsuario.create({
    data: req.body
  });

  res.status(201).json({message: 'The data was crated successfully', tipoUs});
}