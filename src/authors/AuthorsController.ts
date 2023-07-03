import { Request, Response } from "express";
import { prisma } from "../libs/prisma";

export class AuthorsController {

  async findAll(req: Request, res: Response) {
    res.json(await prisma.author.findMany());
  }

  async findOne(req: Request, res: Response) {
    res.json(await prisma.author.findUniqueOrThrow({
      where: {
        id: +req.params.id
      }
    }));
  }
}
